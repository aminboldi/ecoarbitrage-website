import { useSeoMeta } from '@/lib/useSeoMeta';

export default function Terms() {
  useSeoMeta("Website Terms | EcoArbitrage", "Terms governing use of the EcoArbitrage website.");

  return (
    <div className="bg-[#F8F5ED] min-h-screen py-20 px-6">
      <div className="max-w-[720px] mx-auto">
        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-[#152025] mb-4 tracking-tight">Website Terms</h1>
          <p className="text-[#5E6964]">Last updated: [Date to be confirmed]</p>
        </header>

        <div className="prose prose-lg prose-headings:font-serif prose-headings:font-medium prose-headings:text-[#152025] prose-p:text-[#19211E] prose-p:leading-relaxed prose-a:text-[#547808] hover:prose-a:text-[#152025] max-w-none">
          <h2>Use of this website</h2>
          <p>
            This website is provided for informational purposes only. No content on this website constitutes financial, legal, investment, or professional advice. Do not rely on website content for investment, funding, or business decisions without independent advice.
          </p>

          <h2>No products or services offered</h2>
          <p>
            This website describes a conceptual product under development. No binding offer, contract, service agreement, or commitment to provide services is made through this website. Product scope, availability, and features may change.
          </p>

          <h2>Accuracy</h2>
          <p>
            We aim to keep information current and accurate. We make no warranties, express or implied, about the completeness or accuracy of website content.
          </p>

          <h2>Intellectual property</h2>
          <p>
            Website content, brand name, and design are the property of EcoArbitrage. Do not reproduce without permission.
          </p>

          <h2>Third-party links</h2>
          <p>
            Links to external websites are provided for reference only. We are not responsible for the content or practices of external sites.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, EcoArbitrage is not liable for any loss or damage arising from use of this website.
          </p>

          <h2>Jurisdiction</h2>
          <p>
            [Jurisdiction to be confirmed before launch]
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms: hello@ecoarbitrage.ir
          </p>
        </div>
      </div>
    </div>
  );
}
