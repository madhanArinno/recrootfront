import React from "react";
import "../../src/AllApplicants/ApplicantProfile.css";
import Grid from "@mui/material/Grid";
import MediaLinks from "../AllApplicants/MediaLinks";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { Skeleton, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function PersonalDetails() {
  const single = useSelector((data) => data.apply.sinDet);

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} sm={5} md={4}>
        <MediaLinks />
      </Grid>
      <Grid item xs={12} sm={7} md={8}>
        <Item>
          <div>
            <h1>Personal Details</h1>
            <Grid container className="row workdetails-info">
              <Grid item xs={6}>
                <b>Country</b>
              </Grid>
              <Grid item xs={6} sx={{ display: "flex" }}>
                {single.resume === undefined ? (
                  <>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem", width: "70px" }}
                    />
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem", width: "70px" }}
                    />
                  </>
                ) : (
                  single.resume &&
                  single.resume.country.map((sin, index) => (
                    <Typography
                      key={sin.id}
                      sx={{ textTransform: "capitalize" }}
                      variant="body2"
                    >
                      {(index ? "," : " ") + sin.country}
                    </Typography>
                  ))
                )}
              </Grid>
            </Grid>
            <Grid container className="row workdetails-info">
              <Grid item xs={6}>
                <b>Nationality</b>
              </Grid>
              <Grid item xs={6} sx={{ display: "flex" }}>
                {single.resume === undefined ? (
                  <>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem", width: "70px" }}
                    />
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem", width: "70px" }}
                    />
                  </>
                ) : (
                  single.resume &&
                  single.resume.nationality.map((sin, index) => (
                    <Typography
                      sx={{ textTransform: "capitalize" }}
                      key={sin.id}
                      variant="body2"
                    >
                      {(index ? "," : " ") + sin.country}
                    </Typography>
                  ))
                )}
              </Grid>
            </Grid>
            <Grid container className="row workdetails-info">
              <Grid item xs={6}>
                <b>Countries with valid working rights</b>
              </Grid>
              <Grid item xs={6} sx={{ display: "flex" }}>
                {single.resume === undefined ? (
                  <>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem", width: "70px" }}
                    />
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem", width: "70px" }}
                    />
                  </>
                ) : (
                  single.resume &&
                  single.resume.countrieswithworkingRights.map((sin, index) => (
                    <Typography
                      sx={{ textTransform: "capitalize" }}
                      key={sin.id}
                      variant="body2"
                    >
                      {(index ? "," : " ") + sin.country}
                    </Typography>
                  ))
                )}
              </Grid>
            </Grid>
            <Grid container className="row workdetails-info">
              <Grid item xs={6}>
                <b>Times of available to work</b>
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
                  single.resume &&
                  single.resume.availableToWork.days.map((days, index) => (
                    <Typography>{(index ? "," : " ") + days}</Typography>
                  ))
                )}
              </Grid>
            </Grid>
          </div>
        </Item>
      </Grid>
    </Grid>
  );
}
