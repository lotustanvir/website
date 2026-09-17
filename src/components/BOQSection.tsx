import { Calculator } from 'lucide-react';
import { boqData } from '../data/courseData';

export default function BOQSection() {
  return (
    <section className="py-16 lg:py-24 bg-navy-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-2">Real-World Application</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Project Costing & BOQ
          </h2>
          <p className="text-navy-500 max-w-2xl mx-auto text-lg">
            Learn to prepare professional Bills of Quantities and project cost estimates for real-world HVAC installations.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-navy-100 overflow-hidden">
          <div className="bg-accent-500 text-white px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-3">
              <Calculator className="w-5 h-5 shrink-0" />
              <h3 className="font-bold text-lg">Sample Project BOQ / Cost Template</h3>
            </div>
            <span className="sm:ml-auto text-accent-200 text-sm font-medium">Estimated Project Budget</span>
          </div>

          <div className="overflow-x-auto -mx-px">
            <table className="w-full min-w-[540px]">
              <thead>
                <tr className="bg-navy-50 border-b border-navy-100">
                  <th className="text-left px-6 py-3 text-xs font-semibold text-navy-600 uppercase tracking-wider">Item</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-navy-600 uppercase tracking-wider hidden sm:table-cell">Details</th>
                  <th className="text-right px-6 py-3 text-xs font-semibold text-navy-600 uppercase tracking-wider">Qty</th>
                  <th className="text-right px-6 py-3 text-xs font-semibold text-navy-600 uppercase tracking-wider hidden md:table-cell">Unit</th>
                  <th className="text-right px-6 py-3 text-xs font-semibold text-navy-600 uppercase tracking-wider hidden lg:table-cell">Rate (BDT)</th>
                  <th className="text-right px-6 py-3 text-xs font-semibold text-navy-600 uppercase tracking-wider">Amount (BDT)</th>
                </tr>
              </thead>
              <tbody>
                {boqData.map((row, index) => (
                  <tr key={index} className="border-b border-navy-50 hover:bg-navy-50/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-navy-800">{row.item}</td>
                    <td className="px-6 py-4 text-sm text-navy-500 hidden sm:table-cell">{row.details}</td>
                    <td className="px-6 py-4 text-sm text-navy-600 text-right">{row.quantity}</td>
                    <td className="px-6 py-4 text-sm text-navy-600 text-right hidden md:table-cell">{row.unit}</td>
                    <td className="px-6 py-4 text-sm text-navy-600 text-right hidden lg:table-cell">{row.rate}</td>
                    <td className="px-6 py-4 text-sm text-navy-800 text-right font-medium">{row.amount}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-navy-900 text-white">
                  <td colSpan={5} className="px-6 py-4 text-sm font-bold text-right uppercase tracking-wider">Estimated Total</td>
                  <td className="px-6 py-4 text-lg font-bold text-right">19,41,600 BDT</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="px-6 py-4 bg-amber-50 border-t border-amber-200">
            <p className="text-amber-700 text-sm">
              <strong>Note:</strong> This is a sample project BOQ / cost template for learning purposes only. It does not represent the course fee or actual project costs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
