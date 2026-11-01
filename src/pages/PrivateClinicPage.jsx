import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Clock, 
  Phone, 
  ShieldCheck, 
  Navigation, 
  CheckCircle2, 
  Stethoscope,
  Activity, 
  ArrowRight 
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import SEOHead from '../components/SEOHead';
import AppointmentCTA from '../components/AppointmentCTA';
import MedicalDisclaimerAlert from '../components/MedicalDisclaimerAlert';
import { businessInfo } from '../data/businessInfo';

export default function PrivateClinicPage() {
  const clinicHours = [
    { day: "Monday", time: "4:00 PM – 7:00 PM", isOpen: true },
    { day: "Tuesday", time: "4:00 PM – 7:00 PM", isOpen: true },
    { day: "Wednesday", time: "4:00 PM – 7:00 PM", isOpen: true },
    { day: "Thursday", time: "4:00 PM – 7:00 PM", isOpen: true },
    { day: "Friday", time: "4:00 PM – 7:00 PM", isOpen: true },
    { day: "Saturday", time: "4:00 PM – 7:00 PM", isOpen: true },
    { day: "Sunday", time: "Closed", isOpen: false }
  ];

  const clinicSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Hira Nawaz - Clinic Faisalabad",
    "url": "https://drhiranawaz.com/private-clinic/",
    "telephone": "+923211836189",
    "medicalSpecialty": "General & Laparoscopic Surgery",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Behind Faisal Hospital (New Building), 547/A Lower Canal Rd E, Muhammadia Colony Block A, People's Colony No 1",
      "addressLocality": "Faisalabad",
      "postalCode": "03822",
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
        customTitle="Private Clinic | Dr. Hira Nawaz Female Surgeon Faisalabad"
        customDescription="Consult Dr. Hira Nawaz at Private Clinic, Behind Faisal Hospital (New Building), 547/A Lower Canal Rd E, Faisalabad. Mon–Sat 4:00 PM – 7:00 PM. Call 0321 1836189."
        customSchema={clinicSchema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-soft via-white to-white py-12 md:py-20 border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand text-white mb-4">
            <Stethoscope className="w-3.5 h-3.5 mr-1.5" />
            Specialist Surgical Practice
          </span>

          <h1 className="font-heading text-fluid-h1 font-bold text-medical-heading tracking-tight mb-6">
            Dr. Hira Nawaz — Private Clinic
          </h1>

          <p className="text-fluid-body text-medical-body leading-[1.7] max-w-2xl mx-auto">
            Outpatient surgical consultations, clinical evaluations, and minor surgical procedures by Female General & Laparoscopic Surgeon Dr. Hira Nawaz.
          </p>

          {/* Primary CTA WhatsApp, Secondary CTA Call */}
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
          </div>
        </div>
      </section>

      {/* Detailed Clinic Information Card */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-brand/20 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand">Consultation Practice</span>
                  <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading mt-1">
                    Private Clinic Details
                  </h2>
                </div>

                <div className="space-y-4 text-base text-medical-body leading-relaxed">
                  <div className="flex items-start space-x-3.5">
                    <MapPin className="w-5 h-5 text-brand shrink-0 mt-1" />
                    <div>
                      <strong className="block text-medical-heading font-semibold text-base mb-0.5">Address:</strong>
                      <span className="leading-relaxed">
                        Behind Faisal Hospital (New Building), 547/A Lower Canal Rd E, Muhammadia Colony Block A, People's Colony No 1, Faisalabad, 03822
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <Clock className="w-5 h-5 text-brand shrink-0 mt-1" />
                    <div>
                      <strong className="block text-medical-heading font-semibold">Consultation Timings:</strong>
                      <span className="text-medical-secondary">
                        Monday to Saturday: 4:00 PM – 7:00 PM<br />
                        <span className="text-rose-600 font-semibold">Sunday: Closed</span>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <Phone className="w-5 h-5 text-brand shrink-0 mt-1" />
                    <div>
                      <strong className="block text-medical-heading font-semibold">Direct Phone / WhatsApp:</strong>
                      <a href={businessInfo.phoneTel} className="text-brand font-bold text-base hover:underline">
                        {businessInfo.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <ShieldCheck className="w-5 h-5 text-brand shrink-0 mt-1" />
                    <p className="text-sm text-medical-secondary leading-relaxed">
                      <strong className="text-medical-heading font-semibold">Surgeon Identity:</strong> Dr. Hira Nawaz (MBBS, FCPS General Surgery), Head of Surgery Department at Fauji Foundation Hospital Faisalabad.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a 
                    href={businessInfo.googleMapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-medical-heading font-semibold text-sm sm:text-base transition-colors border border-[#E7E7E7]"
                  >
                    <Navigation className="w-4 h-4 mr-2 text-brand" />
                    Open Directions in Google Maps
                  </a>
                  <a
                    href={businessInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-sheen inline-flex items-center px-5 py-3 rounded-xl bg-gradient-to-r from-[#653C61] to-[#4D2B49] hover:from-[#4D2B49] hover:to-[#3A1E37] text-white font-semibold text-sm sm:text-base transition-colors shadow-glow-brand hover:shadow-elevated"
                  >
                    <WhatsAppIcon className="w-4 h-4 mr-2 fill-current" />
                    Book Appointment
                  </a>
                </div>
              </div>

              {/* Weekly Timings Table */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-[#E7E7E7]">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
                  <div className="font-heading font-bold text-base sm:text-lg text-medical-heading">Weekly Schedule</div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    Open Mon – Sat
                  </span>
                </div>

                <div className="space-y-2">
                  {clinicHours.map((h, i) => (
                    <div key={i} className="flex justify-between text-sm sm:text-base py-2 border-b border-slate-100">
                      <span className="font-semibold text-medical-heading">{h.day}</span>
                      <span className={h.isOpen ? "text-emerald-700 font-medium" : "text-rose-600 font-medium"}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 text-xs sm:text-sm text-medical-secondary">
                  Please message in advance on WhatsApp for appointment confirmation.
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Services Provided at this Clinic */}
      <section className="py-16 md:py-20 bg-[#F7F1F6] border-b border-[#E7E7E7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">Clinical Scope</span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading mt-1">
              Consultations & Day-Care Procedures
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E7E7E7] shadow-subtle flex flex-col justify-between">
              <div>
                <Activity className="w-6 h-6 text-brand mb-3" />
                <h3 className="font-heading font-semibold text-lg text-medical-heading mb-2">Surgical Evaluations</h3>
                <p className="text-service-body text-medical-secondary leading-[1.6]">
                  Comprehensive clinical assessment for abdominal wall hernias, gallbladder stones, and breast lumps.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E7E7E7] shadow-subtle flex flex-col justify-between">
              <div>
                <CheckCircle2 className="w-6 h-6 text-brand mb-3" />
                <h3 className="font-heading font-semibold text-lg text-medical-heading mb-2">Day-Care Excision</h3>
                <p className="text-service-body text-medical-secondary leading-[1.6]">
                  Painless minor excisions under local anesthesia for lipomas, sebaceous cysts, and skin lumps.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E7E7E7] shadow-subtle flex flex-col justify-between">
              <div>
                <Clock className="w-6 h-6 text-brand mb-3" />
                <h3 className="font-heading font-semibold text-lg text-medical-heading mb-2">Postoperative Follow-Up</h3>
                <p className="text-service-body text-medical-secondary leading-[1.6]">
                  Wound checks, suture removal, and customized dietary and activity recovery guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <MedicalDisclaimerAlert />
      </div>

      <AppointmentCTA />
    </>
  );
}
