import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import searchService from "../services/search.service";

export const searchJobs = createAsyncThunk("jobs/search", async (thunkAPI) => {
  try {
    const response = await searchService.getLatestJObs();
    return response.data;
  } catch (error) {
    (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    // thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});
export const keywordSearch = createAsyncThunk(
  "searchJobs/keywordSearch",
  async ({ keyword, location, type }, thunkAPI) => {
    try {
      const response = await searchService.searchJobs(keyword, location, type);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const CategoryJobs = createAsyncThunk(
  "CategoryJobs/keywordSearch",
  async (value, thunkAPI) => {
    try {
      return value;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const searchKeys = createAsyncThunk(
  "Jobs/keys",
  async (value, thunkAPI) => {
    try {
      return value;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const searchJobsFromHome = createAsyncThunk(
  "jobs/searchJobcard",
  async (thunkAPI) => {
    try {
      const response = await searchService.getLatestJObs();
      return response.data;
    } catch (error) {
      (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      // thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

const initialState = {
  searchDetails: [],
  jobslate: { keyword: "", location: "", type: "" },
};
const searchSlice = createSlice({
  name: "searchJobs",
  initialState,
  extraReducers: {
    [searchJobs.fulfilled]: (state, action) => {
      state.searchDetails = action.payload;
      window.sessionStorage.setItem("items", JSON.stringify(action.payload));
      state.selectedJob = action.payload[0];
      window.sessionStorage.setItem(
        "single",
        JSON.stringify(action.payload[0])
      );
    },
    [searchJobs.rejected]: (state) => {
      state.searchDetails = null;
      state.selectedJob = null;
    },
    [keywordSearch.fulfilled]: (state, action) => {
      state.searchDetails = action.payload;

      window.sessionStorage.setItem("items", JSON.stringify(action.payload));
      state.selectedJob = action.payload[0];
      window.sessionStorage.setItem(
        "single",
        JSON.stringify(action.payload[0])
      );
    },
    [CategoryJobs.fulfilled]: (state, action) => {
      // state.jobslate = action.payload;
      state.selectedJob = action.payload[0];
      window.sessionStorage.setItem(
        "single",
        JSON.stringify(action.payload[0])
      );
    },
    [searchKeys.fulfilled]: (state, action) => {
      // state.jobslate = action.payload;
      state.jobslate = action.payload;
    },
    [keywordSearch.rejected]: (state) => {
      state.searchDetails = null;
    },
    [searchJobsFromHome.fulfilled]: (state, action) => {
      state.searchDetails = action.payload;
      window.sessionStorage.setItem("items", JSON.stringify(action.payload));
      state.selectedJob = state.searchDetails.find(
        (item) => item._id === action.meta.arg
      );
    },
    [searchJobsFromHome.rejected]: (state, action) => {
      state.searchDetails = null;
      state.selectedJob = null;
    },
  },
  reducers: {
    selectTheJob: (state, action) => {
      state.selectedJob = state.searchDetails.find(
        (item) => item._id === action.payload
      );
      window.sessionStorage.setItem(
        "single",
        JSON.stringify(
          state.searchDetails.find((item) => item._id === action.payload)
        )
      );
    },
  },
});
const { reducer, actions } = searchSlice;
export const { selectTheJob, selectFromHome } = actions;
export default reducer;
