import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import AuthService from "../services/auth.service";
const user = JSON.parse(localStorage.getItem("User"));
export const register = createAsyncThunk(
  "auth/register",
  async ({ values }, thunkAPI) => {
    try {
      const response = await AuthService.register(
        values.email,
        values.password,
        values.firstName,
        values.lastName,
        values.sector,
        values.organization,
        values.recrootUserType
      );
      thunkAPI.dispatch(setMessage(response.data.message));
      localStorage.setItem("User", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);
export const reRegister = createAsyncThunk(
  "auth/Reregister",
  async ({ values }, thunkAPI) => {
    try {
      const response = await AuthService.reRegister(
        values.email,
        values.password,
        values.firstName,
        values.lastName,
        values.recrootUserType,
        values.id
      );
      thunkAPI.dispatch(setMessage(response.data.message));
      localStorage.setItem("User", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);
export const registerMember = createAsyncThunk(
  "auth/register",
  async ({ values }, thunkAPI) => {
    try {
      const response = await AuthService.register(
        values.email,
        values.password,
        values.firstName,
        values.lastName,
        values.sector,
        values.organization,
        values.recrootUserType,
        values.companyId
      );
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ values }, thunkAPI) => {
    try {
      const data = await AuthService.login(values.email, values.password);

      return { User: data.data.User };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
});
const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    [register.rejected]: (state, action) => {
      state.isLoggedIn = false;
    },
    [reRegister.rejected]: (state, action) => {
      state.isLoggedIn = false;
    },
    [reRegister.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

const { reducer } = authSlice;
export default reducer;
