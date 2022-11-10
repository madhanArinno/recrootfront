import {
  Link,
  Grid,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  TextField,
  Typography,
  CardContent,
  Card,
} from "@mui/material";
import React from "react";
import { styles } from "./signinstyle";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

export function informFunction(
  values,
  handleChange,
  handleClickShowPassword,
  handleMouseDownPassword,
  navigate,
  handleLogin
) {
  return (
    <form onSubmit={handleLogin}>
      <Grid container spacing={2} sx={styles.grid}>
        <Grid item xs={12} sm={8} md={8}>
          <Typography sx={styles.sinin}>Sign In</Typography>
        </Grid>
        <Card variant="outlined" style={styles.card}>
          <CardContent
            sx={{
              justifyContent: "center",
              display: "flex",
              gap: "20px",
              flexDirection: "column",
            }}
          >
            <TextField
              sx={styles.input}
              autoComplete="given-name"
              name="email"
              required
              fullWidth
              id="email"
              label="Email Address"
              placeholder="Enter Email"
              onChange={handleChange("email")}
              autoFocus
            ></TextField>
            <Grid item>
              <Link
                onClick={() => navigate("/forgotPass")}
                sx={{ textDecoration: "none", float: "right" }}
              >
                Forgot Password?
              </Link>
              <FormControl sx={{ width: "100%" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
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
                  placeholder="Enter Your Password"
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Remember Information"
              />
            </Grid>
            <Grid item justifyContent="center">
              <Button
                type="submit"
                align="center"
                variant="contained"
                sx={styles.loginbtn}
              >
                Login
              </Button>
            </Grid>
            <Grid container justifyContent="center">
              <Grid item sx={styles.sigup}>
                <Typography>Not A Member?</Typography>
                <Link
                  variant="body2"
                  component="button"
                  onClick={() => navigate("/signup")}
                >
                  Sign up
                </Link>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </form>
  );
}
