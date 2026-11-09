import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  MapPin, 
  Clock, 
  Phone, 
  ArrowRight, 
  Sparkles, 
  Stethoscope, 
  Activity, 
  Building2, 
  ExternalLink,
  MessageSquare,
  FileText,
  CalendarCheck,
  CheckCircle2,
  Video,
  Award,
  UserCheck,
  Heart,
  ChevronRight,
  Check
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import SEOHead from '../components/SEOHead';
import FAQAccordion from '../components/FAQAccordion';
import { businessInfo } from '../data/businessInfo';

export default function HomePage() {
  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://drhiranawaz.com/#website",
        "url": "https://drhiranawaz.com/",
        "name": "Dr. Hira Nawaz"
      },
      {
        "@type": "WebPage",
        "@id": "https://drhiranawaz.com/#webpage",
        "url": "https://drhiranawaz.com/",
        "name": "Female General Surgeon in Faisalabad | Dr. Hira Nawaz",
        "isPartOf": { "@id": "https://drhiranawaz.com/#website" },
        "about": { "@id": "https://drhiranawaz.com/#physician" },
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

  const quickHighlights = [
    {
      title: "FCPS General Surgery",
      subtitle: "CPSP Specialist Qualification",
      icon: Award
    },
    {
      title: "Head of Surgery Department",
      subtitle: "Fauji Foundation Hospital FSD",
      icon: Building2
    },
    {
      title: "General & Keyhole Surgery",
      subtitle: "Minimally Invasive Options",
      icon: Sparkles
    },
    {
      title: "Consultation: Mon – Sat",
      subtitle: "4:00 PM – 9:00 PM at Faisal Hospital",
      icon: Clock
    }
  ];

  const featuredTreatments = [
    {
      title: "Hernia Surgery",
      text: "A hernia is a bulge that appears when part of the bowel or tissue pushes through a weak spot in the muscle wall, often in the groin. Surgery is the only way to repair it. Your surgeon will tell you if and when you need it.",
      cta: "Read About Hernia Surgery",
      url: "/hernia-surgery/",
      badge: "Abdominal & Groin",
      icon: ShieldCheck
    },
    {
      title: "Gallbladder Surgery",
      text: "Gallstones are hard lumps that can form in the gallbladder. Many cause no problems. If they cause repeated pain or other problems, removing the gallbladder is the usual treatment.",
      cta: "Learn About Gallbladder Surgery",
      url: "/gallbladder-surgery/",
      badge: "Laparoscopic Care",
      icon: Sparkles
    },
    {
      title: "Appendix Surgery",
      text: "Appendicitis is swelling and infection of the appendix. It usually causes pain in the lower right side of the tummy and needs urgent medical care. Surgery to remove the appendix is the usual treatment.",
      cta: "See Appendix Surgery Details",
      url: "/appendix-surgery/",
      badge: "Emergency & Elective",
      icon: Activity
    },
    {
      title: "Thyroid Surgery",
      text: "The thyroid is a small gland in the neck. A lump, a swollen thyroid or an overactive thyroid may need a specialist check. Surgery is only one of the possible options.",
      cta: "Understand Thyroid Surgery",
      url: "/thyroid-surgery/",
      badge: "Endocrine Surgery",
      icon: Stethoscope
    },
    {
      title: "Breast Surgery",
      text: "Most breast lumps are not cancer, but every new lump should be checked. A visit can help you find the cause and decide on the next step. Surgery is needed only in some cases.",
      cta: "Read About Breast Surgery",
      url: "/breast-surgery/",
      badge: "Clinical Assessment",
      icon: Heart
    },
    {
      title: "Hemorrhoids Surgery",
      text: "Hemorrhoids, also called piles, are swollen veins in or around the back passage. Many improve with simple care or small treatments. Surgery may be advised when other treatments have not worked.",
      cta: "Learn About Piles Treatment",
      url: "/hemorrhoids-surgery/",
      badge: "Anorectal Care",
      icon: CheckCircle2
    },
    {
      title: "Fistula in Ano Surgery",
      text: "An anal fistula is a small tunnel between the inside of the back passage and the skin nearby. It often follows an abscess and rarely heals on its own. Surgery is usually needed, and the method depends on where the tunnel lies.",
      cta: "See Fistula Treatment",
      url: "/fistula-in-ano-surgery/",
      badge: "Specialized Repair",
      icon: FileText
    },
    {
      title: "Lipoma Removal",
      text: "A lipoma is a soft, fatty lump under the skin. It is usually harmless and often needs no treatment. Removal can be discussed if it is painful, growing or causes trouble.",
      cta: "Read About Lipoma Removal",
      url: "/lipoma-removal/",
      badge: "Day-Care Procedure",
      icon: UserCheck
    }
  ];

  const whyConsultPoints = [
    {
      num: "01",
      title: "Female general and laparoscopic surgeon.",
      desc: "Some patients feel more comfortable speaking about their health with a female surgeon.",
      icon: UserCheck
    },
    {
      num: "02",
      title: "MBBS, FCPS (General Surgery).",
      desc: "These are recognised medical and surgical qualifications.",
      icon: Award
    },
    {
      num: "03",
      title: "Head of Surgery Department.",
      desc: "Dr. Hira Nawaz leads the Surgery Department at Fauji Foundation Hospital Faisalabad.",
      icon: Building2
    },
    {
      num: "04",
      title: "Consultation at Faisal Hospital.",
      desc: "You can meet her at Faisal Hospital, People's Colony No 1, Faisalabad.",
      icon: MapPin
    },
    {
      num: "05",
      title: "Easy appointments.",
      desc: "Book by WhatsApp or phone, Monday to Saturday.",
      icon: CalendarCheck
    }
  ];

  const consultationSteps = [
    {
      step: "01",
      title: "Contact the Clinic",
      text: "Send a message on WhatsApp or call 0321 1836189. Tell the team that you would like to see Dr. Hira Nawaz.",
      icon: MessageSquare
    },
    {
      step: "02",
      title: "Arrange Your Consultation",
      text: "Choose a day and time that suits you. Consultations are held Monday to Saturday, from 4:00 PM to 9:00 PM.",
      icon: CalendarCheck
    },
    {
      step: "03",
      title: "Discuss Your Symptoms",
      text: "At the visit, describe your problem in your own words. Bring any reports, scans or medicine lists you already have.",
      icon: Stethoscope
    },
    {
      step: "04",
      title: "Understand Your Treatment Options",
      text: "Dr. Hira Nawaz may examine you and talk about test results or further tests. She will explain the options that suit your case. Not every problem needs an operation.",
      icon: FileText
    }
  ];

  const homeFaqs = [
    {
      question: "What does a general surgeon treat?",
      answer: "A general surgeon treats many problems of the tummy and digestive system. This includes hernias, gallstones, appendicitis, piles and anal fistulas. A general surgeon also looks after lumps in the breast, neck and skin, and thyroid problems. Not every problem needs an operation. Your surgeon will check you first and then explain your options."
    },
    {
      question: "What is laparoscopic surgery?",
      answer: "Laparoscopic surgery is also called keyhole surgery. The surgeon makes a few small cuts and passes a thin tube with a camera inside. The camera shows the inside of the body on a screen. The surgeon uses thin tools to do the operation. Many patients have smaller scars and recover faster than after open surgery, but this depends on the problem and the person."
    },
    {
      question: "Is laparoscopic surgery suitable for everyone?",
      answer: "No. Some patients are better treated with a standard (open) operation. This can depend on the problem, earlier surgery, other health conditions or an emergency. Sometimes a surgeon starts with keyhole surgery and then changes to open surgery for safety. Your surgeon will explain which method is safest for you."
    },
    {
      question: "When should I see a general surgeon?",
      answer: "See a surgeon if you have a new lump, a bulge in the groin or tummy, ongoing tummy pain, bleeding from the back passage, or a painful problem near the back passage. Do not wait if you are worried. If you have sudden severe pain, repeated vomiting, fever, or a hard, painful lump that does not go back in, go to the nearest hospital emergency department straight away. This website cannot give emergency care."
    },
    {
      question: "Does every surgical problem need an operation?",
      answer: "No. Some problems need only tests, medicine or simple care at home. Some can be watched over time. For example, many gallstones cause no symptoms and need no treatment, and many lipomas are harmless. Surgery is advised when it is the best way to treat the problem or prevent complications. The decision is made after an examination and a talk with you."
    },
    {
      question: "Where does Dr. Hira Nawaz see patients in Faisalabad?",
      answer: "Dr. Hira Nawaz sees patients for consultation at Faisal Hospital, Plot 547, Muhammadia Colony Block A, People's Colony No 1, Faisalabad. Consultation hours are Monday to Saturday, 4:00 PM to 9:00 PM. The clinic is closed on Sunday. She is also Head of the Surgery Department at Fauji Foundation Hospital Faisalabad."
    },
    {
      question: "How can I book an appointment with Dr. Hira Nawaz?",
      answer: "You can book by WhatsApp at https://wa.me/923211836189 or by phone on 0321 1836189. Tell the team your name and your main concern. They will help you choose a suitable time."
    },
    {
      question: "What should I bring to my first consultation?",
      answer: "Bring any medical reports, scan films or reports, blood test results and a list of the medicines you take. Bring papers from any earlier surgery or hospital stay. Also bring your CNIC, and write down your symptoms and questions. These help the doctor understand your case quickly."
    }
  ];

  return (
    <>
      <SEOHead customSchema={homepageSchema} />

      {/* B3. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#FBF8FA] via-white to-white pt-10 pb-16 md:pt-20 md:pb-28 overflow-hidden border-b border-[#E7E7E7] bg-grid-subtle">
        {/* Ambient atmospheric glow spheres */}
        <div className="absolute top-0 right-1/4 w-[520px] h-[520px] bg-brand/5 rounded-full blur-3xl pointer-events-none animate-aura-pulse"></div>
        <div className="absolute bottom-10 -left-20 w-[420px] h-[420px] bg-[#653C61]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 order-1 space-y-6 text-center lg:text-left">
              
              {/* Eyebrow Trust Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-brand to-brand-hover text-white shadow-glow-brand ring-2 ring-brand/15">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-rose-200" />
                  MBBS, FCPS (General Surgery)
                </span>
                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/95 backdrop-blur-md border border-brand/20 text-medical-heading shadow-subtle">
                  <MapPin className="w-3.5 h-3.5 mr-1.5 text-brand" />
                  Faisal Hospital, Faisalabad
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-1.5"></span>
                  Mon – Sat Consultations
                </span>
              </div>

              {/* H1 Primary Heading */}
              <div>
                <h1 className="font-heading text-fluid-h1 font-extrabold text-medical-heading tracking-tight leading-[1.08]">
                  Female General & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#653C61] via-[#4D2B49] to-[#653C61]">Laparoscopic Surgeon</span> in Faisalabad
                </h1>
              </div>

              {/* Intro / supporting copy */}
              <p className="text-base sm:text-lg text-medical-body leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Dr. Hira Nawaz is a female general and laparoscopic surgeon in Faisalabad. She is Head of the Surgery Department at Fauji Foundation Hospital Faisalabad. You can meet her at Faisal Hospital to talk about your symptoms and your treatment options. Send a WhatsApp message or call the clinic to arrange a consultation.
              </p>

              {/* Hero CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={businessInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-sheen w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#653C61] to-[#4D2B49] hover:from-[#4D2B49] hover:to-[#3A1E37] transition-all shadow-glow-brand hover:shadow-elevated transform hover:-translate-y-0.5 active:scale-95"
                >
                  <WhatsAppIcon className="w-5 h-5 mr-2.5 fill-current" />
                  <span>Book Appointment on WhatsApp</span>
                </a>

                <a
                  href={businessInfo.phoneTel}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-medical-heading bg-white hover:bg-brand-soft border-2 border-slate-200 hover:border-brand/40 transition-all shadow-subtle hover:shadow-card transform hover:-translate-y-0.5 active:scale-95"
                >
                  <Phone className="w-4 h-4 mr-2 text-brand" />
                  <span>Call 0321 1836189</span>
                </a>
              </div>

              {/* Reassurance Micro-Copy */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-medical-secondary font-medium">
                <span className="inline-flex items-center">
                  <Check className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                  Direct Consultation Booking
                </span>
                <span className="inline-flex items-center">
                  <Check className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                  Patient Privacy & Comfort
                </span>
                <span className="inline-flex items-center">
                  <Check className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                  Faisal Hospital People's Colony
                </span>
              </div>

            </div>

            {/* Right Doctor Portrait Column with Floating Badges */}
            <div className="lg:col-span-5 order-2 flex justify-center mb-6 lg:mb-0">
              <div className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[380px]">
                
                {/* Decorative background aura */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 via-brand/10 to-transparent rounded-3xl blur-2xl transform scale-95 pointer-events-none"></div>

                {/* Main Portrait Frame */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-brand/25 shadow-elevated bg-white p-2.5 transition-all duration-300 group hover:border-brand hover:shadow-[0_25px_50px_-12px_rgba(101,60,97,0.25)]">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 relative">
                    <img
                      src={businessInfo.images.heroPortrait}
                      alt="Portrait of Dr. Hira Nawaz, female general and laparoscopic surgeon in Faisalabad"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="eager"
                    />

                    {/* Gradient overlay at bottom of portrait for text contrast */}
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"></div>

                    {/* On-image caption badge */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="text-sm font-bold tracking-tight drop-shadow-sm">Dr. Hira Nawaz</div>
                      <div className="text-xs text-rose-100 font-medium drop-shadow-sm">MBBS, FCPS (General Surgery)</div>
                    </div>
                  </div>
                </div>

                {/* Floating Glass Badge 1 - Top Left */}
                <div className="absolute -top-3 -left-3 sm:-left-5 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-brand/20 shadow-card flex items-center space-x-2 text-xs font-bold text-medical-heading">
                  <div className="w-7 h-7 rounded-lg bg-brand-soft text-brand flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-brand uppercase tracking-wider font-extrabold">Specialist</span>
                    <span>FCPS Surgery</span>
                  </div>
                </div>

                {/* Floating Glass Badge 2 - Bottom Right */}
                <div className="absolute -bottom-3 -right-3 sm:-right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-brand/20 shadow-card flex items-center space-x-2.5 text-xs text-medical-heading">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand to-brand-hover text-white flex items-center justify-center shadow-subtle">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-emerald-600 uppercase tracking-wider font-extrabold">Consultations</span>
                    <span className="font-bold">4:00 PM – 9:00 PM</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Quick Highlights Strip */}
          <div className="mt-14 pt-8 border-t border-slate-200/80">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickHighlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3.5 p-3.5 sm:p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/90 shadow-subtle hover:border-brand/40 hover:bg-white transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-soft text-brand flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm font-bold text-medical-heading truncate">
                        {item.title}
                      </div>
                      <div className="text-[11px] sm:text-xs text-medical-secondary truncate">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* S01. DOCTOR CREDENTIALS (Order 1) */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-brand-soft text-brand mb-3 border border-brand/20">
              Verified Qualifications & Leadership
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              Qualifications and Role
            </h2>
            <p className="mt-2 text-sm sm:text-base text-medical-secondary">
              Professional credentials and departmental surgical leadership in Faisalabad.
            </p>
          </div>

          {/* Dual Credential Card Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            
            {/* Qualification Card */}
            <div className="bg-gradient-to-br from-white to-[#FBF8FA] rounded-3xl p-8 border-2 border-slate-200/80 hover:border-brand/40 shadow-card hover:shadow-elevated transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-soft text-brand flex items-center justify-center mb-5 group-hover:bg-brand group-hover:text-white transition-colors">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-brand">Medical Qualifications</span>
                <h3 className="font-heading text-2xl font-bold text-medical-heading mt-1 mb-3">
                  MBBS, FCPS (General Surgery)
                </h3>
                <p className="text-service-body text-medical-body leading-relaxed font-normal">
                  Dr. Hira Nawaz holds an MBBS degree. She also holds the FCPS in General Surgery. FCPS is a specialist surgical qualification from the College of Physicians and Surgeons Pakistan.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-semibold text-emerald-700">
                <Check className="w-4 h-4 mr-1.5 text-emerald-600" />
                <span>Verified Surgical Specialist Credentials</span>
              </div>
            </div>

            {/* Department Leadership Card */}
            <div className="bg-gradient-to-br from-white to-[#FBF8FA] rounded-3xl p-8 border-2 border-slate-200/80 hover:border-brand/40 shadow-card hover:shadow-elevated transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-soft text-brand flex items-center justify-center mb-5 group-hover:bg-brand group-hover:text-white transition-colors">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-brand">Departmental Role & OPD</span>
                <h3 className="font-heading text-2xl font-bold text-medical-heading mt-1 mb-3">
                  Head of Surgery Department
                </h3>
                <p className="text-service-body text-medical-body leading-relaxed font-normal">
                  She leads the Surgery Department at Fauji Foundation Hospital Faisalabad. She sees patients for consultation at Faisal Hospital.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-semibold text-brand">
                <MapPin className="w-4 h-4 mr-1.5" />
                <span>Consultations: Faisal Hospital, People's Colony No 1</span>
              </div>
            </div>

          </div>

          {/* Quick Appointment Callout */}
          <div className="bg-brand-soft/70 rounded-2xl p-6 border border-brand/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="font-heading font-bold text-medical-heading text-base sm:text-lg">
                Would you like to speak with Dr. Hira Nawaz?
              </h4>
              <p className="text-xs sm:text-sm text-medical-secondary mt-0.5">
                Consultations are arranged Monday to Saturday, 4:00 PM to 9:00 PM.
              </p>
            </div>
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-sheen inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#653C61] to-[#4D2B49] hover:from-[#4D2B49] hover:to-[#3A1E37] transition-all shadow-glow-brand shrink-0"
            >
              <WhatsAppIcon className="w-4 h-4 mr-2 fill-current" />
              <span>Book on WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

      {/* S02. ABOUT DR. HIRA NAWAZ (Order 2) */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#F7F1F6]/60 via-white to-white border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Image with Refined Styling */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute inset-0 bg-brand/10 rounded-3xl blur-xl transform rotate-2 scale-95 pointer-events-none"></div>
                <div className="relative rounded-3xl overflow-hidden border-2 border-brand/20 shadow-elevated aspect-[4/4.8] group bg-white p-2">
                  <div className="w-full h-full rounded-2xl overflow-hidden relative">
                    <img 
                      src={businessInfo.images.inOPD} 
                      alt="Dr. Hira Nawaz, female surgeon in Faisalabad" 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Glass info panel on photo */}
                    <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/60 text-xs shadow-card">
                      <div className="flex items-center text-brand font-bold text-xs uppercase tracking-wider mb-1">
                        <Activity className="w-3.5 h-3.5 mr-1.5" />
                        <span>Clinical Consultation</span>
                      </div>
                      <span className="text-medical-secondary block leading-relaxed">
                        Patient-centered discussions in a respectful, supportive environment.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-brand-soft text-brand border border-brand/20">
                Surgeon Profile & Scope
              </span>

              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight leading-tight">
                About Dr. Hira Nawaz
              </h2>

              <p className="text-fluid-body text-medical-body leading-relaxed font-normal">
                Dr. Hira Nawaz is a female surgeon in Faisalabad. Her work covers general surgery and laparoscopic surgery. Laparoscopic surgery is also called keyhole surgery.
              </p>

              <p className="text-fluid-body text-medical-secondary leading-relaxed font-normal">
                Patients may visit her with problems such as a lump, a hernia, stomach or gallbladder pain, or a problem near the back passage. Some patients come to understand their symptoms. Others come to ask about treatment or to get a clear plan.
              </p>

              <p className="text-fluid-body text-medical-secondary leading-relaxed font-normal">
                A good consultation helps you know your options. Some conditions need an operation. Some need tests, medicine or a period of watching and waiting. Dr. Hira Nawaz can explain what applies to your case after she has examined you.
              </p>

              {/* 3 Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-subtle">
                  <div className="text-brand font-bold text-xs mb-1">Clear Communication</div>
                  <div className="text-[12px] text-medical-secondary leading-snug">Understand your symptoms in simple language.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-subtle">
                  <div className="text-brand font-bold text-xs mb-1">Balanced Advice</div>
                  <div className="text-[12px] text-medical-secondary leading-snug">Surgery is advised only when necessary.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-subtle">
                  <div className="text-brand font-bold text-xs mb-1">Respectful Care</div>
                  <div className="text-[12px] text-medical-secondary leading-snug">Private consultations for female & family comfort.</div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about/"
                  className="inline-flex items-center px-6 py-3.5 rounded-xl bg-brand-soft hover:bg-brand text-brand hover:text-white border border-brand/20 font-semibold text-base transition-all duration-300 shadow-subtle hover:shadow-card group"
                >
                  <span>Learn More About Dr. Hira Nawaz</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* S03. TWO MAIN SURGICAL CATEGORIES (Order 3) */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-brand/10 text-brand mb-3 border border-brand/15">
              Core Clinical Areas
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              General Surgery and Laparoscopic Surgery in Faisalabad
            </h2>
            <p className="mt-3 text-fluid-body text-medical-secondary leading-relaxed">
              Dr. Hira Nawaz offers surgical consultation in two main areas. Choose the one that matches your concern, or book a visit to ask which one suits you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            
            {/* Card 1: General Surgery */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-slate-200/90 hover:border-brand shadow-card hover:shadow-elevated hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand to-brand-hover opacity-80"></div>
              <div>
                <div className="w-16 h-16 rounded-2xl bg-brand-soft text-brand flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-colors shadow-subtle">
                  <Activity className="w-8 h-8" />
                </div>
                <div className="text-xs font-bold text-brand uppercase tracking-wider mb-1">Traditional & Comprehensive</div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-medical-heading mb-4 group-hover:text-brand transition-colors">
                  General Surgery
                </h3>
                <p className="text-service-body text-medical-secondary leading-[1.65] mb-6 font-normal">
                  General surgery looks after problems of the tummy, bowel, back passage, breast, thyroid gland and skin lumps. Many of these problems need a careful check first. Some may need an operation. Others may be treated without surgery.
                </p>

                {/* Scope tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">Hernia Repair</span>
                  <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">Breast Assessment</span>
                  <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">Thyroid Care</span>
                  <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">Piles & Fistula</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  to="/general-surgery/"
                  className="button-sheen inline-flex items-center justify-center w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand to-brand-hover text-white font-semibold text-sm sm:text-base hover:from-brand-hover hover:to-brand-dark transition-all shadow-glow-brand"
                >
                  <span>Explore General Surgery</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Card 2: Laparoscopic Surgery */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-slate-200/90 hover:border-brand shadow-card hover:shadow-elevated hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand to-brand-hover opacity-80"></div>
              <div>
                <div className="w-16 h-16 rounded-2xl bg-brand-soft text-brand flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-colors shadow-subtle">
                  <Sparkles className="w-8 h-8" />
                </div>
                <div className="text-xs font-bold text-brand uppercase tracking-wider mb-1">Minimally Invasive Care</div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-medical-heading mb-4 group-hover:text-brand transition-colors">
                  Laparoscopic Surgery
                </h3>
                <p className="text-service-body text-medical-secondary leading-[1.65] mb-6 font-normal">
                  Laparoscopic surgery is also called keyhole surgery. The surgeon makes a few small cuts and uses a thin camera to see inside the body. It may mean smaller scars, less pain and a quicker recovery for some patients. It is not right for everyone, and sometimes a standard (open) operation is safer. Your surgeon will advise you.
                </p>

                {/* Scope tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">Gallbladder Removal</span>
                  <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">Keyhole Appendix</span>
                  <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">Smaller Cuts</span>
                  <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">Quicker Recovery</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  to="/laparoscopic-surgery/"
                  className="button-sheen inline-flex items-center justify-center w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand to-brand-hover text-white font-semibold text-sm sm:text-base hover:from-brand-hover hover:to-brand-dark transition-all shadow-glow-brand"
                >
                  <span>Explore Laparoscopic Surgery</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* S04. EIGHT FEATURED TREATMENTS (Order 4) */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#F7F1F6]/70 via-white to-[#F7F1F6]/70 border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-brand-soft text-brand mb-3 border border-brand/20">
              Treatment Overview
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              Featured Surgical Treatments
            </h2>
            <p className="mt-3 text-fluid-body text-medical-secondary leading-relaxed">
              These are some of the problems patients ask about most. Select a card to read more. Your own plan will depend on your examination and tests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTreatments.map((treatment, idx) => {
              const TreatmentIcon = treatment.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-subtle hover:shadow-elevated hover:border-brand hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                      <span className="text-[11px] font-bold text-brand uppercase tracking-wider bg-brand-soft px-3 py-1 rounded-full border border-brand/10">
                        {treatment.badge}
                      </span>
                      <span className="text-xs text-slate-400 font-semibold">0{idx + 1}</span>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-slate-50 text-brand flex items-center justify-center mb-3 group-hover:bg-brand-soft transition-colors">
                      <TreatmentIcon className="w-5 h-5 text-brand" />
                    </div>

                    <h3 className="font-heading text-xl font-bold text-medical-heading mb-3 group-hover:text-brand transition-colors">
                      {treatment.title}
                    </h3>

                    <p className="text-service-body text-medical-secondary leading-[1.6] mb-6 font-normal">
                      {treatment.text}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <Link 
                      to={treatment.url}
                      className="inline-flex items-center text-sm font-semibold text-brand hover:text-brand-hover group"
                    >
                      <span className="underline-offset-2 group-hover:underline">{treatment.cta}</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12 pt-6">
            <Link
              to="/services/"
              className="button-sheen inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-brand to-brand-hover hover:from-brand-hover hover:to-brand-dark text-white font-semibold text-base transition-all shadow-glow-brand hover:shadow-elevated hover:-translate-y-0.5"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

        </div>
      </section>

      {/* S05. WHY CONSULT DR. HIRA NAWAZ? (Order 5) */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-brand-soft text-brand mb-3 border border-brand/20">
              Clear Surgical Facts
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              Why Consult Dr. Hira Nawaz?
            </h2>
            <p className="mt-3 text-fluid-body text-medical-secondary leading-relaxed">
              Choosing a surgeon is an important decision. Here are clear facts to help you decide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyConsultPoints.map((pt, i) => {
              const PointIcon = pt.icon;
              return (
                <div 
                  key={i}
                  className={`p-7 rounded-3xl bg-white border border-slate-200/90 shadow-subtle hover:border-brand/40 hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-brand-soft text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors">
                        <PointIcon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-slate-300">{pt.num}</span>
                    </div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-medical-heading mb-2 group-hover:text-brand transition-colors">
                      {pt.title}
                    </h3>
                    <p className="text-service-body text-medical-secondary leading-[1.6] font-normal">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-sheen inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#653C61] to-[#4D2B49] hover:from-[#4D2B49] hover:to-[#3A1E37] transition-all shadow-glow-brand hover:shadow-elevated hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-5 h-5 mr-2.5 fill-current" />
              <span>Book Appointment on WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

      {/* S06. YOUR CONSULTATION JOURNEY (Order 6) */}
      <section className="py-16 md:py-24 bg-[#F7F1F6] border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-brand/10 text-brand mb-3">
              Step-by-Step Guide
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              Your Consultation Journey
            </h2>
            <p className="mt-3 text-fluid-body text-medical-secondary leading-relaxed">
              Booking a visit is easy. Here is what to expect, step by step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {consultationSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E7E7E7] shadow-subtle hover:shadow-card hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black font-heading text-brand/30 group-hover:text-brand transition-colors">
                        {step.step}
                      </span>
                      <div className="w-11 h-11 rounded-2xl bg-brand-soft text-brand flex items-center justify-center shadow-xs">
                        <StepIcon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="font-heading font-bold text-lg text-medical-heading mb-2">
                      {step.title}
                    </h3>
                    <p className="text-service-body text-medical-secondary leading-[1.6]">
                      {step.text}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 text-xs text-brand font-bold uppercase tracking-wider flex items-center justify-between">
                    <span>Step {step.step} of 04</span>
                    <ChevronRight className="w-3.5 h-3.5 text-brand/50 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 pt-4">
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-sheen w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#653C61] to-[#4D2B49] hover:from-[#4D2B49] hover:to-[#3A1E37] transition-all shadow-glow-brand hover:shadow-elevated hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-5 h-5 mr-2.5 fill-current" />
              <span>Book Appointment on WhatsApp</span>
            </a>

            <a
              href={businessInfo.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-medical-heading bg-white hover:bg-brand-soft border-2 border-slate-200 hover:border-brand/40 transition-all shadow-subtle hover:shadow-card hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 mr-2 text-brand" />
              <span>Call for Appointment</span>
            </a>
          </div>

        </div>
      </section>

      {/* S07. PATIENT RESULTS & S08. EDUCATIONAL VIDEOS (Order 7 & 8 Showcase) */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* S07. PATIENT RESULTS */}
            <div className="bg-gradient-to-br from-white to-[#FBF8FA] rounded-3xl p-8 sm:p-10 border-2 border-slate-200/80 hover:border-brand/40 shadow-card hover:shadow-elevated transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-brand-soft text-brand border border-brand/20">
                    Clinical Outcomes
                  </span>
                  <Award className="w-5 h-5 text-brand/40" />
                </div>

                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-medical-heading tracking-tight mb-4">
                  Patient Results
                </h2>

                <div className="space-y-4 text-medical-body text-service-body leading-relaxed">
                  <p>
                    Real patient results are shared on our results page. They are shown only when the patient has agreed and the material is genuine. Every patient is different, so one person's result cannot predict another's.
                  </p>
                  <p className="text-medical-secondary">
                    If you want to know what your own treatment may involve, the best step is a personal consultation.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  to="/patient-results-before-after-surgery/"
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-brand-soft hover:bg-brand text-brand hover:text-white border border-brand/20 font-semibold text-sm sm:text-base transition-all duration-300 shadow-subtle group"
                >
                  <span>View Patient Results</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* S08. SURGICAL AWARENESS VIDEOS */}
            <div className="bg-gradient-to-br from-white to-[#FBF8FA] rounded-3xl p-8 sm:p-10 border-2 border-slate-200/80 hover:border-brand/40 shadow-card hover:shadow-elevated transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-brand-soft text-brand border border-brand/20">
                    Patient Education
                  </span>
                  <Video className="w-5 h-5 text-brand/40" />
                </div>

                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-medical-heading tracking-tight mb-4">
                  Surgical Awareness and Educational Videos
                </h2>

                <div className="space-y-4 text-medical-body text-service-body leading-relaxed">
                  <p>
                    Learning about a health problem can make a visit easier. Educational videos can help you understand common surgical conditions in simple steps.
                  </p>
                  <p className="text-medical-secondary">
                    Watch, note down your questions and bring them to your consultation. Videos are for general learning only. They cannot replace a check-up.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  to="/videos/"
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-brand-soft hover:bg-brand text-brand hover:text-white border border-brand/20 font-semibold text-sm sm:text-base transition-all duration-300 shadow-subtle group"
                >
                  <Video className="w-4 h-4 mr-2" />
                  <span>Watch Videos</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* S09. FAISAL HOSPITAL CONSULTATION LOCATION (Order 9) */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-brand-soft text-brand mb-3 border border-brand/20">
              Consultation Location
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              Consultation Location at Faisal Hospital, Faisalabad
            </h2>
            <p className="mt-3 text-fluid-body text-medical-secondary leading-relaxed">
              Dr. Hira Nawaz sees patients for consultation at Faisal Hospital in People's Colony No 1, Faisalabad. Please book first by WhatsApp or phone so the team can give you a suitable time.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#E7E7E7] shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              {/* Address Details Column */}
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-soft text-brand mb-3 border border-brand/15">
                    <Building2 className="w-3.5 h-3.5 mr-1.5" />
                    Verified Facility
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-medical-heading">
                    Faisal Hospital
                  </h3>
                </div>

                <div className="space-y-4 text-base text-medical-body leading-relaxed">
                  <div className="flex items-start space-x-3.5">
                    <MapPin className="w-5 h-5 text-brand shrink-0 mt-1" />
                    <div>
                      <strong className="text-medical-heading block font-semibold">Address:</strong>
                      <span>Plot 547, Muhammadia Colony Block A, People's Colony No 1, Faisalabad, Pakistan</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <Clock className="w-5 h-5 text-brand shrink-0 mt-1" />
                    <div>
                      <strong className="text-medical-heading block font-semibold">Consultation Hours:</strong>
                      <span className="text-medical-heading font-medium">Monday to Saturday: 4:00 PM – 9:00 PM</span><br />
                      <span className="text-rose-600 font-semibold">Sunday: Closed</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <Phone className="w-5 h-5 text-brand shrink-0 mt-1" />
                    <div>
                      <strong className="text-medical-heading block font-semibold">Appointment Phone:</strong>
                      <a href={businessInfo.phoneTel} className="text-brand font-bold hover:underline">
                        0321 1836189
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="https://maps.app.goo.gl/UfRntfLaEcPaeVAU7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-gradient-to-r from-brand to-brand-hover text-white font-semibold text-sm hover:from-brand-hover hover:to-brand-dark transition-all shadow-glow-brand"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Get Directions on Google Maps
                  </a>

                  <Link
                    to="/location/"
                    className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white border border-slate-200 hover:border-brand/40 text-medical-heading hover:text-brand font-semibold text-sm hover:bg-brand-soft/60 transition-all shadow-subtle"
                  >
                    View Location Details
                  </Link>

                  <a
                    href={businessInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-brand/40 text-medical-heading hover:text-brand font-semibold text-sm hover:bg-brand-soft/60 transition-all shadow-subtle"
                  >
                    <WhatsAppIcon className="w-4 h-4 mr-1.5 fill-current" />
                    WhatsApp
                  </a>

                  <a
                    href={businessInfo.phoneTel}
                    className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-brand/40 text-medical-heading hover:text-brand font-semibold text-sm hover:bg-brand-soft/60 transition-all shadow-subtle"
                  >
                    <Phone className="w-4 h-4 mr-1.5 text-brand" />
                    Call Clinic
                  </a>
                </div>
              </div>

              {/* Map Embed Column */}
              <div className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100">
                <iframe
                  title="Faisal Hospital Consultation Location"
                  src="https://maps.google.com/maps?q=Faisal+Hospital+People's+Colony+1+Faisalabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <a 
                  href="https://maps.app.goo.gl/UfRntfLaEcPaeVAU7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 bg-white/95 hover:bg-white text-medical-heading text-xs font-bold px-3 py-2 rounded-xl shadow-card border border-slate-200 inline-flex items-center hover:text-brand transition-all hover:scale-105"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1.5 text-brand" />
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* B5. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 md:py-24 bg-[#F7F1F6] border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-brand/10 text-brand mb-3">
              Patient Inquiries
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm sm:text-base text-medical-secondary">
              Helpful answers to common surgical and appointment questions.
            </p>
          </div>

          <FAQAccordion items={homeFaqs} />

          {/* FAQ Support Note */}
          <div className="mt-10 text-center bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle">
            <p className="text-sm text-medical-body">
              Have a question not listed here? Our clinical reception team is glad to assist you.
            </p>
            <div className="mt-3 flex items-center justify-center gap-4">
              <a 
                href={businessInfo.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-bold text-brand hover:underline inline-flex items-center"
              >
                <WhatsAppIcon className="w-4 h-4 mr-1.5 fill-current" />
                Ask on WhatsApp
              </a>
              <span className="text-slate-300">•</span>
              <a 
                href={businessInfo.phoneTel}
                className="text-sm font-bold text-brand hover:underline inline-flex items-center"
              >
                <Phone className="w-3.5 h-3.5 mr-1 text-brand" />
                Call 0321 1836189
              </a>
            </div>
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
            MBBS, FCPS (General Surgery)
          </div>

          <h2 className="font-heading text-fluid-h2 font-bold tracking-tight text-white mb-6 leading-tight">
            Book Your Consultation with Dr. Hira Nawaz
          </h2>

          <p className="max-w-2xl mx-auto text-fluid-body text-purple-100/90 leading-relaxed mb-8 font-normal">
            If you have a surgical problem or a question about treatment, you do not have to wait and worry. Send a WhatsApp message or call the clinic. The team will help you choose a suitable time at Faisal Hospital, Monday to Saturday, 4:00 PM to 9:00 PM.
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
    </>
  );
}
