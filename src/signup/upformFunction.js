import {
  Box,
  Button,
  Card,
  Checkbox,
  // Divider,
  FormControlLabel,
  Grid,
  Link,
  Tab,
  Tabs,
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
import MenuItem from "@mui/material/MenuItem";
import { FormHelperText } from "@mui/material";
import Select from "@mui/material/Select";
import "react-phone-input-2/lib/style.css";
import CardContent from "@mui/material/CardContent";
import { SECTORS } from ".././constants";

export function upformFunction(
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
) {
  const isEmployer = recrootUserType === "Employer";

  const handleChangeTab = (event, newValue) => {
    clickedButtonHandler(newValue);
  };

  return (
    <form onSubmit={handleRegister}>
      <Card variant="elevation" style={styles.card}>
        <CardContent>
          <Tabs
            value={recrootUserType}
            onChange={handleChangeTab}
            sx={{ justifyContent: "end" }}
            centered
          >
            <Tab value="Employer" label="Employer" />
            <Tab value="Candidate" label="Candidate" />
          </Tabs>

          <Box sx={styles.cardContainer}>
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "center",
              }}
            >
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
            </Box>
            <TextField
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              placeholder="Enter E-mail"
              required
              value={values.email}
              onChange={handleChange("email")}
              error={errors.email ? true : false}
              helperText={errors.email}
              sx={{ width: { xs: "100%", sm: "49%" } }}
            />
            <Box sx={styles.passwordContainer}>
              <FormControl variant="outlined" sx={{ width: "100%" }}>
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

              <FormControl variant="outlined" sx={{ width: "100%" }}>
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
            </Box>

            {isEmployer && (
              <Box
                sx={{
                  display: "flex",
                  gap: "20px",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "center",
                }}
              >
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
              </Box>
            )}

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
                label={
                  <p>
                    By clicking checkbox, you agree to our{" "}
                    <span>
                      <a
                        style={{ color: "#4fa9ff" }}
                        target="blank"
                        href="https://graceful-donut-d1174d.netlify.app/WebsiteUse"
                      >
                        Terms and Conditions and Privacy Policy
                      </a>
                    </span>
                  </p>
                }
              />
              {!!errors.agreeTermasValue && (
                <FormHelperText error id="accountId-error">
                  {errors.agreeTermasValue}
                </FormHelperText>
              )}
            </FormControl>
            <Grid item xs={12} sm={12} container justifyContent="center">
              <Button
                type="submit"
                align="center"
                variant="contained"
                sx={{
                  width: 442,
                  maxWidth: 450,
                  height: 60,
                  backgroundColor: "#4F9AFF",
                  borderRadius: "8px",
                  fontWeight: 700,
                  fontSize: "20px",
                }}
              >
                Register
              </Button>
            </Grid>
            <Grid container justifyContent="center">
              <Grid item>
                Already have an account?
                <Link
                  variant="body2"
                  component="button"
                  onClick={() => navigate("/signin")}
                  sx={{ ml: "2px" }}
                >
                  Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </form>
  );
}
