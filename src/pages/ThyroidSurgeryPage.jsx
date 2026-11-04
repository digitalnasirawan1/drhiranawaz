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
  ChevronRight, 
  Star, 
  Award
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import SEOHead from '../components/SEOHead';
import FAQAccordion from '../components/FAQAccordion';

export default function ThyroidSurgeryPage() {
  // Section 11: Approved FAQs
  const thyroidFaqs = [
    {
      question: "Does every thyroid nodule or goitre need surgery?",
      answer: "No. Most goitres are small and cause no problems, and many nodules are harmless. These may only need monitoring. Surgery is considered when a lump presses on the windpipe or food pipe, when tests show it may be cancer or are unclear, when an overactive thyroid cannot be controlled, or when a lump keeps coming back. Your surgeon explains the reasons for her advice."
    },
    {
      question: "Is a lump in the neck usually cancer?",
      answer: "No. Most neck lumps, including most thyroid lumps, are not cancer. But any new lump should be checked, because only an examination and tests can tell what it is. A lump that feels firm, does not move easily under the skin, or keeps growing needs attention sooner."
    },
    {
      question: 'What does "thyroid ka operation" involve?',
      answer: "Thyroid ka operation means an operation to remove part or all of the thyroid gland. It is done under general anaesthetic through a horizontal cut in the neck. The surgeon removes half the gland (lobectomy) or the whole gland (total thyroidectomy), depending on your condition. Your surgeon explains which one suits you."
    },
    {
      question: "What types of thyroid surgery are there?",
      answer: "The main types are lobectomy (half of the thyroid), near-total thyroidectomy (most of it), total thyroidectomy (all of it) and isthmusectomy (the narrow middle part). The choice depends on your tests, your symptoms and your general health."
    },
    {
      question: "Will I need medicine after thyroid surgery?",
      answer: "After the whole thyroid is removed, you need thyroid hormone tablets (levothyroxine) every day for life, and your dose is adjusted by blood tests. After half is removed, you may need them if the rest of the gland cannot make enough. Some people also take calcium or vitamin D tablets for a short time. Your surgeon tells you what applies to you."
    },
    {
      question: "Will my voice change after thyroid surgery?",
      answer: "Most people do not have lasting voice problems. The nerves for the voice lie close to the thyroid, so some people notice a hoarse or weak voice for a few weeks or months, and a lasting change is uncommon. If your voice matters for your work, tell your surgeon before surgery."
    },
    {
      question: "How long does recovery take?",
      answer: "It varies. Many patients stay one night in hospital. You may feel tired for up to a month. Time off work is often about two weeks after a total thyroidectomy and about two to four weeks after a lobectomy, depending on your job. Your surgeon gives clear advice about wound care, activity and follow-up."
    },
    {
      question: "Is there a female surgeon in Faisalabad for thyroid and neck lump problems?",
      answer: "Yes. Dr. Hira Nawaz is a female general and laparoscopic surgeon in Faisalabad. She holds MBBS and FCPS (General Surgery) qualifications and consults at Faisal Hospital and Private Clinic. Call 0321 1836189 or send a WhatsApp message to ask about appointment times. Consultations are held Monday to Saturday, 4:00 PM to 9:00 PM, and the clinic is closed on Sunday. Opening WhatsApp does not confirm a booking. Your appointment is set once a time is agreed with you."
    }
  ];

  // Related services for sidebar
  const sidebarServices = [
    { title: "General surgery", slug: "/general-surgery/" },
    { title: "Breast surgery", slug: "/breast-surgery/" },
    { title: "Lipoma removal", slug: "/lipoma-removal/" },
    { title: "Hernia surgery", slug: "/hernia-surgery/" },
    { title: "Gallbladder surgery", slug: "/gallbladder-surgery/" },
    { title: "Laparoscopic surgery", slug: "/laparoscopic-surgery/" }
  ];

  // Approved Schema JSON-LD
  const thyroidSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://drhiranawaz.com/thyroid-surgery/#webpage",
        "url": "https://drhiranawaz.com/thyroid-surgery/",
        "name": "Thyroid Surgery in Faisalabad | Dr. Hira Nawaz",
        "inLanguage": "en",
        "about": [
          { "@type": "MedicalCondition", "name": "Goitre" },
          { "@id": "https://drhiranawaz.com/#physician" }
        ]
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
        customTitle="Thyroid Surgery in Faisalabad | Dr. Hira Nawaz"
        customDescription="Neck lump or thyroid swelling? Learn about thyroid nodules, goitre, surgery risks and recovery. Consult female surgeon Dr. Hira Nawaz in Faisalabad."
        customSchema={thyroidSchema}
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
                Thyroid Surgery <span className="text-brand">in Faisalabad</span>
              </h1>

              <div className="space-y-4 text-fluid-body text-medical-body leading-[1.75] max-w-2xl mx-auto lg:mx-0">
                <p>
                  A lump or swelling at the front of the neck can be worrying. Most thyroid lumps are not serious, and many need no operation. But every new neck lump should be checked by a doctor, so you know what it is and what, if anything, needs to be done.
                </p>
                <p>
                  Dr. Hira Nawaz is a female general and laparoscopic surgeon in Faisalabad. She holds MBBS and FCPS (General Surgery) qualifications and is Head of Surgery Department at Fauji Foundation Hospital Faisalabad. She consults at Faisal Hospital and Private Clinic.
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

            {/* RIGHT: Image */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-brand/20 to-brand/5 blur-sm" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-brand/20 shadow-card aspect-[4/4.5] w-full max-w-sm bg-white p-1.5">
                  <img
                    src="/images/services/female-general-surgeon-dr-hira-nawaz-faisalabad.jpg"
                    alt="Thyroid surgery consultation with Dr. Hira Nawaz in Faisalabad"
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

            {/* ── SECTION 2: WHAT IS THE THYROID GLAND ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                What Is the Thyroid Gland?
              </h2>

              <div className="space-y-4 text-fluid-body text-medical-body leading-[1.75]">
                <p>
                  The thyroid is a small, butterfly-shaped gland at the front of the neck, in front of the windpipe. It makes hormones, mainly thyroxine, which control how fast your body uses energy. If it makes too much, you have an overactive thyroid. If it makes too little, you have an underactive thyroid.
                </p>
                <p className="font-semibold text-medical-heading pt-2">
                  Common thyroid problems that may need a surgeon's opinion include:
                </p>
                <ul className="space-y-2.5 pl-2">
                  {[
                    { title: "Goitre (also spelled goiter)", desc: "a swollen thyroid. It shows as a swelling at the lower front of the neck, which is usually painless." },
                    { title: "Thyroid nodules", desc: "lumps within the thyroid. They are very common, and most are harmless." },
                    { title: "Thyroid cysts", desc: "fluid-filled lumps that can come back." },
                    { title: "Overactive thyroid conditions", desc: "such as Graves' disease, that do not settle with medicine." },
                    { title: "Thyroid cancer", desc: "which is much less common than harmless lumps." }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-2.5" />
                      <span>
                        <strong className="text-medical-heading">{item.title}:</strong> {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* ── SECTION 3: SYMPTOMS & WARNING SIGNS ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                Thyroid Symptoms
              </h2>

              <p className="text-fluid-body text-medical-body leading-[1.7] mb-6">
                The main sign is a swelling or lump at the front of the neck. It can feel smooth or lumpy, and may be on one side only. Other symptoms can include:
              </p>

              <ul className="space-y-3 mb-6">
                {[
                  "A cough that does not go away.",
                  "A hoarse voice or a change in your voice.",
                  "A feeling that something is stuck in your throat.",
                  "Difficulty swallowing.",
                  "A wheezing sound when you breathe, or difficulty breathing."
                ].map((symptom, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                    <span className="text-fluid-body text-medical-body leading-[1.7]">{symptom}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-4 text-fluid-body text-medical-body leading-[1.75] mb-8">
                <p>
                  If the thyroid is overactive, you may also notice weight loss, a fast heartbeat, sweating and shaking. If it is underactive, you may feel tired, cold and constipated, and gain weight.
                </p>
                <p className="font-medium text-medical-heading">
                  A neck lump is more likely to need urgent attention if it feels firm, does not move easily under the skin, or keeps getting bigger.
                </p>
              </div>

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
                      Go to the nearest hospital emergency department now if you have difficulty breathing, or a wheezing noise when you breathe, with a neck swelling. Ask someone to take you.
                    </p>
                    <p className="text-[15px] text-rose-900 leading-[1.7] pt-2 border-t border-rose-200/70">
                      See a doctor soon, without waiting for a routine slot, if you have a lump that is growing quickly, a voice change that lasts more than a few weeks, or trouble swallowing.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* ── SECTION 4: CAUSES AND RISK FACTORS ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                Causes and Risk Factors
              </h2>

              <p className="text-fluid-body text-medical-body leading-[1.75] mb-6">
                A swollen thyroid can have many causes:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                {[
                  "An overactive thyroid (hyperthyroidism) or an underactive thyroid (hypothyroidism).",
                  "Harmless lumps (nodules) in the gland.",
                  "Hormone changes during puberty, pregnancy or the menopause.",
                  "An inflamed thyroid (thyroiditis).",
                  "An immune condition such as Graves' disease.",
                  "Not enough iodine in the diet.",
                  "Thyroid cancer, which is rare."
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-[#E7E7E7]">
                    <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                    <span className="text-sm text-medical-body leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-fluid-body text-medical-body leading-[1.75]">
                Often the exact cause is not clear. Only tests can tell what is happening inside the gland.
              </p>
            </article>

            {/* ── SECTION 5: DIAGNOSIS & EVALUATION ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                How Are Thyroid Problems Diagnosed?
              </h2>

              <div className="space-y-4 text-fluid-body text-medical-body leading-[1.75]">
                <p>
                  The surgeon asks about your symptoms and your health, then gently examines your neck and swallowing. Tests that may be advised include:
                </p>
                <ul className="space-y-2.5 pl-2">
                  {[
                    "Blood tests to check how well the thyroid is working.",
                    "An ultrasound scan of the neck to see the size and look of the gland and any nodules.",
                    "A fine-needle test, where a small sample is taken from a nodule with a thin needle, to look at the cells under a microscope.",
                    "Further scans or a vocal cord check in some cases."
                  ].map((test, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-1" />
                      <span>{test}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  Not every patient needs every test. The surgeon explains why a test is advised and what the result means. Sometimes a needle test cannot say clearly whether a nodule is harmless, and then surgery or careful follow-up may be discussed.
                </p>
              </div>
            </article>

            {/* ── SECTION 6: TREATMENT OPTIONS TABLE ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                Treatment Options: Monitoring, Medicine or Surgery
              </h2>

              <p className="text-fluid-body text-medical-body leading-[1.75] mb-6">
                Most goitres and nodules are small and cause no problems. The right plan depends on what the tests show, your symptoms and your health.
              </p>

              <div className="overflow-hidden rounded-2xl border border-[#E7E7E7] mb-6">
                <table className="w-full text-left text-sm sm:text-base">
                  <thead className="bg-[#F7F1F6] text-medical-heading font-heading font-semibold border-b border-[#E7E7E7]">
                    <tr>
                      <th className="py-3.5 px-4 sm:px-6">Situation</th>
                      <th className="py-3.5 px-4 sm:px-6">Usual approach</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-medical-body">
                    <tr>
                      <td className="py-4 px-4 sm:px-6 font-semibold text-medical-heading align-top">Small goitre or nodule, no symptoms, looks harmless on scans</td>
                      <td className="py-4 px-4 sm:px-6 align-top">Monitoring with check-ups and repeat scans</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 sm:px-6 font-semibold text-medical-heading align-top">Overactive or underactive thyroid</td>
                      <td className="py-4 px-4 sm:px-6 align-top">Medicines. An overactive thyroid may also be treated with radioactive iodine</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 sm:px-6 font-semibold text-medical-heading align-top">Harmless nodule causing pressure or cosmetic concern</td>
                      <td className="py-4 px-4 sm:px-6 align-top">Surgery, or in some centres less invasive treatments. Ask your doctor about the options</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 sm:px-6 font-semibold text-brand align-top">Goitre pressing on the windpipe or food pipe</td>
                      <td className="py-4 px-4 sm:px-6 align-top">Surgery to remove part or all of the thyroid</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 sm:px-6 font-semibold text-brand align-top">Nodule that is suspicious or unclear on a needle test</td>
                      <td className="py-4 px-4 sm:px-6 align-top">Surgery may be advised to get a clear answer</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 sm:px-6 font-semibold text-medical-heading align-top">Thyroid cancer</td>
                      <td className="py-4 px-4 sm:px-6 align-top">Surgery is usually part of treatment. The care plan is made by the treating team</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 sm:px-6 font-semibold text-medical-heading align-top">Overactive thyroid that keeps coming back or cannot be controlled</td>
                      <td className="py-4 px-4 sm:px-6 align-top">Surgery may be advised</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-fluid-body text-medical-body leading-[1.75]">
                Surgery is usually planned in advance, not done as an emergency. Your surgeon explains why she suggests it and what the alternatives are.
              </p>
            </article>

            {/* ── SECTION 7: SURGICAL PROCEDURE ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                How Is Thyroid Surgery Done?
              </h2>

              <div className="space-y-4 text-fluid-body text-medical-body leading-[1.75]">
                <p>
                  Thyroid surgery is done under general anaesthetic, so you are asleep and feel no pain. The thyroid is reached through a horizontal cut in the neck, which is closed with stitches, usually dissolving ones. A thin drain tube is used only sometimes and is normally taken out the next day.
                </p>
                <p className="font-semibold text-medical-heading">
                  The main types of operation are:
                </p>
                <ul className="space-y-2.5 pl-2">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-2.5" />
                    <span>
                      <strong className="text-medical-heading">Lobectomy (hemithyroidectomy):</strong> removing one half of the thyroid.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-2.5" />
                    <span>
                      <strong className="text-medical-heading">Near-total thyroidectomy:</strong> removing most of the thyroid and leaving a little tissue on one side.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-2.5" />
                    <span>
                      <strong className="text-medical-heading">Total thyroidectomy:</strong> removing the whole thyroid.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-2.5" />
                    <span>
                      <strong className="text-medical-heading">Isthmusectomy:</strong> removing only the narrow middle part.
                    </span>
                  </li>
                </ul>
                <p>
                  The type depends on your condition and on what the tests show. A lobectomy usually takes one to two hours, and a total thyroidectomy two to three hours. Your surgeon explains which operation is suitable for you.
                </p>
              </div>
            </article>

            {/* ── SECTION 8: BENEFITS, RISKS & RECOVERY ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-7">
                Benefits, Risks and Recovery
              </h2>

              <div className="p-5 sm:p-6 rounded-2xl bg-[#EDF7EE] border border-emerald-200 space-y-2.5 mb-6">
                <h3 className="font-heading font-bold text-base text-emerald-900">Possible benefits</h3>
                <p className="text-[15px] leading-[1.7] text-emerald-800">
                  Relief of pressure symptoms, removal of a lump that needs to be checked or treated, and control of an overactive thyroid that medicine cannot settle.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-amber-50 border border-amber-200 space-y-3 mb-6">
                <h3 className="font-heading font-bold text-base text-amber-900">Possible risks</h3>
                <p className="text-[15px] leading-[1.7] text-amber-900">
                  Thyroid surgery is common and the risks are generally low, but every operation has risks. They include:
                </p>
                <ul className="space-y-2 text-sm text-amber-900 pl-4 list-disc">
                  <li>
                    <strong>Voice change:</strong> The nerves for the vocal cords lie behind the thyroid. In general, permanent damage is uncommon, in fewer than 1 in 100 patients, and about 5 in 100 notice a temporary change that lasts weeks or months.
                  </li>
                  <li>
                    <strong>Low calcium:</strong> Four tiny parathyroid glands next to the thyroid control calcium. If they are bruised, calcium can drop. This usually passes within days or weeks. Rarely it is permanent and needs lifelong calcium or vitamin D tablets.
                  </li>
                  <li>
                    <strong>Bleeding in the neck (haematoma):</strong> This is rare but needs urgent care.
                  </li>
                  <li>
                    <strong>Swallowing problems and neck numbness:</strong> usually temporary.
                  </li>
                  <li>
                    <strong>Wound infection, blood clots and scarring.</strong>
                  </li>
                  <li>
                    <strong>Thyroid hormone tablets:</strong> After removing the whole thyroid you need levothyroxine every day for life. After removing half, you may need it if the rest cannot make enough.
                  </li>
                </ul>
                <p className="text-xs text-amber-800 italic pt-1">
                  The two figures above are general, from NHS hospital information, and are not the result of any one surgeon. Your surgeon explains your own risks before you agree to surgery.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-[#F7F1F6] border border-brand/15 space-y-3 mb-6">
                <h3 className="font-heading font-bold text-base text-medical-heading">Recovery</h3>
                <p className="text-[15px] leading-[1.7] text-medical-body">
                  Thyroid surgery is not usually very painful, but you may feel tired for up to a month. You may have a sore throat or find swallowing uncomfortable for a few days, so a soft diet helps. Sleeping with your head raised can reduce swelling. Many patients stay one night in hospital. Time off work is often about two weeks after a total thyroidectomy and about two to four weeks after a lobectomy, depending on your job. You will have blood tests for calcium and thyroid hormone, and a clinic visit to discuss results.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-rose-50 border border-rose-200 space-y-3">
                <h3 className="font-heading font-bold text-base text-rose-950 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-rose-600" />
                  When to Get Help After Surgery
                </h3>
                <p className="text-sm font-semibold text-rose-950">
                  Go to an emergency department at once if you have swelling of the neck with difficulty breathing.
                </p>
                <p className="text-sm text-rose-900 pt-1">
                  Contact your surgeon or get medical advice if you have:
                </p>
                <ul className="space-y-1.5 text-sm text-rose-900 pl-4 list-disc">
                  <li>Tingling or numbness in your fingers, toes or around your mouth, or muscle spasms. These can mean low calcium.</li>
                  <li>A hoarse voice that is getting worse.</li>
                  <li>A wound that is red, hard, swollen or painful.</li>
                  <li>A fever or feeling unwell.</li>
                </ul>
              </div>
            </article>

            {/* ── SECTION 9: WHY CONSULT DR. HIRA NAWAZ ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-7">
                Why Consult Dr. Hira Nawaz?
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  { icon: <Star className="w-4 h-4" />, title: "Female surgeon", desc: "some patients, especially women, prefer to discuss neck and thyroid problems with a female doctor." },
                  { icon: <Award className="w-4 h-4" />, title: "Qualifications", desc: "MBBS and FCPS (General Surgery)." },
                  { icon: <ShieldCheck className="w-4 h-4" />, title: "Hospital role", desc: "Head of Surgery Department at Fauji Foundation Hospital Faisalabad." },
                  { icon: <FileText className="w-4 h-4" />, title: "Honest advice", desc: "you hear about monitoring, medicines and other options, and about risks such as voice and calcium changes, not only surgery." },
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
                  "Bring earlier thyroid blood tests, neck ultrasound or other scan reports, any needle-test results, a list of your medicines and details of any earlier operations.",
                  "At the consultation, the surgeon examines your neck, reviews your reports, explains what she finds and discusses whether monitoring, more tests or surgery is suitable."
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
                Thyroid Surgery FAQs
              </h2>

              <FAQAccordion items={thyroidFaqs} />
            </article>

            {/* ── SECTION 12: RELATED SURGICAL SERVICES ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-7">
                Related Surgical Services
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {[
                  { slug: "/general-surgery/", title: "General surgery", desc: "the wider range of conditions Dr. Hira Nawaz assesses." },
                  { slug: "/breast-surgery/", title: "Breast surgery", desc: "lumps and other changes in the breast." },
                  { slug: "/lipoma-removal/", title: "Lipoma removal", desc: "soft, fatty lumps under the skin." }
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
                    alt="Dr. Hira Nawaz – Female Thyroid Surgeon Faisalabad"
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
            Talk to Dr. Hira Nawaz About Your Neck Lump
          </h2>

          <p className="text-fluid-body text-purple-100 max-w-2xl mx-auto leading-[1.7]">
            Have questions about your symptoms or treatment options? Contact Dr. Hira Nawaz to arrange a surgical consultation at Faisal Hospital or Private Clinic, Faisalabad.
          </p>

          <p className="text-sm font-semibold text-rose-200">
            If you have difficulty breathing, go to the nearest hospital emergency department first.
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
