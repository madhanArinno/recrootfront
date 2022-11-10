import React from "react";
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import { SkillCard } from "./SkillCard";

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
      <SkillCard />
        </> 
        : ''}
    </Card>
  </Grid>;
}


