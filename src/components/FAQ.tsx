import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqItems } from '../data/courseData';

function FAQItem({ item, index }: { item: typeof faqItems[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-${index}-panel`;
  const buttonId = `faq-${index}-button`;

  return (
    <div className="border border-navy-100 rounded-xl overflow-hidden">
      <button
        id={buttonId}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-navy-50 transition-colors"
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="w-8 h-8 bg-accent-100 text-accent-700 rounded-lg flex items-center justify-center text-sm font-bold shrink-0">
            {index + 1}
          </span>
          <span className="font-semibold text-navy-800 text-sm sm:text-base">{item.question}</span>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-navy-400 transition-transform duration-200 shrink-0 ml-4 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
      >
        <div className="px-5 pb-5 pt-1 ml-11">
          <p className="text-navy-600 text-sm leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent-50 rounded-full px-4 py-1.5 mb-4">
            <HelpCircle className="w-4 h-4 text-accent-500" />
            <span className="text-accent-700 text-sm font-semibold">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <FAQItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
