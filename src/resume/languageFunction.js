import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import OutlinedInput from "@mui/material/OutlinedInput";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { MenuProps, names } from "./Resume";

export function languageFunction(
  personName,
  handleChangeChip,
  theme,
  handleChangeCreateResumeInput,
  createResume
) {
  return (
    <Grid sx={{ marginTop: "15px" }}>
      <Typography
        variant="span"
        component="span"
        color="initial"
        sx={{
          color: "#6A6A6A",
          marginBottom: "10px",
          fontWeight: 800,
          marginTop: "15px",
        }}
        display="inline"
      >
        Languages
      </Typography>
      <Stack sx={{ marginTop: 2 }}>
        <FormControl>
          <InputLabel id="LanguageId">Language</InputLabel>
          <Select
            labelId="LanguageId"
            id="Language"
            multiple
            value={personName}
            onChange={handleChangeChip("language")}
            label="Language"
            input={<OutlinedInput id="select-multiple-chip" label="Language" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>

      <Typography
        variant="span"
        component="span"
        color="initial"
        sx={{
          marginBottom: "10px",
          display: "grid",
          fontWeight: 700,
          fontSize: 24,
          fontFamily: "GreycliffCF-Regular",
          marginTop: "57px",
        }}
      >
        CV Settings
      </Typography>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="Public"
          value={createResume.cvSetting}
          id="salary"
          name="cvSetting"
          onChange={handleChangeCreateResumeInput("cvSetting")}
        >
          <FormControlLabel value="Public" control={<Radio />} label="Public" />
          <Typography variant="body2" color="#6A6A6A">
            Your CV will be public to everyone
          </Typography>
          <FormControlLabel
            value="Private"
            sx={{ marginTop: "10px" }}
            control={<Radio />}
            label="Private"
          />
          <Typography variant="body2" color="#6A6A6A">
            Your CV will not be visible to anyone except you. However, you will
            be able to attach it when applying for a job.
          </Typography>
        </RadioGroup>
      </FormControl>
    </Grid>
  );
}
