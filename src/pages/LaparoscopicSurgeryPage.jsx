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
  Award,
  Sparkles
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import SEOHead from '../components/SEOHead';
import FAQAccordion from '../components/FAQAccordion';

export default function LaparoscopicSurgeryPage() {
  // Section 11: Approved FAQs
  const lapFaqs = [
    {
      question: "What is laparoscopic surgery?",
      answer: "Laparoscopic surgery is a way of operating, or looking inside the abdomen, through a few small cuts. The surgeon uses a thin camera and fine instruments and watches the inside of the body on a screen. It is often used instead of open surgery when it is suitable."
    },
    {
      question: "Is laparoscopic surgery the same as keyhole surgery?",
      answer: 'Yes. Laparoscopic surgery, keyhole surgery and minimally invasive surgery are different names for the same approach. Many patients in Pakistan say "keyhole operation" or "dorbeen se operation". They mean the same method.'
    },
    {
      question: "Is there pain after laparoscopic surgery?",
      answer: "Some discomfort is normal. You may feel soreness around the small cuts, cramps, bloating, or an ache in the shoulder from the gas used during surgery. Pain medicine helps. For suitable patients, keyhole surgery is often less uncomfortable than open surgery, but no one can promise a painless recovery."
    },
    {
      question: "Who may not be suitable for keyhole surgery?",
      answer: "Some people are better treated with open surgery. Earlier major abdominal surgery, or certain problems found in the abdomen, can make keyhole surgery unsuitable. The surgeon decides after examining you and reviewing your tests. She may also change to open surgery during the operation if it is safer."
    },
    {
      question: "How long does recovery take after laparoscopic surgery?",
      answer: "It varies from person to person and from operation to operation. Many patients go home the same day or the next day, and return to light activity sooner than after open surgery. Full recovery can take longer. Your surgeon will tell you what to expect for your own operation and when you can drive, work and exercise."
    },
    {
      question: "What is the difference between laparoscopic surgery and general surgery?",
      answer: (
        <span>
          General surgery is the wider field that treats many surgical conditions. Laparoscopic surgery is one method a surgeon may use within it. A general surgeon can use open or keyhole methods, depending on what suits the patient. Read more about <Link to="/general-surgery/" className="text-brand font-semibold underline hover:text-brand-hover">general surgery</Link>.
        </span>
      )
    },
    {
      question: "Is there a female laparoscopic surgeon in Faisalabad?",
      answer: "Yes. Dr. Hira Nawaz is a female laparoscopic and general surgeon in Faisalabad. She holds MBBS and FCPS (General Surgery) qualifications and consults at Faisal Hospital and Private Clinic in People's Colony No 1."
    },
    {
      question: "How do I book an appointment?",
      answer: "Call 0321 1836189 or send a WhatsApp message to ask about appointment times. Consultations are held Monday to Saturday, 4:00 PM to 9:00 PM, and the clinic is closed on Sunday. Opening WhatsApp does not confirm a booking. Your appointment is set once a time is agreed with you."
    }
  ];

  // Related services for sidebar
  const sidebarServices = [
    { title: "Hernia surgery", slug: "/hernia-surgery/" },
    { title: "Gallbladder surgery", slug: "/gallbladder-surgery/" },
    { title: "Appendix surgery", slug: "/appendix-surgery/" },
    { title: "General surgery", slug: "/general-surgery/" },
    { title: "Lipoma removal", slug: "/lipoma-removal/" },
    { title: "Abscess drainage", slug: "/abscess-drainage/" }
  ];

  // Approved Schema JSON-LD
  const laparoscopicSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://drhiranawaz.com/laparoscopic-surgery/#webpage",
        "url": "https://drhiranawaz.com/laparoscopic-surgery/",
        "name": "Female Laparoscopic Surgeon in Faisalabad | Dr. Hira Nawaz",
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
        customTitle="Female Laparoscopic Surgeon in Faisalabad | Dr. Hira Nawaz"
        customDescription="Dr. Hira Nawaz is a female laparoscopic surgeon in Faisalabad (MBBS, FCPS). Learn about keyhole surgery, its risks and recovery. Call or WhatsApp."
        customSchema={laparoscopicSchema}
      />

      {/* ═══════════════════════════════════════════════════════
          SECTION 1: HERO — Full-width
      ═══════════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-b from-[#F7F1F6] via-white to-white overflow-hidden border-b border-[#E7E7E7]">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand/5 blur-3xl" />
          <div className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-brand/4 blur-2xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* LEFT: Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-1">
              <h1 className="font-heading text-fluid-h1 font-bold text-medical-heading tracking-tight leading-[1.1]">
                Female Laparoscopic Surgeon{' '}
                <span className="text-brand">in Faisalabad</span>
              </h1>

              <div className="space-y-4 text-fluid-body text-medical-body leading-[1.75] max-w-2xl mx-auto lg:mx-0">
                <p>
                  Laparoscopic surgery, also called keyhole surgery, treats many conditions through a few small cuts instead of one large cut. Dr. Hira Nawaz is a female laparoscopic and general surgeon in Faisalabad. She holds MBBS and FCPS (General Surgery) qualifications and is Head of Surgery Department at Fauji Foundation Hospital Faisalabad.
                </p>
                <p>
                  At Faisal Hospital or Private Clinic, she can assess your condition and explain whether keyhole surgery may suit you.
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
                    src="/images/services/laparoscopic-surgeon-dr-hira-nawaz-faisalabad.jpg"
                    alt="Dr. Hira Nawaz, female laparoscopic and general surgeon in Faisalabad"
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

            {/* ── SECTION 2: WHAT IS LAPAROSCOPIC SURGERY ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                What Is Laparoscopic Surgery?
              </h2>

              <div className="space-y-4 text-fluid-body text-medical-body leading-[1.75]">
                <p>
                  Laparoscopic surgery is a way of looking inside the abdomen (tummy) or pelvis, and of operating there, without a large cut. It is also called keyhole surgery or minimally invasive surgery.
                </p>
                <p>
                  The surgeon makes a few small cuts. Through one of them, she passes a thin tube with a camera, called a laparoscope. The camera shows the inside of your body on a screen. Through the other cuts, she passes fine instruments to carry out the operation.
                </p>
                <p>
                  Keyhole surgery is a method, not a separate condition or treatment. It is often used instead of open surgery, where the surgeon works through one larger cut.
                </p>
              </div>
            </article>

            {/* ── SECTION 3: CONDITIONS ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                What Can Keyhole Surgery Be Used For?
              </h2>

              <div className="space-y-4 text-fluid-body text-medical-body leading-[1.75]">
                <p>
                  Around the world, keyhole surgery is used to find the cause of abdominal problems and to treat some of them. Examples include gallbladder disease, hernias and appendicitis.
                </p>
                <p>
                  This is general medical information. Whether keyhole surgery is suitable for you, and which operations are offered, is confirmed at your consultation.
                </p>
                <p>
                  To read about specific conditions, visit{' '}
                  <Link to="/hernia-surgery/" className="text-brand font-semibold underline hover:text-brand-hover">hernia surgery</Link>,{' '}
                  <Link to="/gallbladder-surgery/" className="text-brand font-semibold underline hover:text-brand-hover">gallbladder surgery</Link>{' '}
                  and{' '}
                  <Link to="/appendix-surgery/" className="text-brand font-semibold underline hover:text-brand-hover">appendix surgery</Link>.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                {[
                  { title: "Hernia surgery", slug: "/hernia-surgery/", desc: "Repair of groin and abdominal wall hernias." },
                  { title: "Gallbladder surgery", slug: "/gallbladder-surgery/", desc: "Keyhole removal of gallstones and gallbladder." },
                  { title: "Appendix surgery", slug: "/appendix-surgery/", desc: "Laparoscopic treatment for appendicitis." }
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.slug}
                    className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E7E7E7] shadow-subtle hover:border-brand/40 hover:shadow-card transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <h3 className="font-heading font-semibold text-base text-medical-heading group-hover:text-brand transition-colors mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-medical-secondary leading-relaxed">{item.desc}</p>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand mt-4 inline-flex items-center gap-1">
                      Read Guide <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </article>

            {/* ── SECTION 4: SUITABILITY AND WARNING SIGNS ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                Is Keyhole Surgery Right for You?
              </h2>

              <p className="text-fluid-body text-medical-body leading-[1.7] mb-6">
                The surgeon decides after she has examined you and reviewed your tests. She considers:
              </p>

              <ul className="space-y-3 mb-6">
                {[
                  "Your diagnosis and how serious it is.",
                  "Your general health and fitness for an anaesthetic.",
                  "Any earlier operations on the abdomen. Major earlier abdominal surgery can make keyhole surgery unsuitable for some people.",
                  "Your scan and test results.",
                  "Whether the problem is urgent."
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                    <span className="text-fluid-body text-medical-body leading-[1.7]">{point}</span>
                  </li>
                ))}
              </ul>

              <p className="text-fluid-body text-medical-body leading-[1.75] mb-8">
                Even when keyhole surgery is planned, the surgeon may need to change to open surgery during the operation if it is safer for you.
              </p>

              {/* Emergency Warning Callout */}
              <div className="p-5 sm:p-6 rounded-2xl bg-rose-50 border border-rose-200 shadow-subtle">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-5 h-5 text-rose-600" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-heading font-bold text-xl text-rose-950">
                      Abdominal Symptoms That Need Urgent Care
                    </h3>
                    <p className="text-[15px] text-rose-900 leading-[1.7]">
                      Do not wait for a routine appointment. Go to the nearest hospital emergency department if you have a stomach ache and:
                    </p>
                    <ul className="space-y-2 pt-1">
                      {[
                        "The pain started suddenly and is severe.",
                        "You are vomiting blood, or the vomit is green or looks like ground coffee.",
                        "A lot of blood comes from your bottom, or your stools are black and sticky.",
                        "You cannot pass urine at all.",
                        "You cannot pass stool or gas at all.",
                        "You are struggling to breathe."
                      ].map((warning, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-2.5" />
                          <span className="text-[15px] text-rose-900 leading-[1.65] font-medium">{warning}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm font-semibold text-rose-950 pt-2 border-t border-rose-200/70">
                      Ask someone to drive you. Do not drive yourself.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* ── SECTION 5: ASSESSMENT AND PREPARATION ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                Assessment and Preparation
              </h2>

              <p className="text-fluid-body text-medical-body leading-[1.75] mb-6">
                Your first visit is a consultation. The surgeon asks about your symptoms, your past illnesses, your medicines and any earlier operations. She examines you and may advise tests such as an ultrasound scan, blood tests or a CT scan.
              </p>

              <div className="bg-[#F7F1F6] p-6 sm:p-7 rounded-2xl border border-brand/15 space-y-4 mb-6">
                <h3 className="font-heading font-semibold text-lg text-medical-heading">
                  If an operation is planned, your care team will explain how to prepare. Depending on the operation, you may be asked to:
                </h3>
                <ul className="space-y-2.5">
                  {[
                    "Stop eating and drinking for a set time before surgery.",
                    "Stop or change certain medicines, such as blood thinners. Only do this on medical advice.",
                    "Stop smoking.",
                    "Arrange for someone to take you home afterwards."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                      <span className="text-fluid-body text-medical-body leading-[1.7]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-fluid-body text-medical-body leading-[1.75]">
                Keyhole surgery is done under general anaesthetic, so you are asleep and feel no pain during the operation. Tell the team about your allergies, your medicines and any earlier operations.
              </p>
            </article>

            {/* ── SECTION 6: TREATMENT OPTIONS TABLE ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                Keyhole, Open and Non-Surgical Options
              </h2>

              <p className="text-fluid-body text-medical-body leading-[1.75] mb-6">
                Surgery is not always the first step. The right choice depends on your condition and your health.
              </p>

              <div className="overflow-hidden rounded-2xl border border-[#E7E7E7] mb-6">
                <table className="w-full text-left text-sm sm:text-base">
                  <thead className="bg-[#F7F1F6] text-medical-heading font-heading font-semibold border-b border-[#E7E7E7]">
                    <tr>
                      <th className="py-3.5 px-4 sm:px-6">Approach</th>
                      <th className="py-3.5 px-4 sm:px-6">What it involves</th>
                      <th className="py-3.5 px-4 sm:px-6">When it may be chosen</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-medical-body">
                    <tr>
                      <td className="py-4 px-4 sm:px-6 font-semibold text-medical-heading align-top">Non-surgical care</td>
                      <td className="py-4 px-4 sm:px-6 align-top">Observation, medicines, diet and lifestyle advice, wound care</td>
                      <td className="py-4 px-4 sm:px-6 align-top">The problem is mild, stable or likely to settle without an operation</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 sm:px-6 font-semibold text-brand align-top">Laparoscopic (keyhole) surgery</td>
                      <td className="py-4 px-4 sm:px-6 align-top">A few small cuts, a camera and fine instruments</td>
                      <td className="py-4 px-4 sm:px-6 align-top">The condition suits this method and the patient is fit for it</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 sm:px-6 font-semibold text-medical-heading align-top">Open surgery</td>
                      <td className="py-4 px-4 sm:px-6 align-top">One larger cut</td>
                      <td className="py-4 px-4 sm:px-6 align-top">Keyhole surgery is unsuitable, or an open approach is safer</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-fluid-body text-medical-body leading-[1.75]">
                The surgeon explains the benefits, risks and alternatives of each option before you decide.
              </p>
            </article>

            {/* ── SECTION 7: WHAT HAPPENS DURING SURGERY ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                What Happens During Keyhole Surgery?
              </h2>

              <p className="text-fluid-body text-medical-body leading-[1.75] mb-6">
                The steps vary with the operation. In general:
              </p>

              <div className="space-y-3.5 mb-6">
                {[
                  "You are given a general anaesthetic and are asleep throughout.",
                  "The surgeon makes a small cut, usually near the belly button.",
                  "Gas is gently passed into the abdomen so the surgeon can see more clearly.",
                  "The laparoscope is placed through the cut, and the camera images appear on a screen.",
                  "If an operation is needed, more small cuts are made for the instruments.",
                  "At the end, the gas is released and the cuts are closed with stitches or clips and covered with a dressing."
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#E7E7E7] shadow-subtle">
                    <span className="w-7 h-7 rounded-lg bg-brand text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-fluid-body text-medical-body leading-[1.7]">{step}</span>
                  </div>
                ))}
              </div>

              <p className="text-fluid-body text-medical-body leading-[1.75]">
                A diagnostic laparoscopy, done only to look for a cause, usually takes 30 to 60 minutes. An operation to treat a condition takes longer.
              </p>
            </article>

            {/* ── SECTION 8: BENEFITS, LIMITS, RISKS & RECOVERY ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-7">
                Benefits, Limits, Risks and Recovery
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div className="p-5 sm:p-6 rounded-2xl bg-[#EDF7EE] border border-emerald-200 space-y-2.5">
                  <h3 className="font-heading font-bold text-base text-emerald-900">Possible benefits</h3>
                  <p className="text-[15px] leading-[1.7] text-emerald-800">
                    For suitable patients, compared with open surgery, keyhole surgery can mean smaller scars, less discomfort, a quicker recovery and an earlier return to normal activities. It may also lower the chance of chest problems and blood clots after surgery.
                  </p>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                  <h3 className="font-heading font-bold text-base text-medical-heading">Limits</h3>
                  <p className="text-[15px] leading-[1.7] text-medical-body">
                    Keyhole surgery does not suit everyone or every condition. The surgeon may need to change to open surgery for safety, and then recovery is like that of open surgery.
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-amber-50 border border-amber-200 space-y-3 mb-6">
                <h3 className="font-heading font-bold text-base text-amber-900">Possible risks</h3>
                <p className="text-[15px] leading-[1.7] text-amber-900">
                  Serious problems are uncommon, but they can happen. They include:
                </p>
                <ul className="space-y-1.5 text-sm text-amber-900 pl-4 list-disc">
                  <li>Needing open surgery with a larger cut.</li>
                  <li>A hernia at the site of a cut.</li>
                  <li>Damage to an organ or a blood vessel. This may not be noticed at the time and can show up in the first few days.</li>
                  <li>An allergic reaction to the anaesthetic.</li>
                  <li>Blood clots in the legs or lungs.</li>
                  <li>Bleeding or wound infection.</li>
                </ul>
                <p className="text-xs text-amber-800 italic pt-1">
                  Each operation also has risks of its own. Your surgeon explains these before you agree to treatment.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-[#F7F1F6] border border-brand/15 space-y-3 mb-6">
                <h3 className="font-heading font-bold text-base text-medical-heading">Recovery</h3>
                <p className="text-[15px] leading-[1.7] text-medical-body">
                  Recovery depends on the operation and on you. After keyhole surgery it is common to feel sick or tired, to have a sore throat, bloating, cramps, bruising around the cuts, and aching in the shoulder from the gas used during surgery. Many patients go home the same day or the next day, but this depends on the operation. NHS guidance says full recovery can take up to a few days after a diagnostic laparoscopy and up to several weeks after surgery. Your surgeon gives you clear advice on wound care, activity, driving and work.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-rose-50 border border-rose-200 space-y-3">
                <h3 className="font-heading font-bold text-base text-rose-950 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-rose-600" />
                  When to Get Help After Surgery
                </h3>
                <p className="text-sm text-rose-900 leading-[1.7]">
                  Contact your surgeon or get medical advice if you have:
                </p>
                <ul className="space-y-1.5 text-sm text-rose-900 pl-4 list-disc">
                  <li>A fever or chills.</li>
                  <li>Stomach pain that is getting worse, or a bloated abdomen.</li>
                  <li>Severe or non-stop vomiting.</li>
                  <li>Pain, swelling, bleeding, pus or redness around a wound.</li>
                  <li>Pain or swelling in one leg or calf.</li>
                  <li>A cough with blood, or more breathlessness than usual.</li>
                </ul>
                <p className="text-xs font-semibold text-rose-950 pt-1 border-t border-rose-200/70">
                  Go to an emergency department at once if you have a very fast heartbeat, chest pain, severe difficulty breathing, or you feel faint when you stand up.
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
                  { icon: <HeartPulse className="w-4 h-4" />, title: "Laparoscopic surgeon", desc: "keyhole surgery is considered where it suits the patient's condition." },
                  { icon: <ShieldCheck className="w-4 h-4" />, title: "Hospital role", desc: "Head of Surgery Department at Fauji Foundation Hospital Faisalabad." },
                  { icon: <FileText className="w-4 h-4" />, title: "Honest advice", desc: "you hear about non-surgical options, limits and risks, not only the benefits." },
                  { icon: <MapPin className="w-4 h-4" />, title: "Convenient consultations", desc: "appointments are held at Faisal Hospital and Private Clinic, People's Colony No 1, Faisalabad." }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E7E7E7] shadow-subtle space-y-2 hover:border-brand/30 transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-brand/10 flex items-center justify-center text-brand shrink-0">
                        {item.icon}
                      </span>
                      <strong className="font-heading font-semibold text-medical-heading text-[15px]">{item.title}:</strong>
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
                  "Bring earlier reports, scans and prescriptions, a list of your medicines, and details of any earlier operations.",
                  "At the consultation, the surgeon examines you, explains what she finds and discusses whether keyhole surgery, open surgery or another approach is suitable."
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
                Laparoscopic Surgery FAQs
              </h2>

              <FAQAccordion items={lapFaqs} />
            </article>

            {/* ── SECTION 12: RELATED SURGICAL SERVICES ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-7">
                Related Surgical Services
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {[
                  { slug: "/general-surgery/", title: "General surgery", desc: "the wider range of conditions Dr. Hira Nawaz assesses." },
                  { slug: "/hernia-surgery/", title: "Hernia surgery", desc: "symptoms, repair options and recovery." },
                  { slug: "/gallbladder-surgery/", title: "Gallbladder surgery", desc: "gallstones, tests and treatment." }
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
                    alt="Dr. Hira Nawaz – Female Laparoscopic Surgeon Faisalabad"
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
            Have questions about your symptoms or treatment options? Contact Dr. Hira Nawaz to arrange a surgical consultation at Faisal Hospital or Private Clinic, Faisalabad.
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
