import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchEquipment } from "../slices/equipmentSlice";
import SummaryCards from "../components/SummaryCards";

function DashBoard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEquipment());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4fbfc] via-[#eef7f9] to-[#e6f3f6] p-4 sm:p-6 lg:p-10">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="bg-white/80 backdrop-blur-md border border-[#d8eef2] rounded-3xl p-6 sm:p-8 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#107187] to-[#44a7aa] bg-clip-text text-transparent">
            Dashboard Overview
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base">
            Monitor equipment performance, rental analytics and
            real-time availability insights.
          </p>
        </div>

        {/* Summary Cards */}
        <SummaryCards />

        <div className="bg-white border border-[#d8eef2] rounded-3xl p-6 sm:p-8 shadow-md">
          <h3 className="text-lg sm:text-xl font-semibold text-[#0f5f73] mb-4">
            Welcome to EuroMed Admin Panel
          </h3>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Manage inventory, track availability, monitor rental
            revenue, and generate performance insights — all in one
            centralized dashboard.
          </p>
        </div>

      </div>
    </div>
  );
}

export default DashBoard;