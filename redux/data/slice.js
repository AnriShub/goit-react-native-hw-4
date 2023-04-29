import { createSlice } from "@reduxjs/toolkit";
import { initialData } from "../../services/initial";
import { getPosts, getComments } from "./operations";

const postSlice = createSlice({
  name: "data",
  initialState: initialData,
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        state.posts = payload;
      })
      .addCase(getComments.fulfilled, (state, { payload }) => {
        state.comments = payload;
      });
  },
});

const postReducer = postSlice.reducer;
export default postReducer;