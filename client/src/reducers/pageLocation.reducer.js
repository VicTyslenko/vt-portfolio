import { createSlice } from "@reduxjs/toolkit";

const pageLocationSlice = createSlice({
  name: "pageLocation",
  initialState: {
    isHomeLocation: false,
    isProjectsPage: false,
  },

  reducers: {
  

    setHomeLocation(state, { payload }) {
      state.isHomeLocation = payload;
    },
    setProjectsPage(state, { payload }) {
      state.isProjectsPage = payload;
    },
  },
});

export const { setHomeLocation, setProjectsPage } = pageLocationSlice.actions;

export default pageLocationSlice.reducer;
