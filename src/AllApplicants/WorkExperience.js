import React from "react";
import "../../src/AllApplicants/ApplicantProfile.css";
import Grid from "@mui/material/Grid";
import MediaLinks from "../AllApplicants/MediaLinks";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { Divider, Skeleton } from "@mui/material";
import moment from "moment";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function WorkExperience() {
  const single = useSelector((data) => data.apply.sinDet);

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} sm={5} md={4}>
        <MediaLinks />
      </Grid>
      <Grid item xs={12} sm={7} md={8}>
        <Item>
          <h1 style={{ paddingLeft: "2%" }}>Work Experience</h1>
          {single.resume &&
            single.resume.workExperience.map((com, ind) => (
              <Grid key={ind}>
                <Grid container className="row workdetails-info">
                  <Grid item xs={6}>
                    <b>Company name</b>
                  </Grid>
                  <Grid item xs={6}>
                    {single.resume === undefined ? (
                      <>
                        <Skeleton
                          variant="text"
                          sx={{ fontSize: "1rem", width: "70px" }}
                        />
                      </>
                    ) : (
                      com.companyName
                    )}
                  </Grid>
                </Grid>
                <Grid container className="row workdetails-info">
                  <Grid item xs={6}>
                    <b>Position</b>
                  </Grid>
                  <Grid item xs={6}>
                    {single.resume === undefined ? (
                      <>
                        <Skeleton
                          variant="text"
                          sx={{ fontSize: "1rem", width: "70px" }}
                        />
                      </>
                    ) : (
                      com.role
                    )}
                  </Grid>
                </Grid>
                <Grid container className="row workdetails-info">
                  <Grid item xs={6}>
                    <b>Experience</b>
                  </Grid>
                  <Grid item xs={6}>
                    {single.resume === undefined ? (
                      <>
                        <Skeleton
                          variant="text"
                          sx={{ fontSize: "1rem", width: "70px" }}
                        />
                      </>
                    ) : (
                      `${com.experience} Years`
                    )}
                  </Grid>
                </Grid>
                <Grid container className="row workdetails-info">
                  <Grid item xs={6}>
                    <b>Duration</b>
                  </Grid>
                  <Grid item xs={6}>
                    {moment(com.fromDate).format("L")}-
                    {moment(com.toDate).format("L")}
                  </Grid>
                </Grid>
                <Grid container className="row workdetails-info">
                  <Grid item xs={6}>
                    <b>Location</b>
                  </Grid>
                  <Grid item xs={6}>
                    {single.resume === undefined ? (
                      <>
                        <Skeleton
                          variant="text"
                          sx={{ fontSize: "1rem", width: "70px" }}
                        />
                      </>
                    ) : (
                      com.location
                    )}
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
