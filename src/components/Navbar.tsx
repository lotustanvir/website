import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/courseData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">HV</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-semibold text-sm leading-tight block">HVAC Diploma</span>
              <span className="text-navy-300 text-xs leading-tight">Professional Training</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-navy-200 hover:text-white px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href="#register"
              className="bg-accent-500 hover:bg-accent-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-lg shadow-accent-500/25"
            >
              Register Now
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-navy-900/98 backdrop-blur-md border-t border-navy-700">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-navy-200 hover:text-white px-3 py-3 text-base font-medium transition-colors hover:bg-white/10 rounded-lg"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#register"
              onClick={() => setIsOpen(false)}
              className="block bg-accent-500 hover:bg-accent-600 text-white text-center px-5 py-3 rounded-lg text-base font-semibold transition-colors mt-3"
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
