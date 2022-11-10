import React from "react";
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import { PersonalCard } from "./PersonalCard";

export function personalDetails(
  collapse,
  setCollapse,
  age,
  handleChange,
  valueTwo
) {
  return (
    <Grid container spacing={2}>
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
        <Grid item xs={12} sm={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              component="h6"
              color="initial"
              sx={{
                color: "#6A6A6A",
                marginTop: "10px",
                fontWeight: 800,
                marginBottom: "5px",
              }}
            >
              Personal Details
            </Typography>
            {collapse === false ? (
              <IconButton
                onClick={(e) => {
                  setCollapse(true);
                }}
              >
                <KeyboardArrowDownIcon />{" "}
              </IconButton>
            ) : (
              <IconButton
                onClick={(e) => {
                  setCollapse(false);
                }}
              >
                {" "}
                <ExpandLessRoundedIcon />{" "}
              </IconButton>
            )}
          </Box>
        </Grid>
        {collapse === true ? (
          <>
          <PersonalCard age={age} handleChange={handleChange} valueTwo={valueTwo} />
          </>
        ) : (
          ""
        )}
      </Card>
    </Grid>
  );
}

