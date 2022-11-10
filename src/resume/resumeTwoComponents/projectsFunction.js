import React from "react";
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';

export function projectsFunction(projects, setProjects, valueTwo, handleChange) {
  return <Grid container spacing={2} sx={{ marginTop: 2 }}>
    <Card sx={{
      width: '650px',
      padding: '15px',
      boxShadow: '4px 4px 60px rgba(193, 200, 209, 0.25);',
      borderRadius: '8px',
      border: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }} variant="outlined">

      <Grid item xs={12} sm={12} sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
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
          Projects
        </Typography>
        {(projects === false) ?
          <IconButton onClick={(e) => { setProjects(true); }}><KeyboardArrowDownIcon /> </IconButton> :
          <IconButton onClick={(e) => { setProjects(false); }}> <ExpandLessRoundedIcon /> </IconButton>}
      </Grid>

      {(projects === true) ? <>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="linkPortafolio"
            label="Projects/Portfolio link"
            name="user"
            autoComplete="user-name" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="projectName"
            label="Project Name"
            name="user"
            autoComplete="user-name" />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Stack direction="row" spacing={2}>
            <TextField
              fullWidth
              id="organizatoin"
              label="Organization"
              name="user"
              autoComplete="user-name" />

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MobileDatePicker
                label="From"
                inputFormat="MM/dd/yyyy"
                value={valueTwo}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />} />
              <Typography variant="h3" color="initial">
                -
              </Typography>
              <MobileDatePicker
                label="To"
                inputFormat="MM/dd/yyyy"
                value={valueTwo}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />} />
            </LocalizationProvider>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} sx={{ display: "flex" }}>
          <TextField
            fullWidth
            id="description"
            label="Description"
            name="user"
            autoComplete="user-name"
            multiline
            rows={2}
            maxRows={5} />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </Grid></> : ""}
    </Card>
  </Grid>;
}
