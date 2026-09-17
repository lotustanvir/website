import { MapPin, Navigation } from 'lucide-react';

export default function Venue() {
  return (
    <section id="venue" className="py-16 lg:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-2">Venue</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Training Location
          </h2>
        </div>

        <div className="bg-navy-50 rounded-3xl p-8 sm:p-12 border border-navy-100">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-navy-900 font-bold text-xl">Daffodil Smart City</h3>
              </div>

              <div className="space-y-5 mb-8">
                <div>
                  <p className="text-sm font-semibold text-navy-400 uppercase tracking-wider mb-1">Lab</p>
                  <p className="text-navy-800 font-medium">Mechatronics Engineering Advanced HVAC Lab</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-400 uppercase tracking-wider mb-1">Location</p>
                  <p className="text-navy-800 font-medium">Daffodil Smart City, Ashulia, Dhaka</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-400 uppercase tracking-wider mb-1">Type</p>
                  <p className="text-navy-800 font-medium">Advanced HVAC Laboratory with Industrial Equipment</p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Daffodil+Smart+City+Ashulia+Dhaka"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors"
              >
                <Navigation className="w-4 h-4" />
                Get Directions on Google Maps
              </a>
            </div>

            <div className="w-full md:w-80 bg-white rounded-2xl p-6 border border-navy-100">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-accent-500" />
                <h4 className="text-navy-800 font-semibold text-sm">Address</h4>
              </div>
              <p className="text-navy-600 text-sm leading-relaxed mb-4">
                Mechatronics Engineering Advanced HVAC Lab<br />
                Daffodil Smart City<br />
                Ashulia, Dhaka<br />
                Bangladesh
              </p>
              <div className="pt-4 border-t border-navy-100">
                <p className="text-navy-400 text-xs">
                  Equipped with VRF/VRV training systems, ODU/IDU units, and diagnostic tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
