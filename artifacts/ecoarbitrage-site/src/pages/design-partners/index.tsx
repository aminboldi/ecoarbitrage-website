import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useSeoMeta } from '@/lib/useSeoMeta';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';
import { fadeUp } from '@/lib/animations';

const applySchema = z.object({
  fullName: z.string().min(2, "Name required").max(100),
  workEmail: z.string().email("Valid work email required").max(254),
  organization: z.string().min(2, "Organization required").max(150),
  organizationWebsite: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  role: z.string().min(2, "Role required").max(200),
  organizationType: z.enum([
    "Private foundation","Corporate foundation","Funder collaborative",
    "International NGO","Public grant program","Corporate community-investment team",
    "Evaluation or implementation partner","Other"
  ], { errorMap: () => ({ message: "Select organization type" }) }),
  organizationTypeOther: z.string().max(200).optional(),
  primaryGeography: z.string().min(2, "Required").max(200),
  projectGeographies: z.string().min(2, "Required").max(500),
  annualGrantBudget: z.enum([
    "Under €500K","€500K–€1M","€1M–€5M","€5M–€20M","More than €20M","Prefer not to say"
  ], { errorMap: () => ({ message: "Select budget" }) }),
  activeGrantCount: z.enum([
    "1–4","5–10","11–25","26–50","51–100","More than 100"
  ], { errorMap: () => ({ message: "Select grant count" }) }),
  currentWorkflow: z.string().min(20, "Please describe your current workflow (20+ characters)").max(1000),
  evidenceProblem: z.string().min(20, "Please describe your evidence challenge (20+ characters)").max(1000),
  existingTools: z.string().max(500).optional(),
  budgetReadiness: z.enum([
    "We have an approved pilot budget","We can seek approval for a defined pilot",
    "We are researching future options","We do not currently have budget"
  ], { errorMap: () => ({ message: "Select readiness" }) }),
  linkedinProfile: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  additionalContext: z.string().max(2000).optional(),
  botField: z.string().max(0).optional(),
  privacyConsent: z.literal(true, { errorMap: () => ({ message: "You must accept the privacy notice to proceed." }) }),
});

type ApplyFormValues = z.infer<typeof applySchema>;

export default function DesignPartners() {
  useSeoMeta("Climate Grant Design-Partner Pilot | EcoArbitrage", "Apply to co-design the EcoArbitrage evidence workflow for your climate grant portfolio.");

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const { register, handleSubmit, watch, formState: { errors } } = useForm<ApplyFormValues>({
    resolver: zodResolver(applySchema),
    defaultValues: { botField: "" }
  });

  const watchOrgType = watch("organizationType");

  const onSubmit = async (data: ApplyFormValues) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error("Failed to submit");
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="w-full pb-24">
      {/* Hero */}
      <section className="bg-[#152025] text-[#F8F5ED] pt-24 pb-32 px-6 relative overflow-hidden">
        {/* Background image */}
        <img
          src="/images/local-partners.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#152025]/80 via-[#152025]/85 to-[#152025]" />
        <motion.div 
          className="max-w-4xl mx-auto text-center relative z-10"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#A9F00F] mb-6">
            Selected pilot program
          </span>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-8 tracking-tight">
            Shape the evidence workflow for climate grant portfolios
          </h1>
          <p className="text-lg md:text-xl text-[#F8F5ED]/80 leading-relaxed mb-12 max-w-3xl mx-auto">
            EcoArbitrage is recruiting a small number of environmental foundations and climate grant programs to co-design the evidence workflow. Participants influence how the product handles their real decision problems.
          </p>
          <a 
            href="#application-form" 
            className="inline-flex items-center justify-center rounded-[10px] bg-[#F8F5ED] px-8 py-4 text-lg font-medium text-[#152025] hover:bg-white transition-colors"
            data-testid="button-apply-scroll"
          >
            Apply below ↓
          </a>
        </motion.div>
      </section>

      {/* Eligibility */}
      <section className="bg-[#F8F5ED] py-24 px-6 border-b border-[#E8E2D2]">
        <motion.div 
          className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div>
            <h2 className="font-serif text-3xl text-[#152025] mb-8">Who should apply</h2>
            <ul className="space-y-4">
              {[
                "Has live climate or nature grants",
                "Can involve a budget owner",
                "Can introduce implementing partners",
                "Can share anonymized workflow documents",
                "Wants to improve a real decision process",
                "Can commit staff time",
                "Is prepared to discuss a paid pilot"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4F7D5B] shrink-0 mt-0.5" />
                  <span className="text-[#19211E]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-[#152025] mb-8">Who should not apply</h2>
            <ul className="space-y-4">
              {[
                "Organizations without active grant portfolios",
                "Organizations seeking general impact measurement",
                "Organizations whose primary need is met by a grant-management platform"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-[#A95749] shrink-0 mt-0.5" />
                  <span className="text-[#19211E]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* What participants receive & Scope */}
      <section className="bg-white py-24 px-6">
        <motion.div 
          className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div>
            <h2 className="font-serif text-3xl text-[#152025] mb-8">What participants receive</h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {[
                "Structured diagnostic", "Pilot configuration", "Implementation support", 
                "Documented findings", "Influence over early product design", "Agreed confidentiality"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#547808]"></div>
                  <span className="text-[#5E6964] text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-[#F1ECE0] p-8 rounded-[12px] border border-[#E8E2D2]">
            <h2 className="font-serif text-2xl text-[#152025] mb-6">Pilot scope</h2>
            <ul className="space-y-4 text-[#19211E] font-medium">
              <li>• 5–10 active grants</li>
              <li>• One program or portfolio</li>
              <li>• One reporting/milestone cycle</li>
              <li>• Approximately 10–12 weeks</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="bg-white py-24 px-6">
        <motion.div 
          className="max-w-3xl mx-auto bg-[#F8F5ED] rounded-[16px] border border-[#E8E2D2] shadow-sm p-8 md:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className="mb-10 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-[#152025] mb-4">Pilot Application</h2>
            <p className="text-[#5E6964]">We will assess whether your portfolio, timing, and data requirements fit the current pilot scope.</p>
          </div>

          {status === 'success' ? (
            <div className="text-center py-12 bg-white rounded-[12px] p-8 border border-[#E8E2D2]">
              <div className="w-16 h-16 bg-[#4F7D5B]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-[#4F7D5B]" />
              </div>
              <h3 className="text-2xl font-serif text-[#152025] mb-4">Thank you for applying.</h3>
              <p className="text-[#5E6964] leading-relaxed">
                We will assess whether your portfolio, timing, decision process, and data requirements fit the current pilot scope. A submission does not create a partnership, guarantee acceptance, or commit either party to a contract.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {status === 'error' && (
                <div className="p-4 bg-[#A95749]/10 border border-[#A95749]/20 rounded-[8px] text-[#A95749] text-sm">
                  We could not submit the application. No pilot has been created. Please review the form or contact us by email.
                </div>
              )}
              
              <input type="text" {...register("botField")} className="absolute left-[-9999px] w-[1px] h-[1px] opacity-0 overflow-hidden" tabIndex={-1} aria-hidden="true" />

              {/* Applicant Details */}
              <div className="space-y-6">
                <h3 className="text-lg font-serif font-medium text-[#152025] border-b border-[#E8E2D2] pb-2">Applicant Details</h3>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#19211E]">Full Name <span className="text-[#A9F00F]">*</span></label>
                    <input {...register("fullName")} className="w-full bg-white border border-[#E8E2D2] rounded-[8px] px-4 py-2.5 text-[#19211E] focus:outline-none focus:ring-2 focus:ring-[#547808]" />
                    {errors.fullName && <p className="text-[#A95749] text-xs">{errors.fullName.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#19211E]">Work Email <span className="text-[#A9F00F]">*</span></label>
                    <input type="email" {...register("workEmail")} className="w-full bg-white border border-[#E8E2D2] rounded-[8px] px-4 py-2.5 text-[#19211E] focus:outline-none focus:ring-2 focus:ring-[#547808]" />
                    {errors.workEmail && <p className="text-[#A95749] text-xs">{errors.workEmail.message}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#19211E]">Role / Title <span className="text-[#A9F00F]">*</span></label>
                    <input {...register("role")} className="w-full bg-white border border-[#E8E2D2] rounded-[8px] px-4 py-2.5 text-[#19211E] focus:outline-none focus:ring-2 focus:ring-[#547808]" />
                    {errors.role && <p className="text-[#A95749] text-xs">{errors.role.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#19211E]">LinkedIn Profile <span className="text-[#5E6964] font-normal">(Optional)</span></label>
                    <input {...register("linkedinProfile")} className="w-full bg-white border border-[#E8E2D2] rounded-[8px] px-4 py-2.5 text-[#19211E] focus:outline-none focus:ring-2 focus:ring-[#547808]" />
                    {errors.linkedinProfile && <p className="text-[#A95749] text-xs">{errors.linkedinProfile.message}</p>}
                  </div>
                </div>
              </div>

              {/* Organization Details */}
              <div className="space-y-6">
                <h3 className="text-lg font-serif font-medium text-[#152025] border-b border-[#E8E2D2] pb-2">Organization Details</h3>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#19211E]">Organization Name <span className="text-[#A9F00F]">*</span></label>
                    <input {...register("organization")} className="w-full bg-white border border-[#E8E2D2] rounded-[8px] px-4 py-2.5 text-[#19211E] focus:outline-none focus:ring-2 focus:ring-[#547808]" />
                    {errors.organization && <p className="text-[#A95749] text-xs">{errors.organization.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#19211E]">Website <span className="text-[#5E6964] font-normal">(Optional)</span></label>
                    <input {...register("organizationWebsite")} className="w-full bg-white border border-[#E8E2D2] rounded-[8px] px-4 py-2.5 text-[#19211E] focus:outline-none focus:ring-2 focus:ring-[#547808]" />
                    {errors.organizationWebsite && <p className="text-[#A95749] text-xs">{errors.organizationWebsite.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#19211E]">Organization Type <span className="text-[#A9F00F]">*</span></label>
                  <select {...register("organizationType")} className="w-full bg-white border border-[#E8E2D2] rounded-[8px] px-4 py-2.5 text-[#19211E] focus:outline-none focus:ring-2 focus:ring-[#547808]">
                    <option value="">Select type...</option>
                    <option value="Private foundation">Private foundation</option>
                    <option value="Corporate foundation">Corporate foundation</option>
                    <option value="Funder collaborative">Funder collaborative</option>
                    <option value="International NGO">International NGO</option>
                    <option value="Public grant program">Public grant program</option>
                    <option value="Corporate community-investment team">Corporate community-investment team</option>
                    <option value="Evaluation or implementation partner">Evaluation or implementation partner</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.organizationType && <p className="text-[#A95749] text-xs">{errors.organizationType.message}</p>}
                </div>
                
                {watchOrgType === "Other" && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#19211E]">Please specify <span className="text-[#A9F00F]">*</span></label>
                    <input {...register("organizationTypeOther")} className="w-full bg-white border border-[#E8E2D2] rounded-[8px] px-4 py-2.5 text-[#19211E] focus:outline-none focus:ring-2 focus:ring-[#547808]" />
                  </div>
                )}
              </div>

              {/* Portfolio Scope */}
              <div className="space-y-6">
                <h3 className="text-lg font-serif font-medium text-[#152025] border-b border-[#E8E2D2] pb-2">Portfolio Scope</h3>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#19211E]">Primary HQ Geography <span className="text-[#A9F00F]">*</span></label>
                    <input {...register("primaryGeography")} placeholder="e.g. Germany" className="w-full bg-white border border-[#E8E2D2] rounded-[8px] px-4 py-2.5 text-[#19211E] focus:outline-none focus:ring-2 focus:ring-[#547808]" />
                    {errors.primaryGeography && <p className="text-[#A95749] text-xs">{errors.primaryGeography.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#19211E]">Project Geographies <span className="text-[#A9F00F]">*</span></label>
                    <input {...register("projectGeographies")} placeholder="e.g. Sub-Saharan Africa, LatAm" className="w-full bg-white border border-[#E8E2D2] rounded-[8px] px-4 py-2.5 text-[#19211E] focus:outline-none focus:ring-2 focus:ring-[#547808]" />
                    {errors.projectGeographies && <p className="text-[#A95749] text-xs">{errors.projectGeographies.message}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#19211E]">Annual Grant Budget <span className="text-[#A9F00F]">*</span></label>
                    <select {...register("annualGrantBudget")} className="w-full bg-white border border-[#E8E2D2] rounded-[8px] px-4 py-2.5 text-[#19211E] focus:outline-none focus:ring-2 focus:ring-[#547808]">
                      <option value="">Select budget...</option>
                      <option value="Under €500K">Under €500K</option>
                      <option value="€500K–€1M">€500K–€1M</option>
                      <option value="€1M–€5M">€1M–€5M</option>
                      <option value="€5M–€20M">€5M–€20M</option>
                      <option value="More than €20M">More than €20M</option>
                      <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                    {errors.annualGrantBudget && <p className="text-[#A95749] text-xs">{errors.annualGrantBudget.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#19211E]">Active Grant Count <span className="text-[#A9F00F]">*</span></label>
                    <select {...register("activeGrantCount")} className="w-full bg-white border border-[#E8E2D2] rounded-[8px] px-4 py-2.5 text-[#19211E] focus:outline-none focus:ring-2 focus:ring-[#547808]">
                      <option value="">Select count...</option>
                      <option value="1–4">1–4</option>
                      <option value="5–10">5–10</option>
                      <option value="11–25">11–25</option>
                      <option value="26–50">26–50</option>
                      <option value="51–100">51–100</option>
                      <option value="More than 100">More than 100</option>
                    </select>
                    {errors.activeGrantCount && <p className="text-[#A95749] text-xs">{errors.activeGrantCount.message}</p>}
                  </div>
                </div>
              </div>

              {/* Workflow Details */}
              <div className="space-y-6">
                <h3 className="text-lg font-serif font-medium text-[#152025] border-b border-[#E8E2D2] pb-2">Workflow & Need</h3>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#19211E]">Current Workflow <span className="text-[#A9F00F]">*</span></label>
                  <p className="text-xs text-[#5E6964] mb-1">How do you currently connect milestone reports to funding decisions?</p>
                  <textarea {...register("currentWorkflow")} rows={3} className="w-full bg-white border border-[#E8E2D2] rounded-[8px] px-4 py-3 text-[#19211E] focus:outline-none focus:ring-2 focus:ring-[#547808]"></textarea>
                  {errors.currentWorkflow && <p className="text-[#A95749] text-xs">{errors.currentWorkflow.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#19211E]">Core Evidence Problem <span className="text-[#A9F00F]">*</span></label>
                  <p className="text-xs text-[#5E6964] mb-1">What friction point made you seek this out?</p>
                  <textarea {...register("evidenceProblem")} rows={3} className="w-full bg-white border border-[#E8E2D2] rounded-[8px] px-4 py-3 text-[#19211E] focus:outline-none focus:ring-2 focus:ring-[#547808]"></textarea>
                  {errors.evidenceProblem && <p className="text-[#A95749] text-xs">{errors.evidenceProblem.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#19211E]">Existing Tools <span className="text-[#5E6964] font-normal">(Optional)</span></label>
                  <p className="text-xs text-[#5E6964] mb-1">What grant-management or reporting tools do you already use?</p>
                  <input {...register("existingTools")} className="w-full bg-white border border-[#E8E2D2] rounded-[8px] px-4 py-2.5 text-[#19211E] focus:outline-none focus:ring-2 focus:ring-[#547808]" />
                </div>
              </div>

              {/* Logistics */}
              <div className="space-y-6">
                <h3 className="text-lg font-serif font-medium text-[#152025] border-b border-[#E8E2D2] pb-2">Logistics</h3>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#19211E]">Pilot Budget Readiness <span className="text-[#A9F00F]">*</span></label>
                  <select {...register("budgetReadiness")} className="w-full bg-white border border-[#E8E2D2] rounded-[8px] px-4 py-2.5 text-[#19211E] focus:outline-none focus:ring-2 focus:ring-[#547808]">
                    <option value="">Select readiness...</option>
                    <option value="We have an approved pilot budget">We have an approved pilot budget</option>
                    <option value="We can seek approval for a defined pilot">We can seek approval for a defined pilot</option>
                    <option value="We are researching future options">We are researching future options</option>
                    <option value="We do not currently have budget">We do not currently have budget</option>
                  </select>
                  {errors.budgetReadiness && <p className="text-[#A95749] text-xs">{errors.budgetReadiness.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#19211E]">Additional Context <span className="text-[#5E6964] font-normal">(Optional)</span></label>
                  <textarea {...register("additionalContext")} rows={3} className="w-full bg-white border border-[#E8E2D2] rounded-[8px] px-4 py-3 text-[#19211E] focus:outline-none focus:ring-2 focus:ring-[#547808]"></textarea>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#E8E2D2]">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center pt-0.5">
                    <input type="checkbox" {...register("privacyConsent")} className="w-5 h-5 rounded-[4px] border-[#E8E2D2] text-[#547808] focus:ring-[#547808] bg-white cursor-pointer" />
                  </div>
                  <span className="text-sm text-[#5E6964] leading-relaxed">
                    By submitting this form, you authorize EcoArbitrage to use the information to evaluate your inquiry, contact you about the proposed pilot, and manage the resulting business relationship. Do not include sensitive personal or project information. See the Privacy Notice. <span className="text-[#A9F00F]">*</span>
                  </span>
                </label>
                {errors.privacyConsent && <p className="text-[#A95749] text-xs">{errors.privacyConsent.message}</p>}
              </div>

              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full mt-4 inline-flex items-center justify-center rounded-[10px] bg-[#152025] px-8 py-4 text-lg font-medium text-[#F8F5ED] hover:bg-[#111A23] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                data-testid="button-apply-submit"
              >
                {status === 'loading' ? 'Submitting application...' : 'Submit application'}
              </button>
            </form>
          )}

          <div className="mt-12 pt-8 border-t border-[#E8E2D2]">
            <h4 className="font-serif text-[#152025] font-medium mb-3">Expectations</h4>
            <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2 text-xs text-[#5E6964] list-disc pl-4">
              <li>Pilot results may identify that the approach is not suitable.</li>
              <li>Not every claim can be verified.</li>
              <li>Some workflows will remain manual.</li>
              <li>Product capabilities may change.</li>
              <li>Independent field work may require separate cost and contract.</li>
              <li>Participation does not guarantee product access after the pilot.</li>
            </ul>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
