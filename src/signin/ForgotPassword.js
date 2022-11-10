import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { styles } from "./signinstyle";
import logo from "./logo/logo.png";
import img from "./logo/image.png";
import { Link, Grid, Button, TextField } from "@mui/material";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/forgot-password", { email: email })
      .then(function (response) {
        if (response.status === 200) {
          toasty("The Reset Password Link Was Sent To Your Email");
        }
      })
      .catch(function (error) {
        if (error.response.status === 404) {
          toastyErrorFunction("User Does Not Exist !!");
        }
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

  useEffect(() => {
    if (location.state === true) {
      toastyErrorFunction(
        "The Link Is Expired Or Not Valid Please Generate Again"
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={styles.signin}>
      <Container maxWidth="xl" sx={{}}>
        <Box sx={styles.img}>
          <Link to="/">
            <img style={{ width: "175px" }} src={logo} alt="" />
          </Link>
        </Box>
        <Box sx={styles.form}>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <Grid container spacing={2} sx={styles.grid}>
              <Grid item xs={12} sm={8} md={12}>
                <Typography sx={styles.resin}>Reset Password Link</Typography>
              </Grid>
              <Grid item xs={12} sm={8} md={10} lg={7}>
                <TextField
                  sx={styles.input}
                  autoComplete="given-name"
                  name="email"
                  required
                  fullWidth
                  value={email}
                  id="email"
                  label="Email Address"
                  placeholder="Enter Email"
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={8} md={10} lg={7}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    type="submit"
                    sx={{ backgroundColor: "#4fa9ff" }}
                    variant="contained"
                  >
                    Send Your Reset Link{" "}
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
      <Box sx={styles.blue} className="blue">
        {/* <Box sx={styles.bluecross}></Box> */}
        <Box sx={styles.bluemain}>
          <Typography component="p" sx={styles.bluetxt}>
            Reset Your Password
          </Typography>
          <Typography component="p" sx={styles.bluesub}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nec
            magnis platea at vulputate.
          </Typography>
        </Box>
        <Box sx={styles.btmimg}>
          <img className="imgbtm" src={img} alt="" />
        </Box>
      </Box>
    </Box>
  );
}

export default ForgotPassword;
