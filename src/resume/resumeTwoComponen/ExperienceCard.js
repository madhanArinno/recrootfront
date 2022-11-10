import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { styled } from "@mui/material";

const StyledGrid = styled(Grid)({
  margin: "15px 0 15px 0",
});

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
      <StyledGrid>
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
          error={name.role === "" ? true : false}
          helperText={name.role === "" ? "Please Provide Your Role" : ""}
        />
      </StyledGrid>
      <StyledGrid>
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
          error={name.companyName === "" ? true : false}
          helperText={
            name.companyName === "" ? "Please Provide Your Company Name" : ""
          }
        />
      </StyledGrid>
      <StyledGrid>
        <TextField
          autoComplete="given-name"
          name="experience"
          required
          fullWidth
          id="experience"
          label="Experience(Years)"
          autoFocus
          type="number"
          value={name.experience}
          onChange={props.handleChangesChild}
          error={name.experience === "" ? true : false}
          helperText={
            name.experience === "" ? "Please Provide Your Experience" : ""
          }
        />
      </StyledGrid>
      <StyledGrid>
        <TextField
          sx={{ width: "100%" }}
          id="userName"
          label="Location"
          name="location"
          autoComplete="user-name"
          required
          value={name.location}
          onChange={props.handleChangesChild}
          error={name.location === "" ? true : false}
          helperText={
            name.location === "" ? "Please Provide Your Company Location" : ""
          }
        />
      </StyledGrid>
      <StyledGrid style={{ gap: "10px", display: "flex" }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileDatePicker
            label="From Date"
            name=""
            inputFormat="dd/MM/yyyy"
            value={name === "" ? value : name.fromDate}
            maxDate={new Date()}
            onChange={handleChange}
            error={name.fromDate === "" ? true : false}
            helperText={
              name.fromDate === "" ? "Please Provide Your From Date" : ""
            }
            renderInput={(params) => (
              <TextField {...params} sx={{ width: "50%" }} />
            )}
          />
          <MobileDatePicker
            label="To Date"
            name=""
            inputFormat="dd/MM/yyyy"
            maxDate={new Date()}
            shouldDisableMonth={name.fromDate}
            value={name === "" ? value2 : name.toDate}
            onChange={handleChangeto}
            renderInput={(params2) => (
              <TextField {...params2} sx={{ width: "50%" }} />
            )}
          />
        </LocalizationProvider>
      </StyledGrid>
    </>
  );
}
