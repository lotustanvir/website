import { Wrench, Cpu, Search, TrendingUp, CheckCircle } from 'lucide-react';
import { learningCategories } from '../data/courseData';

const iconMap: Record<string, React.ElementType> = {
  Wrench,
  Cpu,
  Search,
  TrendingUp,
};

export default function LearningOutcomes() {
  return (
    <section id="learning" className="py-16 lg:py-24 bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent-400 uppercase tracking-wider mb-2">Learning Outcomes</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What You Will Master
          </h2>
          <p className="text-navy-300 max-w-2xl mx-auto text-lg">
            Four core competency areas covering technical skills, control systems, diagnostics, and business management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {learningCategories.map((category) => {
            const IconComponent = iconMap[category.icon] || Wrench;
            return (
              <div
                key={category.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-accent-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cool-400 mt-0.5 shrink-0" />
                      <span className="text-navy-200 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
