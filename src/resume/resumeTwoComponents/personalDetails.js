import React from "react";
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";

export function personalDetails(
  collapse,
  setCollapse,
  age,
  handleCountryChange,
  handleNationalityChange,
  handleCountriesWithWorkingRightChange,
  valueTwo,
  countryList,
  inputPersonalDetailsCountry,
  inputPersonalNationality,
  inputCountriesWithWorkingRights,
  handlePersonalDetailsCountryChangeInput,
  handlePersonalDetailsNationalityChangeInput,
  handlePersonWorkingRightChangeInput
) {
  return (
    <Grid container spacing={2}>
      <Card
        sx={{
          width: "650px",
          padding: "15px",
          boxShadow: "4px 4px 60px rgba(193, 200, 209, 0.25);",
          borderRadius: "8px",
          border: "none",
        }}
        variant="outlined"
      >
        <Grid item xs={12} sm={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="span"
              component="span"
              color="initial"
              sx={{
                color: "#6A6A6A",
                fontWeight: 800,
                marginBottom: "5px",
              }}
            >
              Personal Details
            </Typography>
            {collapse === false ? (
              <IconButton
                onClick={(e) => {
                  setCollapse(true);
                }}
              >
                <KeyboardArrowDownIcon />{" "}
              </IconButton>
            ) : (
              <IconButton
                onClick={(e) => {
                  setCollapse(false);
                }}
              >
                {" "}
                <ExpandLessRoundedIcon />{" "}
              </IconButton>
            )}
          </Box>
        </Grid>
        {collapse === true ? (
          <>
            <Grid item xs={12} sm={12}>
              <Typography
                variant="span"
                component="span"
                color="initial"
                sx={{
                  color: "#6A6A6A",

                  marginBottom: "10px",
                  fontWeight: 800,
                  marginTop: "15px",
                  display: "grid",
                }}
              >
                Country
              </Typography>
              {inputPersonalDetailsCountry.map(
                (inputPersonalDetailsCountry) => (
                  <div key={inputPersonalDetailsCountry.id}>
                    <Stack direction="row" spacing={2} marginTop={2}>
                      <FormControl fullWidth>
                        <InputLabel id="country">Country</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="country"
                          name="country"
                          value={inputPersonalDetailsCountry.country}
                          label="Age"
                          onChange={(event) =>
                            handlePersonalDetailsCountryChangeInput(
                              inputPersonalDetailsCountry.id,
                              event
                            )
                          }
                        >
                          {countryList.map((countryList, index) => (
                            <MenuItem key={index} value={countryList}>
                              {countryList}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      <label htmlFor="icon-button-file">
                        <IconButton
                          color="primary"
                          aria-label="add to shopping cart"
                          onClick={handleCountryChange}
                        >
                          <AddCircleOutlineIcon />
                        </IconButton>
                      </label>
                    </Stack>
                  </div>
                )
              )}
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography
                variant="span"
                component="span"
                color="initial"
                sx={{
                  color: "#6A6A6A",

                  marginBottom: "10px",
                  fontWeight: 800,
                  marginTop: "15px",
                  display: "grid",
                }}
              >
                Nationality
              </Typography>
              {inputPersonalNationality.map((inputPersonalNationality) => (
                <div key={inputPersonalNationality.id}>
                  <Stack direction="row" spacing={2} marginTop={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Choose one
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="nationality"
                        name="nationality"
                        value={inputPersonalNationality.nationality}
                        label=" Nationality"
                        onChange={(event) =>
                          handlePersonalDetailsNationalityChangeInput(
                            inputPersonalNationality.id,
                            event
                          )
                        }
                      >
                        <MenuItem value="Nationality one">
                          Nationality one
                        </MenuItem>
                        <MenuItem value="Nationality Two">
                          Nationality Two
                        </MenuItem>
                        <MenuItem value="Nationality three">
                          Nationality three
                        </MenuItem>
                      </Select>
                    </FormControl>
                    <label htmlFor="icon-button-file">
                      <IconButton
                        color="primary"
                        aria-label="add to shopping cart"
                        onClick={handleNationalityChange}
                      >
                        <AddCircleOutlineIcon />
                      </IconButton>
                    </label>
                  </Stack>
                </div>
              ))}
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography
                variant="span"
                component="span"
                color="initial"
                sx={{
                  color: "#6A6A6A",

                  marginBottom: "10px",
                  fontWeight: 800,
                  marginTop: "15px",
                  display: "grid",
                }}
              >
                Countries with valid working rights
              </Typography>
              {inputCountriesWithWorkingRights.map(
                (inputCountriesWithWorkingRights) => (
                  <div key={inputCountriesWithWorkingRights.id}>
                    <Stack direction="row" spacing={2} marginTop={2}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Choose one
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="country"
                          name="country"
                          value={
                            inputCountriesWithWorkingRights.country
                          }
                          label="Choose one"
                          onChange={(event) =>
                            handlePersonWorkingRightChangeInput(
                              inputCountriesWithWorkingRights.id,
                              event
                            )
                          }
                          // onChange={handleChange}
                        >
                          {countryList.map((countryList, index) => (
                            <MenuItem key={index} value={countryList}>
                              {countryList}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      <label htmlFor="icon-button-file">
                        <IconButton
                          color="primary"
                          aria-label="add to shopping cart"
                          onClick={handleCountriesWithWorkingRightChange}
                        >
                          <AddCircleOutlineIcon />
                        </IconButton>
                      </label>
                    </Stack>
                  </div>
                )
              )}
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography
                variant="span"
                component="span"
                color="initial"
                sx={{
                  color: "#6A6A6A",

                  marginBottom: "10px",
                  fontWeight: 800,
                  marginTop: "15px",
                  display: "grid",
                }}
              >
                When are you available to work
              </Typography>
              <Stack direction="row" spacing={2}>
                <TextField
                  sx={{ width: "300px" }}
                  id="userName"
                  label="Add Days "
                  name="user"
                  autoComplete="user-name"
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <MobileDatePicker
                    label="Date mobile"
                    inputFormat="MM/dd/yyyy"
                    value={valueTwo}
                    // onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  <MobileDatePicker
                    label="Date mobile"
                    inputFormat="MM/dd/yyyy"
                    value={valueTwo}
                    // onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Stack>
            </Grid>{" "}
          </>
        ) : (
          ""
        )}
      </Card>
    </Grid>
  );
}
