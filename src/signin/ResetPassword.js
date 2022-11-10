import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { styles } from "./signinstyle";
import logo from "./logo/logo.png";
import img from "./logo/image.png";
import { Link, Grid, Button } from "@mui/material";
import axios from "axios";
import { validator } from "../signup/Validator";
import { useNavigate, useParams } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useEffect } from "react";
function ResetPassword() {
  const { id, token } = useParams();
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
    confirmPassword: "",
  });
  const [confirmP, setconfirmP] = useState({
    confirmPassword: "",
    showConfirmPassword: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/reset-password/${id}/${token}`, {})
      .then((res) => {
        if (res.data === "NotVerified") {
          navigate("/forgotPass", { state: true });
        }
      })
      .catch((res) => console.warn(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  const handleConfirmPasswordChange = (prop) => (event) => {
    setconfirmP({ ...confirmP, [prop]: event.target.value });
    setValues({
      ...values,
      confirmPassword: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validator(values));
    axios
      .post(`http://localhost:3000/reset-password/${id}/${token}`, {
        password: values.password,
      })
      .then(function (response) {
        if (response.status === 200) {
          navigate("/signin", { state: "pass" });
        }
      })
      .catch(function (error) {
        console.warn(error);
      });
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
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
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <Grid container spacing={2} sx={styles.grid}>
              <Grid item xs={12} sm={8} md={12}>
                <Typography sx={styles.resin}>Reset Your Password</Typography>
              </Grid>
              <Grid item xs={12} sm={8} md={10} lg={7}>
                <FormControl sx={{ width: "100%" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    required
                    id="outlined-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                    placeholder="Enter Password"
                    error={errors.password ? true : false}
                  />
                  {!!errors.password && (
                    <FormHelperText error id="accountId-error">
                      {errors.password}
                    </FormHelperText>
                  )}
                  {!errors.password && (
                    <FormHelperText
                      id="accountpAss-error"
                      sx={{ width: { sm: "400px", xs: "300px" } }}
                    >
                      Password must contain at least One uppercase character,
                      One lowercase character, One Special character and One
                      number
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={8} md={10} lg={7}>
                <FormControl sx={{ width: "100%" }} variant="outlined">
                  <InputLabel htmlFor="outlined-confirm-adornment-password">
                    Confirm Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-confirm-adornment-password"
                    type={confirmP.showConfirmPassword ? "text" : "password"}
                    value={confirmP.confirmPassword}
                    name="confirmPassword"
                    onChange={handleConfirmPasswordChange("confirmPassword")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle confirm-password visibility"
                          onClick={handleClickShowConfirmPassword}
                          onMouseDown={handleMouseConfirmDownPassword}
                          edge="end"
                        >
                          {confirmP.showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Confirm Password"
                    placeholder="Confirm Password"
                  />
                  {!!errors.confirmPassword && (
                    <FormHelperText error id="accountId-error">
                      {errors.confirmPassword}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={8} md={10} lg={7}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    type="submit"
                    sx={{ backgroundColor: "#4fa9ff" }}
                    variant="contained"
                  >
                    Submit{" "}
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
      <Box sx={styles.blue} className="blue">
        <Box sx={styles.bluemain}>
          <Typography component="p" sx={styles.bluetxt}>
            Reset Your Password
          </Typography>
          <Typography component="p" sx={styles.bluesub}>
            Enter a new password that is different from previously used
            passwords to secure your account.
          </Typography>
        </Box>
        <Box sx={styles.btmimg}>
          <img className="imgbtm" src={img} alt="" />
        </Box>
      </Box>
    </Box>
  );
}

export default ResetPassword;
