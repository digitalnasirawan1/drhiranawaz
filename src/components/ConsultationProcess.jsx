import { PhoneCall, MessageSquareHeart, Stethoscope, FileText, HeartHandshake } from 'lucide-react';

export default function ConsultationProcess() {
  const steps = [
    {
      step: "01",
      title: "Contact for Appointment",
      description: "Reach out via WhatsApp or call 0321 1836189 to schedule your consultation slot during outpatient hours (4:00 PM – 9:00 PM).",
      icon: PhoneCall
    },
    {
      step: "02",
      title: "Discuss Symptoms",
      description: "Explain your primary discomfort, medical history, prior scans, and specific concerns in a private, supportive consultation environment.",
      icon: MessageSquareHeart
    },
    {
      step: "03",
      title: "Clinical Assessment",
      description: "Undergo a thorough, gentle physical examination by Female Surgeon Dr. Hira Nawaz, followed by targeted diagnostic imaging or lab review.",
      icon: Stethoscope
    },
    {
      step: "04",
      title: "Understand Treatment Options",
      description: "Receive transparent explanations regarding conservative medical care, minimally invasive laparoscopic surgery, or open surgical procedures.",
      icon: FileText
    },
    {
      step: "05",
      title: "Follow-Up Guidance",
      description: "Benefit from clear postoperative guidelines, dietary and activity instructions, and scheduled follow-up visits to ensure smooth recovery.",
      icon: HeartHandshake
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F7F1F6] border-b border-[#E7E7E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand/10 text-brand mb-3">
            Step-by-Step Patient Journey
          </span>
          <h2 className="font-heading text-fluid-h2 font-bold text-medical-heading tracking-tight">
            The Surgical Consultation Process
          </h2>
          <p className="mt-4 text-fluid-body text-medical-secondary leading-relaxed">
            Every patient receives personalized, evidence-based surgical evaluation with an emphasis on clinical safety, patient comfort, and clear communication.
          </p>
        </div>

        {/* Steps Grid with Connected Milestone Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-6 border border-[#E7E7E7] shadow-subtle hover:shadow-card hover:border-brand/40 transition-all duration-300 relative flex flex-col justify-between group transform hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-heading text-brand/25 group-hover:text-brand transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-brand-soft text-brand flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-medical-heading mb-2 group-hover:text-brand transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-medical-secondary leading-[1.6]">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-50 flex items-center text-xs text-brand font-bold uppercase tracking-wider">
                  <span>Step {item.step} of 05</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
