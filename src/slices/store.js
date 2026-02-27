import { configureStore } from "@reduxjs/toolkit";
import equipmentReducer from "../slices/equipmentSlice";
import authReducer from "../slices/authSlice";

export const store = configureStore({
  reducer: {
    equipment: equipmentReducer,
    auth: authReducer,
  },
});