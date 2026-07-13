import { useSeoMeta } from '@/lib/useSeoMeta';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

export default function About() {
  useSeoMeta("About EcoArbitrage — Climate Grant Evidence Infrastructure", "The mission, vision, and principles behind EcoArbitrage.");

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[#F8F5ED] py-24 md:py-32 px-6">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#B96542] mb-6">
            Why EcoArbitrage
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-[#102C27] leading-[1.1] mb-12 tracking-tight">
            Better climate funding requires better evidence relationships
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 text-[#19211E] text-lg leading-relaxed">
            <div>
              <h2 className="font-serif text-2xl mb-4 text-[#315A4D]">Mission</h2>
              <p>
                Help funding organizations and implementing partners create a clearer, more respectful connection between project claims, evidence, uncertainty, and funding decisions.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-2xl mb-4 text-[#315A4D]">Vision</h2>
              <p>
                A future in which more mission-driven capital can reach capable local organizations because evidence is designed collaboratively, decisions are transparent, and uncertainty is not hidden behind simplistic scores.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Principles Section */}
      <section className="bg-white py-24 md:py-32 px-6">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-[#102C27] mb-16 tracking-tight">How we work</h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "Design with, not only for",
                desc: "Implementing partners and local experts should shape evidence requirements."
              },
              {
                title: "Preserve uncertainty",
                desc: "A clear limitation is more useful than false precision."
              },
              {
                title: "Keep people responsible",
                desc: "Software can organize evidence. Humans remain accountable for interpretation and funding decisions."
              },
              {
                title: "Minimize burden",
                desc: "Every requested field should have a purpose."
              },
              {
                title: "Integrate before replacing",
                desc: "Customers should not abandon a working grant-management system to test the evidence workflow."
              },
              {
                title: "Do not confuse documentation with impact",
                desc: "A complete record does not automatically mean the project caused the intended outcome."
              },
              {
                title: "Disclose incentives",
                desc: "Reviewers, verifiers, funders, and implementers all operate within incentives that should be visible."
              }
            ].map((principle, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="text-2xl font-serif text-[#7CA8A2]">{i + 1}.</div>
                <div>
                  <h3 className="text-[#102C27] font-medium text-xl mb-2">{principle.title}</h3>
                  <p className="text-[#5E6964] leading-relaxed">{principle.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="bg-[#F8F5ED] py-24 md:py-32 px-6">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-[#102C27] mb-6 tracking-tight">The founding team</h2>
          <p className="text-[#5E6964] text-sm mb-16 max-w-2xl">
            Founder backgrounds and profiles will be added once verified. We are committed to factual representation.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { role: "Founder & CEO" },
              { role: "Founder & Product" },
              { role: "Evidence Lead" }
            ].map((member, i) => (
              <div key={i} className="bg-white rounded-[12px] p-8 border border-[#E8E2D2] flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-[#315A4D] flex items-center justify-center text-white text-xl font-medium mb-6">
                  {member.role.split(' ')[0][0]}
                </div>
                <h3 className="text-[#102C27] font-medium text-lg mb-2">{member.role}</h3>
                <p className="text-[#5E6964] text-sm italic">
                  [Name and background will be published here.]
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#102C27] py-24 md:py-32 px-6 text-center">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-[#F8F5ED] mb-10 tracking-tight">Ready to discuss your workflow?</h2>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center rounded-[10px] bg-[#F8F5ED] px-8 py-4 text-lg font-medium text-[#102C27] hover:bg-white transition-colors"
            data-testid="link-about-cta"
          >
            Talk with the founding team
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
