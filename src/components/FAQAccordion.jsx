import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQAccordion({ items, defaultOpenIndex = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  if (!items || items.length === 0) return null;

  return (
    <div className="space-y-4">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div 
            key={idx}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen 
                ? 'border-brand/50 bg-white shadow-card ring-2 ring-brand/10' 
                : 'border-slate-200/90 bg-white hover:border-brand/30 hover:shadow-subtle'
            }`}
          >
            <button
              type="button"
              onClick={() => toggleItem(idx)}
              className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-brand group"
              aria-expanded={isOpen}
            >
              <div className="flex items-center space-x-3.5 pr-4">
                <span className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold transition-colors ${
                  isOpen ? 'bg-brand text-white' : 'bg-brand-soft text-brand group-hover:bg-brand/20'
                }`}>
                  Q{idx + 1}
                </span>
                <span className="font-heading font-semibold text-faq-question text-medical-heading leading-snug group-hover:text-brand transition-colors">
                  {item.question}
                </span>
              </div>
              
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                isOpen ? 'bg-brand text-white rotate-180 shadow-sm' : 'bg-slate-100 text-brand group-hover:bg-brand-soft'
              }`}>
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 pt-3 text-base text-medical-body leading-[1.7] border-t border-slate-100 bg-slate-50/40 animate-in fade-in duration-200">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
