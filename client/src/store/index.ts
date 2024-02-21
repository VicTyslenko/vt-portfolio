import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import pageLocationReducer from "../reducers/pageLocation.reducer";
import projectsReducer from "../reducers/projectsReducer";

const rootReducer = combineReducers({
  page: pageLocationReducer,
  projects: projectsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
