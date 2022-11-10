import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import messageReducer from "./slices/message";
import jobReducer from "./slices/job";
import applyReducer from "./slices/applyJobs";
import personalReducer from './slices/personal';
import searchReducer from "./slices/search";
import resumeReducer from "./slices/UploadingResume";
import cmpReducer from "./slices/companyslice"
import intReducer from "./slices/interviewslice";
import SubscriptionSlice from "./slices/Subscription";

const reducer = {
  auth: authReducer,
  message: messageReducer,
  apply: applyReducer,
  jobs: jobReducer,
  personal:personalReducer,
  searchJobs: searchReducer,
  resume: resumeReducer,
  company:cmpReducer,
  sinterview: intReducer,
  subscription: SubscriptionSlice,
};
export const store = configureStore({
  reducer: reducer,
  devTools: true,
});
// export default store;






