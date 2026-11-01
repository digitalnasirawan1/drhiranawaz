import { Link } from 'react-router-dom';
import { MapPin, Clock, Phone, Navigation, ArrowRight, Building2, Stethoscope, ExternalLink } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { businessInfo } from '../data/businessInfo';

export default function DualLocationSection({ 
  title = "Visit the clinic near you", 
  subtitle = "Dr. Hira Nawaz provides outpatient surgical consultations, diagnostic reviews, and minor surgical procedures at our Private Clinic and Faisal Hospital in Faisalabad."
}) {
  const privateClinicGmb = "https://maps.app.goo.gl/xN24RtbBNCQiNQjg7";
  const faisalHospitalGmb = "https://maps.app.goo.gl/UfRntfLaEcPaeVAU7";

  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand-soft text-brand mb-3 border border-brand/20">
          Consultation Locations
        </span>
        <h2 className="font-heading text-fluid-h2 text-medical-heading tracking-tight">
          {title}
        </h2>
        <p className="mt-3 text-fluid-body text-medical-secondary leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Two Location Cards Grid - Promoted Private Clinic First */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* CARD 1: PRIVATE CLINIC (PROMOTED - FIRST) */}
        <div className="bg-gradient-to-b from-white via-white to-brand-soft/25 rounded-3xl p-6 sm:p-8 border-2 border-brand/60 shadow-elevated ring-4 ring-brand/10 transition-all flex flex-col justify-between group relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-gradient-to-l from-brand to-brand-hover text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-bl-2xl shadow-sm">
            Surgical Clinic
          </div>

          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand text-white shadow-glow-brand">
                <Stethoscope className="w-3.5 h-3.5 mr-1.5" />
                Private Clinic
              </span>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full flex items-center mr-16 sm:mr-0">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block mr-1.5 animate-pulse"></span>
                Open Mon – Sat (4–7 PM)
              </span>
            </div>

            <h3 className="font-heading text-2xl font-bold text-medical-heading mb-1 group-hover:text-brand transition-colors">
              Private Clinic
            </h3>
            <p className="text-sm text-medical-secondary mb-4 font-medium">
              Dedicated Outpatient Consultation & Minor Surgical Care
            </p>

            {/* Embedded Google Map */}
            <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-brand/25 mb-6 shadow-inner bg-slate-100">
              <iframe
                title="Private Clinic Map Location"
                src="https://maps.google.com/maps?q=Behind+Faisal+Hospital+New+Building+People's+Colony+No+1+Faisalabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <a 
                href={privateClinicGmb}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2.5 right-2.5 bg-white/95 hover:bg-white text-medical-heading text-xs font-bold px-3 py-1.5 rounded-xl shadow-card border border-slate-200 inline-flex items-center hover:text-brand transition-all hover:scale-105"
              >
                <span>View on Maps</span>
                <ExternalLink className="w-3 h-3 ml-1.5 text-brand" />
              </a>
            </div>

            {/* Address, Timings, Phone with Icon Badges */}
            <div className="space-y-4 text-sm sm:text-base text-medical-body mb-6">
              <div className="flex items-start space-x-3.5">
                <div className="w-8 h-8 rounded-xl bg-brand-soft text-brand flex items-center justify-center shrink-0 mt-0.5 border border-brand/15">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="leading-relaxed">
                  <strong className="text-medical-heading font-bold">Location Name:</strong> Private Clinic<br />
                  <strong className="text-medical-heading font-bold">Address:</strong> Behind Faisal Hospital (New Building), 547/A Lower Canal Rd E, Muhammadia Colony Block A, People's Colony No 1, Faisalabad, 03822
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start space-x-3.5">
                <div className="w-8 h-8 rounded-xl bg-brand-soft text-brand flex items-center justify-center shrink-0 mt-0.5 border border-brand/15">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-medical-heading font-bold">Consultation Timings:</strong>
                  <span className="text-medical-secondary text-sm">
                    Monday to Saturday: 4:00 PM – 7:00 PM | <span className="text-rose-600 font-semibold">Sunday: Closed</span>
                  </span>
                </div>
              </div>

              {/* Direct Phone */}
              <div className="flex items-center space-x-3.5">
                <div className="w-8 h-8 rounded-xl bg-brand-soft text-brand flex items-center justify-center shrink-0 border border-brand/15">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-medical-heading font-bold">Phone: </strong>
                  <a href={businessInfo.phoneTel} className="text-brand font-extrabold hover:underline">
                    {businessInfo.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Action CTAs - 1st WhatsApp, 2nd Details / Directions */}
          <div className="pt-5 border-t border-slate-100 flex flex-wrap items-center gap-3">
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-sheen flex-1 min-w-[150px] inline-flex items-center justify-center px-4 py-3.5 rounded-xl bg-gradient-to-r from-[#653C61] to-[#4D2B49] hover:from-[#4D2B49] hover:to-[#3A1E37] text-white text-sm font-semibold transition-all shadow-glow-brand hover:shadow-elevated"
            >
              <WhatsAppIcon className="w-4 h-4 mr-2 fill-current" />
              <span>Book Appointment</span>
            </a>

            <a
              href={privateClinicGmb}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-3.5 rounded-xl border border-slate-200 hover:border-brand text-sm font-semibold text-medical-heading hover:text-brand bg-white hover:bg-slate-50 shadow-subtle transition-colors"
            >
              <Navigation className="w-3.5 h-3.5 mr-1.5 text-brand" />
              <span>Get Directions</span>
            </a>

            <Link
              to="/private-clinic/"
              className="inline-flex items-center justify-center px-3.5 py-3.5 rounded-xl text-sm font-semibold text-medical-secondary hover:text-brand hover:underline transition-colors"
            >
              <span>Clinic Details</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>
        </div>

        {/* CARD 2: FAISAL HOSPITAL */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card hover:border-brand/50 hover:shadow-elevated transition-all flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-50 text-brand border border-purple-100">
                <Building2 className="w-3.5 h-3.5 mr-1.5" />
                Hospital Facility
              </span>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full flex items-center">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block mr-1.5"></span>
                Open Mon – Sat (4–7 PM)
              </span>
            </div>

            <h3 className="font-heading text-2xl font-bold text-medical-heading mb-1 group-hover:text-brand transition-colors">
              Faisal Hospital
            </h3>
            <p className="text-sm text-medical-secondary mb-4 font-medium">
              Comprehensive Hospital Admissions & Inpatient Surgical Facility
            </p>

            {/* Embedded Google Map */}
            <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-slate-200 mb-6 shadow-inner bg-slate-100">
              <iframe
                title="Faisal Hospital Map Location"
                src="https://maps.google.com/maps?q=Faisal+Hospital+People's+Colony+1+Faisalabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <a 
                href={faisalHospitalGmb}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2.5 right-2.5 bg-white/95 hover:bg-white text-medical-heading text-xs font-bold px-3 py-1.5 rounded-xl shadow-card border border-slate-200 inline-flex items-center hover:text-brand transition-all hover:scale-105"
              >
                <span>View on Maps</span>
                <ExternalLink className="w-3 h-3 ml-1.5 text-brand" />
              </a>
            </div>

            {/* Address, Timings, Phone with Icon Badges */}
            <div className="space-y-4 text-sm sm:text-base text-medical-body mb-6">
              <div className="flex items-start space-x-3.5">
                <div className="w-8 h-8 rounded-xl bg-purple-50 text-brand flex items-center justify-center shrink-0 mt-0.5 border border-purple-100">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="leading-relaxed">
                  <strong className="text-medical-heading font-bold">Location Name:</strong> Faisal Hospital<br />
                  <strong className="text-medical-heading font-bold">Address:</strong> Plot 547, Muhammadia Colony Block A, People's Colony No 1, Faisalabad, Pakistan
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start space-x-3.5">
                <div className="w-8 h-8 rounded-xl bg-purple-50 text-brand flex items-center justify-center shrink-0 mt-0.5 border border-purple-100">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-medical-heading font-bold">Consultation Timings:</strong>
                  <span className="text-medical-secondary text-sm">
                    Monday to Saturday: 4:00 PM – 7:00 PM | <span className="text-rose-600 font-semibold">Sunday: Closed</span>
                  </span>
                </div>
              </div>

              {/* Direct Phone */}
              <div className="flex items-center space-x-3.5">
                <div className="w-8 h-8 rounded-xl bg-purple-50 text-brand flex items-center justify-center shrink-0 border border-purple-100">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-medical-heading font-bold">Phone: </strong>
                  <a href={businessInfo.phoneTel} className="text-brand font-extrabold hover:underline">
                    {businessInfo.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-5 border-t border-slate-100 flex flex-wrap items-center gap-3">
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-sheen flex-1 min-w-[150px] inline-flex items-center justify-center px-4 py-3.5 rounded-xl bg-gradient-to-r from-[#653C61] to-[#4D2B49] hover:from-[#4D2B49] hover:to-[#3A1E37] text-white text-sm font-semibold transition-all shadow-glow-brand hover:shadow-elevated"
            >
              <WhatsAppIcon className="w-4 h-4 mr-2 fill-current" />
              <span>Book Appointment</span>
            </a>

            <a
              href={faisalHospitalGmb}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-3.5 rounded-xl border border-slate-200 hover:border-brand text-sm font-semibold text-medical-heading hover:text-brand bg-white hover:bg-slate-50 shadow-subtle transition-colors"
            >
              <Navigation className="w-3.5 h-3.5 mr-1.5 text-brand" />
              <span>Get Directions</span>
            </a>

            <Link
              to="/faisal-hospital/"
              className="inline-flex items-center justify-center px-3.5 py-3.5 rounded-xl text-sm font-semibold text-medical-secondary hover:text-brand hover:underline transition-colors"
            >
              <span>Hospital Details</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
