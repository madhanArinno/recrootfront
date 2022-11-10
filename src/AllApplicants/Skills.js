import React from "react";
import "../../src/AllApplicants/ApplicantProfile.css";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
import MediaLinks from "../AllApplicants/MediaLinks";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function Skills() {
  const single = useSelector((data) => data.apply.sinDet);
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} sm={5} md={4}>
        <MediaLinks />
      </Grid>

      <Grid item xs={12} sm={7} md={8}>
        <Item>
          <h1 style={{ paddingLeft: "2%" }}>Skills</h1>
          {single.resume &&
            single.resume.skills.map((skil, ind) => (
              <Grid key={ind}>
                <Grid container className="row workdetails-info">
                  <Grid item xs={6}>
                    <b>Skill</b>
                  </Grid>
                  <Grid item xs={6}>
                    {skil.skillName}
                  </Grid>
                </Grid>
                <Grid container className="row workdetails-info">
                  <Grid item xs={6}>
                    <b>Experience</b>
                  </Grid>
                  <Grid item xs={6}>
                    {skil.Experience} Years
                  </Grid>
                </Grid>
                <Grid container className="row workdetails-info">
                  <Grid item xs={6}>
                    <b>Competency</b>
                  </Grid>
                  <Grid item xs={6}>
                    {skil.Compitance}
                  </Grid>
                </Grid>
                <Divider style={{ marginRight: "3%", marginLeft: "3%" }} />
              </Grid>
            ))}
        </Item>
      </Grid>
    </Grid>
  );
}
