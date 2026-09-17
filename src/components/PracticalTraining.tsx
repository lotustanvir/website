import { Cog, Flame, Droplets, Thermometer, Gauge, Bug, Monitor, Settings, Pipette, BarChart3 } from 'lucide-react';

const highlights = [
  { icon: Cog, label: 'ODU / IDU Units' },
  { icon: Settings, label: 'Y-Joint / Refnet' },
  { icon: Pipette, label: 'Copper Piping' },
  { icon: Flame, label: 'Brazing' },
  { icon: Droplets, label: 'Nitrogen Purging' },
  { icon: Gauge, label: 'Pressure Testing' },
  { icon: Thermometer, label: 'Triple Vacuumization' },
  { icon: Droplets, label: 'Refrigerant Charging' },
  { icon: Monitor, label: 'Diagnostic Software' },
  { icon: Bug, label: 'Fault Simulation' },
  { icon: Settings, label: 'Test Runs' },
  { icon: Cog, label: 'Troubleshooting' },
  { icon: BarChart3, label: 'BOQ Preparation' },
];

export default function PracticalTraining() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-cool-800 via-navy-800 to-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-cool-300 uppercase tracking-wider mb-2">Hands-On Training</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Practical Training Highlights
          </h2>
          <p className="text-navy-300 max-w-2xl mx-auto text-lg">
            Work directly with industrial equipment and real-world VRF systems throughout the course.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 hover:border-cool-400/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-cool-500/20 group-hover:bg-cool-500/30 rounded-xl flex items-center justify-center mx-auto mb-3 transition-colors">
                <item.icon className="w-6 h-6 text-cool-300" />
              </div>
              <span className="text-sm font-medium text-navy-100">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
