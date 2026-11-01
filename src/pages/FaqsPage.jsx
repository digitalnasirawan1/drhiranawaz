import { useState } from 'react';
import { HelpCircle, ChevronDown, Calendar, Phone } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import FAQAccordion from '../components/FAQAccordion';
import DualLocationSection from '../components/DualLocationSection';
import AppointmentCTA from '../components/AppointmentCTA';
import MedicalDisclaimerAlert from '../components/MedicalDisclaimerAlert';
import { businessInfo } from '../data/businessInfo';

export default function FaqsPage() {
  const [activeTab, setActiveTab] = useState('general');

  const faqCategories = {
    general: {
      name: "General Consultations",
      items: [
        {
          question: "How do I schedule an appointment with Dr. Hira Nawaz?",
          answer: "You can book directly via WhatsApp at https://wa.me/923211836189 or by calling the clinic phone at 0321 1836189 during hospital outpatient hours."
        },
        {
          question: "What are Dr. Hira Nawaz's consultation hours?",
          answer: "Dr. Hira Nawaz conducts outpatient consultations from Monday to Saturday between 4:00 PM and 9:00 PM at her Private Clinic and Faisal Hospital. The clinic is closed on Sundays."
        },
        {
          question: "What should I bring to my initial surgical consultation?",
          answer: "Please bring all prior medical records, recent ultrasound reports, blood tests (CBC, LFTs, blood sugar), previous operation notes, and a list of your current medications."
        },
        {
          question: "Can I consult Dr. Hira Nawaz as a female general surgeon for intimate concerns?",
          answer: "Yes. Many female patients feel significantly more comfortable discussing breast lumps, perianal fissures, piles, and abdominal hernias with an experienced female general surgeon in a private, supportive consultation setting."
        }
      ]
    },
    generalSurgery: {
      name: "General Surgery",
      items: [
        {
          question: "Does having a hernia always require surgery?",
          answer: "Yes. A hernia is a structural mechanical defect (tear or gap) in the muscular abdominal wall. Medicines, abdominal belts, and exercises cannot repair the muscle tear. Surgery is necessary to repair the defect and prevent complications such as strangulation."
        },
        {
          question: "Are all breast lumps indicative of breast cancer?",
          answer: "No. The vast majority of breast lumps (over 80%) evaluated in outpatient clinics are benign conditions such as fibroadenomas or fluid-filled cysts. However, any new or changing breast lump must be evaluated through proper triple assessment."
        },
        {
          question: "Can a lipoma or sebaceous cyst be removed on a day-care basis?",
          answer: "Yes. Most lipomas and sebaceous cysts are safely excised in a minor procedure suite under local anesthesia, taking approximately 30 to 45 minutes, with patients returning home shortly thereafter."
        },
        {
          question: "Why should a diabetic foot ulcer be treated by a surgeon?",
          answer: "Diabetic foot ulcers require timely, meticulous surgical debridement to remove dead necrotic tissue, control deep infection, and prevent bacterial spread that could otherwise lead to limb amputation."
        }
      ]
    },
    laparoscopy: {
      name: "Laparoscopic Surgery",
      items: [
        {
          question: "What is laparoscopic (keyhole) surgery?",
          answer: "Laparoscopic surgery involves performing operations through small 5 to 10 mm incisions using a miniature high-definition camera and delicate surgical instruments, rather than a single large open incision."
        },
        {
          question: "Can gallstones be dissolved with medications instead of gallbladder surgery?",
          answer: "No. Oral dissolution therapies are ineffective for the vast majority of hard cholesterol and pigment stones and have a recurrence rate exceeding 50%. Laparoscopic cholecystectomy is the worldwide gold standard for symptomatic gallstones."
        },
        {
          question: "Is laparoscopic surgery suitable for all hernia patients?",
          answer: "Laparoscopic repair (TAPP / TEP) is suitable for many inguinal and umbilical hernias. However, very large, complicated, or heavily scarred recurrent defects may be better repaired using proven open tension-free hernioplasty. Dr. Hira Nawaz evaluates each patient individually."
        },
        {
          question: "Can a laparoscopic procedure be converted to an open surgery?",
          answer: "Yes. In cases of dense internal adhesions, severe acute inflammation, or abnormal vascular anatomy where keyhole visualization is unsafe, the surgeon may convert to an open procedure to ensure patient safety."
        }
      ]
    },
    recovery: {
      name: "Treatment & Recovery",
      items: [
        {
          question: "How long is the hospital stay after laparoscopic gallbladder removal?",
          answer: "Most laparoscopic cholecystectomy patients at Faisal Hospital stay for one overnight observation and are safely discharged within 24 to 36 hours."
        },
        {
          question: "When can I return to work following hernia surgery?",
          answer: "Light desk work and walking can typically resume within 7 to 10 days. Strenuous manual labor, heavy weight lifting (over 10 kg), and vigorous sports should be deferred for 4 to 6 weeks."
        },
        {
          question: "How should I care for my surgical incision at home?",
          answer: "Keep the surgical dressing clean and dry. Avoid soaking in bathtubs or swimming until sutures are removed and healing is confirmed. Report any sudden redness, increasing pain, or fever immediately."
        }
      ]
    },
    location: {
      name: "Appointments & Location",
      items: [
        {
          question: "Where is Faisal Hospital located in Faisalabad?",
          answer: "Faisal Hospital is located at Plot 547, Muhammadia Colony Block A, People's Colony No 1, Faisalabad, Pakistan."
        },
        {
          question: "What is Dr. Hira Nawaz's role at Fauji Foundation Hospital?",
          answer: "Dr. Hira Nawaz serves as the Head of Surgery Department at Fauji Foundation Hospital Faisalabad. Her private outpatient evening consultations are conducted at Private Clinic (Behind Faisal Hospital) and Faisal Hospital."
        },
        {
          question: "Is there parking and wheelchair access at Faisal Hospital?",
          answer: "Yes, Faisal Hospital provides accessible entryways and patient assistance facilities for outpatient visitors."
        }
      ]
    }
  };

  return (
    <>
      <SEOHead />

      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-soft via-white to-white py-12 md:py-20 border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand text-white mb-4">
            <HelpCircle className="w-3.5 h-3.5 mr-1.5" />
            Patient Guidance
          </span>

          <h1 className="font-heading text-fluid-h1 font-bold text-medical-heading tracking-tight mb-6">
            Frequently Asked Questions
          </h1>

          <p className="text-fluid-body text-medical-body leading-[1.7] max-w-2xl mx-auto">
            Find clear, medically accurate answers to common patient questions regarding surgical procedures, consultation timings, laparoscopic techniques, and recovery expectations.
          </p>
        </div>
      </section>

      {/* Categorized FAQs Section */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {Object.keys(faqCategories).map((key) => {
              const cat = faqCategories[key];
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive 
                      ? 'bg-brand text-white shadow-sm' 
                      : 'bg-slate-100 text-medical-heading hover:bg-brand-soft hover:text-brand'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Active Accordion */}
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-medical-heading mb-6 text-center">
              {faqCategories[activeTab].name}
            </h2>
            <FAQAccordion items={faqCategories[activeTab].items} defaultOpenIndex={0} />
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
