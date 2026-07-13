import { useSeoMeta } from '@/lib/useSeoMeta';

export default function Privacy() {
  useSeoMeta("Privacy Notice | EcoArbitrage", "How EcoArbitrage collects, uses, and protects your information.");

  return (
    <div className="bg-[#F8F5ED] min-h-screen py-20 px-6">
      <div className="max-w-[720px] mx-auto">
        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-[#152025] mb-4 tracking-tight">Privacy Notice</h1>
          <p className="text-[#5E6964]">Last updated: [Date to be confirmed]</p>
        </header>

        <div className="prose prose-lg prose-headings:font-serif prose-headings:font-medium prose-headings:text-[#152025] prose-p:text-[#19211E] prose-p:leading-relaxed prose-a:text-[#547808] hover:prose-a:text-[#152025] max-w-none">
          <h2>What information we collect</h2>
          <p>
            Name, work email, company/organization name, role, inquiry type, message content, and optional fields submitted through our contact and application forms. UTM parameters and referrer information for understanding how visitors find us. Technical information necessary to serve the website (standard server logs).
          </p>

          <h2>How we use it</h2>
          <p>
            To respond to your inquiry or evaluate your pilot application; to manage any resulting business relationship; to understand how visitors find our website. We do not use your information for advertising, profiling, or sale to third parties.
          </p>

          <h2>Data sharing</h2>
          <p>
            We share data only with service providers necessary to deliver responses (such as our email delivery provider). We do not sell personal information.
          </p>

          <h2>Data retention</h2>
          <p>
            We retain inquiry and application information only as long as necessary for the stated purpose or as required by applicable law.
          </p>

          <h2>Your rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal information by contacting us through the contact form.
          </p>

          <h2>Cookies</h2>
          <p>
            We use only the technical cookies necessary to serve this website. We do not use advertising trackers, remarketing pixels, or third-party analytics that share data with advertisers.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy-related questions: hello@[verified-domain]
          </p>

          <h2>Changes</h2>
          <p>
            We will update this notice as our practices change. The "Last updated" date reflects the most recent revision.
          </p>
        </div>
      </div>
    </div>
  );
}
