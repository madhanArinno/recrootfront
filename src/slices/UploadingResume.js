import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import resumeService from "../services/resume.services";

export const uplodeResumeFiles = createAsyncThunk(
  "resume/uplodeResume",
  async ({ ...values }, thunkAPI) => {
    const user = JSON.parse(localStorage.getItem("User"));
    try {
      const response = await resumeService.updateResume(
        values.uplodeResumeFile,
        user.User._id
      );

      return response.data;
    } catch (error) {
      (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue();
    }
  }
);
export const createResumeDetails = createAsyncThunk(
  "resume/cerateResume",
  async ({ ...values }, thunkAPI) => {
    const user = JSON.parse(localStorage.getItem("User"));
    try {
      const response = await resumeService.createResumeDetails(
        values,
        user.User._id
      );
      console.warn(response);
      return values;
    } catch (error) {
      (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue();
    }
  }
);
export const updateFinalResumeForm = createAsyncThunk(
  "resume/updateFinalResume",
  async ({ ...values }, thunkAPI) => {
    const user = JSON.parse(localStorage.getItem("User"));

    try {
      const coverLetter = await resumeService.coverLetter(
        values,
        user.User._id
      );
      const certificates = await resumeService.certificates(
        values,
        user.User._id
      );
      const response = await resumeService.finalResumeForm(
        values,
        user.User._id
      );
      console.warn(response, coverLetter, certificates);
      return values;
    } catch (error) {
      console.warn(error);
    }
  }
);

const initialState = {};
const resumeSlice = createSlice({
  name: "resume",
  initialState,
  extraReducers: {
    [uplodeResumeFiles.fulfilled]: (state, action) => {
      state.uplodeResumeFiles = true;
      state.createResume = false;
    },
    [uplodeResumeFiles.rejected]: (state, action) => {
      state.uplodeResumeFiles = false;
      state.createResume = false;
    },
    [createResumeDetails.fulfilled]: (state, action) => {
      state.createResume = true;
    },
    [createResumeDetails.rejected]: (state, action) => {
      state.createResume = false;
    },
    [updateFinalResumeForm.fulfilled]: (state, action) => {
      state.uplodeResumeFiles = true;
    },
    [updateFinalResumeForm.rejected]: (state, action) => {
      state.uplodeResumeFiles = false;
    },
  },
  reducers: {
    setResume: (state, action) => {},
    clearMessage: () => {},
  },
});
const { reducer, actions } = resumeSlice;
export const { setResume, clearMessage } = actions;
export default reducer;
