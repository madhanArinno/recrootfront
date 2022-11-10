import React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { EDUCATION_LEVELS } from "../../constants";

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
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px", mt: "10px" }}>
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
            {EDUCATION_LEVELS.map((educate) => (
              <MenuItem value={educate}>{educate}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          fullWidth
          id="degree"
          label="Degree"
          name="degreeName"
          value={name.degreeName}
          onChange={props.handleChangesChild}
        />

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

        <TextField
          fullWidth
          id="duaration"
          label="Duration(Years)"
          name="experience"
          type="number"
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

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            width: "100%",
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDatePicker
              label="From"
              inputFormat="MM/dd/yyyy"
              name="fromDate"
              value={name === "" ? value : name.fromDate}
              onChange={handleChange}
              renderInput={(params) => (
                <TextField {...params} sx={{ width: "100%" }} />
              )}
            />

            <MobileDatePicker
              label="To"
              inputFormat="MM/dd/yyyy"
              name="toDate"
              value={name === "" ? value2 : name.toDate}
              onChange={handleChangeto}
              renderInput={(params) => (
                <TextField {...params} sx={{ width: "100%" }} />
              )}
            />
          </LocalizationProvider>
        </Box>
      </Box>
    </>
  );
}
