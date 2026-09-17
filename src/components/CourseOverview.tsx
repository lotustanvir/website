import { BookOpen, Cpu, GraduationCap, Briefcase, HardHat, BarChart3 } from 'lucide-react';

const overviewCards = [
  {
    icon: BookOpen,
    title: 'Academic Knowledge',
    description: 'Learn from a curriculum developed by leading universities and industry experts.'
  },
  {
    icon: HardHat,
    title: 'Practical Technical Training',
    description: 'Hands-on work with real industrial VRF equipment and tools.'
  },
  {
    icon: Cpu,
    title: 'Software Diagnostics',
    description: 'Master diagnostic software, error codes, and inverter PCB troubleshooting.'
  },
  {
    icon: BarChart3,
    title: 'Project Costing & BOQ',
    description: 'Prepare professional BOQ, quotations, and project cost estimates.'
  },
  {
    icon: Briefcase,
    title: 'Business & Sales',
    description: 'HVAC dealership models, B2B/B2C sales, marketing, and service management.'
  },
  {
    icon: GraduationCap,
    title: 'Professional Certification',
    description: 'Earn a joint certificate recognized by leading industry organizations.'
  },
];

export default function CourseOverview() {
  return (
    <section id="overview" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-2">Course Overview</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Why This Course Matters
          </h2>
          <p className="text-navy-500 max-w-3xl mx-auto text-lg leading-relaxed">
            Modern buildings and industrial sectors increasingly require energy-efficient VRF systems. This comprehensive program combines academic knowledge with practical training to prepare you for the growing HVAC industry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {overviewCards.map((card) => (
            <div
              key={card.title}
              className="group bg-navy-50/50 hover:bg-white rounded-2xl p-8 border border-navy-100 hover:border-accent-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-accent-100 group-hover:bg-accent-500 rounded-xl flex items-center justify-center mb-5 transition-colors">
                <card.icon className="w-6 h-6 text-accent-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-navy-900 font-bold text-lg mb-2">{card.title}</h3>
              <p className="text-navy-500 text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
