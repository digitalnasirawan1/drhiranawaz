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
        className="fixed right-4 sm:right-6 bottom-20 lg:bottom-6 z-40 w-14 h-14 rounded-full bg-gradient-to-tr from-[#20ba5a] to-[#25D366] text-white flex items-center justify-center shadow-[0_12px_28px_-4px_rgba(37,211,102,0.55)] hover:shadow-[0_16px_36px_-4px_rgba(37,211,102,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 group border-2 border-white ring-2 ring-[#25D366]/30"
        title="Book Appointment via WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 fill-current drop-shadow-sm" />
        <span className="sr-only">Book Appointment on WhatsApp</span>

        {/* Pulse effect rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none"></span>
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/20 animate-aura-pulse pointer-events-none"></span>

        {/* Tooltip on desktop hover */}
        <span className="hidden lg:group-hover:inline-block absolute right-16 bg-medical-heading/95 backdrop-blur-md text-white text-xs font-bold px-3.5 py-2 rounded-xl whitespace-nowrap shadow-xl border border-white/15 animate-in fade-in slide-in-from-right-1 duration-200">
          Book Appointment
        </span>
      </a>

      {/* 2. BACK TO TOP BUTTON (SIDEBAR / RIGHT BOTTOM - POSITIONED CLEANLY ABOVE WHATSAPP) */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed right-4 sm:right-6 bottom-36 lg:bottom-24 z-40 w-11 h-11 rounded-full bg-white/95 backdrop-blur-md text-medical-heading border border-slate-200 shadow-elevated hover:bg-brand-soft hover:text-brand hover:border-brand/50 hover:shadow-glow-soft active:scale-95 flex items-center justify-center transition-all duration-300"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5 text-brand" />
          <span className="sr-only">Back to Top</span>
        </button>
      )}

      {/* 3. MOBILE BOTTOM FLOATING BAR (CALL + MAP URL + BOOK APPOINTMENT WITH WHATSAPP ICON - ALL IN SINGLE LINE) */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-xl border-t border-brand/15 shadow-[0_-10px_30px_rgba(101,60,97,0.12)] py-2.5 px-3">
        <div className="flex items-center gap-2 max-w-md mx-auto">
          
          {/* Call Button (Icon + Text in single line) */}
          <a
            href={businessInfo.phoneTel}
            className="flex items-center justify-center px-3 py-2.5 rounded-xl bg-slate-50/90 border border-slate-200 text-medical-heading shrink-0 text-xs font-bold hover:bg-brand-soft active:scale-95 transition-all shadow-subtle"
          >
            <Phone className="w-3.5 h-3.5 text-brand shrink-0 mr-1.5" />
            <span>Call</span>
          </a>

          {/* Map URL Button (Icon + Text in single line) */}
          <a
            href={clinicGmbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-3 py-2.5 rounded-xl bg-slate-50/90 border border-slate-200 text-medical-heading shrink-0 text-xs font-bold hover:bg-brand-soft active:scale-95 transition-all shadow-subtle"
          >
            <MapPin className="w-3.5 h-3.5 text-brand shrink-0 mr-1.5" />
            <span>Map</span>
          </a>

          {/* Book Appointment (Complete text + WhatsApp Icon in single line) */}
          <a
            href={businessInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-sheen flex-1 min-w-0 flex items-center justify-center px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-[#653C61] via-[#5A3357] to-[#4D2B49] hover:from-[#4D2B49] hover:to-[#3A1E37] text-white text-xs font-bold active:scale-95 transition-all shadow-glow-brand ring-1 ring-white/20 whitespace-nowrap"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current text-white shrink-0 mr-1.5" />
            <span>Book Appointment</span>
          </a>

        </div>
      </div>
    </>
  );
}
