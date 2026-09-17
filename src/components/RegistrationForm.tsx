import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  profession: string;
  organization: string;
  experience: string;
  city: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const initialData: FormData = {
  fullName: '',
  phone: '',
  email: '',
  profession: '',
  organization: '',
  experience: '',
  city: '',
  message: '',
};

export default function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^[\d\s+\-()]{7,}$/.test(formData.phone.trim())) newErrors.phone = 'Please enter a valid phone number';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) newErrors.email = 'Please enter a valid email';
    if (!formData.profession.trim()) newErrors.profession = 'Please select your profession';
    if (!formData.city.trim()) newErrors.city = 'City is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  if (submitted) {
    return (
      <section id="register" className="py-16 lg:py-24 bg-navy-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-sm border border-navy-100">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-navy-900 mb-3">Application Received</h2>
            <p className="text-navy-500 mb-6">
              Thank you for your interest, <strong>{formData.fullName}</strong>. Your application has been recorded successfully. Our team will contact you shortly regarding batch availability and next steps.
            </p>
            <p className="text-navy-400 text-sm mb-6">
              Note: This is a frontend demo submission. No data has been sent to a server yet. A backend integration is required to process real applications.
            </p>
            <button
              onClick={() => { setSubmitted(false); setFormData(initialData); }}
              className="text-accent-600 hover:text-accent-700 font-semibold text-sm"
            >
              Submit Another Application
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-16 lg:py-24 bg-navy-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-2">Registration</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Apply for Admission
          </h2>
          <p className="text-navy-500 max-w-2xl mx-auto text-lg">
            Batch size: Maximum 40 participants. Complete the form below to apply.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-navy-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-navy-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border ${errors.fullName ? 'border-red-400 bg-red-50' : 'border-navy-200 bg-navy-50'} text-navy-800 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all`}
                placeholder="Enter your full name"
              />
              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-navy-700 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-400 bg-red-50' : 'border-navy-200 bg-navy-50'} text-navy-800 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all`}
                placeholder="+880XXXXXXXXXX"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-navy-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-400 bg-red-50' : 'border-navy-200 bg-navy-50'} text-navy-800 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all`}
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-navy-700 mb-2">
                Profession <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.profession}
                onChange={(e) => handleChange('profession', e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border ${errors.profession ? 'border-red-400 bg-red-50' : 'border-navy-200 bg-navy-50'} text-navy-800 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all`}
              >
                <option value="">Select your profession</option>
                <option value="Mechanical Engineer">Mechanical Engineer</option>
                <option value="Electrical Engineer">Electrical Engineer</option>
                <option value="Diploma Technician">Diploma Technician</option>
                <option value="Site Supervisor">Site Supervisor</option>
                <option value="HVAC Sales Executive">HVAC Sales Executive</option>
                <option value="Customer Support Manager">Customer Support Manager</option>
                <option value="Business Owner / Entrepreneur">Business Owner / Entrepreneur</option>
                <option value="Other">Other</option>
              </select>
              {errors.profession && <p className="text-red-500 text-xs mt-1">{errors.profession}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-navy-700 mb-2">Organization</label>
              <input
                type="text"
                value={formData.organization}
                onChange={(e) => handleChange('organization', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-navy-50 text-navy-800 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                placeholder="Company / Organization name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-navy-700 mb-2">Experience</label>
              <select
                value={formData.experience}
                onChange={(e) => handleChange('experience', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-navy-50 text-navy-800 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
              >
                <option value="">Select experience level</option>
                <option value="Fresher">Fresher / Student</option>
                <option value="1-2 years">1–2 years</option>
                <option value="3-5 years">3–5 years</option>
                <option value="5-10 years">5–10 years</option>
                <option value="10+ years">10+ years</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-navy-700 mb-2">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => handleChange('city', e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border ${errors.city ? 'border-red-400 bg-red-50' : 'border-navy-200 bg-navy-50'} text-navy-800 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all`}
                placeholder="Your city"
              />
              {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-navy-700 mb-2">Message / Questions</label>
              <textarea
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-navy-50 text-navy-800 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all resize-none"
                placeholder="Any questions or additional information..."
              />
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40 hover:-translate-y-0.5"
            >
              <Send className="w-5 h-5" />
              Register Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
