import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import logo from "./logo/logo.png";
import img from "./logo/image.png";
import { styles } from "./signinstyle";
import "./signin.css/.";
import { informFunction } from "./informFunction";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../slices/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";

function Signin(state) {
  const location = useLocation();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const toastyErrorFunction = (msg) => {
    toast.error(`${msg}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const toasty = (msg) => {
    toast.success(`${msg}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(login({ values }))
      .unwrap()
      .then((originalPromiseResult) => {
        if (originalPromiseResult.User.email_is_verified === false) {
          navigate("/Verifymobile");
        } else if (originalPromiseResult.User.recrootUserType === "Candidate") {
          let resume = originalPromiseResult.User.resume.resumeFileLocation;
          if (resume.length > 0) {
            if (originalPromiseResult.User.resume.country.length === 0) {
              navigate("/", { replace: true });
            } else navigate("/", { replace: true });
          } else {
            navigate("/resume", { replace: true });
          }
        } else {
          navigate("/", { replace: true });
        }
      })
      .catch((error) => {
        console.warn(error);
        toastyErrorFunction("Please Check Your Email And Password");
      });
  };

  useEffect(() => {
    if (location.state === true) {
      toastyErrorFunction("Your Session Was Expired Please Login Again !");
    } else if (location.state === "pass") {
      toasty("Your Password was Updated And Ready To Login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  setTimeout(() => {
    location.state = null;
  }, 1000);

  return (
    <div className="signin">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Box sx={styles.signin}>
        <Container maxWidth="xl" sx={{}}>
          <Box sx={styles.img}>
            <Link to="/">
              <img style={{ width: "175px" }} src={logo} alt="" />
            </Link>
          </Box>
          <Box sx={styles.bluesml}>
            <Typography component="p" sx={styles.bluetxtsml}>
              Sign In and Find Remote Tech Jobs
            </Typography>
          </Box>
          <Box sx={styles.form}>
            {informFunction(
              values,
              handleChange,
              handleClickShowPassword,
              handleMouseDownPassword,
              navigate,
              handleLogin
            )}
          </Box>
        </Container>
        <Box sx={styles.blue} className="blue">
          <Box sx={styles.bluemain}>
            <Typography component="p" sx={styles.bluetxt}>
              Sign In and Find Remote Tech Jobs
            </Typography>
            <Typography component="p" sx={styles.bluesub}>
              We are a community built for recruiters to find their best
              employees and candidates to find their dream jobs!
            </Typography>
          </Box>
          <Box sx={styles.btmimg}>
            <img className="imgbtm" src={img} alt="" />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Signin;
