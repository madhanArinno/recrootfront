import React from "react";
import Grid from "@mui/material/Grid";
import { Card, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
export function workExperience(
  work,
  setWork,
  valueTwo,
  handleChange,
  inputWorkingExperience,
  handleWorkingExperience,
  handleInputWorkingExperience,
  handleWorkingExperiencefromDate,
  handleWorkingExperiencetoDate,
  removeWorkingExperience
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
                <Grid item xs={12} sm={12} sx={{ mt: "15px" }}>
                  <TextField
                    autoComplete="given-name"
                    name="role"
                    fullWidth
                    id="role"
                    label="Role"
                    autoFocus
                    value={inputWorkingExperience.role}
                    onChange={(event) =>
                      handleWorkingExperience(inputWorkingExperience.id, event)
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Stack direction="row" spacing={2}>
                    <TextField
                      autoComplete="given-name"
                      name="companyName"
                      fullWidth
                      label="Company Name"
                      value={inputWorkingExperience.companyName}
                      onChange={(event) =>
                        handleWorkingExperience(
                          inputWorkingExperience.id,
                          event
                        )
                      }
                      autoFocus
                    />
                    <TextField
                      autoComplete="given-name"
                      name="experience"
                      required
                      fullWidth
                      label="Experience(Years)"
                      type="number"
                      autoFocus
                      value={inputWorkingExperience.experience}
                      onChange={(event) =>
                        handleWorkingExperience(
                          inputWorkingExperience.id,
                          event
                        )
                      }
                    />
                  </Stack>
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
                      <DatePicker
                        label="Start Date"
                        inputFormat="MM/dd/yyyy"
                        value={inputWorkingExperience.fromDate}
                        name="fromDate"
                        onChange={(event) =>
                          handleWorkingExperiencefromDate(
                            inputWorkingExperience.id,
                            event
                          )
                        }
                        renderInput={(params) => <TextField {...params} />}
                      />
                      <DatePicker
                        label="End Date"
                        inputFormat="MM/dd/yyyy"
                        name="toDate"
                        value={inputWorkingExperience.toDate}
                        onChange={(event) =>
                          handleWorkingExperiencetoDate(
                            inputWorkingExperience.id,
                            event
                          )
                        }
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                      onClick={(event) =>
                        removeWorkingExperience(inputWorkingExperience.id)
                      }
                    >
                      <ClearRoundedIcon />
                    </IconButton>
                  </Stack>
                </Grid>
                <Divider />
              </React.Fragment>
            ))
          : ""}
        {work === true ? (
          <Button
            startIcon={<AddIcon />}
            variant="outlined"
            size="large"
            spacing={2}
            sx={{ marginTop: 2, height: "3.4375em", maxWidth: 250 }}
            onClick={handleInputWorkingExperience}
          >
            Add Experience
          </Button>
        ) : (
          ""
        )}
      </Card>
    </Grid>
  );
}
