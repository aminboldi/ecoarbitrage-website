import { useSeoMeta } from '@/lib/useSeoMeta';
import { Link } from 'wouter';

export default function NotFound() {
  useSeoMeta("Page Not Found | EcoArbitrage", "The requested page could not be found.");
  
  return (
    <div className="flex-1 flex items-center justify-center min-h-[60vh] bg-[#F8F5ED] px-6">
      <div className="text-center max-w-md">
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-[#102C27] mb-4">
          Page not found
        </h1>
        <p className="text-lg text-[#5E6964] mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center justify-center rounded-[10px] bg-[#102C27] px-6 py-3 text-base font-medium text-[#F8F5ED] hover:bg-[#173E36] transition-colors"
          data-testid="link-not-found-home"
        >
          Return to home
        </Link>
      </div>
    </div>
  );
}
