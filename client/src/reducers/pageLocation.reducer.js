import { createSlice } from "@reduxjs/toolkit";

const pageLocationSlice = createSlice({
  name: "pageLocation",
  initialState: {
    isHeaderVisible: false,
    isHomeLocation: false,
  },

  reducers: {
    setHeaderVisible(state, { payload }) {
      state.isHeaderVisible = payload;
    },

    setHomeLocation(state, { payload }) {
      state.isHomeLocation = payload;
    },
  },
});

export const { setHeaderVisible, setHomeLocation } = pageLocationSlice.actions;

export default pageLocationSlice.reducer;
