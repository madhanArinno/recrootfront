import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
} from "@mui/material";
import React from "react";
import { styles } from "./signupstyle";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import ReactPhoneInput from "react-phone-input-2";
import MenuItem from "@mui/material/MenuItem";
import { FormHelperText } from "@mui/material";
import Select from "@mui/material/Select";
import GoogleIcon from "@mui/icons-material/Google";
import "react-phone-input-2/lib/style.css";
import { SECTORS } from "../constants";

export function ReRegisterForm(
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
  formValue,
  setphoneNumber,
  handleInputChange,
  handleRegister,
  errors,
  handleCheckboxChange
) {
  const handleChangeTWo = (value) => {
    setphoneNumber(value);
  };

  return (
    <form onSubmit={handleRegister}>
      <Grid container spacing={2} sx={styles.grid}>
        <Grid item xs sm={12} md={6}>
          <TextField
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="First Name"
            placeholder="Enter First Name"
            autoFocus
            value={values.firstName}
            onChange={handleChange("firstName")}
            error={errors.firstName ? true : false}
            helperText={errors.firstName}
          />
        </Grid>
        <Grid item xs sm={12} md={6}>
          <TextField
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
            placeholder="Enter Last Name"
            value={values.lastName}
            onChange={handleChange("lastName")}
            error={errors.lastName ? true : false}
            helperText={errors.lastName}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            placeholder="Enter E-mail"
            required
            disabled
            value={values.email}
            onChange={handleChange("email")}
            error={errors.email ? true : false}
            helperText={errors.email}
          />
        </Grid>
        <Grid item xs={12} sm={6}></Grid>
        <Grid item xs={12} sm={6}>
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
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              placeholder="Enter Password"
              error={errors.password ? true : false}
              // helperText={errors.password}
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
                Password must contain at least One uppercase character, One
                lowercase character, One Special character and One number
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
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
        <Grid item xs={12} sm={12} md={12}>
          <ReactPhoneInput
            inputExtraProps={{
              name: "phoneNumber",
              required: true,
              autoFocus: true,
              // inputStyle: { width: "100%" },
            }}
            id="phoneNumber"
            name="phoneNumber"
            defaultCountry={"au"}
            value={values.phoneNumber}
            onChange={handleChangeTWo}
            inputStyle={{ width: "100%", height: "3.7375em", fontSize: "16px" }}
          />
        </Grid>
        {recrootUserType === "Employer" && (
          <Grid item xs={12} sm={12} md={12}>
            <TextField
              required
              fullWidth
              id="organization"
              label="Organization Name"
              name="organization"
              autoComplete="name"
              onChange={handleChange("organization")}
              placeholder="Enter Your Organization Name"
            />
          </Grid>
        )}
        {recrootUserType === "Employer" && (
          <Grid item xs={12} sm={12} md={12}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sector</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={values.sector}
                name="sector"
                required
                label="sector"
                onChange={handleChange("sector")}
              >
                {SECTORS.map((job, ind) => (
                  <MenuItem key={ind} value={job}>
                    {job}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        )}
        <Grid item xs={12} sm={12}>
          <FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  value={values.checked}
                  color="primary"
                  checked={values.checked}
                  onChange={handleCheckboxChange("checked")}
                />
              }
              label="By clicking checkbox, you agree to our Terms and Conditions and Privacy Policy"
            />
            {!!errors.agreeTermasValue && (
              <FormHelperText error id="accountId-error">
                {errors.agreeTermasValue}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} container justifyContent="center">
          <Button
            type="submit"
            align="center"
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              width: 442,
              maxWidth: 450,
              height: 60,
              backgroundColor: "#4F9AFF",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "20px",
            }}

            // onClick={() => navigate("/resume")}
          >
            Register
          </Button>
        </Grid>
        <Grid container justifyContent="center" sx={{ marginBottom: "12px" }}>
          <Grid item>
            Already have an account?
            <Link
              variant="body2"
              component="button"
              onClick={() => navigate("/signin")}
            >
              Sign in
            </Link>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} container justifyContent="center">
          <Button
            type="button"
            align="center"
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              width: 442,
              maxWidth: 450,
              height: 60,
              backgroundColor: "#FFF",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "20px",
              color: "black",
              textTransform: "none",
            }}
            startIcon={<GoogleIcon />}
            onClick={async () => {
              window.open("http://localhost:3000/auth/google", "_self");
            }}
          >
            Google
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
