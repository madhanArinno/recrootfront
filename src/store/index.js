// import { configureStore } from "@reduxjs/toolkit";

// import { authReducer } from "./auth.slice";
// import { usersReducer } from "./users.slice";

// export * from "./auth.slice";
// export * from "./users.slice";

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     users: usersReducer,
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import messageReducer from "./slices/message";
import searchReducer from "./slices/search";
import jobReducer from "./slices/job";
import applyReducer from "./slices/applyJobs";
import personalReducer from '../slices/personal'


const reducer = {
  auth: authReducer,
  message: messageReducer,
  searchJobs: searchReducer,
  apply: applyReducer,
  jobs: jobReducer,
  personal:personalReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
