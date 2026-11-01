import { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  ShieldCheck, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import SEOHead from '../components/SEOHead';
import DualLocationSection from '../components/DualLocationSection';
import AppointmentCTA from '../components/AppointmentCTA';
import MedicalDisclaimerAlert from '../components/MedicalDisclaimerAlert';
import { businessInfo } from '../data/businessInfo';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    inquiryType: 'General Surgery Consultation',
    preferredLocation: 'Private Clinic',
    preferredDay: 'Monday',
    message: '',
    privacyConsent: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phoneNumber) {
      alert("Please provide your full name and phone number.");
      return;
    }
    if (!formData.privacyConsent) {
      alert("Please accept the privacy consent to proceed.");
      return;
    }

    // Direct WhatsApp message formatting with user's inputted details
    const text = `*New Surgical Consultation Inquiry*%0A%0A*Name:* ${encodeURIComponent(formData.fullName)}%0A*Phone:* ${encodeURIComponent(formData.phoneNumber)}%0A*Service:* ${encodeURIComponent(formData.inquiryType)}%0A*Preferred Location:* ${encodeURIComponent(formData.preferredLocation)}%0A*Preferred Day:* ${encodeURIComponent(formData.preferredDay)}%0A*Message:* ${encodeURIComponent(formData.message || 'Consultation request')}`;
    
    window.open(`https://wa.me/923211836189?text=${text}`, '_blank');
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Dr. Hira Nawaz",
    "url": "https://drhiranawaz.com/contact/",
    "mainEntity": {
      "@type": "Physician",
      "name": businessInfo.doctorName,
      "telephone": "+923211836189",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": businessInfo.address.plot,
        "addressLocality": businessInfo.address.city,
        "addressCountry": "PK"
      }
    }
  };

  return (
    <>
      <SEOHead 
        customTitle="Contact Dr. Hira Nawaz | Book Appointment Faisalabad"
        customDescription="Contact Dr. Hira Nawaz to schedule a surgical consultation at Faisal Hospital, Faisalabad. Call 0321 1836189 or message directly on official WhatsApp."
        customSchema={contactSchema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-soft via-white to-white py-12 md:py-20 border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand text-white mb-4">
            <Phone className="w-3.5 h-3.5 mr-1.5" />
            Appointments & Inquiries
          </span>

          <h1 className="font-heading text-fluid-h1 font-bold text-medical-heading tracking-tight mb-6">
            Contact Dr. Hira Nawaz in Faisalabad
          </h1>

          <p className="text-fluid-body text-medical-body leading-[1.7] max-w-2xl mx-auto">
            Reach out directly by phone or WhatsApp to schedule a surgical consultation at our Private Clinic or Faisal Hospital in Faisalabad.
          </p>
        </div>
      </section>

      {/* Main Contact Section: Form & NAP Info */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Form */}
            <div className="lg:col-span-7 bg-[#F7F1F6] p-6 sm:p-10 rounded-3xl border border-[#E7E7E7]">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-medical-heading mb-2">
                Send a Consultation Request
              </h2>
              <p className="text-sm sm:text-base text-medical-secondary mb-8">
                Submit your inquiry below to connect instantly with our appointment desk via verified WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-medical-heading mb-1.5">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Fatima Ali"
                    className="w-full px-4 py-3 rounded-xl border border-[#E7E7E7] bg-white text-base focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-medical-heading mb-1.5">
                    Phone / WhatsApp Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    placeholder="0300 1234567"
                    className="w-full px-4 py-3 rounded-xl border border-[#E7E7E7] bg-white text-base focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-medical-heading mb-1.5">
                      Service
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E7E7E7] bg-white text-base focus:outline-none focus:ring-2 focus:ring-brand"
                    >
                      <option value="General Surgery Consultation">General Surgery</option>
                      <option value="Laparoscopic Surgery Consultation">Laparoscopic Surgery</option>
                      <option value="Hernia Surgery">Hernia Surgery</option>
                      <option value="Gallbladder Surgery">Gallbladder Surgery</option>
                      <option value="Appendix Surgery">Appendix Surgery</option>
                      <option value="Breast Health Consultation">Breast Health</option>
                      <option value="Piles & Anorectal Care">Piles & Anorectal Care</option>
                      <option value="Other Surgical Inquiry">Other Surgical</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-medical-heading mb-1.5">
                      Preferred Clinic
                    </label>
                    <select
                      value={formData.preferredLocation}
                      onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E7E7E7] bg-white text-base focus:outline-none focus:ring-2 focus:ring-brand"
                    >
                      <option value="Private Clinic">Private Clinic</option>
                      <option value="Faisal Hospital">Faisal Hospital</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-medical-heading mb-1.5">
                      Preferred Day
                    </label>
                    <select
                      value={formData.preferredDay}
                      onChange={(e) => setFormData({ ...formData, preferredDay: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E7E7E7] bg-white text-base focus:outline-none focus:ring-2 focus:ring-brand"
                    >
                      <option value="Monday">Monday (4–9 PM)</option>
                      <option value="Tuesday">Tuesday (4–9 PM)</option>
                      <option value="Wednesday">Wednesday (4–9 PM)</option>
                      <option value="Thursday">Thursday (4–9 PM)</option>
                      <option value="Friday">Friday (4–9 PM)</option>
                      <option value="Saturday">Saturday (4–9 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-medical-heading mb-1.5">
                    Brief Notes or Symptoms (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your symptoms or previous scans..."
                    className="w-full px-4 py-3 rounded-xl border border-[#E7E7E7] bg-white text-base focus:outline-none focus:ring-2 focus:ring-brand"
                  ></textarea>
                </div>

                <div className="flex items-start space-x-3 pt-2">
                  <input
                    type="checkbox"
                    id="privacyConsent"
                    required
                    checked={formData.privacyConsent}
                    onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded border-slate-300 text-brand focus:ring-brand"
                  />
                  <label htmlFor="privacyConsent" className="text-sm text-medical-secondary leading-snug">
                    I agree that my submitted contact details will be used solely for scheduling this medical appointment in accordance with the website Privacy Policy.
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="button-sheen w-full py-4 rounded-xl bg-gradient-to-r from-[#653C61] to-[#4D2B49] hover:from-[#4D2B49] hover:to-[#3A1E37] text-white font-semibold text-base transition-all shadow-glow-brand hover:shadow-elevated flex items-center justify-center space-x-2"
                  >
                    <WhatsAppIcon className="w-5 h-5 fill-current" />
                    <span>Book Appointment</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Right: Direct Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E7E7] shadow-card space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand">Direct Contact</span>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-medical-heading mt-1">
                    Dr. Hira Nawaz Clinic Desk
                  </h3>
                </div>

                <div className="space-y-4 text-base text-medical-body leading-relaxed">
                  <div className="flex items-start space-x-3.5">
                    <Phone className="w-5 h-5 text-brand shrink-0 mt-1" />
                    <div>
                      <strong className="block text-medical-heading font-semibold">Telephone:</strong>
                      <a href={businessInfo.phoneTel} className="text-brand hover:underline font-bold text-base">
                        {businessInfo.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <WhatsAppIcon className="w-5 h-5 text-emerald-600 shrink-0 mt-1 fill-current" />
                    <div>
                      <strong className="block text-medical-heading font-semibold">Official WhatsApp:</strong>
                      <a 
                        href={businessInfo.whatsappUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-emerald-700 hover:underline font-bold text-base"
                      >
                        {businessInfo.phoneDisplay} (Click to Chat)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <MapPin className="w-5 h-5 text-brand shrink-0 mt-1" />
                    <div>
                      <strong className="block text-medical-heading font-semibold">Hospital Location:</strong>
                      <span>{businessInfo.address.full}</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <Clock className="w-5 h-5 text-brand shrink-0 mt-1" />
                    <div>
                      <strong className="block text-medical-heading font-semibold">Consultation Timings:</strong>
                      <span>Monday to Saturday: 4:00 PM – 9:00 PM</span><br />
                      <span className="text-rose-600 font-semibold">Sunday: Closed</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <a 
                    href={businessInfo.googleMapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center py-3.5 rounded-xl border border-[#E7E7E7] hover:border-brand text-sm font-semibold text-medical-heading hover:text-brand bg-slate-50 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Directions on Google Maps
                  </a>
                </div>
              </div>

              {/* QR Code Card */}
              <div className="bg-slate-50 rounded-3xl p-6 border border-[#E7E7E7] flex items-center space-x-4">
                <div className="w-20 h-20 bg-white p-2 rounded-2xl border border-slate-200 shrink-0">
                  <img src={businessInfo.images.qrCode} alt="Clinic Address QR Code" className="w-full h-full object-contain" />
                </div>
                <div className="text-sm text-medical-secondary leading-relaxed">
                  <strong className="block text-medical-heading font-semibold mb-1">Scan for Hospital Location</strong>
                  Point your mobile camera at this QR code to load turn-by-turn driving directions to Faisal Hospital.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Dual Hospital & Clinic Location Cards */}
      <section className="py-16 md:py-24 bg-[#F7F1F6] border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DualLocationSection />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <MedicalDisclaimerAlert />
      </div>
    </>
  );
}
