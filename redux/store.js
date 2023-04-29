import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";
import authReducer from "./auth/slice";
import dataReducer from "./data/slice";
import { prestateReducer } from "./prestate/slice";

const rootReducer = combineReducers({
  auth: authReducer,
  data: dataReducer,
  prestate: prestateReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  compose: composeWithDevTools(),
});

export default store;