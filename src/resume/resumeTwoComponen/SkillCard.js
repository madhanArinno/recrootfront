import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export function SkillCard(props) {
  const { name } = props;

  return (
    <Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          justifyContent: "center",
        }}
        spacing={2}
      >
        <TextField
          autoComplete="given-name"
          name="skillName"
          required
          id="skill"
          label="Skill"
          value={name.skillName}
          onChange={props.handleChangesChild}
          error={name.skillName === "" ? true : false}
          helperText={
            name.skillName === "" ? "Please Provide Your Skill Name" : ""
          }
          autoFocus
        />
        <TextField
          autoComplete="given-name"
          name="Experience"
          required
          id="experience"
          label="Experience(Years)"
          type="number"
          value={name.Experience}
          onChange={props.handleChangesChild}
          error={name.Experience === "" ? true : false}
          helperText={
            name.Experience === "" ? "Please Provide Your Experience" : ""
          }
          autoFocus
        />
        <FormControl sx={{ minWidth: { sm: 300, xs: 200 } }}>
          <InputLabel id="demo-simple-select-label">Competency</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={name.Compitance}
            label="Competency"
            name="Compitance"
            required
            onChange={props.handleChangesChild}
            error={name.Compitance === "" ? true : false}
            helperText={
              name.Compitance === "" ? "Please Provide Your Competency" : ""
            }
          >
            <MenuItem value={"intermediate"}>Intermediate</MenuItem>
            <MenuItem value={"expert"}>Expert</MenuItem>
            <MenuItem value={"beginner"}>Beginner</MenuItem>
          </Select>
        </FormControl>
        {/* <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <AddCircleOutlineIcon />
        </IconButton> */}
      </Box>
    </Grid>
  );
}
