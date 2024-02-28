import { sendRequest } from "../helpers";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../config/API";

const initialState = {
  projectsData: [],
  isLoading: false,
  selectedProject: null,
};

export const projectsDataFetch = createAsyncThunk(
  "data/fetch",
  async ({ collection, page, pageSize }) => {
    const response = await sendRequest(
      `${API_URL}/${collection}?page=${page}&pageSize=${pageSize}`
    );
    return response;
  }
);
export const fetchProjectById = createAsyncThunk(
  "fetch/projectsId",
  async (_id) => {
    const response = await sendRequest(`${API_URL}/projects/${_id}`);
    return response;
  }
);

const projectsSlice = createSlice({
  name: "projects",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(projectsDataFetch.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(projectsDataFetch.fulfilled, (state, { payload }) => {
      //checking if payload is Array
      state.projectsData = Array.isArray(payload) ? payload : [];
      state.isLoading = false;
    });
    builder.addCase(projectsDataFetch.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchProjectById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProjectById.fulfilled, (state, { payload }) => {
      state.selectedProject = payload;
      state.isLoading = false;
    });
  },
});

export default projectsSlice.reducer;
