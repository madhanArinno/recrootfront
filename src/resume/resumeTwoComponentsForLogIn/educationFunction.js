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
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const educates = [
  "Doctorate",
  "Master’s degree",
  "Postgraduate Diploma",
  "Postgraduate Certificate",
  "Graduate with Honors",
  "Bachelor’s degree",
  "Graduate Diploma",
  "Diploma",
  "Certificate",
  "High school",
  "Elementary school",
];
export function educationFunction(
  education,
  setEducation,
  age,
  handleChange,
  valueTwo,
  addEducationsUI,
  inputEducatoin,
  removeEducation,
  handleEducationInputChange,
  handleEducationStartDate,
  handleEducationEndDate
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
            Education
          </Typography>
          {education === false ? (
            <IconButton
              onClick={(e) => {
                setEducation(true);
              }}
            >
              <KeyboardArrowDownIcon />{" "}
            </IconButton>
          ) : (
            <IconButton
              onClick={(e) => {
                setEducation(false);
              }}
            >
              {" "}
              <ExpandLessRoundedIcon />{" "}
            </IconButton>
          )}
        </Grid>
        {education === true
          ? inputEducatoin.map((inputEducatoin) => (
              <React.Fragment key={inputEducatoin.id}>
                <Grid item xs={12} sm={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Graduation
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="graduate"
                      value={inputEducatoin.graduate}
                      label="Graduation"
                      name="graduate"
                      onChange={(event) =>
                        handleEducationInputChange(inputEducatoin.id, event)
                      }
                    >
                      {educates.map((educate) => (
                        <MenuItem value={educate}>{educate}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <FormControl fullWidth>
                    <TextField
                      fullWidth
                      id="years"
                      label="Degree"
                      name="degreeName"
                      autoComplete="user-name"
                      value={inputEducatoin.degreeName}
                      onChange={(event) =>
                        handleEducationInputChange(inputEducatoin.id, event)
                      }
                    />
                  </FormControl>
                </Grid>

                <Grid item>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      gap: "15px",
                    }}
                    spacing={2}
                  >
                    <TextField
                      fullWidth
                      id="years"
                      label="Duration(Years)"
                      type="number"
                      name="experience"
                      autoComplete="user-name"
                      value={inputEducatoin.experience}
                      onChange={(event) =>
                        handleEducationInputChange(inputEducatoin.id, event)
                      }
                    />
                    <TextField
                      fullWidth
                      id="institute"
                      label="Institute"
                      name="collegeName"
                      autoComplete="user-name"
                      value={inputEducatoin.collegeName}
                      onChange={(event) =>
                        handleEducationInputChange(inputEducatoin.id, event)
                      }
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      gap: "15px",
                      marginTop: 2,
                    }}
                    spacing={2}
                  >
                    <TextField
                      fullWidth
                      id="country"
                      label="Country"
                      name="country"
                      autoComplete="user-name"
                      value={inputEducatoin.country}
                      onChange={(event) =>
                        handleEducationInputChange(inputEducatoin.id, event)
                      }
                    />
                    <TextField
                      fullWidth
                      id="state"
                      label="State"
                      name="state"
                      autoComplete="user-name"
                      value={inputEducatoin.state}
                      onChange={(event) =>
                        handleEducationInputChange(inputEducatoin.id, event)
                      }
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12}>
                  <Stack direction="row" spacing={2}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label="Start Date"
                        inputFormat="MM/dd/yyyy"
                        value={inputEducatoin.fromDate}
                        name="startDate"
                        onChange={(event) =>
                          handleEducationStartDate(inputEducatoin.id, event)
                        }
                        renderInput={(params) => <TextField {...params} />}
                      />
                      <Typography variant="h3" color="initial">
                        -
                      </Typography>
                      <DatePicker
                        label="End Date"
                        inputFormat="MM/dd/yyyy"
                        name="endDate"
                        value={inputEducatoin.toDate}
                        onChange={(event) =>
                          handleEducationEndDate(inputEducatoin.id, event)
                        }
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                      onClick={(event) => removeEducation(inputEducatoin.id)}
                    >
                      <ClearRoundedIcon />
                    </IconButton>
                  </Stack>
                </Grid>
              </React.Fragment>
            ))
          : ""}
        {education === true ? (
          <Button
            startIcon={<AddIcon />}
            variant="outlined"
            size="large"
            spacing={2}
            sx={{ marginTop: 2, height: "3.4375em", maxWidth: 250 }}
            onClick={addEducationsUI}
          >
            Add Education
          </Button>
        ) : (
          ""
        )}
      </Card>
    </Grid>
  );
}
