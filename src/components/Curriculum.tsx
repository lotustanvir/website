import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { curriculum, type Module, type DayItem } from '../data/courseData';

function DayAccordion({ dayItem }: { dayItem: DayItem }) {
  const [open, setOpen] = useState(false);
  const panelId = `day-${dayItem.day}-panel`;

  return (
    <div className="border border-navy-100 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-navy-50 transition-colors"
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="w-8 h-8 bg-accent-100 text-accent-700 rounded-lg flex items-center justify-center text-sm font-bold shrink-0">
            {dayItem.day}
          </span>
          <span className="font-semibold text-navy-800 text-sm sm:text-base truncate">{dayItem.title}</span>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-navy-400 transition-transform duration-200 shrink-0 ml-2 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={`day-${dayItem.day}-button`}
        hidden={!open}
      >
        <div className="px-4 pb-4 pt-1 bg-navy-50/50">
          <ul className="space-y-2 ml-11">
            {dayItem.topics.map((topic) => (
              <li key={topic} className="text-navy-600 text-sm flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mt-2 shrink-0" />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ModuleTimeline({ module, isLast }: { module: Module; isLast: boolean }) {
  return (
    <div className="relative flex gap-4 sm:gap-6">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 bg-accent-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0 z-10">
          {module.id}
        </div>
        {!isLast && <div className="w-0.5 flex-1 bg-accent-200 mt-2" />}
      </div>

      <div className="flex-1 pb-8 min-w-0">
        <div className="mb-4">
          <span className="text-xs font-semibold text-accent-600 uppercase tracking-wider">{module.days}</span>
          <h3 className="text-lg sm:text-xl font-bold text-navy-900 mt-1">{module.title}</h3>
          <p className="text-navy-500 text-sm mt-1">{module.description}</p>
        </div>

        <div className="space-y-3">
          {module.dayItems.map((dayItem) => (
            <DayAccordion key={dayItem.day} dayItem={dayItem} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Curriculum() {
  return (
    <section id="curriculum" className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-2">Curriculum</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            15-Day Course Structure
          </h2>
          <p className="text-navy-500 max-w-2xl mx-auto text-lg">
            A carefully designed progression from fundamentals to advanced practical skills and business mastery.
          </p>
        </div>

        <div className="space-y-2">
          {curriculum.map((module, index) => (
            <ModuleTimeline
              key={module.id}
              module={module}
              isLast={index === curriculum.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
