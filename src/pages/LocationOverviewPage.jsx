import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Clock, 
  Phone, 
  ExternalLink, 
  Calendar, 
  ShieldCheck, 
  Building,
  Navigation
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import DualLocationSection from '../components/DualLocationSection';
import AppointmentCTA from '../components/AppointmentCTA';
import MedicalDisclaimerAlert from '../components/MedicalDisclaimerAlert';
import { businessInfo } from '../data/businessInfo';

export default function LocationOverviewPage() {
  return (
    <>
      <SEOHead />

      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-soft via-white to-white py-12 md:py-20 border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand text-white mb-4">
            <MapPin className="w-3.5 h-3.5 mr-1.5" />
            Two Practice Locations in Faisalabad
          </span>

          <h1 className="font-heading text-fluid-h1 font-bold text-medical-heading tracking-tight mb-6">
            Consultation Locations & Clinic Directions
          </h1>

          <p className="text-fluid-body text-medical-body leading-[1.7]">
            Dr. Hira Nawaz conducts outpatient surgical consultations and clinical evaluations at two convenient practice locations in Faisalabad: our <strong>Private Clinic</strong> (Behind Faisal Hospital, New Building) and <strong>Faisal Hospital</strong>.
          </p>
        </div>
      </section>

      {/* Dual Locations Grid */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DualLocationSection 
            title="Practice Locations in Faisalabad"
            subtitle="Both locations operate Monday through Saturday from 4:00 PM to 7:00 PM for scheduled surgical consultations and follow-up reviews."
          />

          {/* Institutional Leadership Note */}
          <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-[#F7F1F6] border border-[#E7E7E7] max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <Building className="w-6 h-6 text-brand shrink-0 mt-1" />
              <div className="space-y-2">
                <h2 className="font-heading font-bold text-xl text-medical-heading">
                  Leadership at Fauji Foundation Hospital Faisalabad
                </h2>
                <p className="text-base text-medical-secondary leading-relaxed">
                  Dr. Hira Nawaz's official leadership role is <strong>Head of Surgery Department at Fauji Foundation Hospital Faisalabad</strong>. Her private outpatient evening appointments for general patients are conducted at our <strong>Private Clinic</strong> (Behind Faisal Hospital, 547/A Lower Canal Rd E) and <strong>Faisal Hospital</strong> in People's Colony No 1, Faisalabad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <MedicalDisclaimerAlert />
      </div>

      <AppointmentCTA />
    </>
  );
}
