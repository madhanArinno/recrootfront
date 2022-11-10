import React from "react";
import "../../src/AllApplicants/ApplicantProfile.css";
import Grid from "@mui/material/Grid";
import MediaLinks from "../AllApplicants/MediaLinks";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import moment from "moment";
import { Divider } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function Training() {
  const single = useSelector((data) => data.apply.sinDet);

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} sm={5} md={4}>
        <MediaLinks />
      </Grid>
      <Grid item xs={12} sm={7} md={8}>
        <Item>
          <h1 style={{ paddingLeft: "2%" }}>Trainings</h1>
          {single.resume &&
            single.resume.traning.map((trai) => (
              <>
                <Grid>
                  <Grid container className="row workdetails-info">
                    <Grid item xs={6}>
                      <b>Title</b>
                    </Grid>
                    <Grid item xs={6}>
                      {trai.title}
                    </Grid>
                  </Grid>
                  <Grid container className="row workdetails-info">
                    <Grid item xs={6}>
                      <b>Institution</b>
                    </Grid>
                    <Grid item xs={6}>
                      {trai.instituete}
                    </Grid>
                  </Grid>
                  <Grid container className="row workdetails-info">
                    <Grid item xs={6}>
                      <b>Duration</b>
                    </Grid>
                    <Grid item xs={6}>
                      {moment(trai.fromDate).format("L")}-
                      {moment(trai.toDate).format("L")}
                    </Grid>
                  </Grid>
                </Grid>
                <Divider />
              </>
            ))}
        </Item>
      </Grid>
    </Grid>
  );
}
