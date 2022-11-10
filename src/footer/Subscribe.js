import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./footer.css/.";
import Button from "@mui/material/Button";
import { styles, CssTextField } from "./subscribestyle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import http from "../http-common";
import { validator } from "./Validator";
function Subscribe() {
  const [userEmail, setUserEmail] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({});
  const handleInputChange = (prop) => (event) => {
    setUserEmail({ ...userEmail, [prop]: event.target.value });
  };

  const toastySuccessFunction = (msg) => {
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
  const validate = async () => {
    setErrors(validator(userEmail));
    const obj = validator(userEmail);
    if (Object.keys(obj).length > 0) {
      return;
    }

    try {
      const { data: response } = await http.post("/addSubscribers", userEmail);
      toastySuccessFunction(response);
    } catch (error) {
      console.warn(error.message);
    }
  };

  return (
    <div className="bluemain">
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
      <Box className="blue" sx={styles.box}>
        <Grid container spacing={2} sx={styles.grid}>
          <Grid item xs={12} sm={12} md={5} lg={6} sx={styles.fstgrd}>
            <h1 className="subhead">Subscribe Us</h1>
            <p className="subpara">Stay upto date with our latest news.</p>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={6} sx={styles.scdgrd}>
            <CssTextField
              sx={styles.input}
              type="email"
              InputLabelProps={{ style: { color: "#fff" } }}
              label="Email"
              placeholder="Email here .."
              name="email"
              id="email"
              error={errors.email ? true : false}
              helperText={errors.email}
              onChange={handleInputChange("email")}
            />
            {/* <TextField
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              placeholder="Enter E-mail"
              value={values.email}
              onChange={handleInputChange("email")}
              error={errors.email ? true : false}
              helperText={errors.email}
            /> */}
            <Button
              variant="contained"
              type="submit"
              sx={styles.btn}
              onClick={validate}
            >
              <p className="subbtn"> Submit</p>{" "}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Subscribe;
