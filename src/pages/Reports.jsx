import React from "react";

function Reports() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-10">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-2xl sm:text-3xl text-[#107187] font-semibold ">
            Reports
          </h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Generate and review inventory performance reports.
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-[#107187] mb-2">
              Monthly Rentals
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Track rental count per month.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-[#107187] mb-2">
              Revenue Report
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Analyze revenue from rented equipment.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-[#107187] mb-2">
              Maintenance Logs
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              View maintenance records and schedules.
            </p>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Detailed reports and export functionality will be integrated here
            (PDF/Excel export ready).
          </p>
        </div>

      </div>
    </div>
  );
}

export default Reports;