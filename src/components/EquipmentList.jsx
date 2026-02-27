import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeEquipment,
  editEquipment,
} from "../slices/equipmentSlice";

const EquipmentList = () => {
  const dispatch = useDispatch();
  const equipment = useSelector((state) => state.equipment.list);

  const [editItem, setEditItem] = useState(null);

  const handleDelete = (id) => {
    dispatch(removeEquipment(id));
  };

  const handleUpdate = () => {
    if (!editItem) return;

    const updatedData = {
      name: editItem.name,
      category: editItem.category,
      status: editItem.status,
      price: Number(editItem.price || 0), // convert safely here
    };

    dispatch(
      editEquipment({
        id: editItem.id,
        data: updatedData,
      })
    );

    setEditItem(null);
  };

  return (
    <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Equipment List
      </h2>

      {/* DESKTOP TABLE */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="border-b text-gray-500 uppercase text-xs tracking-wider">
              <th className="py-3">Name</th>
              <th>Category</th>
              <th>Status</th>
              <th>Price / Month</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {equipment.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50 transition" >
                <td className="py-3 font-medium text-gray-800">
                  {item.name}
                </td>

                <td>{item.category}</td>

                <td>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${ item.status === "Available" ? "bg-gray-100 text-[#107187]" : "bg-gray-200 text-gray-700"}`} >
                    {item.status}
                  </span>
                </td>

                <td className="font-medium">
                  ₹{Number(item.price || 0).toLocaleString("en-IN")}
                </td>

                <td className="space-x-2">
                  <button onClick={() => setEditItem({ ...item, price: String(item.price),  })  } className="px-3 py-1 text-xs bg-[#107187] text-white rounded-md hover:opacity-90" >
                    Edit
                  </button>

                  <button onClick={() => handleDelete(item.id)} className="px-3 py-1 text-xs bg-red-500 text-white rounded-md hover:bg-red-600" >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE CARDS */}
      <div className="md:hidden space-y-4">
        {equipment.map((item) => (
          <div key={item.id} className="border border-gray-200 rounded-2xl p-4 shadow-sm" >
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-gray-800">
                {item.name}
              </h3>

              <span className={`px-3 py-1 rounded-full text-xs font-medium ${ item.status === "Available" ? "bg-gray-100 text-[#107187]": "bg-gray-200 text-gray-700" }`}>
                {item.status}
              </span>
            </div>

            <p className="text-sm text-gray-600 mt-2">
              Category: {item.category}
            </p>

            <p className="text-sm font-medium mt-2">
              ₹{Number(item.price || 0).toLocaleString("en-IN")} / month
            </p>

            <div className="flex gap-3 mt-4">
              <button onClick={() => setEditItem({ ...item,price: String(item.price),})}
                className="flex-1 py-2 text-sm bg-[#107187] text-white rounded-xl hover:opacity-90">
                Edit
              </button>

              <button onClick={() => handleDelete(item.id)} className="flex-1 py-2 text-sm bg-red-500 text-white rounded-xl hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* EDIT MODAL */}
      {editItem && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Edit Equipment
            </h3>

            <div className="space-y-4">
              <input className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#107187]" value={editItem.name}
                onChange={(e) => setEditItem({ ...editItem, name: e.target.value }) } />

              <input className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#107187]" value={editItem.category}
                onChange={(e) => setEditItem({ ...editItem, category: e.target.value, }) }/>

              <select className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#107187]" value={editItem.status}
                onChange={(e) => setEditItem({ ...editItem, status: e.target.value, }) } >
                <option value="Available">Available</option>
                <option value="Rented">Rented</option>
              </select>

              <input type="number" className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#107187]" value={editItem.price}
                onChange={(e) => setEditItem({ ...editItem, price: e.target.value,}) }/>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button onClick={() => setEditItem(null)} className="px-4 py-2 border border-gray-300 rounded-xl" >
                Cancel
              </button>

              <button onClick={handleUpdate} className="px-4 py-2 bg-[#107187] text-white rounded-xl hover:opacity-90" >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EquipmentList;