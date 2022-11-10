import React from "react";
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';

export function skills(skill, setSkill) {
  return <Grid container spacing={2} sx={{ marginTop: 2 }}>
    <Card sx={{
      width: '650px',
      padding: '15px',
      boxShadow: '4px 4px 60px rgba(193, 200, 209, 0.25);',
      borderRadius: '8px',
      border: 'none',
    }} variant="outlined">
      <Grid item xs={12} sm={12} sx={{ display: 'flex', justifyContent: 'space-between', }}>
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
          Skills
        </Typography>
        {(skill === false) ?
          <IconButton onClick={(e) => { setSkill(true); }}><KeyboardArrowDownIcon /> </IconButton> :
          <IconButton onClick={(e) => { setSkill(false); }}> <ExpandLessRoundedIcon /> </IconButton>}
      </Grid>
      {(skill === true) ? <>
        <Grid item xs={12} spacing={2} sm={12}>
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' }, gap: '15px'
          }} spacing={2}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              id="skill"
              label="Skill"
              autoFocus />
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              id="experience"
              label="Experience"
              autoFocus />
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              id="competency"
              label="Competency"
              autoFocus />
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
