import { useSeoMeta } from '@/lib/useSeoMeta';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import * as Accordion from '@radix-ui/react-accordion';
import { 
  FileCheck, Users, GitCompare, ScanSearch, 
  AlertCircle, Scale, History, ChevronDown, CheckCircle2 
} from 'lucide-react';
import { fadeUp } from '@/lib/animations';

export default function Home() {
  useSeoMeta("EcoArbitrage — Evidence for Climate Grant Decisions", "EcoArbitrage helps climate funders connect project milestones, field evidence, external signals, uncertainty, and authorized funding decisions.");

  return (
    <div className="w-full">
      {/* 2. Hero */}
      <section className="bg-[#152025] text-[#F8F5ED] pt-24 pb-32 px-6 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp}
            className="flex flex-col gap-6"
          >
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#7CA8A2] font-sans">
              Climate grant evidence and decision infrastructure
            </span>
            <h1 className="font-serif text-5xl md:text-[72px] leading-[1.05] tracking-tight">
              Evidence for the next funding decision
            </h1>
            <p className="text-lg md:text-xl text-[#F8F5ED]/80 leading-relaxed font-sans max-w-xl">
              Climate projects generate reports, photos, financial records, surveys, and external data. But funders still struggle to see what evidence supports each project claim — and what remains uncertain. EcoArbitrage turns grant milestones into decision-ready evidence packets for foundations and climate programs supporting locally led adaptation and nature projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link 
                href="/design-partners" 
                className="inline-flex items-center justify-center rounded-[10px] bg-[#F8F5ED] px-8 py-4 text-lg font-medium text-[#152025] hover:bg-white transition-colors"
              >
                Apply for a design-partner pilot
              </Link>
              <Link 
                href="/solution" 
                className="inline-flex items-center justify-center rounded-[10px] bg-transparent border-2 border-[#F8F5ED]/20 px-8 py-4 text-lg font-medium text-[#F8F5ED] hover:bg-[#F8F5ED]/10 transition-colors"
              >
                See the pilot workflow
              </Link>
            </div>
            <p className="text-xs text-[#F8F5ED]/60 mt-4 max-w-lg">
              EcoArbitrage does not hold funds, sell offsets, certify outcomes, or make automated funding decisions.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[500px] flex items-center justify-center lg:justify-end"
          >
            {/* Visual: Concept evidence packet card */}
            <div className="bg-[#111A23] rounded-[12px] p-6 border border-[#547808] shadow-2xl w-full max-w-md relative font-sans">
              <div className="absolute top-0 right-0 bg-[#547808] text-[#F8F5ED] text-[10px] font-bold uppercase px-3 py-1 rounded-bl-[8px] rounded-tr-[12px] tracking-wider">
                Illustrative product concept
              </div>
              <div className="mb-6 pt-2">
                <div className="text-[#7CA8A2] text-xs font-medium uppercase tracking-wide mb-2">Milestone Review</div>
                <h3 className="text-[#F8F5ED] font-serif text-2xl mb-3">Riparian restoration Q3</h3>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#547808] text-[#F8F5ED] border border-[#7CA8A2]/30">Under review</span>
              </div>
              
              <div className="space-y-3 relative">
                {/* Connecting line */}
                <div className="absolute left-4 top-4 bottom-4 w-px bg-[#547808]/50 z-0"></div>

                <div className="bg-[#152025] border border-[#547808] rounded-[8px] p-4 relative z-10 ml-8">
                  <div className="absolute -left-[37px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#4F7D5B] border-2 border-[#111A23]"></div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[#F8F5ED] text-sm font-medium">Tree planting count</span>
                    <span className="text-[#4F7D5B] text-xs font-medium flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Supported</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#7CA8A2]">
                    <FileCheck className="w-3 h-3"/> Field submission
                  </div>
                </div>
                
                <div className="bg-[#152025] border border-[#547808] rounded-[8px] p-4 relative z-10 ml-8">
                  <div className="absolute -left-[37px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#D5A84E] border-2 border-[#111A23]"></div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[#F8F5ED] text-sm font-medium">Vegetation health</span>
                    <span className="text-[#D5A84E] text-xs font-medium flex items-center gap-1">~ Partial</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#7CA8A2]">
                    <ScanSearch className="w-3 h-3"/> External signal
                  </div>
                </div>
                
                <div className="bg-[#152025] border border-[#547808] rounded-[8px] p-4 relative z-10 ml-8">
                  <div className="absolute -left-[37px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#A95749] border-2 border-[#111A23]"></div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[#F8F5ED] text-sm font-medium">Community feedback</span>
                    <span className="text-[#A95749] text-xs font-medium flex items-center gap-1">! Missing</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#7CA8A2]">
                    <Users className="w-3 h-3"/> Limitation
                  </div>
                </div>

                <div className="bg-[#152025] border border-[#547808] rounded-[8px] p-4 relative z-10 ml-8 opacity-70">
                  <div className="absolute -left-[37px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#5E6964] border-2 border-[#111A23]"></div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[#F8F5ED] text-sm font-medium">Next Tranche</span>
                    <span className="text-[#5E6964] text-xs font-medium flex items-center gap-1">··· Pending</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#7CA8A2]">
                    <Scale className="w-3 h-3"/> Human decision
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Market Shift */}
      <section className="bg-[#F8F5ED] py-24 md:py-32 px-6">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        >
          <div className="max-w-3xl mb-16">
            <span className="text-[#A9F00F] text-sm font-semibold tracking-widest uppercase mb-4 block">The funding challenge is not only capital</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#152025] leading-[1.1] mb-6 tracking-tight">
              More climate funding must reach local implementation. The evidence workflow has not caught up.
            </h2>
            <p className="text-lg text-[#5E6964] leading-relaxed">
              Funders are being asked to support more locally led action while maintaining responsible stewardship, learning, and accountability. The problem is not a complete absence of information. It is that project evidence arrives through disconnected formats and is rarely organized around the decision the funder must make.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { title: "A large adaptation-finance gap", desc: "Developing-country adaptation needs are estimated in the hundreds of billions of dollars annually, far above current international public flows." },
              { title: "Limited visibility into local leadership", desc: "Recent research found that only a minority of reported climate-finance transactions explicitly mention local participation." },
              { title: "A real operating market", desc: "European environmental foundations already manage thousands of grants across climate, nature, and environmental priorities." }
            ].map((card, i) => (
              <div key={i} className="bg-[#F1ECE0] p-8 rounded-[12px] border border-[#E8E2D2]">
                <h3 className="text-[#152025] font-medium text-xl mb-4">{card.title}</h3>
                <p className="text-[#5E6964] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <Link href="/methodology" className="inline-flex items-center gap-2 text-[#547808] font-medium hover:text-[#152025] transition-colors">
            Read our methodology →
          </Link>
        </motion.div>
      </section>

      {/* 4. Customer Problem */}
      <section className="bg-white py-24 md:py-32 px-6">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#7CA8A2] text-sm font-semibold tracking-widest uppercase mb-4 block">The moment of friction</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#152025] leading-[1.1] mb-8 tracking-tight">
              A project report arrives. The decision still depends on manual interpretation.
            </h2>
            <p className="font-serif italic text-xl md:text-2xl text-[#547808] leading-relaxed mb-6">
              "Which evidence supports each claim? Is the evidence current and attributable to this milestone? What is missing? Does an external signal corroborate or contradict the submission? What should be clarified? Is the next tranche ready for approval?"
            </p>
            <p className="text-[#5E6964]">
              That reasoning often takes place across email, spreadsheets, shared drives, meetings, and individual judgment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Claims without traceability", desc: "Narrative statements are difficult to connect to specific supporting evidence." },
              { title: "Evidence without context", desc: "A photo or document may be genuine but still fail to establish what the project claims." },
              { title: "Decisions without history", desc: "The final rationale may remain in a meeting or email instead of the grant record." },
              { title: "Reporting without learning", desc: "The next project repeats the same evidence design mistakes." }
            ].map((card, i) => (
              <div key={i} className="border-t-2 border-[#152025] pt-6">
                <h3 className="text-[#152025] font-medium text-lg mb-3">{card.title}</h3>
                <p className="text-[#5E6964] text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 5. Economic Consequence */}
      <section className="bg-[#F1ECE0] py-24 md:py-32 px-6 overflow-hidden">
        <motion.div 
          className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        >
          <div>
            <span className="text-[#A9F00F] text-sm font-semibold tracking-widest uppercase mb-4 block">Why it matters</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#152025] leading-[1.1] mb-6 tracking-tight">
              Weak evidence creates both delay and distance
            </h2>
            <p className="text-lg text-[#5E6964] leading-relaxed mb-8">
              When evidence is difficult to review, funders may: delay a decision; request repeated reports; hire a consultant; conduct an expensive site visit; continue funding without sufficient confidence; or avoid smaller local organizations whose work is harder to monitor. EcoArbitrage is designed to reduce uncertainty without turning oversight into another extractive reporting burden.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-[#547808] font-medium hover:text-[#152025] transition-colors">
              Review your current workflow →
            </Link>
          </div>
          <div className="relative">
            {/* Simple Flow Diagram */}
            <div className="bg-white p-8 rounded-[16px] border border-[#E8E2D2] shadow-sm relative">
              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex items-center justify-between p-4 bg-[#F8F5ED] rounded-[8px] border border-[#E8E2D2]">
                  <span className="font-medium text-[#152025]">Milestone Report Submitted</span>
                  <span className="text-xs text-[#5E6964]">Day 1</span>
                </div>
                <div className="w-px h-6 bg-[#A95749] mx-auto relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#A95749] rounded-full flex items-center justify-center text-white text-[10px] font-bold">!</div>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#F8F5ED] rounded-[8px] border border-[#A95749] border-dashed">
                  <span className="font-medium text-[#A95749]">Evidence Unresolved / Clarification</span>
                  <span className="text-xs text-[#A95749]">Weeks delay</span>
                </div>
                <div className="w-px h-6 bg-[#E8E2D2] mx-auto"></div>
                <div className="flex items-center justify-between p-4 bg-white rounded-[8px] border border-[#E8E2D2] opacity-50">
                  <span className="font-medium text-[#5E6964]">Capital Tranche Released</span>
                  <span className="text-xs text-[#5E6964]">Pending</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 6. Alternatives */}
      <section className="bg-white py-24 md:py-32 px-6">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#547808] text-sm font-semibold tracking-widest uppercase mb-4 block">A missing layer</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#152025] leading-[1.1] mb-6 tracking-tight">
              Grant systems, evaluators, and project data each solve part of the problem
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              { title: "Grant-management systems", desc: "Excellent for applications, awards, workflows, and reports. Remaining need: a project-specific connection between claims, evidence, uncertainty, and a milestone decision." },
              { title: "Evaluation consultants", desc: "Excellent for deep and independent studies. Remaining need: a continuous evidence history between evaluations." },
              { title: "Geospatial and carbon tools", desc: "Excellent for selected environmental signals and specialized assets. Remaining need: field context, community outcomes, grant workflow, and authorized decision logic." },
              { title: "Spreadsheets and email", desc: "Flexible and familiar. Remaining need: provenance, portfolio consistency, and preserved decision rationale." }
            ].map((alt, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#A9F00F] mt-2.5 shrink-0"></div>
                <div>
                  <h3 className="text-[#152025] font-medium text-lg mb-2">{alt.title}</h3>
                  <p className="text-[#5E6964] leading-relaxed text-sm md:text-base">{alt.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-[#19211E] font-medium mb-6">EcoArbitrage is intended to complement existing systems, not replace them.</p>
            <Link href="/solution" className="inline-flex items-center gap-2 text-[#547808] font-medium hover:text-[#152025] transition-colors">
              Explore the solution →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 7. Solution Overview */}
      <section className="bg-[#152025] py-24 md:py-32 px-6">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        >
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-[#A9F00F] text-sm font-semibold tracking-widest uppercase mb-4 block">The EcoArbitrage approach</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#F8F5ED] leading-[1.1] mb-6 tracking-tight">
              Turn each milestone into an evidence plan before implementation begins
            </h2>
            <p className="text-lg text-[#7CA8A2] leading-relaxed">
              For every material project claim, the funder and implementing partner agree on: what should be observable; what evidence is appropriate; who will collect it; when it is needed; how consent will be handled; what limitations apply; what would trigger follow-up or independent review.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: FileCheck, title: "Evidence plan", desc: "Connect each milestone to explicit evidence requirements." },
              { icon: Users, title: "Field submission", desc: "Collect structured updates through a lightweight, mobile-first workflow." },
              { icon: GitCompare, title: "Claim-evidence map", desc: "See which claims are supported, partial, missing, contradictory, or not yet observable." },
              { icon: ScanSearch, title: "Corroborating signals", desc: "Add relevant external data without presenting it as conclusive proof." },
              { icon: Scale, title: "Human decision", desc: "Record the authorized decision, rationale, conditions, and next requirement." },
              { icon: History, title: "Portfolio memory", desc: "Reuse evidence learning across future grants." }
            ].map((feat, i) => (
              <div key={i} className="bg-[#111A23] p-8 rounded-[12px] border border-[#547808]">
                <feat.icon className="w-8 h-8 text-[#7CA8A2] mb-6" />
                <h3 className="text-[#F8F5ED] font-medium text-xl mb-3">{feat.title}</h3>
                <p className="text-[#7CA8A2] text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/solution" className="inline-flex items-center gap-2 text-[#F8F5ED] font-medium hover:text-[#7CA8A2] transition-colors underline underline-offset-4">
              See how it works →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 8. How It Works */}
      <section className="bg-[#F8F5ED] py-24 md:py-32 px-6 border-b border-[#E8E2D2]">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        >
          <div className="text-center mb-16">
            <span className="text-[#547808] text-sm font-semibold tracking-widest uppercase mb-4 block">Pilot workflow</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#152025] leading-[1.1] tracking-tight">
              From grant agreement to decision record
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-[#E8E2D2]">
            {[
              { num: 1, title: "Import the active grant", desc: "Bring in milestones, project plans, budget categories, risks, and existing reports." },
              { num: 2, title: "Agree on the evidence", desc: "Define what can reasonably be observed and what cannot." },
              { num: 3, title: "Request only what is needed", desc: "Send clear, low-bandwidth evidence requests with purpose and consent information." },
              { num: 4, title: "Connect evidence to claims", desc: "Map field submissions and approved external signals to the milestone they inform." },
              { num: 5, title: "Review uncertainty and exceptions", desc: "Identify missing items, contradictions, weak provenance, and required follow-up." },
              { num: 6, title: "Record the authorized decision", desc: "Approve, approve with conditions, request clarification, hold, or escalate." }
            ].map((step, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#F8F5ED] bg-[#152025] text-white font-medium shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  {step.num}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-[12px] border border-[#E8E2D2] shadow-sm">
                  <h3 className="font-medium text-[#152025] text-lg mb-2">{step.title}</h3>
                  <p className="text-[#5E6964] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/methodology" className="inline-flex items-center gap-2 text-[#547808] font-medium hover:text-[#152025] transition-colors">
              View the methodology →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 9. Illustrative Example */}
      <section className="bg-white py-24 md:py-32 px-6">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        >
          <div className="text-center mb-16">
            <span className="text-[#7CA8A2] text-sm font-semibold tracking-widest uppercase mb-4 block">How it looks in practice</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#152025] leading-[1.1] tracking-tight mb-4">
              A milestone review, made visible
            </h2>
            <p className="text-[#5E6964]">Illustrative product concept. Fictional project data.</p>
          </div>

          {/* Product Mockup */}
          <div className="bg-[#F8F5ED] rounded-[16px] p-4 md:p-8 border border-[#E8E2D2] shadow-md relative overflow-hidden max-w-4xl mx-auto">
            <div className="absolute -top-3 -right-3 bg-[#A9F00F] text-white text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-[4px] font-bold shadow-md z-20">Illustrative product concept</div>
            <div className="opacity-[0.03] absolute inset-0 pointer-events-none flex items-center justify-center font-serif text-6xl md:text-8xl rotate-[-15deg] whitespace-nowrap z-0">
              Example evidence packet
            </div>

            <div className="bg-white rounded-[12px] border border-[#E8E2D2] shadow-sm relative z-10 flex flex-col h-full">
              {/* Header */}
              <div className="p-6 border-b border-[#E8E2D2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium text-[#152025] mb-1">Riparian Restoration — Milestone 2 of 4</h3>
                  <p className="text-[#5E6964] text-sm">Submitted Oct 12 • 4 Claims • 1 Exception</p>
                </div>
                <div className="shrink-0 bg-[#E8E2D2]/50 text-[#19211E] px-3 py-1 rounded-full text-xs font-medium border border-[#E8E2D2]">
                  In review
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4 bg-[#F8F5ED]/30">
                <div className="bg-white p-4 rounded-[8px] border border-[#E8E2D2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-medium text-[#19211E] text-sm">Community consent records</h4>
                    <p className="text-xs text-[#5E6964] mt-1">3 signed documents verified</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[#4F7D5B] text-sm font-medium bg-[#4F7D5B]/10 px-2.5 py-1 rounded-[6px]">
                    <CheckCircle2 className="w-4 h-4"/> Supported
                  </span>
                </div>

                <div className="bg-white p-4 rounded-[8px] border border-[#E8E2D2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-medium text-[#19211E] text-sm">Vegetation survey (Q2)</h4>
                    <p className="text-xs text-[#5E6964] mt-1">Photo metadata missing location</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[#D5A84E] text-sm font-medium bg-[#D5A84E]/10 px-2.5 py-1 rounded-[6px]">
                    <AlertCircle className="w-4 h-4"/> Partial
                  </span>
                </div>

                <div className="bg-white p-4 rounded-[8px] border border-[#E8E2D2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-medium text-[#19211E] text-sm">Satellite NDVI comparison</h4>
                    <p className="text-xs text-[#5E6964] mt-1">Matches regional baseline</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[#547808] text-sm font-medium bg-[#547808]/10 px-2.5 py-1 rounded-[6px]">
                    <ScanSearch className="w-4 h-4"/> Corroborating signal
                  </span>
                </div>

                <div className="bg-white p-4 rounded-[8px] border border-[#A95749]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-medium text-[#19211E] text-sm">Hydrology measurement</h4>
                    <p className="text-xs text-[#5E6964] mt-1">Sensor data file corrupt</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[#A95749] text-sm font-medium bg-[#A95749]/10 px-2.5 py-1 rounded-[6px]">
                    <AlertCircle className="w-4 h-4"/> Missing
                  </span>
                </div>

                <div className="bg-[#F8F5ED] p-4 rounded-[8px] border border-[#E8E2D2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-medium text-[#5E6964] text-sm">Social impact assessment</h4>
                    <p className="text-xs text-[#5E6964] mt-1">Scheduled for Year 2</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[#5E6964] text-sm font-medium bg-[#E8E2D2] px-2.5 py-1 rounded-[6px]">
                    ··· Not yet observable
                  </span>
                </div>
              </div>

              {/* Review Section */}
              <div className="p-6 border-t border-[#E8E2D2] bg-white rounded-b-[12px]">
                <div className="mb-4">
                  <label className="text-xs font-medium text-[#152025] uppercase tracking-wide">Reviewer Note</label>
                  <div className="mt-2 text-sm text-[#19211E] bg-[#F8F5ED] p-3 rounded-[8px] border border-[#E8E2D2]">
                    "Holding final approval until the hydrology sensor file is re-uploaded. Vegetation survey is acceptable for this early stage."
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button className="px-4 py-2 bg-[#E8E2D2] text-[#5E6964] rounded-[6px] text-sm font-medium cursor-not-allowed">Approve full tranche</button>
                  <button className="px-4 py-2 bg-[#152025] text-white rounded-[6px] text-sm font-medium shadow-md">Approve with conditions</button>
                  <button className="px-4 py-2 border border-[#E8E2D2] text-[#19211E] rounded-[6px] text-sm font-medium bg-white">Request clarification</button>
                </div>
              </div>
            </div>
            
            <p className="text-[11px] text-[#5E6964] mt-4 text-center">
              Showing illustrative data only. Satellite data corroborates but does not independently verify vegetation claims.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 10. Benefits */}
      <section className="bg-[#F8F5ED] py-24 md:py-32 px-6">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        >
          <div className="text-center mb-16">
            <span className="text-[#A9F00F] text-sm font-semibold tracking-widest uppercase mb-4 block">What it changes</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#152025] leading-[1.1] tracking-tight">
              A more defensible decision — not a higher score
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
            {[
              { icon: FileCheck, title: "Design evidence earlier", desc: "Define evidence requirements when the milestone is created, not after a report is questioned." },
              { icon: Users, title: "Reduce fragmented review", desc: "Bring field submissions, documents, external signals, and reviewer notes into one decision record." },
              { icon: AlertCircle, title: "Preserve uncertainty", desc: "Show what is supported, what is partial, what is missing, and what is not yet observable." },
              { icon: MapPin, title: "Support local usability", desc: "Use lightweight, mobile-first evidence requests designed to reduce duplicate reporting." },
              { icon: History, title: "Build portfolio memory", desc: "Preserve what was expected, what was observed, and why a decision was made." },
              { icon: GitCompare, title: "Complement existing systems", desc: "Import from and export to grant-management, finance, and document systems rather than replacing them." }
            ].map((ben, i) => (
              <div key={i} className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-white border border-[#E8E2D2] flex items-center justify-center shrink-0">
                  <ben.icon className="w-5 h-5 text-[#547808]" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#152025] mb-2">{ben.title}</h3>
                  <p className="text-[#5E6964] leading-relaxed">{ben.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 11. Differentiation */}
      <section className="bg-white py-24 md:py-32 px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        >
          <span className="text-[#7CA8A2] text-sm font-semibold tracking-widest uppercase mb-4 block">Not a grant system. Not an evaluator.</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#152025] leading-[1.1] mb-6 tracking-tight">
            EcoArbitrage connects the workflow that sits between existing tools
          </h2>
          <p className="text-lg text-[#5E6964] leading-relaxed mb-12">
            Grant systems manage applications, awards, and reports. Evaluators provide independent and periodic assessment. EcoArbitrage focuses on the narrower, continuous workflow connecting a milestone to the evidence and human decision that follows.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12">
            <div className="bg-[#F8F5ED] p-4 rounded-[8px] border border-[#E8E2D2] text-[#5E6964] text-sm font-medium w-48 text-center">
              Grant-management system
            </div>
            <div className="hidden md:block w-8 h-px bg-[#E8E2D2]"></div>
            <div className="bg-[#152025] p-5 rounded-[10px] border border-[#547808] text-white text-base font-medium font-serif w-56 text-center shadow-lg transform scale-105">
              EcoArbitrage
            </div>
            <div className="hidden md:block w-8 h-px bg-[#E8E2D2]"></div>
            <div className="bg-[#F8F5ED] p-4 rounded-[8px] border border-[#E8E2D2] text-[#5E6964] text-sm font-medium w-48 text-center">
              Evaluator
            </div>
          </div>

          <Link href="/solution" className="inline-flex items-center justify-center rounded-[10px] bg-[#152025] px-8 py-3.5 text-base font-medium text-[#F8F5ED] hover:bg-[#111A23] transition-colors">
            See the full solution →
          </Link>
        </motion.div>
      </section>

      {/* 12. Ideal Customer */}
      <section className="bg-[#F8F5ED] py-24 md:py-32 px-6 border-y border-[#E8E2D2]">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        >
          <span className="text-[#547808] text-sm font-semibold tracking-widest uppercase mb-4 block">Who this is for</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#152025] leading-[1.1] mb-6 tracking-tight">
            Climate funders making live milestone decisions
          </h2>
          <p className="text-lg text-[#19211E] leading-relaxed mb-6">
            EcoArbitrage is currently being designed for program directors, impact directors, grant managers, and MEL leaders at European environmental foundations, corporate foundations, pooled funds, and international climate grant programs — organizations with live portfolios, local implementation partners, and a genuine need to improve how milestone evidence is reviewed.
          </p>
          <p className="text-sm italic text-[#5E6964]">
            The current pilot is designed for selected organizations with active nature or climate adaptation grants, a live decision window, and capacity to participate in design.
          </p>
        </motion.div>
      </section>

      {/* 13. Use Cases */}
      <section className="bg-white py-24 md:py-32 px-6">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        >
          <div className="text-center mb-16">
            <span className="text-[#A9F00F] text-sm font-semibold tracking-widest uppercase mb-4 block">Start with the funding decisions that already require evidence</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#152025] leading-[1.1] tracking-tight">
              Six ways to begin
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Milestone release", desc: "Prepare a structured evidence packet before the next tranche decision." },
              { title: "Portfolio reporting", desc: "Aggregate supported, partial, missing, and not-yet-observable claims." },
              { title: "Local partner onboarding", desc: "Agree on evidence requirements and reporting purpose before implementation." },
              { title: "Exception review", desc: "Identify projects requiring clarification, independent review, or modified milestones." },
              { title: "Evaluation preparation", desc: "Give evaluators a complete evidence and decision history." },
              { title: "Program learning", desc: "Understand which evidence requirements were useful and which created burden without improving decisions." }
            ].map((uc, i) => (
              <div key={i} className="bg-white p-8 rounded-[12px] border border-[#E8E2D2] hover:border-[#7CA8A2] transition-colors shadow-sm">
                <h3 className="text-[#152025] font-medium text-lg mb-3">{uc.title}</h3>
                <p className="text-[#5E6964] leading-relaxed text-sm">{uc.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 14. Methodology Preview */}
      <section className="bg-[#111A23] text-[#F8F5ED] py-24 md:py-32 px-6">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        >
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-[#A9F00F] text-sm font-semibold tracking-widest uppercase mb-4 block">Evidence without false certainty</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#F8F5ED] leading-[1.1] tracking-tight">
              Observation, interpretation, and decision should remain visibly separate
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {[
              { icon: GitCompare, title: "Source before score", desc: "Show who provided the evidence and how it was collected." },
              { icon: ScanSearch, title: "Corroboration is not causality", desc: "External data may support an observation without proving project impact." },
              { icon: Scale, title: "Human authority", desc: "The product does not autonomously approve or reject funding." },
              { icon: AlertCircle, title: "Uncertainty is a result", desc: '"Not yet observable" is often more honest than a forced score.' },
              { icon: Users, title: "Local participation", desc: "Evidence requirements should be designed with implementing partners." }
            ].map((prin, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 bg-[#152025] rounded-[12px] border border-[#547808]">
                <prin.icon className="w-8 h-8 text-[#7CA8A2] mb-4" />
                <h3 className="text-white font-medium text-base mb-2">{prin.title}</h3>
                <p className="text-[#7CA8A2] text-xs leading-relaxed">{prin.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/methodology" className="inline-flex items-center gap-2 text-[#F8F5ED] font-medium hover:text-[#7CA8A2] transition-colors underline underline-offset-4">
              Explore the full methodology →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 15. Workflow Compatibility */}
      <section className="bg-[#F8F5ED] py-24 md:py-32 px-6">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        >
          <div className="text-center mb-12">
            <span className="text-[#547808] text-sm font-semibold tracking-widest uppercase mb-4 block">Designed to fit, not replace</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#152025] leading-[1.1] mb-6 tracking-tight">
              Keep your system of record
            </h2>
            <p className="text-lg text-[#5E6964] leading-relaxed max-w-3xl mx-auto">
              The pilot is designed to begin with simple imports and exports. Potential future compatibility may include grant-management platforms, document repositories, financial systems, and approved environmental-data providers.
            </p>
          </div>

          {/* SVG Diagram */}
          <div className="w-full overflow-x-auto py-8">
            <svg viewBox="0 0 800 200" className="w-full min-w-[600px] h-auto font-sans">
              <g transform="translate(50, 75)">
                <rect x="0" y="0" width="160" height="50" rx="8" fill="#F1ECE0" stroke="#547808" strokeWidth="2" />
                <text x="80" y="25" textAnchor="middle" dominantBaseline="middle" fill="#152025" fontSize="13" fontWeight="500">Grant-management</text>
                
                <path d="M 160 25 L 240 25" stroke="#547808" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
                
                <rect x="240" y="-10" width="180" height="70" rx="8" fill="#152025" stroke="#111A23" strokeWidth="2" />
                <text x="330" y="25" textAnchor="middle" dominantBaseline="middle" fill="#F8F5ED" fontSize="18" fontFamily="Newsreader" fontWeight="500">EcoArbitrage</text>
                
                <path d="M 500 25 L 420 25" stroke="#547808" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
                
                <rect x="500" y="-40" width="180" height="40" rx="8" fill="#F1ECE0" stroke="#547808" strokeWidth="2" />
                <text x="590" y="-20" textAnchor="middle" dominantBaseline="middle" fill="#152025" fontSize="13" fontWeight="500">Document repository</text>
                
                <rect x="500" y="5" width="180" height="40" rx="8" fill="#F1ECE0" stroke="#547808" strokeWidth="2" />
                <text x="590" y="25" textAnchor="middle" dominantBaseline="middle" fill="#152025" fontSize="13" fontWeight="500">Finance workflow</text>
                
                <rect x="500" y="50" width="180" height="40" rx="8" fill="#F1ECE0" stroke="#547808" strokeWidth="2" />
                <text x="590" y="70" textAnchor="middle" dominantBaseline="middle" fill="#152025" fontSize="13" fontWeight="500">External evidence service</text>
                
                <path d="M 500 -20 L 460 -20 L 460 25" stroke="#547808" strokeWidth="2" fill="none" />
                <path d="M 500 70 L 460 70 L 460 25" stroke="#547808" strokeWidth="2" fill="none" />
              </g>
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#547808" />
                </marker>
              </defs>
            </svg>
          </div>
          
          <p className="text-center text-xs text-[#5E6964] mt-4">
            No third-party integrations are named as available until working and authorized for public disclosure.
          </p>
        </motion.div>
      </section>

      {/* 16. Design-Partner Offer */}
      <section className="bg-white py-24 md:py-32 px-6">
        <motion.div 
          className="max-w-6xl mx-auto bg-[#F1ECE0] rounded-[24px] border border-[#E8E2D2] overflow-hidden"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        >
          <div className="p-10 md:p-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#A9F00F] text-sm font-semibold tracking-widest uppercase mb-4 block">Selected pilot program</span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#152025] leading-[1.1] mb-8 tracking-tight">
                Test the evidence workflow on 5–10 live grants
              </h2>
              <ul className="space-y-3 mb-8">
                {[
                  "Current-workflow review", "Evidence-plan design", "Grant and milestone import",
                  "Grantee evidence requests", "One live evidence cycle", "Decision packets",
                  "Portfolio learning workshop", "Annual rollout recommendation"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#4F7D5B] shrink-0" />
                    <span className="text-[#19211E] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col items-start bg-white p-8 rounded-[16px] border border-[#E8E2D2] shadow-sm">
              <Link 
                href="/design-partners" 
                className="w-full inline-flex items-center justify-center rounded-[10px] bg-[#152025] px-8 py-4 text-lg font-medium text-[#F8F5ED] hover:bg-[#111A23] transition-colors mb-4"
              >
                Apply for a design-partner pilot
              </Link>
              <Link 
                href="/contact" 
                className="w-full inline-flex items-center justify-center rounded-[10px] bg-transparent border-2 border-[#152025] px-8 py-4 text-lg font-medium text-[#152025] hover:bg-[#F8F5ED] transition-colors mb-6"
              >
                Discuss pilot fit
              </Link>
              <p className="text-xs text-[#5E6964] leading-relaxed text-center w-full">
                Pilot participation does not guarantee a particular project outcome, funding decision, cost saving, or product result.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 17. FAQ */}
      <section className="bg-[#F8F5ED] py-24 md:py-32 px-6">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-[#152025] mb-12 text-center tracking-tight">Common questions</h2>
          
          <Accordion.Root type="single" collapsible className="w-full space-y-4">
            {[
              { q: "Is EcoArbitrage a crowdfunding platform?", a: "No. The initial product does not collect donations, offer investments, hold funds, or operate a public project marketplace." },
              { q: "Is EcoArbitrage a grant-management system?", a: "No. It is intended to complement existing grant-management systems by focusing on milestone evidence and decision records." },
              { q: "Does EcoArbitrage verify carbon credits?", a: "No. It does not issue, rate, certify, or sell carbon credits." },
              { q: "Does the product make automated funding decisions?", a: "No. Software may help organize and identify evidence, but an authorized human reviews and decides." },
              { q: "Will implementing partners need another complex system?", a: "The pilot is being designed around lightweight evidence requests and reuse of existing materials. Reducing duplicate reporting is a core success criterion." },
              { q: "Is the product generally available?", a: "No. EcoArbitrage is currently intended for selected design-partner pilots." },
              { q: "Does EcoArbitrage guarantee project results?", a: "No. Project outcomes depend on context, implementation, external conditions, and many factors beyond the software." }
            ].map((faq, i) => (
              <Accordion.Item key={i} value={`item-${i}`} className="bg-white border border-[#E8E2D2] rounded-[10px] overflow-hidden">
                <Accordion.Header className="flex">
                  <Accordion.Trigger className="flex flex-1 items-center justify-between py-5 px-6 font-medium text-[#152025] text-left hover:bg-[#F8F5ED]/50 transition-colors group">
                    {faq.q}
                    <ChevronDown className="w-5 h-5 text-[#5E6964] transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-[#5E6964] text-base data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2">
                  <div className="px-6 pb-5 pt-1">
                    {faq.a}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>
      </section>

      {/* 18. Final CTA */}
      <section className="bg-[#152025] text-[#F8F5ED] py-24 md:py-32 px-6 text-center">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        >
          <span className="text-[#A9F00F] text-sm font-semibold tracking-widest uppercase mb-4 block">Bring one real milestone</span>
          <h2 className="font-serif text-4xl md:text-[56px] leading-[1.1] tracking-tight mb-8">
            See where evidence and decision-making become disconnected
          </h2>
          <p className="text-xl text-[#7CA8A2] mb-12">
            Share an anonymized reporting template, milestone, or workflow. We will assess whether a structured evidence packet could improve the next funding decision.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <Link 
              href="/design-partners" 
              className="inline-flex items-center justify-center rounded-[10px] bg-[#F8F5ED] px-8 py-4 text-lg font-medium text-[#152025] hover:bg-white transition-colors"
            >
              Apply for a pilot
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-[10px] bg-transparent border-2 border-[#547808] px-8 py-4 text-lg font-medium text-[#F8F5ED] hover:bg-[#111A23] transition-colors"
            >
              Contact the team
            </Link>
          </div>
          
          <p className="text-xs text-[#5E6964]">
            Do not submit sensitive beneficiary information, confidential project data, financial credentials, or legally privileged material through the public form.
          </p>
        </motion.div>
      </section>
    </div>
  );
}

// Minimal MapPin icon since it wasn't imported from lucide-react directly
function MapPin(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
