import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "../services/authApi";

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    const res = await loginUser(email, password);
    return res.data[0];
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload) {
        state.user = action.payload;
        localStorage.setItem(
          "user",
          JSON.stringify(action.payload)
        );
      }
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;