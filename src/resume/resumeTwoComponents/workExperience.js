import React from "react";
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";

export function workExperience(
  work,
  setWork,
  valueTwo,
  handleChange,
  inputWorkingExperience,
  handleWorkingExperience,
  handleInputWorkingExperience
) {
  return (
    <Grid container spacing={2} sx={{ marginTop: 2 }}>
      <Card
        sx={{
          width: "650px",
          padding: "15px",
          boxShadow: "4px 4px 60px rgba(193, 200, 209, 0.25);",
          borderRadius: "8px",
          border: "none",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
        variant="outlined"
      >
        <Grid
          item
          xs={12}
          sm={12}
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
            }}
          >
            Work Experience
          </Typography>
          {work === false ? (
            <IconButton
              onClick={(e) => {
                setWork(true);
              }}
            >
              <KeyboardArrowDownIcon />{" "}
            </IconButton>
          ) : (
            <IconButton
              onClick={(e) => {
                setWork(false);
              }}
            >
              {" "}
              <ExpandLessRoundedIcon />{" "}
            </IconButton>
          )}
        </Grid>
        {work === true
          ? inputWorkingExperience.map((inputWorkingExperience) => (
              <React.Fragment key={inputWorkingExperience.id}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="companyName"
                    required
                    fullWidth
                    label="Company Name"
                    value={inputWorkingExperience.companyName}
                    onChange={(event) =>
                      handleWorkingExperience(inputWorkingExperience.id, event)
                    }
                    autoFocus
                  />
                </Grid>{" "}
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="experience"
                    required
                    fullWidth
                    label="Experience"
                    autoFocus
                    value={inputWorkingExperience.experience}
                    onChange={(event) =>
                      handleWorkingExperience(inputWorkingExperience.id, event)
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Stack direction="row" spacing={2}>
                    <TextField
                      sx={{ width: "300px" }}
                      label="Location"
                      name="location"
                      autoComplete="user-name"
                      value={inputWorkingExperience.location}
                      onChange={(event) =>
                        handleWorkingExperience(
                          inputWorkingExperience.id,
                          event
                        )
                      }
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <MobileDatePicker
                        label="Date mobile"
                        inputFormat="MM/dd/yyyy"
                        value={inputWorkingExperience.startDate}
                        name="startDate"
                        onChange={(event) =>
                          handleWorkingExperience(
                            inputWorkingExperience.id,
                            event
                          )
                        }
                        renderInput={(params) => <TextField {...params} />}
                      />
                      <MobileDatePicker
                        label="Date mobile"
                        inputFormat="MM/dd/yyyy"
                        name="endDate"
                        value={inputWorkingExperience.endDate}
                        // onChange={(event) =>
                        //   handlePersonWorkingRightChangeInput(
                        //     inputWorkingExperience.id,
                        //     event
                        //   )
                        // }
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                      onClick={handleInputWorkingExperience}
                    >
                      <AddCircleOutlineIcon />
                    </IconButton>
                  </Stack>
                </Grid>
              </React.Fragment>
            ))
          : ""}
      </Card>
    </Grid>
  );
}
