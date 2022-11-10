import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { ColorButton } from "./Resume";

export function genderFunction(handleChangeCreateResumeInput, createResume) {
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
      >
        Gender
      </Typography>
      <Stack direction="row" spacing={2} sx={{ marginTop: "20px" }}>
        <ColorButton
          variant="outlined"
          size="large"
          sx={{
            fontWeight: 700,
            fontSize: "16px",
            textTransform: "capitalize",
            fontFamily: "GreycliffCF-Regular",
            letterSpacing: "2px",
            width: 200,
            height: 60,
            color: "#4F9AFF",
          }}
          value="Male"
          onClick={handleChangeCreateResumeInput("gender")}
        >
          Male
        </ColorButton>
        <ColorButton
          variant="outlined"
          size="large"
          sx={{
            fontWeight: 700,
            fontSize: "16px",
            textTransform: "capitalize",
            fontFamily: "GreycliffCF-Regular",
            letterSpacing: "2px",
            width: 200,
            height: 60,
            color: "#4F9AFF",
          }}
          value="FeMale"
          onClick={handleChangeCreateResumeInput("gender")}
        >
          Female
        </ColorButton>
        <ColorButton
          variant="outlined"
          size="large"
          sx={{
            fontWeight: 700,
            fontSize: "16px",
            textTransform: "capitalize",
            fontFamily: "GreycliffCF-Regular",
            letterSpacing: "2px",
            width: 200,
            height: 60,
            color: "#4F9AFF",
          }}
          value="Other"
          onClick={handleChangeCreateResumeInput("gender")}
        >
          Other
        </ColorButton>
      </Stack>
    </Grid>
  );
}
