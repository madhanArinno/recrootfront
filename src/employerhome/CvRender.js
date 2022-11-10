import * as React from "react";
import { useState } from "react";
import { Button, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import GetAppIcon from "@mui/icons-material/GetApp";
import { styles } from "./employerhstyle";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
// import recroot from './logo/recroot.pdf';
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import "./cv.css";
import { useSelector } from "react-redux";
import download from "downloadjs";
// import { Logger } from "logging-library";
// import FileViewer from "react-file-viewer";
// import DocViewer ,{ DocViewerRenderers } from "react-doc-viewer";
// import { CustomErrorComponent } from "custom-error";

export function CvRender() {
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
    <>
      <Box>
        <Box sx={styles.rendhead}>
          <Typography variant="h5" sx={styles.cvstxt}>
            CV
          </Typography>

          <Button
            onClick={async () => {
              const res = await fetch(
                `http://localhost:3000/api/downloadResume?resume=${resume.resume.replace(
                  /\\/g,
                  "/"
                )}`
              );
              const blob = await res.blob();
              download(blob, `${resume.resumeName}`);
            }}
            variant="contained"
            sx={styles.downbtn}
          >
            Download <GetAppIcon />
          </Button>
        </Box>
        <Box sx={styles.cvrender}>
          <p>
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
                    matches === true ? 300 : 600 && match === true ? 500 : 600
                  }
                  pageNumber={pageNumber}
                />
              </Document>
            </header>
          </center>
        </Box>
      </Box>
    </>
  );
}
