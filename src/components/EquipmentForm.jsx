import { useState } from "react";
import { useDispatch } from "react-redux";
import { createEquipment } from "../slices/equipmentSlice";

const EquipmentForm = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    category: "",
    status: "Available",
    price: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.category || !form.price) {
      alert("Please fill all fields");
      return;
    }

    dispatch(
      createEquipment({
        ...form,
        price: Number(form.price), // keep numeric
      })
    );

    setForm({
      name: "",
      category: "",
      status: "Available",
      price: "",
    });
  };

  return (
    <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all">

      <h2 className="text-2xl font-semibold text-[#0f5f73] mb-6">
        Add Equipment
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        <input type="text" placeholder="Equipment Name"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#44a7aa]
           focus:outline-none"
                      value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}/>

        <input type="text" placeholder="Category"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#44a7aa]
                     focus:outline-none"
          value={form.category} onChange={(e) =>setForm({ ...form, category: e.target.value })} />

        <select className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#44a7aa]
                     focus:outline-none"
          value={form.status} onChange={(e) =>  setForm({ ...form, status: e.target.value })} >
          <option>Available</option>
          <option>Rented</option>
        </select>

        <input type="number" placeholder="Price (₹ per month)" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#44a7aa] focus:outline-none"
          value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value }) } />

        <button type="submit"  className="w-full bg-gradient-to-r from-[#107187] to-[#44a7aa] text-white py-3 rounded-xl font-semibold hover:shadow-lg
                     hover:scale-[1.02] active:scale-95 transition"
        >
          Add Equipment
        </button>
      </form>
    </div>
  );
};

export default EquipmentForm;