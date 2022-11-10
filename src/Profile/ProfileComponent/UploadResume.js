import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Dialog, FormGroup, Stack, Switch, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { Upload } from "../../resume/Upload";
import { toast } from "react-toastify";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useDispatch, useSelector } from "react-redux";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import {
  AddCoverAndThenGet,
  AddResumeAndThenGet,
  clearCover,
  clearCoversin,
  deleteCoverAndGet,
  retrieveGetSinCover,
  retrieveGetSinResume,
  updateAndThenGet,
} from "../../slices/personal";
import download from "downloadjs";
import { Link } from "react-router-dom";
import { PRIMARY, DANGER } from "../../Theme/Colors";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const UploadResume = () => {
  const resumeSin = useSelector((state) => state.personal.resume);
  const CoverSin = useSelector((state) => state.personal.cover);
  const show = useSelector((state) => state.personal.show);

  const [resume, setResume] = React.useState({
    resume: resumeSin && resumeSin.resumeName,
    id: resumeSin && resumeSin._id,
  });
  const [covers, setCovers] = React.useState({
    cover: CoverSin && CoverSin.coverName,
    id: CoverSin && CoverSin._id,
  });

  const handleChange = (e) => {
    setResume({ id: e.target.value });
    dispatch(retrieveGetSinResume(e.target.value));
  };
  const handleChangeC = (e) => {
    setCovers({ id: e.target.value });
    dispatch(retrieveGetSinCover(e.target.value));
  };
  const [opena, setOpena] = React.useState(false);
  const [openc, setOpenc] = React.useState(false);

  const handleClickOpena = () => {
    setOpena(true);
  };
  const handleClosea = () => {
    setOpena(false);
  };
  const handleClickOpenc = () => {
    setOpenc(true);
  };
  const handleClosec = () => {
    setOpenc(false);
  };

  let dispatch = useDispatch();

  const [pdf, setPdf] = useState();
  const [pdfC, setPdfC] = useState();

  const [fileNames, setFileNames] = useState("");
  const [fileNamec, setFileNamec] = useState("");

  const handleChangeR = (file) => {
    setPdf(file);
    setFileNames(file.name);
  };
  const handleChangeCov = (file) => {
    setPdfC(file);
    setFileNamec(file.name);
  };

  const send = (pdf) => {
    dispatch(AddResumeAndThenGet(pdf)).then(setFileNames(""), setPdf());
  };

  const sendC = (pdfC) => {
    dispatch(AddCoverAndThenGet(pdfC));
    setFileNamec("");
    setPdfC();
  };
  const handleDelete = (id) => {
    dispatch(updateAndThenGet(id));
  };
  const handleDeleteC = (id) => {
    dispatch(deleteCoverAndGet(id));
  };
  const [cover, setCover] = useState(true);

  const handleCover = () => {
    setCover(!cover);
    dispatch(clearCover(!show));
    dispatch(clearCoversin({}));
    setCovers({
      cover: "",
      id: "",
    });
  };

  const resumes = useSelector((state) => state.personal.data.resume);

  const resumeLoc = resumes && resumes.resumeFileLocation;
  const coverLoc = resumes && resumes.coverLetterFileLocation;

  const notify = (Add) =>
    toast.success(Add, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifyD = (del) =>
    toast.error(del, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <>
      <Grid item xs={12} md={12} sx={{ margin: 2 }}>
        <Typography
          variant="h5"
          color="initial"
          sx={{ fontWeight: 700, fontSize: "24px", mb: "10px" }}
        >
          Upload Your Resume
        </Typography>
        <Box>
          <Upload handleChange={handleChangeR} />
        </Box>

        {pdf !== undefined ? (
          <>
            {" "}
            <Typography variant="h6">File Name : </Typography>
            <h7>{fileNames}</h7>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#4fa9ff", ml: "20px" }}
              onClick={() => {
                send(pdf);
                notify("Resume Was Added");
              }}
            >
              Save
            </Button>{" "}
          </>
        ) : (
          ""
        )}
      </Grid>
      <Grid item xs={12} md={12} sx={{ margin: 2 }} display={"flex"} fullWidth>
        <Typography
          variant="body1"
          color="initial"
          sx={{ fontWeight: 550, fontSize: "18px", flex: 1, p: "0px" }}
        >
          Select Resume
        </Typography>

        <Button
          variant="body1"
          color="initial"
          sx={{ fontSize: "14px", marginRight: "5px", color: DANGER }}
          onClick={() => {
            handleClickOpena();
          }}
        >
          Delete
        </Button>
        <Dialog
          open={opena}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClosea}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Are You Sure Want To Delete ?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                handleClosea();
                handleDelete(resumeSin._id);
                notifyD("Your Resume Was Deleted");
              }}
            >
              Yes
            </Button>
            <Button onClick={handleClosea}>No</Button>
          </DialogActions>
        </Dialog>
        <Button
          variant="body1"
          color="initial"
          sx={{ fontSize: "14px", float: "right", color: PRIMARY }}
          onClick={async () => {
            const res = await fetch(
              ` http://localhost:3000/api/downloadResume?resume=${resumeSin.resume.replace(
                /\\/g,
                "/"
              )}`
            );
            const blob = await res.blob();
            download(blob, `${resumeSin.resumeName}`);
          }}
        >
          Download
        </Button>
      </Grid>
      <Grid item xs={12} md={12} sx={{ margin: 2 }}>
        <Box>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select Resume</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="resume"
              value={resume.id}
              label="Select Resume"
              onChange={(e) => {
                handleChange(e);
              }}
            >
              {resumeLoc &&
                resumeLoc.map((resume) => (
                  <MenuItem key={resume.resumeName} value={resume._id}>
                    {resume.resumeName}{" "}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Box>
      </Grid>
      {resume.id !== undefined ? (
        <Grid
          item
          xs={12}
          md={12}
          sx={{ margin: 2 }}
          display={"flex"}
          fullWidth
          spacing={2}
        >
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            sx={{ paddingTop: 0, paddingLeft: 0, color: "green" }}
          >
            <CheckCircleOutlineIcon />
          </IconButton>
          <Typography variant="body1" color="initial" sx={{ color: "green" }}>
            Resume Attached
          </Typography>
        </Grid>
      ) : (
        ""
      )}
      <Grid
        sx={{
          display: "flex",
          marginBottom: 5,
          marginLeft: 2,
        }}
      >
        <Link to="/resumeSecond">
          <Button
            variant="outlined"
            size="large"
            sx={{ fontWeight: 700, width: "auto", height: 60 }}
          >
            Build your Resume
          </Button>
        </Link>
      </Grid>

      <Grid
        item
        xs={12}
        md={12}
        sx={{ margin: 2 }}
        display={"flex"}
        fullWidth
        spacing={2}
      >
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={!show} />}
            onClick={() => {
              handleCover();
            }}
            label="Don't Attach the cover letter"
          />
        </FormGroup>
      </Grid>

      {show === true ? (
        <div>
          <Grid item xs={12} md={12} sx={{ margin: 2 }}>
            <Stack direction="row ">
              <Typography
                variant="h5"
                color="initial"
                sx={{ fontWeight: 700, fontSize: "24px", mb: "10px" }}
              >
                Upload Your Cover Letter
              </Typography>
            </Stack>
            <Box>
              <Upload handleChange={handleChangeCov} />
            </Box>
            {pdfC !== undefined ? (
              <>
                <Typography variant="h6">File Name : </Typography>
                <h7>{fileNamec}</h7>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#4fa9ff", ml: "30px" }}
                  onClick={() => {
                    sendC(pdfC);
                    notify("Cover Letter Was Added");
                  }}
                >
                  Save
                </Button>
              </>
            ) : (
              ""
            )}
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            sx={{ margin: 2 }}
            display={"flex"}
            fullWidth
            spacing={2}
          >
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontWeight: 550, fontSize: "18px", flex: 1 }}
            >
              Select Cover Letter
            </Typography>

            <Button
              variant="body1"
              color="initial"
              sx={{ fontSize: "14px", marginRight: "5px", color: DANGER }}
              onClick={() => {
                handleClickOpenc();
              }}
            >
              Delete
            </Button>
            <Dialog
              open={openc}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClosec}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle>{"Are You Sure You Want To Delete ?"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={() => {
                    handleClosec();
                    handleDeleteC(CoverSin._id);
                    notifyD("Your Cover Letter Was Deleted");
                  }}
                >
                  Yes
                </Button>
                <Button onClick={handleClosec}>No</Button>
              </DialogActions>
            </Dialog>
            <Button
              variant="body1"
              color="initial"
              sx={{ fontSize: "14px", float: "right", color: PRIMARY }}
              onClick={async () => {
                const res = await fetch(
                  ` http://localhost:3000/api/downloadCover?cover=${CoverSin.cover.replace(
                    /\\/g,
                    "/"
                  )}`
                );
                const blob = await res.blob();
                download(blob, `${CoverSin.coverName}`);
              }}
            >
              Download
            </Button>
          </Grid>
          <Grid item xs={12} md={12} sx={{ margin: 2 }}>
            <Box>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select Cover Letter
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="covers"
                  value={covers.id}
                  label="Select Cover Letter"
                  onChange={(e) => {
                    handleChangeC(e);
                  }}
                >
                  {coverLoc &&
                    coverLoc.map((cover) => (
                      <MenuItem key={cover.coverName} value={cover._id}>
                        {cover.coverName}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>
          {covers._id !== undefined ? (
            <Grid
              item
              xs={12}
              md={12}
              sx={{ margin: 2 }}
              display={"flex"}
              fullWidth
              spacing={2}
            >
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                sx={{ paddingTop: 0, paddingLeft: 0, color: "green" }}
              >
                <CheckCircleOutlineIcon />
              </IconButton>
              <Typography
                variant="body1"
                color="initial"
                sx={{ color: "green" }}
              >
                Cover Letter Attached
              </Typography>
            </Grid>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default UploadResume;
