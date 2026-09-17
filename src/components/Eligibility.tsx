import { GraduationCap, Award, ClipboardList, Users, Headphones, Building } from 'lucide-react';
import { eligibilityItems } from '../data/courseData';

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Award,
  ClipboardList,
  Users,
  HeadphonesIcon: Headphones,
  Building,
};

export default function Eligibility() {
  return (
    <section id="eligibility" className="py-16 lg:py-24 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-2">Who Can Join</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Eligibility
          </h2>
          <p className="text-navy-500 max-w-2xl mx-auto text-lg">
            This course is designed for professionals across multiple disciplines in the HVAC industry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {eligibilityItems.map((item) => {
            const IconComponent = iconMap[item.icon] || Users;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-navy-100 hover:shadow-md hover:border-accent-200 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-accent-600" />
                </div>
                <h3 className="text-navy-900 font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
