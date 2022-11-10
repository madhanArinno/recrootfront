import { Button, Typography, ButtonBase } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import { styles } from "./signupstyle";
import logo from "./logo/logo.png";
import { styled } from "@mui/material/styles";
import { useNavigate, Link, useParams } from "react-router-dom";
import { makeStyles, withStyles } from "@mui/styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { reRegister } from "../slices/auth";
import { useDispatch } from "react-redux";
import { validator } from "./Validator";
import { ReRegisterForm } from "./ReRegisterForm";
import axios from "axios";

const ColorButton = styled(Button)(({ theme }) => ({}));
const StyledButton = withStyles(() => ({}))(ButtonBase);

const useStyles = makeStyles(() => ({
  activeButton: {
    backgroundColor: "white!important",
    color: "#4F9AFF!important",
  },
}));

function ReRegister() {
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const { id } = useParams();
  const classes = useStyles();
  let navigate = useNavigate();

  const [recrootUserType, setRecrootUserType] = useState("Candidate");
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
    firstName: "",
    lastName: "",
    recrootUserType: "Candidate",
    confirmPassword: "",
    checked: false,
    id: id,
  });
  const [phoneNumber, setphoneNumber] = useState("");
  const [confirmP, setconfirmP] = useState({
    confirmPassword: "",
    showConfirmPassword: false,
  });

  const [formValue, setformValue] = React.useState({
    email: "",
  });

  React.useEffect(() => {
    axios
      .get(`http://localhost:3000/api/getUserDetails/${id}`)
      .then((response) => {
        setValues({
          email: response.data.email,
          password: "",
          showPassword: false,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          recrootUserType: "Candidate",
          confirmPassword: "",
          checked: false,
          id: response.data._id,
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(null);

  const handleInputChange = (event) => {};

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

    dispatch(reRegister({ values }))
      .unwrap()
      .then((originalPromiseResult) => {
        navigate("/verifymobile", { replace: true });
      })
      .catch((error) => {
        toastyErrorFunction("User Already Exist");
      });
  };

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
                  fontSize: "24px",
                  fontWeight: "700",
                  fontFamily: "GreycliffCF-Bold",
                  lineHeight: "35px",
                  letterSpacing: "1.5px",
                }}
              >
                Candidate
              </div>
            </ColorButton>
          </Box>

          <Typography sx={styles.sinup}>Re Register</Typography>

          {ReRegisterForm(
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
            setformValue
          )}
        </Container>
        <Box sx={styles.blue}>
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
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default ReRegister;
