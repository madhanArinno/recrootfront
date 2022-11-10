import React, { useCallback } from "react";
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";
// import Group47 from "../logo/Group47.png";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import { useDropzone } from "react-dropzone";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CoverLetter = (props) => {
  const toastyErrorFunction = (msg) => {
    toast.error(`${msg}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      props.setcoverFileLocation(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );

      // Do something with the files
    },
    [props]
  );

  function nameLengthValidator(file) {
    if (file.size > 5605992) {
      toastyErrorFunction("File is larger than 5 MB");
      return {
        code: "name-too-large",
        message: `Size is larger than 5 MB`,
      };
    }

    if (file.name.substring(file.name.lastIndexOf(".") + 1) !== "pdf") {
      toastyErrorFunction("You can Only Upload Pdf");
      return {
        code: "name-too-large",
        message: `Size is larger than 2 MB`,
      };
    }

    return null;
  }

  ////certificates
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    validator: nameLengthValidator,
    onDrop,
    maxFiles: 6,
  });

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <Grid container spacing={2} sx={{ marginTop: 2 }}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Card
        sx={{
          width: "650px",
          padding: "15px",
          boxShadow: "4px 4px 60px rgba(193, 200, 209, 0.25);",
          borderRadius: "8px",
          border: "none",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
        variant="outlined"
      >
        <Grid
          item
          xs={12}
          sm={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            component="h6"
            color="initial"
            sx={{
              color: "#6A6A6A",
              marginTop: "10px",
              fontWeight: 800,
            }}
          >
            Cover Letters
          </Typography>
          {props.cover === false ? (
            <IconButton
              onClick={(e) => {
                props.setCover(true);
              }}
            >
              <KeyboardArrowDownIcon />{" "}
            </IconButton>
          ) : (
            <IconButton
              onClick={(e) => {
                props.setCover(false);
              }}
            >
              {" "}
              <ExpandLessRoundedIcon />{" "}
            </IconButton>
          )}
        </Grid>

        {props.cover === true ? (
          <>
            <Grid item xs={12} sm={12} sx={{ display: "flex" }}>
              <div class="browse-wrap">
                <section className="container">
                  <div {...getRootProps({ className: "dropzone" })}>
                    <input {...getInputProps()} />
                    <p>
                      Drag 'n' drop some files here, or click to select files
                    </p>
                    <em>
                      (6 files are the maximum number of files you can drop
                      here)
                    </em>
                  </div>
                  <aside>
                    <h4>Accepted files</h4>
                    <ul>{acceptedFileItems}</ul>
                  </aside>
                </section>
              </div>
              <span class="upload-path"></span>
            </Grid>
          </>
        ) : (
          ""
        )}
      </Card>
    </Grid>
  );
};
export default CoverLetter;
