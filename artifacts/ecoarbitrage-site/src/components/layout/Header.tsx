import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F8F5ED]/90 backdrop-blur-md border-b border-[#E8E2D2]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif textxl md:text-2xl font-medium text-[#102C27] tracking-tight hover:opacity-80 transition-opacity" data-testid="link-logo">
          EcoArbitrage
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/solution" className="text-sm font-medium text-[#5E6964] hover:text-[#102C27] transition-colors" data-testid="link-nav-solution">Solution</Link>
          <Link href="/methodology" className="text-sm font-medium text-[#5E6964] hover:text-[#102C27] transition-colors" data-testid="link-nav-methodology">Methodology</Link>
          <Link href="/design-partners" className="text-sm font-medium text-[#5E6964] hover:text-[#102C27] transition-colors" data-testid="link-nav-partners">Design Partners</Link>
          <Link href="/about" className="text-sm font-medium text-[#5E6964] hover:text-[#102C27] transition-colors" data-testid="link-nav-about">About</Link>
          <Link href="/contact" className="text-sm font-medium text-[#5E6964] hover:text-[#102C27] transition-colors" data-testid="link-nav-contact">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center">
          <Link href="/design-partners" className="inline-flex items-center justify-center rounded-[10px] bg-[#102C27] px-4 py-2 text-sm font-medium text-[#F8F5ED] hover:bg-[#173E36] transition-colors" data-testid="link-nav-cta">
            Apply for a pilot
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-[#102C27]" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#F8F5ED] border-b border-[#E8E2D2] shadow-lg flex flex-col p-6 gap-6">
          <Link href="/solution" className="text-lg font-medium text-[#19211E]" data-testid="link-mobile-solution">Solution</Link>
          <Link href="/methodology" className="text-lg font-medium text-[#19211E]" data-testid="link-mobile-methodology">Methodology</Link>
          <Link href="/design-partners" className="text-lg font-medium text-[#19211E]" data-testid="link-mobile-partners">Design Partners</Link>
          <Link href="/about" className="text-lg font-medium text-[#19211E]" data-testid="link-mobile-about">About</Link>
          <Link href="/contact" className="text-lg font-medium text-[#19211E]" data-testid="link-mobile-contact">Contact</Link>
          
          <div className="w-full h-px bg-[#E8E2D2] my-2" />
          
          <Link href="/design-partners" className="inline-flex items-center justify-center rounded-[10px] bg-[#102C27] px-5 py-3 text-base font-medium text-[#F8F5ED] transition-colors" data-testid="link-mobile-cta">
            Apply for a pilot
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 text-base font-medium text-[#315A4D] mt-2" data-testid="link-mobile-secondary-cta">
            Review your workflow <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  );
}
