import { navLinks } from '../data/courseData';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">HV</span>
              </div>
              <span className="text-white font-semibold">HVAC Diploma</span>
            </div>
            <p className="text-sm leading-relaxed text-navy-400">
              15-Day Advanced Industrial &amp; Commercial HVAC Diploma — VRF Engineering, Installation, Commissioning &amp; Business Management.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Organizers</h4>
            <ul className="space-y-2 text-sm text-navy-400">
              <li>Daffodil International University</li>
              <li>Skill Jobs</li>
              <li>Greenary Institute of Science and Technology</li>
            </ul>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-2 mt-6">Technical Partner</h4>
            <p className="text-sm text-navy-400">Zero HVAC (China)</p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Venue</h4>
            <p className="text-sm text-navy-400 leading-relaxed">
              Mechatronics Engineering Advanced HVAC Lab<br />
              Daffodil Smart City<br />
              Ashulia, Dhaka
            </p>
            <a
              href="#register"
              className="inline-block mt-6 bg-accent-500 hover:bg-accent-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Register Now
            </a>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-navy-500">
            &copy; {new Date().getFullYear()} HVAC Diploma Program. All rights reserved.
          </p>
          <p className="text-xs text-navy-500">
            Jointly organized by DIU, Skill Jobs, Greenary Institute &amp; Zero HVAC
          </p>
        </div>
      </div>
    </footer>
  );
}
