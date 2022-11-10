import { Button, Card, Dialog, IconButton, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styles } from "./profilestyle";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import { Upload } from "../resume/Upload";
import { useSelector, useDispatch } from "react-redux";
import download from "downloadjs";
import { toast } from "react-toastify";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Add from "@mui/icons-material/Add";
import {
  retrievePersonal,
  updateAndThenGet,
  AddResumeAndThenGet,
  deleteCoverAndGet,
  AddCoverAndThenGet,
} from "../slices/personal";
import { useNavigate } from "react-router-dom";
import { logout } from "../slices/auth";
import { NEUTRAL, WARNING } from "../Theme/Colors";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export function Resumes() {
  let dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [opena, setOpena] = React.useState(false);
  const [openc, setOpenc] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("md");
  const [fileNames, setFileNames] = useState("");
  const [did, setDid] = useState("");
  const [didc, setDidc] = useState("");

  const handleDelete = () => {
    setMaxWidth("md");
    setFullWidth(true);
    dispatch(updateAndThenGet(did))
      .then((res) => {
        if (res.error !== undefined) {
          res.error.message === "Request failed with status code 401" ||
          "Request failed with status code 403"
            ? dispatch(logout()).then(() => {
                navigate("/signin", { state: true });
              })
            : navigate(1);
        } else {
          notifyD("Your Resume Letter Was Deleted");
        }
      })
      .catch((error) => {
        if (
          error.message === "Request failed with status code 401" ||
          "Request failed with status code 403"
        ) {
          dispatch(logout()).then(() => {
            navigate("/signin", { state: true });
          });
        }
      });
  };
  const handleDeleteC = () => {
    dispatch(deleteCoverAndGet(didc))
      .then((res) => {
        if (res.error !== undefined) {
          res.error.message === "Request failed with status code 401" ||
          "Request failed with status code 403"
            ? dispatch(logout()).then(() => {
                navigate("/signin", { state: true });
              })
            : navigate(1);
        } else {
          notifyD("Your Cover Letter Was Deleted");
        }
      })
      .catch((error) => {
        if (
          error.message === "Request failed with status code 401" ||
          "Request failed with status code 403"
        ) {
          dispatch(logout()).then(() => {
            navigate("/signin", { state: true });
          });
        }
      });
  };

  const [pdf, setPdf] = useState();

  const handleChange = (file) => {
    setPdf(file);
    setFileNames(file.name);
  };
  const navigate = useNavigate();

  const send = (pdf) => {
    dispatch(AddResumeAndThenGet(pdf))
      .then((res) => {
        if (res.error !== undefined) {
          res.error.message === "Request failed with status code 401" ||
          "Request failed with status code 403"
            ? dispatch(logout()).then(() => {
                navigate("/signin", { state: true });
              })
            : navigate(1);
        } else {
          notify("Your Resume Was Added");
        }
      })
      .catch((error) => {
        if (
          error.message === "Request failed with status code 401" ||
          "Request failed with status code 403"
        ) {
          navigate("/signin", { state: true });
        }
      });
    setTimeout(() => {
      dispatch(retrievePersonal());
    }, 1500);
  };

  const sendC = (pdf) => {
    dispatch(AddCoverAndThenGet(pdf))
      .then((res) => {
        if (res.error !== undefined) {
          res.error.message === "Request failed with status code 401" ||
          "Request failed with status code 403"
            ? dispatch(logout()).then(() => {
                navigate("/signin", { state: true });
              })
            : navigate(1);
        } else {
          notify("Your Cover Letter Was Added");
        }
      })
      .catch((error) => {
        console.warn(error);
      });
    setTimeout(() => {
      dispatch(retrievePersonal());
    }, 1500);
  };

  const notify = (Add) =>
    toast.success(Add, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const notifyD = (del) =>
    toast.error(del, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleClickOpena = (id) => {
    setDid(id);
    setOpena(true);
  };
  const handleClosea = () => {
    setOpena(false);
  };
  const handleClickOpenc = (id) => {
    setDidc(id);
    setOpenc(true);
  };
  const handleClosec = () => {
    setOpenc(false);
  };

  useEffect(() => {
    dispatch(retrievePersonal());
  }, [dispatch]);

  const datas = useSelector((state) => state.personal.data.resume);
  const data = datas && datas.resumeFileLocation;
  const cover = datas && datas.coverLetterFileLocation;

  return (
    <Box sx={styles.frsttab}>
      <Card variant="outlined">
        <Box>
          <Box sx={styles.editico}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 400,
                fontSize: "19px",
              }}
            >
              Resumes
            </Typography>
            <Box>
              <Tooltip title="Add">
                <IconButton onClick={handleClickOpen}>
                  <Add sx={{ color: NEUTRAL }} />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

          {data && data.length === 0 ? (
            <Typography
              variant="body2"
              sx={{
                m: "15px",
                color: WARNING,
              }}
            >
              No Data For Resumes
            </Typography>
          ) : (
            data &&
            data.map((data) => (
              <Box sx={styles.download}>
                <Box sx={{ width: "150px" }}>
                  <Typography variant="h5" sx={styles.filetext}>
                    {data.resumeName}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <IconButton
                    onClick={() => {
                      handleClickOpena(data._id);
                    }}
                  >
                    <DeleteIcon sx={{ color: "#E7274B" }} />
                  </IconButton>
                  <Dialog
                    open={opena}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClosea}
                    aria-describedby="alert-dialog-slide-description"
                  >
                    <DialogTitle>
                      {"Are You Sure You Want To Delete ?"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button
                        onClick={() => {
                          handleClosea();
                          handleDelete();
                        }}
                      >
                        Yes
                      </Button>
                      <Button onClick={handleClosea}>No</Button>
                    </DialogActions>
                  </Dialog>
                  <IconButton
                    onClick={async () => {
                      const res = await fetch(
                        ` http://localhost:3000/api/downloadResume?resume=${data.resume.replace(
                          /\\/g,
                          "/"
                        )}`
                      );
                      const blob = await res.blob();
                      download(blob, `${data.resumeName}`);
                    }}
                  >
                    <CloudDownloadOutlinedIcon sx={{ color: "#4F9AFF" }} />
                  </IconButton>
                </Box>
              </Box>
            ))
          )}
        </Box>
      </Card>

      <Card variant="outlined">
        <Box>
          <Box sx={styles.editico}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 400,
                fontSize: "19px",
              }}
            >
              Cover Letters
            </Typography>
            <Box>
              <Tooltip title="Add">
                <IconButton onClick={handleClickOpen1}>
                  <Add sx={{ color: NEUTRAL }} />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          <Dialog
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            open={open1}
            onClose={handleClose1}
          >
            <Box sx={{ p: "40px" }}>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                Add Cover Letter
              </Typography>
              <Upload handleChange={handleChange} />
              {pdf !== undefined ? (
                <>
                  {" "}
                  <Typography variant="h6">File Name : </Typography>
                  <Typography variant="h7">{fileNames}</Typography>
                </>
              ) : (
                ""
              )}
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                {pdf !== undefined ? (
                  <Button
                    variant="contained"
                    sx={{ mt: "10px", backgroundColor: "#4fa9ff" }}
                    onClick={() => {
                      sendC(pdf);
                      handleClose1();
                      setPdf(undefined);
                    }}
                  >
                    Save
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    sx={{ mt: "10px", backgroundColor: "#4fa9ff" }}
                    disabled
                    onClick={() => {
                      sendC(pdf);
                      handleClose1();
                      notify("Your Cover Letter Was Added");
                    }}
                  >
                    Save
                  </Button>
                )}
                <Button
                  variant="outlined"
                  sx={{ mt: "10px", ml: "5px", color: "#4fa9ff" }}
                  onClick={() => {
                    handleClose1();
                    setPdf(undefined);
                  }}
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          </Dialog>
          {cover && cover.length === 0 ? (
            <Typography
              variant="body2"
              sx={{
                m: "15px",
                color: WARNING,
              }}
            >
              No Data For Cover Letters
            </Typography>
          ) : (
            cover &&
            cover.map((data) => (
              <Box sx={styles.download}>
                <Typography variant="h5" sx={styles.filetext}>
                  {data.coverName}
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <IconButton
                    onClick={() => {
                      handleClickOpenc(data._id);
                    }}
                  >
                    <DeleteIcon sx={{ color: "#E7274B" }} />
                  </IconButton>
                  <Dialog
                    open={openc}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClosec}
                    aria-describedby="alert-dialog-slide-description"
                  >
                    <DialogTitle>
                      {"Are You Sure You Want To Delete ?"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button
                        onClick={() => {
                          handleClosec();
                          handleDeleteC();
                        }}
                      >
                        Yes
                      </Button>
                      <Button onClick={handleClosec}>No</Button>
                    </DialogActions>
                  </Dialog>
                  <IconButton
                    onClick={async () => {
                      const res = await fetch(
                        ` http://localhost:3000/api/downloadCover?cover=${data.cover.replace(
                          /\\/g,
                          "/"
                        )}`
                      );
                      const blob = await res.blob();
                      download(blob, `${data.coverName}`);
                    }}
                  >
                    <CloudDownloadOutlinedIcon sx={{ color: "#4F9AFF" }} />
                  </IconButton>
                </Box>
              </Box>
            ))
          )}
        </Box>
      </Card>
      {/* <Card variant='outlined'>
        <Box>
          <Box sx={styles.editico}>
            <Typography variant='h6' sx={styles.toptext}> Cover Letter</Typography>
            <Box>
              <IconButton><EditRoundedIcon sx={{ color: '#4F9AFF' }} /></IconButton>
              <IconButton><DeleteIcon sx={{ color: '#E7274B' }} /></IconButton>
            </Box>
          </Box>
          <Box sx={styles.download}>
            <Typography variant='h5' sx={styles.filetext}> CoverLetters.pdf</Typography>
            <IconButton><CloudDownloadOutlinedIcon sx={{ color: '#4F9AFF' }} /></IconButton>
          </Box>
        </Box>

      </Card> */}

      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <Box sx={{ p: "40px" }}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Add Resumes
          </Typography>
          <Upload handleChange={handleChange} />

          {pdf !== undefined ? (
            <>
              {" "}
              <Typography variant="h6">File Name : </Typography>
              <Typography variant="h7">{fileNames}</Typography>
            </>
          ) : (
            ""
          )}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {pdf !== undefined ? (
              <Button
                variant="contained"
                sx={{ mt: "10px", backgroundColor: "#4fa9ff" }}
                onClick={() => {
                  send(pdf);
                  handleClose();
                  setPdf(undefined);
                }}
              >
                Save
              </Button>
            ) : (
              <Button
                variant="contained"
                sx={{ mt: "10px", backgroundColor: "#4fa9ff" }}
                disabled
                onClick={() => {
                  send(pdf);
                  handleClose();
                  notify("Your Resume Was Added");
                }}
              >
                Save
              </Button>
            )}
            <Button
              variant="outlined"
              sx={{ mt: "10px", ml: "5px", color: "#4fa9ff" }}
              onClick={() => {
                handleClose();
                setPdf(undefined);
              }}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
}
