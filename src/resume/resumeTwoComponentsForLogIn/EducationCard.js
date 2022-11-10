import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export function EducationCard(props) {
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
      <Grid item xs={6} sm={6}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Graduation</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={name.graduate}
            label="Graduation"
            name="graduate"
            onChange={props.handleChangesChild}
          >
            <MenuItem value={"bachelor"}>Bachelor</MenuItem>
            <MenuItem value={"master"}>Master</MenuItem>
            <MenuItem value={"phd"}>Phd</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6} sm={6}>
        <TextField
          fullWidth
          id="degree"
          label="Degree"
          name="degreeName"
          value={name.degreeName}
          onChange={props.handleChangesChild}
        />
      </Grid>
      <Grid item xs={6} sm={6}>
        <TextField
          fullWidth
          id="country"
          label="Country"
          name="country"
          value={name.country}
          onChange={props.handleChangesChild}
        />
        <TextField
          fullWidth
          id="state"
          label="State"
          name="state"
          value={name.state}
          onChange={props.handleChangesChild}
        />
      </Grid>

      <Grid item xs={12} sm={12}>
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
            id="duaration"
            label="Duration"
            name="experience"
            value={name.experience}
            autoComplete="user-name"
            onChange={props.handleChangesChild}
          />
          <TextField
            fullWidth
            id="institute"
            label="Institute"
            name="collegeName"
            value={name.collegeName}
            autoComplete="user-name"
            onChange={props.handleChangesChild}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDatePicker
              label="From"
              inputFormat="MM/dd/yyyy"
              name="fromDate"
              value={name === "" ? value : name.fromDate}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
            <Typography variant="h3" color="initial">
              -
            </Typography>
            <MobileDatePicker
              label="To"
              inputFormat="MM/dd/yyyy"
              name="toDate"
              value={name === "" ? value2 : name.toDate}
              onChange={handleChangeto}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </Box>
      </Grid>
    </>
  );
}
