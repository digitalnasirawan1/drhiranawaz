import { Phone, Clock, MapPin, ShieldCheck } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { businessInfo } from '../data/businessInfo';

export default function AppointmentCTA({ 
  title = "Book a Consultation with Dr. Hira Nawaz",
  subtitle = "Discuss your surgical symptoms, diagnostic ultrasound reports, and treatment options at our Private Clinic (Behind Faisal Hospital) or Faisal Hospital in Faisalabad."
}) {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#4D2B49] via-[#653C61] to-[#3A1E37] text-white relative overflow-hidden">
      {/* Decorative ambient radial glows */}
      <div className="absolute -right-24 -bottom-24 w-[450px] h-[450px] rounded-full bg-white/10 pointer-events-none blur-3xl"></div>
      <div className="absolute -left-24 -top-24 w-[450px] h-[450px] rounded-full bg-white/5 pointer-events-none blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-light/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-rose-100 text-xs font-semibold uppercase tracking-wider mb-6 border border-white/20 shadow-sm backdrop-blur-sm">
          <ShieldCheck className="w-4 h-4 mr-1.5 text-rose-200" />
          MBBS, FCPS (General Surgery)
        </div>

        <h2 className="font-heading text-fluid-h2 font-bold tracking-tight text-white mb-6 leading-tight">
          {title}
        </h2>

        <p className="max-w-2xl mx-auto text-fluid-body text-purple-100/90 leading-relaxed mb-8 font-normal">
          {subtitle}
        </p>

        {/* Timings & Locations summary pill */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3.5 text-sm font-medium bg-black/35 backdrop-blur-md px-6 py-3.5 rounded-2xl mb-10 border border-white/20 shadow-elevated">
          <span className="flex items-center text-rose-200">
            <Clock className="w-4 h-4 mr-1.5" />
            Mon – Sat: 4:00 PM – 7:00 PM (Sunday Closed)
          </span>
          <span className="text-purple-300/60">|</span>
          <span className="flex items-center text-purple-100">
            <MapPin className="w-4 h-4 mr-1.5 text-purple-200" />
            Private Clinic: Behind Faisal Hospital, Faisalabad
          </span>
        </div>

        {/* Dual High-Conversion CTA Buttons - 1st WhatsApp, 2nd Call */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={businessInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-sheen w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-button text-[#653C61] bg-white hover:bg-slate-50 transition-all duration-300 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.35)] hover:shadow-[0_20px_40px_-5px_rgba(255,255,255,0.25)] hover:scale-[1.03] active:scale-95 ring-2 ring-white/40"
          >
            <WhatsAppIcon className="w-5 h-5 mr-2 fill-current" />
            <span>Book Appointment</span>
          </a>

          <a
            href={businessInfo.phoneTel}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-button text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm transition-all duration-300 shadow-sm hover:shadow-elevated hover:scale-[1.02] active:scale-95"
          >
            <Phone className="w-4 h-4 mr-2" />
            <span>Call Now: {businessInfo.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
