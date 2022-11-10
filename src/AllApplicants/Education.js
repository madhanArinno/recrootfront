import React from "react";
import "../../src/AllApplicants/ApplicantProfile.css";
import Grid from "@mui/material/Grid";
import MediaLinks from "../AllApplicants/MediaLinks";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import moment from "moment";
import { useSelector } from "react-redux";
import { Divider, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function Education() {
  const single = useSelector((data) => data.apply.sinDet);
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} sm={5} md={4}>
        <MediaLinks />
      </Grid>
      <Grid item xs={12} sm={7} md={8}>
        <Item>
          <h1 style={{ paddingLeft: "2%" }}>Education</h1>
          {single.resume &&
            single.resume.education.map((edu, ind) => (
              <Grid key={ind}>
                <Grid container className="row workdetails-info">
                  <Grid item xs={6}>
                    <b>Degree</b>
                  </Grid>
                  <Grid item xs={6}>
                    {edu.degreeName}
                  </Grid>
                </Grid>
                <Grid container className="row workdetails-info">
                  <Grid item xs={6}>
                    <b>Graduation</b>
                  </Grid>
                  <Grid item xs={6}>
                    {edu.graduate}
                  </Grid>
                </Grid>
                <Grid container className="row workdetails-info">
                  <Grid item xs={6}>
                    <b>Institute</b>
                  </Grid>
                  <Grid item xs={6}>
                    {edu.collegeName}
                  </Grid>
                </Grid>
                <Grid container className="row workdetails-info">
                  <Grid item xs={6}>
                    <b>Country</b>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography sx={{ textTransform: "capitalize" }}>
                      {edu.country}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container className="row workdetails-info">
                  <Grid item xs={6}>
                    <b>State</b>
                  </Grid>
                  <Typography sx={{ textTransform: "capitalize" }}>
                    {edu.state}
                  </Typography>
                </Grid>
                <Grid container className="row workdetails-info">
                  <Grid item xs={6}>
                    <b>Duration</b>
                  </Grid>
                  <Grid item xs={6}>
                    {moment(edu.fromDate).format("L")}-
                    {moment(edu.toDate).format("L")}
                  </Grid>
                </Grid>

                <Divider />
              </Grid>
            ))}
        </Item>
      </Grid>
    </Grid>
  );
}
