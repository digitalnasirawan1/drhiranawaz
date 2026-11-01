import { MapPin, Clock, Phone, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export default function FaisalHospitalCard() {
  return (
    <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E7E7E7] shadow-card hover:border-brand/40 transition-all">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-soft text-brand mb-4">
            <MapPin className="w-3.5 h-3.5 mr-1.5" />
            Verified Consultation Location
          </div>

          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-medical-heading mb-4">
            Faisal Hospital, Faisalabad
          </h3>

          <div className="space-y-4 text-base text-medical-body mb-6 leading-relaxed">
            <div className="flex items-start space-x-3.5">
              <MapPin className="w-5 h-5 text-brand shrink-0 mt-1" />
              <span>
                <strong className="text-medical-heading font-semibold">Address:</strong> {businessInfo.address.full}
              </span>
            </div>

            <div className="flex items-start space-x-3.5">
              <Clock className="w-5 h-5 text-brand shrink-0 mt-1" />
              <div>
                <strong className="text-medical-heading font-semibold">Outpatient Consultation Timings:</strong>
                <p className="text-medical-secondary text-sm mt-0.5">
                  Monday to Saturday: 4:00 PM – 9:00 PM<br />
                  <span className="text-rose-600 font-semibold">Sunday: Closed</span>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5">
              <ShieldCheck className="w-5 h-5 text-brand shrink-0 mt-1" />
              <p className="text-sm text-medical-secondary leading-relaxed">
                <strong className="text-medical-heading font-semibold">Professional Role:</strong> Dr. Hira Nawaz serves as Head of Surgery Department at Fauji Foundation Hospital Faisalabad and conducts specialist surgical consultations in the evening at Faisal Hospital.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a 
              href={businessInfo.googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-brand text-white font-semibold text-sm sm:text-base hover:bg-brand-hover transition-colors shadow-sm"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Get Google Maps Directions
            </a>
            <a 
              href={businessInfo.phoneTel} 
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white border border-[#E7E7E7] text-medical-heading font-semibold text-sm sm:text-base hover:bg-brand-soft transition-colors"
            >
              <Phone className="w-4 h-4 mr-2 text-brand" />
              Call {businessInfo.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Visual Map / Hospital Card Graphic */}
        <div className="relative rounded-2xl overflow-hidden border border-[#E7E7E7] bg-slate-50 p-6 flex flex-col justify-between min-h-[300px]">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200">
            <div>
              <div className="text-xs uppercase font-semibold tracking-wider text-medical-secondary">Hospital OPD Registry</div>
              <div className="text-lg font-bold font-heading text-medical-heading">Consultation Hours</div>
            </div>
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></span>
          </div>

          <div className="space-y-2 py-4">
            {businessInfo.hours.map((h, i) => (
              <div key={i} className="flex justify-between text-sm py-1.5 border-b border-slate-100">
                <span className="font-semibold text-medical-heading">{h.day}</span>
                <span className={h.isOpen ? "text-emerald-700 font-medium" : "text-rose-600 font-medium"}>
                  {h.time}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-2 flex items-center justify-between text-xs text-medical-secondary bg-white p-3 rounded-xl border border-slate-200">
            <span>Scan or click for direct navigation</span>
            <a 
              href={businessInfo.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand font-bold hover:underline"
            >
              Book Appointment &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
