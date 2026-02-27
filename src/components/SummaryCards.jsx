import { useSelector } from "react-redux";
import {
  FiPackage,
  FiCheckCircle,
  FiRepeat,
} from "react-icons/fi";
import { FaRupeeSign } from "react-icons/fa";

const SummaryCards = () => {
  const equipment = useSelector((state) => state.equipment.list);

  const total = equipment.length;
  const available = equipment.filter(
    (item) => item.status === "Available"
  ).length;
  const rented = equipment.filter(
    (item) => item.status === "Rented"
  ).length;
  const revenue = equipment
    .filter((item) => item.status === "Rented")
    .reduce((acc, item) => acc + Number(item.price), 0);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Total Equipment */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-gray-500 text-sm font-medium">
              Total Equipment
            </h3>
            <p className="text-2xl font-bold text-gray-800 mt-2">
              {total}
            </p>
          </div>
          <div className="p-3 rounded-xl bg-gray-100 text-[#107187] text-xl">
            <FiPackage />
          </div>
        </div>
      </div>

      {/* Available */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-gray-500 text-sm font-medium">
              Available
            </h3>
            <p className="text-2xl font-bold text-gray-800 mt-2">
              {available}
            </p>
          </div>
          <div className="p-3 rounded-xl bg-gray-100 text-[#107187] text-xl">
            <FiCheckCircle />
          </div>
        </div>
      </div>

      {/* Rented */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-gray-500 text-sm font-medium">
              Rented
            </h3>
            <p className="text-2xl font-bold text-gray-800 mt-2">
              {rented}
            </p>
          </div>
          <div className="p-3 rounded-xl bg-gray-100 text-[#107187] text-xl">
            <FiRepeat />
          </div>
        </div>
      </div>

      {/* Revenue */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-gray-500 text-sm font-medium">
              Revenue
            </h3>
            <p className="text-2xl font-bold text-gray-800 mt-2">
              ₹{revenue.toLocaleString("en-IN")}
            </p>
          </div>
          <div className="p-3 rounded-xl bg-gray-100 text-[#107187] text-xl">
            <FaRupeeSign />
          </div>
        </div>
      </div>

    </div>
  );
};

export default SummaryCards;