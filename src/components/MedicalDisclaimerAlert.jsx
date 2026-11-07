import { AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MedicalDisclaimerAlert() {
  return (
    <div className="bg-gradient-to-r from-[#F7F1F6] via-[#F7F1F6]/90 to-white border-l-4 border-brand p-5 sm:p-6 rounded-r-2xl my-8 text-sm sm:text-base text-medical-secondary leading-relaxed shadow-subtle border border-l-0 border-brand/10">
      <div className="flex items-start space-x-3.5">
        <AlertCircle className="w-5 h-5 text-brand shrink-0 mt-0.5" />
        <div>
          <strong className="text-medical-heading block font-semibold mb-1">Important Medical Information Note</strong>
          <span>
            The clinical information provided on this website is intended exclusively for patient education and general guidance. It does not constitute medical advice or establish a formal doctor-patient relationship. Surgical indications, recovery timelines, and procedural options vary based on each individual patient's anatomical findings and clinical assessment. 
          </span>
          <Link to="/medical-disclaimer/" className="text-brand font-semibold underline ml-1 hover:text-brand-hover">
            Read complete medical disclaimer &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
