import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesOverviewPage from './pages/ServicesOverviewPage';
import GeneralSurgeryPage from './pages/GeneralSurgeryPage';
import LaparoscopicSurgeryPage from './pages/LaparoscopicSurgeryPage';
import HerniaSurgeryPage from './pages/HerniaSurgeryPage';
import GallbladderSurgeryPage from './pages/GallbladderSurgeryPage';
import TreatmentDetailPage from './pages/TreatmentDetailPage';
import ForPatientsPage from './pages/ForPatientsPage';
import PatientResultsPage from './pages/PatientResultsPage';
import GalleryPage from './pages/GalleryPage';
import VideosPage from './pages/VideosPage';
import FaqsPage from './pages/FaqsPage';
import LocationOverviewPage from './pages/LocationOverviewPage';
import FaisalHospitalPage from './pages/FaisalHospitalPage';
import PrivateClinicPage from './pages/PrivateClinicPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import MedicalDisclaimerPage from './pages/MedicalDisclaimerPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-medical-body antialiased">
      <Header />
      <main className="flex-grow">
        <Routes>
          {/* P01: Homepage */}
          <Route path="/" element={<HomePage />} />

          {/* P02: About */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/" element={<AboutPage />} />

          {/* P03: Services Overview */}
          <Route path="/services" element={<ServicesOverviewPage />} />
          <Route path="/services/" element={<ServicesOverviewPage />} />

          {/* P04: General Surgery */}
          <Route path="/general-surgery" element={<GeneralSurgeryPage />} />
          <Route path="/general-surgery/" element={<GeneralSurgeryPage />} />

          {/* P05: Laparoscopic Surgery */}
          <Route path="/laparoscopic-surgery" element={<LaparoscopicSurgeryPage />} />
          <Route path="/laparoscopic-surgery/" element={<LaparoscopicSurgeryPage />} />

          {/* P06: Hernia Surgery */}
          <Route path="/hernia-surgery" element={<HerniaSurgeryPage />} />
          <Route path="/hernia-surgery/" element={<HerniaSurgeryPage />} />

          {/* P07: Gallbladder Surgery */}
          <Route path="/gallbladder-surgery" element={<GallbladderSurgeryPage />} />
          <Route path="/gallbladder-surgery/" element={<GallbladderSurgeryPage />} />

          {/* P08: Appendix Surgery */}
          <Route path="/appendix-surgery" element={<TreatmentDetailPage treatmentId="appendix-surgery" />} />
          <Route path="/appendix-surgery/" element={<TreatmentDetailPage treatmentId="appendix-surgery" />} />

          {/* P09: Thyroid Surgery */}
          <Route path="/thyroid-surgery" element={<TreatmentDetailPage treatmentId="thyroid-surgery" />} />
          <Route path="/thyroid-surgery/" element={<TreatmentDetailPage treatmentId="thyroid-surgery" />} />

          {/* P10: Breast Surgery */}
          <Route path="/breast-surgery" element={<TreatmentDetailPage treatmentId="breast-surgery" />} />
          <Route path="/breast-surgery/" element={<TreatmentDetailPage treatmentId="breast-surgery" />} />

          {/* P11: Hemorrhoids Surgery */}
          <Route path="/hemorrhoids-surgery" element={<TreatmentDetailPage treatmentId="hemorrhoids-surgery" />} />
          <Route path="/hemorrhoids-surgery/" element={<TreatmentDetailPage treatmentId="hemorrhoids-surgery" />} />

          {/* P12: Fistula in Ano Surgery */}
          <Route path="/fistula-in-ano-surgery" element={<TreatmentDetailPage treatmentId="fistula-in-ano-surgery" />} />
          <Route path="/fistula-in-ano-surgery/" element={<TreatmentDetailPage treatmentId="fistula-in-ano-surgery" />} />

          {/* P13: Lipoma Removal */}
          <Route path="/lipoma-removal" element={<TreatmentDetailPage treatmentId="lipoma-removal" />} />
          <Route path="/lipoma-removal/" element={<TreatmentDetailPage treatmentId="lipoma-removal" />} />

          {/* P14: Sebaceous Cyst Removal */}
          <Route path="/sebaceous-cyst-removal" element={<TreatmentDetailPage treatmentId="sebaceous-cyst-removal" />} />
          <Route path="/sebaceous-cyst-removal/" element={<TreatmentDetailPage treatmentId="sebaceous-cyst-removal" />} />

          {/* P15: Diabetic Foot Treatment */}
          <Route path="/diabetic-foot-treatment" element={<TreatmentDetailPage treatmentId="diabetic-foot-treatment" />} />
          <Route path="/diabetic-foot-treatment/" element={<TreatmentDetailPage treatmentId="diabetic-foot-treatment" />} />

          {/* P16: Abscess Drainage */}
          <Route path="/abscess-drainage" element={<TreatmentDetailPage treatmentId="abscess-drainage" />} />
          <Route path="/abscess-drainage/" element={<TreatmentDetailPage treatmentId="abscess-drainage" />} />

          {/* P17: Anal Fissure Treatment */}
          <Route path="/anal-fissure-treatment" element={<TreatmentDetailPage treatmentId="anal-fissure-treatment" />} />
          <Route path="/anal-fissure-treatment/" element={<TreatmentDetailPage treatmentId="anal-fissure-treatment" />} />

          {/* P18: Varicose Veins Treatment */}
          <Route path="/varicose-veins-treatment" element={<TreatmentDetailPage treatmentId="varicose-veins-treatment" />} />
          <Route path="/varicose-veins-treatment/" element={<TreatmentDetailPage treatmentId="varicose-veins-treatment" />} />

          {/* P19: For Patients */}
          <Route path="/for-patients" element={<ForPatientsPage />} />
          <Route path="/for-patients/" element={<ForPatientsPage />} />

          {/* P20: Patient Results */}
          <Route path="/patient-results-before-after-surgery" element={<PatientResultsPage />} />
          <Route path="/patient-results-before-after-surgery/" element={<PatientResultsPage />} />

          {/* P21: Gallery */}
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/gallery/" element={<GalleryPage />} />

          {/* P22: Videos */}
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/videos/" element={<VideosPage />} />

          {/* P23: FAQs */}
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="/faqs/" element={<FaqsPage />} />

          {/* P24: Location Overview */}
          <Route path="/location" element={<LocationOverviewPage />} />
          <Route path="/location/" element={<LocationOverviewPage />} />

          {/* P25: Faisal Hospital */}
          <Route path="/faisal-hospital" element={<FaisalHospitalPage />} />
          <Route path="/faisal-hospital/" element={<FaisalHospitalPage />} />

          {/* P26: Private Clinic (RESERVED) */}
          <Route path="/private-clinic" element={<PrivateClinicPage />} />
          <Route path="/private-clinic/" element={<PrivateClinicPage />} />

          {/* P27: Contact */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact/" element={<ContactPage />} />

          {/* P28: Privacy Policy */}
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/privacy-policy/" element={<PrivacyPolicyPage />} />

          {/* P29: Medical Disclaimer */}
          <Route path="/medical-disclaimer" element={<MedicalDisclaimerPage />} />
          <Route path="/medical-disclaimer/" element={<MedicalDisclaimerPage />} />

          {/* Catch-all: 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWidgets />
    </div>
  );
}
