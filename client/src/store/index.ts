import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import pageLocationReducer from "../reducers/pageLocation.reducer";
import projectsReducer from "../reducers/projectsReducer";
import modalReducer from "../reducers/modalReducer";
const rootReducer = combineReducers({
  page: pageLocationReducer,
  projects: projectsReducer,
  modal: modalReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
