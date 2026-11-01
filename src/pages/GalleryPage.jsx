import { useState } from 'react';
import { 
  Camera, 
  X, 
  ZoomIn, 
  MapPin, 
  ShieldCheck, 
  Calendar, 
  Phone 
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import DualLocationSection from '../components/DualLocationSection';
import AppointmentCTA from '../components/AppointmentCTA';
import MedicalDisclaimerAlert from '../components/MedicalDisclaimerAlert';
import { businessInfo } from '../data/businessInfo';

export default function GalleryPage() {
  const [activeImage, setActiveImage] = useState(null);

  const galleryItems = [
    {
      src: businessInfo.images.inOPD,
      title: "Outpatient Surgical Consultation Room",
      description: "Dr. Hira Nawaz reviewing clinical findings and discussing diagnostic results with patients at Faisal Hospital."
    },
    {
      src: businessInfo.images.inOT,
      title: "Operating Theater Facility",
      description: "Dr. Hira Nawaz during surgical procedure preparation adhering to sterile surgical safety checklists."
    },
    {
      src: businessInfo.images.clinic,
      title: "Faisal Hospital OPD Clinic",
      description: "Consultation facility located at Plot 547, Muhammadia Colony Block A, People's Colony No 1, Faisalabad."
    },
    {
      src: businessInfo.images.heroPortrait,
      title: "Dr. Hira Nawaz Official Portrait",
      description: "MBBS, FCPS (General Surgery) - Head of Surgery Department at Fauji Foundation Hospital Faisalabad."
    },
    {
      src: businessInfo.images.dp,
      title: "Consultant General & Laparoscopic Surgeon",
      description: "Specializing in minimally invasive laparoscopic surgery and general surgical procedures."
    },
    {
      src: businessInfo.images.pic,
      title: "Clinical Practice Identity",
      description: "Serving patients across Faisalabad with dedicated surgical assessments."
    }
  ];

  return (
    <>
      <SEOHead />

      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-soft via-white to-white py-12 md:py-20 border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand text-white mb-4">
            <Camera className="w-3.5 h-3.5 mr-1.5" />
            Authentic Clinical Photography
          </span>

          <h1 className="font-heading text-fluid-h1 font-bold text-medical-heading tracking-tight mb-6">
            Practice & Clinical Photo Gallery
          </h1>

          <p className="text-fluid-body text-medical-body leading-[1.7] max-w-2xl mx-auto">
            Authentic photographs of Dr. Hira Nawaz in outpatient consultations (OPD), operating theater (OT) environments, and clinic premises at Private Clinic and Faisal Hospital, Faisalabad.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveImage(item)}
                className="group relative bg-white rounded-3xl overflow-hidden border border-[#E7E7E7] shadow-subtle hover:shadow-card hover:border-brand/40 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-3 bg-white/90 rounded-full text-brand shadow-md">
                      <ZoomIn className="w-5 h-5" />
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="font-heading font-semibold text-lg text-medical-heading group-hover:text-brand transition-colors mb-2">
                    {item.title}
                  </h2>
                  <p className="text-service-body text-medical-secondary leading-[1.6]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveImage(null)}
        >
          <div 
            className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] bg-slate-900 flex items-center justify-center overflow-hidden">
              <img 
                src={activeImage.src} 
                alt={activeImage.title} 
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 bg-white">
              <h2 className="font-heading font-bold text-lg text-medical-heading mb-1">
                {activeImage.title}
              </h2>
              <p className="text-xs sm:text-sm text-medical-secondary">
                {activeImage.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Practice Locations */}
      <section className="py-16 md:py-24 bg-[#F7F1F6] border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DualLocationSection />
        </div>
      </section>

      <AppointmentCTA />
    </>
  );
}
