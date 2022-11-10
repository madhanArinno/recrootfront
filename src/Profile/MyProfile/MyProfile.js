import React from "react";
import Grid from "@mui/material/Grid";
import MyProfileBanner from "../../MyProfileBanner.png";

import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";

import { styles } from "../../search/searcjhstyle";
import MyProfileUserCard from "./MyProfileUserCard";
import {
  Box,
  Button,
} from "@mui/material";

const MyProfile = () => {
  return (
    <Grid
      container
      display={"flex"}
      justifyContent={"center"}
      sx={{ backgroundColor: "#f6f7fc" }}
    >
      <Box sx={styles.myProfileStyles}>
        <SearchIcon sx={styles.srch} />
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Keyword or title"
          inputProps={{ "aria-label": "Keyword or title" }}
        />{" "}
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Location"
          inputProps={{ "aria-label": "Location" }}
        />
        <Button variant="contained" sx={styles.btn}>
          Search
        </Button>
      </Box>
      <img
        src={MyProfileBanner}
        alt="logo"
        style={{
          display: "flex",
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
        }}
      />
      <MyProfileUserCard />
    </Grid>
  );
};

export default MyProfile;
