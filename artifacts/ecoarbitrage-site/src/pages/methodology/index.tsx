import { useSeoMeta } from '@/lib/useSeoMeta';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

export default function Methodology() {
  useSeoMeta("Evidence Methodology and Trust Principles | EcoArbitrage", "Learn how EcoArbitrage separates project claims, observations, corroboration, uncertainty, human review, and funding decisions.");

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-[#F8F5ED] py-24 md:py-32 px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#315A4D] mb-6">
            Evidence principles
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-[#102C27] leading-[1.1] mb-10 tracking-tight">
            A method designed to preserve what is known, unknown, and not yet observable
          </h1>
          <p className="text-xl text-[#5E6964] leading-relaxed max-w-3xl mx-auto">
            Environmental and community projects produce different forms of evidence at different times. EcoArbitrage should not force all projects into one universal score. The proposed method separates: claim; observation; source; provenance; corroboration; interpretation; uncertainty; and authorized decision.
          </p>
        </motion.div>
      </section>

      {/* How evidence flows */}
      <section className="bg-white py-24 px-6 border-t border-[#E8E2D2]">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className="p-8 md:p-12 bg-[#F8F5ED] rounded-[16px] border border-[#E8E2D2]">
            <h2 className="text-[#102C27] text-2xl font-medium mb-12 text-center">How evidence flows through the workflow</h2>
            
            <div className="flex flex-col gap-4 max-w-2xl mx-auto">
              {[
                { layer: "Source", desc: "Where the data originates (community, implementer, satellite)." },
                { layer: "Provenance", desc: "How it was collected and transmitted." },
                { layer: "Corroboration", desc: "Does external context support the observation?" },
                { layer: "Interpretation", desc: "Does the observation prove the specific milestone claim?" },
                { layer: "Uncertainty assessment", desc: "What remains missing or limited?" },
                { layer: "Human Decision Record", desc: "Authorized action based on the compiled evidence." }
              ].map((step, i) => (
                <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 bg-white rounded-[8px] border border-[#E8E2D2] shadow-sm relative z-10">
                  <div className="font-serif text-[#315A4D] font-medium min-w-[200px] text-lg text-center sm:text-left">
                    {step.layer}
                  </div>
                  <div className="text-[#5E6964] text-center sm:text-left">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Inputs */}
      <section className="bg-[#F8F5ED] py-24 px-6">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <h2 className="font-serif text-4xl text-[#102C27] mb-12 tracking-tight">Inputs</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Field reports & narratives",
              "Geotagged photos & media",
              "Measurement documents",
              "Geospatial & satellite data",
              "Community feedback records",
              "Financial expenditure records",
              "External registry data"
            ].map((input, i) => (
              <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-[8px] border border-[#E8E2D2]">
                <div className="w-2 h-2 rounded-full bg-[#7CA8A2]"></div>
                <span className="text-[#19211E] font-medium">{input}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Measurement principles */}
      <section className="bg-white py-24 px-6">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <h2 className="font-serif text-4xl text-[#102C27] mb-12 tracking-tight">Measurement principles</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-medium text-[#102C27] mb-3">Observable ≠ proven</h3>
              <p className="text-[#5E6964] leading-relaxed">An observed change may be genuine without being causally linked to the project. The method distinguishes between "we observed X" and "our funding caused X."</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-[#102C27] mb-3">External signals corroborate, not verify</h3>
              <p className="text-[#5E6964] leading-relaxed">Satellite data or public registries may support a local observation, but they do not independently prove a complex project claim on their own.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-[#102C27] mb-3">Uncertainty is a valid output</h3>
              <p className="text-[#5E6964] leading-relaxed">Forcing a green checkmark on incomplete data creates systemic risk. "Not yet observable" is often more honest than a forced score.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-[#102C27] mb-3">Human judgment closes the loop</h3>
              <p className="text-[#5E6964] leading-relaxed">Software organizes evidence, highlights contradictions, and structures the record. A human analyzes the context and authorizes the decision.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Trust & Limitations Grid */}
      <section className="bg-[#F1ECE0] py-24 px-6">
        <motion.div 
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div>
            <h2 className="font-serif text-3xl text-[#102C27] mb-8">Trust model</h2>
            <ul className="space-y-6">
              <li>
                <strong className="block text-[#19211E] mb-1">Source transparency</strong>
                <span className="text-[#5E6964]">Know who provided the evidence and how.</span>
              </li>
              <li>
                <strong className="block text-[#19211E] mb-1">Human authority</strong>
                <span className="text-[#5E6964]">No automated funding decisions.</span>
              </li>
              <li>
                <strong className="block text-[#19211E] mb-1">Purpose limitation</strong>
                <span className="text-[#5E6964]">Collect only information needed for the agreed decision.</span>
              </li>
              <li>
                <strong className="block text-[#19211E] mb-1">Local participation</strong>
                <span className="text-[#5E6964]">Implementing partners shape evidence requirements.</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-serif text-3xl text-[#102C27] mb-8">What this methodology cannot do</h2>
            <ul className="space-y-4">
              {[
                "Cannot independently verify project causality",
                "Cannot certify carbon removal",
                "Cannot guarantee community outcomes",
                "Cannot replace independent evaluation",
                "Cannot eliminate uncertainty"
              ].map((limitation, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#B96542] rounded-full"></div>
                  <span className="text-[#19211E] font-medium">{limitation}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Ethical boundaries */}
      <section className="bg-[#102C27] text-[#F8F5ED] py-24 px-6">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <h2 className="font-serif text-4xl mb-12 tracking-tight">Ethical boundaries</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-[#173E36] p-8 rounded-[12px] border border-[#315A4D]">
              <h3 className="text-xl font-medium text-white mb-3">Consent</h3>
              <p className="text-[#7CA8A2]">Field evidence should only be collected with clear purpose and informed consent.</p>
            </div>
            <div className="bg-[#173E36] p-8 rounded-[12px] border border-[#315A4D]">
              <h3 className="text-xl font-medium text-white mb-3">Data minimization</h3>
              <p className="text-[#7CA8A2]">Collect only what is necessary for the milestone decision.</p>
            </div>
            <div className="bg-[#173E36] p-8 rounded-[12px] border border-[#315A4D]">
              <h3 className="text-xl font-medium text-white mb-3">Community interests</h3>
              <p className="text-[#7CA8A2]">Evidence requirements should not create extractive reporting burden for local partners.</p>
            </div>
            <div className="bg-[#173E36] p-8 rounded-[12px] border border-[#315A4D]">
              <h3 className="text-xl font-medium text-white mb-3">Disclosure</h3>
              <p className="text-[#7CA8A2]">Incentives of reviewers, funders, and implementers should be visible.</p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              href="/design-partners" 
              className="inline-flex items-center justify-center rounded-[10px] bg-[#F8F5ED] px-8 py-4 text-lg font-medium text-[#102C27] hover:bg-white transition-colors"
              data-testid="button-methodology-cta"
            >
              Apply for a design-partner pilot
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
