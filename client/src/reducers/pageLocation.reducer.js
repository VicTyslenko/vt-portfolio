import { createSlice } from "@reduxjs/toolkit";

const pageLocationSlice = createSlice({
  name: "pageLocation",
  initialState: {
    isHeaderVisible: false,
    isHomeLocation: false,
    isProjectsPage: false,
  },

  reducers: {
    setHeaderVisible(state, { payload }) {
      state.isHeaderVisible = payload;
    },

    setHomeLocation(state, { payload }) {
      state.isHomeLocation = payload;
    },
    setProjectsPage(state, { payload }) {
      state.isProjectsPage = payload;
    },
  },
});

export const { setHeaderVisible, setHomeLocation, setProjectsPage } =
  pageLocationSlice.actions;

export default pageLocationSlice.reducer;
