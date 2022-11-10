import React, { useState } from "react";
import "../../src/AllApplicants/ApplicantProfile.css";
import Grid from "@mui/material/Grid";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import MediaLinks from "../AllApplicants/MediaLinks";
import Button from "@mui/material/Button";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import download from "downloadjs";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import { useSelector } from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function Resumes(data) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet) {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet);
  }

  function changePageBack() {
    changePage(-1);
  }

  function changePageNext() {
    changePage(+1);
  }

  const matches = useMediaQuery("(max-width:600px)");
  const match = useMediaQuery("(max-width:1050px)");

  const resume = useSelector((state) => state.apply.resume);
  const recroot = `http://localhost:3000/api/downloadResume?resume=${resume.resume}`;

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} sm={12} md={4}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
            <MediaLinks />
          </div>
          <div
            style={{
              marginTop: "10%",
            }}
          >
            <Item>
              <div>
                <h1 style={{ marginLeft: "3%" }}>Resume</h1>
              </div>
              <Grid>
                <div className="resumeicon" style={{ gap: "3rem" }}>
                  <FileCopyOutlinedIcon className="fileicon-color" />
                  <Button
                    className="fileicon"
                    style={{ gap: "2rem" }}
                    endIcon={<FileDownloadOutlinedIcon className="fileicon" />}
                    onClick={async () => {
                      const res = await fetch(recroot);
                      const blob = await res.blob();
                      download(blob, `${resume.resumeName}`);
                    }}
                  >
                    {resume.resumeName}
                  </Button>
                </div>
                {/* ))} */}
              </Grid>
            </Item>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={8}>
        <Item>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <p>
              {" "}
              Page {pageNumber} of {numPages}
            </p>
            {pageNumber > 1 && (
              <IconButton onClick={changePageBack}>
                <SkipPreviousRoundedIcon
                  sx={{ color: "#4fa9ff", fontSize: "2rem" }}
                />
              </IconButton>
            )}
            {pageNumber < numPages && (
              <IconButton onClick={changePageNext}>
                <SkipNextRoundedIcon
                  sx={{ color: "#4fa9ff", fontSize: "2rem" }}
                />
              </IconButton>
            )}
            <center>
              <header className="App-header">
                <Document file={recroot} onLoadSuccess={onDocumentLoadSuccess}>
                  <Page
                    width={
                      matches === true ? 300 : 500 && match === true ? 350 : 500
                    }
                    pageNumber={pageNumber}
                  />
                </Document>
              </header>
            </center>
          </Box>
        </Item>
      </Grid>
    </Grid>
  );
}
