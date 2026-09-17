import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Build Technical Skills.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-cool-400">
            Master VRF.
          </span>{' '}
          Understand the Business.
        </h2>

        <p className="text-navy-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Join a practical 15-day professional training program covering VRF engineering, installation, commissioning, diagnostics and HVAC business management.
        </p>

        <a
          href="#register"
          className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all shadow-xl shadow-accent-500/25 hover:shadow-accent-500/40 hover:-translate-y-0.5"
        >
          Register Now
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
