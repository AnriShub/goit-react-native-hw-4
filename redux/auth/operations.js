import {
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../services/firebaseConfig";

export const signup = createAsyncThunk(
  "auth/signup",
  async ({ email, password, displayName, photoURL }, { rejectWithValue }) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName, photoURL });
      const { uid } = auth.currentUser;
      return { userId: uid, nickName: displayName, email, photoURL };
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const signin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const { uid, displayName, photoURL } = auth.currentUser;
      return { userId: uid, nickName: displayName, email, photoURL };
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const signout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const refresh = createAsyncThunk(
  "auth/update",
  async (_, { rejectWithValue }) => {
    try {
      return await new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const { uid, displayName, email, photoURL } = user;
            resolve({ userId: uid, nickName: displayName, email, photoURL });
          } else {
            return rejectWithValue("Unable to fetch user");
          }
        });
      });
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);