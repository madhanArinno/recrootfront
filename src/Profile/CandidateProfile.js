import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ProfileBanner from "../profileBanner.png";
import ProfileCard from "./ProfileComponent/ProfileCard";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";

const CandidateProfile = () => {
  const ids = useSelector((state) => state.personal.ids);

  return (
    <Grid
      container
      display={"flex"}
      justifyContent={"center"}
      sx={{ backgroundColor: "#f6f7fc" }}
    >
      <Box
        sx={{
          height: "330px",
          backgroundImage: `url(${ProfileBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <Typography
          variant="h1"
          color="initial"
          sx={{
            marginBottom: "-127px",
            zIndex: 1,
            color: "white",
            fontWeight: 600,
            textAlign: "center",
            mt: "40px",
            fontSize: { lg: "2rem", sm: "2rem", xs: "2rem" },
          }}
        >
          {ids.name}
        </Typography>
      </Box>

      <ProfileCard />
    </Grid>
  );
};

export default CandidateProfile;
