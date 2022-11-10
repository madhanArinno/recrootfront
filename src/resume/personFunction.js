import React from "react";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import "react-phone-input-2/lib/style.css";
export function personFunction(
  age,
  handleChange,
  handleChangeCreateResumeInput,
  createResume
) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          autoComplete="given-name"
          name="firstName"
          required
          fullWidth
          id="firstName"
          label="First Name"
          autoFocus
          value={createResume.firstName}
          onChange={handleChangeCreateResumeInput("firstName")}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName"
          autoComplete="family-name"
          value={createResume.lastName}
          onChange={handleChangeCreateResumeInput("lastName")}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <FormControl
          sx={{
            width: "100%",
            justifyContent: "center",
          }}
        >
          <InputLabel id="careaarlevelID">Career Level</InputLabel>
          <Select
            labelId="careaarlevelID"
            id="careaarlevel"
            label="Career Level"
            value={createResume.careaarlevel}
            onChange={handleChangeCreateResumeInput("careaarlevel")}
          >
            <MenuItem value="Beginner">Beginner</MenuItem>
            <MenuItem value="Intermediate">Intermediate</MenuItem>
            <MenuItem value="Advanced">Advanced</MenuItem>
            <MenuItem value="Expert">Expert</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="totalWorkExperience"
          label="Total Work Experience(Years)"
          type="number"
          name="totalWorkExperience"
          autoComplete="user-name"
          value={createResume.totalWorkExperience}
          onChange={handleChangeCreateResumeInput("totalWorkExperience")}
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <TextField
          required
          fullWidth
          id="jobPreference"
          label="Jobs Preference"
          name="jobPreference"
          autoComplete="user-name"
          value={createResume.jobPreference}
          onChange={handleChangeCreateResumeInput("jobPreference")}
        />
      </Grid>
    </Grid>
  );
}
