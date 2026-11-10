import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Clock, 
  Phone, 
  ExternalLink, 
  ShieldCheck, 
  Building2, 
  Navigation,
  CalendarCheck,
  CheckCircle2,
  FileText,
  AlertCircle,
  ArrowRight,
  ChevronDown,
  Activity,
  Sparkles,
  UserCheck
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import SEOHead from '../components/SEOHead';
import { businessInfo } from '../data/businessInfo';

export default function LocationOverviewPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? -1 : idx);
  };

  const locationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://drhiranawaz.com/location/#webpage",
        "url": "https://drhiranawaz.com/location/",
        "name": "Faisal Hospital Location | Dr. Hira Nawaz, Faisalabad",
        "isPartOf": { "@id": "https://drhiranawaz.com/#website" },
        "about": { "@id": "https://drhiranawaz.com/#physician" },
        "inLanguage": "en-PK"
      },
      {
        "@type": "Physician",
        "@id": "https://drhiranawaz.com/#physician",
        "name": "Dr. Hira Nawaz",
        "url": "https://drhiranawaz.com/about/",
        "jobTitle": "Female Laparoscopic & General Surgeon",
        "description": "Female general and laparoscopic surgeon. MBBS, FCPS (General Surgery). Head of Surgery Department, Fauji Foundation Hospital Faisalabad. Sees patients for consultation at Faisal Hospital, Faisalabad.",
        "medicalSpecialty": "Surgical",
        "telephone": "+923211836189",
        "hasMap": "https://maps.app.goo.gl/UfRntfLaEcPaeVAU7",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Faisal Hospital, Plot 547, Muhammadia Colony Block A, People's Colony No 1",
          "addressLocality": "Faisalabad",
          "addressCountry": "PK"
        },
        "location": {
          "@type": "Hospital",
          "name": "Faisal Hospital",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Plot 547, Muhammadia Colony Block A, People's Colony No 1",
            "addressLocality": "Faisalabad",
            "addressCountry": "PK"
          }
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "16:00",
            "closes": "21:00"
          }
        ]
      }
    ]
  };

  const schedule = [
    { day: "Monday", hours: "4:00 PM – 9:00 PM", isOpen: true },
    { day: "Tuesday", hours: "4:00 PM – 9:00 PM", isOpen: true },
    { day: "Wednesday", hours: "4:00 PM – 9:00 PM", isOpen: true },
    { day: "Thursday", hours: "4:00 PM – 9:00 PM", isOpen: true },
    { day: "Friday", hours: "4:00 PM – 9:00 PM", isOpen: true },
    { day: "Saturday", hours: "4:00 PM – 9:00 PM", isOpen: true },
    { day: "Sunday", hours: "Closed", isOpen: false }
  ];

  const locationFaqs = [
    {
      question: "Where is Dr. Hira Nawaz's clinic in Faisalabad?",
      answer: "Dr. Hira Nawaz sees patients at Faisal Hospital, Plot 547, Muhammadia Colony Block A, People's Colony No 1, Faisalabad, Pakistan. Use the Get Directions button on this page to open the map."
    },
    {
      question: "At which hospital does Dr. Hira Nawaz see patients?",
      answer: "She sees patients at Faisal Hospital. This is where consultations are held. Please come to this address for your appointment."
    },
    {
      question: "What are Dr. Hira Nawaz's consultation hours?",
      answer: "Consultations are held Monday to Saturday, from 4:00 PM to 9:00 PM. These are the doctor's consultation hours, not the hours of the whole hospital. Please book a time before you come."
    },
    {
      question: "Is Dr. Hira Nawaz available on Sunday?",
      answer: "No. Sunday is closed. You can send a WhatsApp message at any time, but the team will reply and arrange your visit for a consultation day, Monday to Saturday."
    },
    {
      question: "How can I get directions to Faisal Hospital?",
      answer: "Tap the Get Directions button on this page. It opens Google Maps with the approved location. Then pick how you will travel and follow the map. If you are unsure, call 0321 1836189 before you set out."
    },
    {
      question: "Can I book an appointment through WhatsApp?",
      answer: "Yes. Send a message to https://wa.me/923211836189 with your name and a short note about your concern. You can also call 0321 1836189. A message is for booking and simple questions. It cannot give a diagnosis or emergency advice."
    },
    {
      question: "What should I bring to my first consultation?",
      answer: "Bring your earlier medical reports and scans, a list of your medicines, and a short note about your symptoms. Write down your questions. If you wish, bring a family member for support."
    },
    {
      question: "Does Dr. Hira Nawaz see patients at Fauji Foundation Hospital or Faisal Hospital?",
      answer: "She sees patients for consultation at Faisal Hospital. She is also Head of the Surgery Department at Fauji Foundation Hospital Faisalabad. That is her professional role at the hospital. It is not a second consultation location. Please book and attend your appointment at Faisal Hospital."
    }
  ];

  // Get current day name for schedule highlighting
  const currentDayName = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <>
      <SEOHead 
        title="Faisal Hospital Location | Dr. Hira Nawaz, Faisalabad"
        description="Find Dr. Hira Nawaz at Faisal Hospital, People's Colony No 1, Faisalabad. Consultations Monday to Saturday, 4 PM to 9 PM. Get directions or book by WhatsApp or phone."
        canonical="https://drhiranawaz.com/location/"
        customSchema={locationSchema}
      />

      {/* B3. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#FBF8FA] via-white to-white pt-10 pb-16 md:pt-20 md:pb-24 border-b border-[#E7E7E7] overflow-hidden bg-grid-subtle">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand text-white shadow-glow-brand">
              <MapPin className="w-3.5 h-3.5 mr-1.5" />
              Consultation Location
            </span>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-slate-200 text-medical-heading shadow-subtle">
              <Building2 className="w-3.5 h-3.5 mr-1 text-brand" />
              Faisal Hospital, People's Colony No 1
            </span>
          </div>

          <h1 className="font-heading text-fluid-h1 font-extrabold text-medical-heading tracking-tight leading-[1.1] mb-6">
            Dr. Hira Nawaz Clinic Location in Faisalabad
          </h1>

          <p className="text-base sm:text-lg text-medical-body leading-relaxed max-w-3xl mx-auto font-normal mb-8">
            Dr. Hira Nawaz sees patients for general and laparoscopic surgery consultations at Faisal Hospital in People's Colony No 1, Faisalabad. Consultations are held Monday to Saturday, from 4:00 PM to 9:00 PM. Tap the map button for directions, or contact the clinic to book a time.
          </p>

          {/* Three Stacked/Row CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-2xl mx-auto">
            <a
              href="https://maps.app.goo.gl/UfRntfLaEcPaeVAU7"
              target="_blank"
              rel="noopener noreferrer"
              className="button-sheen w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#653C61] to-[#4D2B49] hover:from-[#4D2B49] hover:to-[#3A1E37] transition-all shadow-glow-brand hover:shadow-elevated transform hover:-translate-y-0.5"
            >
              <Navigation className="w-4 h-4 mr-2" />
              <span>Get Directions</span>
            </a>

            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition-all shadow-subtle hover:shadow-card transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-4 h-4 mr-2 fill-current" />
              <span>Book Appointment on WhatsApp</span>
            </a>

            <a
              href={businessInfo.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold text-medical-heading bg-white hover:bg-brand-soft border-2 border-slate-200 hover:border-brand/40 transition-all shadow-subtle hover:shadow-card transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 mr-2 text-brand" />
              <span>Call for Appointment</span>
            </a>
          </div>

        </div>
      </section>

      {/* S01. CONSULTATION LOCATION OVERVIEW (Order 1) */}
      <section className="py-12 md:py-16 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-soft/60 rounded-3xl p-6 sm:p-8 border border-brand/20 shadow-subtle">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-medical-heading mb-3">
              Where Dr. Hira Nawaz Sees Patients
            </h2>
            <div className="space-y-3 text-base sm:text-lg text-medical-body leading-relaxed">
              <p>
                Dr. Hira Nawaz sees patients at <strong>Faisal Hospital, Plot 547, Muhammadia Colony Block A, People's Colony No 1, Faisalabad, Pakistan</strong>. This is her consultation location for general and laparoscopic surgery.
              </p>
              <p className="text-medical-secondary text-sm sm:text-base">
                She is also Head of the Surgery Department at Fauji Foundation Hospital Faisalabad. That is her professional role. It is not a consultation address. Please come to Faisal Hospital for your appointment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S02. FULL ADDRESS AND GOOGLE MAPS (Order 2) */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-brand-soft text-brand mb-3 border border-brand/20">
              Verified Practice Location
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              Address and Directions
            </h2>
          </div>

          {/* Location Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-slate-200/90 shadow-card hover:border-brand/40 transition-all">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-7 space-y-6">
                <div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-soft text-brand mb-2">
                    <Building2 className="w-3.5 h-3.5 mr-1.5" />
                    Consultation Hospital
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-medical-heading">
                    Faisal Hospital
                  </h3>
                </div>

                <div className="space-y-3 text-base text-medical-body leading-relaxed">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-brand shrink-0 mt-1" />
                    <div>
                      <strong className="text-medical-heading block font-semibold">Address:</strong>
                      <span className="font-medium text-medical-heading">
                        Plot 547, Muhammadia Colony Block A, People's Colony No 1, Faisalabad, Pakistan
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-brand shrink-0 mt-1" />
                    <div>
                      <strong className="text-medical-heading block font-semibold">Appointment Phone:</strong>
                      <a href={businessInfo.phoneTel} className="text-brand font-bold hover:underline">
                        0321 1836189
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <WhatsAppIcon className="w-5 h-5 text-emerald-600 shrink-0 mt-1 fill-current" />
                    <div>
                      <strong className="text-medical-heading block font-semibold">WhatsApp:</strong>
                      <a 
                        href={businessInfo.whatsappUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-emerald-700 font-bold hover:underline"
                      >
                        0321 1836189
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-sm sm:text-base text-medical-secondary leading-relaxed pt-2">
                  <p>
                    To find the hospital, tap the Get Directions button below. Google Maps will open on your phone or computer. Then choose how you will travel and follow the steps on the map.
                  </p>
                  <p>
                    Please use this button so that you reach the right place. If you are not sure, call the clinic before you travel.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="https://maps.app.goo.gl/UfRntfLaEcPaeVAU7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-sheen inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#653C61] to-[#4D2B49] hover:from-[#4D2B49] hover:to-[#3A1E37] transition-all shadow-glow-brand"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    <span>Get Directions</span>
                  </a>

                  <a
                    href={businessInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition-all shadow-subtle"
                  >
                    <WhatsAppIcon className="w-4 h-4 mr-2 fill-current" />
                    <span>Book on WhatsApp</span>
                  </a>

                  <a
                    href={businessInfo.phoneTel}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold text-medical-heading bg-white hover:bg-brand-soft border border-slate-200 hover:border-brand/40 transition-all shadow-subtle"
                  >
                    <Phone className="w-4 h-4 mr-2 text-brand" />
                    <span>Call for Appointment</span>
                  </a>
                </div>

              </div>

              {/* Visual Card / Map Shortcut Column */}
              <div className="md:col-span-5 bg-gradient-to-br from-brand-soft to-white p-6 sm:p-8 rounded-2xl border border-brand/20 flex flex-col justify-between space-y-6">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand text-white flex items-center justify-center mb-4 shadow-glow-brand">
                    <Navigation className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading text-lg font-bold text-medical-heading mb-2">
                    Open in Google Maps
                  </h4>
                  <p className="text-xs sm:text-sm text-medical-secondary leading-relaxed">
                    View real-time navigation, live traffic, and turn-by-turn directions directly to Faisal Hospital in People's Colony No 1, Faisalabad.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-medical-body">
                    <span className="font-bold text-medical-heading block">Landmark Area:</span>
                    People's Colony No 1 / Muhammadia Colony Block A
                  </div>

                  <a
                    href="https://maps.app.goo.gl/UfRntfLaEcPaeVAU7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-xs font-bold text-brand bg-white border-2 border-brand/30 hover:border-brand hover:bg-brand-soft transition-all shadow-xs"
                  >
                    <span>Launch Google Maps Pin</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* S03. CONSULTATION DAYS AND HOURS (Order 3) */}
      <section className="py-16 md:py-24 bg-[#F7F1F6] border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-brand/10 text-brand mb-3">
              Weekly Timings
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              Consultation Days and Hours
            </h2>
            <p className="mt-3 text-sm sm:text-base text-medical-secondary leading-relaxed">
              These are Dr. Hira Nawaz's consultation hours at Faisal Hospital. They are not the opening hours of the whole hospital. Please book a time first by WhatsApp or phone.
            </p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-card">
            <div className="p-6 bg-brand-soft/60 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-brand" />
                <span className="font-heading font-bold text-medical-heading">Outpatient Clinic Schedule</span>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                Mon – Sat: 4:00 PM – 9:00 PM
              </span>
            </div>

            <div className="divide-y divide-slate-100">
              {schedule.map((row, idx) => {
                const isToday = currentDayName.toLowerCase() === row.day.toLowerCase();
                return (
                  <div 
                    key={idx}
                    className={`flex items-center justify-between px-6 py-4 transition-colors ${
                      isToday ? 'bg-brand-soft/40 font-semibold' : 'hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-sm sm:text-base text-medical-heading">{row.day}</span>
                      {isToday && (
                        <span className="text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-md bg-brand text-white">
                          Today
                        </span>
                      )}
                    </div>
                    <div>
                      {row.isOpen ? (
                        <span className="text-sm sm:text-base font-semibold text-brand">
                          {row.hours}
                        </span>
                      ) : (
                        <span className="text-sm sm:text-base font-semibold text-rose-600">
                          Closed
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* S04. HOW TO BOOK AN APPOINTMENT (Order 4) */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-brand-soft text-brand mb-3 border border-brand/20">
              Appointment Guide
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              How to Book an Appointment
            </h2>
            <p className="mt-3 text-sm sm:text-base text-medical-secondary leading-relaxed">
              You can arrange a visit in two simple ways. Choose the one you prefer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* WhatsApp Appointment */}
            <div className="p-8 rounded-3xl bg-white border-2 border-slate-200/90 shadow-card hover:border-emerald-500 hover:shadow-elevated transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <WhatsAppIcon className="w-6 h-6 fill-current" />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-medical-heading mb-3">
                  WhatsApp Appointment
                </h3>
                <p className="text-service-body text-medical-secondary leading-relaxed mb-6">
                  Send a WhatsApp message to the clinic. Tell the team your name and briefly why you would like to see the doctor. The team will help you choose a suitable time.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a
                  href={businessInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-sheen inline-flex items-center justify-center w-full px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-xs"
                >
                  <WhatsAppIcon className="w-4 h-4 mr-2 fill-current" />
                  <span>Book Appointment on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Phone Appointment */}
            <div className="p-8 rounded-3xl bg-white border-2 border-slate-200/90 shadow-card hover:border-brand hover:shadow-elevated transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-soft text-brand flex items-center justify-center mb-5 group-hover:bg-brand group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-medical-heading mb-3">
                  Phone Appointment
                </h3>
                <p className="text-service-body text-medical-secondary leading-relaxed mb-6">
                  Call 0321 1836189. Say that you would like to see Dr. Hira Nawaz and ask for a suitable day and time.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a
                  href={businessInfo.phoneTel}
                  className="inline-flex items-center justify-center w-full px-6 py-3.5 rounded-xl text-sm font-bold text-medical-heading bg-white hover:bg-brand-soft border-2 border-slate-200 hover:border-brand/40 transition-all shadow-xs"
                >
                  <Phone className="w-4 h-4 mr-2 text-brand" />
                  <span>Call for Appointment</span>
                </a>
              </div>
            </div>

          </div>

          <div className="mt-8 text-center text-sm text-medical-secondary">
            You can also visit our{' '}
            <Link to="/contact/" className="text-brand font-semibold underline underline-offset-2 hover:text-brand-hover">
              Contact page
            </Link>{' '}
            for more ways to reach the clinic.
          </div>

        </div>
      </section>

      {/* S05. WHAT TO EXPECT WHEN VISITING (Order 5) */}
      <section className="py-16 md:py-24 bg-[#F7F1F6] border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-brand/10 text-brand mb-3">
              Consultation Preparation
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              Before You Visit
            </h2>
            <p className="mt-3 text-sm sm:text-base text-medical-secondary leading-relaxed">
              A little preparation helps the doctor understand your problem. If you can, bring these things:
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-card space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3.5 p-4 rounded-2xl bg-brand-soft/40 border border-brand/10">
                <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-medical-body">
                  Your earlier medical reports, scans and test results.
                </span>
              </div>

              <div className="flex items-start space-x-3.5 p-4 rounded-2xl bg-brand-soft/40 border border-brand/10">
                <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-medical-body">
                  A list of the medicines you take now.
                </span>
              </div>

              <div className="flex items-start space-x-3.5 p-4 rounded-2xl bg-brand-soft/40 border border-brand/10">
                <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-medical-body">
                  A short note about your symptoms and how long you have had them.
                </span>
              </div>

              <div className="flex items-start space-x-3.5 p-4 rounded-2xl bg-brand-soft/40 border border-brand/10">
                <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-medical-body">
                  The questions you want to ask.
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 text-sm text-medical-secondary space-y-2">
              <p>
                If you are worried about anything, you may bring a family member with you.
              </p>
              <p>
                If you have any question about your visit, message or call the clinic before you come.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* S06. SURGICAL CONSULTATIONS AVAILABLE (Order 6) */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-brand-soft text-brand mb-3 border border-brand/20">
              Clinical Scope
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              Surgical Consultations
            </h2>
            <p className="mt-3 text-sm sm:text-base text-medical-secondary leading-relaxed">
              Dr. Hira Nawaz is a female general and laparoscopic surgeon. At Faisal Hospital, you can talk to her about a surgical concern and learn about your options.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            
            {/* General Surgery Card */}
            <div className="p-7 rounded-3xl bg-white border-2 border-slate-200/90 shadow-subtle hover:border-brand/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-soft text-brand flex items-center justify-center mb-4">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-xl font-bold text-medical-heading mb-2">
                  General Surgery
                </h3>
                <p className="text-sm text-medical-secondary leading-relaxed mb-6">
                  General Surgery covers many common problems, such as hernias, lumps and problems near the back passage.
                </p>
              </div>
              <div>
                <Link
                  to="/general-surgery/"
                  className="inline-flex items-center text-sm font-semibold text-brand hover:underline"
                >
                  <span>Learn About General Surgery</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>

            {/* Laparoscopic Surgery Card */}
            <div className="p-7 rounded-3xl bg-white border-2 border-slate-200/90 shadow-subtle hover:border-brand/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-soft text-brand flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-xl font-bold text-medical-heading mb-2">
                  Laparoscopic Surgery
                </h3>
                <p className="text-sm text-medical-secondary leading-relaxed mb-6">
                  Laparoscopic Surgery is also called keyhole surgery. It uses small cuts and a camera. It is not right for every patient.
                </p>
              </div>
              <div>
                <Link
                  to="/laparoscopic-surgery/"
                  className="inline-flex items-center text-sm font-semibold text-brand hover:underline"
                >
                  <span>Learn About Laparoscopic Surgery</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>

          </div>

          <div className="text-center">
            <Link
              to="/services/"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-brand-soft hover:bg-brand text-brand hover:text-white border border-brand/20 font-semibold text-sm sm:text-base transition-all shadow-subtle group"
            >
              <span>Explore Surgical Services</span>
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* S07. ABOUT DR. HIRA NAWAZ (Order 7) & S08. MORE ABOUT FAISAL HOSPITAL (Order 8) */}
      <section className="py-16 md:py-24 bg-[#F7F1F6] border-b border-[#E7E7E7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* S07. About Dr. Hira Nawaz */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-subtle flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-brand uppercase tracking-wider block mb-2">
                  Verified Surgeon
                </span>
                <h2 className="font-heading text-2xl font-bold text-medical-heading mb-4">
                  About Dr. Hira Nawaz
                </h2>
                <div className="space-y-3 text-service-body text-medical-body leading-relaxed mb-6 font-normal">
                  <p>
                    Dr. Hira Nawaz holds an MBBS and an FCPS in General Surgery. She is Head of the Surgery Department at Fauji Foundation Hospital Faisalabad.
                  </p>
                  <p className="text-medical-secondary">
                    Her professional position is at Fauji Foundation Hospital. Her patient consultations are at Faisal Hospital.
                  </p>
                </div>
              </div>
              <div>
                <Link
                  to="/about/"
                  className="inline-flex items-center text-sm font-semibold text-brand hover:underline group"
                >
                  <span>About Dr. Hira Nawaz</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* S08. More About Faisal Hospital */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-subtle flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-brand uppercase tracking-wider block mb-2">
                  Consultation Facility
                </span>
                <h2 className="font-heading text-2xl font-bold text-medical-heading mb-4">
                  More About Faisal Hospital
                </h2>
                <p className="text-service-body text-medical-body leading-relaxed mb-6 font-normal">
                  Want to know more about the hospital where Dr. Hira Nawaz sees patients? Visit our Faisal Hospital page to learn more about the approved consultation location.
                </p>
              </div>
              <div>
                <Link
                  to="/faisal-hospital/"
                  className="inline-flex items-center text-sm font-semibold text-brand hover:underline group"
                >
                  <span>Learn About Faisal Hospital</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* B5. LOCATION FAQS */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-brand-soft text-brand mb-3 border border-brand/20">
              Questions & Answers
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              Location and Visit Questions
            </h2>
          </div>

          <div className="space-y-3.5">
            {locationFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'bg-white border-brand/40 shadow-card' 
                      : 'bg-[#FDFBFD] hover:bg-white border-slate-200/90 shadow-subtle'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start justify-between text-left p-5 sm:p-6 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    <div className="flex items-start space-x-3.5 pr-4">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-md mt-0.5 shrink-0 ${
                        isOpen ? 'bg-brand text-white' : 'bg-slate-100 text-slate-500'
                      }`}>
                        Q{idx + 1}
                      </span>
                      <h3 className={`font-heading text-base sm:text-lg font-bold leading-snug transition-colors ${
                        isOpen ? 'text-brand' : 'text-medical-heading group-hover:text-brand'
                      }`}>
                        {faq.question}
                      </h3>
                    </div>
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-brand-soft text-brand rotate-180' : 'bg-slate-100 text-slate-400 group-hover:bg-brand-soft group-hover:text-brand'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <div className={`${isOpen ? 'block' : 'hidden'} px-5 sm:px-6 pb-6 pt-1 text-service-body text-medical-body border-t border-slate-100/80`}>
                    <p className="leading-relaxed font-normal">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* B5. FINAL CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#4D2B49] via-[#653C61] to-[#3A1E37] text-white relative overflow-hidden">
        <div className="absolute -right-24 -bottom-24 w-[450px] h-[450px] rounded-full bg-white/10 pointer-events-none blur-3xl"></div>
        <div className="absolute -left-24 -top-24 w-[450px] h-[450px] rounded-full bg-white/5 pointer-events-none blur-3xl"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-rose-100 text-xs font-semibold uppercase tracking-wider mb-6 border border-white/20 shadow-sm backdrop-blur-sm">
            <MapPin className="w-4 h-4 mr-1.5 text-rose-200" />
            Faisal Hospital, People's Colony No 1, Faisalabad
          </div>

          <h2 className="font-heading text-fluid-h2 font-bold tracking-tight text-white mb-6 leading-tight">
            Contact the Clinic Before You Visit
          </h2>

          <p className="max-w-2xl mx-auto text-fluid-body text-purple-100/90 leading-relaxed mb-8 font-normal">
            Please message or call before you come, so the team can help you choose a suitable time. Dr. Hira Nawaz sees patients at Faisal Hospital, Monday to Saturday, from 4:00 PM to 9:00 PM.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-sheen w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-button text-[#653C61] bg-white hover:bg-slate-50 transition-all duration-300 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.35)] hover:shadow-[0_20px_40px_-5px_rgba(255,255,255,0.25)] hover:scale-[1.03] active:scale-95 ring-2 ring-white/40 font-bold"
            >
              <WhatsAppIcon className="w-5 h-5 mr-2.5 fill-current" />
              <span>Book Appointment on WhatsApp</span>
            </a>

            <a
              href={businessInfo.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-button text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm transition-all duration-300 shadow-sm hover:shadow-elevated hover:scale-[1.02] active:scale-95 font-bold"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>Call for Appointment</span>
            </a>

            <a
              href="https://maps.app.goo.gl/UfRntfLaEcPaeVAU7"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-button text-white bg-brand hover:bg-brand-hover border border-white/30 transition-all duration-300 shadow-sm hover:scale-[1.02] active:scale-95 font-bold"
            >
              <Navigation className="w-4 h-4 mr-2" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
