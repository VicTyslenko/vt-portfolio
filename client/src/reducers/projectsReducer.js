import { sendRequest } from "../helpers";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../config/API";

const initialState = {
  projectsData: {},
  isLoading: false,
};

export const projectsDataFetch = createAsyncThunk("data/fetch", async () => {
  const response = await sendRequest(`${API_URL}/projects`);
  return response;
});

const projectsSlice = createSlice({
  name: "projects",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(projectsDataFetch.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(projectsDataFetch.fulfilled, (state, { payload }) => {
      state.projectsData = payload;
      state.isLoading = false;
    });
    builder.addCase(projectsDataFetch.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default projectsSlice.reducer;
