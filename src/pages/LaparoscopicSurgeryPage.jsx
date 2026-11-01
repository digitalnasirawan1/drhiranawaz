import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Phone,
  Eye,
  Activity
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import SEOHead from '../components/SEOHead';
import FAQAccordion from '../components/FAQAccordion';
import DualLocationSection from '../components/DualLocationSection';
import AppointmentCTA from '../components/AppointmentCTA';
import MedicalDisclaimerAlert from '../components/MedicalDisclaimerAlert';
import { businessInfo } from '../data/businessInfo';
import { servicesData } from '../data/servicesData';

export default function LaparoscopicSurgeryPage() {
  const lapFaqs = [
    {
      question: "What is laparoscopic (keyhole) surgery?",
      answer: "Laparoscopic surgery is a minimally invasive surgical technique where operations inside the abdomen are performed through small keyhole incisions (5 to 10 mm) using a specialized camera (laparoscope) and fine instruments, rather than a single large abdominal incision."
    },
    {
      question: "Is laparoscopic surgery suitable for every patient?",
      answer: "Not necessarily. While many patients are candidates for laparoscopic gallbladder or hernia repair, suitability depends on individual factors such as previous abdominal surgeries, extensive scar adhesions, severe cardiopulmonary disease, or complex anatomy."
    },
    {
      question: "Can a laparoscopic surgery be converted to an open surgery?",
      answer: "Yes. In a small percentage of cases, if severe inflammation, unexpected bleeding, or difficult anatomy prevents safe visualization through keyholes, the surgeon may convert to an open procedure to prioritize patient safety."
    },
    {
      question: "What are the common procedures performed laparoscopically by Dr. Hira Nawaz?",
      answer: "Common procedures include laparoscopic cholecystectomy for gallstones, laparoscopic repair for inguinal and umbilical hernias, and laparoscopic appendectomy."
    }
  ];

  return (
    <>
      <SEOHead />

      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-soft via-white to-white py-12 md:py-20 border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand text-white">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                Minimally Invasive Surgery
              </span>

              <h1 className="font-heading text-fluid-h1 font-bold text-medical-heading tracking-tight">
                Female Laparoscopic Surgeon in Faisalabad
              </h1>

              <p className="text-fluid-body text-medical-body leading-[1.7] max-w-2xl">
                Learn about laparoscopic (keyhole) surgery options with Dr. Hira Nawaz (MBBS, FCPS). Dedicated assessment for laparoscopic gallbladder stone removal, hernia repair, and appendectomy at our Private Clinic and Faisal Hospital, Faisalabad.
              </p>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E7E7E7] shadow-subtle flex items-start space-x-3.5">
                <ShieldCheck className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <div className="text-sm sm:text-base text-medical-secondary leading-relaxed">
                  <strong className="text-medical-heading font-semibold">Clinical Leadership:</strong> Head of Surgery Department at Fauji Foundation Hospital Faisalabad and Consultant Surgeon at Private Clinic and Faisal Hospital.
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
                  src="/images/services/laparoscopic-surgeon-dr-hira-nawaz-faisalabad.jpg" 
                  alt="Laparoscopic Surgeon Dr. Hira Nawaz in Faisalabad"
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What is Laparoscopic Surgery & How It Works */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">Procedural Overview</span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading mt-1">
              What Is Laparoscopic Surgery & How Does It Work?
            </h2>
            <p className="mt-4 text-fluid-body text-medical-body leading-[1.7] max-w-3xl">
              Laparoscopic surgery, often termed keyhole surgery or minimally invasive surgery, involves operating within the abdominal or pelvic cavities through small incisions (typically 0.5 to 1 cm in length). 
            </p>
            <p className="mt-3 text-fluid-body text-medical-body leading-[1.7] max-w-3xl">
              A specialized miniature camera (the laparoscope) transmits high-definition, magnified visuals to an operating theater monitor, guiding the surgeon's specialized instruments. The peritoneal cavity is gently inflated with carbon dioxide gas to create a clear working field.
            </p>
          </div>

          {/* Benefits vs Limitations Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F7F1F6] p-6 sm:p-8 rounded-3xl border border-[#E7E7E7]">
              <h3 className="font-heading font-semibold text-lg sm:text-xl text-medical-heading mb-4 flex items-center">
                <CheckCircle2 className="w-5 h-5 text-brand mr-2 shrink-0" />
                Potential Clinical Advantages
              </h3>
              <ul className="space-y-3 text-base text-medical-body leading-relaxed">
                <li>• Smaller skin incisions compared to conventional open laparotomy</li>
                <li>• Reduced surgical trauma to abdominal wall muscles and fascia</li>
                <li>• Lower incidence of postoperative surgical site wound complications</li>
                <li>• Magnified anatomical view of operative landmarks and tissue planes</li>
                <li>• Often facilitates earlier return to light daily activities</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-[#E7E7E7]">
              <h3 className="font-heading font-semibold text-lg sm:text-xl text-medical-heading mb-4 flex items-center">
                <AlertCircle className="w-5 h-5 text-amber-600 mr-2 shrink-0" />
                Clinical Risks & Limitations
              </h3>
              <ul className="space-y-3 text-base text-medical-body leading-relaxed">
                <li>• Requires general anesthesia with endotracheal intubation</li>
                <li>• Dense adhesions from prior surgery may impede safe visualization</li>
                <li>• Occasional necessity to convert to open surgery if bleeding occurs</li>
                <li>• Temporary shoulder tip discomfort from residual carbon dioxide</li>
                <li>• Not clinically appropriate for all patients or emergency conditions</li>
              </ul>
            </div>
          </div>

          {/* Laparoscopic vs Open Surgery Table */}
          <div className="border border-[#E7E7E7] rounded-2xl overflow-hidden shadow-subtle">
            <div className="bg-slate-100 px-6 py-4 border-b border-[#E7E7E7]">
              <h3 className="font-heading font-bold text-base sm:text-lg text-medical-heading">
                Comparison: Laparoscopic vs. Open Surgery
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm sm:text-base text-left leading-relaxed">
                <thead className="bg-slate-50 text-medical-heading border-b border-[#E7E7E7]">
                  <tr>
                    <th className="px-6 py-3 font-semibold">Aspect</th>
                    <th className="px-6 py-3 font-semibold">Laparoscopic Approach</th>
                    <th className="px-6 py-3 font-semibold">Open Surgery Approach</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7E7E7]">
                  <tr>
                    <td className="px-6 py-4 font-semibold text-medical-heading">Incisions</td>
                    <td className="px-6 py-4 text-medical-secondary">3 to 4 tiny keyhole cuts (5–10 mm)</td>
                    <td className="px-6 py-4 text-medical-secondary">Single traditional incision (7–15 cm)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-medical-heading">Hospital Stay</td>
                    <td className="px-6 py-4 text-medical-secondary">Typically 24 to 36 hours for routine cases</td>
                    <td className="px-6 py-4 text-medical-secondary">2 to 4 days depending on procedure</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-medical-heading">Abdominal Trauma</td>
                    <td className="px-6 py-4 text-medical-secondary">Minimized muscle disruption</td>
                    <td className="px-6 py-4 text-medical-secondary">Muscle division or retraction required</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-medical-heading">Clinical Indication</td>
                    <td className="px-6 py-4 text-medical-secondary">Ideal for un-adhesioned gallbladder, hernias</td>
                    <td className="px-6 py-4 text-medical-secondary">Preferred in severe peritonitis, dense scars</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Laparoscopic Services */}
      <section className="py-16 md:py-24 bg-[#F7F1F6] border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">Keyhole Operations</span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading mt-1">
              Common Laparoscopic Procedures
            </h2>
            <p className="mt-2 text-fluid-body text-medical-secondary">
              Procedures performed by Dr. Hira Nawaz using minimally invasive techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.slice(0, 3).map(s => (
              <div 
                key={s.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#E7E7E7] shadow-subtle hover:shadow-card hover:border-brand/40 transition-all flex flex-col justify-between group"
              >
                <div className="h-48 overflow-hidden bg-slate-50 relative">
                  <img 
                    src={s.image} 
                    alt={s.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                    <span>Read Procedure Details</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">Common Queries</span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading mt-1">
              Laparoscopic Surgery FAQs
            </h2>
          </div>
          <FAQAccordion items={lapFaqs} />
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
