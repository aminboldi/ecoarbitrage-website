import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer className="bg-[#152025] text-[#F8F5ED] pt-20 pb-10 border-t border-[#111A23]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 border-b border-[#111A23] pb-16">
          
          <div className="md:col-span-6 lg:col-span-5 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity" data-testid="link-footer-logo">
              <img src="/logo.png" alt="" aria-hidden="true" className="h-8 w-8 object-contain" />
              <span className="font-serif text-2xl font-medium tracking-tight text-[#F8F5ED]">EcoArbitrage</span>
            </Link>
            <p className="text-[#7CA8A2] text-sm md:text-base leading-relaxed max-w-md">
              EcoArbitrage is an early-stage evidence and milestone-decision workflow for organizations funding locally led climate-adaptation and nature projects. It does not provide investment, donation, payment, carbon-credit, audit, or certification services.
            </p>
          </div>

          <div className="md:col-span-2 lg:col-span-2 lg:col-start-7 flex flex-col gap-4">
            <h3 className="font-serif text-lg font-medium text-white mb-2">Company</h3>
            <Link href="/about" className="text-[#7CA8A2] hover:text-white transition-colors text-sm" data-testid="link-footer-about">About</Link>
            <Link href="/contact" className="text-[#7CA8A2] hover:text-white transition-colors text-sm" data-testid="link-footer-contact">Contact</Link>
            <Link href="/design-partners" className="text-[#7CA8A2] hover:text-white transition-colors text-sm" data-testid="link-footer-partners">Design Partners</Link>
          </div>

          <div className="md:col-span-2 lg:col-span-2 flex flex-col gap-4">
            <h3 className="font-serif text-lg font-medium text-white mb-2">Product</h3>
            <Link href="/solution" className="text-[#7CA8A2] hover:text-white transition-colors text-sm" data-testid="link-footer-solution">Solution</Link>
            <Link href="/methodology" className="text-[#7CA8A2] hover:text-white transition-colors text-sm" data-testid="link-footer-methodology">Methodology</Link>
          </div>

          <div className="md:col-span-2 lg:col-span-2 flex flex-col gap-4">
            <h3 className="font-serif text-lg font-medium text-white mb-2">Legal</h3>
            <Link href="/privacy" className="text-[#7CA8A2] hover:text-white transition-colors text-sm" data-testid="link-footer-privacy">Privacy</Link>
            <Link href="/terms" className="text-[#7CA8A2] hover:text-white transition-colors text-sm" data-testid="link-footer-terms">Terms</Link>
          </div>

        </div>

        <div className="pt-8 flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center text-xs text-[#5E6964]">
          <div className="flex flex-col gap-2 max-w-3xl">
            <p>
              EcoArbitrage is an early-stage product concept. Website examples are illustrative and do not represent customer results. Product scope and availability may change during pilot development.
            </p>
            <p>
              Third-party names and trademarks belong to their respective owners. Their appearance does not imply endorsement, integration, or partnership.
            </p>
          </div>
          <div className="shrink-0 text-[#7CA8A2]">
            © {new Date().getFullYear()} EcoArbitrage
          </div>
        </div>
      </div>
    </footer>
  );
}
