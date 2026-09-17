import { organizers, technicalPartner } from '../data/courseData';

export default function TrustPartners() {
  return (
    <section className="bg-navy-50 py-16 lg:py-20 border-b border-navy-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-2">Jointly Organized By</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">Trusted Organizations</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {organizers.map((org) => (
            <div
              key={org.name}
              className="bg-white rounded-2xl p-8 text-center shadow-sm border border-navy-100 hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-navy-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-navy-700 font-bold text-xl">
                  {org.name.split(' ').slice(0, 2).map(w => w[0]).join('')}
                </span>
              </div>
              <h3 className="text-navy-900 font-bold text-lg mb-1">{org.name}</h3>
              <p className="text-navy-500 text-sm">{org.sub}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm font-semibold text-cool-600 uppercase tracking-wider mb-2">Technical & Global Partner</p>
          <div className="inline-block bg-white rounded-2xl px-10 py-6 shadow-sm border border-cool-100">
            <div className="w-14 h-14 bg-cool-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span className="text-cool-700 font-bold text-lg">ZH</span>
            </div>
            <h3 className="text-navy-900 font-bold text-xl">{technicalPartner.name}</h3>
            <p className="text-navy-500 text-sm">{technicalPartner.sub}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
