import { Button, Typography, ButtonBase } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState, useEffect } from "react";
import { styles } from "./signupstyle";
import logo from "./logo/logo.png";
import { styled } from "@mui/material/styles";
import { upformFunction } from "./upformFunction";
import { useNavigate, Link } from "react-router-dom";
import { makeStyles, withStyles } from "@mui/styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { register } from "../slices/auth";
import { useDispatch } from "react-redux";
import { validator } from "./Validator";
import img from "../signin/logo/image.png";

const ColorButton = styled(Button)(({ theme }) => ({}));
const StyledButton = withStyles(() => ({}))(ButtonBase);

const useStyles = makeStyles(() => ({
  activeButton: {
    backgroundColor: "white!important",
    color: "#4F9AFF!important",
  },
}));

function SignUp() {
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const classes = useStyles();
  let navigate = useNavigate();
  const [recrootUserType, setRecrootUserType] = useState("Candidate");
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
    firstName: "",
    lastName: "",
    sector: "",
    organization: "",
    recrootUserType: "Candidate",
    confirmPassword: "",
    checked: false,
  });
  const [phoneNumber, setphoneNumber] = useState("");
  const [confirmP, setconfirmP] = useState({
    confirmPassword: "",
    showConfirmPassword: false,
  });
  const [formValue, setformValue] = React.useState({
    email: "",
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

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("hhttp://localhost:3000/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setValues({
            ...values,
            lastName: resObject.user.family_name,
            firstName: resObject.user.given_name,
            email: resObject.user.email,
          });

          setUser(resObject.user);
        })
        .catch((err) => {
          console.warn(err);
        });
    };
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputChange = (event) => {
    console.warn(event);
  };

  const clickedButtonHandler = (e) => {
    setRecrootUserType(e);
    setValues({ ...values, recrootUserType: e });
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleCheckboxChange = (prop) => (event) => {
    setValues({ ...values, checked: event.target.checked });
  };

  const handleConfirmPasswordChange = (prop) => (event) => {
    setconfirmP({ ...confirmP, [prop]: event.target.value });
    setValues({
      ...values,
      confirmPassword: event.target.value,
    });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleClickShowConfirmPassword = () => {
    setconfirmP({
      ...confirmP,
      showConfirmPassword: !confirmP.showConfirmPassword,
    });
  };

  const handleMouseConfirmDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleRegister = (event) => {
    event.preventDefault();

    setErrors(validator(values));

    const obj = validator(values);

    if (Object.keys(obj).length > 0) {
      return;
    }

    dispatch(register({ values }))
      .unwrap()
      .then((originalPromiseResult) => {
        navigate("/verifymobile", { replace: true });
      })
      .catch((error) => {
        toastyErrorFunction("User Already Exist");
        console.warn(error);
      });
  };

  const userType = recrootUserType === "Employer";

  return (
    <div className="signupmain">
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
      {/* Same as */}
      <ToastContainer />
      <Box sx={styles.signup}>
        <Container maxWidth="xl">
          <Box sx={styles.img}>
            <Link to="/">
              <img style={{ width: "175px" }} src={logo} alt="" />
            </Link>
          </Box>
          <Box sx={styles.topspc}>
            <ColorButton
              sx={styles.topbtn}
              variant="outlined"
              className={
                recrootUserType === "Candidate" ? `${classes.activeButton}` : ""
              }
              onClick={() => clickedButtonHandler("Candidate")}
            >
              <div
                style={{
                  fontSize: "17px",
                  fontWeight: "700",
                  fontFamily: "GreycliffCF-Bold",
                  lineHeight: "35px",
                  letterSpacing: "1.5px",
                }}
              >
                {!userType && "I am a "} Candidate
              </div>
            </ColorButton>
            <ColorButton
              sx={styles.topbtn}
              variant="outlined"
              className={
                recrootUserType === "Employer" ? `${classes.activeButton}` : ""
              }
              onClick={() => clickedButtonHandler("Employer")}
            >
              <div
                style={{
                  fontSize: "17px",
                  fontWeight: "700",
                  fontFamily: "GreycliffCF-Bold",
                  lineHeight: "35px",
                  letterSpacing: "1.5px",
                }}
              >
                {userType && "I am an "} Employer
              </div>
            </ColorButton>
          </Box>
          <Box sx={styles.topspccon}>
            {userType
              ? " I want to attract the best talent"
              : "I want to discover awesome companies"}
          </Box>

          <Typography sx={styles.sinup}>Sign Up</Typography>

          {upformFunction(
            values,
            handleChange,
            handleClickShowPassword,
            handleMouseDownPassword,
            navigate,
            recrootUserType,
            confirmP,
            handleMouseConfirmDownPassword,
            handleClickShowConfirmPassword,
            handleConfirmPasswordChange,
            handleInputChange,
            setphoneNumber,
            formValue,
            handleRegister,
            errors,
            handleCheckboxChange,
            user,
            phoneNumber,
            setformValue,
            clickedButtonHandler
          )}
        </Container>
        <Box sx={styles.blue} className="blue">
          <Box sx={styles.bluemain}>
            <Typography component="p" sx={styles.bluetxt}>
              Sign Up and Find Remote Tech Jobs
            </Typography>
            <Typography component="p" sx={styles.bluesub}>
              Please select whether you are an employer or a candidate to sign
              up! You'll acquire separate spaces to find your dream job and
              monitor your new recruitments with customised features
            </Typography>
          </Box>
          <Box sx={styles.rightbtn}>
            <StyledButton
              name="Candidate"
              className={
                recrootUserType === "Candidate" ? `${classes.activeButton}` : ""
              }
              sx={styles.btncand}
              variant="outlined"
              onClick={() => clickedButtonHandler("Candidate")}
            >
              <Typography sx={styles.candtxt}>Candidate</Typography>
              <Typography sx={styles.candsub}>
                I want to discover awesome companies
              </Typography>
            </StyledButton>
            <StyledButton
              name="second"
              className={
                recrootUserType === "Employer" ? `${classes.activeButton}` : ""
              }
              sx={styles.btncand}
              variant="outlined"
              onClick={() => clickedButtonHandler("Employer")}
            >
              <Typography sx={styles.candtxt}>Employer</Typography>
              <Typography sx={styles.candsub}>
                I want to attract the best talent
              </Typography>
            </StyledButton>
          </Box>
          <Box sx={styles.btmImgContainer}>
            <img style={styles.btImage} src={img} alt="" />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default SignUp;
