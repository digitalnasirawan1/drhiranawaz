import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  MapPin, 
  Clock, 
  Phone, 
  ArrowRight, 
  Sparkles, 
  Activity, 
  Building2, 
  ExternalLink,
  MessageSquare,
  FileText,
  CalendarCheck,
  CheckCircle2,
  Stethoscope,
  Heart,
  AlertCircle
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import SEOHead from '../components/SEOHead';
import FAQAccordion from '../components/FAQAccordion';
import { businessInfo } from '../data/businessInfo';

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://drhiranawaz.com/about/#webpage",
        "url": "https://drhiranawaz.com/about/",
        "name": "About Dr. Hira Nawaz | General & Laparoscopic Surgeon, Faisalabad",
        "isPartOf": { "@id": "https://drhiranawaz.com/#website" },
        "mainEntity": { "@id": "https://drhiranawaz.com/#physician" },
        "inLanguage": "en-PK"
      },
      {
        "@type": "Physician",
        "@id": "https://drhiranawaz.com/#physician",
        "name": "Dr. Hira Nawaz",
        "url": "https://drhiranawaz.com/about/",
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

  const expectationSteps = [
    {
      step: "01",
      title: "Arrange an appointment",
      text: "Send a WhatsApp message or call 0321 1836189 to choose a time."
    },
    {
      step: "02",
      title: "Talk about your symptoms and health history",
      text: "The doctor asks about your problem, how long you have had it and any earlier illness or surgery. Tell her about the medicines you take."
    },
    {
      step: "03",
      title: "Understand examinations and tests",
      text: "The doctor may examine you. She may suggest tests, such as blood tests or a scan, if they are needed to find the cause."
    },
    {
      step: "04",
      title: "Discuss options and next steps",
      text: "The doctor explains what she has found and what your choices are. You can ask questions before you decide."
    }
  ];

  const aboutFaqs = [
    {
      question: "Who is Dr. Hira Nawaz?",
      answer: "Dr. Hira Nawaz is a female general and laparoscopic surgeon in Faisalabad. She is Head of the Surgery Department at Fauji Foundation Hospital Faisalabad. She sees patients for consultation at Faisal Hospital."
    },
    {
      question: "What are Dr. Hira Nawaz's qualifications?",
      answer: "She holds an MBBS and an FCPS in General Surgery. MBBS is a medical degree. FCPS is a postgraduate qualification for specialist doctors in Pakistan."
    },
    {
      question: "What type of surgeon is Dr. Hira Nawaz?",
      answer: "She is a general surgeon and a laparoscopic (keyhole) surgeon. General surgery covers many common problems of the belly, back passage, breast, thyroid and skin."
    },
    {
      question: "What conditions can a general surgeon treat?",
      answer: "A general surgeon can assess and treat hernias, gallstones, appendicitis, piles, fissures, fistulas, abscesses and skin lumps. A general surgeon also helps with thyroid and breast lumps. After a check-up, the surgeon explains which treatment, if any, you need."
    },
    {
      question: "What is the difference between general and laparoscopic surgery?",
      answer: "General surgery is the wider field. It covers many conditions and many ways of operating. Laparoscopic surgery is one way of operating. The surgeon uses small cuts and a camera instead of one large cut. A surgeon decides which method is best for each patient."
    },
    {
      question: "Where does Dr. Hira Nawaz see patients?",
      answer: "She sees patients at Faisal Hospital, Plot 547, Muhammadia Colony Block A, People's Colony No 1, Faisalabad. Her departmental role is at a different hospital, Fauji Foundation Hospital Faisalabad."
    },
    {
      question: "What are her consultation hours?",
      answer: "Consultations are held from Monday to Saturday, 4:00 PM to 9:00 PM. The clinic is closed on Sunday. It is best to book a time before you come."
    },
    {
      question: "How can I book an appointment?",
      answer: "Message the clinic on WhatsApp at https://wa.me/923211836189 or call 0321 1836189. Say that you would like to see Dr. Hira Nawaz and briefly share your main concern."
    }
  ];

  return (
    <>
      <SEOHead customSchema={aboutSchema} />

      {/* B3. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-brand-soft/80 via-white to-white pt-8 pb-16 md:pt-20 md:pb-28 overflow-hidden border-b border-[#E7E7E7] bg-grid-subtle">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left Content Column (Text and buttons first on mobile) */}
            <div className="lg:col-span-7 order-1 space-y-6 text-center lg:text-left">
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-brand to-brand-hover text-white shadow-glow-brand ring-2 ring-brand/15">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-rose-200" />
                  Female Laparoscopic & General Surgeon
                </span>
                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm border border-brand/20 text-medical-heading shadow-subtle">
                  <MapPin className="w-3 h-3 mr-1 text-brand" />
                  Faisalabad, Pakistan
                </span>
              </div>

              <div>
                <h1 className="font-heading text-fluid-h1 font-extrabold text-medical-heading tracking-tight leading-[1.08]">
                  About Dr. Hira Nawaz
                </h1>
              </div>

              <p className="text-base sm:text-lg text-medical-body leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Dr. Hira Nawaz is a female general and laparoscopic surgeon in Faisalabad. She holds an MBBS and an FCPS in General Surgery. She is Head of the Surgery Department at Fauji Foundation Hospital Faisalabad, and she sees patients at Faisal Hospital. Read about her work below, then book a visit by WhatsApp or phone.
              </p>

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
                      alt="Professional portrait of Dr. Hira Nawaz, female general and laparoscopic surgeon in Faisalabad"
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

      {/* S01. INTRODUCING DR. HIRA NAWAZ (Order 1) */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Image Column */}
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
                    Personalized care in a respectful and supportive environment.
                  </span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand-soft text-brand border border-brand/20">
                Surgeon Biography
              </span>

              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight leading-tight">
                Meet Dr. Hira Nawaz
              </h2>

              <p className="text-fluid-body text-medical-body leading-relaxed font-normal">
                Dr. Hira Nawaz is a surgeon who works in two areas: general surgery and laparoscopic surgery. Laparoscopic surgery is also called keyhole surgery. She holds an MBBS and an FCPS in General Surgery.
              </p>

              <p className="text-fluid-body text-medical-secondary leading-relaxed font-normal">
                She is Head of the Surgery Department at Fauji Foundation Hospital Faisalabad. Patients can meet her for a surgical consultation at Faisal Hospital in People's Colony No 1, Faisalabad.
              </p>

              <p className="text-fluid-body text-medical-secondary leading-relaxed font-normal">
                Many patients look for a female general surgeon in Faisalabad because they want to feel at ease when they talk about their health. Dr. Hira Nawaz sees both women and men for surgical concerns. Consultations are held Monday to Saturday, from 4:00 PM to 9:00 PM.
              </p>

              <div className="pt-3">
                <a
                  href={businessInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-sheen inline-flex items-center px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#653C61] to-[#4D2B49] hover:from-[#4D2B49] hover:to-[#3A1E37] shadow-glow-brand hover:shadow-elevated transition-all transform hover:-translate-y-0.5"
                >
                  <WhatsAppIcon className="w-4 h-4 mr-2 fill-current" />
                  <span>Book Appointment on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* S02. MEDICAL QUALIFICATIONS AND PROFESSIONAL ROLE (Order 2) */}
      <section className="py-16 md:py-24 bg-[#F7F1F6] border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand/10 text-brand mb-3">
              Credentials & Governance
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              Medical Qualifications and Professional Role
            </h2>
            <p className="mt-3 text-fluid-body text-medical-secondary leading-relaxed">
              Here is what Dr. Hira Nawaz's qualifications and position mean.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: MBBS */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-card hover:border-brand/40 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-soft text-brand flex items-center justify-center mb-6 shadow-xs">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-medical-heading mb-3">
                  MBBS
                </h3>
                <p className="text-service-body text-medical-secondary leading-[1.65]">
                  MBBS is a medical degree. It stands for Bachelor of Medicine, Bachelor of Surgery. A doctor needs this degree before training as a specialist.
                </p>
              </div>
            </div>

            {/* Card 2: FCPS (General Surgery) */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-card hover:border-brand/40 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-soft text-brand flex items-center justify-center mb-6 shadow-xs">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-medical-heading mb-3">
                  FCPS (General Surgery)
                </h3>
                <p className="text-service-body text-medical-secondary leading-[1.65]">
                  FCPS means Fellow of the College of Physicians and Surgeons Pakistan. It is a postgraduate qualification for specialist doctors. The FCPS in General Surgery shows that a doctor has trained in general surgery and passed the required exams.
                </p>
              </div>
            </div>

            {/* Card 3: Head of Surgery Department */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-card hover:border-brand/40 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-soft text-brand flex items-center justify-center mb-6 shadow-xs">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-medical-heading mb-3">
                  Head of Surgery Department
                </h3>
                <p className="text-service-body text-medical-secondary leading-[1.65]">
                  Dr. Hira Nawaz is Head of the Surgery Department at Fauji Foundation Hospital Faisalabad. This is her professional position at the hospital.
                </p>
              </div>
            </div>

          </div>

          {/* Note below the cards */}
          <div className="mt-8 p-5 rounded-2xl bg-white border border-brand/20 shadow-subtle text-center text-sm sm:text-base text-medical-body">
            <span>
              <strong>Note:</strong> Patient consultations take place at Faisal Hospital. This is a different place from Fauji Foundation Hospital.
            </span>
          </div>

        </div>
      </section>

      {/* S03. GENERAL SURGERY (Order 3) */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-white via-white to-brand-soft/20 rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-card">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-soft text-brand flex items-center justify-center shadow-xs">
                <Activity className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand">Surgical Specialty</span>
            </div>

            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-6">
              General Surgery
            </h2>

            <div className="space-y-4 text-fluid-body text-medical-body leading-relaxed font-normal">
              <p>
                General surgery covers many common problems of the body. A general surgeon looks after problems in the belly and gut, such as hernias, gallstones and appendicitis. A general surgeon also looks after problems near the back passage, such as piles, fissures and fistulas. Lumps in the breast, neck and skin, and thyroid problems, are also part of general surgery.
              </p>
              <p className="text-medical-secondary">
                Not every problem needs an operation. A surgeon first listens to your symptoms and examines you. Some problems need only tests, medicine or simple care. Surgery is advised when it is the right way to treat the problem.
              </p>
            </div>

            <div className="pt-6">
              <Link
                to="/general-surgery/"
                className="button-sheen inline-flex items-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand to-brand-hover hover:from-brand-hover hover:to-brand-dark text-white font-semibold text-base transition-all shadow-glow-brand"
              >
                <span>Learn About General Surgery</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* S04. LAPAROSCOPIC (KEYHOLE) SURGERY (Order 4) */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#F7F1F6]/70 via-white to-[#F7F1F6]/70 border-b border-[#E7E7E7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-card">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-soft text-brand flex items-center justify-center shadow-xs">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand">Minimally Invasive Care</span>
            </div>

            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-6">
              Laparoscopic (Keyhole) Surgery
            </h2>

            <p className="text-fluid-body text-medical-body leading-relaxed font-normal mb-8">
              In laparoscopic surgery, the surgeon makes a few small cuts instead of one large cut. A thin tube with a camera goes in through one cut. The camera shows the inside of the body on a screen. The surgeon then uses thin tools through the other cuts.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200/80">
                <h3 className="font-heading font-bold text-lg text-emerald-900 mb-2 flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-700" />
                  Possible benefits
                </h3>
                <p className="text-service-body text-emerald-950 leading-[1.6]">
                  For some patients, keyhole surgery means smaller scars, less pain after the operation and a quicker return to normal life.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200/80">
                <h3 className="font-heading font-bold text-lg text-amber-900 mb-2 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 text-amber-700" />
                  Possible limits
                </h3>
                <p className="text-service-body text-amber-950 leading-[1.6]">
                  Keyhole surgery is not right for every patient or every problem. Earlier operations, other health conditions or an emergency can make a standard (open) operation safer. Sometimes a surgeon starts with keyhole surgery and then changes to an open operation to keep the patient safe.
                </p>
              </div>
            </div>

            <p className="text-fluid-body text-medical-secondary leading-relaxed font-normal mb-6">
              Whether keyhole surgery suits you depends on your condition and your medical check-up. Your surgeon will explain the options before you decide.
            </p>

            <div>
              <Link
                to="/laparoscopic-surgery/"
                className="button-sheen inline-flex items-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand to-brand-hover hover:from-brand-hover hover:to-brand-dark text-white font-semibold text-base transition-all shadow-glow-brand"
              >
                <span>Learn About Laparoscopic Surgery</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* S05. SURGICAL CONDITIONS AND TREATMENTS (Order 5) */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand-soft text-brand mb-3 border border-brand/20">
              Clinical Directory
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              Surgical Conditions and Treatments
            </h2>
            <p className="mt-3 text-fluid-body text-medical-secondary leading-relaxed">
              These are the treatment topics covered on this website. Each link opens a full page with more detail. Your own plan depends on your examination and tests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Group 1: Belly and hernia problems */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-subtle hover:border-brand/40 hover:shadow-card transition-all flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-xl font-bold text-medical-heading mb-4 pb-2 border-b border-slate-100 flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-brand" />
                  Belly and hernia problems
                </h3>
                <ul className="space-y-4 text-service-body text-medical-body">
                  <li>
                    <Link to="/hernia-surgery/" className="font-bold text-brand hover:underline block">
                      Hernia Surgery
                    </Link>
                    <span className="text-medical-secondary text-sm">
                      A hernia is a bulge where tissue pushes through a weak spot in the muscle wall. Surgery is the only way to repair it.
                    </span>
                  </li>
                  <li>
                    <Link to="/gallbladder-surgery/" className="font-bold text-brand hover:underline block">
                      Gallbladder Surgery
                    </Link>
                    <span className="text-medical-secondary text-sm">
                      Gallstones often cause no problems. If they cause repeated pain, removing the gallbladder is the usual treatment.
                    </span>
                  </li>
                  <li>
                    <Link to="/appendix-surgery/" className="font-bold text-brand hover:underline block">
                      Appendix Surgery
                    </Link>
                    <span className="text-medical-secondary text-sm">
                      A swollen, infected appendix causes pain and needs urgent care. Removing it is the usual treatment.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Group 2: Neck and breast problems */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-subtle hover:border-brand/40 hover:shadow-card transition-all flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-xl font-bold text-medical-heading mb-4 pb-2 border-b border-slate-100 flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-brand" />
                  Neck and breast problems
                </h3>
                <ul className="space-y-4 text-service-body text-medical-body">
                  <li>
                    <Link to="/thyroid-surgery/" className="font-bold text-brand hover:underline block">
                      Thyroid Surgery
                    </Link>
                    <span className="text-medical-secondary text-sm">
                      Some thyroid lumps and swellings need a specialist check. Surgery is one of the possible options.
                    </span>
                  </li>
                  <li>
                    <Link to="/breast-surgery/" className="font-bold text-brand hover:underline block">
                      Breast Surgery
                    </Link>
                    <span className="text-medical-secondary text-sm">
                      Most breast lumps are not cancer, but every new lump needs checking. Surgery is needed only in some cases.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Group 3: Back passage problems */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-subtle hover:border-brand/40 hover:shadow-card transition-all flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-xl font-bold text-medical-heading mb-4 pb-2 border-b border-slate-100 flex items-center">
                  <Stethoscope className="w-5 h-5 mr-2 text-brand" />
                  Back passage problems
                </h3>
                <ul className="space-y-4 text-service-body text-medical-body">
                  <li>
                    <Link to="/hemorrhoids-surgery/" className="font-bold text-brand hover:underline block">
                      Hemorrhoids Surgery
                    </Link>
                    <span className="text-medical-secondary text-sm">
                      Piles are swollen veins near the back passage. Many improve with simple care. Surgery is for those that do not.
                    </span>
                  </li>
                  <li>
                    <Link to="/fistula-in-ano-surgery/" className="font-bold text-brand hover:underline block">
                      Fistula in Ano Surgery
                    </Link>
                    <span className="text-medical-secondary text-sm">
                      An anal fistula is a small tunnel that often follows an abscess. It rarely heals on its own.
                    </span>
                  </li>
                  <li>
                    <Link to="/anal-fissure-treatment/" className="font-bold text-brand hover:underline block">
                      Anal Fissure Treatment
                    </Link>
                    <span className="text-medical-secondary text-sm">
                      A fissure is a small, painful tear. Many heal with soft stools and ointments. Some need surgery.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Group 4: Skin lumps and infections */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-subtle hover:border-brand/40 hover:shadow-card transition-all flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-xl font-bold text-medical-heading mb-4 pb-2 border-b border-slate-100 flex items-center">
                  <ShieldCheck className="w-5 h-5 mr-2 text-brand" />
                  Skin lumps and infections
                </h3>
                <ul className="space-y-4 text-service-body text-medical-body">
                  <li>
                    <Link to="/lipoma-removal/" className="font-bold text-brand hover:underline block">
                      Lipoma Removal
                    </Link>
                    <span className="text-medical-secondary text-sm">
                      A lipoma is a soft, fatty lump. It is usually harmless. Removal can be discussed if it causes trouble.
                    </span>
                  </li>
                  <li>
                    <Link to="/sebaceous-cyst-removal/" className="font-bold text-brand hover:underline block">
                      Sebaceous Cyst Removal
                    </Link>
                    <span className="text-medical-secondary text-sm">
                      A sebaceous cyst is a common skin lump. It may need treatment if it is infected, painful or growing.
                    </span>
                  </li>
                  <li>
                    <Link to="/abscess-drainage/" className="font-bold text-brand hover:underline block">
                      Abscess Drainage
                    </Link>
                    <span className="text-medical-secondary text-sm">
                      An abscess is a painful swelling full of pus. Many need a small procedure to drain it.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Group 5: Foot and leg problems */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-subtle hover:border-brand/40 hover:shadow-card transition-all flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-xl font-bold text-medical-heading mb-4 pb-2 border-b border-slate-100 flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-brand" />
                  Foot and leg problems
                </h3>
                <ul className="space-y-4 text-service-body text-medical-body">
                  <li>
                    <Link to="/diabetic-foot-treatment/" className="font-bold text-brand hover:underline block">
                      Diabetic Foot Treatment
                    </Link>
                    <span className="text-medical-secondary text-sm">
                      Diabetes can make feet less sensitive and slow to heal. Any wound, redness or swelling needs early care.
                    </span>
                  </li>
                  <li>
                    <Link to="/varicose-veins-treatment/" className="font-bold text-brand hover:underline block">
                      Varicose Veins Treatment
                    </Link>
                    <span className="text-medical-secondary text-sm">
                      Varicose veins are swollen, twisted veins, often in the legs. Many need no treatment. Some cause pain or skin changes.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          <div className="text-center mt-12 pt-6">
            <Link
              to="/services/"
              className="button-sheen inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-brand to-brand-hover hover:from-brand-hover hover:to-brand-dark text-white font-semibold text-base transition-all shadow-glow-brand hover:shadow-elevated hover:-translate-y-0.5"
            >
              <span>Explore All Surgical Services</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

        </div>
      </section>

      {/* S06. WHY SOME PATIENTS CHOOSE A FEMALE SURGEON (Order 6) */}
      <section className="py-16 md:py-24 bg-[#F7F1F6] border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand/10 text-brand">
                Patient Comfort & Choice
              </span>

              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight leading-tight">
                Why Some Patients Choose a Female Surgeon
              </h2>

              <p className="text-fluid-body text-medical-body leading-relaxed font-normal">
                Some health problems are private or sensitive. Many patients feel more at ease talking about them with a female surgeon. This is a personal choice, and it is common in Pakistan.
              </p>

              <p className="text-fluid-body text-medical-secondary leading-relaxed font-normal">
                Feeling comfortable can help you speak openly. A good consultation lets you do these things:
              </p>
            </div>

            {/* Right Checklist */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E7E7E7] shadow-card space-y-4">
                {[
                  "Explain your symptoms in your own words.",
                  "Ask any question, however small it seems.",
                  "Understand your treatment options.",
                  "Share personal worries and what matters to you.",
                  "Make a decision when you feel ready."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3.5">
                    <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                    <span className="text-base text-medical-heading font-medium leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 text-sm sm:text-base text-medical-secondary leading-relaxed">
            <p>
              A surgeon's gender does not decide the quality of care. Skills, training and a careful check-up matter most. What a female surgeon can offer is the choice to be seen by someone you feel comfortable with. You may also bring a family member to your visit if you wish.
            </p>
          </div>
        </div>
      </section>

      {/* S07. WHAT TO EXPECT DURING YOUR CONSULTATION (Order 7) */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand-soft text-brand mb-3 border border-brand/20">
              The Consultation Process
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              What to Expect During Your Consultation
            </h2>
            <p className="mt-3 text-fluid-body text-medical-secondary leading-relaxed">
              Every visit is different. This is a general guide to what usually happens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expectationSteps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-subtle hover:shadow-card hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-heading text-brand/30">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-brand-soft text-brand flex items-center justify-center">
                      {idx === 0 && <MessageSquare className="w-5 h-5" />}
                      {idx === 1 && <FileText className="w-5 h-5" />}
                      {idx === 2 && <Stethoscope className="w-5 h-5" />}
                      {idx === 3 && <CalendarCheck className="w-5 h-5" />}
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

          <div className="mt-10 p-6 rounded-2xl bg-brand-soft/50 border border-brand/20 text-sm sm:text-base text-medical-body leading-relaxed text-center max-w-4xl mx-auto">
            <p>
              <strong>Important note:</strong> Surgery is not always needed. Some problems get better with medicine, simple care or time. You will only be advised to have surgery when it is the right option for your case.
            </p>
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

      {/* S08. CONSULTATION LOCATION AND HOURS (Order 8) */}
      <section className="py-16 md:py-24 bg-[#F7F1F6] border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand/10 text-brand mb-3">
              Consultation Location
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              Consultation Location and Hours
            </h2>
            <p className="mt-3 text-fluid-body text-medical-secondary leading-relaxed">
              Dr. Hira Nawaz sees patients at Faisal Hospital in People's Colony No 1, Faisalabad. Please book a time first by WhatsApp or phone.
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
                      <strong className="text-medical-heading block font-semibold">Hours:</strong>
                      <span>Monday to Saturday: 4:00 PM – 9:00 PM</span><br />
                      <span className="text-rose-600 font-semibold">Sunday: Closed</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <Phone className="w-5 h-5 text-brand shrink-0 mt-1" />
                    <div>
                      <strong className="text-medical-heading block font-semibold">Phone:</strong>
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
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand-soft text-brand mb-3 border border-brand/20">
              Patient Guidance
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              Frequently Asked Questions About Dr. Hira Nawaz
            </h2>
          </div>

          <FAQAccordion items={aboutFaqs} />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#4D2B49] via-[#653C61] to-[#3A1E37] text-white relative overflow-hidden">
        <div className="absolute -right-24 -bottom-24 w-[450px] h-[450px] rounded-full bg-white/10 pointer-events-none blur-3xl"></div>
        <div className="absolute -left-24 -top-24 w-[450px] h-[450px] rounded-full bg-white/5 pointer-events-none blur-3xl"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-rose-100 text-xs font-semibold uppercase tracking-wider mb-6 border border-white/20 shadow-sm backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4 mr-1.5 text-rose-200" />
            MBBS, FCPS (General Surgery)
          </div>

          <h2 className="font-heading text-fluid-h2 font-bold tracking-tight text-white mb-6 leading-tight">
            Arrange a Consultation with Dr. Hira Nawaz
          </h2>

          <p className="max-w-2xl mx-auto text-fluid-body text-purple-100/90 leading-relaxed mb-8 font-normal">
            If you have a surgical concern, you can talk to Dr. Hira Nawaz about it. Send a WhatsApp message or call the clinic, and the team will help you find a suitable time at Faisal Hospital. Consultations are held Monday to Saturday, 4:00 PM to 9:00 PM.
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
