import { useState, useId } from 'react';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  ExternalLink,
  MapPin,
  Clock,
  Activity,
  Sparkles,
  Stethoscope,
  Heart,
  FileText,
  AlertCircle,
  Building2,
  CalendarCheck,
  CheckCircle2
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import SEOHead from '../components/SEOHead';
import { businessInfo } from '../data/businessInfo';

export default function FAQsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState({
    's01-0': true,
    's02-0': true,
    's03-0': true,
    's04-0': true,
    's05-0': true,
    's06-0': true,
    's07-0': true,
  });

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqSections = [
    {
      id: "about-doctor",
      orderId: "s01",
      title: "About Dr. Hira Nawaz",
      badge: "Doctor Profile",
      icon: ShieldCheck,
      description: "Learn who Dr. Hira Nawaz is, her medical credentials, surgical scope and role in Faisalabad.",
      items: [
        {
          question: "Who is Dr. Hira Nawaz?",
          answer: "Dr. Hira Nawaz is a female general and laparoscopic surgeon in Faisalabad. She is Head of the Surgery Department at Fauji Foundation Hospital Faisalabad. She sees patients for consultation at Faisal Hospital. You can read more on her About page."
        },
        {
          question: "What are her qualifications?",
          answer: "She holds an MBBS and an FCPS in General Surgery. MBBS is a medical degree. FCPS is a postgraduate qualification for specialist doctors. It is awarded by the College of Physicians and Surgeons Pakistan after specialist training and exams."
        },
        {
          question: "What type of surgeon is Dr. Hira Nawaz?",
          answer: "She is a general surgeon and a laparoscopic surgeon. Laparoscopic surgery is also called keyhole surgery. The surgeon uses small cuts and a camera to see inside the body. Whether keyhole surgery is used depends on your condition and your medical check-up."
        },
        {
          question: "What does a general surgeon do?",
          answer: "A general surgeon finds the cause of a problem and decides how to treat it. The treatment may be tests, medicine, simple care or an operation. The surgeon also cares for you before and after an operation and explains each step."
        }
      ],
      internalLink: {
        label: "Learn More About Dr. Hira Nawaz",
        url: "/about/"
      }
    },
    {
      id: "general-surgery",
      orderId: "s02",
      title: "General Surgery Questions",
      badge: "Surgical Practice",
      icon: Activity,
      description: "Understanding general surgery, treated conditions, and what occurs during an outpatient consultation.",
      items: [
        {
          question: "What is general surgery?",
          answer: "General surgery is a medical specialty that treats many common health problems, often with an operation. It covers problems of the belly and gut, the back passage, the breast and the thyroid gland. It also covers lumps and infections of the skin. A general surgeon also decides when surgery is not needed."
        },
        {
          question: "Which conditions can a general surgeon treat?",
          answer: "Common examples are hernias, gallstones, appendicitis, piles, fissures, fistulas, skin lumps, abscesses, breast lumps and thyroid swellings. A general surgeon may also see foot wounds in people with diabetes and some leg vein problems. After a check-up, the surgeon explains which treatment, if any, you need."
        },
        {
          question: "Does every surgical condition need an operation?",
          answer: "No. Some problems get better with medicine, simple care or time. Some only need regular check-ups. For example, many gallstones cause no symptoms and need no treatment. Surgery is advised when it is the best way to treat the problem or prevent harm."
        },
        {
          question: "When should someone consult a general surgeon?",
          answer: "See a surgeon if you have a new lump, a bulge, ongoing belly pain, bleeding from the back passage or a wound that is slow to heal. Do not wait if you are worried. For sudden severe pain, repeated vomiting or a hard, painful lump that cannot be pushed back, go to a hospital emergency department straight away."
        },
        {
          question: "What happens during a surgical consultation?",
          answer: "The doctor asks about your symptoms and past health, and she examines you. She may suggest tests, such as blood tests or a scan, if they are needed. Then she explains what she has found and what your options are. You can ask questions at any point."
        }
      ],
      internalLink: {
        label: "Learn About General Surgery",
        url: "/general-surgery/"
      },
      ctaWhatsApp: true
    },
    {
      id: "laparoscopic-surgery",
      orderId: "s03",
      title: "Laparoscopic (Keyhole) Surgery Questions",
      badge: "Minimally Invasive",
      icon: Sparkles,
      description: "How keyhole surgery works, difference from open surgery, expected benefits, and suitability.",
      items: [
        {
          question: "What is laparoscopic surgery and how is it done?",
          answer: "Laparoscopic surgery is also called keyhole surgery. The surgeon makes a few small cuts in the skin. A thin tube with a camera goes in through one cut and shows the inside of the body on a screen. Thin tools go in through the other cuts. It is usually done under general anaesthetic, so you are asleep."
        },
        {
          question: "What is the difference between open and laparoscopic surgery?",
          answer: "In open surgery, the surgeon makes one larger cut to reach the problem. In keyhole surgery, the surgeon makes several small cuts. The problem being treated may be the same. The choice depends on your condition, your health and what is safest for you. Open surgery is sometimes the better choice."
        },
        {
          question: "What are the possible benefits of keyhole surgery?",
          answer: "For some patients, keyhole surgery can mean smaller scars, less pain and a quicker return to normal life than open surgery. These benefits are not guaranteed. They depend on the problem, the operation and the person."
        },
        {
          question: "What are the possible risks of keyhole surgery?",
          answer: "All operations have risks, including keyhole surgery. Possible problems include infection, bleeding, damage to nearby organs or blood vessels, and a hernia at a cut site. Sometimes the surgeon has to change to open surgery for safety. Serious problems are not common. Your surgeon explains the risks that apply to you."
        },
        {
          question: "Is laparoscopic surgery suitable for everyone?",
          answer: "No. Earlier operations, other health problems or an emergency can make open surgery safer. Some conditions are also treated better by one method than the other. Your surgeon decides after your medical check-up. You can ask why she suggests one method over another."
        }
      ],
      internalLink: {
        label: "Learn About Laparoscopic Surgery",
        url: "/laparoscopic-surgery/"
      }
    },
    {
      id: "common-conditions",
      orderId: "s04",
      title: "Common Surgical Conditions",
      badge: "13 Clinical Topics",
      icon: Stethoscope,
      description: "Frequently asked questions covering hernia, gallbladder, appendix, thyroid, breast, anorectal, and skin conditions.",
      items: [
        {
          question: "What is a hernia, and does it always need surgery?",
          answer: "A hernia is a bulge that appears when part of the bowel or other tissue pushes through a weak spot in the muscle wall. It often shows in the groin or belly. A hernia does not go away on its own, but a small one with no symptoms may only be watched. Go to hospital urgently if the lump is hard, painful and cannot be pushed back, or if you have vomiting with it.",
          links: [
            { label: "Hernia Surgery", url: "/hernia-surgery/" }
          ]
        },
        {
          question: "Do gallstones always need surgery?",
          answer: "No. Many people have gallstones and never feel them. Treatment is usually advised if the stones cause repeated pain or other problems, such as infection of the gallbladder. Removing the gallbladder is the usual treatment, and most people can live normally without it.",
          links: [
            { label: "Gallbladder Surgery", url: "/gallbladder-surgery/" }
          ]
        },
        {
          question: "What are the signs of appendicitis, and why is it urgent?",
          answer: "Appendicitis is a swollen, infected appendix. It often causes pain that settles in the lower right side of the belly, with sickness, loss of appetite or fever. A burst appendix can be dangerous. If you think you may have appendicitis, go to a hospital emergency department. Do not wait for a routine appointment.",
          links: [
            { label: "Appendix Surgery", url: "/appendix-surgery/" }
          ]
        },
        {
          question: "Does a thyroid swelling mean cancer?",
          answer: "No. Most thyroid lumps are not cancer. But any new lump or swelling at the front of the neck needs a check. The doctor may suggest tests, such as a blood test or a scan. Surgery is only one possible option. If a swelling makes breathing or swallowing hard, seek urgent medical help.",
          links: [
            { label: "Thyroid Surgery", url: "/thyroid-surgery/" }
          ]
        },
        {
          question: "What should I do if I find a breast lump?",
          answer: "Arrange a check as soon as you can. Most breast lumps are not cancer, but you cannot tell by touch, so every new lump needs an examination. Also report nipple discharge, skin dimpling or a lump in the armpit. The doctor may suggest a scan or other tests. Surgery is needed only in some cases.",
          links: [
            { label: "Breast Surgery", url: "/breast-surgery/" }
          ]
        },
        {
          question: "What is the difference between piles and an anal fissure?",
          answer: "Piles (hemorrhoids) are swollen veins in or around the back passage. They may bleed, itch or form a soft lump. A fissure is a small tear in the skin of the back passage. It often causes sharp pain when you pass stool. Both can cause bleeding, so please have any bleeding checked. Many cases improve without surgery.",
          links: [
            { label: "Hemorrhoids Surgery", url: "/hemorrhoids-surgery/" },
            { label: "Anal Fissure Treatment", url: "/anal-fissure-treatment/" }
          ]
        },
        {
          question: "Can an anal fistula heal on its own?",
          answer: "Rarely. An anal fistula is a small tunnel between the inside of the back passage and the skin nearby. It often follows an abscess. Fistulas seldom heal without treatment, and surgery is usually needed. The method depends on where the tunnel runs.",
          links: [
            { label: "Fistula in Ano Surgery", url: "/fistula-in-ano-surgery/" }
          ]
        },
        {
          question: "What is the difference between a lipoma and a sebaceous cyst?",
          answer: "A lipoma is a soft lump of fat under the skin. A sebaceous cyst is a small bump filled with a soft, oily material. Both are usually harmless. Have any new lump checked, and do not squeeze a cyst. Removal can be discussed if a lump is painful, growing, infected or in the way.",
          links: [
            { label: "Lipoma Removal", url: "/lipoma-removal/" },
            { label: "Sebaceous Cyst Removal", url: "/sebaceous-cyst-removal/" }
          ]
        },
        {
          question: "Why do foot wounds need quick care if I have diabetes?",
          answer: "Diabetes can reduce feeling and blood flow in the feet. A small cut or blister may go unnoticed, heal slowly and become infected. See a doctor soon for any foot wound. Go to hospital urgently if the foot is red, hot or swollen, or if you feel unwell with a foot sore.",
          links: [
            { label: "Diabetic Foot Treatment", url: "/diabetic-foot-treatment/" }
          ]
        },
        {
          question: "What is an abscess, and does it need draining?",
          answer: "An abscess is a painful swelling filled with pus, caused by infection. A very small one may settle by itself. Many need a small procedure to let the pus out so the infection can clear. Do not squeeze it. Seek urgent care if you have a fever or the redness is spreading.",
          links: [
            { label: "Abscess Drainage", url: "/abscess-drainage/" }
          ]
        },
        {
          question: "Do varicose veins always need treatment?",
          answer: "No. Varicose veins are swollen, twisted veins, most often in the legs. Many cause no trouble. A check-up is useful if they cause pain, heaviness, swelling, itchy skin or skin changes, or if a vein bleeds. Treatment options depend on your examination and tests.",
          links: [
            { label: "Varicose Veins Treatment", url: "/varicose-veins-treatment/" }
          ]
        }
      ],
      sectionActions: [
        { label: "View All Services", url: "/services/", primary: false },
        { label: "Book Appointment on WhatsApp", url: businessInfo.whatsappUrl, primary: true, isExternal: true }
      ]
    },
    {
      id: "preparation",
      orderId: "s05",
      title: "Before Surgery and Consultation Preparation",
      badge: "Preparation Guide",
      icon: FileText,
      description: "How to prepare for your clinic visit, what documents to bring, fasting, and discussing medications.",
      items: [
        {
          question: "What should I bring to a surgical consultation?",
          answer: "Bring any medical reports, scans and blood test results you have. Bring papers from earlier hospital stays or operations. Bring a list of your medicines and any allergies. Write down your symptoms and your questions. These help the doctor understand your case quickly."
        },
        {
          question: "Will I need tests before surgery?",
          answer: "Maybe. Tests depend on your problem, your age and your general health. They may include blood tests, a scan or other checks. Not every patient needs every test. The doctor will explain which tests are useful for you and why."
        },
        {
          question: "How can I prepare questions for my surgeon?",
          answer: "Write your questions before the visit so you do not forget them. Useful ones are: What is the problem? Do I need surgery? What other choices do I have? What are the risks? What will recovery be like? Ask the surgeon to explain anything you do not understand. You may bring a family member with you."
        },
        {
          question: "Should I tell my surgeon about my medicines and allergies?",
          answer: "Yes. Tell the doctor about all your medicines, including blood thinners, diabetes medicines, vitamins and herbal products. Also mention allergies and long-term illnesses. This helps the team plan your care safely. Do not stop any prescribed medicine on your own. Ask the doctor first."
        },
        {
          question: "Can I eat or drink before surgery?",
          answer: "It depends on the operation and the type of anaesthetic. Many operations need a period without food and drink so the anaesthetic is safe. Your surgical team will give you clear instructions for your own operation. Please follow them exactly. If you have diabetes or take regular medicines, ask what to do well before the day."
        }
      ],
      internalLink: {
        label: "Information for Patients",
        url: "/for-patients/"
      }
    },
    {
      id: "recovery-safety",
      orderId: "s06",
      title: "Surgery, Recovery and Safety",
      badge: "Recovery & Risk",
      icon: AlertCircle,
      description: "Honest facts about surgical healing, potential complications, follow-up, and urgent warning signs.",
      items: [
        {
          question: "How will I know if surgery is the right choice for me?",
          answer: "The doctor looks at your symptoms, your examination and any test results. She then explains your options, what may happen with and without surgery, and the risks. You can ask questions and take time to think. The decision is made together with you."
        },
        {
          question: "How long does recovery take?",
          answer: "It depends on the operation, the problem and your general health. Recovery after keyhole surgery is often quicker than after open surgery, but it varies from person to person. Your surgeon will tell you what to expect for your own operation, including when you can return to work and daily activities."
        },
        {
          question: "What risks can surgery have?",
          answer: "All surgery has some risks. Examples are pain, bleeding, wound infection, problems with the anaesthetic and blood clots. Some operations have risks of their own. Serious problems are not common. Before surgery, your surgeon explains the risks for your operation. You agree to treatment only after you understand them."
        },
        {
          question: "Will I need follow-up visits?",
          answer: "Often, yes. A follow-up visit lets the doctor check your healing, answer questions and review any test results. The plan depends on your operation and your recovery. Your surgeon will tell you when to come back and which signs to watch for in between."
        },
        {
          question: "When should I seek urgent medical help after surgery?",
          answer: "Go to the nearest hospital emergency department if you have severe or worsening pain, a high temperature, repeated vomiting, bleeding that does not stop, chest pain or trouble breathing. Redness, heat, swelling or pus around a wound can mean infection, so get it checked quickly. Do not wait for a reply to a message."
        },
        {
          question: "Can treatment results vary from person to person?",
          answer: "Yes. Results depend on the condition, the treatment, your general health and how you recover. No doctor can promise a particular result. Your surgeon can explain what is realistic for your own situation."
        }
      ],
      sectionCTAs: [
        { label: "Book Appointment on WhatsApp", url: businessInfo.whatsappUrl, isExternal: true, isWhatsApp: true },
        { label: "Call for Appointment", url: businessInfo.phoneTel, isExternal: false, isPhone: true }
      ]
    },
    {
      id: "appointments-location",
      orderId: "s07",
      title: "Appointments, Location and Hours",
      badge: "Clinic & Timings",
      icon: MapPin,
      description: "Booking procedures, Faisal Hospital address, consultation timings (4:00 PM – 9:00 PM), and directions.",
      items: [
        {
          question: "How can I book an appointment?",
          answer: "Send a WhatsApp message at https://wa.me/923211836189 or call 0321 1836189. Share your name and a short note about your concern. The team will help you choose a suitable time. Consultations are held Monday to Saturday."
        },
        {
          question: "Where is Faisal Hospital located?",
          answer: "Faisal Hospital is at Plot 547, Muhammadia Colony Block A, People's Colony No 1, Faisalabad, Pakistan. Dr. Hira Nawaz sees patients there. For more details, please visit the Location page.",
          links: [
            { label: "View Location Details", url: "/location/" }
          ]
        },
        {
          question: "What are the consultation hours, and is the clinic open on Sunday?",
          answer: "Consultation hours are Monday to Saturday, 4:00 PM to 9:00 PM. The clinic is closed on Sunday. Please book first, so the team can give you a suitable time."
        },
        {
          question: "Can I contact the clinic through WhatsApp?",
          answer: "Yes. WhatsApp and phone are the two ways to arrange an appointment. Use WhatsApp to book and to ask simple questions about your visit. A message cannot give a diagnosis or emergency advice. If you have urgent symptoms, go to the nearest hospital emergency department.",
          links: [
            { label: "Contact", url: "/contact/" }
          ]
        },
        {
          question: "How can I get directions?",
          answer: "Open the Google Maps link at https://maps.app.goo.gl/UfRntfLaEcPaeVAU7 on your phone. You can also search for Faisal Hospital, People's Colony No 1, Faisalabad. The Location page shows the address and hours.",
          buttons: [
            { label: "Get Directions on Google Maps", url: "https://maps.app.goo.gl/UfRntfLaEcPaeVAU7", isExternal: true },
            { label: "Book Appointment on WhatsApp", url: businessInfo.whatsappUrl, isExternal: true, isWhatsApp: true },
            { label: "Call for Appointment", url: businessInfo.phoneTel, isExternal: false, isPhone: true }
          ]
        }
      ]
    }
  ];

  // Flatten all questions for live search & schema
  const allQuestions = faqSections.flatMap(section => 
    section.items.map((item, idx) => ({
      ...item,
      sectionId: section.id,
      sectionTitle: section.title,
      uniqueId: `${section.orderId}-${idx}`
    }))
  );

  const filteredQuestions = searchQuery.trim() === ''
    ? null
    : allQuestions.filter(q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );

  // Complete Schema Candidate for FAQs (WebPage + FAQPage with all 41 items)
  const faqSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://drhiranawaz.com/faqs/#webpage",
        "url": "https://drhiranawaz.com/faqs/",
        "name": "General & Laparoscopic Surgery FAQs | Dr. Hira Nawaz",
        "isPartOf": { "@id": "https://drhiranawaz.com/#website" },
        "about": { "@id": "https://drhiranawaz.com/#physician" },
        "inLanguage": "en-PK"
      },
      {
        "@type": "FAQPage",
        "@id": "https://drhiranawaz.com/faqs/#faqpage",
        "url": "https://drhiranawaz.com/faqs/",
        "name": "General & Laparoscopic Surgery FAQs | Dr. Hira Nawaz",
        "isPartOf": { "@id": "https://drhiranawaz.com/#website" },
        "mainEntity": allQuestions.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <SEOHead 
        title="General & Laparoscopic Surgery FAQs | Dr. Hira Nawaz"
        description="Simple answers to common questions about general and laparoscopic surgery, treatment choices, consultation preparation and booking with Dr. Hira Nawaz in Faisalabad."
        canonical="https://drhiranawaz.com/faqs/"
        customSchema={faqSchema}
      />

      {/* B3. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#FBF8FA] via-white to-white pt-10 pb-16 md:pt-20 md:pb-24 border-b border-[#E7E7E7] overflow-hidden bg-grid-subtle">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-soft text-brand border border-brand/20">
              <HelpCircle className="w-3.5 h-3.5 mr-1.5" />
              Patient Information
            </span>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-slate-200 text-medical-heading shadow-subtle">
              41 Questions Answered
            </span>
          </div>

          <h1 className="font-heading text-fluid-h1 font-extrabold text-medical-heading tracking-tight leading-[1.1] mb-6">
            Frequently Asked Questions
          </h1>

          <p className="text-base sm:text-lg text-medical-body leading-relaxed max-w-3xl mx-auto font-normal mb-8">
            Find simple answers to common questions about general surgery, laparoscopic (keyhole) surgery and treatment choices. You can also learn what to bring to a consultation with Dr. Hira Nawaz and how to book. If you do not see your question, you are welcome to ask the clinic.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-sheen w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#653C61] to-[#4D2B49] hover:from-[#4D2B49] hover:to-[#3A1E37] transition-all shadow-glow-brand hover:shadow-elevated transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-5 h-5 mr-2.5 fill-current" />
              <span>Book Appointment on WhatsApp</span>
            </a>

            <a
              href={businessInfo.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-medical-heading bg-white hover:bg-brand-soft border-2 border-slate-200 hover:border-brand/40 transition-all shadow-subtle hover:shadow-card transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 mr-2 text-brand" />
              <span>Call for Appointment</span>
            </a>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search any question, symptom, or treatment (e.g. gallbladder, hernia, Sunday)..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border-2 border-slate-200 focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all text-sm sm:text-base text-medical-heading placeholder:text-slate-400 shadow-subtle"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-brand"
                >
                  Clear
                </button>
              )}
            </div>
            {searchQuery && filteredQuestions && (
              <p className="text-xs text-medical-secondary mt-2 text-left px-2">
                Found {filteredQuestions.length} {filteredQuestions.length === 1 ? 'question' : 'questions'} matching "{searchQuery}"
              </p>
            )}
          </div>

          {/* Anchor Links to 7 Question Groups */}
          {!searchQuery && (
            <div className="pt-8 border-t border-slate-200/80 mt-10">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Jump to Question Group
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {faqSections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-slate-200 hover:border-brand text-medical-heading hover:text-brand transition-all shadow-xs hover:shadow-subtle"
                  >
                    {sec.title}
                  </a>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* B4. MAIN CONTENT AREA */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* SEARCH RESULTS VIEW */}
          {searchQuery && filteredQuestions && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <h2 className="font-heading text-2xl font-bold text-medical-heading">
                  Search Results ({filteredQuestions.length})
                </h2>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-sm font-semibold text-brand hover:underline"
                >
                  Show All 41 Questions
                </button>
              </div>

              {filteredQuestions.length === 0 ? (
                <div className="text-center py-12 bg-brand-soft/50 rounded-3xl p-8 border border-brand/20">
                  <p className="text-base text-medical-heading font-semibold mb-2">
                    No matching questions found for "{searchQuery}".
                  </p>
                  <p className="text-sm text-medical-secondary mb-6">
                    You are welcome to contact Dr. Hira Nawaz's clinic directly via WhatsApp or phone with your question.
                  </p>
                  <a
                    href={businessInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 rounded-xl bg-brand text-white font-bold text-sm shadow-glow-brand"
                  >
                    <WhatsAppIcon className="w-4 h-4 mr-2 fill-current" />
                    Ask on WhatsApp
                  </a>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredQuestions.map((item) => (
                    <div
                      key={item.uniqueId}
                      className="p-6 rounded-2xl bg-white border-2 border-slate-200/90 shadow-subtle hover:border-brand/40 transition-all"
                    >
                      <div className="text-[11px] font-bold text-brand uppercase tracking-wider mb-2">
                        {item.sectionTitle}
                      </div>
                      <h3 className="font-heading text-lg font-bold text-medical-heading mb-3">
                        {item.question}
                      </h3>
                      <p className="text-service-body text-medical-secondary leading-relaxed">
                        {item.answer}
                      </p>
                      {item.links && (
                        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100">
                          {item.links.map((link, lIdx) => (
                            <Link
                              key={lIdx}
                              to={link.url}
                              className="inline-flex items-center text-xs font-bold text-brand hover:underline"
                            >
                              <span>{link.label}</span>
                              <ArrowRight className="w-3.5 h-3.5 ml-1" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ALL 7 CATEGORIZED FAQ SECTIONS (Visible when search is inactive) */}
          {!searchQuery && (
            <div className="space-y-16">
              {faqSections.map((section, sIdx) => {
                const SectionIcon = section.icon;
                return (
                  <div 
                    key={section.id} 
                    id={section.id} 
                    className="scroll-mt-24 pt-4 border-t first:border-t-0 border-slate-200"
                  >
                    {/* Section Header */}
                    <div className="mb-6">
                      <div className="flex items-center space-x-2.5 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-brand-soft text-brand flex items-center justify-center">
                          <SectionIcon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-brand uppercase tracking-wider">
                          {section.badge}
                        </span>
                      </div>
                      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-medical-heading tracking-tight">
                        {section.title}
                      </h2>
                      <p className="mt-1 text-sm sm:text-base text-medical-secondary">
                        {section.description}
                      </p>
                    </div>

                    {/* Accordion Questions */}
                    <div className="space-y-3.5">
                      {section.items.map((item, qIdx) => {
                        const uniqueKey = `${section.orderId}-${qIdx}`;
                        const isOpen = !!openItems[uniqueKey];
                        return (
                          <div
                            key={uniqueKey}
                            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                              isOpen 
                                ? 'bg-white border-brand/40 shadow-card' 
                                : 'bg-[#FDFBFD] hover:bg-white border-slate-200/90 shadow-subtle'
                            }`}
                          >
                            <button
                              type="button"
                              onClick={() => toggleItem(uniqueKey)}
                              aria-expanded={isOpen}
                              className="w-full flex items-start justify-between text-left p-5 sm:p-6 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                            >
                              <div className="flex items-start space-x-3.5 pr-4">
                                <span className={`text-xs font-bold px-2 py-0.5 rounded-md mt-0.5 shrink-0 ${
                                  isOpen ? 'bg-brand text-white' : 'bg-slate-100 text-slate-500'
                                }`}>
                                  Q{qIdx + 1}
                                </span>
                                <h3 className={`font-heading text-base sm:text-lg font-bold leading-snug transition-colors ${
                                  isOpen ? 'text-brand' : 'text-medical-heading group-hover:text-brand'
                                }`}>
                                  {item.question}
                                </h3>
                              </div>
                              <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 ${
                                isOpen ? 'bg-brand-soft text-brand rotate-180' : 'bg-slate-100 text-slate-400 group-hover:bg-brand-soft group-hover:text-brand'
                              }`}>
                                <ChevronDown className="w-4 h-4" />
                              </div>
                            </button>

                            {/* Full Answer Always In DOM for SEO & Accessibility */}
                            <div className={`${isOpen ? 'block' : 'hidden'} px-5 sm:px-6 pb-6 pt-1 text-service-body text-medical-body border-t border-slate-100/80`}>
                              <p className="leading-relaxed font-normal">
                                {item.answer}
                              </p>

                              {/* Question-specific links */}
                              {item.links && item.links.length > 0 && (
                                <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-slate-100">
                                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Related Guides:</span>
                                  {item.links.map((link, lIdx) => (
                                    <Link
                                      key={lIdx}
                                      to={link.url}
                                      className="inline-flex items-center text-xs sm:text-sm font-semibold text-brand hover:underline"
                                    >
                                      <span>{link.label}</span>
                                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                                    </Link>
                                  ))}
                                </div>
                              )}

                              {/* Question-specific buttons (e.g. Directions) */}
                              {item.buttons && item.buttons.length > 0 && (
                                <div className="flex flex-wrap gap-2.5 mt-4 pt-4 border-t border-slate-100">
                                  {item.buttons.map((btn, bIdx) => {
                                    if (btn.isWhatsApp) {
                                      return (
                                        <a
                                          key={bIdx}
                                          href={btn.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs"
                                        >
                                          <WhatsAppIcon className="w-3.5 h-3.5 mr-1.5 fill-current" />
                                          {btn.label}
                                        </a>
                                      );
                                    }
                                    if (btn.isPhone) {
                                      return (
                                        <a
                                          key={bIdx}
                                          href={btn.url}
                                          className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-bold bg-brand hover:bg-brand-hover text-white shadow-xs"
                                        >
                                          <Phone className="w-3.5 h-3.5 mr-1.5" />
                                          {btn.label}
                                        </a>
                                      );
                                    }
                                    return (
                                      <a
                                        key={bIdx}
                                        href={btn.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-bold bg-white border border-slate-200 text-medical-heading hover:text-brand shadow-xs"
                                      >
                                        <ExternalLink className="w-3.5 h-3.5 mr-1.5 text-brand" />
                                        {btn.label}
                                      </a>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Section Internal Link / CTAs */}
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
                      {section.internalLink && (
                        <Link
                          to={section.internalLink.url}
                          className="inline-flex items-center text-sm font-semibold text-brand hover:text-brand-hover group"
                        >
                          <span className="underline-offset-2 group-hover:underline">{section.internalLink.label}</span>
                          <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                      )}

                      {section.ctaWhatsApp && (
                        <a
                          href={businessInfo.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="button-sheen inline-flex items-center px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#653C61] to-[#4D2B49] hover:from-[#4D2B49] hover:to-[#3A1E37] transition-all shadow-glow-brand"
                        >
                          <WhatsAppIcon className="w-4 h-4 mr-2 fill-current" />
                          <span>Book Appointment on WhatsApp</span>
                        </a>
                      )}

                      {section.sectionActions && (
                        <div className="flex flex-wrap items-center gap-3">
                          {section.sectionActions.map((act, aIdx) => (
                            act.isExternal ? (
                              <a
                                key={aIdx}
                                href={act.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                                  act.primary 
                                    ? 'bg-gradient-to-r from-[#653C61] to-[#4D2B49] text-white shadow-glow-brand' 
                                    : 'bg-white border border-slate-200 text-medical-heading hover:text-brand'
                                }`}
                              >
                                <WhatsAppIcon className="w-4 h-4 mr-2 fill-current" />
                                <span>{act.label}</span>
                              </a>
                            ) : (
                              <Link
                                key={aIdx}
                                to={act.url}
                                className="inline-flex items-center px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white border border-slate-200 hover:border-brand text-medical-heading hover:text-brand transition-all shadow-xs"
                              >
                                <span>{act.label}</span>
                                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                              </Link>
                            )
                          ))}
                        </div>
                      )}

                      {section.sectionCTAs && (
                        <div className="flex flex-wrap items-center gap-3">
                          {section.sectionCTAs.map((act, aIdx) => (
                            <a
                              key={aIdx}
                              href={act.url}
                              target={act.isExternal ? "_blank" : undefined}
                              rel={act.isExternal ? "noopener noreferrer" : undefined}
                              className={`inline-flex items-center px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                                act.isWhatsApp 
                                  ? 'bg-gradient-to-r from-[#653C61] to-[#4D2B49] text-white shadow-glow-brand' 
                                  : 'bg-white border border-slate-200 text-medical-heading hover:text-brand'
                              }`}
                            >
                              {act.isWhatsApp && <WhatsAppIcon className="w-4 h-4 mr-2 fill-current" />}
                              {act.isPhone && <Phone className="w-4 h-4 mr-2 text-brand" />}
                              <span>{act.label}</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>
          )}

        </div>
      </section>

      {/* B5. MEDICAL DISCLAIMER ALERT */}
      <section className="py-8 bg-[#F7F1F6] border-t border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-subtle flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div className="space-y-1 text-sm text-medical-body leading-relaxed">
              <strong className="text-medical-heading block font-bold">Medical Disclaimer</strong>
              <p>
                These answers give general information only. They do not replace advice from a doctor who has examined you. If you have urgent symptoms, please go to the nearest hospital emergency department. You can read more in our{' '}
                <Link to="/medical-disclaimer/" className="text-brand font-semibold underline underline-offset-2 hover:text-brand-hover">
                  Medical Disclaimer
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* B5. FINAL CONSULTATION CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#4D2B49] via-[#653C61] to-[#3A1E37] text-white relative overflow-hidden">
        <div className="absolute -right-24 -bottom-24 w-[450px] h-[450px] rounded-full bg-white/10 pointer-events-none blur-3xl"></div>
        <div className="absolute -left-24 -top-24 w-[450px] h-[450px] rounded-full bg-white/5 pointer-events-none blur-3xl"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-rose-100 text-xs font-semibold uppercase tracking-wider mb-6 border border-white/20 shadow-sm backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4 mr-1.5 text-rose-200" />
            Dr. Hira Nawaz | MBBS, FCPS (General Surgery)
          </div>

          <h2 className="font-heading text-fluid-h2 font-bold tracking-tight text-white mb-6 leading-tight">
            Still Have a Question?
          </h2>

          <p className="max-w-2xl mx-auto text-fluid-body text-purple-100/90 leading-relaxed mb-8 font-normal">
            If you did not find your answer here, you are welcome to ask the clinic. Send a WhatsApp message or call to arrange a consultation at Faisal Hospital, Monday to Saturday, 4:00 PM to 9:00 PM. The best way to understand your own problem is to meet the doctor.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-sheen w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-button text-[#653C61] bg-white hover:bg-slate-50 transition-all duration-300 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.35)] hover:shadow-[0_20px_40px_-5px_rgba(255,255,255,0.25)] hover:scale-[1.03] active:scale-95 ring-2 ring-white/40 font-bold"
            >
              <WhatsAppIcon className="w-5 h-5 mr-2.5 fill-current" />
              <span>Book Appointment on WhatsApp</span>
            </a>

            <a
              href={businessInfo.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-button text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm transition-all duration-300 shadow-sm hover:shadow-elevated hover:scale-[1.02] active:scale-95 font-bold"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>Call for Appointment</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
