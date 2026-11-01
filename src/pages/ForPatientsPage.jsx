import { Link } from 'react-router-dom';
import { 
  FileText, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Phone,
  HelpCircle,
  Activity,
  AlertCircle
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import DualLocationSection from '../components/DualLocationSection';
import AppointmentCTA from '../components/AppointmentCTA';
import MedicalDisclaimerAlert from '../components/MedicalDisclaimerAlert';
import { businessInfo } from '../data/businessInfo';

export default function ForPatientsPage() {
  return (
    <>
      <SEOHead />

      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-soft via-white to-white py-12 md:py-20 border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand text-white mb-4">
            <FileText className="w-3.5 h-3.5 mr-1.5" />
            Patient Information Hub
          </span>

          <h1 className="font-heading text-fluid-h1 font-bold text-medical-heading tracking-tight mb-6">
            Patient Resources & Consultation Guide
          </h1>

          <p className="text-fluid-body text-medical-body leading-[1.7] max-w-2xl mx-auto">
            Essential instructions to help you prepare for your surgical consultation with Dr. Hira Nawaz at our Private Clinic or Faisal Hospital, Faisalabad.
          </p>
        </div>
      </section>

      {/* What to Bring & Preparing for Consultation */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F7F1F6] p-6 sm:p-8 rounded-3xl border border-[#E7E7E7]">
              <h2 className="font-heading font-semibold text-lg sm:text-xl text-medical-heading mb-4 flex items-center">
                <CheckCircle2 className="w-5 h-5 text-brand mr-2 shrink-0" />
                What to Bring to Your Appointment
              </h2>
              <ul className="space-y-3 text-base text-medical-body leading-relaxed">
                <li>• Previous ultrasound, CT scan, or MRI films and official radiology reports</li>
                <li>• Recent blood test reports (Complete Blood Count, Liver Function Tests, Blood Glucose)</li>
                <li>• A complete list of all current prescription and over-the-counter medications</li>
                <li>• Details or discharge summaries from any prior surgical operations</li>
                <li>• Previous medical prescriptions and notes from referring physicians</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-[#E7E7E7]">
              <h2 className="font-heading font-semibold text-lg sm:text-xl text-medical-heading mb-4 flex items-center">
                <Clock className="w-5 h-5 text-brand mr-2 shrink-0" />
                What to Expect During Your Visit
              </h2>
              <ul className="space-y-3 text-base text-medical-body leading-relaxed">
                <li>• In-depth discussion of your current symptoms, onset, and triggers</li>
                <li>• Gentle, professional physical examination in a private clinical room</li>
                <li>• Objective review of imaging scans and explanation of findings</li>
                <li>• Discussion of surgical vs. non-surgical management alternatives</li>
                <li>• Transparent explanation of risks, hospital stay, and recovery expectations</li>
              </ul>
            </div>
          </div>

          {/* Patient Resource Pathways */}
          <div className="pt-6">
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading text-center mb-8">
              Explore Patient Resources
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link 
                to="/patient-results-before-after-surgery/" 
                className="p-6 rounded-2xl bg-white border border-[#E7E7E7] hover:border-brand/40 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-semibold uppercase text-brand mb-1">Case Studies</div>
                  <div className="font-heading font-semibold text-lg text-medical-heading mb-2">Clinical Outcomes</div>
                  <p className="text-service-body text-medical-secondary leading-[1.6]">Ethical overview of surgical recovery pathways and patient privacy.</p>
                </div>
              </Link>

              <Link 
                to="/gallery/" 
                className="p-6 rounded-2xl bg-white border border-[#E7E7E7] hover:border-brand/40 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-semibold uppercase text-brand mb-1">Visual Media</div>
                  <div className="font-heading font-semibold text-lg text-medical-heading mb-2">Practice Gallery</div>
                  <p className="text-service-body text-medical-secondary leading-[1.6]">View authentic photographs of our OPD, OT, and consultation settings.</p>
                </div>
              </Link>

              <Link 
                to="/videos/" 
                className="p-6 rounded-2xl bg-white border border-[#E7E7E7] hover:border-brand/40 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-semibold uppercase text-brand mb-1">Health Videos</div>
                  <div className="font-heading font-semibold text-lg text-medical-heading mb-2">Patient Videos</div>
                  <p className="text-service-body text-medical-secondary leading-[1.6]">Watch short educational discussions by Dr. Hira Nawaz on key conditions.</p>
                </div>
              </Link>

              <Link 
                to="/faqs/" 
                className="p-6 rounded-2xl bg-white border border-[#E7E7E7] hover:border-brand/40 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-semibold uppercase text-brand mb-1">Helpful Answers</div>
                  <div className="font-heading font-semibold text-lg text-medical-heading mb-2">Surgical FAQs</div>
                  <p className="text-service-body text-medical-secondary leading-[1.6]">Find answers to commonly asked questions on surgery and timings.</p>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Practice Locations */}
      <section className="py-16 md:py-24 bg-[#F7F1F6] border-b border-[#E7E7E7]">
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
