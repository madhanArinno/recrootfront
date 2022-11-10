import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Box } from "@mui/material";

export function ProjectsCard(props) {
  const { name } = props;

  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px", mt: "10px" }}>
        <Grid item xs={12} sm={5}>
          <TextField
            fullWidth
            id="linkPortafolio"
            label="Projects/Portfolio link"
            name="portafolioLink"
            autoComplete="user-name"
            required
            value={name.portafolioLink}
            onChange={props.handleChangesChild}
            error={name.portafolioLink === "" ? true : false}
            helperText={
              name.portafolioLink === ""
                ? "Please Provide Your Port Folio Link"
                : ""
            }
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            fullWidth
            id="projectName"
            label="Project Name"
            name="ProjectName"
            autoComplete="user-name"
            required
            value={name.ProjectName}
            onChange={props.handleChangesChild}
            error={name.ProjectName === "" ? true : false}
            helperText={
              name.ProjectName === "" ? "Please Provide Your Project Name" : ""
            }
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            fullWidth
            id="organizatoin"
            label="Organization"
            name="Organization"
            autoComplete="user-name"
            required
            value={name.Organization}
            onChange={props.handleChangesChild}
            error={name.Organization === "" ? true : false}
            helperText={
              name.Organization === "" ? "Please Provide Organization" : ""
            }
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Stack direction="row" spacing={2}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              {/* <MobileDatePicker
              label="From"
              inputFormat="MM/dd/yyyy"
              value={name === '' ? value : name.fromDate}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />} />
            <Typography variant="h3" color="initial">
              -
            </Typography>
            <MobileDatePicker
              label="To"
              inputFormat="MM/dd/yyyy"
              value={name === '' ? value2 : name.toDate}
              onChange={handleChangeto}
              renderInput={(params) => <TextField {...params} />} /> */}
            </LocalizationProvider>
          </Stack>
        </Grid>
        <Grid item xs={11} sm={11} sx={{ display: "flex" }}>
          <TextField
            fullWidth
            id="description"
            label="Description"
            name="Description"
            autoComplete="user-name"
            value={name.Description}
            onChange={props.handleChangesChild}
            multiline
            required
            error={name.Description === "" ? true : false}
            helperText={
              name.Description === "" ? "Please Provide Description" : ""
            }
            rows={2}
            maxRows={5}
          />
        </Grid>
      </Box>
    </>
  );
}
