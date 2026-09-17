import { Users } from 'lucide-react';

export default function SeatAvailability() {
  return (
    <section className="py-16 lg:py-20 bg-accent-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-8 sm:px-8 sm:py-6 border border-white/20 flex flex-col sm:flex-row items-center gap-5 sm:gap-6">
          <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
            <Users className="w-7 h-7 text-white" />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white">Maximum 40 Participants Per Batch</h3>
            <p className="text-accent-100 text-sm mt-1">Enroll early to secure your spot</p>
          </div>
        </div>
      </div>
    </section>
  );
}
