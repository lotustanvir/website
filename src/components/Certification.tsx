import { Award, CheckCircle } from 'lucide-react';

const certOrganizations = [
  { name: 'Daffodil International University', short: 'DIU', role: 'Organizer' },
  { name: 'Skill Jobs', short: 'SJ', role: 'Co-Organizer' },
  { name: 'Greenary Institute of Science and Technology', short: 'GI', role: 'Co-Organizer' },
  { name: 'Zero HVAC (China)', short: 'ZH', role: 'Technical Partner' },
];

export default function Certification() {
  return (
    <section id="certification" className="py-16 lg:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-2">Certification</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Earn a Joint Professional Certificate
          </h2>
          <p className="text-navy-500 max-w-2xl mx-auto text-lg">
            Students who successfully complete the practical exam and presentation receive an official joint course completion certificate.
          </p>
        </div>

        <div className="relative bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-8 sm:p-12 text-white overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-cool-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl flex items-center justify-center shadow-lg shadow-accent-500/30">
                <Award className="w-10 h-10 text-white" />
              </div>
            </div>

            <div className="text-center mb-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">Course Completion Certificate</h3>
              <p className="text-navy-300 max-w-lg mx-auto">
                Awarded upon successful completion of the practical examination and defense presentation.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {certOrganizations.map((org) => (
                <div
                  key={org.name}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-sm">{org.short}</span>
                  </div>
                  <p className="text-white text-xs font-medium leading-relaxed">{org.name}</p>
                  <p className="text-navy-400 text-xs mt-1">{org.role}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col items-center gap-4">
              <div className="inline-flex items-center gap-2 bg-accent-500/10 border border-accent-500/20 rounded-full px-6 py-2">
                <CheckCircle className="w-4 h-4 text-accent-400" />
                <span className="text-accent-300 text-sm font-medium">Joint Official Certificate</span>
              </div>
              <p className="text-navy-400 text-xs text-center max-w-md">
                No fabricated signatures, seals, or certificate numbers. Certificate details are provided upon course completion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
