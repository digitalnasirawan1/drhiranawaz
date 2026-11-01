import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Clock, 
  Phone, 
  ExternalLink, 
  ShieldCheck, 
  Navigation,
  CheckCircle2
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import SEOHead from '../components/SEOHead';
import FaisalHospitalCard from '../components/FaisalHospitalCard';
import AppointmentCTA from '../components/AppointmentCTA';
import MedicalDisclaimerAlert from '../components/MedicalDisclaimerAlert';
import { businessInfo } from '../data/businessInfo';

export default function FaisalHospitalPage() {
  const hospitalSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Hira Nawaz - Faisal Hospital Consultation Clinic",
    "url": "https://drhiranawaz.com/faisal-hospital/",
    "telephone": "+923211836189",
    "medicalSpecialty": "General & Laparoscopic Surgery",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot 547, Muhammadia Colony Block A, People's Colony No 1",
      "addressLocality": "Faisalabad",
      "addressRegion": "Punjab",
      "addressCountry": "PK"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "16:00",
        "closes": "19:00"
      }
    ]
  };

  return (
    <>
      <SEOHead 
        customTitle="Dr. Hira Nawaz at Faisal Hospital Faisalabad | Timings & Directions"
        customDescription="Consultation details for Dr. Hira Nawaz at Faisal Hospital, Plot 547 Muhammadia Colony, People's Colony No 1, Faisalabad. Mon–Sat 4:00 PM – 7:00 PM."
        customSchema={hospitalSchema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-soft via-white to-white py-12 md:py-20 border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand text-white mb-4">
            <MapPin className="w-3.5 h-3.5 mr-1.5" />
            Official Consultation Location
          </span>

          <h1 className="font-heading text-fluid-h1 font-bold text-medical-heading tracking-tight mb-6">
            Dr. Hira Nawaz at Faisal Hospital, Faisalabad
          </h1>

          <p className="text-fluid-body text-medical-body leading-[1.7] max-w-2xl mx-auto">
            Specialist general and laparoscopic surgical consultations conducted Monday through Saturday from 4:00 PM to 7:00 PM at Faisal Hospital.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-sheen inline-flex items-center px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#653C61] to-[#4D2B49] hover:from-[#4D2B49] hover:to-[#3A1E37] shadow-glow-brand hover:shadow-elevated transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 mr-2 fill-current" />
              <span>Book Appointment</span>
            </a>
            <a
              href={businessInfo.phoneTel}
              className="inline-flex items-center px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-medical-heading bg-white border border-[#E7E7E7] hover:bg-brand-soft shadow-subtle transition-colors"
            >
              <Phone className="w-4 h-4 mr-2 text-brand" />
              <span>Call: {businessInfo.phoneDisplay}</span>
            </a>
            <a
              href={businessInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-medical-heading bg-slate-50 border border-[#E7E7E7] hover:bg-brand-soft shadow-subtle transition-colors"
            >
              <Navigation className="w-4 h-4 mr-2 text-brand" />
              <span>Google Maps</span>
            </a>
          </div>
        </div>
      </section>

      {/* Full Hospital Details */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaisalHospitalCard />

          {/* Consultation Notes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-[#E7E7E7] flex flex-col justify-between">
              <div>
                <Clock className="w-6 h-6 text-brand mb-3" />
                <h2 className="font-heading font-semibold text-lg text-medical-heading mb-1.5">Clinic Timings</h2>
                <p className="text-service-body text-medical-secondary leading-[1.6]">
                  Monday to Saturday: 4:00 PM – 7:00 PM.<br />
                  <span className="text-rose-600 font-semibold">Sunday: Closed.</span>
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-[#E7E7E7] flex flex-col justify-between">
              <div>
                <Phone className="w-6 h-6 text-brand mb-3" />
                <h2 className="font-heading font-semibold text-lg text-medical-heading mb-1.5">Appointment Desk</h2>
                <p className="text-service-body text-medical-secondary leading-[1.6]">
                  Direct phone inquiries: <strong className="text-medical-heading font-semibold">{businessInfo.phoneDisplay}</strong>.<br />
                  WhatsApp reservations active daily.
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-[#E7E7E7] flex flex-col justify-between">
              <div>
                <ShieldCheck className="w-6 h-6 text-brand mb-3" />
                <h2 className="font-heading font-semibold text-lg text-medical-heading mb-1.5">Consulting Surgeon</h2>
                <p className="text-service-body text-medical-secondary leading-[1.6]">
                  Dr. Hira Nawaz (MBBS, FCPS). Head of Surgery Department, Fauji Foundation Hospital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </>
  );
}
