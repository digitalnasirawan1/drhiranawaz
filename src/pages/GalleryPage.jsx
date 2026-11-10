import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Camera, 
  X, 
  ZoomIn, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Phone, 
  ChevronDown,
  ArrowRight,
  ExternalLink,
  BookOpen,
  Building2,
  Lock,
  Activity,
  Sparkles,
  Heart
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import SEOHead from '../components/SEOHead';
import { businessInfo } from '../data/businessInfo';

export default function GalleryPage() {
  const [activeImage, setActiveImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? -1 : idx);
  };

  const gallerySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ImageGallery",
        "@id": "https://drhiranawaz.com/gallery/#webpage",
        "url": "https://drhiranawaz.com/gallery/",
        "name": "Photo Gallery | Dr. Hira Nawaz | Female Surgeon in Faisalabad",
        "description": "Authentic clinic photographs, professional portraits, and educational surgical graphics for Dr. Hira Nawaz in Faisalabad.",
        "isPartOf": {
          "@id": "https://drhiranawaz.com/#website"
        },
        "about": {
          "@id": "https://drhiranawaz.com/#physician"
        },
        "inLanguage": "en-PK"
      },
      {
        "@type": "Physician",
        "@id": "https://drhiranawaz.com/#physician",
        "name": "Dr. Hira Nawaz",
        "url": "https://drhiranawaz.com/",
        "jobTitle": "Female Laparoscopic & General Surgeon",
        "description": "Female general and laparoscopic surgeon in Faisalabad. MBBS, FCPS (General Surgery). Head of Surgery Department, Fauji Foundation Hospital Faisalabad.",
        "medicalSpecialty": "Surgical",
        "telephone": "+923211836189",
        "hasMap": "https://maps.app.goo.gl/UfRntfLaEcPaeVAU7",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Faisal Hospital, Plot 547, Muhammadia Colony Block A, People's Colony No 1",
          "addressLocality": "Faisalabad",
          "addressCountry": "PK"
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

  const galleryItems = [
    // Doctor Portraits
    {
      id: "img-01",
      category: "portraits",
      categoryLabel: "Doctor Portrait",
      src: businessInfo.images.heroPortrait,
      title: "Official Doctor Portrait",
      caption: "Dr. Hira Nawaz, MBBS, FCPS (General Surgery) — Female Laparoscopic & General Surgeon in Faisalabad.",
      alt: "Dr. Hira Nawaz professional portrait in white coat, female surgeon in Faisalabad"
    },
    {
      id: "img-02",
      category: "portraits",
      categoryLabel: "Consultant Profile",
      src: businessInfo.images.dp,
      title: "Consultant Profile Photo",
      caption: "Dr. Hira Nawaz — Head of Surgery Department at Fauji Foundation Hospital Faisalabad.",
      alt: "Close-up professional photograph of Dr. Hira Nawaz, general surgeon"
    },
    {
      id: "img-06",
      category: "portraits",
      categoryLabel: "Practice Identity",
      src: businessInfo.images.pic,
      title: "Clinical Practice Portrait",
      caption: "Welcoming female surgical care for patients and families across Faisalabad.",
      alt: "Dr. Hira Nawaz smiling in consultation room in Faisalabad"
    },
    // Clinic & Facilities
    {
      id: "img-03",
      category: "clinic",
      categoryLabel: "OPD Consultation",
      src: businessInfo.images.inOPD,
      title: "Outpatient Consultation Room (OPD)",
      caption: "Dr. Hira Nawaz during evening outpatient consultation hours at Faisal Hospital.",
      alt: "Dr. Hira Nawaz seated at her consultation desk in Faisal Hospital OPD clinic"
    },
    {
      id: "img-04",
      category: "clinic",
      categoryLabel: "Operating Theater",
      src: businessInfo.images.inOT,
      title: "Surgical Operating Theater Environment",
      caption: "Preparation inside the sterile operating theater, following strict surgical safety checklists.",
      alt: "Dr. Hira Nawaz in surgical scrub uniform inside the operating room"
    },
    {
      id: "img-05",
      category: "clinic",
      categoryLabel: "Hospital Facility",
      src: businessInfo.images.clinic,
      title: "Faisal Hospital Consultation Premises",
      caption: "Faisal Hospital consultation entrance, Plot 547, Muhammadia Colony Block A, People's Colony No 1, Faisalabad.",
      alt: "Exterior and reception view of Faisal Hospital clinic building in Faisalabad"
    },
    // Educational Graphics
    {
      id: "img-07",
      category: "educational",
      categoryLabel: "Educational Graphic",
      src: "/images/services/hernia-surgery-dr-hira-nawaz-faisalabad.jpg",
      title: "Hernia Repair Illustration",
      caption: "Diagram showing how a muscle wall opening is closed using a strong, gentle surgical mesh.",
      alt: "Medical illustration of abdominal wall hernia repair with mesh",
      link: { label: "Read About Hernia Surgery", url: "/hernia-surgery/" }
    },
    {
      id: "img-08",
      category: "educational",
      categoryLabel: "Educational Graphic",
      src: "/images/services/gallbladder-stone-surgery-dr-hira-nawaz-faisalabad.jpg",
      title: "Gallbladder & Keyhole Surgery Diagram",
      caption: "Drawing showing laparoscopic removal of a gallbladder with gallstones through tiny keyhole cuts.",
      alt: "Diagram of laparoscopic keyhole surgery for gallbladder stones",
      link: { label: "Read About Gallbladder Surgery", url: "/gallbladder-surgery/" }
    },
    {
      id: "img-09",
      category: "educational",
      categoryLabel: "Educational Graphic",
      src: "/images/services/appendix-surgery-dr-hira-nawaz-faisalabad.jpg",
      title: "Appendix Care Graphic",
      caption: "Medical sketch showing the appendix in the lower right abdomen and keyhole removal steps.",
      alt: "Diagram of appendicitis and keyhole removal steps",
      link: { label: "See Appendix Surgery Details", url: "/appendix-surgery/" }
    },
    {
      id: "img-10",
      category: "educational",
      categoryLabel: "Educational Graphic",
      src: "/images/services/lipoma-removal-surgery-dr-hira-nawaz-faisalabad.jpg",
      title: "Minor Skin Care & Drainage",
      caption: "Simple visual guide showing gentle day-care removal of a harmless fatty lipoma lump under local anaesthetic.",
      alt: "Diagram of day-care lipoma excision under local anaesthetic",
      link: { label: "Read About Lipoma Removal", url: "/lipoma-removal/" }
    }
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const galleryFaqs = [
    {
      question: "What can I find in Dr. Hira Nawaz's photo gallery?",
      answer: "In this gallery, you can see real, verified pictures of Dr. Hira Nawaz, her consultation room and operating theatre settings at Faisal Hospital, and educational drawings of surgical conditions. We do not use stock models or fake computer images."
    },
    {
      question: "Are the medical images in the gallery for educational purposes?",
      answer: "Yes. The medical drawings and condition graphics are designed to help you understand how surgeries like keyhole gallbladder removal or hernia repairs work. They are for general learning only and cannot replace an in-person examination by a doctor."
    },
    {
      question: "Where can I find patient results or before-and-after photographs?",
      answer: "Genuine patient outcome records are kept on our dedicated results page (https://drhiranawaz.com/patient-results-before-after-surgery/). They are only shared when patients have given written permission, and all personal details have been safely removed."
    },
    {
      question: "Can medical photographs show what my own treatment results will look like?",
      answer: "No. Every human body is unique. How quickly you heal, how small your scar looks, and how your symptoms settle depends on your age, health, and personal anatomy. Photographs of other cases give general examples, but your surgeon will explain what is realistic for your specific case during your consultation."
    },
    {
      question: "Where does Dr. Hira Nawaz see patients in Faisalabad?",
      answer: "Dr. Hira Nawaz sees outpatient consultation patients at Faisal Hospital, located at Plot 547, Muhammadia Colony Block A, People's Colony No 1, Faisalabad. Her departmental leadership role is at Fauji Foundation Hospital Faisalabad."
    },
    {
      question: "How can I book an appointment?",
      answer: "You can book an appointment by sending a message on WhatsApp to 0321 1836189 (https://wa.me/923211836189) or by calling 0321 1836189. The clinic team will help you choose a convenient time from Monday to Saturday, between 4:00 PM and 9:00 PM."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Photo Gallery | Dr. Hira Nawaz | Female Surgeon in Faisalabad"
        description="View genuine clinic photos and professional pictures of Dr. Hira Nawaz, female general and laparoscopic surgeon in Faisalabad. Book a consultation at Faisal Hospital."
        canonical="https://drhiranawaz.com/gallery/"
        customSchema={gallerySchema}
      />

      {/* B3. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#FBF8FA] via-white to-white pt-10 pb-16 md:pt-20 md:pb-24 border-b border-[#E7E7E7] overflow-hidden bg-grid-subtle">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand text-white shadow-glow-brand">
              <Camera className="w-3.5 h-3.5 mr-1.5" />
              Clinical Photography & Awareness
            </span>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-slate-200 text-medical-heading shadow-subtle">
              Faisal Hospital, Faisalabad
            </span>
          </div>

          <h1 className="font-heading text-fluid-h1 font-extrabold text-medical-heading tracking-tight leading-[1.1] mb-6">
            Dr. Hira Nawaz Photo Gallery
          </h1>

          <p className="text-base sm:text-lg text-medical-body leading-relaxed max-w-3xl mx-auto font-normal mb-8">
            Welcome to the official photo gallery for Dr. Hira Nawaz. Here you can see real pictures of the clinic, consultation rooms, and surgical awareness graphics. We share only genuine, approved photos so you can feel comfortable before your visit. If you wish to see the doctor, please message or call our clinic team.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto mb-10">
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
              <span>Call for Appointment</span>
            </a>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4 border-t border-slate-200/80">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === 'all'
                  ? 'bg-brand text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-medical-heading hover:border-brand hover:text-brand'
              }`}
            >
              All Pictures ({galleryItems.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('portraits')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === 'portraits'
                  ? 'bg-brand text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-medical-heading hover:border-brand hover:text-brand'
              }`}
            >
              Doctor Portraits
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('clinic')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === 'clinic'
                  ? 'bg-brand text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-medical-heading hover:border-brand hover:text-brand'
              }`}
            >
              Clinic & Facilities
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('educational')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === 'educational'
                  ? 'bg-brand text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-medical-heading hover:border-brand hover:text-brand'
              }`}
            >
              Educational Graphics
            </button>
          </div>

        </div>
      </section>

      {/* S01. GALLERY INTRODUCTION (Order 1) */}
      <section className="py-12 md:py-16 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-soft/60 rounded-3xl p-6 sm:p-8 border border-brand/20 shadow-subtle text-center sm:text-left">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-medical-heading mb-3">
              Real Pictures from Our Medical Practice
            </h2>
            <div className="space-y-3 text-base sm:text-lg text-medical-body leading-relaxed">
              <p>
                Choosing a surgeon is a personal step. Seeing real photographs helps you know what to expect.
              </p>
              <p>
                This gallery brings together approved pictures of Dr. Hira Nawaz, the outpatient clinic at Faisal Hospital, and simple educational drawings.
              </p>
              <p className="text-medical-secondary text-sm sm:text-base">
                We respect patient privacy above all else. We do not show identifying patient pictures without written consent. We also never use fake, computer-generated people. Every photo here shows real medical care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN GALLERY PHOTO GRID */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                onClick={() => setActiveImage(item)}
                className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-subtle hover:shadow-card hover:border-brand/40 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[11px] font-bold text-brand uppercase tracking-wider border border-brand/10">
                    {item.categoryLabel}
                  </div>
                  <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-3 bg-white/90 rounded-full text-brand shadow-md">
                      <ZoomIn className="w-5 h-5" />
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-medical-heading group-hover:text-brand transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-service-body text-medical-secondary leading-relaxed text-sm">
                      {item.caption}
                    </p>
                  </div>

                  {item.link && (
                    <div className="mt-4 pt-3 border-t border-slate-100" onClick={(e) => e.stopPropagation()}>
                      <Link
                        to={item.link.url}
                        className="inline-flex items-center text-xs font-bold text-brand hover:underline"
                      >
                        <span>{item.link.label}</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* S03. PROFESSIONAL ACTIVITIES & S06. PATIENT RESULTS (Order 3 & 6) */}
      <section className="py-16 md:py-24 bg-[#F7F1F6] border-b border-[#E7E7E7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* S03. Professional Activities */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-subtle flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-brand uppercase tracking-wider block mb-2">
                  Academic & Clinical Leadership
                </span>
                <h2 className="font-heading text-2xl font-bold text-medical-heading mb-4">
                  Professional Activities and Academic Work
                </h2>
                <p className="text-service-body text-medical-body leading-relaxed mb-4 font-normal">
                  As Head of the Surgery Department at Fauji Foundation Hospital Faisalabad, Dr. Hira Nawaz trains medical residents, leads surgical audits, and takes part in surgical safety meetings.
                </p>
                <p className="text-xs text-medical-secondary leading-relaxed">
                  Only verified, approved event photographs are displayed. We do not display unverified event photos or fake conference certificates.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  to="/about/"
                  className="inline-flex items-center text-sm font-semibold text-brand hover:underline group"
                >
                  <span>Read About Dr. Hira Nawaz</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* S06. Patient Results & Privacy */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-subtle flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-brand uppercase tracking-wider block mb-2">
                  Medical Confidentiality
                </span>
                <h2 className="font-heading text-2xl font-bold text-medical-heading mb-4">
                  Patient Results & Medical Privacy
                </h2>
                <div className="space-y-3 text-service-body text-medical-body leading-relaxed mb-4 font-normal">
                  <p>
                    Many patients ask if they can see before-and-after pictures. Under Pakistani medical ethics and patient privacy laws, surgical outcome photos can only be shared with written patient consent and after removing all identifying details.
                  </p>
                  <p className="text-medical-secondary text-sm">
                    Every patient heals in their own way. A photo of another person's wound or recovery cannot promise how your body will heal.
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  to="/patient-results-before-after-surgery/"
                  className="inline-flex items-center text-sm font-semibold text-brand hover:underline group"
                >
                  <span>View Patient Results</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* S07. EXPLORE RELATED SURGICAL SERVICES (Order 7) */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-brand-soft text-brand mb-3 border border-brand/20">
              Specialist Treatment Hub
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              Learn More About Our Surgical Care
            </h2>
            <p className="mt-3 text-sm sm:text-base text-medical-secondary leading-relaxed">
              Photographs give a first glimpse, but understanding your treatment choices is what matters most. Read our detailed service guides to learn about symptoms, tests, and care plans:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#FBF8FA] border border-slate-200/90 shadow-subtle hover:border-brand/40 transition-all flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-bold text-lg text-medical-heading mb-2">
                  General Surgery
                </h3>
                <p className="text-sm text-medical-secondary leading-relaxed mb-4">
                  Care for tummy pain, hernias, breast lumps, thyroid swellings, and skin lumps.
                </p>
              </div>
              <div>
                <Link to="/general-surgery/" className="text-xs font-bold text-brand hover:underline inline-flex items-center">
                  <span>Explore General Surgery</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBF8FA] border border-slate-200/90 shadow-subtle hover:border-brand/40 transition-all flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-bold text-lg text-medical-heading mb-2">
                  Laparoscopic Surgery
                </h3>
                <p className="text-sm text-medical-secondary leading-relaxed mb-4">
                  Minimally invasive keyhole procedures with smaller scars and quicker recovery.
                </p>
              </div>
              <div>
                <Link to="/laparoscopic-surgery/" className="text-xs font-bold text-brand hover:underline inline-flex items-center">
                  <span>Explore Laparoscopic Surgery</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBF8FA] border border-slate-200/90 shadow-subtle hover:border-brand/40 transition-all flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-bold text-lg text-medical-heading mb-2">
                  All Surgical Services
                </h3>
                <p className="text-sm text-medical-secondary leading-relaxed mb-4">
                  Full directory of all 13 surgical conditions treated by Dr. Hira Nawaz.
                </p>
              </div>
              <div>
                <Link to="/services/" className="text-xs font-bold text-brand hover:underline inline-flex items-center">
                  <span>View All Services</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* S08. CONSULTATION LOCATION AND HOURS (Order 8) */}
      <section className="py-16 md:py-24 bg-[#F7F1F6] border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-brand/10 text-brand mb-3">
              Consultation Location
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              Visit Dr. Hira Nawaz at Faisal Hospital
            </h2>
            <p className="mt-3 text-sm sm:text-base text-medical-secondary leading-relaxed">
              All outpatient consultations take place at Faisal Hospital in Faisalabad. Please message or call ahead to book your visit so the clinic team can arrange your appointment smoothly.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-card space-y-6">
            <div className="space-y-3 text-base text-medical-body">
              <div className="flex items-start space-x-3">
                <Building2 className="w-5 h-5 text-brand shrink-0 mt-1" />
                <div>
                  <strong className="text-medical-heading block font-semibold">Hospital Facility:</strong>
                  <span>Faisal Hospital</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand shrink-0 mt-1" />
                <div>
                  <strong className="text-medical-heading block font-semibold">Address:</strong>
                  <span>Plot 547, Muhammadia Colony Block A, People's Colony No 1, Faisalabad, Pakistan.</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-brand shrink-0 mt-1" />
                <div>
                  <strong className="text-medical-heading block font-semibold">Consultation Hours:</strong>
                  <span>Monday to Saturday: 4:00 PM – 9:00 PM</span><br />
                  <span className="text-rose-600 font-semibold">Sunday: Closed</span>
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
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
              <a
                href="https://maps.app.goo.gl/UfRntfLaEcPaeVAU7"
                target="_blank"
                rel="noopener noreferrer"
                className="button-sheen inline-flex items-center px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#653C61] to-[#4D2B49] hover:from-[#4D2B49] hover:to-[#3A1E37] transition-all shadow-glow-brand"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                <span>Get Directions on Google Maps</span>
              </a>

              <Link
                to="/location/"
                className="inline-flex items-center px-6 py-3 rounded-xl text-sm font-bold text-medical-heading bg-white hover:bg-brand-soft border border-slate-200 hover:border-brand/40 transition-all shadow-subtle"
              >
                <span>View Location Details</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* B5. FAQS */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-brand-soft text-brand mb-3 border border-brand/20">
              Frequently Asked Questions
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              Gallery & Visit Questions
            </h2>
          </div>

          <div className="space-y-3.5">
            {galleryFaqs.map((faq, idx) => {
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
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* FINAL APPOINTMENT CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#4D2B49] via-[#653C61] to-[#3A1E37] text-white relative overflow-hidden">
        <div className="absolute -right-24 -bottom-24 w-[450px] h-[450px] rounded-full bg-white/10 pointer-events-none blur-3xl"></div>
        <div className="absolute -left-24 -top-24 w-[450px] h-[450px] rounded-full bg-white/5 pointer-events-none blur-3xl"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-rose-100 text-xs font-semibold uppercase tracking-wider mb-6 border border-white/20 shadow-sm backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4 mr-1.5 text-rose-200" />
            Dr. Hira Nawaz | MBBS, FCPS (General Surgery)
          </div>

          <h2 className="font-heading text-fluid-h2 font-bold tracking-tight text-white mb-6 leading-tight">
            Book a Consultation with Dr. Hira Nawaz
          </h2>

          <p className="max-w-2xl mx-auto text-fluid-body text-purple-100/90 leading-relaxed mb-8 font-normal">
            If you have a question about a surgical condition, a lump, or an ultrasound report, you do not have to wait and worry. Send a message on WhatsApp or call our clinic team. We will help you pick a suitable time at Faisal Hospital, Monday to Saturday, 4:00 PM to 9:00 PM.
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
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveImage(null)}
        >
          <div 
            className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              aria-label="Close image popup"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[4/3] bg-slate-950 overflow-hidden relative flex items-center justify-center">
              <img 
                src={activeImage.src} 
                alt={activeImage.alt}
                className="max-h-[60vh] w-auto object-contain mx-auto" 
              />
            </div>

            <div className="p-6 bg-white overflow-y-auto">
              <div className="text-xs font-bold text-brand uppercase tracking-wider mb-1">
                {activeImage.categoryLabel}
              </div>
              <h3 className="font-heading font-bold text-xl text-medical-heading mb-2">
                {activeImage.title}
              </h3>
              <p className="text-sm text-medical-body leading-relaxed">
                {activeImage.caption}
              </p>
              {activeImage.link && (
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <Link
                    to={activeImage.link.url}
                    onClick={() => setActiveImage(null)}
                    className="inline-flex items-center text-xs font-bold text-brand hover:underline"
                  >
                    <span>{activeImage.link.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
