import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import "./fonts/GreycliffCF-Regular.ttf";
import { Provider } from "react-redux";
import { store } from "./store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
{/* <NavigationScroll /> */}

    <ToastContainer
    position="top-right"
    autoClose={4000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
   />
{/* Same as */}
<ToastContainer />
      <App />
    </Provider>
  // {/* </React.StrictMode> */}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import "./index.css";
// import "./fonts/GreycliffCF-Regular.ttf";
// import { Provider } from "react-redux";
// import { store } from "./store";
// // const root = ReactDOM.createRoot(document.getElementById("root"));
// ReactDOM.render(
//   // <React.StrictMode>
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
//   // {/* </React.StrictMode> */}
// );

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import "./index.css";
// import "./fonts/GreycliffCF-Regular.ttf";
// import { Provider } from "react-redux";
// import store from "./redux/store";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//       />
//       {/* Same as */}
//       <ToastContainer />
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
