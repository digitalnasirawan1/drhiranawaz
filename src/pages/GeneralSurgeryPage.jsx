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
  ChevronRight,
  Award,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import SEOHead from '../components/SEOHead';
import FAQAccordion from '../components/FAQAccordion';

export default function GeneralSurgeryPage() {
  // B5: Approved FAQs
  const generalFaqs = [
    {
      question: "What does a general surgeon treat?",
      answer: "A general surgeon treats many common problems. These include hernias, gallstones, appendix problems, piles, fissures, fistulas, abscesses, skin lumps, breast lumps and thyroid swellings. She first finds the cause, then explains whether you need surgery or another kind of care."
    },
    {
      question: "When should I see a general surgeon?",
      answer: "See one if you have a new lump, a bulge in the groin or belly, ongoing belly pain, bleeding from the back passage or a wound that will not heal. If you have sudden severe pain, repeated vomiting or heavy bleeding, go to a hospital emergency department instead of waiting for an appointment."
    },
    {
      question: "Does every general surgery condition need an operation?",
      answer: "No. Many problems are treated with monitoring, medicine or simple care. Some need a small procedure. An operation is advised only when it is the best choice for your case. The doctor will explain your options after examining you."
    },
    {
      question: "What is the difference between general and laparoscopic surgery?",
      answer: "General surgery is the specialty. Laparoscopic surgery is one technique that may be used within it, with small cuts and a camera. Whether keyhole surgery suits you depends on your condition and your health."
    },
    {
      question: "What happens at the first surgical consultation?",
      answer: "The doctor listens to your story, asks about your health and medicines, and examines you if suitable. She may suggest tests. Then she explains what she has found and what your options are. You can ask any question."
    },
    {
      question: "Will I need tests before surgery?",
      answer: "It depends on your problem, your age and your general health. Some people need blood tests or a scan, such as an ultrasound. Some need few or no tests. The doctor will tell you which tests are useful for you and why."
    },
    {
      question: "How long does recovery take after general surgery?",
      answer: "There is no single answer. Recovery depends on the condition, the type of operation and your general health. Keyhole surgery is often quicker to recover from than open surgery, but this varies. Your surgeon will explain what to expect for you."
    },
    {
      question: "How can I book an appointment with Dr. Hira Nawaz?",
      answer: "Message the clinic on WhatsApp at 0321 1836189 (https://wa.me/923211836189) or call 0321 1836189. Consultations are held at Faisal Hospital, Monday to Saturday, from 4:00 PM to 9:00 PM."
    }
  ];

  // S03: 13 Approved Conditions & Treatments
  const conditions = [
    {
      title: "Hernia Surgery",
      slug: "/hernia-surgery/",
      text: "A hernia is a bulge that appears when tissue pushes through a weak spot in the muscle wall, often in the groin. A check-up shows whether it needs repair now, later or only watching. The linked page explains the signs, the repair options in general terms and when to get urgent help.",
      cta: "Read About Hernia Surgery"
    },
    {
      title: "Gallbladder Surgery",
      slug: "/gallbladder-surgery/",
      text: "The gallbladder is a small organ under the liver, and stones can form inside it. Many stones cause no trouble, but repeated pain needs assessment. The page explains symptoms, how gallstones are found and when removing the gallbladder is considered.",
      cta: "Learn About Gallbladder Surgery"
    },
    {
      title: "Appendix Surgery",
      slug: "/appendix-surgery/",
      text: "Appendicitis is a swollen, infected appendix. It needs prompt medical assessment because it can get worse quickly. The page explains the usual warning signs and what treatment may involve.",
      cta: "See Appendix Surgery Details"
    },
    {
      title: "Thyroid Surgery",
      slug: "/thyroid-surgery/",
      text: "The thyroid is a small gland in the front of the neck. A lump or swelling there needs a proper check, and most lumps are not cancer. The page explains how thyroid problems are assessed and when surgery is one of the options.",
      cta: "Understand Thyroid Surgery"
    },
    {
      title: "Breast Surgery",
      slug: "/breast-surgery/",
      text: "Most breast lumps are not cancer, but every new lump or change should be examined. Assessment often combines an examination, imaging and sometimes a needle test. The page explains these steps and when surgery may be advised.",
      cta: "Read About Breast Surgery"
    },
    {
      title: "Hemorrhoids Surgery",
      slug: "/hemorrhoids-surgery/",
      text: "Hemorrhoids, or piles, are swollen veins in or around the back passage. Many settle with simple measures or small treatments. The page explains symptoms, why bleeding should be checked and when surgery is considered.",
      cta: "Learn About Piles Treatment"
    },
    {
      title: "Fistula in Ano Surgery",
      slug: "/fistula-in-ano-surgery/",
      text: "An anal fistula is a small tunnel between the back passage and the skin nearby, often after an abscess. It rarely heals alone, so assessment matters. The page explains why the tunnel's position decides the treatment.",
      cta: "See Fistula Treatment"
    },
    {
      title: "Lipoma Removal",
      slug: "/lipoma-removal/",
      text: "A lipoma is a soft, slow-growing lump of fat under the skin and is usually harmless. A check confirms what the lump is. The page explains when removal may be discussed.",
      cta: "Read About Lipoma Removal"
    },
    {
      title: "Sebaceous Cyst Removal",
      slug: "/sebaceous-cyst-removal/",
      text: "A sebaceous cyst is a common skin bump filled with a soft, oily material. It often needs no treatment, but it can become sore or infected. The page explains why you should not squeeze it and when to seek help.",
      cta: "Learn About Cyst Removal"
    },
    {
      title: "Diabetic Foot Treatment",
      slug: "/diabetic-foot-treatment/",
      text: "Diabetes can lessen feeling and blood flow in the feet, so wounds may go unnoticed and heal slowly. Early assessment helps prevent serious problems. The page explains the warning signs and why a foot wound should not wait.",
      cta: "Read About Diabetic Foot Care"
    },
    {
      title: "Abscess Drainage",
      slug: "/abscess-drainage/",
      text: "An abscess is a painful swelling full of pus caused by infection. Some small ones settle, but many need a small procedure so the pus can drain. The page explains the warning signs and what drainage involves in general terms.",
      cta: "See Abscess Treatment"
    },
    {
      title: "Anal Fissure Treatment",
      slug: "/anal-fissure-treatment/",
      text: "An anal fissure is a small tear in the skin of the back passage that hurts when you pass stool. Many heal with softer stools and simple treatment. The page explains the symptoms and when other treatment is considered.",
      cta: "Learn About Fissure Treatment"
    },
    {
      title: "Varicose Veins Treatment",
      slug: "/varicose-veins-treatment/",
      text: "Varicose veins are swollen, twisted veins, most often in the legs, and many need no treatment. A check-up helps when they cause pain, swelling or skin changes. The page explains how options depend on assessment.",
      cta: "Understand Varicose Vein Care"
    }
  ];

  // Related services for sidebar (top 6)
  const sidebarServices = conditions.slice(0, 6);

  // Approved Schema JSON-LD (MedicalWebPage + Physician + FAQPage)
  const generalSurgerySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["WebPage", "MedicalWebPage"],
        "@id": "https://drhiranawaz.com/general-surgery/#webpage",
        "url": "https://drhiranawaz.com/general-surgery/",
        "name": "General Surgery in Faisalabad | Conditions and Treatment | Dr. Hira Nawaz",
        "description": "Looking for a general surgeon in Faisalabad? Learn what general surgery covers, how problems are assessed and how to book a consultation with Dr. Hira Nawaz.",
        "isPartOf": { "@id": "https://drhiranawaz.com/#website" },
        "about": { "@id": "https://drhiranawaz.com/#physician" },
        "specialty": "https://schema.org/Surgical",
        "inLanguage": "en-PK"
      },
      {
        "@type": "Physician",
        "@id": "https://drhiranawaz.com/#physician",
        "name": "Dr. Hira Nawaz",
        "url": "https://drhiranawaz.com/",
        "telephone": "+923211836189",
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
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://drhiranawaz.com/general-surgery/#faq",
        "mainEntity": generalFaqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <SEOHead 
        customTitle="General Surgery in Faisalabad | Conditions and Treatment | Dr. Hira Nawaz"
        customDescription="Looking for a general surgeon in Faisalabad? Learn what general surgery covers, how problems are assessed and how to book a consultation with Dr. Hira Nawaz."
        customSchema={generalSurgerySchema}
      />

      {/* ═══════════════════════════════════════════════════════
          B3: HERO SECTION
      ═══════════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-b from-[#F7F1F6] via-white to-white overflow-hidden border-b border-[#E7E7E7]">
        {/* Subtle decorative ambience */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand/5 blur-3xl" />
          <div className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-brand/4 blur-2xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* LEFT: Text & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-1">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-soft border border-brand/15 text-brand text-xs sm:text-sm font-semibold tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>General Surgery</span>
              </div>

              {/* H1 */}
              <h1 className="font-heading text-fluid-h1 font-bold text-medical-heading tracking-tight leading-[1.15]">
                Female General Surgeon <span className="text-brand">in Faisalabad</span>
              </h1>

              {/* Supporting copy */}
              <div className="space-y-4 text-fluid-body text-medical-body leading-[1.75] max-w-2xl mx-auto lg:mx-0">
                <p>
                  Dr. Hira Nawaz is a female general and laparoscopic surgeon who sees patients at Faisal Hospital in Faisalabad. General surgery covers the assessment and treatment of many health problems, from hernias and gallstones to lumps and problems near the back passage. Surgery is not always needed. At a consultation, the doctor finds the cause first and then explains your options.
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
                  Book Appointment on WhatsApp
                </a>
                <a
                  href="tel:+923211836189"
                  className="inline-flex items-center px-6 py-3.5 rounded-xl text-base font-semibold text-medical-heading bg-white border border-[#E7E7E7] hover:bg-brand-soft shadow-subtle transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2 text-brand" />
                  Call for Appointment
                </a>
              </div>
            </div>

            {/* RIGHT: Doctor portrait */}
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-18">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 xl:gap-14 items-start">

          {/* ─────────────────────────────────────────────────
              LEFT COLUMN: Main Content (S01–S10 + FAQ + CTA)
          ───────────────────────────────────────────────── */}
          <div className="min-w-0 space-y-14 md:space-y-16">

            {/* ── S01. WHAT IS GENERAL SURGERY? ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                What Is General Surgery?
              </h2>

              <div className="space-y-4 text-fluid-body text-medical-body leading-[1.75]">
                <p>
                  General surgery is a medical specialty. A general surgeon looks after many common health problems. These include problems of the belly and gut, the groin and abdominal wall, the back passage, the breast, the thyroid gland and the skin.
                </p>
                <p>
                  A general surgeon does more than operate. She first listens to your story and examines you. Then she works out what is wrong and what choices you have.
                </p>
                <p>
                  Depending on the problem, the plan may be:
                </p>
                <ul className="space-y-2.5 pl-2">
                  {[
                    "watching the problem over time (monitoring);",
                    "medicines or simple care;",
                    "a small procedure;",
                    "an operation."
                  ].map((plan, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                      <span>{plan}</span>
                    </li>
                  ))}
                </ul>
                <p className="pt-2">
                  Some people need only advice and reassurance. Others need treatment. The right plan depends on you.
                </p>
              </div>
            </article>

            {/* ── S02. WHEN SHOULD YOU SEE A GENERAL SURGEON? ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                When Should You See a General Surgeon?
              </h2>

              <p className="text-fluid-body text-medical-body leading-[1.75] mb-6">
                You do not need to know what is wrong before you book. If a problem worries you, a check-up can help. Common reasons to see a general surgeon include:
              </p>

              <ul className="space-y-3 mb-6 pl-2">
                {[
                  "A new or growing lump under the skin or in the breast or neck.",
                  "A bulge in the groin or belly that may be a hernia.",
                  "Pain in the upper belly that comes and goes, which may be linked to the gallbladder.",
                  "Bowel or back-passage problems that do not settle, such as bleeding, pain or a discharge.",
                  "A swelling at the front of the neck, which may be linked to the thyroid.",
                  "A change in the breast, such as a lump, thickening or nipple discharge.",
                  "A wound that is slow to heal, or a painful swelling that may contain pus."
                ].map((symptom, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                    <span className="text-fluid-body text-medical-body leading-[1.7]">{symptom}</span>
                  </li>
                ))}
              </ul>

              <p className="text-fluid-body text-medical-body leading-[1.75] mb-8">
                These signs can have many causes, and only an examination can tell what is behind them.
              </p>

              {/* Urgent Care / Emergency Notice */}
              <div className="p-5 sm:p-6 rounded-2xl bg-rose-50 border border-rose-200 shadow-subtle mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-5 h-5 text-rose-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-lg text-rose-950">
                      When not to wait for a routine appointment
                    </h3>
                    <p className="text-[15px] text-rose-900 leading-[1.7]">
                      Some symptoms need urgent care. Go to the nearest hospital emergency department if you have sudden or severe belly pain, repeated vomiting, heavy bleeding, a hard and painful lump that cannot be pushed back, a painful swelling with fever or spreading redness, or a foot wound with redness, heat or swelling if you have diabetes. This website cannot give emergency care.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/923211836189"
                target="_blank"
                rel="noopener noreferrer"
                className="button-sheen inline-flex items-center px-6 py-3 rounded-xl text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#653C61] to-[#4D2B49] hover:from-[#4D2B49] hover:to-[#3A1E37] shadow-glow-brand transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 mr-2 fill-current" />
                Book Appointment on WhatsApp
              </a>
            </article>

            {/* ── S03. CONDITIONS AND TREATMENTS (13 CARDS) ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-3">
                Conditions and Treatments
              </h2>
              <p className="text-fluid-body text-medical-secondary leading-[1.7] mb-8">
                Select a card to read more. Each page explains the condition in simple words. Not every patient needs an operation, and your own plan depends on your check-up.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {conditions.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E7E7E7] shadow-subtle hover:border-brand/40 hover:shadow-card transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-2.5">
                      <div className="w-8 h-8 rounded-xl bg-brand/10 flex items-center justify-center text-brand font-bold text-xs">
                        {idx + 1}
                      </div>
                      <h3 className="font-heading font-bold text-lg text-medical-heading">
                        {item.title}
                      </h3>
                      <p className="text-sm text-medical-body leading-[1.7]">
                        {item.text}
                      </p>
                    </div>

                    <div className="pt-4 mt-2 border-t border-slate-100">
                      <Link
                        to={item.slug}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand hover:text-brand-hover transition-colors"
                      >
                        {item.cta} <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center sm:text-left">
                <Link
                  to="/services/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-brand bg-brand-soft border border-brand/20 hover:bg-brand/10 transition-colors"
                >
                  View All Surgical Services <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </article>

            {/* ── S04. HOW ARE SURGICAL CONDITIONS DIAGNOSED? ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                How Are Surgical Conditions Diagnosed?
              </h2>

              <p className="text-fluid-body text-medical-body leading-[1.75] mb-6">
                Finding the cause usually starts with a conversation and an examination. The steps may include:
              </p>

              <div className="space-y-3.5 mb-6">
                {[
                  { label: "Your story", text: "The doctor asks about your symptoms, when they began and what makes them better or worse." },
                  { label: "Your medical history", text: "She asks about past illnesses, earlier operations, medicines and allergies." },
                  { label: "An examination", text: "She examines the part of the body that troubles you, if this is suitable." },
                  { label: "Tests, if they are needed", text: "These may include blood tests or a scan. An ultrasound scan is often used for lumps, hernias and gallstones. A breast lump is usually assessed with an examination, imaging and sometimes a needle test." },
                  { label: "A talk about your options", text: "She explains what she has found and what could be done." }
                ].map((step, idx) => (
                  <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E7E7E7] shadow-subtle flex items-start gap-3.5">
                    <span className="w-7 h-7 rounded-lg bg-brand/10 text-brand font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div className="text-fluid-body text-medical-body leading-[1.7]">
                      <strong className="text-medical-heading font-semibold">{step.label}:</strong> {step.text}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-fluid-body text-medical-body leading-[1.75]">
                Not every patient needs the same tests. Some problems can be recognised by examination alone. The doctor will explain why a test is suggested and what it can show.
              </p>
            </article>

            {/* ── S05. GENERAL SURGERY TREATMENT OPTIONS ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                Treatment Options in General Surgery
              </h2>

              <p className="text-fluid-body text-medical-body leading-[1.75] mb-6">
                The right treatment depends on your condition and your check-up. These are the main kinds of plan:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    title: "Monitoring",
                    desc: "Some problems are safe to watch. The doctor checks them again over time and tells you what changes to look out for."
                  },
                  {
                    title: "Medicines and simple care",
                    desc: "Some conditions improve with medicines, changes in diet or home care. Always follow your doctor's advice about medicines."
                  },
                  {
                    title: "Minor procedures",
                    desc: "Some problems can be treated with a small procedure, such as draining an abscess."
                  },
                  {
                    title: "Surgery",
                    desc: "An operation is advised when it is the best way to treat the problem or to prevent it from getting worse."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white border border-[#E7E7E7] shadow-subtle space-y-2">
                    <h3 className="font-heading font-semibold text-base text-medical-heading">
                      {item.title}
                    </h3>
                    <p className="text-sm text-medical-body leading-[1.7]">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-amber-50 border border-amber-200 mb-6 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <p className="text-[15px] text-amber-900 leading-[1.7]">
                  Some problems need urgent assessment, such as signs of appendicitis or a hernia that cannot be pushed back. If you have severe or fast-worsening symptoms, go to the nearest hospital emergency department.
                </p>
              </div>

              <p className="text-sm text-medical-secondary italic leading-relaxed">
                This page gives general information. It cannot tell you what is right for you.
              </p>
            </article>

            {/* ── S06. GENERAL SURGERY AND LAPAROSCOPIC SURGERY ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                General Surgery and Laparoscopic (Keyhole) Surgery
              </h2>

              <div className="space-y-4 text-fluid-body text-medical-body leading-[1.75] mb-6">
                <p>
                  General surgery is a medical specialty. It describes the kind of problems a surgeon treats. Laparoscopic surgery, also called keyhole surgery, is a technique. The surgeon makes small cuts and uses a thin camera and special tools. It can be used for some operations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2.5">
                  <h3 className="font-heading font-bold text-base text-emerald-950">
                    Possible benefits
                  </h3>
                  <p className="text-sm text-emerald-900 leading-[1.7]">
                    For some patients, keyhole surgery means smaller scars, less pain and a quicker return to normal life than open surgery.
                  </p>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-purple-50 border border-purple-200 space-y-2.5">
                  <h3 className="font-heading font-bold text-base text-purple-950">
                    Possible limits
                  </h3>
                  <p className="text-sm text-purple-900 leading-[1.7]">
                    Keyhole surgery is not suitable for everyone or for every operation. Earlier surgery, other health problems or an emergency can make open surgery safer. Sometimes a surgeon has to change to open surgery for safety. No result is guaranteed.
                  </p>
                </div>
              </div>

              <p className="text-fluid-body text-medical-body leading-[1.75] mb-4">
                Your surgeon will explain which method is best for you after your check-up.
              </p>

              <Link
                to="/laparoscopic-surgery/"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
              >
                Learn About Laparoscopic Surgery <ChevronRight className="w-4 h-4" />
              </Link>
            </article>

            {/* ── S07. BENEFITS, RISKS AND RECOVERY ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                Benefits, Risks and Recovery
              </h2>

              <div className="space-y-4 text-fluid-body text-medical-body leading-[1.75]">
                <p>
                  Surgery can help treat many conditions. It also has risks. Possible problems include pain, bleeding, wound infection, problems with the anaesthetic, blood clots and damage to nearby parts of the body. Serious problems are not common, but no operation is completely risk-free.
                </p>
                <p>
                  Recovery is different for each person. It depends on your condition, the operation you have and your general health. Some people go home on the same day. Others need more time in hospital. Your surgeon will explain what to expect for your own operation.
                </p>
                <p className="p-4 rounded-xl bg-[#F7F1F6] border border-brand/15 text-medical-heading font-medium">
                  No doctor can promise a pain-free operation, a scar-free result or a fixed recovery time. Before any operation, ask about the benefits, the risks and the other choices you have, including not having surgery.
                </p>
              </div>
            </article>

            {/* ── S08. WHY CONSULT DR. HIRA NAWAZ? ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-6">
                Why Consult Dr. Hira Nawaz?
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-5 rounded-2xl bg-white border border-[#E7E7E7] shadow-subtle space-y-1.5">
                  <div className="flex items-center gap-2 text-brand font-semibold text-sm">
                    <Activity className="w-4 h-4" /> Female surgeon
                  </div>
                  <h3 className="font-heading font-bold text-base text-medical-heading">
                    Female Laparoscopic and General Surgeon
                  </h3>
                  <p className="text-sm text-medical-secondary leading-relaxed">
                    Some patients feel more at ease talking about their health with a female surgeon.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#E7E7E7] shadow-subtle space-y-1.5">
                  <div className="flex items-center gap-2 text-brand font-semibold text-sm">
                    <Award className="w-4 h-4" /> Specialist Degrees
                  </div>
                  <h3 className="font-heading font-bold text-base text-medical-heading">
                    MBBS, FCPS (General Surgery)
                  </h3>
                  <p className="text-sm text-medical-secondary leading-relaxed">
                    MBBS is a medical degree. FCPS is a postgraduate qualification for specialist doctors in Pakistan.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#E7E7E7] shadow-subtle space-y-1.5">
                  <div className="flex items-center gap-2 text-brand font-semibold text-sm">
                    <ShieldCheck className="w-4 h-4" /> Hospital Position
                  </div>
                  <h3 className="font-heading font-bold text-base text-medical-heading">
                    Head of Surgery Department
                  </h3>
                  <p className="text-sm text-medical-secondary leading-relaxed">
                    Fauji Foundation Hospital Faisalabad. This is her professional position.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#E7E7E7] shadow-subtle space-y-1.5">
                  <div className="flex items-center gap-2 text-brand font-semibold text-sm">
                    <MapPin className="w-4 h-4" /> Clinical Practice
                  </div>
                  <h3 className="font-heading font-bold text-base text-medical-heading">
                    Consultations at Faisal Hospital
                  </h3>
                  <p className="text-sm text-medical-secondary leading-relaxed">
                    This is where she sees patients.
                  </p>
                </div>
              </div>

              <Link
                to="/about/"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
              >
                About Dr. Hira Nawaz <ChevronRight className="w-4 h-4" />
              </Link>
            </article>

            {/* ── S09. WHAT TO EXPECT AT YOUR CONSULTATION ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-6">
                What to Expect at Your Consultation
              </h2>

              <div className="space-y-4 mb-8">
                {[
                  {
                    step: "Step 1",
                    title: "Arrange an appointment",
                    desc: "Send a WhatsApp message or call 0321 1836189. The team will help you choose a suitable time."
                  },
                  {
                    step: "Step 2",
                    title: "Explain your symptoms and medical history",
                    desc: "Tell the doctor about your problem, your past health and your medicines. Bring any reports or scans you have."
                  },
                  {
                    step: "Step 3",
                    title: "Discuss examination findings and possible tests",
                    desc: "The doctor may examine you and explain what she finds. She may suggest tests if they are needed."
                  },
                  {
                    step: "Step 4",
                    title: "Understand your treatment options and next steps",
                    desc: "She explains your choices, including whether you need an operation at all. You can ask questions before you decide."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white border border-[#E7E7E7] shadow-subtle flex items-start gap-4">
                    <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#653C61] to-[#4D2B49] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      {idx + 1}
                    </span>
                    <div className="space-y-1">
                      <div className="text-xs uppercase tracking-wider font-bold text-brand">{item.step}</div>
                      <h3 className="font-heading font-bold text-base text-medical-heading">{item.title}</h3>
                      <p className="text-fluid-body text-medical-body leading-[1.7]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://wa.me/923211836189"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-sheen inline-flex items-center px-6 py-3 rounded-xl text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#653C61] to-[#4D2B49] hover:from-[#4D2B49] hover:to-[#3A1E37] shadow-glow-brand transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 mr-2 fill-current" />
                  Book Appointment on WhatsApp
                </a>
                <a
                  href="tel:+923211836189"
                  className="inline-flex items-center px-6 py-3 rounded-xl text-sm sm:text-base font-semibold text-medical-heading bg-white border border-[#E7E7E7] hover:bg-brand-soft shadow-subtle transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2 text-brand" />
                  Call for Appointment
                </a>
              </div>
            </article>

            {/* ── S10. CONSULTATION LOCATION AND HOURS ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-6">
                Consultation Location and Hours
              </h2>

              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7E7E7] shadow-card space-y-6">
                <div className="space-y-2">
                  <p className="text-sm font-semibold uppercase tracking-wider text-brand">Consultation Address</p>
                  <h3 className="font-heading font-bold text-2xl text-medical-heading">
                    Faisal Hospital
                  </h3>
                  <p className="text-fluid-body text-medical-body">
                    Plot 547, Muhammadia Colony Block A, People&apos;s Colony No 1, Faisalabad, Pakistan
                  </p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-[#E7E7E7]">
                  <div className="bg-[#F7F1F6] font-semibold px-4 py-2.5 text-medical-heading border-b border-[#E7E7E7] flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand" />
                    <span>Consultation Hours</span>
                  </div>
                  <div className="divide-y divide-slate-100 p-4 space-y-2 text-fluid-body text-medical-body">
                    <div className="flex justify-between items-center">
                      <span>Monday to Saturday:</span>
                      <span className="font-semibold text-medical-heading">4:00 PM – 9:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 text-rose-700">
                      <span>Sunday:</span>
                      <span className="font-bold">Closed</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="https://maps.app.goo.gl/UfRntfLaEcPaeVAU7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-brand bg-brand-soft border border-brand/20 hover:bg-brand/10 transition-colors"
                  >
                    <MapPin className="w-4 h-4" /> Get Directions <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <Link
                    to="/location/"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-medical-heading hover:text-brand transition-colors px-4 py-2.5"
                  >
                    View Location Details <ChevronRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:+923211836189"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-medical-heading hover:text-brand transition-colors px-4 py-2.5"
                  >
                    <Phone className="w-4 h-4 text-brand" /> 0321 1836189
                  </a>
                </div>
              </div>
            </article>

            {/* ── B5. FAQS ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-6">
                General Surgery Questions
              </h2>

              <FAQAccordion items={generalFaqs} />

              <div className="mt-6 text-center sm:text-left">
                <Link
                  to="/faqs/"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
                >
                  See More Questions and Answers <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </article>

            {/* ── FINAL IN-CONTENT CTA ── */}
            <article className="rounded-3xl bg-gradient-to-br from-[#4D2B49] via-[#653C61] to-[#3A1E37] text-white p-7 sm:p-10 shadow-elevated text-center space-y-6">
              <h2 className="font-heading text-fluid-h2 font-bold tracking-tight">
                Book a General Surgery Consultation
              </h2>

              <p className="text-fluid-body text-purple-100 max-w-2xl mx-auto leading-[1.75]">
                If you have a lump, a pain or another problem that worries you, you can talk to Dr. Hira Nawaz about it. Send a WhatsApp message or call the clinic, and the team will help you find a time at Faisal Hospital.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href="https://wa.me/923211836189"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-sheen inline-flex items-center px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-elevated transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 mr-2 fill-current" />
                  Book Appointment on WhatsApp
                </a>
                <a
                  href="tel:+923211836189"
                  className="inline-flex items-center px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2 text-rose-200" />
                  Call for Appointment
                </a>
              </div>
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
                      <span>Faisal Hospital, Faisalabad</span>
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
                    Book on WhatsApp
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
                    <span>Faisal Hospital, People&apos;s Colony No 1</span>
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

              {/* ── Sidebar Card 4: Clinic Location ── */}
              <div className="bg-[#F7F1F6] rounded-2xl p-5 border border-brand/15 space-y-3">
                <h3 className="font-heading font-semibold text-sm text-medical-heading flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand" />
                  Consultation Location
                </h3>
                <div className="space-y-1.5 text-xs text-medical-secondary">
                  <strong className="text-medical-heading block font-semibold">Faisal Hospital:</strong>
                  <p>Plot 547, Muhammadia Colony Block A, People&apos;s Colony No 1, Faisalabad</p>
                  <p className="font-medium text-medical-heading pt-1">Mon – Sat: 4:00 PM – 9:00 PM</p>
                  <a
                    href="https://maps.app.goo.gl/UfRntfLaEcPaeVAU7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-brand hover:underline pt-1"
                  >
                    Get Directions <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          </aside>{/* END SIDEBAR */}

        </div>
      </div>{/* END MAIN WRAPPER */}
    </>
  );
}
