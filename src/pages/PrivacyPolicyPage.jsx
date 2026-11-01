import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { businessInfo } from '../data/businessInfo';

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEOHead />

      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-soft via-white to-white py-12 md:py-20 border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand text-white mb-4">
            <Lock className="w-3.5 h-3.5 mr-1.5" />
            Data Protection & Confidentiality
          </span>

          <h1 className="font-heading text-fluid-h1 font-bold text-medical-heading tracking-tight mb-6">
            Privacy Policy
          </h1>

          <p className="text-fluid-body text-medical-body leading-[1.7] max-w-2xl mx-auto">
            How Dr. Hira Nawaz's surgical practice website handles patient communications, inquiry records, and digital privacy.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-base text-medical-body leading-[1.7]">
          
          <div>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-medical-heading mb-3">1. Overview & Scope</h2>
            <p>
              This Privacy Policy applies to the website of Dr. Hira Nawaz (<strong>drhiranawaz.com</strong>). We are deeply dedicated to upholding high ethical and data privacy standards regarding any contact information or inquiries submitted through our website.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-medical-heading mb-3">2. Information Collected</h2>
            <p>
              When you use our consultation inquiry feature or contact our clinic directly via telephone or WhatsApp, you may provide basic identification details such as your full name, phone number, and brief description of your inquiry. We collect only what is strictly necessary to arrange your clinical appointment.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-medical-heading mb-3">3. Safeguarding Health & Medical Information</h2>
            <p>
              We urge patients not to transmit sensitive medical images or full laboratory records through public web contact forms. Diagnostic reviews and confidential physical assessments take place strictly during private in-person consultations at Private Clinic and Faisal Hospital. No personally identifiable health data is transmitted to marketing aggregators or third-party advertising platforms.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-medical-heading mb-3">4. Cookies & Website Analytics</h2>
            <p>
              This website may utilize basic anonymous performance cookies and standard web analytics (such as Google Analytics 4) to monitor page load times, traffic patterns, and browser compatibility. These analytics tools capture aggregated, de-identified technical parameters and do not associate health inquiries with your personal identity.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-medical-heading mb-3">5. Third-Party Links & WhatsApp</h2>
            <p>
              Our website provides direct interactive links to third-party services including WhatsApp, Google Maps, and official social media profiles. When you click these external links, you interact directly with those services under their respective independent privacy terms.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-medical-heading mb-3">6. Contact for Privacy Inquiries</h2>
            <p>
              If you have any questions or wish to update any personal contact details provided for appointment scheduling, please contact our clinic reception at:
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-[#E7E7E7] text-sm text-medical-secondary mt-3 leading-relaxed">
              <strong className="text-medical-heading font-semibold">Faisal Hospital Consultation Clinic</strong><br />
              Plot 547, Muhammadia Colony Block A, People's Colony No 1, Faisalabad, Pakistan.<br />
              Telephone: {businessInfo.phoneDisplay} | WhatsApp: 0321 1836189
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
