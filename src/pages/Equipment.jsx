import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchEquipment } from "../slices/equipmentSlice";
import EquipmentForm from "../components/EquipmentForm";
import EquipmentList from "../components/EquipmentList";

function Equipment() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEquipment());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4f9fb] via-[#e6f3f6] to-[#d8eef2] p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-12">
        <div>
          <h2 className="text-4xl font-bold text-[#0f5f73]">
            Equipment Management
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl">
            Add, update, and manage all medical equipment inventory efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <EquipmentForm />
          </div>
          <div className="lg:col-span-2">
            <EquipmentList />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Equipment;