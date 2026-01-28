import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  isAuthorized: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isAuthorized = true;
    },
    logout(state) {
      state.user = [];
      state.isAuthorized = false;
    },
    settingAuth(state, action) {
      state.isAuthorized = action.payload;
    },
  },
});

export const { login, logout, settingAuth } = userSlice.actions;

export default userSlice.reducer;
