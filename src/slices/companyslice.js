import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import companyservice from "../services/companyservice";

const initialState = {
  companylogo: { logo: "" },
  basicinformation: { cmpemail: "", cmpname: "", cmpphone: "", cmpwebsite: "" },
  cmpinformation: {},
  links: { fb: "", twitter: "", utube: "", linkin: "" },
  locate: {},
  members: [{ memberId: "", role: "", id: new Date().getTime(), fname: "" }],
  photos: [],
  error: {},
  companyProf: {},
  companyDetl: {},
};

export const cmpLogo = createAsyncThunk("logo", async (data11) => {
  return data11;
});

export const getCompanyDetails = createAsyncThunk("get/company", async () => {
  const res = await companyservice.getCompany();
  return res.data[0];
});
export const basicInfor = createAsyncThunk(
  "basicinformation",
  async (data1) => {
    return data1;
  }
);
export const erroSet = createAsyncThunk("errorset", async (data1) => {
  return data1;
});

export const cmpInfor = createAsyncThunk("cmpinformation", async (data2) => {
  return data2;
});

export const linkInfor = createAsyncThunk("linkinformation", async (data3) => {
  return data3;
});

export const countryInfor = createAsyncThunk(
  "countryinformation",
  async (data4) => {
    return data4;
  }
);

export const memberInfor = createAsyncThunk(
  "memberinformation",
  async (data5) => {
    return data5;
  }
);

export const memberPosting = createAsyncThunk(
  "memberposting",
  async (data6) => {
    return data6;
  }
);

export const storeMembers = createAsyncThunk("storemember", async (data7) => {
  return data7;
});

export const storePhoto = createAsyncThunk("clear/photo", async (data) => {
  return data;
});
export const updateFinaldetails = createAsyncThunk(
  "comp/updateFinalDetail",
  async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem("User"));
      const compLogo = await companyservice.compLogo(
        values,
        user.User.companyId
      );
      const response = await companyservice.editExper(
        values,
        user.User.companyId
      );
      console.warn(response, compLogo);
      return values;
    } catch (error) {
      return error;
    }
  }
);

const cmpSlice = createSlice({
  name: "company",
  initialState,
  extraReducers: {
    [cmpLogo.fulfilled]: (state, action) => {
      state.companylogo = action.payload;
    },
    [basicInfor.fulfilled]: (state, action) => {
      state.basicinformation = action.payload;
    },
    [cmpInfor.fulfilled]: (state, action) => {
      state.cmpinformation = action.payload;
    },
    [linkInfor.fulfilled]: (state, action) => {
      state.links = action.payload;
    },
    [countryInfor.fulfilled]: (state, action) => {
      state.locate = action.payload;
    },
    [memberInfor.fulfilled]: (state, action) => {
      state.members = action.payload;
    },
    [memberPosting.fulfilled]: (state, action) => {
      state.members = action.payload;
    },
    [erroSet.fulfilled]: (state, action) => {
      state.error = action.payload;
    },
    [storeMembers.fulfilled]: (state, action) => {
      state.storeMember = action.payload;
    },
    [getCompanyDetails.fulfilled]: (state, action) => {
      state.companyDetl = action.payload;
      state.basicinformation = action.payload.basicInformation;
      state.cmpinformation = action.payload.companyInformation;
      state.links = action.payload.links;
      state.locate = action.payload.address;
      state.members = action.payload.members;
      if (action.payload.companyLogo.logo === null) {
        state.companylogo = { logo: null };
      } else {
        state.companylogo = action.payload.companyLogo;
      }
      if (action.payload.companyLogo.logo === null) {
        state.companyProf = { logo: null };
      } else {
        state.companyProf = action.payload.companyLogo;
      }
    },
  },
});

const { reducer } = cmpSlice;

export default reducer;
