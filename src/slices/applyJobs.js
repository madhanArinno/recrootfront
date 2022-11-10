import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import applyjobsService from "../services/applyjobs.service";

const initialState = {
  details: [],
  single: {},
  resume: {},
  cover: {},
  names: [],
  jobsUn: { jobs: [], country: [] },
  coun: [],
  sinDet: {},
  jids: { jobId: "", cnditateId: "" },
};

export const applyJobsdet = createAsyncThunk("get/candtDetails", async () => {
  const user = JSON.parse(localStorage.getItem("User"));
  const res = await applyjobsService.getDetails(user.User.companyId);
  return res.data;
});
export const statusUpdate = createAsyncThunk(
  "get/updateStatus",
  async (data) => {
    return data;
  }
);

export const getSinDetails = createAsyncThunk(
  "getSin/Details",
  async (data) => {
    return data;
  }
);
export const getSinResume = createAsyncThunk("getSin/Resume", async (id) => {
  const res = await applyjobsService.getResume(id);
  return res.data.resume.resumeFileLocation[0];
});
export const getSinCover = createAsyncThunk("getSin/cover", async (id) => {
  const res = await applyjobsService.getCover(id);
  return res.data.resume.coverLetterFileLocation[0];
});
export const getJobsfil = createAsyncThunk("getSin/jobs", async () => {
  const user = JSON.parse(localStorage.getItem("User"));
  const res = await applyjobsService.getJobs(user.User.companyId);
  return res.data;
});
export const getCandi = createAsyncThunk("geCand/jobs", async (id) => {
  const res = await applyjobsService.getAll(id);
  return res.data[0];
});
export const getCandiJobId = createAsyncThunk(
  "geCanditateJOvb/jobs",
  async (data) => {
    return data;
  }
);

export const setJobsFil = createAsyncThunk("setFil/jobs", async (data) => {
  return data;
});
export const setCounFil = createAsyncThunk("setCoun/jobs", async (data) => {
  return data;
});

const applySlice = createSlice({
  name: "apply",
  initialState,
  extraReducers: {
    [applyJobsdet.fulfilled]: (state, action) => {
      state.details = action.payload;
    },
    [statusUpdate.fulfilled]: (state, action) => {
      state.details = action.payload;
    },
    [getSinDetails.fulfilled]: (state, action) => {
      state.single = action.payload;
    },
    [getSinResume.fulfilled]: (state, action) => {
      state.resume = action.payload;
    },
    [getJobsfil.fulfilled]: (state, action) => {
      state.names = action.payload;
    },
    [setJobsFil.fulfilled]: (state, action) => {
      state.jobsUn = action.payload;
    },
    [setCounFil.fulfilled]: (state, action) => {
      state.coun = action.payload;
    },
    [getSinCover.fulfilled]: (state, action) => {
      state.cover = action.payload;
    },
    [getSinCover.rejected]: (state, action) => {
      state.cover = { cover: null };
    },
    [getCandi.fulfilled]: (state, action) => {
      state.sinDet = action.payload;
    },
    [getCandiJobId.fulfilled]: (state, action) => {
      state.jids = action.payload;
    },
  },
});

const { reducer } = applySlice;
export default reducer;
