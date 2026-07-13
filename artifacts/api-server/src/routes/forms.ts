import { Router, type IRouter } from "express";
import { z } from "zod";
import crypto from "crypto";
import { logger } from "../lib/logger";

const router: IRouter = Router();

// ─── In-memory rate limiting (per IP) ────────────────────────────────────────
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1_000; // 1 minute
const RATE_LIMIT_MAX = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count++;
  return true;
}

// ─── In-memory deduplication (email + type, 5-min window) ────────────────────
const recentSubmissions = new Map<string, number>();
const DEDUP_WINDOW_MS = 5 * 60 * 1_000;

function isDuplicate(email: string, type: string): boolean {
  const hash = crypto
    .createHash("sha256")
    .update(`${email.toLowerCase().trim()}:${type}`)
    .digest("hex");
  const now = Date.now();
  const last = recentSubmissions.get(hash);
  if (last !== undefined && now - last < DEDUP_WINDOW_MS) return true;
  recentSubmissions.set(hash, now);
  return false;
}

// Periodic cleanup
setInterval(
  () => {
    const now = Date.now();
    for (const [k, t] of recentSubmissions) {
      if (now - t > DEDUP_WINDOW_MS) recentSubmissions.delete(k);
    }
    for (const [k, e] of rateLimitMap) {
      if (now > e.resetAt) rateLimitMap.delete(k);
    }
  },
  10 * 60 * 1_000,
);

// ─── Resend (optional) ───────────────────────────────────────────────────────
let sendEmail: (opts: {
  to: string;
  subject: string;
  text: string;
}) => Promise<void> = async (opts) => {
  logger.info(
    { to: opts.to, subject: opts.subject },
    "Email delivery not configured — logged only",
  );
};

(async () => {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "noreply@ecoarbitrage.example";

  if (apiKey && toEmail) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);
      sendEmail = async (opts) => {
        const result = await resend.emails.send({
          from: fromEmail,
          to: toEmail,
          subject: opts.subject,
          text: opts.text,
        });
        if (result.error) {
          throw new Error(result.error.message);
        }
      };
      logger.info("Resend email delivery configured");
    } catch (err) {
      logger.warn({ err }, "Could not initialise Resend — falling back to log");
    }
  } else {
    logger.info(
      "RESEND_API_KEY or CONTACT_TO_EMAIL not set — form submissions will be logged only",
    );
  }
})();

// ─── Schemas ─────────────────────────────────────────────────────────────────

const ContactSchema = z.object({
  fullName: z.string().min(2).max(100),
  workEmail: z.string().email().max(254),
  company: z.string().min(2).max(150),
  inquiryType: z.enum([
    "Design-partner pilot",
    "Funder research",
    "Implementation partnership",
    "Evaluation or methodology",
    "Investment",
    "Accelerator",
    "Careers",
    "Media",
    "General",
  ]),
  message: z.string().min(20).max(2000),
  website: z
    .string()
    .url()
    .optional()
    .or(z.literal(""))
    .transform((v) => v ?? ""),
  privacyConsent: z.literal(true),
  botField: z.string().max(0).optional().default(""),
  // UTM attribution
  utmSource: z.string().max(200).optional(),
  utmMedium: z.string().max(200).optional(),
  utmCampaign: z.string().max(200).optional(),
  referrer: z.string().max(500).optional(),
});

const ApplySchema = z.object({
  fullName: z.string().min(2).max(100),
  workEmail: z.string().email().max(254),
  organization: z.string().min(2).max(150),
  organizationWebsite: z
    .string()
    .url()
    .optional()
    .or(z.literal(""))
    .transform((v) => v ?? ""),
  role: z.string().min(2).max(200),
  organizationType: z.enum([
    "Private foundation",
    "Corporate foundation",
    "Funder collaborative",
    "International NGO",
    "Public grant program",
    "Corporate community-investment team",
    "Evaluation or implementation partner",
    "Other",
  ]),
  organizationTypeOther: z.string().max(200).optional(),
  primaryGeography: z.string().min(2).max(200),
  projectGeographies: z.string().min(2).max(500),
  annualGrantBudget: z.enum([
    "Under €500K",
    "€500K–€1M",
    "€1M–€5M",
    "€5M–€20M",
    "More than €20M",
    "Prefer not to say",
  ]),
  activeGrantCount: z.enum([
    "1–4",
    "5–10",
    "11–25",
    "26–50",
    "51–100",
    "More than 100",
  ]),
  currentWorkflow: z.string().min(20).max(1000),
  evidenceProblem: z.string().min(20).max(1000),
  existingTools: z.string().max(500).optional(),
  budgetReadiness: z.enum([
    "We have an approved pilot budget",
    "We can seek approval for a defined pilot",
    "We are researching future options",
    "We do not currently have budget",
  ]),
  linkedinProfile: z
    .string()
    .url()
    .optional()
    .or(z.literal(""))
    .transform((v) => v ?? ""),
  additionalContext: z.string().max(2000).optional(),
  botField: z.string().max(0).optional().default(""),
  privacyConsent: z.literal(true),
  // UTM attribution
  utmSource: z.string().max(200).optional(),
  utmMedium: z.string().max(200).optional(),
  utmCampaign: z.string().max(200).optional(),
  referrer: z.string().max(500).optional(),
});

// ─── POST /contact ────────────────────────────────────────────────────────────

router.post("/contact", async (req, res): Promise<void> => {
  const ip = (req.ip ?? req.socket?.remoteAddress ?? "unknown").replace(
    /^::ffff:/,
    "",
  );

  if (!checkRateLimit(ip)) {
    res
      .status(429)
      .json({ error: "Too many requests. Please try again later." });
    return;
  }

  const parsed = ContactSchema.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn({ issues: parsed.error.issues }, "Contact validation failed");
    res
      .status(400)
      .json({ error: "Please check your submission and try again." });
    return;
  }

  const data = parsed.data;

  // Honeypot check — silently succeed to defeat bots
  if (data.botField && data.botField.length > 0) {
    res.json({ success: true });
    return;
  }

  // Deduplication
  if (isDuplicate(data.workEmail, "contact")) {
    res.json({ success: true });
    return;
  }

  const lines = [
    `Name: ${data.fullName}`,
    `Email: ${data.workEmail}`,
    `Company: ${data.company}`,
    `Inquiry: ${data.inquiryType}`,
    ``,
    `Message:`,
    data.message,
    ``,
    data.website ? `Website: ${data.website}` : "",
    data.utmSource ? `UTM source: ${data.utmSource}` : "",
    data.utmMedium ? `UTM medium: ${data.utmMedium}` : "",
    data.utmCampaign ? `UTM campaign: ${data.utmCampaign}` : "",
    data.referrer ? `Referrer: ${data.referrer}` : "",
  ].filter(Boolean);

  try {
    await sendEmail({
      to: process.env.CONTACT_TO_EMAIL ?? "",
      subject: `EcoArbitrage contact: ${data.inquiryType} from ${data.fullName}`,
      text: lines.join("\n"),
    });
  } catch (err) {
    req.log.error({ err }, "Failed to send contact email");
    res.status(500).json({
      error: "We could not send your message. Please try again.",
    });
    return;
  }

  req.log.info(
    { name: data.fullName, type: data.inquiryType },
    "Contact form submitted",
  );
  res.json({ success: true });
});

// ─── POST /apply ──────────────────────────────────────────────────────────────

router.post("/apply", async (req, res): Promise<void> => {
  const ip = (req.ip ?? req.socket?.remoteAddress ?? "unknown").replace(
    /^::ffff:/,
    "",
  );

  if (!checkRateLimit(ip)) {
    res
      .status(429)
      .json({ error: "Too many requests. Please try again later." });
    return;
  }

  const parsed = ApplySchema.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn(
      { issues: parsed.error.issues },
      "Application validation failed",
    );
    res
      .status(400)
      .json({ error: "Please check your submission and try again." });
    return;
  }

  const data = parsed.data;

  // Honeypot
  if (data.botField && data.botField.length > 0) {
    res.json({ success: true });
    return;
  }

  // Deduplication
  if (isDuplicate(data.workEmail, "apply")) {
    res.json({ success: true });
    return;
  }

  const lines = [
    `=== Design-Partner Application ===`,
    ``,
    `Contact`,
    `  Name: ${data.fullName}`,
    `  Email: ${data.workEmail}`,
    `  Role: ${data.role}`,
    `  Organization: ${data.organization}`,
    `  Type: ${data.organizationType}${data.organizationTypeOther ? ` (${data.organizationTypeOther})` : ""}`,
    data.organizationWebsite ? `  Website: ${data.organizationWebsite}` : "",
    data.linkedinProfile ? `  LinkedIn: ${data.linkedinProfile}` : "",
    ``,
    `Portfolio`,
    `  Primary geography: ${data.primaryGeography}`,
    `  Project geographies: ${data.projectGeographies}`,
    `  Annual grant budget: ${data.annualGrantBudget}`,
    `  Active relevant grants: ${data.activeGrantCount}`,
    data.existingTools ? `  Existing tools: ${data.existingTools}` : "",
    ``,
    `Pilot readiness: ${data.budgetReadiness}`,
    ``,
    `Current workflow:`,
    data.currentWorkflow,
    ``,
    `Evidence or milestone problem:`,
    data.evidenceProblem,
    ``,
    data.additionalContext ? `Additional context:\n${data.additionalContext}` : "",
    ``,
    data.utmSource ? `UTM source: ${data.utmSource}` : "",
    data.utmMedium ? `UTM medium: ${data.utmMedium}` : "",
    data.utmCampaign ? `UTM campaign: ${data.utmCampaign}` : "",
    data.referrer ? `Referrer: ${data.referrer}` : "",
  ].filter(Boolean);

  try {
    await sendEmail({
      to: process.env.CONTACT_TO_EMAIL ?? "",
      subject: `EcoArbitrage pilot application: ${data.organization} — ${data.budgetReadiness}`,
      text: lines.join("\n"),
    });
  } catch (err) {
    req.log.error({ err }, "Failed to send application email");
    res.status(500).json({
      error:
        "We could not submit the application. No pilot has been created. Please try again.",
    });
    return;
  }

  req.log.info(
    { name: data.fullName, org: data.organization },
    "Design-partner application submitted",
  );
  res.json({ success: true });
});

export default router;
