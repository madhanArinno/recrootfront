import React from "react";
import "../../src/AllApplicants/ApplicantProfile.css";
import Grid from "@mui/material/Grid";
import {Divider, Link } from "@mui/material";
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


export default function Projects() {
  const single = useSelector((data) =>data.apply.sinDet)
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} sm={5} md={4}>
        <MediaLinks />
      </Grid>
      <Grid item xs={12} sm={7} md={8}>
        <Item>
          <h1 style={{ paddingLeft: "2%" }}>Projects</h1>
       {single.resume && single.resume.projects.map((proj,ind)=>(
       <Grid key={ind}>
            <Grid container className="row workdetails-info">
              <Grid item xs={4}>
                <b>Project link</b>
              </Grid>
              <Grid item xs={8}>
                <p style={{width:'185px'}}>
                <Link to={proj.portafolioLink} className="workdetails-info-1">
                  {proj.portafolioLink}
                </Link>
                  </p> 
              </Grid>
            </Grid>
            <Grid container className="row workdetails-info">
              <Grid item xs={4}>
                <b>Project name</b>
              </Grid>
              <Grid item xs={8}>
               {proj.ProjectName}
              </Grid>
            </Grid>
            <Grid container className="row workdetails-info">
              <Grid item xs={4}>
                <b>Organization</b>
              </Grid>
              <Grid item xs={8}>
               {proj.Organization}
              </Grid>
            </Grid>
            <Grid container className="row workdetails-info">
              <Grid item xs={4}>
                <b>Description</b>
              </Grid>
              <Grid item xs={8} >
               <p style={{width:'185px'}}>{proj.Description}</p> 
              </Grid>
            </Grid>
            <Divider />
          </Grid>
        
       )) 
           }
        </Item>
      </Grid>
    </Grid>
  );
}
