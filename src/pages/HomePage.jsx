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
  Award
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

  const featuredTreatments = [
    {
      title: "Hernia Surgery",
      text: "A hernia is a bulge that appears when part of the bowel or tissue pushes through a weak spot in the muscle wall, often in the groin. Surgery is the only way to repair it. Your surgeon will tell you if and when you need it.",
      cta: "Read About Hernia Surgery",
      url: "/hernia-surgery/",
      badge: "Abdominal & Groin"
    },
    {
      title: "Gallbladder Surgery",
      text: "Gallstones are hard lumps that can form in the gallbladder. Many cause no problems. If they cause repeated pain or other problems, removing the gallbladder is the usual treatment.",
      cta: "Learn About Gallbladder Surgery",
      url: "/gallbladder-surgery/",
      badge: "Laparoscopic Care"
    },
    {
      title: "Appendix Surgery",
      text: "Appendicitis is swelling and infection of the appendix. It usually causes pain in the lower right side of the tummy and needs urgent medical care. Surgery to remove the appendix is the usual treatment.",
      cta: "See Appendix Surgery Details",
      url: "/appendix-surgery/",
      badge: "Emergency & Elective"
    },
    {
      title: "Thyroid Surgery",
      text: "The thyroid is a small gland in the neck. A lump, a swollen thyroid or an overactive thyroid may need a specialist check. Surgery is only one of the possible options.",
      cta: "Understand Thyroid Surgery",
      url: "/thyroid-surgery/",
      badge: "Endocrine Surgery"
    },
    {
      title: "Breast Surgery",
      text: "Most breast lumps are not cancer, but every new lump should be checked. A visit can help you find the cause and decide on the next step. Surgery is needed only in some cases.",
      cta: "Read About Breast Surgery",
      url: "/breast-surgery/",
      badge: "Clinical Assessment"
    },
    {
      title: "Hemorrhoids Surgery",
      text: "Hemorrhoids, also called piles, are swollen veins in or around the back passage. Many improve with simple care or small treatments. Surgery may be advised when other treatments have not worked.",
      cta: "Learn About Piles Treatment",
      url: "/hemorrhoids-surgery/",
      badge: "Anorectal Care"
    },
    {
      title: "Fistula in Ano Surgery",
      text: "An anal fistula is a small tunnel between the inside of the back passage and the skin nearby. It often follows an abscess and rarely heals on its own. Surgery is usually needed, and the method depends on where the tunnel lies.",
      cta: "See Fistula Treatment",
      url: "/fistula-in-ano-surgery/",
      badge: "Specialized Repair"
    },
    {
      title: "Lipoma Removal",
      text: "A lipoma is a soft, fatty lump under the skin. It is usually harmless and often needs no treatment. Removal can be discussed if it is painful, growing or causes trouble.",
      cta: "Read About Lipoma Removal",
      url: "/lipoma-removal/",
      badge: "Day-Care Procedure"
    }
  ];

  const whyConsultPoints = [
    {
      title: "Female general and laparoscopic surgeon.",
      desc: "Some patients feel more comfortable speaking about their health with a female surgeon."
    },
    {
      title: "MBBS, FCPS (General Surgery).",
      desc: "These are recognised medical and surgical qualifications."
    },
    {
      title: "Head of Surgery Department.",
      desc: "Dr. Hira Nawaz leads the Surgery Department at Fauji Foundation Hospital Faisalabad."
    },
    {
      title: "Consultation at Faisal Hospital.",
      desc: "You can meet her at Faisal Hospital, People's Colony No 1, Faisalabad."
    },
    {
      title: "Easy appointments.",
      desc: "Book by WhatsApp or phone, Monday to Saturday."
    }
  ];

  const consultationSteps = [
    {
      step: "01",
      title: "Contact the Clinic",
      text: "Send a message on WhatsApp or call 0321 1836189. Tell the team that you would like to see Dr. Hira Nawaz."
    },
    {
      step: "02",
      title: "Arrange Your Consultation",
      text: "Choose a day and time that suits you. Consultations are held Monday to Saturday, from 4:00 PM to 9:00 PM."
    },
    {
      step: "03",
      title: "Discuss Your Symptoms",
      text: "At the visit, describe your problem in your own words. Bring any reports, scans or medicine lists you already have."
    },
    {
      step: "04",
      title: "Understand Your Treatment Options",
      text: "Dr. Hira Nawaz may examine you and talk about test results or further tests. She will explain the options that suit your case. Not every problem needs an operation."
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
      <section className="relative bg-gradient-to-b from-brand-soft/80 via-white to-white pt-8 pb-16 md:pt-20 md:pb-28 overflow-hidden border-b border-[#E7E7E7] bg-grid-subtle">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left Content Column (Text first on mobile) */}
            <div className="lg:col-span-7 order-1 space-y-6 text-center lg:text-left">
              
              {/* Eyebrow / short label */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-brand to-brand-hover text-white shadow-glow-brand ring-2 ring-brand/15">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-rose-200" />
                  MBBS, FCPS (General Surgery)
                </span>
                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm border border-brand/20 text-medical-heading shadow-subtle">
                  <MapPin className="w-3 h-3 mr-1 text-brand" />
                  Faisalabad, Pakistan
                </span>
              </div>

              {/* H1 Heading */}
              <div>
                <h1 className="font-heading text-fluid-h1 font-extrabold text-medical-heading tracking-tight leading-[1.08]">
                  Female General & Laparoscopic Surgeon in Faisalabad
                </h1>
              </div>

              {/* Intro / supporting copy */}
              <p className="text-base sm:text-lg text-medical-body leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Dr. Hira Nawaz is a female general and laparoscopic surgeon in Faisalabad. She is Head of the Surgery Department at Fauji Foundation Hospital Faisalabad. You can meet her at Faisal Hospital to talk about your symptoms and your treatment options. Send a WhatsApp message or call the clinic to arrange a consultation.
              </p>

              {/* Hero CTAs: Main filled WhatsApp button, secondary outlined Call button */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={businessInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-sheen w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#653C61] to-[#4D2B49] hover:from-[#4D2B49] hover:to-[#3A1E37] transition-all shadow-glow-brand hover:shadow-elevated transform hover:-translate-y-0.5"
                >
                  <WhatsAppIcon className="w-5 h-5 mr-2 fill-current" />
                  <span>Book Appointment on WhatsApp</span>
                </a>

                <a
                  href={businessInfo.phoneTel}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-medical-heading bg-white hover:bg-brand-soft border border-slate-200 hover:border-brand/40 transition-all shadow-subtle hover:shadow-card transform hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4 mr-2 text-brand" />
                  <span>Call for Appointment</span>
                </a>
              </div>

            </div>

            {/* Right Doctor Portrait Column */}
            <div className="lg:col-span-5 order-2 flex justify-center mb-4 lg:mb-0">
              <div className="relative w-full max-w-[280px] sm:max-w-[330px] md:max-w-[360px]">
                <div className="absolute inset-0 bg-brand/10 rounded-2xl sm:rounded-3xl blur-lg transform scale-95 pointer-events-none"></div>
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-brand/30 shadow-card bg-white p-1.5 transition-all duration-300 group hover:border-brand hover:shadow-elevated">
                  <div className="aspect-[4/5] rounded-[0.875rem] sm:rounded-2xl overflow-hidden bg-slate-50 relative">
                    <img
                      src={businessInfo.images.heroPortrait}
                      alt="Portrait of Dr. Hira Nawaz, female general and laparoscopic surgeon in Faisalabad"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* S01. DOCTOR CREDENTIALS (Order 1) */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand-soft text-brand mb-3 border border-brand/20">
              Verified Qualifications & Leadership
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              Qualifications and Role
            </h2>
          </div>

          <div className="bg-gradient-to-br from-white via-white to-brand-soft/30 rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-card hover:border-brand/40 transition-all">
            <div className="space-y-4 text-center sm:text-left">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-medical-heading tracking-tight">
                Dr. Hira Nawaz
              </h3>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <span className="inline-flex items-center px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-brand text-white shadow-glow-brand">
                  <ShieldCheck className="w-4 h-4 mr-2" />
                  MBBS, FCPS (General Surgery)
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white border border-slate-200 text-medical-heading shadow-subtle">
                  <Award className="w-4 h-4 mr-2 text-brand" />
                  Head of Surgery Department, Fauji Foundation Hospital Faisalabad
                </span>
              </div>

              <div className="space-y-3 pt-3 text-base sm:text-lg text-medical-body leading-relaxed font-normal">
                <p>
                  Dr. Hira Nawaz holds an MBBS degree. She also holds the FCPS in General Surgery. FCPS is a specialist surgical qualification from the College of Physicians and Surgeons Pakistan.
                </p>
                <p>
                  She leads the Surgery Department at Fauji Foundation Hospital Faisalabad. She sees patients for consultation at Faisal Hospital.
                </p>
              </div>

              <div className="pt-4">
                <a
                  href={businessInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-sheen inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#653C61] to-[#4D2B49] hover:from-[#4D2B49] hover:to-[#3A1E37] transition-all shadow-glow-brand hover:shadow-elevated hover:-translate-y-0.5"
                >
                  <WhatsAppIcon className="w-5 h-5 mr-2 fill-current" />
                  <span>Book Appointment on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S02. ABOUT DR. HIRA NAWAZ (Order 2) */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#F7F1F6]/60 via-white to-white border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-brand/20 shadow-elevated aspect-[4/4.5] group">
                <img 
                  src={businessInfo.images.inOPD} 
                  alt="Dr. Hira Nawaz, female surgeon in Faisalabad" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/60 text-xs shadow-card">
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

            {/* Right Column: Content */}
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand-soft text-brand border border-brand/20">
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

              <div className="pt-3">
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
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand/10 text-brand mb-3 border border-brand/15">
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
            <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-slate-200/90 hover:border-brand/50 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-brand-soft text-brand flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-colors shadow-xs">
                  <Activity className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-medical-heading mb-4 group-hover:text-brand transition-colors">
                  General Surgery
                </h3>
                <p className="text-service-body text-medical-secondary leading-[1.65] mb-8 font-normal">
                  General surgery looks after problems of the tummy, bowel, back passage, breast, thyroid gland and skin lumps. Many of these problems need a careful check first. Some may need an operation. Others may be treated without surgery.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  to="/general-surgery/"
                  className="button-sheen inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand to-brand-hover text-white font-semibold text-sm sm:text-base hover:from-brand-hover hover:to-brand-dark transition-all shadow-glow-brand"
                >
                  <span>Explore General Surgery</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Card 2: Laparoscopic Surgery */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-slate-200/90 hover:border-brand/50 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-brand-soft text-brand flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-colors shadow-xs">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-medical-heading mb-4 group-hover:text-brand transition-colors">
                  Laparoscopic Surgery
                </h3>
                <p className="text-service-body text-medical-secondary leading-[1.65] mb-8 font-normal">
                  Laparoscopic surgery is also called keyhole surgery. The surgeon makes a few small cuts and uses a thin camera to see inside the body. It may mean smaller scars, less pain and a quicker recovery for some patients. It is not right for everyone, and sometimes a standard (open) operation is safer. Your surgeon will advise you.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  to="/laparoscopic-surgery/"
                  className="button-sheen inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand to-brand-hover text-white font-semibold text-sm sm:text-base hover:from-brand-hover hover:to-brand-dark transition-all shadow-glow-brand"
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
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand-soft text-brand mb-3 border border-brand/20">
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
            {featuredTreatments.map((treatment, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-subtle hover:shadow-elevated hover:border-brand/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                    <span className="text-[11px] font-bold text-brand uppercase tracking-wider bg-brand-soft px-3 py-1 rounded-full border border-brand/10">
                      {treatment.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">0{idx + 1}</span>
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
                    <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
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
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand-soft text-brand mb-3 border border-brand/20">
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
            {whyConsultPoints.map((pt, i) => (
              <div 
                key={i}
                className={`p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-subtle hover:border-brand/40 hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-soft text-brand flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-5 h-5 text-brand" />
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-medical-heading mb-2">
                    {pt.title}
                  </h3>
                  <p className="text-service-body text-medical-secondary leading-[1.6] font-normal">
                    {pt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-sheen inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#653C61] to-[#4D2B49] hover:from-[#4D2B49] hover:to-[#3A1E37] transition-all shadow-glow-brand hover:shadow-elevated hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-5 h-5 mr-2 fill-current" />
              <span>Book Appointment on WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

      {/* S06. YOUR CONSULTATION JOURNEY (Order 6) */}
      <section className="py-16 md:py-24 bg-[#F7F1F6] border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand/10 text-brand mb-3">
              Step-by-Step Guide
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              Your Consultation Journey
            </h2>
            <p className="mt-3 text-fluid-body text-medical-secondary leading-relaxed">
              Booking a visit is easy. Here is what to expect, step by step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consultationSteps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E7E7E7] shadow-subtle hover:shadow-card hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-heading text-brand/30">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-brand-soft text-brand flex items-center justify-center">
                      {idx === 0 && <MessageSquare className="w-5 h-5" />}
                      {idx === 1 && <CalendarCheck className="w-5 h-5" />}
                      {idx === 2 && <Stethoscope className="w-5 h-5" />}
                      {idx === 3 && <FileText className="w-5 h-5" />}
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-medical-heading mb-2">
                    {step.title}
                  </h3>
                  <p className="text-service-body text-medical-secondary leading-[1.6]">
                    {step.text}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-50 text-xs text-brand font-bold uppercase tracking-wider">
                  Step {step.step} of 04
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 pt-4">
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-sheen w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#653C61] to-[#4D2B49] hover:from-[#4D2B49] hover:to-[#3A1E37] transition-all shadow-glow-brand hover:shadow-elevated hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-5 h-5 mr-2 fill-current" />
              <span>Book Appointment on WhatsApp</span>
            </a>

            <a
              href={businessInfo.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-medical-heading bg-white hover:bg-brand-soft border border-slate-200 hover:border-brand/40 transition-all shadow-subtle hover:shadow-card hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 mr-2 text-brand" />
              <span>Call for Appointment</span>
            </a>
          </div>

        </div>
      </section>

      {/* S07. PATIENT RESULTS (Order 7) */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand-soft text-brand border border-brand/20">
            Clinical Outcomes
          </span>

          <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
            Patient Results
          </h2>

          <div className="space-y-4 text-fluid-body text-medical-body leading-relaxed max-w-3xl mx-auto font-normal text-left sm:text-center">
            <p>
              Real patient results are shared on our results page. They are shown only when the patient has agreed and the material is genuine. Every patient is different, so one person's result cannot predict another's.
            </p>
            <p className="text-medical-secondary">
              If you want to know what your own treatment may involve, the best step is a personal consultation.
            </p>
          </div>

          <div className="pt-4">
            <Link
              to="/patient-results-before-after-surgery/"
              className="inline-flex items-center px-6 py-3.5 rounded-xl bg-brand-soft hover:bg-brand text-brand hover:text-white border border-brand/20 font-semibold text-base transition-all duration-300 shadow-subtle hover:shadow-card group"
            >
              <span>View Patient Results</span>
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* S08. SURGICAL AWARENESS AND EDUCATIONAL VIDEOS (Order 8) */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#F7F1F6]/60 to-white border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand-soft text-brand border border-brand/20">
            Patient Education
          </span>

          <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
            Surgical Awareness and Educational Videos
          </h2>

          <div className="space-y-4 text-fluid-body text-medical-body leading-relaxed max-w-3xl mx-auto font-normal text-left sm:text-center">
            <p>
              Learning about a health problem can make a visit easier. Educational videos can help you understand common surgical conditions in simple steps.
            </p>
            <p className="text-medical-secondary">
              Watch, note down your questions and bring them to your consultation. Videos are for general learning only. They cannot replace a check-up.
            </p>
          </div>

          <div className="pt-4">
            <Link
              to="/videos/"
              className="inline-flex items-center px-6 py-3.5 rounded-xl bg-brand-soft hover:bg-brand text-brand hover:text-white border border-brand/20 font-semibold text-base transition-all duration-300 shadow-subtle hover:shadow-card group"
            >
              <Video className="w-4 h-4 mr-2" />
              <span>Watch Videos</span>
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* S09. FAISAL HOSPITAL CONSULTATION LOCATION (Order 9) */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand-soft text-brand mb-3 border border-brand/20">
              Consultation Location
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              Consultation Location at Faisal Hospital, Faisalabad
            </h2>
            <p className="mt-3 text-fluid-body text-medical-secondary leading-relaxed">
              Dr. Hira Nawaz sees patients for consultation at Faisal Hospital in People's Colony No 1, Faisalabad. Please book first by WhatsApp or phone so the team can give you a suitable time.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E7E7E7] shadow-card">
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
                      <span>Monday to Saturday: 4:00 PM – 9:00 PM</span><br />
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
                    Book Appointment on WhatsApp
                  </a>

                  <a
                    href={businessInfo.phoneTel}
                    className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-brand/40 text-medical-heading hover:text-brand font-semibold text-sm hover:bg-brand-soft/60 transition-all shadow-subtle"
                  >
                    <Phone className="w-4 h-4 mr-1.5 text-brand" />
                    Call for Appointment
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
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand/10 text-brand mb-3">
              Patient Inquiries
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <FAQAccordion items={homeFaqs} />
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
              <WhatsAppIcon className="w-5 h-5 mr-2 fill-current" />
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
