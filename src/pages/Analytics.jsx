import React from "react";

function Analytics() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-3xl font-semibold text-gray-800">
            Analytics
          </h2>
          <div className="w-12 h-1 bg-[#107187] rounded-full mt-2"></div>
          <p className="text-gray-500 mt-3">
            Visualize equipment usage and rental trends.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-[#107187] mb-4">
              Equipment Usage Trend
            </h3>

            <div className="h-40 rounded-xl flex items-center justify-center bg-gray-100 border border-gray-200">
              <p className="text-sm text-gray-500">
                Chart integration in progress
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-[#107187] mb-4">
              Rental Status Distribution
            </h3>

            <div className="h-40 rounded-xl flex items-center justify-center bg-gray-100 border border-gray-200">
              <p className="text-sm text-gray-500">
                Chart integration in progress
              </p>
            </div>
          </div>

        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Key Insights
          </h3>

          <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm">
            <li className="marker:text-[#107187]">
              Track high-demand equipment
            </li>
            <li className="marker:text-[#107187]">
              Monitor rental turnover rate
            </li>
            <li className="marker:text-[#107187]">
              Analyze downtime during maintenance
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Analytics;