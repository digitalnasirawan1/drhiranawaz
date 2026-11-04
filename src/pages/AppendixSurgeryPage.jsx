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

export default function AppendixSurgeryPage() {
  // Section 11: Approved FAQs
  const appendixFaqs = [
    {
      question: "What are the first signs of appendicitis?",
      answer: "Pain usually starts in the middle of the tummy, around the belly button. After a few hours it moves to the lower right side and gets worse. You may also feel sick, lose your appetite or have a fever. The pattern is not the same for everyone, especially in pregnancy, young children and older people."
    },
    {
      question: "Is appendicitis an emergency? Can I wait for an appointment?",
      answer: "Suspected appendicitis needs urgent hospital care. Do not wait for a routine appointment. If you have severe tummy pain, or pain that keeps getting worse or moves to the lower right side, go to the nearest hospital emergency department now."
    },
    {
      question: "Can appendicitis go away on its own or be treated with antibiotics?",
      answer: "Appendicitis is unlikely to get better on its own. If it is not treated, the appendix can burst. The usual treatment is surgery to remove the appendix. In some people, when the infection has not spread and surgery is high risk, antibiotics alone may be used. The infection can then come back. A doctor who has examined you decides which option is right."
    },
    {
      question: 'What does "appendix ka operation" involve?',
      answer: "Appendix ka operation means an operation to remove the appendix. It is done under general anaesthetic and usually takes about an hour. The surgeon removes the appendix through a few small cuts (keyhole surgery) or one larger cut (open surgery). Most people go home within a few days."
    },
    {
      question: "Is appendix surgery done by keyhole or open surgery?",
      answer: "In general, keyhole surgery is usually preferred because recovery can be quicker. Open surgery may be needed if the appendix has burst, if there is an appendix mass, if you have had open tummy surgery before, or if a problem comes up during the operation. Your surgeon explains which approach is suitable for you."
    },
    {
      question: "How long does recovery take after appendix surgery?",
      answer: "Most people recover in one to two weeks. It can take longer if the appendix burst. Many people take one to two weeks off work or school, and avoid heavy lifting and strenuous sport for a few weeks. Your surgeon tells you what to expect for your own operation."
    },
    {
      question: "Can I live a normal life without my appendix?",
      answer: "Yes. The appendix is not needed, and removing it does not cause long-term problems. Having it removed also means appendicitis cannot come back."
    },
    {
      question: "Is there a female surgeon in Faisalabad for appendix and tummy pain problems?",
      answer: "Yes. Dr. Hira Nawaz is a female general and laparoscopic surgeon in Faisalabad. She holds MBBS and FCPS (General Surgery) qualifications and consults at Faisal Hospital and Private Clinic. For suspected appendicitis, go to the nearest hospital emergency department first. To ask about a consultation, call 0321 1836189 or send a WhatsApp message. Consultations are held Monday to Saturday, 4:00 PM to 9:00 PM, and the clinic is closed on Sunday. Opening WhatsApp does not confirm a booking. Your appointment is set once a time is agreed with you."
    }
  ];

  // Related services for sidebar
  const sidebarServices = [
    { title: "General surgery", slug: "/general-surgery/" },
    { title: "Laparoscopic surgery", slug: "/laparoscopic-surgery/" },
    { title: "Gallbladder surgery", slug: "/gallbladder-surgery/" },
    { title: "Hernia surgery", slug: "/hernia-surgery/" },
    { title: "Lipoma removal", slug: "/lipoma-removal/" },
    { title: "Abscess drainage", slug: "/abscess-drainage/" }
  ];

  // Approved Schema JSON-LD
  const appendixSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://drhiranawaz.com/appendix-surgery/#webpage",
        "url": "https://drhiranawaz.com/appendix-surgery/",
        "name": "Appendix Surgery in Faisalabad | Dr. Hira Nawaz",
        "inLanguage": "en",
        "about": [
          { "@type": "MedicalCondition", "name": "Appendicitis" },
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
        customTitle="Appendix Surgery in Faisalabad | Dr. Hira Nawaz"
        customDescription="Lower right tummy pain can be an emergency. Learn the warning signs, appendix removal and recovery. Female surgeon Dr. Hira Nawaz, Faisalabad."
        customSchema={appendixSchema}
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
                Appendix Surgery <span className="text-brand">in Faisalabad</span>
              </h1>

              <div className="space-y-4 text-fluid-body text-medical-body leading-[1.75] max-w-2xl mx-auto lg:mx-0">
                <p>
                  Appendicitis is swelling and infection of the appendix. It usually causes pain in the lower right side of the tummy, and it needs urgent treatment in hospital.
                </p>
                <p className="font-semibold text-rose-700">
                  If you have severe tummy pain or pain that keeps getting worse, go to the nearest hospital emergency department now. Do not wait for a routine appointment.
                </p>
                <p>
                  Dr. Hira Nawaz is a female general and laparoscopic surgeon in Faisalabad. She holds MBBS and FCPS (General Surgery) qualifications and is Head of Surgery Department at Fauji Foundation Hospital Faisalabad. This page explains appendicitis, its warning signs and how the appendix is removed.
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
                    src="/images/services/appendix-surgery-dr-hira-nawaz-faisalabad.jpg"
                    alt="Appendix surgery consultation by Dr. Hira Nawaz in Faisalabad"
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

            {/* ── SECTION 2: WHAT IS THE APPENDIX AND APPENDICITIS ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                What Are the Appendix and Appendicitis?
              </h2>

              <div className="space-y-4 text-fluid-body text-medical-body leading-[1.75]">
                <p>
                  The appendix is a small pouch joined to the large bowel, in the lower right side of the tummy. Doctors do not fully know what it does, but removing it does not cause long-term problems.
                </p>
                <p>
                  Appendicitis happens when the appendix becomes swollen and infected. If it is not treated quickly, the appendix can burst. A burst appendix can spread infection through the tummy (peritonitis), cause an abscess or a bowel blockage, and lead to a life-threatening reaction to infection called sepsis.
                </p>
                <p>
                  Appendicitis is common. It can happen at any age, but it is most common in children over 10 and in young adults.
                </p>
              </div>
            </article>

            {/* ── SECTION 3: SYMPTOMS & WARNING SIGNS ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                Symptoms of Appendicitis
              </h2>

              <p className="text-fluid-body text-medical-body leading-[1.7] mb-4">
                The pain often follows a pattern:
              </p>

              <ul className="space-y-3 mb-6">
                {[
                  "It starts in the middle of the tummy, around the belly button.",
                  "After a few hours it moves to the lower right side and gets worse.",
                  "It can feel worse when you move, cough, take a deep breath or press on the area.",
                  "It may feel slightly better when you pull your knees up to your chest."
                ].map((symptom, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                    <span className="text-fluid-body text-medical-body leading-[1.7]">{symptom}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-4 text-fluid-body text-medical-body leading-[1.75] mb-8">
                <p>
                  Other symptoms can include feeling or being sick, loss of appetite, a high temperature, constipation or diarrhoea, and needing to pass urine more often.
                </p>
                <p>
                  Not everyone has the usual pattern. The pain may be milder, slower to build or in a different place. This is more likely in pregnancy, in young children and in older people. Older people may also become suddenly confused.
                </p>
                <p>
                  Many other problems can cause tummy pain, including urine infections, kidney stones, gallstones, bowel conditions, and conditions of the womb or ovaries. Do not try to diagnose yourself. Get medical help if you are worried.
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
                      Warning Signs That Need Emergency Care
                    </h3>
                    <p className="text-[15px] text-rose-900 leading-[1.7]">
                      Go to the nearest hospital emergency department now if you or your child has:
                    </p>
                    <ul className="space-y-2 pt-1">
                      {[
                        "Severe pain in the tummy.",
                        "Tummy pain that is getting steadily worse, or that does not go away.",
                        "Pain that moves to the lower right side of the tummy.",
                        "Pain that suddenly gets better for a short time and then returns as severe pain across the whole tummy. This can mean the appendix has burst.",
                        "Confusion, pale or blotchy skin, or difficulty breathing. These can be signs of sepsis."
                      ].map((warning, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-2.5" />
                          <span className="text-[15px] text-rose-900 leading-[1.65] font-medium">{warning}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm font-semibold text-rose-950 pt-2 border-t border-rose-200/70">
                      Ask someone to take you. Do not drive yourself.
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

              <div className="space-y-4 text-fluid-body text-medical-body leading-[1.75]">
                <p>
                  The exact cause is often unclear. In many cases something blocks the opening of the appendix, such as hardened stool or a small piece of undigested food. An infection elsewhere in the digestive tract that makes tissue in the appendix wall swell can also play a part, and so can inflammatory bowel disease.
                </p>
                <p>
                  Age is the main known risk factor. There is no guaranteed way to prevent appendicitis.
                </p>
              </div>
            </article>

            {/* ── SECTION 5: DIAGNOSIS & EVALUATION ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                How Is Appendicitis Diagnosed?
              </h2>

              <div className="space-y-4 text-fluid-body text-medical-body leading-[1.75]">
                <p>
                  The doctor asks about your pain and how it started, then gently feels your tummy to check for tenderness and swelling. You may have:
                </p>
                <ul className="space-y-2.5 pl-2">
                  {[
                    "Blood tests.",
                    "A urine test.",
                    "An ultrasound scan or a CT scan to look for swelling in the appendix. MRI is used in some cases.",
                    "A pregnancy test, if there is any chance you could be pregnant."
                  ].map((test, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-1" />
                      <span>{test}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  No test can always show appendicitis, because other conditions can look the same. Sometimes doctors watch you in hospital for a few hours to see how the symptoms change. If appendicitis is very likely, or the appendix may have burst, surgery may be advised without waiting for more tests.
                </p>
              </div>
            </article>

            {/* ── SECTION 6: TREATMENT OPTIONS TABLE ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                Treatment Options for Appendicitis
              </h2>

              <p className="text-fluid-body text-medical-body leading-[1.75] mb-6">
                Appendicitis is unlikely to get better on its own. Without treatment, the infection can spread and the appendix can burst. The usual treatment is an operation to remove the appendix, done as soon as possible.
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
                      <td className="py-4 px-4 sm:px-6 font-semibold text-brand align-top">Appendicitis confirmed or very likely</td>
                      <td className="py-4 px-4 sm:px-6 align-top">Surgery to remove the appendix (appendectomy), with antibiotics</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 sm:px-6 font-semibold text-medical-heading align-top">Infection has not spread, and surgery is high risk for you</td>
                      <td className="py-4 px-4 sm:px-6 align-top">Antibiotics alone may be considered. Appendicitis can come back later</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 sm:px-6 font-semibold text-medical-heading align-top">An appendix mass (a lump where the bowel and tummy lining stick to the appendix)</td>
                      <td className="py-4 px-4 sm:px-6 align-top">Antibiotics first, then surgery a few weeks later if you still have symptoms</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 sm:px-6 font-semibold text-rose-700 align-top">Appendix has burst</td>
                      <td className="py-4 px-4 sm:px-6 align-top font-medium text-rose-950">Urgent surgery and antibiotics. Antibiotics alone are not likely to be enough</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-fluid-body text-medical-body leading-[1.75]">
                Your surgical team explains the options and the reasons for their advice.
              </p>
            </article>

            {/* ── SECTION 7: SURGICAL PROCEDURE ── */}
            <article className="pb-12 border-b border-[#EBEBEB]">
              <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight mb-5">
                How Is the Appendix Removed?
              </h2>

              <div className="space-y-4 text-fluid-body text-medical-body leading-[1.75]">
                <p>
                  Appendix removal is done under general anaesthetic, so you are asleep and feel no pain. It usually takes about an hour. In general, there are two ways to do it:
                </p>
                <ul className="space-y-2.5 pl-2">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-2.5" />
                    <span>
                      <strong className="text-medical-heading">Keyhole (laparoscopic) surgery:</strong> three or four small cuts in the tummy, a camera and fine instruments. This is usually preferred because recovery can be quicker.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-2.5" />
                    <span>
                      <strong className="text-medical-heading">Open surgery:</strong> one larger cut in the lower right side of the tummy. It may be needed if the appendix has burst, if there is an appendix mass, if you have had open tummy surgery before, or if a problem comes up during a keyhole operation.
                    </span>
                  </li>
                </ul>
                <p>
                  The surgeon removes the appendix where it joins the bowel and, if it has burst, cleans the area. The cuts are closed with dissolving stitches, clips or glue. Your surgeon explains which approach is suitable for you. Read more about{' '}
                  <Link to="/laparoscopic-surgery/" className="text-brand font-semibold underline hover:text-brand-hover">
                    laparoscopic surgery
                  </Link>.
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
                  Removing the appendix relieves the pain, prevents it from bursting, and means appendicitis cannot come back.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-amber-50 border border-amber-200 space-y-3 mb-6">
                <h3 className="font-heading font-bold text-base text-amber-900">Possible risks</h3>
                <p className="text-[15px] leading-[1.7] text-amber-900">
                  Serious problems are rare, but every operation has risks. They include:
                </p>
                <ul className="space-y-1.5 text-sm text-amber-900 pl-4 list-disc">
                  <li>Wound infection or bleeding.</li>
                  <li>A collection of pus (abscess) in the tummy.</li>
                  <li>Scar tissue that, rarely, blocks the bowel later.</li>
                  <li>A hernia at the site of a cut.</li>
                  <li>Appendicitis returning in the small part of the appendix left behind (stump appendicitis).</li>
                  <li>Blood clots and problems linked to the anaesthetic.</li>
                  <li>Rarely, injury to nearby organs.</li>
                </ul>
                <p className="text-xs text-amber-800 italic pt-1 font-medium">
                  The risks are higher if the appendix has already burst. Your surgeon explains them before you agree to surgery.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-[#F7F1F6] border border-brand/15 space-y-3 mb-6">
                <h3 className="font-heading font-bold text-base text-medical-heading">Recovery</h3>
                <p className="text-[15px] leading-[1.7] text-medical-body">
                  Most people recover in one to two weeks. It can take longer if the appendix burst. After keyhole surgery some people go home the next day. After open surgery, or if there are complications, a stay of a few days may be needed. It is common to have pain around the wounds and constipation or diarrhoea for a few days. Many people take one to two weeks off work or school, sometimes longer. Heavy lifting and strenuous sport are avoided for a few weeks. Your surgeon gives clear advice about wound care, driving and activity.
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
                  <li>Soreness or redness around a wound that is getting worse.</li>
                  <li>Pus or bleeding from a wound.</li>
                  <li>A fever.</li>
                  <li>Tummy pain that is getting worse despite pain relief.</li>
                  <li>Repeated vomiting.</li>
                  <li>A tender lump under a scar.</li>
                </ul>
                <p className="text-xs font-semibold text-rose-950 pt-1 border-t border-rose-200/70">
                  Go to an emergency department at once if you have increasing pain and swelling in the tummy with a high temperature, or severe pain in a lump under a scar.
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
                  { icon: <FileText className="w-4 h-4" />, title: "Honest advice", desc: "you hear about the options and the risks, not only surgery." },
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

              <div className="p-4 sm:p-5 rounded-2xl bg-rose-50 border border-rose-200 mb-6">
                <p className="text-sm font-semibold text-rose-950">
                  Suspected appendicitis cannot wait for a routine appointment. If you have the warning signs above, go to the nearest hospital emergency department.
                </p>
              </div>

              <p className="text-fluid-body text-medical-body leading-[1.7] mb-6">
                If your symptoms are mild and not getting worse, or you have ongoing right-sided tummy pain you would like assessed, you can arrange a consultation:
              </p>

              <div className="space-y-4">
                {[
                  "Call 0321 1836189 or send a WhatsApp message to ask about appointment times.",
                  "Share a short note about your problem. Opening WhatsApp does not confirm an appointment. Your visit is arranged once a time is agreed with you.",
                  "Bring earlier reports, scans and prescriptions, a list of your medicines, and details of any earlier operations.",
                  "At the consultation, the surgeon examines you, explains what she finds and advises on the next steps."
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
                Appendix Surgery FAQs
              </h2>

              <FAQAccordion items={appendixFaqs} />
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
                  { slug: "/gallbladder-surgery/", title: "Gallbladder surgery", desc: "upper abdominal pain that can be confused with other tummy problems." },
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
                    alt="Dr. Hira Nawaz – Female Appendix Surgeon Faisalabad"
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

          <p className="text-sm font-semibold text-rose-200">
            If you have severe or worsening tummy pain, go to the nearest hospital emergency department first.
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
