import React from "react";
import Grid from "@mui/material/Grid";
import { Card, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

export function skills(
  skill,
  setSkill,
  inputSkills,
  addSkillsUI,
  handleSkillsInputChange,
  removeSkilld
) {
  return (
    <Grid container spacing={2} sx={{ marginTop: 2 }}>
      <Card
        sx={{
          width: "650px",
          padding: "15px",
          boxShadow: "4px 4px 60px rgba(193, 200, 209, 0.25);",
          borderRadius: "8px",
          border: "none",
        }}
        variant="outlined"
      >
        <Grid
          item
          xs={12}
          sm={12}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
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
          {skill === false ? (
            <IconButton
              onClick={(e) => {
                setSkill(true);
              }}
            >
              <KeyboardArrowDownIcon />{" "}
            </IconButton>
          ) : (
            <IconButton
              onClick={(e) => {
                setSkill(false);
              }}
            >
              {" "}
              <ExpandLessRoundedIcon />{" "}
            </IconButton>
          )}
        </Grid>
        {skill === true
          ? inputSkills.map((inputSkills) => (
              <React.Fragment key={inputSkills.id}>
                <Grid item xs={12} spacing={2} sm={12} sx={{ marginTop: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      gap: "15px",
                    }}
                    spacing={2}
                  >
                    <TextField
                      autoComplete="given-name"
                      name="skillName"
                      required
                      id="skillName"
                      label="Skill"
                      autoFocus
                      value={inputSkills.skillName}
                      onChange={(event) =>
                        handleSkillsInputChange(inputSkills.id, event)
                      }
                    />
                    <TextField
                      autoComplete="given-name"
                      name="Experience"
                      required
                      id="experience"
                      type="number"
                      label="Experience(Years)"
                      autoFocus
                      value={inputSkills.Experience}
                      onChange={(event) =>
                        handleSkillsInputChange(inputSkills.id, event)
                      }
                    />

                    <FormControl sx={{ minWidth: 150 }}>
                      <InputLabel id="demo-simple-select-label">
                        Competency
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="Compitance"
                        label="compitency"
                        value={inputSkills.Compitance}
                        onChange={(event) =>
                          handleSkillsInputChange(inputSkills.id, event)
                        }
                      >
                        <MenuItem value="beginner">Beginner</MenuItem>
                        <MenuItem value="intermediate">intermediate</MenuItem>
                        <MenuItem value="expert">expert</MenuItem>
                      </Select>
                    </FormControl>
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                      onClick={(event) => removeSkilld(inputSkills.id)}
                    >
                      <ClearRoundedIcon />
                    </IconButton>
                  </Box>
                </Grid>
              </React.Fragment>
            ))
          : ""}
        {skill === true ? (
          <Button
            startIcon={<AddIcon />}
            variant="outlined"
            size="large"
            spacing={2}
            sx={{ marginTop: 2, height: "3.4375em" }}
            onClick={addSkillsUI}
          >
            Add Experience
          </Button>
        ) : (
          ""
        )}
      </Card>
    </Grid>
  );
}
