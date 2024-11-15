import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import dataReducer from "../reducers/dataReducer";
import modalReducer from "../reducers/modalReducer";
const rootReducer = combineReducers({
  collections: dataReducer,
  modal: modalReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
