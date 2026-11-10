import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  AlertCircle, 
  ShieldAlert, 
  Phone, 
  MapPin, 
  Clock, 
  ChevronDown, 
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Building2,
  Ambulance,
  Activity,
  HeartHandshake
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import SEOHead from '../components/SEOHead';
import { businessInfo } from '../data/businessInfo';

export default function MedicalDisclaimerPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? -1 : idx);
  };

  const disclaimerSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://drhiranawaz.com/medical-disclaimer/#webpage",
    "url": "https://drhiranawaz.com/medical-disclaimer/",
    "name": "Medical Disclaimer | Dr. Hira Nawaz",
    "isPartOf": { "@id": "https://drhiranawaz.com/#website" },
    "inLanguage": "en-PK"
  };

  const emergencySymptoms = [
    "sudden or severe belly pain;",
    "heavy bleeding that does not stop;",
    "severe difficulty breathing;",
    "chest pain;",
    "fainting or loss of consciousness;",
    "repeated vomiting with belly pain;",
    "a hard, painful lump that cannot be pushed back, or a painful swelling with fever;",
    "a high temperature, worsening pain or heavy bleeding after surgery;",
    "any other symptom that you fear could be life-threatening."
  ];

  const quickQuestions = [
    {
      question: "Does website information replace medical advice?",
      answer: "No. The website gives general information only. Only a doctor who has examined you can advise you about your own health."
    },
    {
      question: "Are treatment results guaranteed?",
      answer: "No. Results and recovery differ from person to person, and no doctor can promise a result. Your surgeon can explain what is realistic for you."
    },
    {
      question: "Can I use WhatsApp in an emergency?",
      answer: "No. WhatsApp and the appointment phone number are not emergency services. In an emergency, go to the nearest hospital emergency department."
    },
    {
      question: "Do I need a medical consultation?",
      answer: "If you have a health concern, yes, it is best to see a qualified doctor. This website can help you prepare questions, but it cannot examine you or give you a diagnosis."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Medical Disclaimer | Dr. Hira Nawaz"
        description="This website gives general information about surgery. It does not replace medical advice. Read this disclaimer and what to do in a medical emergency."
        canonical="https://drhiranawaz.com/medical-disclaimer/"
        customSchema={disclaimerSchema}
      />

      {/* B3. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#FBF8FA] via-white to-white pt-10 pb-16 md:pt-20 md:pb-24 border-b border-[#E7E7E7] overflow-hidden bg-grid-subtle">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-600 text-white shadow-sm">
              <ShieldAlert className="w-3.5 h-3.5 mr-1.5" />
              Clinical Guidance
            </span>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-slate-200 text-medical-heading shadow-subtle">
              Important Patient Notice
            </span>
          </div>

          <h1 className="font-heading text-fluid-h1 font-extrabold text-medical-heading tracking-tight leading-[1.1] mb-6">
            Medical Disclaimer
          </h1>

          <p className="text-base sm:text-lg text-medical-body leading-relaxed max-w-2xl mx-auto font-normal mb-8">
            This website gives general information about surgical conditions, treatments and consultations. It does not replace advice from a qualified doctor who has examined you. If you have an emergency, go to the nearest hospital emergency department straight away.
          </p>

          <div>
            <Link
              to="/contact/"
              className="button-sheen inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#653C61] to-[#4D2B49] hover:from-[#4D2B49] hover:to-[#3A1E37] transition-all shadow-glow-brand hover:shadow-elevated transform hover:-translate-y-0.5"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

        </div>
      </section>

      {/* S09. MEDICAL EMERGENCIES - PROMINENT NEAR TOP */}
      <section className="py-10 bg-rose-50/60 border-b border-rose-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-rose-200 shadow-card space-y-4">
            <div className="flex items-center space-x-3 text-rose-800">
              <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-6 h-6 text-rose-600" />
              </div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-rose-900">
                Medical Emergencies
              </h2>
            </div>

            <p className="text-base text-medical-heading leading-relaxed font-medium">
              This website, WhatsApp and the appointment phone number are not emergency services.
            </p>

            <p className="text-sm sm:text-base text-medical-body leading-relaxed">
              If you or someone else has a serious or fast-worsening problem, get urgent medical help straight away. Go to the nearest hospital emergency department. Do not wait for a reply to a message or a phone call.
            </p>

            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-900 block mb-2">
                Examples of emergencies include:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-medical-body">
                {emergencySymptoms.map((sym, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-rose-600 font-bold">•</span>
                    <span>{sym}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200/80 flex items-center space-x-3 text-xs sm:text-sm text-rose-950 font-medium">
              <Ambulance className="w-5 h-5 text-rose-700 shrink-0" />
              <span>
                In Punjab, the public emergency ambulance helpline is <strong>1122 (Rescue 1122)</strong>. If you cannot travel safely, ask someone to take you or call for an ambulance.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* B4. COMPLETE MEDICAL DISCLAIMER SECTIONS */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-base text-medical-body leading-relaxed">
          
          {/* S01. General Information Only */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-medical-heading tracking-tight">
              General Information Only
            </h2>
            <p>
              This website shares general information about health conditions, general surgery, laparoscopic (keyhole) surgery and related treatments. We write it to help you understand medical topics and prepare for a visit.
            </p>
            <p>
              It is not medical advice for you personally. Please do not use it to diagnose yourself or to choose your own treatment.
            </p>
          </div>

          {/* S02. Not a Substitute for a Medical Consultation */}
          <div className="space-y-4 pt-8 border-t border-slate-100">
            <h2 className="font-heading text-2xl font-bold text-medical-heading tracking-tight">
              Not a Substitute for a Medical Consultation
            </h2>
            <p>
              Every patient is different. Your symptoms, your medical history and your needs are your own.
            </p>
            <p>
              A qualified doctor may need to talk to you, examine you, look at your reports or advise tests before she can say what is wrong and what to do. A website cannot do this. Information on a web page cannot tell you your diagnosis or the right treatment for you.
            </p>
          </div>

          {/* S03. Reading This Website and Starting Care */}
          <div className="space-y-4 pt-8 border-t border-slate-100">
            <h2 className="font-heading text-2xl font-bold text-medical-heading tracking-tight">
              Reading This Website and Starting Care
            </h2>
            <p>
              Reading this website, or sending a first message to ask about an appointment, does not by itself start a treatment relationship with Dr. Hira Nawaz. A treatment relationship starts when the doctor agrees to care for you, usually at a consultation.
            </p>
            <p>
              This page does not take away any duty that a doctor has toward a patient once care has begun. It does not take away any right that you have under the law.
            </p>
          </div>

          {/* S04. Accuracy and Updates */}
          <div className="space-y-4 pt-8 border-t border-slate-100">
            <h2 className="font-heading text-2xl font-bold text-medical-heading tracking-tight">
              Accuracy and Updates
            </h2>
            <p>
              We make reasonable efforts to keep the information on this website correct. Medical knowledge and advice can change over time.
            </p>
            <p>
              We cannot promise that every page is up to date at every moment. If you think something is wrong or out of date, please tell us through the{' '}
              <Link to="/contact/" className="text-brand font-semibold hover:underline">
                Contact page
              </Link>.
            </p>
          </div>

          {/* S05. Treatment Decisions Are Personal */}
          <div className="space-y-4 pt-8 border-t border-slate-100">
            <h2 className="font-heading text-2xl font-bold text-medical-heading tracking-tight">
              Treatment Decisions Are Personal
            </h2>
            <p>
              The right treatment depends on you. Your doctor looks at:
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li>your condition;</li>
              <li>your medical history;</li>
              <li>what she finds when she examines you;</li>
              <li>any tests that are needed;</li>
              <li>her professional assessment.</li>
            </ul>
            <p>
              Not every patient needs surgery. Some problems get better with medicine, simple care or time. No treatment is right for everyone.
            </p>
          </div>

          {/* S06. Surgical Risks and Benefits */}
          <div className="space-y-4 pt-8 border-t border-slate-100">
            <h2 className="font-heading text-2xl font-bold text-medical-heading tracking-tight">
              Surgical Risks and Benefits
            </h2>
            <p>
              Surgery can help in many situations. It also has risks. No operation is completely safe or free of risk.
            </p>
            <p>
              The type and size of the risk depend on the operation and on your own health. Before any operation, talk to your surgeon about the likely benefits, the risks and the other choices you have, including not having surgery.
            </p>
          </div>

          {/* S07. Surgical Results and Recovery */}
          <div className="space-y-4 pt-8 border-t border-slate-100">
            <h2 className="font-heading text-2xl font-bold text-medical-heading tracking-tight">
              Surgical Results and Recovery
            </h2>
            <p>
              Recovery is different for each person. Healing time depends on many things, such as your condition, the operation, your general health and how you look after yourself.
            </p>
            <p>
              No doctor can guarantee a result. Problems can sometimes happen after surgery. General information about recovery on this website cannot tell you what will happen in your case. Your surgeon can explain what is realistic for you.
            </p>
          </div>

          {/* S08. Laparoscopic (Keyhole) Surgery */}
          <div className="space-y-4 pt-8 border-t border-slate-100">
            <h2 className="font-heading text-2xl font-bold text-medical-heading tracking-tight">
              Laparoscopic (Keyhole) Surgery
            </h2>
            <p>
              Laparoscopic surgery is also called keyhole surgery. The surgeon makes small cuts and uses a thin camera and special tools.
            </p>
            <p>
              It is not right for every patient or every condition. Sometimes a standard (open) operation is safer. The treatments described on this website are not all done by keyhole surgery. Your surgeon will advise you after a check-up.
            </p>
            <div>
              <Link
                to="/laparoscopic-surgery/"
                className="inline-flex items-center text-sm font-semibold text-brand hover:underline"
              >
                <span>Learn About Laparoscopic Surgery</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>

          {/* S10. WhatsApp and Phone Contact */}
          <div className="space-y-4 pt-8 border-t border-slate-100">
            <h2 className="font-heading text-2xl font-bold text-medical-heading tracking-tight">
              WhatsApp and Phone Contact
            </h2>
            <p>
              The WhatsApp and phone options on this website are for appointment questions and general enquiries. We cannot diagnose a problem or give treatment advice by message or call.
            </p>
            <p>
              We cannot promise an immediate reply. A health concern that is private or serious needs a proper consultation. Please keep early messages short and do not send highly sensitive information unless the clinic asks.
            </p>
            <div>
              <Link
                to="/privacy-policy/"
                className="inline-flex items-center text-sm font-semibold text-brand hover:underline"
              >
                <span>Read our Privacy Policy</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>

          {/* S11. Medical Images and Illustrations */}
          <div className="space-y-4 pt-8 border-t border-slate-100">
            <h2 className="font-heading text-2xl font-bold text-medical-heading tracking-tight">
              Medical Images and Illustrations
            </h2>
            <p>
              Some pages may use pictures or drawings to help you understand a condition or treatment. Drawings and diagrams are for learning. They are not photographs of real patients or real operations.
            </p>
            <p>
              An image may not look like your own condition. Please do not use a picture to judge your own health.
            </p>
          </div>

          {/* S12. Patient Results and Before-and-After Photographs */}
          <div className="space-y-4 pt-8 border-t border-slate-100">
            <h2 className="font-heading text-2xl font-bold text-medical-heading tracking-tight">
              Patient Results and Before-and-After Photographs
            </h2>
            <p>
              Real patient photographs or results are shown only when the patient has agreed to this. They show what happened to one person. They do not promise that you or anyone else will have the same result.
            </p>
            <div>
              <Link
                to="/patient-results-before-after-surgery/"
                className="inline-flex items-center text-sm font-semibold text-brand hover:underline"
              >
                <span>View Patient Results</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>

          {/* S13. Videos and Educational Content */}
          <div className="space-y-4 pt-8 border-t border-slate-100">
            <h2 className="font-heading text-2xl font-bold text-medical-heading tracking-tight">
              Videos and Educational Content
            </h2>
            <p>
              Videos and other learning material on this website are for general information. They cannot replace a consultation or advice for your own condition.
            </p>
            <div>
              <Link
                to="/videos/"
                className="inline-flex items-center text-sm font-semibold text-brand hover:underline"
              >
                <span>Watch Videos</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>

          {/* S14. Links to Other Websites */}
          <div className="space-y-4 pt-8 border-t border-slate-100">
            <h2 className="font-heading text-2xl font-bold text-medical-heading tracking-tight">
              Links to Other Websites
            </h2>
            <p>
              This website may link to other websites. Their information may be different from ours, and they have their own policies. Dr. Hira Nawaz does not control them. A link does not mean that we agree with everything on that site.
            </p>
          </div>

          {/* S15. Medicines and Treatment Instructions */}
          <div className="space-y-4 pt-8 border-t border-slate-100">
            <h2 className="font-heading text-2xl font-bold text-medical-heading tracking-tight">
              Medicines and Treatment Instructions
            </h2>
            <p>
              Please do not use information from this website to start, stop or change any medicine. Always ask a doctor or another suitable health professional first.
            </p>
            <p>
              We do not give medicine doses or personal treatment instructions on this website.
            </p>
          </div>

          {/* S16. Contact and Professional Consultation */}
          <div className="space-y-4 pt-8 border-t border-slate-100">
            <h2 className="font-heading text-2xl font-bold text-medical-heading tracking-tight">
              Contact and Professional Consultation
            </h2>
            <p>
              Dr. Hira Nawaz holds an MBBS and an FCPS (General Surgery). She sees patients for consultation at Faisal Hospital, Plot 547, Muhammadia Colony Block A, People's Colony No 1, Faisalabad, Pakistan.
            </p>
            <p>
              To arrange a routine appointment or ask a question about this disclaimer, use WhatsApp, the phone or the Contact page.
            </p>
            
            <div className="p-6 rounded-2xl bg-brand-soft/50 border border-brand/20 space-y-2 text-sm sm:text-base">
              <div><strong>WhatsApp:</strong> <a href={businessInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-brand font-semibold hover:underline">https://wa.me/923211836189</a></div>
              <div><strong>Call:</strong> <a href={businessInfo.phoneTel} className="text-brand font-semibold hover:underline">0321 1836189</a></div>
              <div><strong>Contact page:</strong> <Link to="/contact/" className="text-brand font-semibold hover:underline">https://drhiranawaz.com/contact/</Link></div>
            </div>

            <p className="font-medium text-medical-heading">
              Routine enquiries and emergencies are different. These contact options are for appointment questions. For an emergency, go to the nearest hospital emergency department.
            </p>
          </div>

        </div>
      </section>

      {/* B5. QUICK QUESTIONS & TRUST */}
      <section className="py-16 md:py-24 bg-[#F7F1F6] border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-brand/10 text-brand mb-3">
              Patient Safety FAQ
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              Quick Questions
            </h2>
          </div>

          <div className="space-y-3.5 mb-12">
            {quickQuestions.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'bg-white border-brand/40 shadow-card' 
                      : 'bg-white hover:bg-[#FDFBFD] border-slate-200/90 shadow-subtle'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start justify-between text-left p-5 sm:p-6 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    <div className="flex items-start space-x-3.5 pr-4">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-md mt-0.5 shrink-0 ${
                        isOpen ? 'bg-brand text-white' : 'bg-slate-100 text-slate-500'
                      }`}>
                        Q{idx + 1}
                      </span>
                      <h3 className={`font-heading text-base sm:text-lg font-bold leading-snug transition-colors ${
                        isOpen ? 'text-brand' : 'text-medical-heading group-hover:text-brand'
                      }`}>
                        {faq.question}
                      </h3>
                    </div>
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-brand-soft text-brand rotate-180' : 'bg-slate-100 text-slate-400 group-hover:bg-brand-soft group-hover:text-brand'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <div className={`${isOpen ? 'block' : 'hidden'} px-5 sm:px-6 pb-6 pt-1 text-service-body text-medical-body border-t border-slate-100/80`}>
                    <p className="leading-relaxed font-normal">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Questions About This Page */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 text-center space-y-4">
            <h3 className="font-heading font-bold text-xl text-medical-heading">
              Questions About This Page?
            </h3>
            <p className="text-sm sm:text-base text-medical-secondary leading-relaxed max-w-2xl mx-auto">
              If you have a question about this disclaimer, please contact the clinic. For emergencies, do not use this page. Go to the nearest hospital emergency department.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact/"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-brand text-white text-sm font-bold shadow-xs hover:bg-brand-hover transition-colors"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
              <a
                href={businessInfo.phoneTel}
                className="inline-flex items-center px-6 py-3 rounded-xl bg-white border border-slate-200 text-medical-heading hover:text-brand text-sm font-semibold shadow-xs"
              >
                <Phone className="w-4 h-4 mr-2 text-brand" />
                <span>Call for Appointment</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
