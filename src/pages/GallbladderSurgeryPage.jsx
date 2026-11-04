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
  Utensils
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import SEOHead from '../components/SEOHead';
import FAQAccordion from '../components/FAQAccordion';

export default function GallbladderSurgeryPage() {
  // Section 11: Approved FAQs
  const gallbladderFaqs = [
    {
      question: "Do all gallstones need an operation?",
      answer: "No. Many people have gallstones that never cause symptoms. These are usually just monitored. Surgery is advised when stones cause symptoms such as repeated painful attacks, or when they cause a complication such as inflammation of the gallbladder or pancreas, or jaundice."
    },
    {
      question: "What does gallbladder pain feel like?",
      answer: "It is usually a severe, constant pain in the middle of the tummy or under the right ribs. It can last more than 30 minutes and sometimes several hours. It often follows a heavy meal and may come with nausea or vomiting. If the pain is sudden and severe, spreads to the back, or comes with fever or yellow skin, go to an emergency department."
    },
    {
      question: "Can I live normally without a gallbladder?",
      answer: "Yes. The gallbladder only stores bile. After it is removed, bile flows straight from the liver into the bowel. Most people eat normally afterwards. A small number have softer or more frequent stools for a while."
    },
    {
      question: 'What do "pitte ka operation" and "pitte ki pathri" mean?',
      answer: 'Pitte ka operation usually means an operation to remove the gallbladder. Pitte ki pathri means gallstones. If you have pain from gallstones, a surgeon can examine you and explain whether you need treatment. A proper assessment comes first, because many people with gallstones do not need an operation.'
    },
    {
      question: "Is gallbladder surgery done by keyhole or open surgery?",
      answer: "In general, most gallbladders are removed by keyhole surgery through a few small cuts. Open surgery, through one larger cut, is used when the gallbladder is badly inflamed, infected or scarred, or if keyhole surgery cannot be finished safely. Your surgeon explains which approach is suitable for you."
    },
    {
      question: "How long does recovery take?",
      answer: "It varies. After keyhole surgery, many patients go home the same day or the next day and build up activity over about two weeks. Return to work is often after two to four weeks, depending on the job. Open surgery needs a longer hospital stay and more recovery time. Your surgeon tells you what to expect for your own operation."
    },
    {
      question: "What should I eat before and after gallbladder surgery?",
      answer: "While you wait for surgery, your doctor may advise smaller, low-fat meals and avoiding foods that trigger your pain. After surgery, most people return to a normal, balanced diet. Ask your surgeon for advice that fits your health."
    },
    {
      question: "Is there a female gallbladder surgeon in Faisalabad, and how do I book?",
      answer: "Yes. Dr. Hira Nawaz is a female general and laparoscopic surgeon in Faisalabad. She holds MBBS and FCPS (General Surgery) qualifications and consults at Faisal Hospital and Private Clinic. Call 0321 1836189 or send a WhatsApp message to ask about appointment times. Consultations are held Monday to Saturday, 4:00 PM to 9:00 PM, and the clinic is closed on Sunday. Opening WhatsApp does not confirm a booking. Your appointment is set once a time is agreed with you."
    }
  ];

  // Related services for sidebar
  const sidebarServices = [
    { title: "Laparoscopic surgery", slug: "/laparoscopic-surgery/" },
    { title: "Hernia surgery", slug: "/hernia-surgery/" },
    { title: "Appendix surgery", slug: "/appendix-surgery/" },
    { title: "General surgery", slug: "/general-surgery/" },
    { title: "Lipoma removal", slug: "/lipoma-removal/" },
    { title: "Abscess drainage", slug: "/abscess-drainage/" }
  ];

  // Approved Schema JSON-LD
  const gallbladderSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://drhiranawaz.com/gallbladder-surgery/#webpage",
        "url": "https://drhiranawaz.com/gallbladder-surgery/",
        "name": "Gallbladder Surgery in Faisalabad | Dr. Hira Nawaz",
        "inLanguage": "en",
        "about": [
          { "@type": "MedicalCondition", "name": "Gallstones" },
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
        customTitle="Gallbladder Surgery in Faisalabad | Dr. Hira Nawaz"
        customDescription="Gallstones or upper tummy pain? Learn about symptoms, gallbladder removal, risks and recovery. Consult female surgeon Dr. Hira Nawaz in Faisalabad."
        customSchema={gallbladderSchema}
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
                Gallbladder Surgery <span className="text-brand">in Faisalabad</span>
              </h1>

              <div className="space-y-4 text-fluid-body text-medical-body leading-[1.75] max-w-2xl mx-auto lg:mx-0">
                <p>
                  Pain in the upper tummy, especially after a meal, can be a sign of gallstones. Many people have gallstones and never know it. Others have painful attacks that keep coming back. A surgeon can examine you, explain what is happening and tell you whether you need treatment.
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
                    src="/images/services/gallbladder-stone-surgery-dr-hira-nawaz-faisalabad.jpg"
                    alt="Gallbladder surgery by Dr. Hira Nawaz in Faisalabad"
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

            {/* ── SECTION 2: WHAT IS GALLBLADDER & GALLSTONES ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                What Are the Gallbladder and Gallstones?
              </h2>

              <div className="space-y-4 text-fluid-body text-medical-body leading-[1.75]">
                <p>
                  The gallbladder is a small organ under the liver, in the upper right part of the tummy. It stores bile, a fluid made by the liver. When you eat food that contains fat, the gallbladder squeezes bile into the bowel to help break the fat down.
                </p>
                <p>
                  Gallstones are hard, pebble-like stones that form in the gallbladder, usually from cholesterol or from a substance called bilirubin. They can be as small as a grain of sand or as large as a golf ball. Some people have one stone. Others have many.
                </p>
                <p>
                  Most gallstones cause no symptoms. These are called silent gallstones, and they usually need no treatment. Problems start when a stone blocks a bile duct, the small tube that carries bile out of the gallbladder.
                </p>
              </div>
            </article>

            {/* ── SECTION 3: SYMPTOMS & WARNING SIGNS ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                Gallstone Symptoms
              </h2>

              <p className="text-fluid-body text-medical-body leading-[1.7] mb-6">
                When a stone blocks a bile duct, it can cause a gallbladder attack, also called biliary colic. The pain:
              </p>

              <ul className="space-y-3 mb-6">
                {[
                  "Is felt in the middle of the tummy or just under the ribs on the right side.",
                  "Can feel severe and constant.",
                  "Lasts longer than 30 minutes, and sometimes several hours.",
                  "Often comes after a heavy meal, and often in the evening or at night.",
                  "May come with nausea or vomiting."
                ].map((symptom, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                    <span className="text-fluid-body text-medical-body leading-[1.7]">{symptom}</span>
                  </li>
                ))}
              </ul>

              <p className="text-fluid-body text-medical-body leading-[1.75] mb-8">
                The attack usually stops when the stone moves and no longer blocks the duct. If you have had one attack, more are likely.
              </p>

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
                      A blocked duct can lead to infection or inflammation of the gallbladder, liver or pancreas. Go to the nearest hospital emergency department if you have:
                    </p>
                    <ul className="space-y-2 pt-1">
                      {[
                        "Sudden, severe pain in the tummy.",
                        "Pain that spreads to your back, with vomiting.",
                        "Pain that lasts for several hours.",
                        "A fever, even a mild one, or chills and shivering.",
                        "Yellow skin or yellow eyes (jaundice).",
                        "Dark, tea-coloured urine with pale stools."
                      ].map((warning, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-2.5" />
                          <span className="text-[15px] text-rose-900 leading-[1.65] font-medium">{warning}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-rose-900 pt-2 border-t border-rose-200/70">
                      Similar symptoms can come from other conditions, such as appendicitis, an ulcer or pancreatitis, which also need a doctor quickly. Do not wait for a routine appointment. Ask someone to take you to the hospital.
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
                Gallstones form when bile contains too much cholesterol or bilirubin, or not enough bile salts. They can also form when the gallbladder does not empty fully or often enough. Doctors do not fully understand why these changes happen.
              </p>

              <p className="font-semibold text-medical-heading mb-3">
                You are more likely to develop gallstones if you:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                {[
                  "Are over 40.",
                  "Are a woman.",
                  "Are overweight or live with obesity.",
                  "Eat a diet high in fat and low in fibre.",
                  "Have lost weight very quickly.",
                  "Have a condition such as diabetes or Crohn's disease."
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-[#E7E7E7]">
                    <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                    <span className="text-sm text-medical-body leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-fluid-body text-medical-body leading-[1.75]">
                Having a risk factor does not mean you will get gallstones. A healthy weight, a balanced diet with plenty of fibre, regular activity and slow, steady weight loss can help lower the chance.
              </p>
            </article>

            {/* ── SECTION 5: DIAGNOSIS & EVALUATION ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                How Are Gallstones Diagnosed?
              </h2>

              <div className="space-y-4 text-fluid-body text-medical-body leading-[1.75]">
                <p>
                  The surgeon asks about your pain, when it comes, what triggers it and your general health. She examines your tummy. Tests that may be advised include:
                </p>
                <ul className="space-y-2.5 pl-2">
                  {[
                    "An ultrasound scan of the upper abdomen, which is the usual first test.",
                    "Blood tests, to look for infection or signs that a stone has moved into the bile duct.",
                    "Further scans or other tests in some cases, for example if a stone is suspected in the bile duct."
                  ].map((test, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-1" />
                      <span>{test}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  Sometimes gallstones are found by chance on a scan done for another reason. Not every patient needs every test. The surgeon explains why a test is advised and what the result means.
                </p>
              </div>
            </article>

            {/* ── SECTION 6: TREATMENT OPTIONS TABLE ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                Treatment Options: Monitoring or Gallbladder Removal
              </h2>

              <p className="text-fluid-body text-medical-body leading-[1.75] mb-6">
                What you need depends on whether the stones cause symptoms.
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
                      <td className="py-4 px-4 sm:px-6 font-semibold text-medical-heading align-top">Silent gallstones, no symptoms</td>
                      <td className="py-4 px-4 sm:px-6 align-top">Active monitoring. No treatment now, but tell your doctor if symptoms start</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 sm:px-6 font-semibold text-brand align-top">Painful attacks, or a complication</td>
                      <td className="py-4 px-4 sm:px-6 align-top">Surgery to remove the gallbladder (cholecystectomy) is the main treatment</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 sm:px-6 font-semibold text-medical-heading align-top">A stone stuck in the bile duct</td>
                      <td className="py-4 px-4 sm:px-6 align-top">A procedure called ERCP may be used to clear the duct, often with gallbladder removal later</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 sm:px-6 font-semibold text-medical-heading align-top">Unable to have surgery because of another serious illness</td>
                      <td className="py-4 px-4 sm:px-6 align-top">Medicines that dissolve small cholesterol stones, or shock waves, are used in rare cases. Stones can come back</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-3 text-fluid-body text-medical-body leading-[1.75]">
                <p>
                  While you wait for surgery, your doctor may advise pain relief, smaller low-fat meals and avoiding foods that bring on your symptoms. Diet changes alone do not remove a stone that is blocking a duct.
                </p>
                <p>
                  You can live normally without a gallbladder. After it is removed, bile flows directly from the liver into the bowel instead of being stored.
                </p>
              </div>
            </article>

            {/* ── SECTION 7: SURGICAL PROCEDURE ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                How Is the Gallbladder Removed?
              </h2>

              <div className="space-y-4 text-fluid-body text-medical-body leading-[1.75]">
                <p>
                  Gallbladder removal is done under general anaesthetic, so you are asleep and feel no pain. In general, there are two ways to do it:
                </p>
                <ul className="space-y-2.5 pl-2">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-2.5" />
                    <span>
                      <strong className="text-medical-heading">Keyhole (laparoscopic) surgery:</strong> about four small cuts in the tummy, a camera and fine instruments. This is the most common method worldwide.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-2.5" />
                    <span>
                      <strong className="text-medical-heading">Open surgery:</strong> one larger cut under the ribs on the right side. It is used when the gallbladder is badly inflamed, infected or scarred from earlier operations, or when keyhole surgery cannot be completed safely.
                    </span>
                  </li>
                </ul>
                <p>
                  Sometimes an X-ray of the bile duct is taken during the operation to check that no stones have slipped out. A thin drain tube may be left in the tummy for a day.
                </p>
                <p>
                  Your surgeon explains which approach is suitable for you. Read more about{' '}
                  <Link to="/laparoscopic-surgery/" className="text-brand font-semibold underline hover:text-brand-hover">
                    laparoscopic surgery
                  </Link>.
                </p>
              </div>
            </article>

            {/* ── SECTION 8: BENEFITS, RISKS, RECOVERY & DIET ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-7">
                Benefits, Risks and Recovery
              </h2>

              <div className="p-5 sm:p-6 rounded-2xl bg-[#EDF7EE] border border-emerald-200 space-y-2.5 mb-6">
                <h3 className="font-heading font-bold text-base text-emerald-900">Possible benefits</h3>
                <p className="text-[15px] leading-[1.7] text-emerald-800">
                  In most people, removing the gallbladder stops the painful attacks. It also removes the stones that can cause infection, jaundice or pancreatitis.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-amber-50 border border-amber-200 space-y-3 mb-6">
                <h3 className="font-heading font-bold text-base text-amber-900">Possible risks</h3>
                <p className="text-[15px] leading-[1.7] text-amber-900">
                  Gallbladder removal is common and generally safe, but every operation has risks. They include:
                </p>
                <ul className="space-y-1.5 text-sm text-amber-900 pl-4 list-disc">
                  <li>Wound infection or bleeding.</li>
                  <li>Blood clots in the legs or lungs.</li>
                  <li>A chest infection.</li>
                  <li>Bile leaking into the tummy, which may need another procedure.</li>
                  <li>Stones left behind in the bile ducts.</li>
                  <li>Damage to the bile ducts or to nearby organs. This is rare, but it may need further surgery.</li>
                  <li>Nausea, vomiting, indigestion, tummy pain or loose stools after surgery. This is sometimes called post-cholecystectomy syndrome and usually improves soon.</li>
                </ul>
                <p className="text-xs text-amber-800 italic pt-1">
                  Your surgeon explains how these risks apply to you before you agree to surgery.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-[#F7F1F6] border border-brand/15 space-y-3 mb-6">
                <h3 className="font-heading font-bold text-base text-medical-heading">Recovery</h3>
                <p className="text-[15px] leading-[1.7] text-medical-body">
                  Recovery differs for each person. After keyhole surgery, many patients go home the same day or the next day. You may have soreness around the cuts and aching in the shoulder from the gas used during surgery. Guidance from the NHS suggests building up activity gradually over about two weeks, with a return to work after about two to four weeks, depending on your job. After open surgery the hospital stay is longer and recovery takes more time. Your surgeon gives clear advice on wound care, driving and activity.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E7E7E7] shadow-subtle space-y-2.5 mb-6">
                <h3 className="font-heading font-bold text-base text-medical-heading flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-brand" />
                  Diet after surgery
                </h3>
                <p className="text-[15px] leading-[1.7] text-medical-body">
                  Most people can return to a normal, healthy, balanced diet. A small number have softer or more frequent stools for a while. If this continues, tell your doctor.
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
                  <li>Severe or worsening pain that does not go away.</li>
                  <li>Pus, swelling, redness or tenderness around a wound.</li>
                  <li>Yellow skin or yellow eyes.</li>
                  <li>A very high temperature, or you feel hot, cold and shivery.</li>
                  <li>Repeated vomiting.</li>
                  <li>Swelling, tenderness or cramping pain in a leg.</li>
                </ul>
                <p className="text-xs font-semibold text-rose-950 pt-1 border-t border-rose-200/70">
                  Go to an emergency department at once if you have chest pain, difficulty breathing or you cough up blood. These can be signs of a blood clot in the lungs.
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
                  { icon: <FileText className="w-4 h-4" />, title: "Balanced advice", desc: "you hear about monitoring and other options, and about the risks, not only surgery." },
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
                  "Bring earlier reports, ultrasound scans and prescriptions, a list of your medicines, and details of any earlier operations.",
                  "At the consultation, the surgeon examines you, explains what she finds and discusses whether monitoring, other tests or surgery is suitable."
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
                Gallbladder Surgery FAQs
              </h2>

              <FAQAccordion items={gallbladderFaqs} />
            </article>

            {/* ── SECTION 12: RELATED SURGICAL SERVICES ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-7">
                Related Surgical Services
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { slug: "/general-surgery/", title: "General surgery", desc: "the wider range of conditions Dr. Hira Nawaz assesses." },
                  { slug: "/laparoscopic-surgery/", title: "Laparoscopic surgery", desc: "how keyhole surgery works, its limits and recovery." },
                  { slug: "/appendix-surgery/", title: "Appendix surgery", desc: "sudden pain in the lower right tummy, often confused with other abdominal pain." },
                  { slug: "/hernia-surgery/", title: "Hernia surgery", desc: "lumps and bulges in the groin or tummy." }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-[#F7F1F6] border border-brand/15 shadow-subtle hover:border-brand/35 hover:shadow-card transition-all flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-base text-medical-heading mb-1.5">
                        <Link to={item.slug} className="hover:text-brand transition-colors">
                          {item.title}
                        </Link>
                      </h3>
                      <p className="text-xs text-medical-secondary leading-relaxed">{item.desc}</p>
                    </div>
                    <Link to={item.slug} className="mt-3 text-xs font-bold uppercase tracking-wider text-brand hover:underline inline-flex items-center gap-1">
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
                    alt="Dr. Hira Nawaz – Female Gallbladder Surgeon Faisalabad"
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
            Talk to Dr. Hira Nawaz About Your Gallbladder Symptoms
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
