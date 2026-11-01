import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  AlertCircle, 
  Calendar, 
  Phone,
  FileCheck,
  UserCheck
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import DualLocationSection from '../components/DualLocationSection';
import AppointmentCTA from '../components/AppointmentCTA';
import MedicalDisclaimerAlert from '../components/MedicalDisclaimerAlert';
import { businessInfo } from '../data/businessInfo';

export default function PatientResultsPage() {
  const caseProtocols = [
    {
      title: "Laparoscopic Cholecystectomy for Symptomatic Cholelithiasis",
      indication: "Multiple mobile gallstones with recurrent postprandial biliary colic and cholecystitis.",
      procedure: "Four-port laparoscopic cholecystectomy with critical view of safety established.",
      clinicalOutcome: "Discharged within 24 hours in stable condition with standard oral analgesics and early mobilization."
    },
    {
      title: "Laparoscopic Mesh Repair for Inguinal Hernia (TAPP)",
      indication: "Symptomatic right indirect inguinal hernia causing discomfort upon exertion.",
      procedure: "Transabdominal Preperitoneal (TAPP) mesh placement with tension-free peritoneal closure.",
      clinicalOutcome: "Discharged on postoperative day 1; resumed light desk work within 7 days."
    },
    {
      title: "Ultrasound-Guided Fibroadenoma Excision",
      indication: "Palpable, mobile 2.5 cm benign lump in upper outer quadrant of breast tissue.",
      procedure: "Elective day-care excision biopsy via cosmetic periareolar incision.",
      clinicalOutcome: "Histopathology confirmed benign fibroadenoma; cosmetically hidden incision line."
    },
    {
      title: "Lateral Internal Sphincterotomy for Chronic Anal Fissure",
      indication: "Chronic posterior midline anal fissure refractory to 8 weeks of medical ointment therapy.",
      procedure: "Closed lateral internal sphincterotomy under spinal anesthesia.",
      clinicalOutcome: "Immediate relief from post-defecation spasm pain; complete mucosal healing at 4-week review."
    }
  ];

  return (
    <>
      <SEOHead />

      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-soft via-white to-white py-12 md:py-20 border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand text-white mb-4">
            <ShieldCheck className="w-3.5 h-3.5 mr-1.5" />
            Clinical Standards & Ethics
          </span>

          <h1 className="font-heading text-fluid-h1 font-bold text-medical-heading tracking-tight mb-6">
            Clinical Surgical Outcomes & Case Information
          </h1>

          <p className="text-fluid-body text-medical-body leading-[1.7] max-w-2xl mx-auto">
            A transparent overview of clinical treatment pathways, operative milestones, and patient confidentiality standards under the care of Dr. Hira Nawaz in Faisalabad.
          </p>
        </div>
      </section>

      {/* Strict Ethical Privacy Statement */}
      <section className="py-12 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 md:p-8 rounded-3xl bg-slate-50 border border-[#E7E7E7] flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-brand-soft text-brand flex items-center justify-center shrink-0">
              <Lock className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <h2 className="font-heading font-semibold text-lg sm:text-xl text-medical-heading">
                Patient Privacy & Medical Ethics Commitment
              </h2>
              <p className="text-base text-medical-secondary leading-relaxed">
                In strict adherence to medical ethics and the Pakistan Medical and Dental Council (PMDC) code of conduct, Dr. Hira Nawaz does not display sensationalized, unverified, or non-consensual before-and-after photographs. Clinical surgical outcomes depend on individual anatomy, co-morbidities, and strict adherence to postoperative care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Representative Clinical Pathways */}
      <section className="py-16 md:py-24 bg-[#F7F1F6] border-b border-[#E7E7E7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">Case Reviews</span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading mt-1">
              Standard Surgical Management Pathways
            </h2>
            <p className="mt-2 text-fluid-body text-medical-secondary">
              De-identified clinical scenarios demonstrating diagnostic criteria and surgical management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseProtocols.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E7E7] shadow-subtle space-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-brand mb-2">
                    <FileCheck className="w-4 h-4" />
                    <span>Clinical Scenario {idx + 1}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg sm:text-xl text-medical-heading mb-4">
                    {item.title}
                  </h3>

                  <div className="space-y-3.5 text-base text-medical-body leading-relaxed">
                    <div>
                      <strong className="text-medical-heading block font-semibold">Clinical Indication:</strong>
                      <span className="text-medical-secondary">{item.indication}</span>
                    </div>
                    <div>
                      <strong className="text-medical-heading block font-semibold">Surgical Approach:</strong>
                      <span className="text-medical-secondary">{item.procedure}</span>
                    </div>
                    <div>
                      <strong className="text-medical-heading block font-semibold">Postoperative Progress:</strong>
                      <span className="text-medical-secondary">{item.clinicalOutcome}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center text-sm text-medical-secondary">
                  <UserCheck className="w-4 h-4 text-emerald-600 mr-2 shrink-0" />
                  <span>Protocol managed under standard infection control guidelines.</span>
                </div>
              </div>
            ))}
          </div>

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
