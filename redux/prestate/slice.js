import { createSlice } from "@reduxjs/toolkit";
import { initialPrestate } from "../../services/initial";
import { sendPhoto, delPhoto, updateAvatar } from "./operations";
import { signup, signin, signout, refresh } from "../auth/operations";
import {
  createPost,
  getPosts,
  createComment,
  getComments,
  addLike,
} from "../data/operations";

const handlePending = (state) => {
  state.error = null;
  state.isLoading = true;
};
const handleFulfilled = (state) => {
  state.isLoading = false;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const prestateSlice = createSlice({
  name: "prestate",
  initialState: initialPrestate,
  extraReducers: (builder) => {
    builder
      .addCase(sendPhoto.fulfilled, (state, { payload }) => {
        state.uri = payload;
        state.isLoading = false;
      })
      .addCase(delPhoto.fulfilled, (state) => {
        state.uri = null;
        state.isLoading = false;
      })
      .addCase(signup.fulfilled, (state) => {
        state.uri = null;
        state.isLoading = false;
      })
      .addCase(createPost.fulfilled, (state) => {
        state.uri = null;
        state.isLoading = false;
      })
      .addCase(updateAvatar.fulfilled, handleFulfilled)
      .addCase(signin.fulfilled, handleFulfilled)
      .addCase(signout.fulfilled, handleFulfilled)
      .addCase(getPosts.fulfilled, handleFulfilled)
      .addCase(createComment.fulfilled, handleFulfilled)
      .addCase(getComments.fulfilled, handleFulfilled)
      .addCase(addLike.fulfilled, handleFulfilled)
      .addCase(sendPhoto.pending, handlePending)
      .addCase(updateAvatar.pending, handlePending)
      .addCase(delPhoto.pending, handlePending)
      .addCase(signup.pending, handlePending)
      .addCase(signin.pending, handlePending)
      .addCase(signout.pending, handlePending)
      .addCase(createPost.pending, handlePending)
      .addCase(getPosts.pending, handlePending)
      .addCase(createComment.pending, handlePending)
      .addCase(getComments.pending, handlePending)
      .addCase(addLike.pending, handlePending)
      .addCase(sendPhoto.rejected, handleRejected)
      .addCase(updateAvatar.rejected, handleRejected)
      .addCase(delPhoto.rejected, handleRejected)
      .addCase(signup.rejected, handleRejected)
      .addCase(signin.rejected, handleRejected)
      .addCase(signout.rejected, handleRejected)
      .addCase(refresh.rejected, handleRejected)
      .addCase(createPost.rejected, handleRejected)
      .addCase(getPosts.rejected, handleRejected)
      .addCase(createComment.rejected, handleRejected)
      .addCase(getComments.rejected, handleRejected)
      .addCase(addLike.rejected, handleRejected);
  },
});

export const prestateReducer = prestateSlice.reducer;