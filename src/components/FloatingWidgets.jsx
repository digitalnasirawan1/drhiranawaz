import { useState, useEffect } from 'react';
import { Phone, MapPin, ArrowUp } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { businessInfo } from '../data/businessInfo';

export default function FloatingWidgets() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const clinicGmbUrl = "https://maps.app.goo.gl/xN24RtbBNCQiNQjg7";

  return (
    <>
      {/* 1. FLOATING WHATSAPP APPOINTMENT CIRCLE BUTTON (MOVED TO RIGHT SIDE) */}
      <a
        href={businessInfo.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book Appointment on WhatsApp"
        className="fixed right-4 sm:right-6 bottom-20 lg:bottom-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(37,211,102,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 group border-2 border-white"
        title="Book Appointment via WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 fill-current" />
        <span className="sr-only">Book Appointment on WhatsApp</span>

        {/* Pulse effect ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none"></span>

        {/* Tooltip on desktop hover */}
        <span className="hidden lg:group-hover:inline-block absolute right-16 bg-medical-heading text-white text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-xl border border-white/10">
          Book Appointment
        </span>
      </a>

      {/* 2. BACK TO TOP BUTTON (SIDEBAR / RIGHT BOTTOM - POSITIONED CLEANLY ABOVE WHATSAPP) */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed right-4 sm:right-6 bottom-36 lg:bottom-24 z-40 w-11 h-11 rounded-full bg-white text-medical-heading border border-slate-200 shadow-elevated hover:bg-brand-soft hover:text-brand hover:border-brand/50 active:scale-95 flex items-center justify-center transition-all duration-300"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5 text-brand" />
          <span className="sr-only">Back to Top</span>
        </button>
      )}

      {/* 3. MOBILE BOTTOM FLOATING BAR (CALL + MAP URL + BOOK APPOINTMENT WITH WHATSAPP ICON - ALL IN SINGLE LINE) */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200 shadow-[0_-6px_25px_rgba(0,0,0,0.08)] py-2.5 px-3">
        <div className="flex items-center gap-2 max-w-md mx-auto">
          
          {/* Call Button (Icon + Text in single line) */}
          <a
            href={businessInfo.phoneTel}
            className="flex items-center justify-center px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-medical-heading shrink-0 text-xs font-bold active:bg-slate-100 transition-colors shadow-subtle"
          >
            <Phone className="w-3.5 h-3.5 text-brand shrink-0 mr-1.5" />
            <span>Call</span>
          </a>

          {/* Map URL Button (Icon + Text in single line) */}
          <a
            href={clinicGmbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-medical-heading shrink-0 text-xs font-bold active:bg-slate-100 transition-colors shadow-subtle"
          >
            <MapPin className="w-3.5 h-3.5 text-brand shrink-0 mr-1.5" />
            <span>Map</span>
          </a>

          {/* Book Appointment (Complete text + WhatsApp Icon in single line) */}
          <a
            href={businessInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-sheen flex-1 min-w-0 flex items-center justify-center px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-[#653C61] to-[#4D2B49] text-white text-xs font-bold active:bg-[#3A1E37] transition-colors shadow-glow-brand whitespace-nowrap"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current text-white shrink-0 mr-1.5" />
            <span>Book Appointment</span>
          </a>

        </div>
      </div>
    </>
  );
}
