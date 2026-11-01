import { Link } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  ExternalLink, 
  ShieldCheck, 
  ChevronRight
} from 'lucide-react';
import SurgeonIcon from './SurgeonIcon';
import { businessInfo } from '../data/businessInfo';
import { servicesData } from '../data/servicesData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#171717] text-white border-t border-[#333333]">
      {/* Main Multi-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Doctor Profile */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-brand via-[#593255] to-brand-hover text-white flex items-center justify-center shadow-glow-brand">
                <SurgeonIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-heading font-bold text-xl text-white">Dr. Hira Nawaz</div>
                <div className="text-sm text-slate-400">MBBS, FCPS (General Surgery)</div>
              </div>
            </div>
            
            <p className="text-[15px] text-slate-300 leading-[1.65]">
              Female Laparoscopic & General Surgeon dedicated to evidence-based surgical care in Faisalabad. Serving as Head of Surgery Department at Fauji Foundation Hospital and conducting outpatient consultations at Private Clinic and Faisal Hospital.
            </p>

            <div className="pt-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Connect Socially</div>
              <div className="flex items-center space-x-3">
                <a 
                  href={businessInfo.socials.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-brand flex items-center justify-center text-white transition-colors"
                  aria-label="Facebook Profile"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href={businessInfo.socials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-brand flex items-center justify-center text-white transition-colors"
                  aria-label="Instagram Profile"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href={businessInfo.socials.tiktok} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-brand flex items-center justify-center text-white transition-colors"
                  aria-label="TikTok Profile"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
                <a 
                  href={businessInfo.socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-brand flex items-center justify-center text-white transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-sm sm:text-base uppercase tracking-wider text-white mb-4 border-b border-white/10 pb-2">
              Important Links
            </h3>
            <ul className="space-y-2.5 text-[15px] leading-[1.65]">
              <li>
                <Link to="/" className="text-slate-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 text-brand mr-1.5 shrink-0" />
                  Homepage
                </Link>
              </li>
              <li>
                <Link to="/about/" className="text-slate-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 text-brand mr-1.5 shrink-0" />
                  About Dr. Hira Nawaz
                </Link>
              </li>
              <li>
                <Link to="/services/" className="text-slate-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 text-brand mr-1.5 shrink-0" />
                  Surgical Services Directory
                </Link>
              </li>
              <li>
                <Link to="/general-surgery/" className="text-slate-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 text-brand mr-1.5 shrink-0" />
                  General Surgery Overview
                </Link>
              </li>
              <li>
                <Link to="/laparoscopic-surgery/" className="text-slate-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 text-brand mr-1.5 shrink-0" />
                  Laparoscopic Surgery Hub
                </Link>
              </li>
              <li>
                <Link to="/for-patients/" className="text-slate-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 text-brand mr-1.5 shrink-0" />
                  Patient Resources & Guidance
                </Link>
              </li>
              <li>
                <Link to="/gallery/" className="text-slate-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 text-brand mr-1.5 shrink-0" />
                  Clinical Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/videos/" className="text-slate-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 text-brand mr-1.5 shrink-0" />
                  Educational Videos
                </Link>
              </li>
              <li>
                <Link to="/faqs/" className="text-slate-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 text-brand mr-1.5 shrink-0" />
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/contact/" className="text-slate-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 text-brand mr-1.5 shrink-0" />
                  Contact & Bookings
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Surgical Services */}
          <div>
            <h3 className="font-heading font-semibold text-sm sm:text-base uppercase tracking-wider text-white mb-4 border-b border-white/10 pb-2">
              Surgical Treatments
            </h3>
            <ul className="space-y-2.5 text-[15px] leading-[1.65]">
              {servicesData.slice(0, 8).map(s => (
                <li key={s.id}>
                  <Link to={s.slug} className="text-slate-300 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="w-4 h-4 text-brand mr-1.5 shrink-0" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location & Clinic Details */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-sm sm:text-base uppercase tracking-wider text-white mb-4 border-b border-white/10 pb-2">
              Clinic Address
            </h3>

            {/* Location 1: Private Clinic (Promoted) */}
            <div className="flex items-start text-[15px] text-slate-300 space-x-2.5 leading-[1.65]">
              <MapPin className="w-4 h-4 text-brand shrink-0 mt-1" />
              <div>
                <strong className="text-white block font-semibold">Private Clinic</strong>
                Behind Faisal Hospital (New Building),<br />
                547/A Lower Canal Rd E, Faisalabad.
              </div>
            </div>
            
            {/* Location 2: Faisal Hospital */}
            <div className="flex items-start text-[15px] text-slate-300 space-x-2.5 leading-[1.65]">
              <MapPin className="w-4 h-4 text-brand shrink-0 mt-1" />
              <div>
                <strong className="text-white block font-semibold">Faisal Hospital</strong>
                Plot 547, Muhammadia Colony Block A,<br />
                People's Colony No 1, Faisalabad.
              </div>
            </div>

            <div className="flex items-start text-[15px] text-slate-300 space-x-2.5 leading-[1.65]">
              <Clock className="w-4 h-4 text-brand shrink-0 mt-1" />
              <div>
                <strong className="text-white block font-semibold">Both Locations Timings</strong>
                Mon – Sat: 4:00 PM – 9:00 PM<br />
                Sunday: Closed
              </div>
            </div>

            <div className="flex items-center text-[15px] text-slate-300 space-x-2.5 pt-1">
              <Phone className="w-4 h-4 text-brand shrink-0" />
              <a href={businessInfo.phoneTel} className="text-white hover:text-brand transition-colors font-semibold">
                {businessInfo.phoneDisplay}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal Notice & Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-slate-400 gap-4 text-center md:text-left">
          <div className="text-center md:text-left">
            &copy; {currentYear} <a href="https://drhiranawaz.com/" className="text-white hover:text-brand transition-colors font-medium">Dr. Hira Nawaz</a>. All Rights Reserved.
          </div>
          <div className="text-center md:text-right">
            Designed, Developed and Managed by{" "}
            <a 
              href="https://digitalnasirawan.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-300 hover:text-white transition-colors underline-offset-2 hover:underline font-medium"
            >
              Digital Nasir Awan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
