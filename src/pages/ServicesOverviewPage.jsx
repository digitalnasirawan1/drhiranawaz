import { Link } from 'react-router-dom';
import { 
  Activity, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  HelpCircle,
  Stethoscope,
  Clock,
  Calendar
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import SEOHead from '../components/SEOHead';
import FAQAccordion from '../components/FAQAccordion';
import DualLocationSection from '../components/DualLocationSection';
import AppointmentCTA from '../components/AppointmentCTA';
import MedicalDisclaimerAlert from '../components/MedicalDisclaimerAlert';
import { servicesData, categoriesData } from '../data/servicesData';
import { businessInfo } from '../data/businessInfo';

export default function ServicesOverviewPage() {
  const serviceFaqs = [
    {
      question: "Which surgical procedures can be performed laparoscopically?",
      answer: "Laparoscopic surgery is commonly performed for gallbladder stone removal (cholecystectomy), inguinal and umbilical hernia mesh repair, and emergency or elective appendectomy. Suitability depends on previous surgical history and anatomical factors."
    },
    {
      question: "Are all surgeries performed under general anesthesia?",
      answer: "No. While laparoscopic abdominal procedures require general anesthesia, many minor surgical procedures (such as lipoma excision, sebaceous cyst removal, and localized abscess drainage) are safely performed under local anesthesia in day-care settings."
    },
    {
      question: "What is the typical hospital stay for general surgical procedures?",
      answer: "Day-care procedures allow patients to return home the same day. Laparoscopic gallbladder and hernia patients typically stay for 24 hours, while complex open abdominal surgeries may require 2 to 3 days of inpatient monitoring."
    },
    {
      question: "How should I prepare for my initial surgical consultation?",
      answer: "Bring all previous medical reports, recent abdominal ultrasounds, blood test results, and a current list of medications you are taking."
    }
  ];

  return (
    <>
      <SEOHead />

      {/* Services Hero */}
      <section className="bg-gradient-to-b from-brand-soft via-white to-white py-12 md:py-20 border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand text-white mb-4">
            <Activity className="w-3.5 h-3.5 mr-1.5" />
            Specialized Clinical Directory
          </span>

          <h1 className="font-heading text-fluid-h1 font-bold text-medical-heading tracking-tight mb-6">
            Comprehensive General & Laparoscopic Surgical Services
          </h1>

          <p className="text-fluid-body text-medical-body leading-[1.7] max-w-3xl mx-auto">
            Dr. Hira Nawaz provides consultation, diagnosis, and operative surgical care for abdominal wall defects, biliary conditions, acute abdominal emergencies, breast lumps, thyroid disorders, and minor surgical conditions at our Private Clinic and Faisal Hospital, Faisalabad.
          </p>
        </div>
      </section>

      {/* Categories Section (General & Laparoscopic Hubs) */}
      <section className="py-16 md:py-20 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {categoriesData.map(cat => (
              <div 
                key={cat.id}
                className="bg-brand-soft/40 rounded-3xl p-6 sm:p-8 border border-[#E7E7E7] hover:border-brand/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand">Surgical Specialty</span>
                    <span className="p-2 bg-white rounded-xl shadow-subtle text-brand">
                      {cat.id === 'laparoscopic-surgery' ? <Sparkles className="w-5 h-5" /> : <Activity className="w-5 h-5" />}
                    </span>
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-medical-heading mb-3">
                    {cat.title}
                  </h2>
                  <p className="text-service-body text-medical-secondary leading-[1.6] mb-6">
                    {cat.description}
                  </p>
                </div>
                <div>
                  <Link 
                    to={cat.slug} 
                    className="inline-flex items-center text-[15px] font-semibold text-brand hover:text-brand-hover group"
                  >
                    <span>Explore {cat.title} Hub</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* All 13 Individual Treatments Directory */}
          <div>
            <div className="mb-10 text-center max-w-2xl mx-auto">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">Directory of Treatments</span>
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading mt-1">
                Individual Surgical Treatments
              </h2>
              <p className="text-fluid-body text-medical-secondary mt-2">
                Every condition is addressed with dedicated clinical protocols and individual treatment plans.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {servicesData.map(service => (
                <div 
                  key={service.id}
                  className="bg-white rounded-3xl overflow-hidden border border-[#E7E7E7] shadow-subtle hover:shadow-card hover:border-brand/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="h-44 sm:h-48 overflow-hidden bg-slate-50 relative">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-brand">
                      {service.category}
                    </div>
                  </div>

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
                      className="inline-flex items-center text-[15px] font-semibold text-brand group-hover:text-brand-hover mt-auto pt-3 border-t border-slate-100"
                    >
                      <span>Read Treatment Details</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Surgical Consultation & Treatment Planning */}
      <section className="py-16 md:py-20 bg-[#F7F1F6] border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand/10 text-brand">
                Clinical Workflow
              </span>
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading">
                Understanding the Surgical Consultation & Planning
              </h2>
              <p className="text-fluid-body text-medical-body leading-[1.7]">
                Consulting a surgeon does not automatically mean undergoing an operation. In many scenarios, diagnostic clarification, reassurance, or medical non-operative management is the most appropriate first step.
              </p>
              <div className="space-y-3 text-base text-medical-secondary leading-relaxed">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-1" />
                  <span><strong className="text-medical-heading font-semibold">Comprehensive Diagnosis:</strong> Evaluating physical symptoms alongside laboratory and ultrasound data.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-1" />
                  <span><strong className="text-medical-heading font-semibold">Patient Education:</strong> Clear explanations of operative versus conservative alternatives.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-1" />
                  <span><strong className="text-medical-heading font-semibold">Preoperative Optimization:</strong> Managing co-existing conditions (diabetes, hypertension) prior to surgery.</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E7E7E7] shadow-card space-y-4">
              <div className="flex items-center space-x-3">
                <ShieldCheck className="w-6 h-6 text-brand shrink-0" />
                <h3 className="font-heading font-bold text-lg text-medical-heading">Doctor Credentials</h3>
              </div>
              <p className="text-base text-medical-secondary leading-relaxed">
                Dr. Hira Nawaz holds MBBS and FCPS in General Surgery. She is the Head of Surgery Department at Fauji Foundation Hospital Faisalabad and holds specialist evening outpatient clinics at Private Clinic and Faisal Hospital.
              </p>
              <div className="pt-2">
                <a 
                  href={businessInfo.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="button-sheen w-full inline-flex items-center justify-center py-3.5 rounded-xl bg-gradient-to-r from-[#653C61] to-[#4D2B49] hover:from-[#4D2B49] hover:to-[#3A1E37] text-white font-semibold text-sm sm:text-base transition-all shadow-glow-brand hover:shadow-elevated"
                >
                  <WhatsAppIcon className="w-4 h-4 mr-2 fill-current" />
                  <span>Book Appointment</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services FAQs */}
      <section className="py-16 md:py-20 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">Patient Queries</span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading mt-1">
              General Surgery FAQs
            </h2>
          </div>
          <FAQAccordion items={serviceFaqs} />
        </div>
      </section>

      {/* Hospital & Clinic Locations */}
      <section className="py-16 md:py-20 bg-[#F7F1F6] border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DualLocationSection />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <MedicalDisclaimerAlert />
      </div>

      <AppointmentCTA />
    </>
  );
}
