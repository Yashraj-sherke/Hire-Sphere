import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./components/slices/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
