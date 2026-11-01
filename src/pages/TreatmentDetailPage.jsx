import { useLocation, Link, Navigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Phone, 
  Clock, 
  Activity, 
  Stethoscope,
  Heart,
  HelpCircle,
  MapPin
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

export default function TreatmentDetailPage({ treatmentId }) {
  const location = useLocation();

  // Find service by prop id or current route pathname
  const service = servicesData.find(s => 
    s.id === treatmentId || 
    location.pathname.includes(s.id) || 
    s.slug === location.pathname || 
    s.slug === `${location.pathname}/`
  );

  if (!service) {
    return <Navigate to="/services/" replace />;
  }

  // Related services (exclude current service)
  const relatedServices = servicesData
    .filter(s => s.id !== service.id)
    .slice(0, 3);

  // Schema for MedicalProcedure
  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": service.title,
    "description": service.shortDescription,
    "procedureType": "https://schema.org/SurgicalProcedure",
    "performer": {
      "@type": "Physician",
      "name": businessInfo.doctorName,
      "medicalSpecialty": "General & Laparoscopic Surgery",
      "telephone": "+923211836189",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": businessInfo.address.plot,
        "addressLocality": businessInfo.address.city,
        "addressCountry": "PK"
      }
    }
  };

  return (
    <>
      <SEOHead 
        customTitle={`${service.title} in Faisalabad | Dr. Hira Nawaz Surgeon`}
        customDescription={service.shortDescription}
        customSchema={procedureSchema}
      />

      {/* 01. TREATMENT HERO */}
      <section className="bg-gradient-to-b from-brand-soft via-white to-white py-12 md:py-20 border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand text-white">
                  <Activity className="w-3.5 h-3.5 mr-1.5" />
                  {service.category}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white border border-[#E7E7E7] text-brand">
                  {service.badge}
                </span>
              </div>

              <h1 className="font-heading text-fluid-h1 font-bold text-medical-heading tracking-tight">
                {service.title} in Faisalabad
              </h1>

              <p className="text-fluid-body text-medical-body leading-[1.7] max-w-2xl">
                {service.heroLead}
              </p>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E7E7E7] shadow-subtle flex items-start space-x-3.5">
                <ShieldCheck className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <div className="text-sm sm:text-base text-medical-secondary leading-relaxed">
                  <strong className="text-medical-heading font-semibold">Evaluated & Operated by Dr. Hira Nawaz:</strong> MBBS, FCPS General Surgery. Head of Surgery Department at Fauji Foundation Hospital Faisalabad.
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
              <div className="rounded-3xl overflow-hidden border border-[#E7E7E7] shadow-card aspect-[4/4] w-full max-w-sm bg-slate-100">
                <img 
                  src={service.image} 
                  alt={`${service.title} by Dr. Hira Nawaz in Faisalabad`} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 02. WHAT IS THE CONDITION? */}
      <section className="py-16 md:py-20 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Condition Overview</span>
          <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading mt-1 mb-6">
            What Is {service.title}?
          </h2>
          <p className="text-fluid-body text-medical-body leading-[1.7] max-w-3xl">
            {service.whatIs}
          </p>
        </div>
      </section>

      {/* 03. SYMPTOMS AND WARNING SIGNS & 04. CAUSES AND RISK FACTORS */}
      <section className="py-16 md:py-24 bg-[#F7F1F6] border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Symptoms Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E7E7] shadow-subtle flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 mb-4">
                  <AlertTriangle className="w-3.5 h-3.5 mr-1.5" />
                  Clinical Signs
                </div>
                <h3 className="font-heading text-fluid-h3 font-bold text-medical-heading mb-6">
                  Symptoms & Warning Signs
                </h3>
                <ul className="space-y-3.5 text-base text-medical-body leading-[1.65]">
                  {service.symptoms.map((symp, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-1" />
                      <span>{symp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Causes Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E7E7] shadow-subtle flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-soft text-brand mb-4">
                  <Activity className="w-3.5 h-3.5 mr-1.5" />
                  Etiology & Triggers
                </div>
                <h3 className="font-heading text-fluid-h3 font-bold text-medical-heading mb-6">
                  Causes & Risk Factors
                </h3>
                <ul className="space-y-3.5 text-base text-medical-body leading-[1.65]">
                  {service.causes.map((cause, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="w-2 h-2 rounded-full bg-brand shrink-0 mt-2"></span>
                      <span>{cause}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 05. DIAGNOSIS AND EVALUATION & 06. TREATMENT OPTIONS */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Diagnosis Block */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">Clinical Workup</span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading mt-1 mb-6">
              Diagnosis & Evaluation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.diagnosis.map((diag, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-[#E7E7E7]">
                  <div className="w-9 h-9 rounded-xl bg-brand-soft text-brand flex items-center justify-center mb-3.5 border border-brand/15">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                  <p className="text-service-body text-medical-body leading-[1.6] font-medium">
                    {diag}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Treatment Options Block */}
          <div className="pt-6 border-t border-[#E7E7E7]">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">Management Pathways</span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading mt-1 mb-6">
              Treatment Options Available
            </h2>
            <div className="space-y-4">
              {service.treatmentOptions.map((opt, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#F7F1F6] border border-[#E7E7E7] flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center shrink-0 text-sm font-bold mt-0.5 shadow-sm">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="text-base text-medical-body leading-[1.65]">
                      {opt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 07. SURGICAL PROCEDURE DETAILS */}
      <section className="py-16 md:py-20 bg-[#F7F1F6] border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Surgical Technique</span>
          <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading mt-1 mb-6">
            The Surgical Procedure & Technique
          </h2>
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E7E7E7] shadow-subtle text-fluid-body text-medical-body leading-[1.7] max-w-3xl">
            {service.procedureDetails}
          </div>
        </div>
      </section>

      {/* 08. BENEFITS, RISKS AND RECOVERY */}
      <section className="py-16 md:py-20 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Postoperative Care</span>
          <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading mt-1 mb-6">
            Recovery Expectations & Potential Risks
          </h2>
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-[#E7E7E7] text-fluid-body text-medical-body leading-[1.7] max-w-3xl mb-6">
            {service.recoveryAndRisks}
          </div>
          <MedicalDisclaimerAlert />
        </div>
      </section>

      {/* 09. WHY CONSULT DR. HIRA NAWAZ? */}
      <section className="py-16 md:py-20 bg-[#F7F1F6] border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">Specialist Standards</span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading mt-1">
              Why Consult Dr. Hira Nawaz for {service.title}?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E7E7E7] shadow-subtle">
              <ShieldCheck className="w-8 h-8 text-brand mb-3" />
              <h3 className="font-heading font-semibold text-lg sm:text-xl text-medical-heading mb-2">Fellowship Certified</h3>
              <p className="text-service-body text-medical-secondary leading-[1.6]">
                FCPS qualified surgeon with extensive operating theater experience and high commitment to safety protocols.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E7E7E7] shadow-subtle">
              <Heart className="w-8 h-8 text-brand mb-3" />
              <h3 className="font-heading font-semibold text-lg sm:text-xl text-medical-heading mb-2">Patient Comfort</h3>
              <p className="text-service-body text-medical-secondary leading-[1.6]">
                Compassionate, patient-centered discussions, particularly valued by female patients seeking discreet clinical care.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E7E7E7] shadow-subtle">
              <Activity className="w-8 h-8 text-brand mb-3" />
              <h3 className="font-heading font-semibold text-lg sm:text-xl text-medical-heading mb-2">Department Head</h3>
              <p className="text-service-body text-medical-secondary leading-[1.6]">
                Head of Surgery Department at Fauji Foundation Hospital, ensuring modern surgical practice standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CONSULTATION PROCESS */}
      <ConsultationProcess />

      {/* 11. TREATMENT-SPECIFIC FAQS */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">Patient FAQs</span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading mt-1">
              {service.title} Questions & Answers
            </h2>
          </div>
          <FAQAccordion items={service.faqs} />
        </div>
      </section>

      {/* 12. RELATED SURGICAL SERVICES */}
      <section className="py-16 md:py-20 bg-[#F7F1F6] border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">Related Conditions</span>
              <h2 className="font-heading text-fluid-h3 font-bold text-medical-heading mt-1">
                Other Surgical Procedures
              </h2>
            </div>
            <Link to="/services/" className="text-base font-semibold text-brand hover:underline">
              View All Directory &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map(rel => (
              <div 
                key={rel.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#E7E7E7] shadow-subtle p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-semibold text-brand block mb-2">{rel.category}</span>
                  <h3 className="font-heading font-semibold text-lg text-medical-heading mb-2">{rel.title}</h3>
                  <p className="text-service-body text-medical-secondary line-clamp-2 mb-4 leading-[1.6]">{rel.shortDescription}</p>
                </div>
                <Link to={rel.slug} className="text-[15px] font-semibold text-brand hover:underline inline-flex items-center">
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. PRACTICE LOCATIONS (FAISAL HOSPITAL & PRIVATE CLINIC) */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DualLocationSection />
        </div>
      </section>

      {/* 14. FINAL APPOINTMENT CTA */}
      <AppointmentCTA 
        title={`Book a Consultation for ${service.title}`}
        subtitle={`Schedule your clinical evaluation with Dr. Hira Nawaz at our Private Clinic or Faisal Hospital, Faisalabad. Outpatient timings: Monday to Saturday, 4:00 PM to 7:00 PM.`}
      />
    </>
  );
}
