import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useSeoMeta } from '@/lib/useSeoMeta';
import { motion } from 'framer-motion';

const contactSchema = z.object({
  fullName: z.string().min(2, "Name is required").max(100),
  workEmail: z.string().email("Valid email is required").max(254),
  company: z.string().min(2, "Company is required").max(150),
  inquiryType: z.enum([
    "Design-partner pilot", "Funder research", "Implementation partnership", 
    "Evaluation or methodology", "Investment", "Accelerator", "Careers", "Media", "General"
  ], { errorMap: () => ({ message: "Please select an inquiry type" }) }),
  message: z.string().min(20, "Please include a message (20+ characters)").max(2000),
  website: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  privacyConsent: z.literal(true, { errorMap: () => ({ message: "You must accept the privacy notice." }) }),
  botField: z.string().max(0).optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  useSeoMeta("Contact EcoArbitrage", "Contact EcoArbitrage about design-partner pilots, research, partnerships, investment, or general inquiries.");

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      workEmail: "",
      company: "",
      website: "",
      message: "",
      botField: ""
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
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
    <div className="w-full bg-[#F8F5ED] min-h-screen pb-24">
      {/* Hero */}
      <section className="pt-24 pb-16 px-6 text-center">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-serif text-5xl md:text-6xl text-[#102C27] mb-6 tracking-tight">Bring us a real evidence workflow</h1>
          <p className="text-[#5E6964] text-lg md:text-xl leading-relaxed mb-4">
            Contact EcoArbitrage about: design-partner pilots; funder research; methodology; evaluation or implementation partnerships; investment; accelerator programs; team opportunities; general inquiries.
          </p>
          <p className="text-[#315A4D] font-medium text-sm">
            We review inquiries manually. Response timing may vary during the design-partner stage.
          </p>
        </motion.div>
      </section>

      {/* Form Section */}
      <section className="px-6">
        <motion.div 
          className="max-w-[680px] mx-auto bg-white rounded-[16px] border border-[#E8E2D2] shadow-sm p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-[#4F7D5B]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#4F7D5B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-serif text-[#102C27] mb-4">Your message has been received</h2>
              <p className="text-[#5E6964]">We review inquiries manually and will be in touch.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {status === 'error' && (
                <div className="p-4 bg-[#A95749]/10 border border-[#A95749]/20 rounded-[8px] text-[#A95749] text-sm">
                  We could not send your message. Please try again or reach us at hello@[verified-domain].
                </div>
              )}
              
              {/* Honeypot */}
              <input type="text" {...register("botField")} className="absolute left-[-9999px] w-[1px] h-[1px] opacity-0 overflow-hidden" tabIndex={-1} aria-hidden="true" />

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#19211E]">Full Name <span className="text-[#B96542]">*</span></label>
                  <input 
                    {...register("fullName")}
                    className="w-full bg-[#F8F5ED] border border-[#E8E2D2] rounded-[8px] px-4 py-2.5 text-[#19211E] focus:outline-none focus:ring-2 focus:ring-[#315A4D] focus:border-transparent transition-shadow"
                    placeholder="Jane Doe"
                  />
                  {errors.fullName && <p className="text-[#A95749] text-xs mt-1">{errors.fullName.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#19211E]">Work Email <span className="text-[#B96542]">*</span></label>
                  <input 
                    {...register("workEmail")}
                    type="email"
                    className="w-full bg-[#F8F5ED] border border-[#E8E2D2] rounded-[8px] px-4 py-2.5 text-[#19211E] focus:outline-none focus:ring-2 focus:ring-[#315A4D] focus:border-transparent transition-shadow"
                    placeholder="jane@organization.org"
                  />
                  {errors.workEmail && <p className="text-[#A95749] text-xs mt-1">{errors.workEmail.message}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#19211E]">Company / Organization <span className="text-[#B96542]">*</span></label>
                  <input 
                    {...register("company")}
                    className="w-full bg-[#F8F5ED] border border-[#E8E2D2] rounded-[8px] px-4 py-2.5 text-[#19211E] focus:outline-none focus:ring-2 focus:ring-[#315A4D] focus:border-transparent transition-shadow"
                    placeholder="Climate Foundation"
                  />
                  {errors.company && <p className="text-[#A95749] text-xs mt-1">{errors.company.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#19211E]">Website <span className="text-[#5E6964] font-normal">(Optional)</span></label>
                  <input 
                    {...register("website")}
                    className="w-full bg-[#F8F5ED] border border-[#E8E2D2] rounded-[8px] px-4 py-2.5 text-[#19211E] focus:outline-none focus:ring-2 focus:ring-[#315A4D] focus:border-transparent transition-shadow"
                    placeholder="https://organization.org"
                  />
                  {errors.website && <p className="text-[#A95749] text-xs mt-1">{errors.website.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#19211E]">Inquiry Type <span className="text-[#B96542]">*</span></label>
                <select 
                  {...register("inquiryType")}
                  className="w-full bg-[#F8F5ED] border border-[#E8E2D2] rounded-[8px] px-4 py-2.5 text-[#19211E] focus:outline-none focus:ring-2 focus:ring-[#315A4D] focus:border-transparent transition-shadow appearance-none"
                >
                  <option value="">Select an option...</option>
                  <option value="Design-partner pilot">Design-partner pilot</option>
                  <option value="Funder research">Funder research</option>
                  <option value="Implementation partnership">Implementation partnership</option>
                  <option value="Evaluation or methodology">Evaluation or methodology</option>
                  <option value="Investment">Investment</option>
                  <option value="Accelerator">Accelerator</option>
                  <option value="Careers">Careers</option>
                  <option value="Media">Media</option>
                  <option value="General">General</option>
                </select>
                {errors.inquiryType && <p className="text-[#A95749] text-xs mt-1">{errors.inquiryType.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#19211E]">Message <span className="text-[#B96542]">*</span></label>
                <textarea 
                  {...register("message")}
                  rows={5}
                  className="w-full bg-[#F8F5ED] border border-[#E8E2D2] rounded-[8px] px-4 py-3 text-[#19211E] focus:outline-none focus:ring-2 focus:ring-[#315A4D] focus:border-transparent transition-shadow resize-y"
                  placeholder="How can we help?"
                ></textarea>
                {errors.message && <p className="text-[#A95749] text-xs mt-1">{errors.message.message}</p>}
              </div>

              <div className="space-y-4 pt-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center pt-0.5">
                    <input type="checkbox" {...register("privacyConsent")} className="w-5 h-5 rounded-[4px] border-[#E8E2D2] text-[#315A4D] focus:ring-[#315A4D] bg-[#F8F5ED] cursor-pointer" />
                  </div>
                  <span className="text-sm text-[#5E6964] leading-relaxed">
                    I accept the privacy notice. <span className="text-[#B96542]">*</span>
                  </span>
                </label>
                {errors.privacyConsent && <p className="text-[#A95749] text-xs">{errors.privacyConsent.message}</p>}
              </div>

              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full md:w-auto mt-4 inline-flex items-center justify-center rounded-[10px] bg-[#102C27] px-8 py-3.5 text-base font-medium text-[#F8F5ED] hover:bg-[#173E36] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                data-testid="button-contact-submit"
              >
                {status === 'loading' ? 'Sending...' : 'Send message'}
              </button>
            </form>
          )}

          <div className="mt-8 pt-8 border-t border-[#E8E2D2]">
            <p className="text-xs text-[#5E6964] leading-relaxed">
              We use this information only to respond to your inquiry and manage the resulting business relationship. Do not submit beneficiary identities, health data, financial credentials, confidential project evidence, legal documents, or authentication information.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
