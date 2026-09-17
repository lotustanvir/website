import { ArrowRight } from 'lucide-react';

export default function SectionCTA() {
  return (
    <div className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <a
          href="#register"
          className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40 hover:-translate-y-0.5"
        >
          Register Now
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
