import { createSlice } from "@reduxjs/toolkit";

const chatSlide = createSlice({
  name: "chat",
  initialState: {
    userAdminId: "",
    curRoomId: "",
    data: [],
  },
  reducers: {
    getMessages(state, action) {
      state.data = action.payload.data;
    },
    setCurrentUser(state, action) {
      state.curRoomId = action.payload;
    },

    active(state, action) {
      const userId = action.payload;
      const index = state.data.findIndex((d) => d.userId === userId);
      state.data[index].active = true;
    },
    deactive(state, action) {
      const userId = action.payload;
      const index = state.data.findIndex((d) => d.userId === userId);
      state.data[index].active = false;
    },
  },
});
export const ChatActions = chatSlide.actions;
export default chatSlide.reducer;
