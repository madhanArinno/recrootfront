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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';

export function educationFunction(education, setEducation, age, handleChange, valueTwo) {
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
          Education
        </Typography>
        {(education === false) ?
          <IconButton onClick={(e) => { setEducation(true); }}><KeyboardArrowDownIcon /> </IconButton> :
          <IconButton onClick={(e) => { setEducation(false); }}> <ExpandLessRoundedIcon /> </IconButton>}
      </Grid>
      {(education === true) ? <>
        <Grid item xs={12} sm={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Degree
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={12}>
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' }, gap: '15px'
          }} spacing={2}>
            <TextField
              fullWidth
              id="years"
              label="Years"
              name="user"
              autoComplete="user-name" />
            <TextField
              fullWidth
              id="institute"
              label="Institute"
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
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <AddCircleOutlineIcon />
            </IconButton>
          </Box>
        </Grid></> : ''}
    </Card>
  </Grid>;
}
