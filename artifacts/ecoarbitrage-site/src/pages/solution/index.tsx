import { useSeoMeta } from '@/lib/useSeoMeta';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { FileCheck, Users, GitCompare, ScanSearch, AlertCircle, Scale, History, X } from 'lucide-react';
import { fadeUp } from '@/lib/animations';

export default function Solution() {
  useSeoMeta("Climate Grant Evidence Workflow | EcoArbitrage", "Explore the EcoArbitrage concept for turning climate-grant milestones into decision-ready evidence packets.");

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-[#102C27] text-[#F8F5ED] py-24 md:py-32 px-6">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#7CA8A2] mb-6">
            Climate grant evidence workflow
          </span>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-8 tracking-tight">
            Connect project claims to the evidence behind the next decision
          </h1>
          <p className="text-lg md:text-xl text-[#F8F5ED]/80 leading-relaxed mb-10 max-w-3xl">
            EcoArbitrage is being developed for organizations that fund locally led climate-adaptation and nature projects. It helps program, impact, and finance teams organize what a project promised, what evidence arrived, what external information is relevant, what remains uncertain, and what authorized decision was made.
          </p>
          <p className="text-sm text-[#B96542] mb-10 font-medium tracking-wide">
            The interfaces shown are conceptual and intended for selected design-partner pilots.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/design-partners" 
              className="inline-flex items-center justify-center rounded-[10px] bg-[#F8F5ED] px-8 py-4 text-lg font-medium text-[#102C27] hover:bg-white transition-colors"
              data-testid="button-solution-hero-primary"
            >
              Apply for a pilot
            </Link>
            <Link 
              href="/methodology" 
              className="inline-flex items-center justify-center rounded-[10px] bg-transparent border-2 border-[#315A4D] px-8 py-4 text-lg font-medium text-[#F8F5ED] hover:bg-[#173E36] transition-colors"
              data-testid="button-solution-hero-secondary"
            >
              View the methodology
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="bg-white py-24 px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-[#102C27] mb-8 tracking-tight">
            A report is not automatically evidence
          </h2>
          <p className="text-xl text-[#5E6964] leading-relaxed max-w-3xl mx-auto">
            A project report may describe real and valuable work. But a funding decision often requires more: a clear claim; evidence relevant to that claim; source and date; context; identified limitations; a review process; a recorded decision.
          </p>
        </motion.div>
      </section>

      {/* Product Concept Workflow */}
      <section className="bg-[#F8F5ED] py-24 px-6 border-y border-[#E8E2D2]">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-[#102C27] mb-16 tracking-tight text-center">
            A structured record from milestone design to decision
          </h2>
          
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-1/2 left-[5%] right-[5%] h-px bg-[#315A4D]/20 -translate-y-1/2 z-0" />
            
            {[
              "Evidence plan", "Field submission", "Claim mapping", "External context", 
              "Reviewer notes", "Uncertainty assessment", "Escalation (if needed)", "Decision record"
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center bg-[#F8F5ED] px-2 w-full md:w-auto">
                <div className="w-12 h-12 rounded-full border-2 border-[#315A4D] bg-[#F8F5ED] flex items-center justify-center text-[#102C27] font-serif text-xl font-medium mb-3">
                  {i + 1}
                </div>
                <div className="text-center font-medium text-[#19211E] px-4 py-2 bg-white rounded-[8px] border border-[#E8E2D2] shadow-sm text-sm whitespace-nowrap">
                  {step}
                </div>
                {/* Mobile connecting line */}
                {i < 7 && <div className="md:hidden h-8 w-px bg-[#315A4D]/20 my-2" />}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Capabilities */}
      <section className="bg-white py-24 md:py-32 px-6">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <h2 className="text-[#102C27] text-3xl font-medium mb-16 tracking-tight">What the workflow covers</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FileCheck, title: "Evidence planning", desc: "Define acceptable evidence, responsibility, timing, consent, and limitations." },
              { icon: Users, title: "Field submission", desc: "Provide simple requests adapted to device, bandwidth, and existing evidence." },
              { icon: GitCompare, title: "Claim mapping", desc: "Connect documents, media, measurements, and statements to the claims they support." },
              { icon: ScanSearch, title: "External context", desc: "Add geospatial, weather, registry, or financial signals when relevant." },
              { icon: AlertCircle, title: "Review and escalation", desc: "Identify missing or contradictory evidence and route sensitive items." },
              { icon: Scale, title: "Decision record", desc: "Preserve authorized action, rationale, conditions, and next requirement." },
              { icon: History, title: "Portfolio learning", desc: "Reuse methods and understand repeated evidence problems." },
            ].map((cap, i) => (
              <div key={i} className="bg-[#F8F5ED] rounded-[12px] p-8 border border-[#E8E2D2]">
                <cap.icon className="w-8 h-8 text-[#315A4D] mb-6" />
                <h3 className="text-[#102C27] font-medium text-xl mb-3">{cap.title}</h3>
                <p className="text-[#5E6964] leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Boundaries */}
      <section className="bg-[#F1ECE0] py-24 px-6">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-[#102C27] mb-12 tracking-tight text-center">
            What the product does not claim
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 max-w-3xl mx-auto">
            {[
              "Does not certify environmental outcomes.",
              "Does not issue carbon credits.",
              "Does not guarantee impact.",
              "Does not replace an evaluator.",
              "Does not automatically move funds.",
              "Does not replace a grant-management system.",
              "Does not eliminate uncertainty."
            ].map((limitation, i) => (
              <div key={i} className="flex items-start gap-4">
                <X className="w-6 h-6 text-[#B96542] shrink-0" />
                <span className="text-[#19211E] text-lg">{limitation}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Outcome */}
      <section className="bg-[#102C27] text-[#F8F5ED] py-24 md:py-32 px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <h2 className="font-serif text-4xl md:text-6xl mb-12 tracking-tight">
            The intended outcome is a more defensible decision — not a higher score
          </h2>
          <p className="text-xl text-[#7CA8A2] mb-10">
            Potential pilot outcomes to test (pilot hypotheses):
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {[
              "Clearer evidence requirements", "Fewer repeated clarification requests", 
              "Faster review", "Better decision history", "Lower duplicate reporting", 
              "Safer public claims", "Improved portfolio learning"
            ].map((outcome, i) => (
              <span key={i} className="px-4 py-2 rounded-full border border-[#315A4D] text-[#F8F5ED] bg-[#173E36]">
                {outcome}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-24 px-6 text-center">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <h2 className="text-2xl md:text-3xl text-[#19211E] mb-10 font-medium">Bring one real grant milestone to a design-partner conversation.</h2>
          <Link 
            href="/design-partners" 
            className="inline-flex items-center justify-center rounded-[10px] bg-[#102C27] px-8 py-4 text-lg font-medium text-[#F8F5ED] hover:bg-[#173E36] transition-colors"
            data-testid="button-solution-final-cta"
          >
            Apply for a pilot
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
