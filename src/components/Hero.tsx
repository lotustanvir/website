import { ArrowRight, Clock, Users, CalendarDays, Wrench } from 'lucide-react';

export default function Hero() {
  const stats = [
    { icon: CalendarDays, label: 'Days', value: '15' },
    { icon: Clock, label: 'Hours', value: '45' },
    { icon: Users, label: 'Seats / Batch', value: '40' },
    { icon: Wrench, label: 'Practical Training', value: 'Yes' },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 overflow-hidden pt-20 lg:pt-0">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cool-500 rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-accent-500/10 border border-accent-500/20 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
              <span className="text-accent-300 text-sm font-medium">Professional Certification Program</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              15-Day Advanced{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-cool-400">
                Industrial &amp; Commercial
              </span>{' '}
              HVAC Diploma
            </h1>

            <p className="text-lg sm:text-xl text-navy-300 leading-relaxed max-w-xl">
              VRF Engineering, Installation, Commissioning, Diagnostics & HVAC Business — comprehensive professional training program.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
                  <stat.icon className="w-5 h-5 text-accent-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-navy-300 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#register"
                className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-xl shadow-accent-500/25 hover:shadow-accent-500/40 hover:-translate-y-0.5"
              >
                Register Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#curriculum"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all border border-white/10"
              >
                View 15-Day Curriculum
              </a>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative bg-gradient-to-br from-navy-800/50 to-navy-700/30 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'VRF System Engineering', desc: 'Advanced training' },
                  { title: 'Hands-on Commissioning', desc: 'Real equipment' },
                  { title: 'Business & Sales', desc: 'Industry focused' },
                  { title: 'Professional Certification', desc: 'Joint certificate' },
                ].map((item) => (
                  <div key={item.title} className="bg-white/5 rounded-xl p-5 border border-white/5">
                    <div className="w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center mb-3">
                      <Wrench className="w-5 h-5 text-accent-400" />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-navy-400 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-gradient-to-r from-accent-500/10 to-cool-500/10 rounded-xl p-5 border border-accent-500/10">
                <p className="text-navy-200 text-sm text-center">
                  Jointly organized by{' '}
                  <span className="text-white font-semibold">DIU</span>,{' '}
                  <span className="text-white font-semibold">Skill Jobs</span>,{' '}
                  <span className="text-white font-semibold">Greenary Institute</span>{' '}
                  & Technical Partner <span className="text-white font-semibold">Zero HVAC (China)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
