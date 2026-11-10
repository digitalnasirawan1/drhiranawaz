import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ExternalLink,
  MessageSquare,
  Navigation,
  ChevronDown,
  Building2,
  AlertCircle,
  FileText,
  CheckCircle2,
  Lock,
  ArrowRight,
  Activity,
  Sparkles
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import SEOHead from '../components/SEOHead';
import { businessInfo } from '../data/businessInfo';

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? -1 : idx);
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://drhiranawaz.com/contact/#webpage",
        "url": "https://drhiranawaz.com/contact/",
        "name": "Contact Dr. Hira Nawaz | Appointments in Faisalabad",
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
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+923211836189",
          "contactType": "appointments"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
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

  const contactFaqs = [
    {
      question: "How can I book an appointment with Dr. Hira Nawaz?",
      answer: "You can book by WhatsApp at https://wa.me/923211836189 or by phone on 0321 1836189. Tell the team your name and a short note about your concern. They will help you choose a suitable time. There is no online booking form."
    },
    {
      question: "What is Dr. Hira Nawaz's phone number?",
      answer: "The appointment phone number is 0321 1836189. On a mobile phone, you can tap the Call for Appointment button on this page to start the call."
    },
    {
      question: "Can I contact the clinic through WhatsApp?",
      answer: "Yes. WhatsApp is one of the two ways to arrange a visit. Use it to ask about an appointment or a simple question about your visit. Replies may not be instant, and a message cannot give a diagnosis or emergency advice."
    },
    {
      question: "Where does Dr. Hira Nawaz see patients?",
      answer: "She sees patients at Faisal Hospital, Plot 547, Muhammadia Colony Block A, People's Colony No 1, Faisalabad, Pakistan. Visit the Location page for the map and visit details.",
      link: { label: "View Clinic Location", url: "/location/" }
    },
    {
      question: "What are her consultation hours?",
      answer: "Monday to Saturday, 4:00 PM to 9:00 PM. These are the doctor's consultation hours, not the hospital's general opening hours. It is best to book before you come."
    },
    {
      question: "Is the clinic open on Sunday?",
      answer: "No. Sunday is closed. You may send a WhatsApp message on Sunday, but a visit will be arranged for a day from Monday to Saturday."
    },
    {
      question: "How can I get directions to Faisal Hospital?",
      answer: "Tap the Get Directions button on this page. It opens Google Maps with the approved location. If you are unsure about the way, call 0321 1836189 before you travel."
    }
  ];

  const currentDayName = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <>
      <SEOHead 
        title="Contact Dr. Hira Nawaz | Appointments in Faisalabad"
        description="Contact Dr. Hira Nawaz, female general and laparoscopic surgeon in Faisalabad. Book by WhatsApp or phone. Consultations at Faisal Hospital, Monday to Saturday, 4 PM to 9 PM."
        canonical="https://drhiranawaz.com/contact/"
        customSchema={contactSchema}
      />

      {/* B3. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#FBF8FA] via-white to-white pt-10 pb-16 md:pt-20 md:pb-24 border-b border-[#E7E7E7] overflow-hidden bg-grid-subtle">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand text-white shadow-glow-brand">
              <Phone className="w-3.5 h-3.5 mr-1.5" />
              Appointments
            </span>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-slate-200 text-medical-heading shadow-subtle">
              Faisal Hospital, Faisalabad
            </span>
          </div>

          <h1 className="font-heading text-fluid-h1 font-extrabold text-medical-heading tracking-tight leading-[1.1] mb-6">
            Contact Dr. Hira Nawaz
          </h1>

          <p className="text-base sm:text-lg text-medical-body leading-relaxed max-w-3xl mx-auto font-normal mb-8">
            You can contact Dr. Hira Nawaz by WhatsApp or phone to arrange a general or laparoscopic surgery consultation. She sees patients at Faisal Hospital in Faisalabad, Monday to Saturday, from 4:00 PM to 9:00 PM. Choose the way that is easiest for you.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-sheen w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#653C61] to-[#4D2B49] hover:from-[#4D2B49] hover:to-[#3A1E37] transition-all shadow-glow-brand hover:shadow-elevated transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-5 h-5 mr-2.5 fill-current" />
              <span>Book Appointment on WhatsApp</span>
            </a>

            <a
              href={businessInfo.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-medical-heading bg-white hover:bg-brand-soft border-2 border-slate-200 hover:border-brand/40 transition-all shadow-subtle hover:shadow-card transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 mr-2 text-brand" />
              <span>Call: 0321 1836189</span>
            </a>
          </div>

        </div>
      </section>

      {/* S01. GET IN TOUCH (Order 1) */}
      <section className="py-12 md:py-16 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-soft/60 rounded-3xl p-6 sm:p-8 border border-brand/20 shadow-subtle text-center sm:text-left">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-medical-heading mb-3">
              Get in Touch
            </h2>
            <div className="space-y-3 text-base sm:text-lg text-medical-body leading-relaxed">
              <p>
                If you would like to see Dr. Hira Nawaz, you can contact the clinic by WhatsApp or by phone. The team will help you ask about a consultation and choose a suitable time.
              </p>
              <p className="text-medical-secondary text-sm sm:text-base">
                Replies may not be instant, so please be patient. If you have urgent symptoms, do not wait for a reply. Go to the nearest hospital emergency department.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S02. WHATSAPP & S03. CALL FOR APPOINTMENT CARDS (Order 2 & 3) */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* S02. WhatsApp Appointment */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-slate-200/90 shadow-card hover:border-emerald-500 hover:shadow-elevated transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-xs">
                    <WhatsAppIcon className="w-7 h-7 fill-current" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                    Primary Option
                  </span>
                </div>

                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-medical-heading mb-2">
                  WhatsApp Appointment
                </h2>

                <div className="text-sm font-bold text-emerald-700 mb-4">
                  WhatsApp Number: 0321 1836189
                </div>

                <div className="space-y-3 text-service-body text-medical-body leading-relaxed mb-6 font-normal">
                  <p>
                    Use WhatsApp to ask about an appointment. Send your name and a short note about why you would like to see the doctor. The team will reply and help you arrange a time.
                  </p>
                  <p className="text-medical-secondary text-sm">
                    WhatsApp is for booking and simple questions about your visit. It does not replace a medical check-up, and the team cannot diagnose a problem by message.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a
                  href={businessInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-sheen inline-flex items-center justify-center w-full px-6 py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-xs"
                >
                  <WhatsAppIcon className="w-5 h-5 mr-2 fill-current" />
                  <span>Book Appointment on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* S03. Call for Appointment */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-slate-200/90 shadow-card hover:border-brand hover:shadow-elevated transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-brand-soft text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors shadow-xs">
                    <Phone className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                    Direct Phone Line
                  </span>
                </div>

                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-medical-heading mb-2">
                  Call for Appointment
                </h2>

                <div className="text-sm font-bold text-brand mb-4">
                  Phone: 0321 1836189
                </div>

                <div className="space-y-3 text-service-body text-medical-body leading-relaxed mb-6 font-normal">
                  <p>
                    You can also call the clinic to ask about arranging a consultation. Say that you would like to see Dr. Hira Nawaz and ask which day and time may suit you.
                  </p>
                  <p className="text-medical-secondary text-sm">
                    Availability depends on the schedule. If you cannot get through, you can send a WhatsApp message instead.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a
                  href={businessInfo.phoneTel}
                  className="inline-flex items-center justify-center w-full px-6 py-4 rounded-xl text-sm sm:text-base font-bold text-medical-heading bg-white hover:bg-brand-soft border-2 border-slate-200 hover:border-brand/40 transition-all shadow-xs"
                >
                  <Phone className="w-4 h-4 mr-2 text-brand" />
                  <span>Call 0321 1836189</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* S04. CONSULTATION HOSPITAL AND ADDRESS (Order 4) */}
      <section className="py-16 md:py-24 bg-[#F7F1F6] border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-brand/10 text-brand mb-3">
              Consultation Location
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              Consultation Hospital and Address
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-card space-y-6">
            <div>
              <p className="text-base sm:text-lg text-medical-body leading-relaxed">
                Dr. Hira Nawaz sees patients at Faisal Hospital.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-soft/50 border border-brand/15 space-y-2">
              <strong className="text-medical-heading block font-bold text-base">Address:</strong>
              <div className="text-base sm:text-lg font-medium text-medical-heading">
                Faisal Hospital, Plot 547, Muhammadia Colony Block A, People's Colony No 1, Faisalabad, Pakistan
              </div>
            </div>

            <p className="text-sm sm:text-base text-medical-secondary leading-relaxed">
              Her professional role as Head of the Surgery Department is at Fauji Foundation Hospital Faisalabad. That is a different hospital. Please attend your appointment at Faisal Hospital.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 border-t border-slate-100">
              <a
                href="https://maps.app.goo.gl/UfRntfLaEcPaeVAU7"
                target="_blank"
                rel="noopener noreferrer"
                className="button-sheen inline-flex items-center px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#653C61] to-[#4D2B49] hover:from-[#4D2B49] hover:to-[#3A1E37] transition-all shadow-glow-brand"
              >
                <Navigation className="w-4 h-4 mr-2" />
                <span>Get Directions</span>
              </a>

              <Link
                to="/location/"
                className="inline-flex items-center px-6 py-3 rounded-xl text-sm font-bold text-medical-heading bg-white hover:bg-brand-soft border border-slate-200 hover:border-brand/40 transition-all shadow-subtle"
              >
                <span>View Clinic Location</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* S05. CONSULTATION DAYS AND HOURS (Order 5) */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-brand-soft text-brand mb-3 border border-brand/20">
              Weekly Timings
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              Consultation Days and Hours
            </h2>
            <p className="mt-3 text-sm sm:text-base text-medical-secondary leading-relaxed">
              These are Dr. Hira Nawaz's consultation hours at Faisal Hospital. They are not the hospital's general opening hours. Please arrange your visit first by WhatsApp or phone.
            </p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-card">
            <div className="p-6 bg-brand-soft/60 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-brand" />
                <span className="font-heading font-bold text-medical-heading">Consultation Timings</span>
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

      {/* S06. BEFORE YOU CONTACT THE CLINIC (Order 6) */}
      <section className="py-16 md:py-24 bg-[#F7F1F6] border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-brand/10 text-brand mb-3">
              Preparation & Privacy
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              Before You Contact the Clinic
            </h2>
            <p className="mt-3 text-sm sm:text-base text-medical-secondary leading-relaxed">
              It helps to be ready with a few simple things:
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-card space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3.5 p-4 rounded-2xl bg-brand-soft/40 border border-brand/10">
                <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-medical-body">
                  A short description of your concern.
                </span>
              </div>

              <div className="flex items-start space-x-3.5 p-4 rounded-2xl bg-brand-soft/40 border border-brand/10">
                <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-medical-body">
                  Your earlier medical reports, if you have them.
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
                  The questions you want to ask.
                </span>
              </div>
            </div>

            {/* Privacy Box */}
            <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
              <div className="flex items-center space-x-2 text-amber-900 font-bold text-base">
                <Lock className="w-4 h-4 text-amber-700" />
                <h3 className="font-heading">A note about privacy</h3>
              </div>
              <p className="text-sm text-amber-900/90 leading-relaxed">
                Please keep your first message short. Do not send medical reports, scan images or photos of your body by WhatsApp unless the clinic asks you to and tells you it is suitable. Bring your reports with you to the consultation instead.
              </p>
              <p className="text-sm text-amber-900/90 leading-relaxed font-medium">
                A message cannot take the place of a medical examination. For urgent symptoms, please go to a hospital emergency department.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* S07. ABOUT DR. HIRA NAWAZ (Order 7) & S08. EXPLORE SURGICAL SERVICES (Order 8) */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* S07. About Dr. Hira Nawaz */}
            <div className="bg-gradient-to-br from-white to-[#FBF8FA] rounded-3xl p-8 border-2 border-slate-200/80 shadow-subtle flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-brand uppercase tracking-wider block mb-2">
                  Doctor Profile
                </span>
                <h2 className="font-heading text-2xl font-bold text-medical-heading mb-4">
                  About Dr. Hira Nawaz
                </h2>
                <p className="text-service-body text-medical-body leading-relaxed mb-6 font-normal">
                  Dr. Hira Nawaz is a female laparoscopic and general surgeon. She holds an MBBS and an FCPS in General Surgery. She is Head of the Surgery Department at Fauji Foundation Hospital Faisalabad, and she sees patients for consultation at Faisal Hospital.
                </p>
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

            {/* S08. Explore Surgical Services */}
            <div className="bg-gradient-to-br from-white to-[#FBF8FA] rounded-3xl p-8 border-2 border-slate-200/80 shadow-subtle flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-brand uppercase tracking-wider block mb-2">
                  Specialties Overview
                </span>
                <h2 className="font-heading text-2xl font-bold text-medical-heading mb-4">
                  Explore Surgical Services
                </h2>
                <p className="text-service-body text-medical-body leading-relaxed mb-6 font-normal">
                  Not sure if your concern is something Dr. Hira Nawaz can help with? You can read about her services first. When you are ready, come back and contact the clinic.
                </p>
              </div>
              <div className="flex flex-col space-y-2 pt-2 border-t border-slate-100">
                <Link
                  to="/services/"
                  className="inline-flex items-center text-sm font-semibold text-brand hover:underline"
                >
                  <span>All Surgical Services</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
                <Link
                  to="/general-surgery/"
                  className="inline-flex items-center text-sm font-semibold text-brand hover:underline"
                >
                  <span>General Surgery</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
                <Link
                  to="/laparoscopic-surgery/"
                  className="inline-flex items-center text-sm font-semibold text-brand hover:underline"
                >
                  <span>Laparoscopic Surgery</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* B5. FAQS */}
      <section className="py-16 md:py-24 bg-[#F7F1F6] border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-brand/10 text-brand mb-3">
              Common Questions
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              Contact and Appointment Questions
            </h2>
          </div>

          <div className="space-y-3.5">
            {contactFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'bg-white border-brand/40 shadow-card' 
                      : 'bg-white hover:bg-[#FDFBFD] border-slate-200/90 shadow-subtle'
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
                    {faq.link && (
                      <div className="mt-3 pt-3 border-t border-slate-100">
                        <Link
                          to={faq.link.url}
                          className="inline-flex items-center text-xs sm:text-sm font-semibold text-brand hover:underline"
                        >
                          <span>{faq.link.label}</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-1" />
                        </Link>
                      </div>
                    )}
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
            <ShieldCheck className="w-4 h-4 mr-1.5 text-rose-200" />
            Dr. Hira Nawaz | MBBS, FCPS (General Surgery)
          </div>

          <h2 className="font-heading text-fluid-h2 font-bold tracking-tight text-white mb-6 leading-tight">
            Ready to Arrange a Consultation?
          </h2>

          <p className="max-w-2xl mx-auto text-fluid-body text-purple-100/90 leading-relaxed mb-8 font-normal">
            Send a WhatsApp message or call the clinic, and the team will help you find a suitable time at Faisal Hospital. Consultations are held Monday to Saturday, from 4:00 PM to 9:00 PM.
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
