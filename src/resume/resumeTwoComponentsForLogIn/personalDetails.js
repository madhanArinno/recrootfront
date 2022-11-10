import React from "react";
import Grid from "@mui/material/Grid";
import { Card, Checkbox, ListItemText } from "@mui/material";
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
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CancelIcon from "@mui/icons-material/Cancel";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const aviTime = [
  "Monday to Friday",
  "8-hour shift",
  "Weekend availability",
  "Day shift",
  "Overtime",
  "On call",
  "10-hour shift",
  "Holidays",
  "12-hour shift",
  "Night shift",
  "Overnight shift",
];
export function personalDetails(
  collapse,
  setCollapse,
  age,
  handleCountryChange,
  handleCountryRemove,
  handleNationalityChange,
  handleNationalityRemove,
  handleCountriesWithWorkingRightChange,
  handleRightsRemove,
  valueTwo,
  countryList,
  nationalityLIst,
  inputPersonalDetailsCountry,
  inputPersonalNationality,
  inputCountriesWithWorkingRights,
  handlePersonalDetailsCountryChangeInput,
  handlePersonalDetailsNationalityChangeInput,
  handlePersonWorkingRightChangeInput,
  handleAvaoilability,
  availabilityForWork,
  handleAvaiulabilityfromDate,
  handleAvailabilityetoDate,
  about,
  handleAbout,
  handleAvaoilDays,
  days
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
              variant="h6"
              component="h6"
              color="initial"
              sx={{
                color: "#6A6A6A",
                marginTop: "10px",
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
            <Grid item xs={12} sm={12} sx={{ mt: "15px" }}>
              <TextField
                autoComplete="given-name"
                name="about"
                fullWidth
                id="about"
                label="About"
                autoFocus
                multiline
                rows={4}
                value={about}
                onChange={(e) => handleAbout(e)}
              />
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
                Country
              </Typography>
              {inputPersonalDetailsCountry.map((inputPersonalDetailsCount) => (
                <div key={inputPersonalDetailsCount.id}>
                  <Stack direction="row" spacing={2} marginTop={2}>
                    <FormControl fullWidth>
                      <InputLabel id="country">Choose Countries</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="country"
                        name="country"
                        value={inputPersonalDetailsCount.country}
                        label="Choose Countries"
                        onChange={(event) =>
                          handlePersonalDetailsCountryChangeInput(
                            inputPersonalDetailsCount.id,
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
                    <label
                      htmlFor="icon-button-file"
                      style={{ display: "flex" }}
                    >
                      {inputPersonalDetailsCountry.length > 1 ? (
                        <IconButton
                          color="primary"
                          aria-label="add to shopping cart"
                          onClick={() => {
                            handleCountryRemove(inputPersonalDetailsCount.id);
                          }}
                        >
                          <CancelIcon />
                        </IconButton>
                      ) : (
                        ""
                      )}
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
                Nationality
              </Typography>
              {inputPersonalNationality.map((inputPersonalNationali) => (
                <div key={inputPersonalNationali.id}>
                  <Stack direction="row" spacing={2} marginTop={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Choose Nationalities
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="nationality"
                        name="country"
                        value={inputPersonalNationali.country}
                        label=" Choose Nationalities"
                        onChange={(event) =>
                          handlePersonalDetailsNationalityChangeInput(
                            inputPersonalNationali.id,
                            event
                          )
                        }
                      >
                        {nationalityLIst.map((nationalityLIst, index) => (
                          <MenuItem key={index} value={nationalityLIst}>
                            {nationalityLIst}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <label
                      htmlFor="icon-button-file"
                      style={{ display: "flex" }}
                    >
                      {inputPersonalNationality.length > 1 ? (
                        <IconButton
                          color="primary"
                          aria-label="add to shopping cart"
                          onClick={() => {
                            handleNationalityRemove(inputPersonalNationali.id);
                          }}
                        >
                          <CancelIcon />
                        </IconButton>
                      ) : (
                        ""
                      )}
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
                (inputCountriesWithWorkingRigh) => (
                  <div key={inputCountriesWithWorkingRigh.id}>
                    <Stack direction="row" spacing={2} marginTop={2}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Choose Countries
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="country"
                          name="country"
                          value={inputCountriesWithWorkingRigh.country}
                          label="Choose Countries"
                          onChange={(event) =>
                            handlePersonWorkingRightChangeInput(
                              inputCountriesWithWorkingRigh.id,
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
                      <label
                        htmlFor="icon-button-file"
                        style={{ display: "flex" }}
                      >
                        {inputCountriesWithWorkingRights.length > 1 ? (
                          <IconButton
                            color="primary"
                            aria-label="add to shopping cart"
                            onClick={() => {
                              handleRightsRemove(
                                inputCountriesWithWorkingRigh.id
                              );
                            }}
                          >
                            <CancelIcon />
                          </IconButton>
                        ) : (
                          ""
                        )}
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
                <FormControl variant="standard" sx={{ width: 300 }}>
                  <InputLabel
                    id="mutiple-select-label"
                    sx={{ ml: 1.5, mt: "0px" }}
                  >
                    Days
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    fullWidth
                    name="days"
                    variant="outlined"
                    value={days}
                    renderValue={(selected) =>
                      selected.map((x) => x).join(", ")
                    }
                    MenuProps={MenuProps}
                    onChange={handleAvaoilDays}
                  >
                    {aviTime.map((variant, ind) => (
                      <MenuItem key={ind} value={variant}>
                        <Checkbox
                          checked={
                            days.findIndex((item) => item === variant) >= 0
                          }
                        />
                        <ListItemText primary={variant} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Start Date"
                    inputFormat="MM/dd/yyyy"
                    value={availabilityForWork.from}
                    name="from"
                    onChange={(event) => handleAvaiulabilityfromDate(event)}
                    renderInput={(params) => <TextField {...params} />}
                  />

                  <DatePicker
                    label="End Date"
                    inputFormat="MM/dd/yyyy"
                    value={availabilityForWork.to}
                    name="to"
                    onChange={(event) => handleAvailabilityetoDate(event)}
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
