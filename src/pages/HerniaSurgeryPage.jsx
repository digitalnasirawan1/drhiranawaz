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

export default function HerniaSurgeryPage() {
  // Section 11: Approved FAQs
  const herniaFaqs = [
    {
      question: "Can a hernia go away on its own?",
      answer: "No. A hernia does not heal by itself, and it usually gets bigger with time. Some small hernias that cause no symptoms can be watched safely. Only a doctor who has examined you can say whether that applies to you."
    },
    {
      question: "Does every hernia need an operation?",
      answer: "Not always. A small hernia with few or no symptoms may only need to be watched. Surgery is usually advised when a hernia causes pain, grows, interferes with daily life, or is at risk of getting stuck. Your surgeon explains the reasons for her advice."
    },
    {
      question: "What happens if I leave a hernia untreated?",
      answer: "Many hernias cause only discomfort for a long time. But a hernia can become stuck (incarcerated), blocked, or lose its blood supply (strangulated). These are emergencies and need urgent surgery. Read the warning signs above, and go to a hospital at once if any of them appear."
    },
    {
      question: 'What does "hernia ka operation" involve?',
      answer: "Hernia ka operation means an operation to repair a hernia. The surgeon returns the bulging tissue to its place and strengthens the weak muscle wall with stitches, often with a mesh. It can be done through one cut (open surgery) or through a few small cuts (keyhole surgery), depending on what suits the patient. Anaesthetic may be local or general."
    },
    {
      question: "How long does recovery take after hernia surgery?",
      answer: "It varies. Many people go home the same day. Soreness and bruising are common, and heavy lifting is usually avoided for several weeks. NHS guidance gives up to 4 to 6 weeks for full recovery after a groin hernia repair, and sometimes longer. Your surgeon tells you what to expect for your own operation."
    },
    {
      question: "Can a hernia come back after surgery?",
      answer: "Yes, though it is not common. National figures quoted by NHS hospitals suggest it happens in about 2 in 100 patients, and it can usually be repaired again. Avoiding heavy lifting while you heal, keeping a healthy weight and not smoking all help."
    },
    {
      question: "Can women get hernias? Is there a female surgeon for hernia in Faisalabad?",
      answer: "Yes. Women get hernias too. Femoral hernias, in the upper thigh, are more common in women, and umbilical and incisional hernias affect both sexes. Dr. Hira Nawaz is a female general and laparoscopic surgeon in Faisalabad. She holds MBBS and FCPS (General Surgery) qualifications and consults at Faisal Hospital and Private Clinic."
    },
    {
      question: "How do I book an appointment?",
      answer: "Call 0321 1836189 or send a WhatsApp message to ask about appointment times. Consultations are held Monday to Saturday, 4:00 PM to 9:00 PM, and the clinic is closed on Sunday. Opening WhatsApp does not confirm a booking. Your appointment is set once a time is agreed with you."
    }
  ];

  // Related services for sidebar
  const sidebarServices = [
    { title: "Laparoscopic surgery", slug: "/laparoscopic-surgery/" },
    { title: "Gallbladder surgery", slug: "/gallbladder-surgery/" },
    { title: "General surgery", slug: "/general-surgery/" },
    { title: "Appendix surgery", slug: "/appendix-surgery/" },
    { title: "Lipoma removal", slug: "/lipoma-removal/" },
    { title: "Abscess drainage", slug: "/abscess-drainage/" }
  ];

  // Approved Schema JSON-LD
  const herniaSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://drhiranawaz.com/hernia-surgery/#webpage",
        "url": "https://drhiranawaz.com/hernia-surgery/",
        "name": "Hernia Surgery in Faisalabad | Dr. Hira Nawaz",
        "inLanguage": "en",
        "about": [
          { "@type": "MedicalCondition", "name": "Hernia" },
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
        customTitle="Hernia Surgery in Faisalabad | Dr. Hira Nawaz"
        customDescription="Learn about hernia symptoms, treatment and recovery. Consult female surgeon Dr. Hira Nawaz (MBBS, FCPS) in Faisalabad. Call or WhatsApp."
        customSchema={herniaSchema}
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
                Hernia Surgery <span className="text-brand">in Faisalabad</span>
              </h1>

              <div className="space-y-4 text-fluid-body text-medical-body leading-[1.75] max-w-2xl mx-auto lg:mx-0">
                <p>
                  A lump or bulge in the groin or tummy can be worrying. It may be a hernia. Hernias do not go away by themselves, but not every hernia needs an operation straight away. A surgeon can examine you and explain your options.
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
                    src="/images/services/hernia-surgery-dr-hira-nawaz-faisalabad.jpg"
                    alt="Hernia surgery consultation by Dr. Hira Nawaz in Faisalabad"
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

            {/* ── SECTION 2: WHAT IS A HERNIA ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                What Is a Hernia?
              </h2>

              <div className="space-y-4 text-fluid-body text-medical-body leading-[1.75]">
                <p>
                  A hernia happens when part of an organ, such as the bowel, or some fatty tissue pushes through a weak spot in the muscle wall that normally holds it in. Most hernias form in the tummy (abdomen) or the groin, where the leg meets the body.
                </p>
                <p className="font-semibold text-medical-heading pt-2">
                  Common types include:
                </p>
                <ul className="space-y-2.5 pl-2">
                  {[
                    { type: "Inguinal hernia", desc: "in the groin. This is the most common type." },
                    { type: "Umbilical hernia", desc: "at or near the belly button." },
                    { type: "Femoral hernia", desc: "in the upper thigh, just below the groin. It is more common in women." },
                    { type: "Incisional hernia", desc: "at the scar of an earlier operation." },
                    { type: "Epigastric hernia", desc: "between the belly button and the breastbone." }
                  ].map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-2.5" />
                      <span>
                        <strong className="text-medical-heading">{h.type}:</strong> {h.desc}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="pt-2">
                  A hiatus hernia is different. It forms in the chest and usually causes heartburn rather than a visible lump.
                </p>
              </div>
            </article>

            {/* ── SECTION 3: SYMPTOMS & WARNING SIGNS ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                Hernia Symptoms
              </h2>

              <p className="text-fluid-body text-medical-body leading-[1.7] mb-6">
                The signs depend on where the hernia is and how long you have had it. Common symptoms are:
              </p>

              <ul className="space-y-3 mb-6">
                {[
                  "A bulge or lump in the groin, tummy or upper thigh. It may get bigger when you cough, sneeze or strain, and smaller when you lie down.",
                  "Discomfort, aching, burning or a heavy, dragging feeling in the groin.",
                  "Pain that gets worse with lifting, standing for a long time or straining.",
                  "Skin over the lump that looks tight or stretched."
                ].map((symptom, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                    <span className="text-fluid-body text-medical-body leading-[1.7]">{symptom}</span>
                  </li>
                ))}
              </ul>

              <p className="text-fluid-body text-medical-body leading-[1.75] mb-8">
                A large hernia may not hurt at all. A small lump can sometimes be more painful, so size alone does not tell you how serious it is.
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
                      A hernia can become stuck, or its blood supply can be cut off. This is an emergency. Go to the nearest hospital emergency department if you have a hernia and:
                    </p>
                    <ul className="space-y-2 pt-1">
                      {[
                        "The lump suddenly becomes larger, hard or very tender.",
                        "The lump used to go back in but no longer does.",
                        "You have sudden, severe pain in or around the hernia.",
                        "You have vomiting, a swollen tummy, or cannot pass stool or gas.",
                        "You have a fever, or the skin over the lump looks red or dark.",
                        "You are vomiting blood, or the vomit looks like coffee grounds."
                      ].map((warning, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-2.5" />
                          <span className="text-[15px] text-rose-900 leading-[1.65] font-medium">{warning}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm font-semibold text-rose-950 pt-2 border-t border-rose-200/70">
                      Do not wait for a routine appointment. Ask someone to take you to the hospital.
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
                A hernia forms where the muscle wall is weak. For some people, the weak spot has been there since birth. For others, it develops later in life. Anything that raises pressure inside the abdomen can make a hernia more likely or make it bigger:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                {[
                  "Heavy lifting, or standing and walking for many hours at work.",
                  "Being overweight.",
                  "A long-lasting cough.",
                  "Constipation and straining on the toilet.",
                  "Increasing age.",
                  "A family history of hernias.",
                  "An earlier abdominal operation, which can lead to an incisional hernia."
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-[#E7E7E7]">
                    <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                    <span className="text-sm text-medical-body leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-fluid-body text-medical-body leading-[1.75]">
                Having a risk factor does not mean you will get a hernia. You cannot always prevent one, but keeping a healthy weight, staying active, not smoking and treating a long-term cough can lower the chance.
              </p>
            </article>

            {/* ── SECTION 5: DIAGNOSIS & EVALUATION ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                How Is a Hernia Diagnosed?
              </h2>

              <div className="space-y-4 text-fluid-body text-medical-body leading-[1.75]">
                <p>
                  Most hernias are found by examination. The surgeon asks about your symptoms and health history. She then examines the area, often while you stand. She may ask you to cough or strain so the bulge can be seen and felt.
                </p>
                <p>
                  If the diagnosis is not clear, or if the surgeon needs more detail, she may advise an ultrasound scan. Sometimes a CT or MRI scan is used. Not every patient needs a scan. The surgeon explains why any test is advised.
                </p>
              </div>
            </article>

            {/* ── SECTION 6: TREATMENT OPTIONS TABLE ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                Treatment Options: Observation, Support or Surgery
              </h2>

              <p className="text-fluid-body text-medical-body leading-[1.75] mb-6">
                A hernia does not heal on its own, and it can get bigger over time. The right plan depends on the type of hernia, your symptoms, your age and your general health.
              </p>

              <div className="overflow-hidden rounded-2xl border border-[#E7E7E7] mb-6">
                <table className="w-full text-left text-sm sm:text-base">
                  <thead className="bg-[#F7F1F6] text-medical-heading font-heading font-semibold border-b border-[#E7E7E7]">
                    <tr>
                      <th className="py-3.5 px-4 sm:px-6">Option</th>
                      <th className="py-3.5 px-4 sm:px-6">What it means</th>
                      <th className="py-3.5 px-4 sm:px-6">When it may be suitable</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-medical-body">
                    <tr>
                      <td className="py-4 px-4 sm:px-6 font-semibold text-medical-heading align-top">Watchful waiting</td>
                      <td className="py-4 px-4 sm:px-6 align-top">Keep an eye on the hernia and see the surgeon if anything changes</td>
                      <td className="py-4 px-4 sm:px-6 align-top">A small hernia that causes few or no symptoms</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 sm:px-6 font-semibold text-medical-heading align-top">Supportive measures</td>
                      <td className="py-4 px-4 sm:px-6 align-top">Weight loss, treating constipation or a cough, and sometimes a support belt (truss)</td>
                      <td className="py-4 px-4 sm:px-6 align-top">To ease symptoms, or when surgery is not advised</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 sm:px-6 font-semibold text-brand align-top">Surgical repair</td>
                      <td className="py-4 px-4 sm:px-6 align-top">An operation to push the hernia back and strengthen the weak area</td>
                      <td className="py-4 px-4 sm:px-6 align-top">The hernia causes symptoms, is growing, or is at risk of complications</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-fluid-body text-medical-body leading-[1.75]">
                Surgery is usually planned in advance. It is urgent when a hernia is stuck, blocked or has lost its blood supply. Some types, such as femoral hernias, are more likely to become trapped, so repair is often advised. Some large or repeat hernias carry more risk from surgery, and in a few cases it is wiser to leave them alone. Your surgeon will advise you.
              </p>
            </article>

            {/* ── SECTION 7: SURGICAL PROCEDURE ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                How Is a Hernia Repaired?
              </h2>

              <div className="space-y-4 text-fluid-body text-medical-body leading-[1.75]">
                <p>
                  The aim of surgery is to return the hernia contents to their place and strengthen the weak area of muscle. The surgeon closes the weakness with stitches, and often places a thin sheet of mesh to support the repair.
                </p>
                <p className="font-semibold text-medical-heading">
                  In general, a hernia can be repaired in two ways:
                </p>
                <ul className="space-y-2.5 pl-2">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-2.5" />
                    <span>
                      <strong className="text-medical-heading">Open surgery:</strong> one cut over or near the hernia.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-2.5" />
                    <span>
                      <strong className="text-medical-heading">Keyhole (laparoscopic) surgery:</strong> a few small cuts, a camera and fine instruments. This is used mainly for groin hernias.
                    </span>
                  </li>
                </ul>
                <p>
                  The choice depends on where the hernia is, its size, whether it has come back, your health and what the surgeon finds. Your surgeon explains which approach is suitable for you. Read more about{' '}
                  <Link to="/laparoscopic-surgery/" className="text-brand font-semibold underline hover:text-brand-hover">
                    laparoscopic surgery
                  </Link>.
                </p>
                <p>
                  Hernia repair may be done under local or general anaesthetic. A groin hernia repair usually takes between 30 and 90 minutes, and many patients go home the same day.
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
                  Relief of pain and discomfort, return to normal activities, and a lower chance of an emergency caused by a stuck or blocked hernia.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-amber-50 border border-amber-200 space-y-3 mb-6">
                <h3 className="font-heading font-bold text-base text-amber-900">Possible risks</h3>
                <p className="text-[15px] leading-[1.7] text-amber-900">
                  Most people recover well, but every operation has risks. They include:
                </p>
                <ul className="space-y-1.5 text-sm text-amber-900 pl-4 list-disc">
                  <li>Wound infection or bleeding.</li>
                  <li>Bruising and swelling, sometimes a firm lump near the wound that settles over weeks.</li>
                  <li>Pain or numbness near the wound. In some people it lasts longer.</li>
                  <li>The hernia coming back.</li>
                  <li>Difficulty passing urine for a short time after surgery.</li>
                  <li>Blood clots in the legs or lungs.</li>
                  <li>Rarely, injury to the bowel, a blood vessel or a nearby organ.</li>
                  <li>In men, a small risk of problems affecting the testicle after groin hernia surgery.</li>
                </ul>
                <p className="text-xs text-amber-800 italic pt-1">
                  Your surgeon explains these risks and how they apply to you before you agree to surgery.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-[#F7F1F6] border border-brand/15 space-y-3 mb-6">
                <h3 className="font-heading font-bold text-base text-medical-heading">Recovery</h3>
                <p className="text-[15px] leading-[1.7] text-medical-body">
                  Every person recovers differently. Soreness, bruising and tiredness are common for days or weeks. NHS guidance says full recovery after a groin hernia repair usually takes up to 4 to 6 weeks, and heavy lifting is usually avoided for at least that long. Some people return to light daily activities within days, and time off work depends on your job. Your surgeon gives clear advice about wound care, activity, driving and follow-up.
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
                  <li>Pus, worsening pain, swelling, warmth or redness at the wound.</li>
                  <li>A fever or chills.</li>
                  <li>A swollen or painful tummy that is getting worse.</li>
                  <li>Heavy bleeding from the wound.</li>
                  <li>Vomiting that carries on for more than a day after surgery.</li>
                  <li>Pain or swelling in a leg.</li>
                  <li>Difficulty passing urine.</li>
                </ul>
                <p className="text-xs font-semibold text-rose-950 pt-1 border-t border-rose-200/70">
                  Go to an emergency department at once if you have chest pain, severe difficulty breathing, a racing heartbeat, or you cough up more than a few streaks of blood.
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
                  { icon: <FileText className="w-4 h-4" />, title: "Balanced advice", desc: "you hear about watching and waiting, other options and the risks, not only surgery." },
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
                  "At the consultation, the surgeon examines you, explains what she finds and discusses whether observation, support or surgery is suitable."
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
                Hernia Surgery FAQs
              </h2>

              <FAQAccordion items={herniaFaqs} />
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
                  { slug: "/abscess-drainage/", title: "Abscess drainage", desc: "painful, pus-filled swellings that can look like a lump." },
                  { slug: "/lipoma-removal/", title: "Lipoma removal", desc: "soft, fatty lumps under the skin." }
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
                    alt="Dr. Hira Nawaz – Female Hernia Surgeon Faisalabad"
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
            Talk to Dr. Hira Nawaz About Your Hernia
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
