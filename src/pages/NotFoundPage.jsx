import { Link } from 'react-router-dom';
import { Home, Activity, Phone, ArrowLeft } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import SEOHead from '../components/SEOHead';
import { businessInfo } from '../data/businessInfo';

export default function NotFoundPage() {
  return (
    <>
      <SEOHead 
        customTitle="404 - Page Not Found | Dr. Hira Nawaz Surgeon Faisalabad"
        customDescription="The requested medical page could not be found. Return to Dr. Hira Nawaz's surgical specialties or book an appointment."
      />

      <section className="py-24 md:py-36 bg-gradient-to-b from-brand-soft/40 to-white">
        <div className="max-w-2xl mx-auto px-4 text-center space-y-6">
          <span className="text-6xl md:text-8xl font-black font-heading text-brand/20">
            404
          </span>

          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-medical-heading tracking-tight">
            Page Not Found
          </h1>

          <p className="text-sm sm:text-base text-medical-secondary leading-relaxed">
            The surgical treatment page or resource you were looking for might have been moved or updated. Please navigate using the options below:
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3.5 rounded-xl bg-brand text-white font-semibold text-xs sm:text-sm hover:bg-brand-hover transition-colors shadow-sm"
            >
              <Home className="w-4 h-4 mr-2" />
              Return to Homepage
            </Link>

            <Link
              to="/services/"
              className="inline-flex items-center px-6 py-3.5 rounded-xl bg-white border border-[#E7E7E7] text-medical-heading font-semibold text-xs sm:text-sm hover:bg-brand-soft transition-colors shadow-subtle"
            >
              <Activity className="w-4 h-4 mr-2 text-brand" />
              Browse Surgical Services
            </Link>

            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3.5 rounded-xl bg-white border border-[#E7E7E7] text-brand font-semibold text-xs sm:text-sm hover:bg-brand-soft transition-colors shadow-subtle"
            >
              <WhatsAppIcon className="w-4 h-4 mr-2 fill-current" />
              Book Appointment
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
