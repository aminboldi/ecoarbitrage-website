import { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isDismissed = sessionStorage.getItem('ea_announcement_dismissed');
    if (!isDismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('ea_announcement_dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="bg-[#152025] text-[#F8F5ED] px-4 py-3 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center text-sm md:text-base font-medium">
        <div className="flex-1 text-center md:flex md:items-center md:justify-center gap-3">
          <span className="hidden md:inline">Selected design-partner pilots are now being scoped for climate grant portfolios.</span>
          <span className="inline md:hidden">Design-partner pilots now being scoped.</span>
          
          <Link href="/design-partners" className="inline-flex items-center gap-1 text-[#7CA8A2] hover:text-white transition-colors underline underline-offset-4 mt-1 md:mt-0 ml-2 md:ml-0 whitespace-nowrap" data-testid="link-announcement-cta">
            Explore the pilot <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <button 
          onClick={handleDismiss} 
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#F8F5ED]/70 hover:text-white transition-colors p-1"
          aria-label="Dismiss announcement"
          data-testid="button-dismiss-announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
