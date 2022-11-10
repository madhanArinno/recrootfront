import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { storePhoto } from "../slices/companyslice";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/system";
import BackupIcon from "@mui/icons-material/Backup";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
  justifyContent: "center",
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #cacaca",
  marginBottom: 8,
  marginRight: 8,
  width: 150,
  height: 150,
  padding: 4,
  boxSizing: "border-box",
  justifyContent: "center",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};
const drop = {
  textAlign: "center",
  padding: "50px",
  border: "2px dashed #4F9AFF",
  backgroundColor: "#EFF6FF",
  color: "#afafaf",
  borderRadius: "8px",
  margin: "20px 20px 20px 20px",
};

export default function Photos(props) {
  let dispatch = useDispatch();
  const photo = useSelector((state) => state.company.photos);
  const [files, setFiles] = useState(photo === undefined ? [] : photo);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles([...files, ...acceptedFiles]);
      dispatch(storePhoto([...files, ...acceptedFiles]));
    },
  });

  const handleRemove = (name) => {
    let values = [...files].filter((fiel) => fiel.name !== name);
    setFiles(values);
    dispatch(storePhoto(values));
  };

  const thumbs =
    photo &&
    photo.map((file) => (
      <Box sx={{ display: "flex", alignItems: "flex-start", ml: "20px" }}>
        <div style={thumb} key={file.name}>
          <div style={thumbInner}>
            <img
              src={
                file === File
                  ? URL.createObjectURL(file)
                  : `http://localhost:3000/api/getCompanyPhotos?compPhotos=${photo.photo}`
              }
              style={img}
              alt=""
            />
          </div>
        </div>
        <IconButton
          sx={{ position: "relative", left: "-40px" }}
          onClick={() => {
            handleRemove(file.name);
          }}
        >
          <DeleteIcon sx={{ color: "red" }} />
        </IconButton>
      </Box>
    ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px",
          marginTop: "40px",
        }}
      >
        <h1 style={{ fontSize: "28px", fontWeight: "600" }}>Company Profile</h1>
        <h4 style={{ fontSize: "20px", fontWeight: "400" }}>
          Upload Maximum 5 photos/videos
        </h4>
      </div>
      <section className="container">
        <div {...getRootProps({ className: "dropzone" })} style={drop}>
          <input {...getInputProps()} />
          <span>
            <BackupIcon sx={{ fontSize: "6em", color: "#4fa9ff" }} />
          </span>
          <p style={{ color: "#4F9AFF" }}>
            Drag and drop or <span style={{ color: "#4F9AFF" }}>Browse</span>
          </p>
        </div>
        <aside style={thumbsContainer}>{thumbs}</aside>
      </section>
    </div>
  );
}
