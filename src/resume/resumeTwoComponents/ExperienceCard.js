import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import moment from "moment";

export function ExperienceCard(props) {
  const { name } = props;

  const [value, setValue] = React.useState(new Date());
  const [value2, setValue2] = React.useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
    props.handleChangesdate(newValue);
  };
  const handleChangeto = (newValue2) => {
    setValue2(newValue2);
    props.handleChangestodate(newValue2);
  };

  return (
    <>
      <Grid item xs={12} sm={6} sx={{ mt: "15px" }}>
        <TextField
          autoComplete="given-name"
          name="role"
          required
          fullWidth
          id="companyRole"
          label="Role"
          autoFocus
          value={name.role}
          onChange={props.handleChangesChild}
        />
      </Grid>
      <Grid item xs={12} sm={6} sx={{ mt: "15px" }}>
        <TextField
          autoComplete="given-name"
          name="companyName"
          required
          fullWidth
          id="cmopanyName"
          label="Company Name"
          autoFocus
          value={name.companyName}
          onChange={props.handleChangesChild}
        />
      </Grid>
      <Grid item xs={12} sm={6} sx={{ mt: "15px" }}>
        <TextField
          autoComplete="given-name"
          name="experience"
          required
          fullWidth
          id="experience"
          label="Experience"
          autoFocus
          value={name.experience}
          onChange={props.handleChangesChild}
        />
      </Grid>
      <Grid item xs={12} sm={12} sx={{ mt: "15px" }}>
        <Stack direction="row" spacing={2}>
          <TextField
            sx={{ width: "300px" }}
            id="userName"
            label="Location"
            name="location"
            autoComplete="user-name"
            value={name.location}
            onChange={props.handleChangesChild}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDatePicker
              label="From Date"
              name=""
              inputFormat="dd/MM/yyyy"
              value={name === "" ? value : name.fromDate}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />{" "}
            -
            <MobileDatePicker
              label="To Date"
              name=""
              inputFormat="dd/MM/yyyy"
              value={name === "" ? value2 : name.toDate}
              onChange={handleChangeto}
              renderInput={(params2) => <TextField {...params2} />}
            />
          </LocalizationProvider>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </Stack>
      </Grid>
    </>
  );
}
