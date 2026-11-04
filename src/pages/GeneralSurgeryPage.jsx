import { Link } from 'react-router-dom';
import { 
  Activity, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  Phone,
  Stethoscope,
  Clock,
  MapPin,
  ExternalLink,
  FileText,
  HeartPulse,
  ChevronRight,
  Star,
  Award
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import SEOHead from '../components/SEOHead';
import FAQAccordion from '../components/FAQAccordion';

export default function GeneralSurgeryPage() {
  // Section 11: Approved FAQs
  const generalFaqs = [
    {
      question: "What does a general surgeon do?",
      answer: "A general surgeon diagnoses conditions that may need an operation and treats them. She also advises on non-surgical options and looks after you before and after surgery. Common problems include hernias, gallstones, appendicitis, piles, lumps and skin infections."
    },
    {
      question: "When should I see a general surgeon in Faisalabad?",
      answer: "See a surgeon if you have a new or growing lump, ongoing abdominal pain, bleeding or pain around the anus, a wound that will not heal, or if your doctor has advised a surgical opinion. If you have sudden, severe abdominal pain, go to a hospital emergency department instead of waiting for an appointment."
    },
    {
      question: "Will I need an operation after the consultation?",
      answer: "Not always. Many people are advised to have a test, take medicine, change their diet or simply be monitored. Surgery is suggested only when it is likely to help you more than the other options. The surgeon will explain the reasons."
    },
    {
      question: "Is there a female (lady) surgeon in Faisalabad for general surgery problems?",
      answer: "Yes. Dr. Hira Nawaz is a female general and laparoscopic surgeon in Faisalabad. She holds MBBS and FCPS (General Surgery) qualifications and consults at Faisal Hospital and Private Clinic in People's Colony No 1. Choosing a female surgeon is a personal choice, and many patients find it makes them more comfortable."
    },
    {
      question: "What is the difference between general surgery and laparoscopic surgery?",
      answer: (
        <span>
          General surgery is the wider field that covers many conditions. Laparoscopic surgery is one way of operating, using small cuts and a camera. A general surgeon may use open or laparoscopic methods, depending on what suits the patient. Read more about <Link to="/laparoscopic-surgery/" className="text-brand font-semibold underline hover:text-brand-hover">laparoscopic surgery</Link>.
        </span>
      )
    },
    {
      question: 'What do "pitte ka operation" and "bawaseer ka operation" mean?',
      answer: (
        <span>
          "Pitte ka operation" usually means an operation on the gallbladder, often for gallstones. See our guide to <Link to="/gallbladder-surgery/" className="text-brand font-semibold underline hover:text-brand-hover">gallbladder surgery</Link>. "Bawaseer" is the Urdu word for piles, also called hemorrhoids. See our guide to <Link to="/hemorrhoids-surgery/" className="text-brand font-semibold underline hover:text-brand-hover">hemorrhoids surgery</Link>. Many cases of both are first managed without an operation, so a proper assessment comes first.
        </span>
      )
    },
    {
      question: "What should I bring to my first visit?",
      answer: "Bring earlier reports, ultrasound or X-ray results, previous prescriptions and a list of the medicines you take. If you have had surgery before, mention it. A family member can come with you."
    },
    {
      question: "How do I book an appointment with Dr. Hira Nawaz?",
      answer: "Call 0321 1836189 or send a WhatsApp message to ask about appointment times. Consultations are held Monday to Saturday, 4:00 PM to 9:00 PM, and the clinic is closed on Sunday. Opening WhatsApp does not confirm a booking. Your appointment is set once a time is agreed with you."
    }
  ];

  // Section 3: 13 Conditions assessed & treated
  const conditions = [
    { title: "Hernia surgery",           slug: "/hernia-surgery/",           desc: "a lump or bulge in the groin or abdomen." },
    { title: "Gallbladder surgery",      slug: "/gallbladder-surgery/",      desc: "gallstones and pain in the upper abdomen." },
    { title: "Appendix surgery",         slug: "/appendix-surgery/",         desc: "sudden or worsening pain in the lower right abdomen." },
    { title: "Thyroid surgery",          slug: "/thyroid-surgery/",          desc: "neck swelling, thyroid nodules and goiter." },
    { title: "Breast surgery",           slug: "/breast-surgery/",           desc: "breast lumps, pain, nipple discharge and other breast changes." },
    { title: "Hemorrhoids (piles) surgery", slug: "/hemorrhoids-surgery/",   desc: "bleeding, swelling and discomfort around the anus." },
    { title: "Fistula in ano surgery",   slug: "/fistula-in-ano-surgery/",   desc: "repeated swelling and discharge near the anus." },
    { title: "Lipoma removal",           slug: "/lipoma-removal/",           desc: "soft, fatty lumps under the skin." },
    { title: "Sebaceous cyst removal",   slug: "/sebaceous-cyst-removal/",   desc: "skin cysts, including infected or recurring ones." },
    { title: "Diabetic foot treatment",  slug: "/diabetic-foot-treatment/",  desc: "foot wounds, ulcers and infection in people with diabetes." },
    { title: "Abscess drainage",         slug: "/abscess-drainage/",         desc: "painful, pus-filled swellings." },
    { title: "Anal fissure treatment",   slug: "/anal-fissure-treatment/",   desc: "pain and bleeding during bowel movements." },
    { title: "Varicose veins treatment", slug: "/varicose-veins-treatment/", desc: "assessment of enlarged leg veins and discussion of treatment options." }
  ];

  // Related services for sidebar (top 6)
  const sidebarServices = conditions.slice(0, 6);

  // Approved Schema JSON-LD
  const generalSurgerySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://drhiranawaz.com/general-surgery/#webpage",
        "url": "https://drhiranawaz.com/general-surgery/",
        "name": "Female General Surgeon in Faisalabad | Dr. Hira Nawaz",
        "inLanguage": "en",
        "about": { "@id": "https://drhiranawaz.com/#physician" }
      },
      {
        "@type": "Physician",
        "@id": "https://drhiranawaz.com/#physician",
        "name": "Dr. Hira Nawaz",
        "url": "https://drhiranawaz.com/",
        "telephone": "+92 321 1836189",
        "medicalSpecialty": "Surgical",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Faisal Hospital, Plot 547, Muhammadia Colony Block A, People's Colony No 1",
          "addressLocality": "Faisalabad",
          "addressRegion": "Punjab",
          "addressCountry": "PK"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "16:00",
          "closes": "21:00"
        },
        "sameAs": [
          "https://www.facebook.com/drhiranawazofficial/",
          "https://www.instagram.com/hiranawaz.official",
          "https://www.tiktok.com/@dr.hira.nawaz",
          "https://pk.linkedin.com/in/dr-hira-nawaz"
        ]
      }
    ]
  };

  return (
    <>
      <SEOHead 
        customTitle="Female General Surgeon in Faisalabad | Dr. Hira Nawaz"
        customDescription="Consult Dr. Hira Nawaz, a female general and laparoscopic surgeon in Faisalabad (MBBS, FCPS). Hernia, gallbladder, piles and more. Call or WhatsApp."
        customSchema={generalSurgerySchema}
      />

      {/* ═══════════════════════════════════════════════════════
          SECTION 1: HERO — Full-width
      ═══════════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-b from-[#F7F1F6] via-white to-white overflow-hidden border-b border-[#E7E7E7]">
        {/* Subtle decorative circles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand/5 blur-3xl" />
          <div className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-brand/4 blur-2xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* LEFT: Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-1">
              <h1 className="font-heading text-fluid-h1 font-bold text-medical-heading tracking-tight leading-[1.1]">
                Female General Surgeon{' '}
                <span className="text-brand">in Faisalabad</span>
              </h1>

              <div className="space-y-4 text-fluid-body text-medical-body leading-[1.75] max-w-2xl mx-auto lg:mx-0">
                <p>
                  Dr. Hira Nawaz is a female general and laparoscopic surgeon in Faisalabad. She holds MBBS and FCPS (General Surgery) qualifications and is Head of Surgery Department at Fauji Foundation Hospital Faisalabad.
                </p>
                <p>
                  If you have a lump, a hernia, ongoing abdominal pain or another problem that may need a surgeon, you can arrange a consultation at Faisal Hospital or Private Clinic.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <a
                  href="https://wa.me/923211836189"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-sheen inline-flex items-center px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#653C61] to-[#4D2B49] hover:from-[#4D2B49] hover:to-[#3A1E37] shadow-glow-brand hover:shadow-elevated transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 mr-2 fill-current" />
                  Book Appointment
                </a>
                <a
                  href="tel:+923211836189"
                  className="inline-flex items-center px-6 py-3.5 rounded-xl text-base font-semibold text-medical-heading bg-white border border-[#E7E7E7] hover:bg-brand-soft shadow-subtle transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2 text-brand" />
                  Call Now
                </a>
              </div>
            </div>

            {/* RIGHT: Doctor image */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-brand/20 to-brand/5 blur-sm" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-brand/20 shadow-card aspect-[4/4.5] w-full max-w-sm bg-white p-1.5">
                  <img
                    src="/images/services/female-general-surgeon-dr-hira-nawaz-faisalabad.jpg"
                    alt="Dr. Hira Nawaz, female general and laparoscopic surgeon in Faisalabad"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          MAIN CONTENT + SIDEBAR WRAPPER
      ═══════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 xl:gap-14 items-start">

          {/* ─────────────────────────────────────────────────
              LEFT COLUMN: Main Content (Sections 2–13)
          ───────────────────────────────────────────────── */}
          <div className="min-w-0 space-y-14 md:space-y-16">

            {/* ── SECTION 2: WHAT IS GENERAL SURGERY ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                What Is General Surgery?
              </h2>

              <div className="space-y-4 text-fluid-body text-medical-body leading-[1.75]">
                <p>
                  General surgery is the diagnosis and treatment of conditions that may need an operation. Most of these affect the abdomen and digestive system. General surgeons also care for problems of the thyroid, breast, skin and soft tissues, and the anal area.
                </p>
                <p>
                  Seeing a general surgeon does not always mean you will need surgery. Some people only need an examination, a test or a treatment plan without an operation. Your surgeon explains your options so you can decide with clear information.
                </p>
                <p>
                  Some problems can be planned in advance, such as a stable hernia. Others, such as suspected appendicitis, need prompt medical care.
                </p>
              </div>
            </article>

            {/* ── SECTION 3: CONDITIONS ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-3">
                Conditions Dr. Hira Nawaz Can Assess and Treat
              </h2>
              <p className="text-fluid-body text-medical-secondary leading-[1.7] mb-8">
                These are the main surgical problems covered by Dr. Hira Nawaz's consultation service. Select a condition to read a detailed guide.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {conditions.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.slug}
                    className="group flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-white border border-[#E7E7E7] shadow-subtle hover:border-brand/40 hover:shadow-card transition-all"
                  >
                    <span className="mt-0.5 w-8 h-8 rounded-xl bg-brand/8 flex items-center justify-center shrink-0 group-hover:bg-brand/15 transition-colors">
                      <ChevronRight className="w-4 h-4 text-brand" />
                    </span>
                    <div className="min-w-0">
                      <span className="font-heading font-semibold text-[15px] text-medical-heading group-hover:text-brand transition-colors block mb-0.5">
                        {item.title}
                      </span>
                      <span className="text-sm text-medical-secondary leading-relaxed">
                        {item.desc}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              <p className="mt-7 text-sm text-medical-secondary italic leading-relaxed bg-brand-soft/40 rounded-xl px-4 py-3 border border-brand/10">
                Not every treatment suits every patient. After an examination, the surgeon recommends what is appropriate for you.
              </p>
            </article>

            {/* ── SECTION 4: WHEN SHOULD YOU SEE A SURGEON ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                When Should You See a General Surgeon?
              </h2>

              <p className="text-fluid-body text-medical-body leading-[1.7] mb-6">
                Consider booking a consultation if you notice any of the following:
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "A new lump or swelling that is growing, or that has not gone away, in the groin, abdomen, neck, breast or skin.",
                  "Pain in the upper abdomen, especially after meals.",
                  "Pain, bleeding, swelling or discharge around the anus.",
                  "A foot wound that is not healing, particularly if you have diabetes.",
                  "A painful, red swelling that may contain pus.",
                  "Swollen leg veins with aching, heaviness or skin changes.",
                  "Your family doctor has advised a surgical opinion."
                ].map((symptom, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                    <span className="text-fluid-body text-medical-body leading-[1.7]">{symptom}</span>
                  </li>
                ))}
              </ul>

              {/* Emergency Warning Callout */}
              <div className="p-5 sm:p-6 rounded-2xl bg-rose-50 border border-rose-200 shadow-subtle">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-5 h-5 text-rose-600" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-heading font-bold text-xl text-rose-950">
                      Warning Signs That Need Urgent Medical Care
                    </h3>
                    <p className="text-[15px] text-rose-900 leading-[1.7]">
                      Some symptoms should not wait for a routine appointment. Go to the nearest hospital emergency department if you have:
                    </p>
                    <ul className="space-y-2 pt-1">
                      {[
                        "Sudden, severe abdominal pain, or pain that keeps getting worse.",
                        "Abdominal pain with fever or repeated vomiting.",
                        "A hernia lump that is painful, hard or cannot be pushed back, especially with vomiting.",
                        "Abdominal pain with yellow skin or eyes.",
                        "Vomiting blood, or black, sticky stools.",
                        "No bowel movement and no passing of gas, with a swollen, painful abdomen.",
                        "A diabetic foot wound with spreading redness, a bad smell or blackened skin."
                      ].map((warning, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-2.5" />
                          <span className="text-[15px] text-rose-900 leading-[1.65] font-medium">{warning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>

            {/* ── SECTION 5: FIRST CONSULTATION ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                What Happens at Your First Consultation?
              </h2>

              <p className="text-fluid-body text-medical-body leading-[1.75] mb-6">
                The surgeon starts by listening. She asks about your symptoms, how long you have had them, your past illnesses, the medicines you take and any earlier operations. She then examines the affected area.
              </p>

              <div className="bg-[#F7F1F6] p-6 sm:p-7 rounded-2xl border border-brand/15 space-y-4">
                <h3 className="font-heading font-semibold text-lg text-medical-heading">
                  Depending on your problem, she may advise one or more tests, such as:
                </h3>
                <ul className="space-y-2.5">
                  {[
                    "Ultrasound scan of the abdomen, neck, breast or soft tissue.",
                    "Blood tests.",
                    "X-ray or CT scan.",
                    "Mammography for some breast concerns.",
                    "A small tissue or fluid sample (needle test or biopsy) for some lumps."
                  ].map((test, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                      <span className="text-fluid-body text-medical-body leading-[1.7]">{test}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-5 text-fluid-body text-medical-body leading-[1.75]">
                Not every patient needs every test. The surgeon explains why each test is advised and what the result means for your treatment.
              </p>
            </article>

            {/* ── SECTION 6: TREATMENT OPTIONS ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                Treatment Options: Surgery Is Not Always the First Step
              </h2>

              <p className="text-fluid-body text-medical-body leading-[1.75] mb-6">
                Many surgical conditions can be managed in more than one way. The right choice depends on your diagnosis, your symptoms, your general health and your own preferences.
              </p>

              <div className="bg-emerald-50 p-6 sm:p-7 rounded-2xl border border-emerald-200 space-y-4 mb-5">
                <h3 className="font-heading font-semibold text-lg text-emerald-900">
                  Non-surgical options may include:
                </h3>
                <ul className="space-y-2.5">
                  {[
                    "Watching a problem over time, when it is small and not causing harm.",
                    "Medicines, diet changes and lifestyle advice.",
                    "Wound care and dressings.",
                    "Draining a collection of pus when needed."
                  ].map((opt, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-fluid-body text-emerald-900 leading-[1.7]">{opt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 text-fluid-body text-medical-body leading-[1.75]">
                <p>
                  Surgery may be advised when symptoms keep coming back, when a problem is likely to cause complications, when a condition is urgent, or when tissue must be removed and tested.
                </p>
                <p>
                  Before any decision, the surgeon explains the likely benefits, the risks and the other choices open to you.
                </p>
              </div>
            </article>

            {/* ── SECTION 7: LAPAROSCOPIC vs OPEN ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                Open and Laparoscopic (Keyhole) Surgery
              </h2>

              <div className="space-y-4 text-fluid-body text-medical-body leading-[1.75]">
                <p>
                  In open surgery, the surgeon works through one larger cut. In laparoscopic surgery, the surgeon uses a few small cuts. A thin camera and fine instruments are passed through them, and the surgeon watches the inside of the body on a screen.
                </p>
                <p>
                  For many suitable conditions, keyhole surgery can mean smaller scars, less pain and an earlier return to normal activity. It is not right for everyone. Earlier operations, the type of condition and what the surgeon finds during the operation can all affect the choice. Sometimes the surgeon needs to change to open surgery for safety.
                </p>
                <p>
                  Dr. Hira Nawaz is a laparoscopic surgeon. She will tell you which approach she considers suitable for your condition. You can read more on the{' '}
                  <Link to="/laparoscopic-surgery/" className="text-brand font-semibold underline hover:text-brand-hover">
                    laparoscopic surgery
                  </Link>{' '}
                  page.
                </p>
              </div>
            </article>

            {/* ── SECTION 8: BENEFITS, RISKS & RECOVERY ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-7">
                Benefits, Risks and Recovery
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
                {[
                  {
                    title: "Possible benefits",
                    color: "bg-[#EDF7EE] border-emerald-200",
                    titleColor: "text-emerald-900",
                    textColor: "text-emerald-800",
                    desc: "relief of symptoms, treatment of the cause, and a lower chance of complications from a problem left untreated."
                  },
                  {
                    title: "Possible risks",
                    color: "bg-amber-50 border-amber-200",
                    titleColor: "text-amber-900",
                    textColor: "text-amber-800",
                    desc: "every operation carries some risk. These include bleeding, infection, a reaction to anaesthesia, blood clots, problems with wound healing, and a hernia at the site of a cut. Damage to nearby organs is uncommon but possible. Each operation also has risks of its own. Your surgeon will explain those before you agree to treatment."
                  },
                  {
                    title: "Recovery",
                    color: "bg-[#F7F1F6] border-brand/15",
                    titleColor: "text-medical-heading",
                    textColor: "text-medical-body",
                    desc: "recovery time depends on the operation, your health and whether surgery was planned or urgent. No one can promise a fixed recovery time. You will receive clear instructions on wound care, activity, food and follow-up visits."
                  }
                ].map((card, idx) => (
                  <div key={idx} className={`p-5 sm:p-6 rounded-2xl border ${card.color} space-y-2.5`}>
                    <h3 className={`font-heading font-bold text-base ${card.titleColor}`}>{card.title}</h3>
                    <p className={`text-[15px] leading-[1.7] ${card.textColor}`}>{card.desc}</p>
                  </div>
                ))}
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <p className="text-[15px] text-amber-900 leading-[1.7]">
                  Contact your surgeon or go to a hospital if, after surgery, you have a fever, pain that is getting worse, redness or discharge from the wound, or vomiting that does not stop.
                </p>
              </div>
            </article>

            {/* ── SECTION 9: WHY CONSULT DR. HIRA NAWAZ ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-7">
                Why Consult Dr. Hira Nawaz?
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  { icon: <Star className="w-4 h-4" />, title: "Female surgeon", desc: "some patients, especially women, prefer to discuss sensitive problems with a female doctor." },
                  { icon: <Award className="w-4 h-4" />, title: "Qualifications", desc: "MBBS and FCPS (General Surgery)." },
                  { icon: <ShieldCheck className="w-4 h-4" />, title: "Hospital role", desc: "Head of Surgery Department at Fauji Foundation Hospital Faisalabad." },
                  { icon: <HeartPulse className="w-4 h-4" />, title: "Laparoscopic surgeon", desc: "keyhole surgery is considered where it suits the patient's condition." },
                  { icon: <FileText className="w-4 h-4" />, title: "Clear explanations", desc: "you are told about non-surgical options, risks and recovery in plain language." },
                  { icon: <MapPin className="w-4 h-4" />, title: "Convenient consultations", desc: "appointments are held at Faisal Hospital and Private Clinic, People's Colony No 1, Faisalabad." }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E7E7E7] shadow-subtle space-y-2 hover:border-brand/30 transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-brand/10 flex items-center justify-center text-brand shrink-0">
                        {item.icon}
                      </span>
                      <strong className="font-heading font-semibold text-medical-heading text-[15px]">{item.title}</strong>
                    </div>
                    <p className="text-medical-secondary text-sm leading-relaxed pl-9">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-fluid-body text-medical-body leading-[1.75]">
                To learn more about her background, visit the{' '}
                <Link to="/about/" className="text-brand font-semibold underline hover:text-brand-hover">
                  About Dr. Hira Nawaz
                </Link>{' '}
                page.
              </p>
            </article>

            {/* ── SECTION 10: HOW TO ARRANGE A CONSULTATION ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-7">
                How to Arrange a Consultation
              </h2>

              <div className="space-y-4">
                {[
                  "Call 0321 1836189 or send a WhatsApp message to ask about appointment times.",
                  "Share a short note about your problem. Opening WhatsApp does not confirm an appointment. Your visit is arranged once a time is agreed with you.",
                  "Bring any earlier reports, scans, prescriptions and a list of the medicines you take.",
                  "At the consultation, the surgeon asks about your symptoms, examines you and explains the next steps."
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-[#E7E7E7] shadow-subtle hover:border-brand/30 transition-colors">
                    <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#653C61] to-[#4D2B49] text-white font-bold text-sm flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      {idx + 1}
                    </span>
                    <p className="text-fluid-body text-medical-body leading-[1.7] pt-1">{step}</p>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm text-medical-secondary italic leading-relaxed">
                Please contact the clinic for current availability and consultation fees.
              </p>
            </article>

            {/* ── SECTION 11: FAQs ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-8">
                General Surgery FAQs
              </h2>

              <FAQAccordion items={generalFaqs} />
            </article>

            {/* ── SECTION 12: RELATED SURGICAL SERVICES ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-7">
                Related Surgical Services
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {[
                  { slug: "/laparoscopic-surgery/", title: "Laparoscopic surgery", desc: "how keyhole surgery works and when it may be considered." },
                  { slug: "/hernia-surgery/",        title: "Hernia surgery",        desc: "symptoms, repair options and recovery." },
                  { slug: "/gallbladder-surgery/",   title: "Gallbladder surgery",   desc: "gallstones, tests and treatment." }
                ].map((item, idx) => (
                  <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-[#F7F1F6] border border-brand/15 shadow-subtle hover:border-brand/35 hover:shadow-card transition-all flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-base text-medical-heading mb-2">
                        <Link to={item.slug} className="hover:text-brand transition-colors">
                          {item.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-medical-secondary leading-relaxed">{item.desc}</p>
                    </div>
                    <Link to={item.slug} className="mt-4 text-xs font-bold uppercase tracking-wider text-brand hover:underline inline-flex items-center gap-1">
                      View Guide <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            </article>

            {/* ── SECTION 13: CONSULTATION LOCATIONS ── */}
            <article>
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-7">
                Consultation Locations in Faisalabad
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Faisal Hospital Card */}
                <div className="bg-white rounded-3xl p-6 border border-[#E7E7E7] shadow-card space-y-5 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand bg-purple-50 px-2.5 py-1 rounded-md border border-purple-100">
                        Hospital Facility
                      </span>
                      <h3 className="font-heading font-bold text-xl text-medical-heading mt-2">
                        Faisal Hospital
                      </h3>
                      <p className="text-sm text-medical-secondary mt-1">
                        Plot 547, Muhammadia Colony Block A, People's Colony No 1, Faisalabad, Pakistan.
                      </p>
                    </div>

                    <div className="overflow-hidden rounded-xl border border-[#E7E7E7] text-xs sm:text-sm">
                      <div className="bg-[#F7F1F6] font-semibold px-3 py-2 text-medical-heading border-b border-[#E7E7E7]">
                        Consultation Hours
                      </div>
                      <div className="divide-y divide-slate-100 p-3 space-y-1.5 text-medical-body">
                        <div className="flex justify-between">
                          <span>Monday to Saturday:</span>
                          <span className="font-medium">4:00 PM – 9:00 PM</span>
                        </div>
                        <div className="flex justify-between pt-1 text-rose-700">
                          <span>Sunday:</span>
                          <span className="font-semibold">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <a href="tel:+923211836189" className="font-semibold text-medical-heading hover:text-brand flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-brand" /> 0321 1836189
                      </a>
                      <a href="https://maps.app.goo.gl/UfRntfLaEcPaeVAU7" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand hover:underline flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> Directions <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <Link to="/faisal-hospital/" className="text-xs font-bold text-brand hover:underline block pt-1">
                      Faisal Hospital Details &rarr;
                    </Link>
                  </div>
                </div>

                {/* Private Clinic Card */}
                <div className="bg-white rounded-3xl p-6 border border-[#E7E7E7] shadow-card space-y-5 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand bg-purple-50 px-2.5 py-1 rounded-md border border-purple-100">
                        Outpatient Clinic
                      </span>
                      <h3 className="font-heading font-bold text-xl text-medical-heading mt-2">
                        Private Clinic
                      </h3>
                      <p className="text-sm text-medical-secondary mt-1">
                        Behind Faisal Hospital (New Building), 547/A Lower Canal Rd E, Muhammadia Colony Block A, People's Colony No 1, Faisalabad.
                      </p>
                    </div>

                    <div className="overflow-hidden rounded-xl border border-[#E7E7E7] text-xs sm:text-sm">
                      <div className="bg-[#F7F1F6] font-semibold px-3 py-2 text-medical-heading border-b border-[#E7E7E7]">
                        Consultation Hours
                      </div>
                      <div className="divide-y divide-slate-100 p-3 space-y-1.5 text-medical-body">
                        <div className="flex justify-between">
                          <span>Monday to Saturday:</span>
                          <span className="font-medium">4:00 PM – 7:00 PM</span>
                        </div>
                        <div className="flex justify-between pt-1 text-rose-700">
                          <span>Sunday:</span>
                          <span className="font-semibold">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <a href="tel:+923211836189" className="font-semibold text-medical-heading hover:text-brand flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-brand" /> 0321 1836189
                      </a>
                      <a href="https://maps.app.goo.gl/xN24RtbBNCQiNQjg7" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand hover:underline flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> Directions <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <Link to="/private-clinic/" className="text-xs font-bold text-brand hover:underline block pt-1">
                      Private Clinic Details &rarr;
                    </Link>
                  </div>
                </div>
              </div>

              <p className="text-sm text-medical-secondary mt-6 leading-relaxed">
                For more detail, visit the{' '}
                <Link to="/private-clinic/" className="text-brand font-semibold underline hover:text-brand-hover">Private Clinic</Link>
                {' '}or{' '}
                <Link to="/faisal-hospital/" className="text-brand font-semibold underline hover:text-brand-hover">Faisal Hospital</Link>
                {' '}pages, or view the{' '}
                <Link to="/contact/" className="text-brand font-semibold underline hover:text-brand-hover">contact page</Link>.
              </p>
            </article>

          </div>{/* END LEFT COLUMN */}

          {/* ─────────────────────────────────────────────────
              RIGHT COLUMN: Sticky Sidebar
          ───────────────────────────────────────────────── */}
          <aside className="hidden lg:block">
            <div className="lg:sticky lg:top-24 space-y-5">

              {/* ── Sidebar Card 1: Doctor Profile ── */}
              <div className="bg-white rounded-3xl border border-[#E7E7E7] shadow-card overflow-hidden">
                <div className="relative">
                  <img
                    src="/images/photos/Dr Hira Nawaz Photo.png"
                    alt="Dr. Hira Nawaz – Female General Surgeon Faisalabad"
                    className="w-full h-52 object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                <div className="p-5 space-y-4">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-medical-heading">Dr. Hira Nawaz</h3>
                    <p className="text-sm text-brand font-semibold mt-0.5">MBBS, FCPS (General Surgery)</p>
                  </div>

                  <div className="space-y-2.5">
                    <div className="flex items-start gap-2 text-sm text-medical-secondary">
                      <ShieldCheck className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                      <span>Head of Surgery Department, Fauji Foundation Hospital Faisalabad</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-medical-secondary">
                      <Activity className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                      <span>Female General &amp; Laparoscopic Surgeon</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-medical-secondary">
                      <MapPin className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                      <span>Private Clinic &amp; Faisal Hospital, Faisalabad</span>
                    </div>
                  </div>

                  <Link
                    to="/about/"
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-brand hover:underline"
                  >
                    View Full Profile <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* ── Sidebar Card 2: Book Appointment ── */}
              <div className="bg-gradient-to-br from-[#4D2B49] via-[#5A3357] to-[#653C61] rounded-3xl p-5 sm:p-6 space-y-4 shadow-glow-brand">
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">Book a Consultation</h3>
                  <p className="text-xs text-purple-200 mt-0.5">Call or WhatsApp to arrange your visit</p>
                </div>

                <div className="space-y-2.5">
                  <a
                    href="https://wa.me/923211836189"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-sheen w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                    Book via WhatsApp
                  </a>
                  <a
                    href="tel:+923211836189"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-white/15 hover:bg-white/25 border border-white/20 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call 0321 1836189
                  </a>
                </div>

                <div className="pt-3 border-t border-white/15 space-y-2 text-sm text-purple-100">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple-300 shrink-0" />
                    <span>Mon – Sat: 4:00 PM – 9:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-300 shrink-0" />
                    <span>Faisal Hospital &amp; Private Clinic</span>
                  </div>
                  <p className="text-rose-300 text-xs pt-1 font-medium">Sunday: Closed</p>
                </div>
              </div>

              {/* ── Sidebar Card 3: Related Services ── */}
              <div className="bg-white rounded-3xl border border-[#E7E7E7] shadow-subtle p-5 sm:p-6 space-y-4">
                <h3 className="font-heading font-semibold text-base text-medical-heading flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-brand" />
                  Related Services
                </h3>

                <ul className="space-y-1">
                  {sidebarServices.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        to={item.slug}
                        className="flex items-center gap-2 py-2 px-3 rounded-xl text-sm text-medical-body hover:bg-brand-soft hover:text-brand transition-colors group"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-brand/50 group-hover:text-brand shrink-0 transition-colors" />
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/services/"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-brand hover:underline"
                >
                  All Services <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* ── Sidebar Card 4: Clinic Locations ── */}
              <div className="bg-[#F7F1F6] rounded-2xl p-5 border border-brand/15 space-y-4">
                <h3 className="font-heading font-semibold text-sm text-medical-heading flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand" />
                  Clinic Locations
                </h3>
                <div className="space-y-1.5 text-xs text-medical-secondary border-b border-brand/10 pb-3">
                  <strong className="text-medical-heading block font-semibold">Faisal Hospital:</strong>
                  <p>Plot 547, People's Colony No 1, Faisalabad</p>
                  <a
                    href="https://maps.app.goo.gl/UfRntfLaEcPaeVAU7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-brand hover:underline pt-0.5"
                  >
                    Faisal Hospital Directions <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="space-y-1.5 text-xs text-medical-secondary">
                  <strong className="text-medical-heading block font-semibold">Private Clinic:</strong>
                  <p>Behind Faisal Hospital (New Bldg), Lower Canal Rd, Faisalabad</p>
                  <a
                    href="https://maps.app.goo.gl/xN24RtbBNCQiNQjg7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-brand hover:underline pt-0.5"
                  >
                    Private Clinic Directions <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          </aside>{/* END SIDEBAR */}

        </div>
      </div>{/* END MAIN WRAPPER */}

      {/* ═══════════════════════════════════════════════════════
          SECTION 14: FINAL CTA — Full-width
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-[#4D2B49] via-[#653C61] to-[#3A1E37] text-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-heading text-fluid-h2 font-bold tracking-tight">
            Talk to Dr. Hira Nawaz About Your Symptoms
          </h2>

          <p className="text-fluid-body text-purple-100 max-w-2xl mx-auto leading-[1.7]">
            Have questions about your symptoms or treatment options? Contact Dr. Hira Nawaz to arrange a surgical consultation at Faisal Hospital or Private Clinic in Faisalabad.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <a
              href="https://wa.me/923211836189"
              target="_blank"
              rel="noopener noreferrer"
              className="button-sheen inline-flex items-center px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-elevated transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 mr-2 fill-current" />
              Book Appointment
            </a>
            <a
              href="tel:+923211836189"
              className="inline-flex items-center px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2 text-rose-200" />
              Call Now
            </a>
            <a
              href="https://maps.app.goo.gl/UfRntfLaEcPaeVAU7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-purple-100 bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
            >
              <MapPin className="w-4 h-4 mr-2 text-purple-200" />
              Get Directions
            </a>
          </div>

          <p className="text-xs sm:text-sm text-purple-200/80 max-w-2xl mx-auto pt-6 border-t border-white/15 leading-relaxed">
            Medical information on this page is for general education. It does not replace advice from a doctor who has examined you.
          </p>
        </div>
      </section>

      {/* SECTION 15: GLOBAL FOOTER RENDERED BY APP LAYOUT */}
    </>
  );
}
