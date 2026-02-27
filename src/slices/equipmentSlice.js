import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllEquipment,
  addEquipment,
  deleteEquipment,
  updateEquipment,
} from "../services/allApi";

export const fetchEquipment = createAsyncThunk(
  "equipment/fetch",
  async () => (await getAllEquipment()).data
);

export const createEquipment = createAsyncThunk(
  "equipment/add",
  async (data) => (await addEquipment(data)).data
);

export const removeEquipment = createAsyncThunk(
  "equipment/delete",
  async (id) => {
    await deleteEquipment(id);
    return id;
  }
);

export const editEquipment = createAsyncThunk(
  "equipment/update",
  async ({ id, data }) => {
    const res = await updateEquipment(id, data);
    return res.data;
  }
);

const slice = createSlice({
  name: "equipment",
  initialState: { list: [] },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEquipment.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(createEquipment.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(removeEquipment.fulfilled, (state, action) => {
        state.list = state.list.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(editEquipment.fulfilled, (state, action) => {
        const index = state.list.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) state.list[index] = action.payload;
      });
  },
});

export default slice.reducer;