import { createSlice } from "@reduxjs/toolkit";
import { initialAuth } from "../../services/initial";
import { signup, signin, signout, refresh } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuth,
  extraReducers: (builder) => {
    builder
      .addCase(signup.fulfilled, (state, { payload }) => (state = payload))
      .addCase(signin.fulfilled, (state, { payload }) => (state = payload))
      .addCase(refresh.fulfilled, (state, { payload }) => (state = payload))
      .addCase(signout.fulfilled, (state) => (state = initialAuth))
      .addCase(refresh.rejected, (state) => (state = initialAuth));
  },
});

const authReducer = authSlice.reducer;

export default authReducer;