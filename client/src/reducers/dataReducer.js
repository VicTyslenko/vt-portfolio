import { sendRequest } from "../helpers";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../config/API";

const initialState = {
  data: [],
  isLoading: false,
  selectedProject: null,
};

export const dataFetch = createAsyncThunk(
  "data/fetch",
  async ({ collectionName, page = 1, pageSize }) => {
    const response = await sendRequest(
      `${API_URL}/${collectionName}?page=${page}&pageSize=${pageSize}`
    );
    return response;
  }
);
export const fetchItemById = createAsyncThunk(
  "fetch/projectsId",
  async (collectionName, _id) => {
    const response = await sendRequest(`${API_URL}/${collectionName}/${_id}`);
    return response;
  }
);

const projectsSlice = createSlice({
  name: "projects",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(dataFetch.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(dataFetch.fulfilled, (state, { payload }) => {
      //checking if payload is Array
      state.data = Array.isArray(payload) ? payload : [];
      state.isLoading = false;
    });
    builder.addCase(dataFetch.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchItemById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchItemById.fulfilled, (state, { payload }) => {
      state.selectedProject = payload;
      state.isLoading = false;
    });
  },
});

export default projectsSlice.reducer;
