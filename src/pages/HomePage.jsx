import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  MapPin, 
  Clock, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Stethoscope,
  Activity,
  Calendar,
  ExternalLink
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import SEOHead from '../components/SEOHead';
import FAQAccordion from '../components/FAQAccordion';
import DualLocationSection from '../components/DualLocationSection';
import AppointmentCTA from '../components/AppointmentCTA';
import { businessInfo } from '../data/businessInfo';
import { servicesData, categoriesData } from '../data/servicesData';

export default function HomePage() {
  const homeFaqs = [
    {
      question: "Where does Dr. Hira Nawaz conduct outpatient surgical consultations?",
      answer: "Dr. Hira Nawaz conducts evening consultations at her Private Clinic (Behind Faisal Hospital, New Building, People's Colony No 1) and at Faisal Hospital, Faisalabad, from Monday to Saturday, 4:00 PM to 7:00 PM."
    },
    {
      question: "What are Dr. Hira Nawaz's surgical qualifications and leadership positions?",
      answer: "Dr. Hira Nawaz holds MBBS and FCPS in General Surgery from the College of Physicians and Surgeons Pakistan. She serves as the Head of Surgery Department at Fauji Foundation Hospital Faisalabad."
    },
    {
      question: "What conditions are treated using minimally invasive laparoscopic surgery?",
      answer: "Common laparoscopic procedures include laparoscopic cholecystectomy for gallstones, laparoscopic repair for inguinal and umbilical hernias, and laparoscopic appendectomy for acute appendicitis."
    },
    {
      question: "Why do many female patients prefer consulting a female general surgeon?",
      answer: "Female patients often feel significantly more comfortable discussing intimate or sensitive conditions such as breast lumps, perianal fissures, hemorrhoids, or abdominal wall hernias with an experienced female general surgeon in a private, supportive setting."
    },
    {
      question: "How do I book an appointment with Dr. Hira Nawaz?",
      answer: "You can book directly by calling 0321 1836189 or messaging on official WhatsApp at https://wa.me/923211836189 during outpatient consultation hours."
    }
  ];

  return (
    <>
      <SEOHead />

      {/* HERO SECTION (EDITORIAL HEALTHCARE HERO - PREMIUM VISUAL UPGRADE) */}
      <section className="relative bg-gradient-to-b from-brand-soft/80 via-white to-white pt-8 pb-16 md:pt-20 md:pb-28 overflow-hidden border-b border-[#E7E7E7] bg-grid-subtle">
        {/* Subtle decorative background ambient glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left Content Column (order-2 on mobile, order-1 on desktop) */}
            <div className="lg:col-span-7 order-2 lg:order-1 space-y-6 text-center lg:text-left">
              
              {/* Eyebrow & Credential Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-brand to-brand-hover text-white shadow-glow-brand">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-rose-200" />
                  MBBS, FCPS (General Surgery)
                </span>
                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm border border-brand/20 text-medical-heading shadow-subtle">
                  <MapPin className="w-3 h-3 mr-1 text-brand" />
                  Faisalabad, Pakistan
                </span>
              </div>

              {/* H1 Primary Heading - Dr. Hira Nawaz with fluid typography & elegant subtitle */}
              <div>
                <h1 className="font-heading text-fluid-h1 font-extrabold text-medical-heading tracking-tight leading-[1.08]">
                  Dr. Hira Nawaz
                </h1>
                <div className="font-heading text-lg sm:text-2xl md:text-3xl font-bold mt-2 sm:mt-3 text-transparent bg-clip-text bg-gradient-to-r from-brand via-[#7D4978] to-brand">
                  Female General & Laparoscopic Surgeon in Faisalabad
                </div>
              </div>

              {/* Approved Hero Copy */}
              <p className="text-base sm:text-lg text-medical-body leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Dr. Hira Nawaz provides consultation for general surgical conditions and laparoscopic surgery in Faisalabad. Learn about treatment options, discuss your concerns and receive guidance based on your individual medical needs.
              </p>

              {/* Hero CTAs - 1st WhatsApp ("Book Appointment" in brand plum), 2nd Call */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={businessInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-sheen w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#653C61] to-[#4D2B49] hover:from-[#4D2B49] hover:to-[#3A1E37] transition-all shadow-glow-brand hover:shadow-elevated transform hover:-translate-y-0.5"
                >
                  <WhatsAppIcon className="w-5 h-5 mr-2 fill-current" />
                  <span>Book Appointment</span>
                </a>

                <a
                  href={businessInfo.phoneTel}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-bold text-medical-heading bg-white hover:bg-brand-soft border border-slate-200 hover:border-brand/40 transition-all shadow-subtle hover:shadow-card transform hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4 mr-2 text-brand" />
                  <span>Call: {businessInfo.phoneDisplay}</span>
                </a>
              </div>

              {/* Quick Trust Highlights - Refined cards with icons and gentle hover */}
              <div className="pt-6 grid grid-cols-3 gap-3 border-t border-slate-200/80 text-center lg:text-left">
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-subtle hover:border-brand/40 hover:shadow-card transition-all">
                  <div className="w-7 h-7 rounded-lg bg-brand-soft text-brand flex items-center justify-center mb-1.5 mx-auto lg:mx-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-medical-heading font-heading">FCPS Certified</div>
                  <div className="text-[11px] text-medical-secondary font-medium">Specialist General Surgery</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-subtle hover:border-brand/40 hover:shadow-card transition-all">
                  <div className="w-7 h-7 rounded-lg bg-brand-soft text-brand flex items-center justify-center mb-1.5 mx-auto lg:mx-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-medical-heading font-heading">Laparoscopy</div>
                  <div className="text-[11px] text-medical-secondary font-medium">Keyhole Minimally Invasive</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-subtle hover:border-brand/40 hover:shadow-card transition-all">
                  <div className="w-7 h-7 rounded-lg bg-brand-soft text-brand flex items-center justify-center mb-1.5 mx-auto lg:mx-0">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-medical-heading font-heading">Female Surgeon</div>
                  <div className="text-[11px] text-medical-secondary font-medium">Comfort & Dignified Care</div>
                </div>
              </div>

            </div>

            {/* Right Doctor Portrait Column (order-1 on mobile: displays BEFORE text, order-2 on desktop - Tailored, Attractive Frame) */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center mb-4 lg:mb-0">
              <div className="relative w-full max-w-[270px] sm:max-w-[320px] md:max-w-[350px]">
                {/* Soft ambient depth shadow */}
                <div className="absolute inset-0 bg-brand/10 rounded-2xl sm:rounded-3xl blur-lg transform scale-95 pointer-events-none"></div>
                
                {/* Snug tailored frame */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-brand/30 shadow-card bg-white p-1.5 transition-all duration-300 group hover:border-brand hover:shadow-elevated">
                  <div className="aspect-[4/5] rounded-[0.875rem] sm:rounded-2xl overflow-hidden bg-slate-50 relative">
                    <img
                      src={businessInfo.images.heroPortrait}
                      alt="Dr. Hira Nawaz - Female Laparoscopic & General Surgeon in Faisalabad"
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

      {/* 1. SURGEON PROFILE & CREDENTIALS - ABOUT DR. HIRA NAWAZ (EDITORIAL UPGRADE) */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Doctor In-Clinic Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-brand/20 shadow-elevated aspect-[4/4.5] group">
                <img 
                  src={businessInfo.images.inOPD} 
                  alt="Dr. Hira Nawaz conducting outpatient consultation at Faisal Hospital" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating caption pill */}
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

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand-soft text-brand border border-brand/20">
                Surgeon Profile & Credentials
              </span>

              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight leading-tight">
                About Dr. Hira Nawaz
              </h2>

              <p className="text-fluid-body text-medical-body leading-relaxed font-normal">
                Dr. Hira Nawaz is an accomplished Female General & Laparoscopic Surgeon based in Faisalabad, holding post-graduate fellowship credentials (FCPS) from the College of Physicians and Surgeons Pakistan.
              </p>

              <p className="text-fluid-body text-medical-secondary leading-relaxed font-normal">
                Currently serving as the Head of Surgery Department at Fauji Foundation Hospital Faisalabad, she leads surgical training and clinical care. In her evening practice at Private Clinic and Faisal Hospital, Dr. Hira Nawaz provides specialized consultations for abdominal wall hernias, symptomatic gallstones, acute appendicitis, breast lumps, thyroid disorders, and perianal conditions.
              </p>

              {/* Polished Credential Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200/90 shadow-subtle hover:border-brand/40 hover:shadow-card transition-all">
                  <div className="flex items-center space-x-2 text-brand font-bold text-xs uppercase tracking-wider mb-1">
                    <ShieldCheck className="w-4 h-4 text-brand" />
                    <span>Primary Qualifications</span>
                  </div>
                  <div className="text-base font-bold text-medical-heading mt-1">MBBS, FCPS (General Surgery)</div>
                  <div className="text-sm text-medical-secondary mt-0.5">Fellow College of Physicians & Surgeons Pakistan</div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200/90 shadow-subtle hover:border-brand/40 hover:shadow-card transition-all">
                  <div className="flex items-center space-x-2 text-brand font-bold text-xs uppercase tracking-wider mb-1">
                    <Award className="w-4 h-4 text-brand" />
                    <span>Department Leadership</span>
                  </div>
                  <div className="text-base font-bold text-medical-heading mt-1">Head of Surgery Department</div>
                  <div className="text-sm text-medical-secondary mt-0.5">Fauji Foundation Hospital Faisalabad</div>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  to="/about/"
                  className="inline-flex items-center px-6 py-3.5 rounded-xl bg-brand-soft hover:bg-brand text-brand hover:text-white border border-brand/20 font-semibold text-base transition-all duration-300 shadow-subtle hover:shadow-card group"
                >
                  <span>Read Dr. Hira Nawaz's Full Professional Background</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. CORE SURGICAL DISCIPLINES - SURGICAL SPECIALIZATIONS (VISUAL UPGRADE) */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#F7F1F6]/70 via-white to-[#F7F1F6]/70 border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand/10 text-brand mb-3 border border-brand/15">
              Core Surgical Disciplines
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              Surgical Specializations
            </h2>
            <p className="mt-3 text-fluid-body text-medical-secondary leading-relaxed">
              Dr. Hira Nawaz provides clinical expertise across two primary surgical domains, utilizing conventional open surgery and precision keyhole laparoscopy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {categoriesData.map((cat) => (
              <div 
                key={cat.id}
                className="bg-white rounded-3xl overflow-hidden border-2 border-slate-200/90 hover:border-brand/50 shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image with Vignette & Category Tag */}
                <div className="h-64 sm:h-72 overflow-hidden relative bg-slate-100">
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-black/20 pointer-events-none"></div>
                  
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-brand uppercase tracking-wider shadow-card border border-brand/15">
                    {cat.title}
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-medical-heading mb-3 group-hover:text-brand transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-service-body text-medical-body leading-[1.6] mb-6 font-normal">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <Link 
                      to={cat.slug}
                      className="inline-flex items-center text-base font-semibold text-brand hover:text-brand-hover group"
                    >
                      <span className="underline-offset-4 group-hover:underline">Explore {cat.title} Services Hub</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SPECIALIZED CARE DIRECTORY - WHAT DR. HIRA NAWAZ TREATS (BENTO GRID VISUAL UPGRADE) */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl">
              <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand-soft text-brand mb-3 border border-brand/20">
                Specialized Care Directory
              </span>
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
                What Dr. Hira Nawaz treats
              </h2>
              <p className="mt-3 text-fluid-body text-medical-secondary leading-relaxed">
                Comprehensive laparoscopic and general surgical procedures performed with evidence-based standards in Faisalabad.
              </p>
            </div>
            <div>
              <Link 
                to="/services/"
                className="inline-flex items-center px-6 py-3 rounded-xl border border-slate-200 hover:border-brand text-sm font-semibold text-medical-heading hover:text-brand bg-slate-50 hover:bg-brand-soft shadow-subtle transition-all"
              >
                <span>View All Services Hub</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
            </div>
          </div>

          {/* Bento-Style Grid: 13 Approved Procedures with Harmonic Bento Variations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
            {servicesData.map((service, idx) => {
              // Bento layout: Featured hero bento cards for top key procedures (idx 0 & 1), balanced cards for others
              const isFeaturedBento = idx === 0 || idx === 1;
              const colSpanClass = isFeaturedBento 
                ? "lg:col-span-6 bg-white" 
                : (idx === 5 || idx === 6)
                  ? "lg:col-span-6 bg-white"
                  : "lg:col-span-4 bg-white";

              return (
                <div 
                  key={service.id}
                  className={`${colSpanClass} rounded-3xl overflow-hidden border border-slate-200/90 shadow-subtle hover:shadow-elevated hover:border-brand/50 transition-all duration-300 flex flex-col justify-between group bg-white`}
                >
                  {/* Category Top Tag Strip */}
                  <div className="px-6 pt-5 pb-3 flex items-center justify-between border-b border-slate-50">
                    <span className="text-[11px] font-bold text-brand uppercase tracking-wider bg-brand-soft px-3 py-1 rounded-full border border-brand/10">
                      {service.badge}
                    </span>
                  </div>

                  {/* Medical Illustration/Photo with Zoom */}
                  <div className={`${isFeaturedBento ? 'h-52 sm:h-56' : 'h-44 sm:h-48'} overflow-hidden bg-slate-50 relative`}>
                    <img 
                      src={service.image} 
                      alt={`${service.title} in Faisalabad`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none"></div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-medical-heading mb-2.5 group-hover:text-brand transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-service-body text-medical-secondary leading-[1.6] mb-6 font-normal">
                        {service.shortDescription}
                      </p>
                    </div>

                    <Link 
                      to={service.slug}
                      className="inline-flex items-center text-[15px] font-semibold text-brand group-hover:text-brand-hover mt-auto pt-3.5 border-t border-slate-100 group"
                    >
                      <span className="underline-offset-2 group-hover:underline">Explore Procedure & Treatment Details</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dual Navigation Category Links at bottom */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 pt-8 border-t border-slate-200/80">
            <Link
              to="/general-surgery/"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-slate-200 hover:border-brand text-sm font-semibold text-medical-heading hover:text-brand bg-white hover:bg-brand-soft shadow-subtle transition-all"
            >
              <span>Explore General Surgery Services</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
            <Link
              to="/laparoscopic-surgery/"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-slate-200 hover:border-brand text-sm font-semibold text-medical-heading hover:text-brand bg-white hover:bg-brand-soft shadow-subtle transition-all"
            >
              <span>Explore Laparoscopic Surgery Services</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. CONSULTATION LOCATIONS - VISIT THE CLINIC NEAR YOU (WITH EMBEDDED MAPS, LOCATION NAME, ADDRESS, PHONE) */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#F7F1F6]/70 via-white to-[#F7F1F6]/70 border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DualLocationSection 
            title="Visit the clinic near you"
            subtitle="Dr. Hira Nawaz provides outpatient surgical consultations, diagnostic reviews, and minor surgical procedures at our Private Clinic and Faisal Hospital in Faisalabad."
          />
        </div>
      </section>

      {/* 5. COMMON QUESTIONS - FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand-soft text-brand mb-3 border border-brand/20">
              Common Questions
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-fluid-body text-medical-secondary">
              Helpful answers regarding appointments, surgery options, and clinical care.
            </p>
          </div>

          <FAQAccordion items={homeFaqs} />

          <div className="text-center mt-10">
            <Link 
              to="/faqs/" 
              className="inline-flex items-center text-base font-semibold text-brand hover:underline underline-offset-4"
            >
              View all frequently asked surgical questions &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL APPOINTMENT CTA (BOOK A CONSULTATION WITH DR. HIRA NAWAZ) */}
      <AppointmentCTA />
    </>
  );
}
