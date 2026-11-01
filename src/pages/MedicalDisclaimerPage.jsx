import { Link } from 'react-router-dom';
import { AlertCircle, ShieldAlert, Phone, Clock, MapPin } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { businessInfo } from '../data/businessInfo';

export default function MedicalDisclaimerPage() {
  return (
    <>
      <SEOHead />

      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-soft via-white to-white py-12 md:py-20 border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-rose-100 text-rose-800 mb-4 border border-rose-200">
            <AlertCircle className="w-3.5 h-3.5 mr-1.5" />
            Important Clinical Notice
          </span>

          <h1 className="font-heading text-fluid-h1 font-bold text-medical-heading tracking-tight mb-6">
            Medical & Health Information Disclaimer
          </h1>

          <p className="text-fluid-body text-medical-body leading-[1.7] max-w-2xl mx-auto">
            Please read this medical disclaimer carefully before reviewing content or scheduling appointments on this website.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-base text-medical-body leading-[1.7]">
          
          <div className="p-6 sm:p-8 rounded-3xl bg-rose-50 border border-rose-200 text-rose-900 space-y-3">
            <div className="flex items-center space-x-2.5 font-bold font-heading text-lg sm:text-xl">
              <ShieldAlert className="w-6 h-6 text-rose-600 shrink-0" />
              <span>Emergency Medical Notice</span>
            </div>
            <p className="text-base text-rose-950 leading-relaxed">
              If you or a loved one is experiencing severe, sudden acute abdominal pain, continuous vomiting, high fever with chills, difficulty breathing, a hernia bulge that is locked and painful, or profuse bleeding, <strong>do not rely on website communication</strong>. Proceed immediately to the nearest hospital emergency room (such as Allied Hospital, Civil Hospital, or Faisal Hospital Emergency) or call 1122 for ambulance assistance.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-medical-heading mb-3">1. General Educational Information Only</h2>
            <p>
              All materials, articles, procedural descriptions, and FAQs published on <strong>drhiranawaz.com</strong> are provided exclusively for patient general knowledge and educational awareness. They are not intended, nor should they be used, as a substitute for individualized clinical assessment, differential diagnosis, or in-person surgical examination.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-medical-heading mb-3">2. No Doctor-Patient Relationship Established Online</h2>
            <p>
              Browsing this website, submitting an inquiry through our contact form, or communicating over WhatsApp does not create a formal doctor-patient relationship. A doctor-patient relationship is formally established only during a clinical consultation at Private Clinic or Faisal Hospital, where an individualized medical history and physical examination are documented.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-medical-heading mb-3">3. Individual Variation in Surgical Outcomes</h2>
            <p>
              Every human body is unique. Surgical indications, procedure suitability (laparoscopic versus open surgery), potential procedural risks, anesthesia reactions, and postoperative recovery timelines vary considerably based on individual anatomy, age, lifestyle, co-morbidities (such as diabetes or hypertension), and adherence to medical advice. We do not provide universal guarantees regarding surgical outcomes.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-medical-heading mb-3">4. Clinical Institutional Roles Clarification</h2>
            <p>
              Dr. Hira Nawaz holds the academic leadership role of Head of Surgery Department at Fauji Foundation Hospital Faisalabad. Private evening consultations are held at Faisal Hospital. Information on this website reflects her general clinical practice and is independent of third-party hospital administrations.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
