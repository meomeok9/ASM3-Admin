import { createSlice } from "@reduxjs/toolkit";

const activeSlice = createSlice({
  name: "active",
  initialState: {
    active: false,
  },
  reducers: {
    active(state) {
      state.active = true;
    },
    off(state) {
      state.active = false;
    },
  },
});

export const activeActions = activeSlice.actions;
export default activeSlice.reducer;
