import { configureStore } from "@reduxjs/toolkit";
import pageLocationReducer from "../reducers/pageLocation.reducer";

const store = configureStore({
  reducer: {
    page: pageLocationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
