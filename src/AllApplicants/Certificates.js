import React from "react";
import "../../src/AllApplicants/ApplicantProfile.css";
import Grid from "@mui/material/Grid";
import MediaLinks from "../AllApplicants/MediaLinks";
import Button from "@mui/material/Button";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import download from "downloadjs";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function Certificates() {
  const single = useSelector((data) => data.apply.sinDet);

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} sm={5} md={4}>
        <MediaLinks />
      </Grid>
      <Grid item xs={12} sm={7} md={8}>
        <Item>
          <h1 style={{ paddingLeft: "2%" }}>Certificates</h1>
          {single.resume &&
            single.resume.certificateFileLocation.map((cert) => (
              <Grid>
                <Grid container className="row workdetails-info">
                  <Grid item xs={6}>
                    <b>Title</b>
                  </Grid>
                  <Grid item xs={6}>
                    {cert.title}
                  </Grid>
                </Grid>
                <Grid container className="row workdetails-info">
                  <Grid item xs={6}>
                    <b>Organization</b>
                  </Grid>
                  <Grid item xs={6}>
                    {cert.organization}
                  </Grid>
                </Grid>
                <Grid container className="row workdetails-info">
                  <Grid item xs={6}>
                    <b>Attachments</b>
                  </Grid>
                  <Grid>
                    <div
                      className="certificatefile-style"
                      style={{ gap: "2rem", paddingRight: "4%" }}
                    >
                      <Button
                        className="fileicon"
                        style={{ gap: "2rem" }}
                        onClick={async () => {
                          const res = await fetch(
                            `http://localhost:3000/api/downloadResume?resume=${cert.certificatepath}`
                          );
                          const blob = await res.blob();
                          download(blob, `${cert.certificateName}`);
                        }}
                        endIcon={
                          <FileDownloadOutlinedIcon
                            className="fileicon"
                            style={{ paddingRight: "4%" }}
                          />
                        }
                      >
                        {cert.certificateName}
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            ))}
        </Item>
      </Grid>
    </Grid>
  );
}
