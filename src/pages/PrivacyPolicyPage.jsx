import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Lock, 
  ExternalLink, 
  Phone, 
  MapPin, 
  FileText, 
  ChevronDown,
  ArrowRight,
  AlertCircle,
  HelpCircle,
  CheckCircle2
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { businessInfo } from '../data/businessInfo';

export default function PrivacyPolicyPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? -1 : idx);
  };

  const privacySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://drhiranawaz.com/privacy-policy/#webpage",
    "url": "https://drhiranawaz.com/privacy-policy/",
    "name": "Privacy Policy | Dr. Hira Nawaz",
    "isPartOf": { "@id": "https://drhiranawaz.com/#website" },
    "inLanguage": "en-PK"
  };

  const privacyFaqs = [
    {
      question: "How can I contact the website about privacy?",
      answer: "Call 0321 1836189 or use the Contact page at https://drhiranawaz.com/contact/. Say that you have a privacy question."
    },
    {
      question: "Does clicking the WhatsApp button open another service?",
      answer: "Yes. It opens WhatsApp, which is run by another company and has its own privacy policy. Please see the section on WhatsApp communications."
    },
    {
      question: "Can I send my medical reports by WhatsApp?",
      answer: "Please do not, unless the clinic has asked you to and has told you it is suitable. Bring your reports to the consultation instead."
    },
    {
      question: "Can I ask about information I have shared?",
      answer: "Yes. You may ask the clinic what information you shared, and you may ask for it to be corrected or deleted. Some information may have to be kept for medical or legal reasons. See the section on your choices and privacy requests."
    },
    {
      question: "Where can I read the Medical Disclaimer?",
      answer: "It is at https://drhiranawaz.com/medical-disclaimer/."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Privacy Policy | Dr. Hira Nawaz"
        description="Read how Dr. Hira Nawaz's website handles personal information, including WhatsApp and phone enquiries, links to other services and how to ask a privacy question."
        canonical="https://drhiranawaz.com/privacy-policy/"
        customSchema={privacySchema}
      />

      {/* B3. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#FBF8FA] via-white to-white pt-10 pb-16 md:pt-20 md:pb-24 border-b border-[#E7E7E7] overflow-hidden bg-grid-subtle">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand text-white shadow-glow-brand">
              <Lock className="w-3.5 h-3.5 mr-1.5" />
              Information Practices
            </span>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-slate-200 text-medical-heading shadow-subtle">
              Transparent & Verified
            </span>
          </div>

          <h1 className="font-heading text-fluid-h1 font-extrabold text-medical-heading tracking-tight leading-[1.1] mb-6">
            Privacy Policy
          </h1>

          <p className="text-base sm:text-lg text-medical-body leading-relaxed max-w-2xl mx-auto font-normal mb-8">
            This page explains how personal information is handled when you use this website or contact the clinic. It uses plain words and describes only what we can say is true. If anything is unclear, please contact us.
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

      {/* B4. COMPLETE PRIVACY POLICY CONTENT */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-base text-medical-body leading-relaxed">
          
          {/* S01. Introduction */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-medical-heading tracking-tight">
              Introduction
            </h2>
            <p>
              This Privacy Policy is for the website <a href="https://drhiranawaz.com/" className="text-brand font-semibold hover:underline">https://drhiranawaz.com/</a>. The website belongs to Dr. Hira Nawaz, a female laparoscopic and general surgeon in Faisalabad, Pakistan.
            </p>
            <p>
              In this policy, "we" and "the clinic" mean the clinic team that runs this website and answers enquiries for Dr. Hira Nawaz.
            </p>
            <p>
              This policy covers the website and the WhatsApp and phone options it offers for contacting the clinic. It does not cover the medical records made when you visit the doctor. Those are part of your medical care and are handled separately.
            </p>
            <p>
              This website does not have a contact form or an appointment form. To get in touch, you use WhatsApp or the phone.
            </p>
          </div>

          {/* S02. Information We May Collect */}
          <div className="space-y-4 pt-8 border-t border-slate-100">
            <h2 className="font-heading text-2xl font-bold text-medical-heading tracking-tight">
              Information We May Collect
            </h2>
            <p>
              The information we receive depends on how you contact us.
            </p>
            <ul className="space-y-2.5 list-disc pl-5">
              <li>
                <strong>If you message us on WhatsApp:</strong> we can see your phone number, your WhatsApp profile name and anything you choose to write or send in the chat.
              </li>
              <li>
                <strong>If you call us:</strong> we can see your phone number, and we hear what you tell us. This may include your name and the reason for your call.
              </li>
              <li>
                <strong>If you only read the website:</strong> your device and browser connect to the website's hosting service, which may record basic technical information so that the website can be delivered. The details are in the section on cookies and technical information below.
              </li>
            </ul>
            <p>
              We do not ask you to give us medical information through this website. Please share only what you are comfortable sharing, and only what is needed to arrange a visit.
            </p>
          </div>

          {/* S03. How Information Is Collected */}
          <div className="space-y-4 pt-8 border-t border-slate-100">
            <h2 className="font-heading text-2xl font-bold text-medical-heading tracking-tight">
              How Information Is Collected
            </h2>
            <p>
              The website gives you these ways to contact the clinic:
            </p>
            <ul className="space-y-2.5 list-disc pl-5">
              <li>
                A WhatsApp link (<a href={businessInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-brand font-semibold hover:underline">https://wa.me/923211836189</a>). When you tap it, WhatsApp opens on your device.
              </li>
              <li>
                A telephone link (<a href={businessInfo.phoneTel} className="text-brand font-semibold hover:underline">tel:+923211836189</a>). When you tap it, your phone starts a call to 0321 1836189.
              </li>
              <li>
                A Google Maps link for directions (<a href="https://maps.app.goo.gl/UfRntfLaEcPaeVAU7" target="_blank" rel="noopener noreferrer" className="text-brand font-semibold hover:underline">https://maps.app.goo.gl/UfRntfLaEcPaeVAU7</a>). When you tap it, Google Maps opens.
              </li>
            </ul>
            <p>
              We receive information when you choose to message or call us. The website does not collect your name, phone number or message by itself when you tap these links. The messaging, calling and map services receive information as part of their own operation (see below).
            </p>
          </div>

          {/* S04. How Personal Information Is Used */}
          <div className="space-y-4 pt-8 border-t border-slate-100">
            <h2 className="font-heading text-2xl font-bold text-medical-heading tracking-tight">
              How Personal Information Is Used
            </h2>
            <p>
              We use the information you give us to answer your questions and to help arrange a consultation. For example, we may use your phone number to reply to your message or to confirm a time.
            </p>
            <p>
              Doctors in Pakistan are bound by professional rules on patient confidentiality. What you tell the doctor about your health during a consultation is treated as confidential medical information. A short message to the clinic is not a consultation, so please keep early messages brief and simple.
            </p>
            <p>
              We do not use this website to make decisions about you by computer, and the website has no sign-up for newsletters.
            </p>
          </div>

          {/* S05. WhatsApp Communications */}
          <div className="space-y-4 pt-8 border-t border-slate-100">
            <h2 className="font-heading text-2xl font-bold text-medical-heading tracking-tight">
              WhatsApp Communications
            </h2>
            <p>
              When you tap the WhatsApp button, you leave this website and open WhatsApp, a third-party messaging service. WhatsApp has its own terms and privacy policy. We do not control how WhatsApp collects or uses information. You can read its policy here:{' '}
              <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-brand font-semibold hover:underline inline-flex items-center">
                <span>https://www.whatsapp.com/legal/privacy-policy</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>.
            </p>
            <p>
              WhatsApp states that personal messages are end-to-end encrypted. This helps protect a message while it travels. It does not control what happens after a message reaches a phone. For example, a message can be seen by anyone who uses that phone, and a chat can be copied or screenshotted.
            </p>
            <p>
              WhatsApp may not suit every kind of sensitive medical information. Please do not send medical reports, scans, photographs of your body or other highly sensitive information by WhatsApp unless the clinic has asked you to and has told you that it is suitable. You can bring your reports to the consultation instead.
            </p>
            <p className="font-medium text-medical-heading">
              A WhatsApp message does not replace a medical examination. If you have urgent symptoms, please go to the nearest hospital emergency department.
            </p>
          </div>

          {/* S06. Phone Communications */}
          <div className="space-y-4 pt-8 border-t border-slate-100">
            <h2 className="font-heading text-2xl font-bold text-medical-heading tracking-tight">
              Phone Communications
            </h2>
            <p>
              When you call 0321 1836189, the person who answers can see your phone number and will hear what you say. They may note down your name, number and reason for calling so that they can help arrange your visit.
            </p>
            <p>
              Please do not share more health details by phone than you need to arrange a consultation. You can discuss the details with the doctor at your visit.
            </p>
          </div>

          {/* S07. Cookies and Technical Information */}
          <div className="space-y-4 pt-8 border-t border-slate-100">
            <h2 className="font-heading text-2xl font-bold text-medical-heading tracking-tight">
              Cookies and Technical Information
            </h2>
            <p>
              Cookies are small files that a website can save in your browser. Websites and the services that run them can also record basic technical information, such as the type of browser or device used to visit.
            </p>
            <p>
              You are in control of cookies in your own browser. Most browsers let you see, block or delete cookies in their settings. If you block cookies, some websites may not work as well.
            </p>
            <p>
              The way you manage cookies depends on your browser. You can search the help pages of your browser for "manage cookies".
            </p>
          </div>

          {/* S08. Third-Party Services and External Links */}
          <div className="space-y-4 pt-8 border-t border-slate-100">
            <h2 className="font-heading text-2xl font-bold text-medical-heading tracking-tight">
              Third-Party Services and External Links
            </h2>
            <p>
              Some links on this website take you to services run by other companies. These are:
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li>
                <strong>WhatsApp</strong>, for messaging the clinic. Privacy policy:{' '}
                <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-brand font-semibold hover:underline">
                  https://www.whatsapp.com/legal/privacy-policy
                </a>
              </li>
              <li>
                <strong>Google Maps</strong>, for directions to the consultation hospital. Privacy policy:{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand font-semibold hover:underline">
                  https://policies.google.com/privacy
                </a>
              </li>
            </ul>
            <p>
              A link is not the same as an embedded service. When you tap one of these links, you leave this website and the other service's own privacy policy applies. We do not control what these services collect or how they use it.
            </p>
            <p>
              The website is also delivered to you through a website hosting service, which is needed for any website to work.
            </p>
          </div>

          {/* S09. Sharing Personal Information */}
          <div className="space-y-4 pt-8 border-t border-slate-100">
            <h2 className="font-heading text-2xl font-bold text-medical-heading tracking-tight">
              Sharing Personal Information
            </h2>
            <p>
              We use your information to reply to you and to help arrange a consultation. We share it with another person or organisation only where this is needed for that purpose, or where the law requires it.
            </p>
            <p>
              Services you choose to use, such as WhatsApp, a phone network and Google Maps, receive information from you directly under their own policies. See the sections above.
            </p>
          </div>

          {/* S10. Information Security */}
          <div className="space-y-4 pt-8 border-t border-slate-100">
            <h2 className="font-heading text-2xl font-bold text-medical-heading tracking-tight">
              Information Security
            </h2>
            <p>
              We take care to protect the information that people share with the clinic. No internet-based service, messaging app or telephone network can promise complete security, and we cannot promise it either.
            </p>
            <p>
              You can help protect your own information. Keep your phone locked. Do not share highly sensitive details by message. Be careful with chats on a shared phone.
            </p>
          </div>

          {/* S11. How Long Information Is Kept */}
          <div className="space-y-4 pt-8 border-t border-slate-100">
            <h2 className="font-heading text-2xl font-bold text-medical-heading tracking-tight">
              How Long Information Is Kept
            </h2>
            <p>
              This page does not promise a fixed period after which messages or call details are deleted. We keep enquiry information only for as long as it is useful to answer you and arrange your care, or as long as the law or medical duties require.
            </p>
            <p>
              Medical records made during a consultation are part of your care. They are not website information and are handled separately from the enquiries described in this policy.
            </p>
          </div>

          {/* S12. Your Choices and Privacy Requests */}
          <div className="space-y-4 pt-8 border-t border-slate-100">
            <h2 className="font-heading text-2xl font-bold text-medical-heading tracking-tight">
              Your Choices and Privacy Requests
            </h2>
            <p>
              You choose what you share with us. You can choose to call instead of using WhatsApp. You can keep your first message short. You can bring your reports to the consultation instead of sending them.
            </p>
            <p>
              You may contact us to ask what information you have shared with the clinic, to ask for it to be corrected, or to ask for it to be deleted. We will look at each request carefully. We may not be able to delete everything, because some information may have to be kept for medical or legal reasons. We do not promise a fixed time for a reply.
            </p>
            <p>
              To make a request or ask a privacy question, call 0321 1836189 or use our Contact page:{' '}
              <Link to="/contact/" className="text-brand font-semibold hover:underline">
                https://drhiranawaz.com/contact/
              </Link>.
            </p>
          </div>

          {/* S13. Children's Information */}
          <div className="space-y-4 pt-8 border-t border-slate-100">
            <h2 className="font-heading text-2xl font-bold text-medical-heading tracking-tight">
              Children's Information
            </h2>
            <p>
              This website is meant for adults, and for parents or guardians who arrange care for a child. We do not ask children to give us information through this website. If you contact the clinic about a child, please do so as the child's parent or guardian.
            </p>
          </div>

          {/* S14. Links to Other Websites */}
          <div className="space-y-4 pt-8 border-t border-slate-100">
            <h2 className="font-heading text-2xl font-bold text-medical-heading tracking-tight">
              Links to Other Websites
            </h2>
            <p>
              Other websites and services that this site links to, including WhatsApp and Google Maps, have their own privacy policies. Dr. Hira Nawaz does not control them. Please read their policies before you use them.
            </p>
          </div>

          {/* S15. Changes to This Privacy Policy */}
          <div className="space-y-4 pt-8 border-t border-slate-100">
            <h2 className="font-heading text-2xl font-bold text-medical-heading tracking-tight">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update this policy if our practices or the services we use change. The current version is always the one on this page, and the date at the top of the page shows when it was last updated. We do not promise to tell you about changes by email or message, so please check this page from time to time.
            </p>
          </div>

          {/* S16. Contact About Privacy */}
          <div className="space-y-4 pt-8 border-t border-slate-100">
            <h2 className="font-heading text-2xl font-bold text-medical-heading tracking-tight">
              Contact About Privacy
            </h2>
            <p>
              If you have a question about this Privacy Policy or about information you have shared with the clinic, please contact:
            </p>
            <div className="p-6 rounded-2xl bg-brand-soft/50 border border-brand/20 space-y-2 text-sm sm:text-base">
              <strong className="text-medical-heading block font-bold">Dr. Hira Nawaz</strong>
              <div><strong>Phone:</strong> <a href={businessInfo.phoneTel} className="text-brand font-semibold hover:underline">0321 1836189</a></div>
              <div><strong>Contact page:</strong> <Link to="/contact/" className="text-brand font-semibold hover:underline">https://drhiranawaz.com/contact/</Link></div>
              <div><strong>Consultation address:</strong> Faisal Hospital, Plot 547, Muhammadia Colony Block A, People's Colony No 1, Faisalabad, Pakistan</div>
            </div>
            <p>
              Please also read our{' '}
              <Link to="/medical-disclaimer/" className="text-brand font-semibold hover:underline">
                Medical Disclaimer
              </Link>.
            </p>
          </div>

        </div>
      </section>

      {/* B5. PRIVACY QUESTIONS & TRUST */}
      <section className="py-16 md:py-24 bg-[#F7F1F6] border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-brand/10 text-brand mb-3">
              FAQ
            </span>
            <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
              Privacy Questions
            </h2>
          </div>

          <div className="space-y-3.5 mb-12">
            {privacyFaqs.map((faq, idx) => {
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

          {/* Trust and Transparency Note */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 text-center space-y-4">
            <h3 className="font-heading font-bold text-lg text-medical-heading">
              Trust and Transparency
            </h3>
            <p className="text-sm sm:text-base text-medical-secondary leading-relaxed max-w-2xl mx-auto">
              We have tried to describe only what is true. If you think something on this page is wrong or unclear, please tell us, and we will review it.
            </p>
            <p className="text-xs text-medical-secondary">
              This policy does not claim that the website meets any named privacy law, and it does not promise any certification or absolute security.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact/"
                className="inline-flex items-center px-5 py-2.5 rounded-xl bg-brand text-white text-xs sm:text-sm font-bold shadow-xs hover:bg-brand-hover transition-colors"
              >
                <span>Contact Us</span>
              </Link>
              <a
                href={businessInfo.phoneTel}
                className="inline-flex items-center px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-medical-heading hover:text-brand text-xs sm:text-sm font-semibold shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5 text-brand" />
                <span>Call 0321 1836189</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
