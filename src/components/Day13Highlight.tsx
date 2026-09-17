import { useState } from 'react';
import { Clock, Star, ChevronDown } from 'lucide-react';
import { day13Schedule } from '../data/courseData';

function SessionCard({ session, index }: { session: typeof day13Schedule[0]; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-navy-100 hover:shadow-lg transition-shadow overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full p-6 text-left"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-accent-600" />
            </div>
            <div>
              <span className="text-accent-600 font-mono text-sm font-semibold block">{session.time}</span>
              <h3 className="text-navy-900 font-bold text-base sm:text-lg">{session.title}</h3>
            </div>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-navy-400 transition-transform duration-200 shrink-0 ml-4 ${
              open ? 'rotate-180' : ''
            }`}
          />
        </div>
      </button>
      {open && (
        <div className="px-6 pb-6 pt-0">
          <ul className="space-y-2 ml-13">
            {session.topics.map((topic) => (
              <li key={topic} className="flex items-start gap-2 text-navy-600 text-sm">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mt-2 shrink-0" />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Day13Highlight() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-accent-50 via-white to-cool-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent-500/10 border border-accent-500/20 rounded-full px-4 py-1.5 mb-4">
            <Star className="w-4 h-4 text-accent-500" />
            <span className="text-accent-700 text-sm font-semibold">Special Feature</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Day 13: Special Full-Day Business Masterclass
          </h2>
          <p className="text-navy-500 max-w-2xl mx-auto text-lg">
            A dedicated day covering the complete business ecosystem of HVAC &amp; refrigerator operations.
          </p>
        </div>

        <div className="space-y-4">
          {day13Schedule.map((session, index) => (
            <SessionCard key={session.time} session={session} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
