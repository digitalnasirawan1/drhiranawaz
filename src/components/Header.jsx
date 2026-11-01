import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Menu, 
  X, 
  ChevronDown, 
  Activity, 
  Clock, 
  MapPin, 
  Sparkles,
  Calendar
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import SurgeonIcon from './SurgeonIcon';
import { businessInfo } from '../data/businessInfo';
import { servicesData } from '../data/servicesData';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [patientsDropdownOpen, setPatientsDropdownOpen] = useState(false);
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const servicesRef = useRef(null);
  const patientsRef = useRef(null);
  const locationRef = useRef(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setPatientsDropdownOpen(false);
    setLocationDropdownOpen(false);
  }, [location.pathname]);

  // Track scroll position for header shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle outside click for dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
      if (patientsRef.current && !patientsRef.current.contains(event.target)) {
        setPatientsDropdownOpen(false);
      }
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setLocationDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Notification Bar - Clinic Hours & Address (Desktop & Mobile) + Desktop Book Appointment */}
      <div className="bg-gradient-to-r from-[#4D2B49] via-[#653C61] to-[#4D2B49] text-white text-xs md:text-sm py-2 px-3 sm:px-4 border-b border-[#3A1E37]/60 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-1.5 gap-x-3">
          
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="flex items-center text-rose-100 font-medium whitespace-nowrap bg-black/15 px-2.5 py-0.5 rounded-full border border-white/10">
              <Clock className="w-3.5 h-3.5 mr-1.5 text-purple-200 shrink-0" />
              <span>Clinic Hours: Mon – Sat: 4:00 PM – 7:00 PM</span>
            </span>

            {/* Clinic Address (Both Desktop & Mobile, linked to GMB) */}
            <span className="text-purple-300/60 hidden sm:inline-block">|</span>
            <a 
              href="https://maps.app.goo.gl/xN24RtbBNCQiNQjg7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-purple-100 hover:text-white font-medium transition-colors group"
              title="View on Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 mr-1 text-purple-300 group-hover:text-emerald-400 shrink-0 transition-colors" />
              {/* Short address on mobile to cover in one line */}
              <span className="underline-offset-2 group-hover:underline sm:hidden whitespace-nowrap">
                Behind Faisal Hospital (New Building), Faisalabad
              </span>
              {/* Full address on desktop */}
              <span className="underline-offset-2 group-hover:underline hidden sm:inline">
                Behind Faisal Hospital (New Building) People's Colony No 1, Faisalabad
              </span>
            </a>
          </div>

          {/* Top bar menu: only mention one number with text Book Appointment, desktop only */}
          <div className="hidden lg:flex items-center text-xs font-medium">
            <a 
              href={businessInfo.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-purple-200 transition-colors flex items-center font-medium bg-black/20 hover:bg-black/30 px-3 py-1 rounded-full border border-white/15"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 mr-1.5 fill-current text-white" />
              <span>Book Appointment: {businessInfo.phoneDisplay}</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <div className={`w-full bg-white/95 backdrop-blur-md transition-all duration-300 ${scrolled ? 'shadow-card py-2.5 border-b border-[#E7E7E7]' : 'py-3.5 border-b border-[#E7E7E7]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Identity / Logo */}
          <Link to="/" className="flex items-center space-x-3.5 group">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-brand via-[#593255] to-brand-hover text-white flex items-center justify-center shadow-glow-brand group-hover:scale-105 transition-all duration-300">
              <SurgeonIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-heading font-extrabold text-xl md:text-2xl text-medical-heading tracking-tight leading-none group-hover:text-brand transition-colors">
                Dr. Hira Nawaz
              </div>
              <div className="text-[11px] sm:text-xs text-medical-secondary font-medium tracking-wide mt-0.5">
                Female Laparoscopic & General Surgeon
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links (0.9375rem / 15px, font-weight 500, line-height 1.5) */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link 
              to="/" 
              className={`px-3.5 py-2 rounded-lg text-[15px] font-medium leading-relaxed transition-colors ${
                location.pathname === '/' 
                  ? 'text-brand font-semibold bg-brand-soft' 
                  : 'text-medical-heading hover:text-brand hover:bg-brand-soft/60'
              }`}
            >
              Home
            </Link>

            <Link 
              to="/about/" 
              className={`px-3.5 py-2 rounded-lg text-[15px] font-medium leading-relaxed transition-colors ${
                location.pathname === '/about/' 
                  ? 'text-brand font-semibold bg-brand-soft' 
                  : 'text-medical-heading hover:text-brand hover:bg-brand-soft/60'
              }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div 
              ref={servicesRef} 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button 
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`flex items-center px-3.5 py-2 rounded-lg text-[15px] font-medium leading-relaxed transition-colors ${
                  location.pathname.includes('/services') || location.pathname.includes('-surgery') || location.pathname.includes('-treatment') || location.pathname.includes('-removal') || location.pathname.includes('-drainage')
                    ? 'text-brand font-semibold bg-brand-soft' 
                    : 'text-medical-heading hover:text-brand hover:bg-brand-soft/60'
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${servicesDropdownOpen ? 'rotate-180 text-brand' : ''}`} />
              </button>

              {/* Mega Dropdown Panel */}
              {servicesDropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[720px] bg-white rounded-2xl shadow-elevated border border-[#E7E7E7] p-6 grid grid-cols-2 gap-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-medical-secondary mb-3 pb-2 border-b border-[#E7E7E7] flex items-center justify-between">
                      <span>Surgical Specialties</span>
                      <Link to="/services/" className="text-brand hover:underline font-semibold lowercase text-xs">view directory &rarr;</Link>
                    </div>
                    <div className="space-y-2 mb-4">
                      <Link 
                        to="/general-surgery/"
                        className="flex items-start p-2.5 rounded-xl hover:bg-brand-soft transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-brand-soft text-brand flex items-center justify-center mr-3 mt-0.5 group-hover:bg-brand group-hover:text-white transition-colors">
                          <Activity className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-medical-heading group-hover:text-brand">General Surgery</div>
                          <div className="text-xs text-medical-secondary">Consultations for lumps, cysts, hernias & gut</div>
                        </div>
                      </Link>

                      <Link 
                        to="/laparoscopic-surgery/"
                        className="flex items-start p-2.5 rounded-xl hover:bg-brand-soft transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-brand-soft text-brand flex items-center justify-center mr-3 mt-0.5 group-hover:bg-brand group-hover:text-white transition-colors">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-medical-heading group-hover:text-brand">Laparoscopic Surgery</div>
                          <div className="text-xs text-medical-secondary">Minimally invasive keyhole surgery for gallbladder & hernia</div>
                        </div>
                      </Link>
                    </div>

                    <div className="text-xs font-bold uppercase tracking-wider text-medical-secondary mb-3 pb-2 border-b border-[#E7E7E7]">
                      Abdominal & Keyhole Care
                    </div>
                    <ul className="space-y-1 text-sm">
                      {servicesData.slice(0, 4).map(s => (
                        <li key={s.id}>
                          <Link 
                            to={s.slug} 
                            className="block px-3 py-1.5 rounded-lg text-medical-body hover:text-brand hover:bg-brand-soft/70 transition-colors text-xs font-medium"
                          >
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-medical-secondary mb-3 pb-2 border-b border-[#E7E7E7]">
                      Specialized & Day-Care Treatments
                    </div>
                    <ul className="space-y-1 text-sm">
                      {servicesData.slice(4).map(s => (
                        <li key={s.id}>
                          <Link 
                            to={s.slug} 
                            className="block px-3 py-1.5 rounded-lg text-medical-body hover:text-brand hover:bg-brand-soft/70 transition-colors text-xs font-medium"
                          >
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* For Patients Dropdown */}
            <div 
              ref={patientsRef} 
              className="relative"
              onMouseEnter={() => setPatientsDropdownOpen(true)}
              onMouseLeave={() => setPatientsDropdownOpen(false)}
            >
              <button 
                type="button"
                onClick={() => setPatientsDropdownOpen(!patientsDropdownOpen)}
                className={`flex items-center px-3.5 py-2 rounded-lg text-[15px] font-medium leading-relaxed transition-colors ${
                  location.pathname.includes('/for-patients') || location.pathname.includes('/patient-results') || location.pathname.includes('/gallery') || location.pathname.includes('/videos') || location.pathname.includes('/faqs')
                    ? 'text-brand font-semibold bg-brand-soft' 
                    : 'text-medical-heading hover:text-brand hover:bg-brand-soft/60'
                }`}
                aria-expanded={patientsDropdownOpen}
              >
                <span>For Patients</span>
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${patientsDropdownOpen ? 'rotate-180 text-brand' : ''}`} />
              </button>

              {patientsDropdownOpen && (
                <div className="absolute left-0 top-full mt-1 w-60 bg-white rounded-xl shadow-elevated border border-[#E7E7E7] p-2 z-50 animate-in fade-in duration-150">
                  <Link 
                    to="/for-patients/" 
                    className="block px-3 py-2 rounded-lg text-xs font-semibold text-medical-heading hover:bg-brand-soft hover:text-brand"
                  >
                    Patient Resources & Guide
                  </Link>
                  <Link 
                    to="/patient-results-before-after-surgery/" 
                    className="block px-3 py-2 rounded-lg text-xs font-medium text-medical-body hover:bg-brand-soft hover:text-brand"
                  >
                    Surgical Case Outcomes
                  </Link>
                  <Link 
                    to="/gallery/" 
                    className="block px-3 py-2 rounded-lg text-xs font-medium text-medical-body hover:bg-brand-soft hover:text-brand"
                  >
                    Clinical Photo Gallery
                  </Link>
                  <Link 
                    to="/videos/" 
                    className="block px-3 py-2 rounded-lg text-xs font-medium text-medical-body hover:bg-brand-soft hover:text-brand"
                  >
                    Educational Videos
                  </Link>
                  <Link 
                    to="/faqs/" 
                    className="block px-3 py-2 rounded-lg text-xs font-medium text-medical-body hover:bg-brand-soft hover:text-brand"
                  >
                    Patient FAQs
                  </Link>
                </div>
              )}
            </div>

            {/* Locations Dropdown - ("Private Clinic" and "Faisal Hospital") */}
            <div 
              ref={locationRef} 
              className="relative"
              onMouseEnter={() => setLocationDropdownOpen(true)}
              onMouseLeave={() => setLocationDropdownOpen(false)}
            >
              <button 
                type="button"
                onClick={() => setLocationDropdownOpen(!locationDropdownOpen)}
                className={`flex items-center px-3.5 py-2 rounded-lg text-[15px] font-medium leading-relaxed transition-colors ${
                  location.pathname.includes('/location') || location.pathname.includes('/faisal-hospital') || location.pathname.includes('/private-clinic')
                    ? 'text-brand font-semibold bg-brand-soft' 
                    : 'text-medical-heading hover:text-brand hover:bg-brand-soft/60'
                }`}
                aria-expanded={locationDropdownOpen}
              >
                <span>Locations</span>
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${locationDropdownOpen ? 'rotate-180 text-brand' : ''}`} />
              </button>

              {locationDropdownOpen && (
                <div className="absolute left-0 top-full mt-1 w-64 bg-white rounded-xl shadow-elevated border border-[#E7E7E7] p-2 z-50 animate-in fade-in duration-150">
                  <Link 
                    to="/location/" 
                    className="block px-3 py-2 rounded-lg text-xs font-semibold text-medical-heading hover:bg-brand-soft hover:text-brand"
                  >
                    Locations Overview & Timings
                  </Link>
                  <Link 
                    to="/private-clinic/" 
                    className="block px-3 py-2 rounded-lg text-xs font-medium text-brand hover:bg-brand-soft"
                  >
                    Private Clinic
                  </Link>
                  <Link 
                    to="/faisal-hospital/" 
                    className="block px-3 py-2 rounded-lg text-xs font-medium text-medical-body hover:bg-brand-soft hover:text-brand"
                  >
                    Faisal Hospital
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/contact/" 
              className={`px-3.5 py-2 rounded-lg text-[15px] font-medium leading-relaxed transition-colors ${
                location.pathname === '/contact/' 
                  ? 'text-brand font-semibold bg-brand-soft' 
                  : 'text-medical-heading hover:text-brand hover:bg-brand-soft/60'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Header CTA (Desktop) - (Call button removed; only "Book Appointment" in default brand color) */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-sheen inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#653C61] to-[#4D2B49] hover:from-[#4D2B49] hover:to-[#3A1E37] transition-all shadow-glow-brand hover:shadow-elevated transform hover:-translate-y-0.5 leading-snug"
            >
              <WhatsAppIcon className="w-4 h-4 mr-2 fill-current" />
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile Header (WhatsApp button removed as requested; clean hamburger menu only) */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-medical-heading hover:text-brand hover:bg-brand-soft border border-[#E7E7E7] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[110px] bottom-0 bg-white/95 backdrop-blur-md z-40 overflow-y-auto border-t border-[#E7E7E7] px-6 py-6 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-4">
            <Link 
              to="/" 
              className="block text-base font-semibold text-medical-heading hover:text-brand py-2 border-b border-[#E7E7E7]"
            >
              Home
            </Link>

            <Link 
              to="/about/" 
              className="block text-base font-semibold text-medical-heading hover:text-brand py-2 border-b border-[#E7E7E7]"
            >
              About Dr. Hira Nawaz
            </Link>

            <div className="border-b border-[#E7E7E7] pb-2">
              <div className="flex items-center justify-between py-2 text-base font-semibold text-medical-heading">
                <Link to="/services/" className="hover:text-brand">Services Directory</Link>
                <ChevronDown className="w-5 h-5 text-medical-secondary" />
              </div>
              <div className="pl-3 space-y-2 mt-2">
                <Link to="/general-surgery/" className="block text-sm font-semibold text-brand">General Surgery Hub</Link>
                <Link to="/laparoscopic-surgery/" className="block text-sm font-semibold text-brand">Laparoscopic Surgery Hub</Link>
                <div className="grid grid-cols-1 gap-1.5 pt-2">
                  {servicesData.map(s => (
                    <Link key={s.id} to={s.slug} className="block text-xs text-medical-body hover:text-brand py-1">
                      • {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-b border-[#E7E7E7] pb-2">
              <div className="flex items-center justify-between py-2 text-base font-semibold text-medical-heading">
                <Link to="/for-patients/" className="hover:text-brand">For Patients</Link>
                <ChevronDown className="w-5 h-5 text-medical-secondary" />
              </div>
              <div className="pl-3 space-y-2 mt-2 text-sm">
                <Link to="/patient-results-before-after-surgery/" className="block text-xs text-medical-body py-1">Clinical Case Outcomes</Link>
                <Link to="/gallery/" className="block text-xs text-medical-body py-1">Clinical Gallery</Link>
                <Link to="/videos/" className="block text-xs text-medical-body py-1">Educational Videos</Link>
                <Link to="/faqs/" className="block text-xs text-medical-body py-1">Patient FAQs</Link>
              </div>
            </div>

            <div className="border-b border-[#E7E7E7] pb-2">
              <div className="flex items-center justify-between py-2 text-base font-semibold text-medical-heading">
                <Link to="/location/" className="hover:text-brand">Locations</Link>
              </div>
              <div className="pl-3 space-y-2 mt-1 text-sm">
                <Link to="/private-clinic/" className="block text-xs text-brand font-medium py-1">Private Clinic</Link>
                <Link to="/faisal-hospital/" className="block text-xs text-medical-body font-medium py-1">Faisal Hospital</Link>
              </div>
            </div>

            <Link 
              to="/contact/" 
              className="block text-base font-semibold text-medical-heading hover:text-brand py-2 border-b border-[#E7E7E7]"
            >
              Contact & Directions
            </Link>

            {/* Mobile CTA: Default website button style ("Book Appointment" in brand color) */}
            <div className="pt-4 space-y-3">
              <a 
                href={businessInfo.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-[#653C61] hover:bg-[#4D2B49] shadow-md transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 mr-2 fill-current" />
                Book Appointment
              </a>
              <a 
                href={businessInfo.phoneTel} 
                className="w-full flex items-center justify-center py-3 px-4 rounded-xl text-sm font-semibold text-medical-heading border border-[#E7E7E7] bg-white hover:bg-brand-soft transition-colors"
              >
                <Phone className="w-4 h-4 mr-2 text-brand" />
                Call: {businessInfo.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
