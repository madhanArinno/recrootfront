import { Grid, Toolbar } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import { styles } from "./profilestyle";
import { Profilemain } from "./Profilemain";
import Navbar from "../navbar/Navbar";

function Profile() {
  return (
    <div>
      <Navbar />
      <Toolbar />

      <Box sx={{ mt: 5 }}>
        <Box sx={styles.bgmain}>
          <Grid container>
            <Grid container>
              <Grid item lg={4} xs={12}></Grid>
              <Grid
                item
                lg={8}
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              ></Grid>
            </Grid>
          </Grid>
        </Box>
        <Profilemain />
      </Box>
    </div>
  );
}

export default Profile;
