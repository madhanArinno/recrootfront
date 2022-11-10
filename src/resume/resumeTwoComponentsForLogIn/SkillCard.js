import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export function SkillCard(props) {

  
const {name} = props ;

  return (
    <Grid item xs={12} spacing={2} sm={12}>
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' }, gap: '15px'
      }} spacing={2}>
        <TextField
          autoComplete="given-name"
          name="skillName"
          required
          id="skill"
          label="Skill"
          value={name.skillName}
          onChange={props.handleChangesChild}
          autoFocus />
        <TextField
          autoComplete="given-name"
          name="Experience"
          required
          id="experience"
          label="Experience"
          value={name.Experience}
          onChange={props.handleChangesChild}
          autoFocus />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Graduation
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={name.Compitance}
            label="Graduation"   
            name="Compitance"     
            onChange={props.handleChangesChild}
          >
            <MenuItem value={"intermediate"}>Intermediate</MenuItem>
            <MenuItem value={"expert"}>Expert</MenuItem>
            <MenuItem value={"beginner"}>Beginner</MenuItem>
          </Select>
        </FormControl>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <AddCircleOutlineIcon />
        </IconButton>
      </Box>
    </Grid>

  );
}
