import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Phone, 
  MapPin, 
  Clock, 
  Activity, 
  Sparkles, 
  Heart,
  Stethoscope,
  Building
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import SEOHead from '../components/SEOHead';
import DualLocationSection from '../components/DualLocationSection';
import AppointmentCTA from '../components/AppointmentCTA';
import MedicalDisclaimerAlert from '../components/MedicalDisclaimerAlert';
import { businessInfo } from '../data/businessInfo';
import { servicesData } from '../data/servicesData';

export default function AboutPage() {
  return (
    <>
      <SEOHead />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-soft via-white to-white py-12 md:py-20 border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left Content Column (order-2 on mobile, order-1 on desktop) */}
            <div className="lg:col-span-7 order-2 lg:order-1 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-brand to-brand-hover text-white shadow-glow-brand">
                <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-rose-200" />
                MBBS, FCPS (General Surgery)
              </span>

              <h1 className="font-heading text-fluid-h1 font-bold text-medical-heading tracking-tight">
                About Dr. Hira Nawaz
              </h1>

              <p className="text-fluid-body text-medical-body leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Dr. Hira Nawaz is an esteemed Female General & Laparoscopic Surgeon practicing in Faisalabad, dedicated to providing compassionate, evidence-based surgical care and advancing surgical safety standards.
              </p>

              {/* Verified Institutional Roles Box */}
              <div className="space-y-3 pt-2 text-left">
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-subtle flex items-start space-x-3.5 hover:border-brand/40 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-brand-soft text-brand flex items-center justify-center shrink-0 mt-0.5 border border-brand/15">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-brand">Institutional Leadership</div>
                    <div className="text-base font-bold text-medical-heading mt-0.5">
                      Head of Surgery Department, Fauji Foundation Hospital Faisalabad
                    </div>
                    <div className="text-sm text-medical-secondary mt-0.5 leading-relaxed">
                      Overseeing surgical clinical operations, resident training, and complex operative cases.
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-subtle flex items-start space-x-3.5 hover:border-brand/40 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-brand flex items-center justify-center shrink-0 mt-0.5 border border-purple-100">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-brand">Consultation Locations</div>
                    <div className="text-base font-bold text-medical-heading mt-0.5">
                      Private Clinic & Faisal Hospital, People's Colony No 1, Faisalabad
                    </div>
                    <div className="text-sm text-medical-secondary mt-0.5 leading-relaxed">
                      Private Outpatient Clinic: Monday to Saturday (4:00 PM – 7:00 PM)
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href={businessInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-sheen inline-flex items-center px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#653C61] to-[#4D2B49] hover:from-[#4D2B49] hover:to-[#3A1E37] shadow-glow-brand hover:shadow-elevated transition-all transform hover:-translate-y-0.5"
                >
                  <WhatsAppIcon className="w-4 h-4 mr-2 fill-current" />
                  <span>Book Appointment</span>
                </a>
                <a
                  href={businessInfo.phoneTel}
                  className="inline-flex items-center px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-medical-heading bg-white border border-slate-200 hover:bg-brand-soft hover:border-brand/40 shadow-subtle hover:shadow-card transition-all transform hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4 mr-2 text-brand" />
                  <span>Call: {businessInfo.phoneDisplay}</span>
                </a>
              </div>

            </div>

            {/* Portrait Image (order-1 on mobile: displays BEFORE text, order-2 on desktop - Tailored, Attractive Frame) */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center mb-4 lg:mb-0">
              <div className="relative w-full max-w-[270px] sm:max-w-[320px] md:max-w-[350px]">
                {/* Soft ambient depth shadow */}
                <div className="absolute inset-0 bg-brand/10 rounded-2xl sm:rounded-3xl blur-lg transform scale-95 pointer-events-none"></div>

                {/* Snug tailored frame */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-brand/30 shadow-card bg-white p-1.5 transition-all duration-300 group hover:border-brand hover:shadow-elevated">
                  <div className="aspect-[4/5] rounded-[0.875rem] sm:rounded-2xl overflow-hidden bg-slate-50 relative">
                    <img
                      src={businessInfo.images.heroPortrait}
                      alt="Dr. Hira Nawaz - Female Laparoscopic & General Surgeon"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Professional Introduction & Background */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand-soft text-brand mb-3">
              Professional Journey
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading">
              A Dedicated Career in Modern Surgical Care
            </h2>
          </div>

          <p className="text-fluid-body text-medical-body leading-[1.7] font-normal">
            Dr. Hira Nawaz completed her medical education (MBBS) and proceeded to complete rigorous post-graduate surgical residency training, earning her Fellowship of the College of Physicians and Surgeons Pakistan (FCPS) in General Surgery. 
          </p>

          <p className="text-fluid-body text-medical-body leading-[1.7] font-normal">
            Throughout her surgical career, Dr. Hira Nawaz has placed strong focus on both traditional open surgery and advanced minimally invasive laparoscopic techniques. Her surgical scope addresses gastrointestinal conditions, abdominal wall hernias, gallbladder stones, emergency appendicitis, breast lumps, thyroid goiters, and anorectal conditions.
          </p>

          <div className="p-6 sm:p-7 rounded-2xl bg-[#F7F1F6] border border-[#E7E7E7]">
            <h3 className="font-heading font-bold text-lg text-medical-heading mb-2">
              Important Clinical Governance & Role Clarification
            </h3>
            <p className="text-base text-medical-secondary leading-relaxed">
              Dr. Hira Nawaz holds the permanent departmental leadership position of <strong>Head of Surgery Department at Fauji Foundation Hospital Faisalabad</strong>. Her private outpatient evening consultations and elective surgical admissions are hosted at <strong>Private Clinic (Behind Faisal Hospital)</strong> and <strong>Faisal Hospital</strong>, located in People's Colony No 1, Faisalabad.
            </p>
          </div>
        </div>
      </section>

      {/* Surgical Philosophy & Approach to Care */}
      <section className="py-16 md:py-24 bg-[#F7F1F6] border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand/10 text-brand mb-3">
              Patient-First Standards
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading">
              Approach to Patient Assessment
            </h2>
            <p className="mt-3 text-fluid-body text-medical-secondary">
              Key tenets guiding Dr. Hira Nawaz's clinical and operative decision-making.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-[#E7E7E7] shadow-subtle flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-soft text-brand flex items-center justify-center mb-6">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-semibold text-lg sm:text-xl text-medical-heading mb-3">
                  Thorough Clinical Workup
                </h3>
                <p className="text-service-body text-medical-secondary leading-[1.6]">
                  Careful review of medical history, ultrasound imaging, and lab investigations before reaching a diagnostic conclusion.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#E7E7E7] shadow-subtle flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-soft text-brand flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-semibold text-lg sm:text-xl text-medical-heading mb-3">
                  Evidence-Based Indications
                </h3>
                <p className="text-service-body text-medical-secondary leading-[1.6]">
                  Surgery is recommended strictly when clinically indicated. Conservative and non-operative medical therapies are utilized whenever appropriate.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#E7E7E7] shadow-subtle flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-soft text-brand flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-semibold text-lg sm:text-xl text-medical-heading mb-3">
                  Patient Dignity & Transparency
                </h3>
                <p className="text-service-body text-medical-secondary leading-[1.6]">
                  Transparent communication regarding surgical risks, recovery expectations, wound care, and follow-up guidance without exaggerated promises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authentic Clinical Photography Section */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand-soft text-brand mb-3">
              Practice Media
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading">
              Authentic Clinical Glimpse
            </h2>
            <p className="mt-3 text-fluid-body text-medical-secondary">
              Authentic photographs of Dr. Hira Nawaz in outpatient consultations and surgical operating theater settings.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden border border-[#E7E7E7] shadow-subtle aspect-[4/3] bg-slate-100">
              <img 
                src={businessInfo.images.inOPD} 
                alt="Dr. Hira Nawaz in Outpatient Consultation Room" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-[#E7E7E7] shadow-subtle aspect-[4/3] bg-slate-100">
              <img 
                src={businessInfo.images.inOT} 
                alt="Dr. Hira Nawaz in Surgical Operating Theater" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-[#E7E7E7] shadow-subtle aspect-[4/3] bg-slate-100">
              <img 
                src={businessInfo.images.clinic} 
                alt="Consultation Clinic at Faisal Hospital" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/gallery/" className="text-base font-semibold text-brand hover:underline">
              View full clinical gallery &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Practice Locations Section (Faisal Hospital & Private Clinic) */}
      <section className="py-16 md:py-24 bg-[#F7F1F6] border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DualLocationSection />
        </div>
      </section>

      {/* Medical Disclaimer Banner */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <MedicalDisclaimerAlert />
      </div>

      <AppointmentCTA />
    </>
  );
}
