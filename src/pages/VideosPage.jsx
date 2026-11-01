import { Link } from 'react-router-dom';
import { 
  Play, 
  ExternalLink, 
  Video, 
  ShieldCheck, 
  Clock, 
  Calendar,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import DualLocationSection from '../components/DualLocationSection';
import AppointmentCTA from '../components/AppointmentCTA';
import MedicalDisclaimerAlert from '../components/MedicalDisclaimerAlert';
import { businessInfo } from '../data/businessInfo';

export default function VideosPage() {
  const videoTopics = [
    {
      title: "Understanding Gallbladder Stones & Laparoscopic Cholecystectomy",
      category: "Laparoscopic Surgery",
      description: "Dr. Hira Nawaz discusses the symptoms of biliary colic, why gallstones cannot be dissolved with medicines, and how keyhole surgery is performed.",
      serviceLink: "/gallbladder-surgery/",
      serviceName: "Gallbladder Surgery"
    },
    {
      title: "Abdominal & Inguinal Hernia: When Is Surgery Necessary?",
      category: "Hernia Repair",
      description: "Clinical explanation of why abdominal wall muscle tears require mesh repair, the dangers of strangulation, and laparoscopic TAPP/TEP options.",
      serviceLink: "/hernia-surgery/",
      serviceName: "Hernia Surgery"
    },
    {
      title: "Acute Appendicitis: Signs You Should Not Ignore",
      category: "Emergency Care",
      description: "How to recognize migrating abdominal pain from the navel to the lower right abdomen and why early appendectomy prevents rupture.",
      serviceLink: "/appendix-surgery/",
      serviceName: "Appendix Surgery"
    },
    {
      title: "Breast Lumps in Women: Benign Fibroadenoma vs. Evaluation",
      category: "Breast Health",
      description: "Patient education on triple-assessment breast examination, reassurance for young females, and minimally invasive fibroadenoma excision.",
      serviceLink: "/breast-surgery/",
      serviceName: "Breast Surgery"
    },
    {
      title: "Piles (Hemorrhoids) and Anal Fissure: Relief Without Fear",
      category: "Proctology",
      description: "Overcoming stigma around anorectal symptoms, non-surgical dietary relief for early piles, and gentle surgical solutions for chronic tears.",
      serviceLink: "/hemorrhoids-surgery/",
      serviceName: "Hemorrhoids Surgery"
    },
    {
      title: "Diabetic Foot Ulcers: Daily Care & Prevention of Amputation",
      category: "Wound Care",
      description: "Essential advice for diabetic patients regarding neuropathy, daily foot inspection, early wound debridement, and limb-salvage protocols.",
      serviceLink: "/diabetic-foot-treatment/",
      serviceName: "Diabetic Foot Care"
    }
  ];

  return (
    <>
      <SEOHead />

      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-soft via-white to-white py-12 md:py-20 border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand text-white mb-4">
            <Video className="w-3.5 h-3.5 mr-1.5" />
            Patient Awareness & Health Education
          </span>

          <h1 className="font-heading text-fluid-h1 font-bold text-medical-heading tracking-tight mb-6">
            Educational Surgical Videos
          </h1>

          <p className="text-fluid-body text-medical-body leading-[1.7] max-w-2xl mx-auto">
            Watch Dr. Hira Nawaz explain common surgical conditions, keyhole laparoscopic procedures, and postoperative recovery guidance in simple, understandable terms.
          </p>

          <div className="pt-6 flex justify-center gap-4">
            <a 
              href={businessInfo.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-black transition-colors"
            >
              <span>Watch on TikTok Profile</span>
              <ExternalLink className="w-3.5 h-3.5 ml-2" />
            </a>
            <a 
              href={businessInfo.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              <span>Watch on Facebook</span>
              <ExternalLink className="w-3.5 h-3.5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Video Educational Library */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoTopics.map((topic, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-[#E7E7E7] shadow-subtle hover:shadow-card hover:border-brand/40 transition-all flex flex-col justify-between"
              >
                <div className="h-44 bg-slate-900 relative flex items-center justify-center p-6 text-center group cursor-pointer">
                  <div className="w-14 h-14 rounded-full bg-brand/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-brand transition-all">
                    <Play className="w-6 h-6 ml-1 fill-white" />
                  </div>
                  <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-white">
                    {topic.category}
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="font-heading font-semibold text-lg text-medical-heading mb-2.5">
                      {topic.title}
                    </h2>
                    <p className="text-service-body text-medical-secondary leading-[1.6] mb-6">
                      {topic.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm">
                    <Link to={topic.serviceLink} className="text-brand font-semibold hover:underline inline-flex items-center">
                      <span>Related: {topic.serviceName}</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                    <a 
                      href={businessInfo.socials.tiktok} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-black font-semibold flex items-center"
                    >
                      Watch <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
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
