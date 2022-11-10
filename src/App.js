import React from "react";
import Mainpage from "./mainpage/Mainpage";
import Resume from "./resume/Resume";
import ResumeSecond from "./resume/ResumeSecond";
import Signin from "./signin/Signin";
import SignUp from "./signup/SignUp";
import HomePage from "./HomePage";
import CandidateProfile from "./Profile/CandidateProfile";
import Slkelitan from "./Skelitan/Slkelitan";
import Verifyemail from "./verify/Verifyemail";
import Verifymobile from "./verify/Verifymobile";
import Profile from "./profile cop/Profile";
import Pricing from "./subscription/Pricing";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PrivateRoute } from "./helpers/PrivateRoute";
import { VerifyRoute } from "./helpers/VerifyRoute";
import Employerhome from "./employerhome/Employerhome";
import NavigationScroll from "./ScrollToTop";
import { MainResponse } from "./mainpage/MainResponse";
import ForgotPassword from "./signin/ForgotPassword";
import ResetPassword from "./signin/ResetPassword";
import AboutUs from "./footer/AboutUs";
import CorporateInfo from "./footer/CorporateInfo";
import PrivacyInfo from "./footer/PrivacyInfo";
import InfoSecurity from "./footer/InfoSecurtiy";
import WebsiteUse from "./footer/WebsiteUse";
import Subscription from "./subscription/Subcription";
import Subscription2 from "./subscription/Subscription2";
import Subscription3 from "./subscription/Subscription3";
import ReRegister from "./signup/ReRegister";
import ReactGA from "react-ga";

const TRACKING_ID = "UA-220421043-1";

ReactGA.initialize(TRACKING_ID);
function App() {
  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <NavigationScroll />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="signUp" element={<SignUp />} />
          <Route
            path="resume"
            element={
              <VerifyRoute>
                <Resume />
              </VerifyRoute>
            }
          />
          <Route
            path="mainSearchForCandidate"
            element={
              <VerifyRoute>
                <Mainpage />
              </VerifyRoute>
            }
          />
          <Route
            path="CandidateProfile"
            element={
              <PrivateRoute>
                <VerifyRoute>
                  <CandidateProfile />
                </VerifyRoute>
              </PrivateRoute>
            }
          />

          <Route path="Slkelitan" element={<Slkelitan />} />
          <Route
            path="myProfile"
            element={
              <PrivateRoute>
                <VerifyRoute>
                  <Profile />
                </VerifyRoute>
              </PrivateRoute>
            }
          />
          <Route path="Mainpage" element={<Mainpage />} />
          <Route path="MainpageRespone" element={<MainResponse />} />
          <Route
            path="resumeSecond"
            element={
              <PrivateRoute>
                <VerifyRoute>
                  <ResumeSecond />
                </VerifyRoute>
              </PrivateRoute>
            }
          />
          <Route path="Verifyemail" element={<Verifyemail />} />
          <Route path="Verifymobile" element={<Verifymobile />} />
          <Route
            path="employerhome/*"
            element={
              <PrivateRoute>
                <VerifyRoute>
                  <Employerhome />
                </VerifyRoute>
              </PrivateRoute>
            }
          />
          <Route path="forgotPass" element={<ForgotPassword />} />
          <Route
            path="Pricing"
            element={
              <PrivateRoute>
                <VerifyRoute>
                  <Pricing />
                </VerifyRoute>
              </PrivateRoute>
            }
          />
          <Route path="reset-password/:id/:token" element={<ResetPassword />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="CorporateInfo" element={<CorporateInfo />} />
          <Route path="PrivacyInfo" element={<PrivacyInfo />} />
          <Route path="InfoSecurity" element={<InfoSecurity />} />
          <Route path="WebsiteUse" element={<WebsiteUse />} />
          <Route path="Subscription" element={<Subscription />} />
          <Route path="Subscription2" element={<Subscription2 />} />
          <Route path="sucessPayment/*" element={<Subscription3 />} />
          <Route path="reRegister/:id" element={<ReRegister />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
