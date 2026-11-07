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
  AlertCircle,
  HelpCircle,
  AlertTriangle
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import SEOHead from '../components/SEOHead';
import FAQAccordion from '../components/FAQAccordion';
import { businessInfo } from '../data/businessInfo';

export default function ServicesOverviewPage() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://drhiranawaz.com/services/#webpage",
        "url": "https://drhiranawaz.com/services/",
        "name": "Surgical Services in Faisalabad | General & Laparoscopic Surgery",
        "isPartOf": { "@id": "https://drhiranawaz.com/#website" },
        "about": { "@id": "https://drhiranawaz.com/#physician" },
        "mainEntity": { "@id": "https://drhiranawaz.com/services/#servicelist" },
        "inLanguage": "en-PK"
      },
      {
        "@type": "ItemList",
        "@id": "https://drhiranawaz.com/services/#servicelist",
        "name": "Surgical services and treatments",
        "numberOfItems": 15,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "General Surgery", "url": "https://drhiranawaz.com/general-surgery/" },
          { "@type": "ListItem", "position": 2, "name": "Laparoscopic Surgery", "url": "https://drhiranawaz.com/laparoscopic-surgery/" },
          { "@type": "ListItem", "position": 3, "name": "Hernia Surgery", "url": "https://drhiranawaz.com/hernia-surgery/" },
          { "@type": "ListItem", "position": 4, "name": "Gallbladder Surgery", "url": "https://drhiranawaz.com/gallbladder-surgery/" },
          { "@type": "ListItem", "position": 5, "name": "Appendix Surgery", "url": "https://drhiranawaz.com/appendix-surgery/" },
          { "@type": "ListItem", "position": 6, "name": "Thyroid Surgery", "url": "https://drhiranawaz.com/thyroid-surgery/" },
          { "@type": "ListItem", "position": 7, "name": "Breast Surgery", "url": "https://drhiranawaz.com/breast-surgery/" },
          { "@type": "ListItem", "position": 8, "name": "Hemorrhoids Surgery", "url": "https://drhiranawaz.com/hemorrhoids-surgery/" },
          { "@type": "ListItem", "position": 9, "name": "Fistula in Ano Surgery", "url": "https://drhiranawaz.com/fistula-in-ano-surgery/" },
          { "@type": "ListItem", "position": 10, "name": "Lipoma Removal", "url": "https://drhiranawaz.com/lipoma-removal/" },
          { "@type": "ListItem", "position": 11, "name": "Sebaceous Cyst Removal", "url": "https://drhiranawaz.com/sebaceous-cyst-removal/" },
          { "@type": "ListItem", "position": 12, "name": "Diabetic Foot Treatment", "url": "https://drhiranawaz.com/diabetic-foot-treatment/" },
          { "@type": "ListItem", "position": 13, "name": "Abscess Drainage", "url": "https://drhiranawaz.com/abscess-drainage/" },
          { "@type": "ListItem", "position": 14, "name": "Anal Fissure Treatment", "url": "https://drhiranawaz.com/anal-fissure-treatment/" },
          { "@type": "ListItem", "position": 15, "name": "Varicose Veins Treatment", "url": "https://drhiranawaz.com/varicose-veins-treatment/" }
        ]
      }
    ]
  };

  const treatmentServices = [
    {
      title: "Hernia Surgery",
      description: "A hernia happens when part of the bowel or other tissue pushes through a weak spot in the muscle wall. It often shows as a bulge in the groin or belly. Surgery is the only way to repair it, but your surgeon will tell you if and when it is needed.",
      commonConcern: "A lump or bulge in the groin or belly that is bigger when you cough or stand",
      cta: "Learn About Hernia Surgery",
      url: "/hernia-surgery/"
    },
    {
      title: "Gallbladder Surgery",
      description: "The gallbladder is a small organ under the liver. Gallstones can form inside it, and many people never feel them. If they cause repeated pain or other problems, removing the gallbladder is the usual treatment.",
      commonConcern: "Pain in the upper right belly, often after meals",
      cta: "Read About Gallbladder Surgery",
      url: "/gallbladder-surgery/"
    },
    {
      title: "Appendix Surgery",
      description: "The appendix is a small tube joined to the bowel. When it swells and gets infected, it is called appendicitis. This needs quick medical care, and removing the appendix is the usual treatment.",
      commonConcern: "Pain that moves to the lower right belly, with sickness or fever",
      cta: "See Appendix Surgery Details",
      url: "/appendix-surgery/"
    },
    {
      title: "Thyroid Surgery",
      description: "The thyroid is a small gland at the front of the neck. It can swell or form lumps, and a few of these need treatment. A check-up and tests show whether surgery is one of the options.",
      commonConcern: "A swelling or lump in the front of the neck",
      cta: "Understand Thyroid Surgery",
      url: "/thyroid-surgery/"
    },
    {
      title: "Breast Surgery",
      description: "Most breast lumps are not cancer, but a new lump should always be checked. A visit helps find the cause and plan the next step. Surgery is needed only in some cases.",
      commonConcern: "A new breast lump, thickening or other change in the breast",
      cta: "Read About Breast Surgery",
      url: "/breast-surgery/"
    },
    {
      title: "Hemorrhoids Surgery",
      description: "Hemorrhoids, also called piles, are swollen veins in or around the back passage. Many get better with simple care or small treatments. Surgery may be advised if other treatments have not worked.",
      commonConcern: "Bleeding, itching or a soft lump near the back passage",
      cta: "Learn About Piles Treatment",
      url: "/hemorrhoids-surgery/"
    },
    {
      title: "Fistula in Ano Surgery",
      description: "An anal fistula is a small tunnel between the inside of the back passage and the skin nearby. It often follows an abscess. It rarely heals on its own, and the method of treatment depends on where the tunnel runs.",
      commonConcern: "A small hole near the back passage with repeated pus or discharge",
      cta: "See Fistula Treatment",
      url: "/fistula-in-ano-surgery/"
    },
    {
      title: "Lipoma Removal",
      description: "A lipoma is a soft, rounded lump of fat under the skin. It grows slowly and is usually harmless. A check-up confirms what the lump is, and removal can be discussed if it is painful, growing or in the way.",
      commonConcern: "A soft, painless lump under the skin that moves a little when pressed",
      cta: "Read About Lipoma Removal",
      url: "/lipoma-removal/"
    },
    {
      title: "Sebaceous Cyst Removal",
      description: "A sebaceous cyst is a small bump under the skin filled with a soft, oily material. It is common and often needs no treatment. If it becomes red, painful or infected, or keeps coming back, treatment may help. Please do not squeeze it.",
      commonConcern: "A round skin bump that may leak, swell or become sore",
      cta: "Learn About Cyst Removal",
      url: "/sebaceous-cyst-removal/"
    },
    {
      title: "Diabetic Foot Treatment",
      description: "Diabetes can reduce feeling and blood flow in the feet. A small cut or blister can then go unnoticed, heal slowly and become infected. Any foot wound in a person with diabetes needs medical attention without delay.",
      commonConcern: "A foot wound, blister or sore that is slow to heal, or a red, warm, swollen foot",
      cta: "Read About Diabetic Foot Care",
      url: "/diabetic-foot-treatment/"
    },
    {
      title: "Abscess Drainage",
      description: "An abscess is a painful swelling filled with pus, caused by infection. A very small one may settle on its own. Many need a small procedure to let the pus out so the infection can clear.",
      commonConcern: "A hot, red, painful swelling that is getting bigger",
      cta: "See Abscess Treatment",
      url: "/abscess-drainage/"
    },
    {
      title: "Anal Fissure Treatment",
      description: "An anal fissure is a small tear in the skin of the back passage. It often hurts a lot when you pass stool. Many fissures heal with softer stools and simple treatment, and surgery is kept for those that do not heal.",
      commonConcern: "Sharp pain during or after passing stool, sometimes with bright red blood",
      cta: "Learn About Fissure Treatment",
      url: "/anal-fissure-treatment/"
    },
    {
      title: "Varicose Veins Treatment",
      description: "Varicose veins are swollen, twisted veins, most often in the legs. Many cause no trouble and need no treatment. If they cause pain, heaviness, swelling or skin changes, a check-up decides which treatment option suits you.",
      commonConcern: "Visible twisted veins with aching, swelling or itchy skin in the legs",
      cta: "Understand Varicose Vein Care",
      url: "/varicose-veins-treatment/"
    }
  ];

  const whyConsultPoints = [
    {
      title: "Female general and laparoscopic surgeon.",
      desc: "Some patients feel more at ease with a female surgeon."
    },
    {
      title: "MBBS, FCPS (General Surgery).",
      desc: "These are recognised medical and surgical qualifications."
    },
    {
      title: "Head of Surgery Department, Fauji Foundation Hospital Faisalabad.",
      desc: "This is her professional position."
    },
    {
      title: "Consultations at Faisal Hospital.",
      desc: "Patients meet her at Faisal Hospital in People's Colony No 1."
    },
    {
      title: "WhatsApp and phone booking.",
      desc: "You can arrange a visit in a few minutes."
    }
  ];

  const consultationSteps = [
    {
      step: "01",
      title: "Contact the clinic",
      text: "Message the clinic on WhatsApp or call 0321 1836189."
    },
    {
      step: "02",
      title: "Arrange your appointment",
      text: "Pick a day and time from Monday to Saturday, between 4:00 PM and 9:00 PM."
    },
    {
      step: "03",
      title: "Discuss your symptoms and medical history",
      text: "Tell the doctor about your problem, past illnesses, earlier operations and your medicines. Bring any reports or scans you have."
    },
    {
      step: "04",
      title: "Understand possible tests and treatment options",
      text: "The doctor may examine you and suggest tests if they are needed. She then explains your options. Surgery is not always necessary, and some problems are treated without an operation."
    }
  ];

  const servicesFaqs = [
    {
      question: "What conditions does a general surgeon treat?",
      answer: "A general surgeon treats a wide range of problems. Common ones are hernias, gallstones, appendix problems, piles, fissures and fistulas. Skin lumps, abscesses, breast lumps and thyroid swellings are also seen by general surgeons. The full list of topics on this website is in the treatment section above."
    },
    {
      question: "What is the difference between general and laparoscopic surgery?",
      answer: "General surgery is the specialty, and laparoscopic surgery is one technique within it. The first tells you what kind of problems the surgeon treats. The second tells you how an operation can be done, using small cuts and a camera. Your surgeon picks the method that is safest for your condition."
    },
    {
      question: "Do all surgical problems need an operation?",
      answer: "No. Some problems settle with medicine, simple care or time. Some only need regular check-ups. For example, many gallstones, lipomas and piles never need surgery. An operation is advised only when it is the best way to help you."
    },
    {
      question: "How do I know which surgical service I need?",
      answer: "You do not have to decide this yourself. Describe your symptoms when you contact the clinic, and the doctor will find the cause at your visit. If you can see your concern in the treatment list, read that page first. It can help you prepare your questions."
    },
    {
      question: "Is laparoscopic surgery suitable for every patient?",
      answer: "No. Earlier operations, other health problems or an emergency can make standard (open) surgery safer. Sometimes a surgeon begins with keyhole surgery and changes to open surgery for safety. The decision is made after your medical check-up."
    },
    {
      question: "Can I consult Dr. Hira Nawaz for a breast lump or thyroid swelling?",
      answer: "Yes. You can book a consultation to have a breast lump or a thyroid swelling checked. The doctor will examine you and may suggest tests, such as a scan. Most breast lumps are not cancer, but any new lump should be checked soon."
    },
    {
      question: "Where are surgical consultations available in Faisalabad?",
      answer: "Dr. Hira Nawaz sees patients at Faisal Hospital, Plot 547, Muhammadia Colony Block A, People's Colony No 1, Faisalabad. Consultations are Monday to Saturday, 4:00 PM to 9:00 PM. The clinic is closed on Sunday."
    },
    {
      question: "How can I book an appointment?",
      answer: "Send a WhatsApp message at https://wa.me/923211836189 or call 0321 1836189. Share your name and a short note about your problem. The team will help you choose a time."
    }
  ];

  return (
    <>
      <SEOHead customSchema={servicesSchema} />

      {/* B3. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-brand-soft/80 via-white to-white pt-8 pb-16 md:pt-20 md:pb-28 overflow-hidden border-b border-[#E7E7E7] bg-grid-subtle">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left Content Column (Text & buttons first on mobile) */}
            <div className="lg:col-span-7 order-1 space-y-6 text-center lg:text-left">
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-brand to-brand-hover text-white shadow-glow-brand ring-2 ring-brand/15">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-rose-200" />
                  Surgical Services
                </span>
                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm border border-brand/20 text-medical-heading shadow-subtle">
                  <MapPin className="w-3 h-3 mr-1 text-brand" />
                  Faisalabad, Pakistan
                </span>
              </div>

              <div>
                <h1 className="font-heading text-fluid-h1 font-extrabold text-medical-heading tracking-tight leading-[1.08]">
                  General & Laparoscopic Surgery Services in Faisalabad
                </h1>
              </div>

              <p className="text-base sm:text-lg text-medical-body leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Dr. Hira Nawaz sees patients in Faisalabad for general and laparoscopic surgery concerns. This page shows the main problems and treatments you can ask her about. The right plan depends on your condition and your medical check-up. Choose a service to read more, or book a consultation.
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
                      alt="Dr. Hira Nawaz, female general and laparoscopic surgeon in Faisalabad"
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

      {/* S01. INTRODUCTION TO SURGICAL SERVICES (Order 1) */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand-soft text-brand border border-brand/20">
            Clinical Care Standards
          </span>

          <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
            How Surgeons Assess and Treat Health Problems
          </h2>

          <div className="space-y-4 text-fluid-body text-medical-body leading-relaxed max-w-3xl mx-auto font-normal text-left sm:text-center">
            <p>
              A general surgeon looks after many common health problems. These include lumps, hernias, gallstones, appendix problems and problems near the back passage. The surgeon first listens to your symptoms and examines you. Tests, such as blood tests or scans, may follow.
            </p>
            <p className="text-medical-secondary">
              Some problems need an operation. Others get better with medicine, simple care or regular check-ups. Your surgeon explains which path is right for you.
            </p>
            <p className="text-medical-secondary">
              Use the sections below to find your concern. First read the two main surgical categories. Then look through the full list of 13 treatment topics.
            </p>
          </div>

          <div className="pt-2">
            <a 
              href="#treatment-directory" 
              className="inline-flex items-center text-sm font-semibold text-brand hover:text-brand-hover hover:underline"
            >
              <span>Jump to Treatment Directory</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </a>
          </div>
        </div>
      </section>

      {/* S02. TWO MAIN SURGICAL CATEGORIES (Order 2) */}
      <section className="py-16 md:py-24 bg-[#F7F1F6] border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand/10 text-brand mb-3">
              Core Categories
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              Two Main Areas of Surgery
            </h2>
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
                  General surgery covers many common health problems. These include problems of the belly and gut, the back passage, the breast and thyroid, and lumps and infections of the skin. A general surgeon first finds the cause. Then she explains whether you need surgery or another treatment.
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
                  Laparoscopic surgery is also called keyhole surgery. The surgeon makes small cuts and uses a thin camera to see inside the body. It can mean smaller scars and a quicker recovery for some patients. It does not suit every patient or every condition, so your surgeon decides after a check-up.
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

      {/* S03. COMPLETE TREATMENT SERVICES DIRECTORY (Order 3) */}
      <section id="treatment-directory" className="py-16 md:py-24 bg-white border-b border-[#E7E7E7] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand-soft text-brand mb-3 border border-brand/20">
              Complete Directory
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              Surgical Treatments and Conditions
            </h2>
            <p className="mt-3 text-fluid-body text-medical-secondary leading-relaxed">
              Select a card to read more about a condition. Each page explains the problem in simple words. A consultation can tell you what applies to your case.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {treatmentServices.map((service, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-subtle hover:shadow-elevated hover:border-brand/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
                    <span className="text-xs font-bold text-brand uppercase tracking-wider bg-brand-soft px-3 py-1 rounded-full border border-brand/10">
                      Condition 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-medical-heading mb-3 group-hover:text-brand transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-service-body text-medical-body leading-[1.6] mb-4 font-normal">
                    {service.description}
                  </p>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-medical-secondary block mb-1">
                      Common Concern:
                    </span>
                    <p className="text-xs text-medical-heading leading-relaxed font-medium">
                      {service.commonConcern}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link 
                    to={service.url}
                    className="inline-flex items-center text-sm font-semibold text-brand hover:text-brand-hover group"
                  >
                    <span className="underline-offset-2 group-hover:underline">{service.cta}</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* S04. HOW TO CHOOSE THE RIGHT SURGICAL SERVICE (Order 4) */}
      <section className="py-16 md:py-24 bg-[#F7F1F6] border-b border-[#E7E7E7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand/10 text-brand mb-3">
              Patient Guidance
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              How to Choose the Right Service
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-card space-y-8">
            <div className="space-y-4 text-fluid-body text-medical-body leading-relaxed font-normal">
              <p>
                You do not need to know your diagnosis before you call. Many symptoms look alike, and only an examination can show the cause. Describe what you feel, how long you have had it and what makes it better or worse. The clinic team will help you book a suitable visit.
              </p>
              <p>
                If you have more than one concern, mention all of them. A surgeon can look at them together.
              </p>
            </div>

            {/* Calm Urgent Symptoms Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-amber-50/70 border border-amber-200/90 text-medical-heading">
              <h3 className="font-heading font-bold text-lg sm:text-xl text-amber-950 mb-3 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-amber-700 shrink-0" />
                When not to wait for a routine appointment
              </h3>

              <p className="text-sm sm:text-base text-amber-950 mb-4 font-medium">
                Some symptoms need urgent medical care. Go to the nearest hospital emergency department if you have:
              </p>

              <ul className="space-y-2 text-sm sm:text-base text-amber-950 list-disc list-inside">
                <li>sudden, severe belly pain, or pain with repeated vomiting;</li>
                <li>a hard, painful lump in the groin or belly that you cannot push back;</li>
                <li>a painful swelling with fever or spreading redness;</li>
                <li>a foot wound with redness, heat or swelling, if you have diabetes;</li>
                <li>heavy bleeding that does not stop.</li>
              </ul>

              <p className="text-xs sm:text-sm text-amber-900 mt-4 font-semibold">
                This website cannot give emergency care.
              </p>
            </div>

            <div className="text-center pt-2">
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

        </div>
      </section>

      {/* S05. GENERAL SURGERY VS LAPAROSCOPIC SURGERY (Order 5) */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand-soft text-brand mb-3 border border-brand/20">
              Clear Comparison
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              General Surgery and Laparoscopic Surgery: What Is the Difference?
            </h2>
          </div>

          <div className="space-y-6 text-fluid-body text-medical-body leading-relaxed font-normal mb-10 max-w-3xl mx-auto text-left sm:text-center">
            <p>
              General surgery is a medical specialty. It describes the kind of problems a surgeon treats. Laparoscopic surgery is a technique. It describes one way of doing an operation, using small cuts and a camera.
            </p>
            <p className="text-medical-secondary">
              The two are not opposites. A general surgeon may use keyhole surgery for some problems and standard (open) surgery for others. The choice depends on your condition and your medical check-up.
            </p>
          </div>

          {/* 3-Column Comparison Table */}
          <div className="overflow-x-auto rounded-3xl border border-slate-200/90 shadow-card bg-white mb-10">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand text-white text-sm sm:text-base font-heading">
                  <th className="py-4 px-6 font-semibold">Aspect</th>
                  <th className="py-4 px-6 font-semibold">General surgery</th>
                  <th className="py-4 px-6 font-semibold">Laparoscopic surgery</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm sm:text-base text-medical-body">
                <tr className="hover:bg-brand-soft/30 transition-colors">
                  <td className="py-4 px-6 font-bold text-medical-heading">What it is</td>
                  <td className="py-4 px-6">A surgical specialty</td>
                  <td className="py-4 px-6">A way of operating</td>
                </tr>
                <tr className="hover:bg-brand-soft/30 transition-colors bg-slate-50/50">
                  <td className="py-4 px-6 font-bold text-medical-heading">What it tells you</td>
                  <td className="py-4 px-6">Which problems the surgeon treats</td>
                  <td className="py-4 px-6">How the operation is done</td>
                </tr>
                <tr className="hover:bg-brand-soft/30 transition-colors">
                  <td className="py-4 px-6 font-bold text-medical-heading">How it works</td>
                  <td className="py-4 px-6">Check-up, tests, then a treatment plan</td>
                  <td className="py-4 px-6">Small cuts and a thin camera</td>
                </tr>
                <tr className="hover:bg-brand-soft/30 transition-colors bg-slate-50/50">
                  <td className="py-4 px-6 font-bold text-medical-heading">Who decides</td>
                  <td className="py-4 px-6">The surgeon, with you</td>
                  <td className="py-4 px-6">The surgeon, after your check-up</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Action buttons below the table */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/general-surgery/"
              className="button-sheen w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand to-brand-hover hover:from-brand-hover hover:to-brand-dark text-white font-semibold text-base transition-all shadow-glow-brand"
            >
              <span>Explore General Surgery</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            <Link
              to="/laparoscopic-surgery/"
              className="button-sheen w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand to-brand-hover hover:from-brand-hover hover:to-brand-dark text-white font-semibold text-base transition-all shadow-glow-brand"
            >
              <span>Explore Laparoscopic Surgery</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

        </div>
      </section>

      {/* S06. WHY CONSULT DR. HIRA NAWAZ? (Order 6) */}
      <section className="py-16 md:py-24 bg-[#F7F1F6] border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand/10 text-brand mb-3">
              Doctor Credentials
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              Why Consult Dr. Hira Nawaz?
            </h2>
            <p className="mt-3 text-fluid-body text-medical-secondary leading-relaxed">
              Here are the facts patients often want to know before they book.
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
        </div>
      </section>

      {/* S07. YOUR SURGICAL CONSULTATION JOURNEY (Order 7) */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand-soft text-brand mb-3 border border-brand/20">
              The Consultation Process
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              Your Surgical Consultation Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consultationSteps.map((step, idx) => (
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
              Dr. Hira Nawaz sees patients at Faisal Hospital in Faisalabad. Please book a time first by WhatsApp or phone.
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
              Frequently Asked Questions About Surgical Services
            </h2>
          </div>

          <FAQAccordion items={servicesFaqs} />
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
            Book a Surgical Consultation
          </h2>

          <p className="max-w-2xl mx-auto text-fluid-body text-purple-100/90 leading-relaxed mb-8 font-normal">
            If you are worried about a lump, a pain or any other surgical problem, do not wait and wonder. Send a WhatsApp message or call the clinic. The team will help you find a time at Faisal Hospital, Monday to Saturday, 4:00 PM to 9:00 PM.
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
