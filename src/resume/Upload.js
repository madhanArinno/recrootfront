import React, { useState } from "react";
import "./upload.css";
import BackupIcon from "@mui/icons-material/Backup";
import Dropzone from "react-dropzone";
import { Typography } from "@mui/material";

export function Upload(props) {
  const [fileNames, setFileNames] = useState([]);
  const [drag, setDrag] = useState();
  const [pdf, setPdf] = useState();

  const handleDrop = (acceptedFiles) => {
    setFileNames(acceptedFiles.map((file) => file.name));
    setPdf(acceptedFiles[0], pdf, fileNames);
    props.handleChange(acceptedFiles[0]);
  };

  return (
    <div className="App">
      <form action="#" encType="multipart/formdata">
        <Dropzone
          onDrop={handleDrop}
          accept={{ "application/pdf": [".pdf", ".docx", ".doc"] }}
          minSize={1024}
          maxSize={5072000}
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
                          ? "* File size is Larger Than 5mb . Try Another File"
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
                <Typography variant="h7" style={{ color: "red" }}>
                  {fileRejectionItems}{" "}
                </Typography>
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
          Max File size is 5mb (.pdf or .doc files only)
        </Typography>
        <div>
          {drag !== true ? (
            <>
              <ul>
                {/* {fileNames.map((fileName) => (
            <li key={fileName}>{fileName}</li>
          ))} */}
              </ul>{" "}
            </>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
}
