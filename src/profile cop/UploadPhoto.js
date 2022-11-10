import React, { useState } from "react";
import "./upload.css";
import BackupIcon from "@mui/icons-material/Backup";
import Dropzone from "react-dropzone";
import { Typography } from "@mui/material";

export function UploadPhoto(props) {
  const [fileNames, setFileNames] = useState([]);
  const [drag, setDrag] = useState();
  const [pdf, setPdf] = useState();

  const handleDrop = (acceptedFiles) => {
    setFileNames(acceptedFiles.map((file) => file.name));
    setPdf(acceptedFiles[0], pdf, drag, fileNames);
    props.handleChange(acceptedFiles[0]);
  };

  const maxSize = 3072000;
  return (
    <div className="App">
      <form action="#" encType="multipart/formdata">
        <Dropzone
          onDrop={handleDrop}
          accept={{
            "image/jpg": [".png", ".jpg", ".jpeg"],
          }}
          minSize={1024}
          maxSize={maxSize}
        >
          {({
            getRootProps,
            getInputProps,
            isDragActive,
            isDragAccept,
            isDragReject,
            fileRejections,
          }) => {
            const fileRejectionItems = fileRejections.map(
              ({ file, errors }) => {
                return (
                  <p key={file.path}>
                    {errors.map((e) => (
                      <p key={e.code}>
                        {e.code === "file-too-large"
                          ? "* File size is Larger Than 3mb . Try Another File"
                          : `*${e.message}`}
                      </p>
                    ))}
                  </p>
                );
              }
            );
            const additionalClass = isDragAccept
              ? "accept" && setDrag(false)
              : isDragReject
              ? "reject" && setDrag(isDragReject)
              : "";

            return (
              <div
                {...getRootProps({
                  className: `dropzone ${additionalClass}`,
                })}
              >
                <p style={{ color: "#fe7171" }}>{fileRejectionItems} </p>
                <input {...getInputProps()} />
                <span>
                  <BackupIcon sx={{ fontSize: "6em" }} />
                </span>
                <p>
                  Drag and drop or{" "}
                  <span style={{ color: "#4F9AFF" }}>Browse</span>
                </p>
              </div>
            );
          }}
        </Dropzone>

        <Typography variant="p" sx={{ color: "#6A6A6A", mb: "15px" }}>
          Max File size is 3mb (.jpg or .png or.jpeg files only)
        </Typography>
        <div></div>
      </form>
    </div>
  );
}
