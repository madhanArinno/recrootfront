import { createSlice } from "@reduxjs/toolkit";
const user = JSON.parse(localStorage.getItem("User"));

const initialState = {
  price: 10,
  package: "Silver",
  timePeriod: "mothly",
  companyId: null,
};
const SubscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    changeSubscription: (state, action) => {
      state.price = action.payload.price;
      state.package = action.payload.title;
      state.companyId = user.User.companyId;
      if (action.payload.package === "mo") {
        state.timePeriod = "mothly";
      } else {
        state.timePeriod = "yearly";
      }
    },
    clearMessage: () => {
      console.warn("erwrwer");
    },
  },
});
const { reducer, actions } = SubscriptionSlice;
export const { changeSubscription, clearMessage } = actions;
export default reducer;
