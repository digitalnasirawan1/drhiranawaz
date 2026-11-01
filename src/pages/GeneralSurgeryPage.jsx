import { Link } from 'react-router-dom';
import { 
  Activity, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  AlertCircle, 
  Phone,
  Stethoscope
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import SEOHead from '../components/SEOHead';
import ConsultationProcess from '../components/ConsultationProcess';
import FAQAccordion from '../components/FAQAccordion';
import DualLocationSection from '../components/DualLocationSection';
import AppointmentCTA from '../components/AppointmentCTA';
import MedicalDisclaimerAlert from '../components/MedicalDisclaimerAlert';
import { servicesData } from '../data/servicesData';
import { businessInfo } from '../data/businessInfo';

export default function GeneralSurgeryPage() {
  const generalFaqs = [
    {
      question: "What conditions fall under the specialty of general surgery?",
      answer: "General surgery covers a broad scope of conditions including abdominal wall defects (hernias), gallbladder disease, appendicitis, benign and malignant breast lumps, thyroid goiters, skin lumps (lipomas, sebaceous cysts), localized abscesses, and anorectal conditions like hemorrhoids, fissures, and fistulas."
    },
    {
      question: "Why should female patients consider a female general surgeon?",
      answer: "A female general surgeon provides a comforting, dignified, and culturally sensitive setting for female patients experiencing conditions involving the breasts, abdomen, or perianal regions, encouraging timely medical attention."
    },
    {
      question: "Are all general surgical procedures invasive?",
      answer: "No. Many general surgical conditions can be treated conservatively with medication, lifestyle modifications, or day-care minor procedures under local anesthesia with same-day discharge."
    },
    {
      question: "What is the consultation fee and appointment system at Faisal Hospital?",
      answer: "Consultations are conducted Monday to Saturday from 4:00 PM to 7:00 PM at Private Clinic and Faisal Hospital. For appointment scheduling and reception guidance, patients can contact 0321 1836189."
    }
  ];

  return (
    <>
      <SEOHead />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-soft via-white to-white py-12 md:py-20 border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand text-white">
                <Activity className="w-3.5 h-3.5 mr-1.5" />
                Comprehensive Surgical Care
              </span>

              <h1 className="font-heading text-fluid-h1 font-bold text-medical-heading tracking-tight">
                Female General Surgeon in Faisalabad
              </h1>

              <p className="text-fluid-body text-medical-body leading-[1.7] max-w-2xl">
                Consult Female General Surgeon Dr. Hira Nawaz (MBBS, FCPS) for professional clinical diagnosis and surgical management of abdominal, soft-tissue, breast, and anorectal conditions at our Private Clinic and Faisal Hospital, Faisalabad.
              </p>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E7E7E7] shadow-subtle flex items-start space-x-3.5">
                <ShieldCheck className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <div className="text-sm sm:text-base text-medical-secondary leading-relaxed">
                  <strong className="text-medical-heading font-semibold">Head of Surgery Department, Fauji Foundation Hospital:</strong> Combining academic surgical leadership with compassionate outpatient clinical care.
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={businessInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-sheen inline-flex items-center px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#653C61] to-[#4D2B49] hover:from-[#4D2B49] hover:to-[#3A1E37] shadow-glow-brand hover:shadow-elevated transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 mr-2 fill-current" />
                  <span>Book Appointment</span>
                </a>
                <a
                  href={businessInfo.phoneTel}
                  className="inline-flex items-center px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-medical-heading bg-white border border-[#E7E7E7] hover:bg-brand-soft shadow-subtle transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2 text-brand" />
                  <span>Call: {businessInfo.phoneDisplay}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="rounded-3xl overflow-hidden border border-[#E7E7E7] shadow-card aspect-[4/4.5] w-full max-w-sm bg-slate-100">
                <img 
                  src="/images/services/female-general-surgeon-dr-hira-nawaz-faisalabad.jpg" 
                  alt="Female General Surgeon Dr. Hira Nawaz in Faisalabad"
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What is General Surgery & Conditions Treated */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">Medical Scope</span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading mt-1">
              What Is General Surgery?
            </h2>
            <p className="mt-4 text-fluid-body text-medical-body leading-[1.7] max-w-3xl">
              General surgery is a core surgical discipline focusing on the abdominal cavity and its contents (including the stomach, intestines, appendix, gallbladder, and liver connections), the abdominal wall (hernias), the breast, thyroid gland, and superficial soft tissues. General surgeons manage elective chronic complaints as well as acute surgical emergencies.
            </p>
          </div>

          {/* Conditions Treated Grid */}
          <div className="bg-[#F7F1F6] p-8 rounded-3xl border border-[#E7E7E7]">
            <h3 className="font-heading font-bold text-xl text-medical-heading mb-6">
              Primary Conditions Evaluated & Treated
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base text-medical-body leading-relaxed">
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-1" />
                <span>Abdominal wall hernias (inguinal, umbilical, incisional)</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-1" />
                <span>Symptomatic gallstones and acute cholecystitis</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-1" />
                <span>Acute appendicitis and inflammatory bowel conditions</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-1" />
                <span>Benign breast lumps (fibroadenomas), cysts & breast pain</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-1" />
                <span>Thyroid swellings, multinodular goiter & nodules</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-1" />
                <span>Anorectal disorders (piles, anal fissure, fistula in ano)</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-1" />
                <span>Soft tissue lumps (lipomas, sebaceous cysts)</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-1" />
                <span>Diabetic foot ulcers and acute skin abscesses</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* General Surgery Service Cards */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">Treatment Directory</span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading mt-1">
              General Surgery Treatment Procedures
            </h2>
            <p className="mt-2 text-fluid-body text-medical-secondary">
              Click any treatment below to read complete symptom guides, diagnostic criteria, and recovery expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesData.map(s => (
              <div 
                key={s.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#E7E7E7] shadow-subtle hover:shadow-card hover:border-brand/40 transition-all flex flex-col justify-between group"
              >
                <div className="h-44 sm:h-48 overflow-hidden bg-slate-50 relative">
                  <img 
                    src={s.image} 
                    alt={s.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-brand">
                    {s.badge}
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-medical-heading mb-2.5 group-hover:text-brand transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-service-body text-medical-secondary leading-[1.6] mb-6 font-normal">
                      {s.shortDescription}
                    </p>
                  </div>

                  <Link 
                    to={s.slug}
                    className="inline-flex items-center text-[15px] font-semibold text-brand group-hover:text-brand-hover mt-auto pt-3 border-t border-slate-100"
                  >
                    <span>View Treatment Details</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Process */}
      <ConsultationProcess />

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-[#F7F1F6] border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">Common Inquiries</span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading mt-1">
              General Surgery FAQs
            </h2>
          </div>
          <FAQAccordion items={generalFaqs} />
        </div>
      </section>

      {/* Practice Locations */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
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
