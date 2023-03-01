import { configureStore } from "@reduxjs/toolkit";
import loginSlide from "./login-action";
import chatSlide from "./chat-actions";
import activeSlice from "./active-action";
const store = configureStore({
  reducer: {
    active: activeSlice,
    login: loginSlide,
    chat: chatSlide,
  },
});

export default store;
