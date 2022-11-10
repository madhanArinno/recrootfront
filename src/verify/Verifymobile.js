import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { React, useState, useEffect } from "react";
import { styles } from "./verifystyle";
import logo from "./logo/logo.svg";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { editReferVer, resendVerify } from "../slices/personal";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Verifymobile() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [state, setState] = useState({
    phone: "",
    otp: "",
  });

  const user = JSON.parse(localStorage.getItem("User"));

  const code = useSelector((state) => state.personal.code);

  useEffect(() => {
    if (code.codes === undefined) {
    } else {
      const loggedInUser = JSON.parse(localStorage.getItem("User"));

      loggedInUser.User.referral_code = code.codes;
      localStorage.setItem("User", JSON.stringify(loggedInUser));
    }
  }, [code]);

  const handleChange = (otp) => setState({ otp });
  const handleVerify = (otp) => {
    // eslint-disable-next-line eqeqeq
    if (user.User.referral_code == otp) {
      dispatch(editReferVer({ code: true, id: user.User._id }));
      const loggedInUser = JSON.parse(localStorage.getItem("User"));
      loggedInUser.User.email_is_verified = true;
      localStorage.setItem("User", JSON.stringify(loggedInUser));
      notify("You Are verified Sucessfully");
      if (loggedInUser.User.recrootUserType === "Employer") {
        navigate("/employerhome", { replace: true });
      } else {
        navigate("/resume", { replace: true });
      }
    } else {
      notifye("Your Otp Is Wrong");
    }
  };

  const sendCode = () => {
    dispatch(
      resendVerify({
        id: user.User._id,
        email: user.User.email,
        name: user.User.firstName,
      })
    );
    notify("New Otp Has Been Sent");
  };

  const notify = (suc) =>
    toast.success(suc, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const notifye = (err) =>
    toast.error(err, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  return (
    <div>
      <Box sx={styles.main}>
        <Grid container spacing={2}>
          <Grid item md={8} xs={12}>
            <Container maxWidth="xl">
              <Box sx={styles.img}>
                <img src={logo} alt="" />
              </Box>

              <Typography sx={styles.sinup}>Verify </Typography>
              <Box sx={styles.verifytxt}>
                <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
                  Enter OTP received to your Registered Email
                </Typography>
                <OtpInput
                  separator={
                    <span>
                      <strong>.</strong>
                    </span>
                  }
                  onChange={handleChange}
                  value={state.otp}
                  numInputs={4}
                  inputStyle={{
                    width: "3rem",
                    height: "3rem",
                    margin: "0 10px",
                    fontSize: "2rem",
                    borderRadius: 4,
                    border: "1px solid rgba(0,0,0,0.3)",
                  }}
                  isInputNum={true}
                />

                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#4F9AFF" }}
                  onClick={() => {
                    handleVerify(state.otp);
                  }}
                >
                  Verify
                </Button>
                <Typography variant="p">
                  If you didn't receive the OTP , Click Here To{" "}
                  <Button onClick={sendCode}>Resend</Button> .
                </Typography>
              </Box>
            </Container>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box sx={styles.blue}></Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Verifymobile;
