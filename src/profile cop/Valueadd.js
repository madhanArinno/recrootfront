/* eslint-disable no-mixed-operators */
import { Button, Card, Dialog, Divider, IconButton, Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styles } from "./profilestyle";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import LinkIcon from "@mui/icons-material/Link";
import InfoIcon from "@mui/icons-material/Info";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProjectsCard } from "../resume/resumeTwoComponen/ProjectsCard";
import { TrainingCard } from "../resume/resumeTwoComponen/TrainingCard";
import { SocialCard } from "../resume/resumeTwoComponen/SocialCard";
import download from "downloadjs";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
  AddCertificateAndThenGet,
  addEditCertificates,
  AddProAndThenGet,
  AddSocialAndThenGet,
  AddTrainAndThenGet,
  deleteCertifiAndGet,
  deleteProjectAndGet,
  deleteTrainAndGet,
  EditProjectAndGet,
  EditTrainAndGet,
  retrieveGetSinCertificate,
  retrieveGetSinProject,
  retrieveGetSinTrain,
  retrievePersonal,
} from "../slices/personal";
import { CertificateFunction } from "../resume/resumeTwoComponen/certificateFunction";
import Add from "@mui/icons-material/Add";
import { NEUTRAL, WARNING } from "../Theme/Colors";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export function Valueadd() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrievePersonal());
  }, [dispatch]);

  const users = useSelector((state) => state.personal.data.resume);
  const project = useSelector((state) => state.personal.project);
  const train = useSelector((state) => state.personal.training);
  const certOne = useSelector((state) => state.personal.certone);
  const trainings = users && users.traning;
  const projects = users && users.projects;
  const socials = users && users.socialMediaLink;
  const certif = users && users.certificateFileLocation;

  const [datas, setDatas] = useState({
    Description: "",
    Organization: "",
    ProjectName: "",
    experience: "",
    fromDate: "",
    toDate: "",
    portafolioLink: "",
    id: "",
  });

  const [datasT, setDatasT] = useState({
    title: "",
    instituete: "",
    fromDate: "",
    toDate: "",
    id: "",
  });

  const [datasS, setDatasS] = useState({
    fb: "",
    twitter: "",
    linkin: "",
    utube: "",
  });

  const [didp, setDidp] = useState("");
  const [didt, setDidt] = useState("");
  const [didc, setDidc] = useState("");
  const [open, setOpen] = React.useState(false);
  const [opena, setOpena] = React.useState(false);
  const [opent, setOpent] = React.useState(false);
  const [openc, setOpenc] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);
  const [open7, setOpen7] = React.useState(false);

  useEffect(() => {
    if (project !== null && project !== undefined) {
      setDatas({
        portafolioLink: project === null ? null : project.portafolioLink,
        Description:
          project.Description === null && project.Description === undefined
            ? null
            : project.Description,
        Organization: project === null ? null : project.Organization,
        experience: project === null ? null : project.experience,
        id: project === null ? null : project._id,
        fromDate: project === null ? null : project.fromDate,
        toDate: project === null ? null : project.toDate,
        ProjectName: project === null ? null : project.ProjectName,
      });
    }
  }, [project]);

  useEffect(() => {
    if (train !== null && train !== undefined) {
      setDatasT({
        title: train === null ? null : train.title,
        instituete:
          train.instituete === null && train.instituete === undefined
            ? null
            : train.instituete,
        id: train === null ? null : train._id,
        fromDate: train === null ? null : train.fromDate,
        toDate: train === null ? null : train.toDate,
      });
    }
  }, [train]);

  useEffect(() => {
    if (socials !== null && socials !== undefined) {
      setDatasS({
        fb: socials && socials.fb,
        twitter: socials && socials.twitter,
        linkin: socials && socials.linkin,
        utube: socials && socials.utube,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickOpen = () => {
    setTimeout(() => {
      setOpen(true);
    }, 200);
  };
  const handleClickOpen1 = () => {
    setTimeout(() => {
      setOpen1(true);
    }, 200);
  };
  const handleClickOpen2 = () => {
    setTimeout(() => {
      setOpen2(true);
    }, 200);
  };
  const handleClickOpen3 = () => {
    setTimeout(() => {
      setOpen3(true);
    }, 200);
  };
  const handleClickOpen4 = () => {
    setTimeout(() => {
      setOpen4(true);
    }, 200);
  };

  const handleClickOpen6 = () => {
    setInputCertificate({
      title: "",
      organization: "",
      certificate: "",
    });
    setTimeout(() => {
      setOpen6(true);
    }, 200);
  };

  const handleClickOpen7 = () => {
    setTimeout(() => {
      setOpen7(true);
    }, 300);
  };

  const handleClickOpena = (id) => {
    setDidp(id);
    setOpena(true);
  };
  const handleClickOpenT = (id) => {
    setDidt(id);
    setOpent(true);
  };

  const handleClickOpenC = (id) => {
    setDidc(id);
    setOpenc(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };
  const handleClose4 = () => {
    setOpen4(false);
  };

  const handleClose6 = () => {
    setOpen6(false);
  };
  const handleClose7 = () => {
    setOpen7(false);
  };

  const handleClosea = () => {
    setOpena(false);
  };

  const handleCloseT = () => {
    setOpent(false);
  };

  const handleCloseC = () => {
    setOpenc(false);
  };

  const handleChangesChild = (e) => {
    let { name, value } = e.target;
    setDatas({
      ...datas,
      [name]: value,
    });
  };

  const handleChangesChildT = (e) => {
    let { name, value } = e.target;
    setDatasT({
      ...datasT,
      [name]: value,
    });
  };

  const handleChangesChildS = (e) => {
    let { name, value } = e.target;
    setDatasS({
      ...datasS,
      [name]: value,
    });
  };

  const handleChangesdate = (newValue) => {
    setDatas({
      ...datas,
      fromDate: moment(newValue).format("L"),
    });
  };
  const handleChangesdateT = (newValue) => {
    setDatasT({
      ...datasT,
      fromDate: moment(newValue).format("L"),
    });
  };

  const handleChangestodate = (newValue2) => {
    setDatas({
      ...datas,
      toDate: moment(newValue2).format("L"),
    });
  };

  const handleChangestodateT = (newValue2) => {
    setDatasT({
      ...datasT,
      toDate: moment(newValue2).format("L"),
    });
  };

  const handleUpdate = (datas, id, e) => {
    e.preventDefault();
    dispatch(EditProjectAndGet(datas, id));
  };

  const handleUpdateT = (datas, id, e) => {
    e.preventDefault();
    dispatch(EditTrainAndGet(datas, id));
  };

  const handleGetSingle = (id) => {
    dispatch(retrieveGetSinProject(id));
  };

  const handleGetSingleT = (id) => {
    dispatch(retrieveGetSinTrain(id));
  };
  const handleGetSingleCer = (id) => {
    dispatch(retrieveGetSinCertificate(id));
  };

  const handleAdd = (datas, e) => {
    e.preventDefault();
    dispatch(AddProAndThenGet(datas));
  };

  const handleAddT = (datasT, e) => {
    e.preventDefault();
    dispatch(AddTrainAndThenGet(datasT));
  };

  const handleAddS = (datasS, e) => {
    e.preventDefault();
    dispatch(AddSocialAndThenGet(datasS));
  };

  const handleDelete = () => {
    dispatch(deleteProjectAndGet(didp));
  };

  const handleDeleteT = () => {
    dispatch(deleteTrainAndGet(didt));
  };

  const handleDeleteC = () => {
    dispatch(deleteCertifiAndGet(didc));
  };

  const [inputCertificate, setInputCertificate] = useState({
    title: certOne && certOne.title,
    organization: certOne && certOne.title,
    certificate: certOne && certOne.certificate,
  });

  useEffect(() => {
    setInputCertificate({
      title: certOne && certOne.title,
      organization: certOne && certOne.organization,
      certificate: null,
      certificateName: certOne && certOne.certificateName,
      certificatepath: certOne && certOne.certificatepath,
      id: certOne && certOne._id,
    });
  }, [certOne]);

  const handleChange = (e) => {
    if (e.target.files !== null) {
      setInputCertificate({
        ...inputCertificate,
        certificate: e.target.files[0],
      });
    } else {
      let { name, value } = e.target;
      setInputCertificate({ ...inputCertificate, [name]: value });
    }
  };

  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("md");

  const send = () => {
    dispatch(AddCertificateAndThenGet(inputCertificate));
    setTimeout(() => {
      dispatch(retrievePersonal());
    }, 1500);
    setFullWidth(true);
    setMaxWidth("md");
  };

  const sendEdit = (e) => {
    e.preventDefault();
    dispatch(addEditCertificates(inputCertificate));
    setTimeout(() => {
      dispatch(retrievePersonal());
    }, 1500);
    setFullWidth(true);
    notify("Your Certification Was Updated");
    setMaxWidth("md");
  };

  const notify = (suc) =>
    toast.success(suc, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifyS = () =>
    toast.success("Your Social Media Link  Was Updated", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notify2 = () =>
    toast.success("Your Work Project  Was Added", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const notify3 = (del) =>
    toast.error(del, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifyT = () =>
    toast.success("Your Training  Was Updated", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const notify2T = () =>
    toast.success("Your Training  Was Added", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notify3T = () =>
    toast.error("Your Training  Was Deleted ", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <Box>
      <Card variant="outlined">
        <Box sx={styles.personal}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              fontSize: "19px",
            }}
          >
            Projects
          </Typography>
          <Box>
            <IconButton
              onClick={() => {
                handleClickOpen1();
                setDatas("");
              }}
            >
              <Add sx={{ color: NEUTRAL }} />
            </IconButton>
          </Box>
        </Box>

        {projects.length === 0 ? (
          <Typography
            variant="body2"
            sx={{
              m: "15px",
              color: WARNING,
            }}
          >
            No Data For Experience
          </Typography>
        ) : (
          projects.map((data) => (
            <Card>
              <Box>
                <Box sx={{ mt: "20px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      ml: "10px",
                    }}
                  >
                    <Typography variant="h5" sx={styles.rolewrk}>
                      {data.ProjectName}
                    </Typography>
                    <Box>
                      <IconButton
                        onClick={() => {
                          handleClickOpen();
                          handleGetSingle(data._id);
                        }}
                      >
                        <EditRoundedIcon sx={{ color: "#4F9AFF" }} />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          handleClickOpena(data._id);
                        }}
                      >
                        <DeleteIcon sx={{ color: "#E7274B" }} />
                      </IconButton>
                    </Box>
                  </Box>
                  <Divider />
                  <Typography
                    variant="p"
                    sx={{ color: "#4F9AFF", ml: "14px", mt: "20px" }}
                  >
                    {data.Organization}
                  </Typography>
                </Box>
                <Box sx={{ mt: "20px", ml: "14px" }}>
                  <Box sx={styles.linkpro}>
                    <LinkIcon sx={{ color: "#6A6A6A" }} />
                    <Link sx={styles.prolink} variant="h6">
                      {data.portafolioLink}
                    </Link>
                  </Box>
                </Box>
                <Box sx={styles.linkpro}>
                  <InfoIcon sx={{ color: "#6A6A6A", ml: "14px" }} />
                  <Typography variant="p" sx={{ color: "#6A6A6A" }}>
                    {data.Description}
                  </Typography>
                </Box>
              </Box>
              <Dialog
                open={opena}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClosea}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle>{"Are You Sure You Want To Delete ?"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={() => {
                      handleClosea();
                      handleDelete();
                      notify3("Your Project  Was Deleted");
                    }}
                  >
                    Yes
                  </Button>
                  <Button onClick={handleClosea}>No</Button>
                </DialogActions>
              </Dialog>

              <Dialog fullWidth={fullWidth} open={open} onClose={handleClose}>
                <Box sx={{ p: "20px" }}>
                  <Typography variant="h5" sx={{ textAlign: "center" }}>
                    Edit Project
                  </Typography>
                  <form
                    onSubmit={(e) => {
                      handleUpdate(datas, datas.id, e);
                      handleClose();
                      notify("Your Project  Was Updated");
                    }}
                  >
                    <ProjectsCard
                      name={
                        datas === null && datas === undefined ? null : datas
                      }
                      handleChangesChild={handleChangesChild}
                      handleChangesdate={handleChangesdate}
                      handleChangestodate={handleChangestodate}
                    />
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Button
                        variant="outlined"
                        sx={{ mt: "10px", mr: "5px", color: "#4fa9ff" }}
                        onClick={() => {
                          handleClose();
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="contained"
                        type="submit"
                        sx={{ mt: "10px", backgroundColor: "#4fa9ff" }}
                      >
                        save
                      </Button>
                    </Box>
                  </form>
                </Box>
              </Dialog>
            </Card>
          ))
        )}
      </Card>
      <Box>
        <Dialog fullWidth={fullWidth} open={open1} onClose={handleClose1}>
          <Box sx={{ p: "20px" }}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Add Projects
            </Typography>
            <form
              onSubmit={(e) => {
                handleAdd(datas, e);
                handleClose1();
                notify2();
              }}
            >
              <ProjectsCard
                name={""}
                handleChangesChild={handleChangesChild}
                handleChangesdate={handleChangesdate}
                handleChangestodate={handleChangestodate}
              />
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="outlined"
                  sx={{ mt: "10px", mr: "5px", color: "#4fa9ff" }}
                  onClick={() => {
                    handleClose1();
                  }}
                >
                  Cancel
                </Button>
                {datas !== "" ? (
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#4fa9ff", mt: 1 }}
                    type="submit"
                  >
                    Add
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    disabled
                    sx={{ backgroundColor: "#4fa9ff", mt: 1 }}
                  >
                    Add
                  </Button>
                )}
              </Box>
            </form>
          </Box>
        </Dialog>
      </Box>

      <Card sx={{ mt: "10px" }} variant="outlined">
        <Box sx={styles.personal}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              fontSize: "19px",
            }}
          >
            Training
          </Typography>
          <Box>
            <IconButton
              onClick={() => {
                handleClickOpen3();
                setDatasT("");
              }}
            >
              <Add sx={{ color: NEUTRAL }} />
            </IconButton>
          </Box>
        </Box>
        {trainings.length === 0 ? (
          <Typography
            variant="body2"
            sx={{
              m: "15px",
              color: WARNING,
            }}
          >
            No Data For Training
          </Typography>
        ) : (
          trainings &&
          trainings.map((data) => (
            <Card sx={{ mt: "15px" }}>
              <Box>
                <Box sx={{ mt: "10px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      ml: "10px",
                    }}
                  >
                    <Typography variant="h5" sx={styles.rolewrk}>
                      {data.title}
                    </Typography>
                    <Box>
                      <IconButton
                        onClick={() => {
                          handleClickOpen2();
                          handleGetSingleT(data._id);
                        }}
                      >
                        <EditRoundedIcon sx={{ color: "#4F9AFF" }} />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          handleClickOpenT(data._id);
                        }}
                      >
                        <DeleteIcon sx={{ color: "#E7274B" }} />
                      </IconButton>
                    </Box>
                  </Box>
                  <Divider />

                  <Dialog
                    open={opent}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleCloseT}
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
                          handleCloseT();
                          handleDeleteT();
                          notify3T();
                        }}
                      >
                        Yes
                      </Button>
                      <Button onClick={handleCloseT}>No</Button>
                    </DialogActions>
                  </Dialog>

                  <Dialog
                    fullWidth={fullWidth}
                    open={open2}
                    onClose={handleClose2}
                  >
                    <Box sx={{ p: "20px" }}>
                      <Typography variant="h5" sx={{ textAlign: "center" }}>
                        Edit Training
                      </Typography>
                      <form
                        onSubmit={(e) => {
                          handleUpdateT(datasT, datasT.id, e);
                          handleClose2();
                          notifyT();
                        }}
                      >
                        <TrainingCard
                          name={
                            datasT === null && datasT === undefined
                              ? null
                              : datasT
                          }
                          handleChangesChild={handleChangesChildT}
                          handleChangesdate={handleChangesdateT}
                          handleChangestodate={handleChangestodateT}
                        />
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            mt: "10px",
                          }}
                        >
                          <Button
                            variant="outlined"
                            sx={{ mt: "10px", mr: "5px", color: "#4fa9ff" }}
                            onClick={() => {
                              handleClose2();
                            }}
                          >
                            Cancel
                          </Button>
                          <Button
                            variant="contained"
                            sx={{ mt: "10px", backgroundColor: "#4fa9ff" }}
                            type="submit"
                          >
                            save
                          </Button>
                        </Box>
                      </form>
                    </Box>
                  </Dialog>
                  <Typography variant="p" sx={{ color: "#4F9AFF" }}>
                    {data.instituete}
                  </Typography>
                  <Box sx={{ pb: "44px" }}>
                    <Box sx={styles.locwork}>
                      <CalendarMonthOutlinedIcon sx={{ fontSize: "1.3em" }} />
                      <Typography variant="p">
                        {moment(data.fromDate).format("L")}-
                        {moment(data.toDate).format("L")}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Card>
          ))
        )}
      </Card>

      <Dialog fullWidth={fullWidth} open={open3} onClose={handleClose3}>
        <Box sx={{ p: "20px" }}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Add Training
          </Typography>
          <form
            onSubmit={(e) => {
              handleAddT(datasT, e);
              handleClose3();
              notify2T();
              setDatasT("");
            }}
          >
            <TrainingCard
              name={""}
              handleChangesChild={handleChangesChildT}
              handleChangesdate={handleChangesdateT}
              handleChangestodate={handleChangestodateT}
            />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="outlined"
                sx={{ mt: "10px", mr: "5px", color: "#4fa9ff" }}
                onClick={() => {
                  handleClose3();
                  setDatasT("");
                }}
              >
                Cancel
              </Button>
              {datasT !== "" ? (
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#4fa9ff", mt: 1 }}
                  type="submit"
                >
                  Add
                </Button>
              ) : (
                <Button
                  variant="contained"
                  disabled
                  sx={{ backgroundColor: "#4fa9ff", mt: 1 }}
                >
                  Add
                </Button>
              )}
            </Box>
          </form>
        </Box>
      </Dialog>

      <Card variant="outlined" sx={{ mt: "10px" }}>
        <Box>
          <Box sx={styles.personal}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 400,
                fontSize: "19px",
              }}
            >
              Certification
            </Typography>
            <Box>
              <IconButton onClick={handleClickOpen6}>
                <Add sx={{ color: NEUTRAL }} />
              </IconButton>
            </Box>
          </Box>
          <Dialog fullWidth={fullWidth} open={open6} onClose={handleClose6}>
            <Box sx={{ p: "20px" }}>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                Add Certicates
              </Typography>
              <CertificateFunction
                inputCertificate={inputCertificate}
                handleChange={handleChange}
              />
              <Box
                sx={{ display: "flex", justifyContent: "center", mt: "10px" }}
              >
                <Button
                  variant="outlined"
                  sx={{ mt: "10px", mr: "5px", color: "#4fa9ff" }}
                  onClick={() => {
                    handleClose6();
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  sx={{ mt: "10px", backgroundColor: "#4fa9ff" }}
                  onClick={() => {
                    send();
                    handleClose6();
                    notify("Your Certificate  Was Added");
                  }}
                >
                  Save
                </Button>
              </Box>
            </Box>
          </Dialog>
          {certif.length === 0 ? (
            <Typography
              variant="body2"
              sx={{
                m: "15px",
                color: WARNING,
              }}
            >
              No Data For Certificates
            </Typography>
          ) : (
            certif.map((data) => (
              <>
                <Box sx={{ display: "flex" }}>
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: "18px",
                        fontWeight: "800",

                        lineHeight: "30px",
                        ml: "20px",
                      }}
                    >
                      {data.title}
                    </Typography>

                    <Typography
                      variant="p"
                      sx={{ color: "#4F9AFF", ml: "20px" }}
                    >
                      {data.organization}
                    </Typography>
                  </Box>
                  <Box sx={{ ml: "auto" }}>
                    <IconButton
                      onClick={() => {
                        handleClickOpen7();
                        handleGetSingleCer(data._id);
                      }}
                    >
                      <EditRoundedIcon sx={{ color: "#4F9AFF" }} />
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        handleClickOpenC(data._id);
                      }}
                    >
                      <DeleteIcon sx={{ color: "#E7274B" }} />
                    </IconButton>
                  </Box>
                </Box>

                <Dialog
                  fullWidth={fullWidth}
                  maxWidth={maxWidth}
                  open={open7}
                  onClose={handleClose7}
                >
                  <Box sx={{ p: "40px" }}>
                    <Typography variant="h5" sx={{ textAlign: "center" }}>
                      Edit Certification
                    </Typography>
                    <form
                      onSubmit={(e) => {
                        sendEdit(e);
                        handleClose7();
                      }}
                    >
                      <CertificateFunction
                        inputCertificate={inputCertificate}
                        handleChange={handleChange}
                      />
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Button
                          variant="contained"
                          sx={{ mt: "10px", backgroundColor: "#4fa9ff" }}
                          type="submit"
                        >
                          save
                        </Button>
                        <Button
                          variant="outlined"
                          sx={{ mt: "10px", ml: "5px", color: "#4fa9ff" }}
                          onClick={() => {
                            handleClose7();
                          }}
                        >
                          Cancel
                        </Button>
                      </Box>
                    </form>
                  </Box>
                </Dialog>

                <Box sx={styles.download}>
                  <Box sx={{ width: "150px", wordWrap: "break-word" }}>
                    <Typography variant="h5" sx={styles.filetext}>
                      {data.certificateName}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Dialog
                      open={openc}
                      TransitionComponent={Transition}
                      keepMounted
                      onClose={handleCloseC}
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
                            handleCloseC();
                            handleDeleteC();
                            notify3("Your Certificate Was Deleted");
                          }}
                        >
                          Yes
                        </Button>
                        <Button onClick={handleCloseC}>No</Button>
                      </DialogActions>
                    </Dialog>
                    <IconButton
                      onClick={async () => {
                        const res = await fetch(
                          ` http://localhost:3000/api/downloadCertificate?certificate=${data.certificatepath.replace(
                            /\\/g,
                            "/"
                          )}`
                        );
                        const blob = await res.blob();
                        download(blob, `${data.certificateName}`);
                      }}
                    >
                      <CloudDownloadOutlinedIcon sx={{ color: "#4F9AFF" }} />
                    </IconButton>
                  </Box>
                </Box>
                <Divider />
              </>
            ))
          )}
        </Box>
      </Card>

      <Card variant="outlined" sx={{ mt: "10px" }}>
        <Box sx={styles.personal}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              fontSize: "19px",
            }}
          >
            Social Media Links
          </Typography>
          <Box>
            {/* <IconButton onClick={handleClickOpen5}> */}
            <IconButton
              onClick={() => {
                handleClickOpen4();
              }}
            >
              <EditRoundedIcon sx={{ color: "#FFFF" }} />
            </IconButton>
            {/* </IconButton> */}
          </Box>
        </Box>
        <Card>
          <Box sx={{ p: "20px" }}>
            <Box sx={{ display: "flex" }}>
              <FacebookIcon sx={{ color: "#1877F2" }} />{" "}
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                {" "}
                :{" "}
                {(socials && socials.fb === "") ||
                (socials && socials.fb === undefined) ? (
                  <span
                    style={{
                      fontWeight: 500,
                      fontSize: "16px",
                      fontFamily: "arial",
                      color: "#fe7171",
                    }}
                  >
                    No Data Provided
                  </span>
                ) : (
                  socials && socials.fb
                )}
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <TwitterIcon sx={{ color: "#5CB6F2", fontSize: "1.5rem" }} />
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                {" "}
                :{" "}
                {(socials && socials.twitter === "") ||
                (socials && socials.twitter === undefined) ? (
                  <span
                    style={{
                      fontWeight: 500,
                      fontSize: "16px",
                      fontFamily: "arial",
                      color: "#fe7171",
                    }}
                  >
                    No Data Provided
                  </span>
                ) : (
                  socials && socials.twitter
                )}
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <LinkedInIcon sx={{ color: "#0065ED", fontSize: "1.5rem" }} />
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                {" "}
                :{" "}
                {(socials && socials.linkin === "") ||
                (socials && socials.linkin === undefined) ? (
                  <span
                    style={{
                      fontWeight: 500,
                      fontSize: "16px",
                      fontFamily: "arial",
                      color: "#fe7171",
                    }}
                  >
                    No Data Provided
                  </span>
                ) : (
                  socials && socials.linkin
                )}
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <YouTubeIcon sx={{ color: "#E7274B", fontSize: "1.5rem" }} />
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                {" "}
                :{" "}
                {(socials && socials.utube === "") ||
                (socials && socials.utube === undefined) ? (
                  <span
                    style={{
                      fontWeight: 500,
                      fontSize: "16px",
                      fontFamily: "arial",
                      color: "#fe7171",
                    }}
                  >
                    No Data Provided
                  </span>
                ) : (
                  socials && socials.utube
                )}
              </Typography>
            </Box>
          </Box>
        </Card>
        {/* {socials.length === 0 ? (
          <Typography
            variant="body2"
            sx={{
              m: "15px",
              color: WARNING,
            }}
          >
            No Data For Social Media Links
          </Typography>
        ) : (
          socials.map((data) => (
            <Card>
              <Box>
                <Box sx={{ mt: "20px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      ml: "10px",
                    }}
                  >
                    <Typography variant="h5" sx={styles.rolewrk}>
                      {data.title}
                    </Typography>
                    <Box>
                      <IconButton
                        onClick={() => {
                          handleClickOpen4();
                          handleGetSingleS(data._id);
                        }}
                      >
                        <EditRoundedIcon sx={{ color: "#4F9AFF" }} />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          handleClickOpenS(data._id);
                        }}
                      >
                        <DeleteIcon sx={{ color: "#E7274B" }} />
                      </IconButton>
                    </Box>
                  </Box>
                  <Divider />

                  <Box sx={{ mt: "20px" }}>
                    <Box sx={styles.linkpro}>
                      <LinkIcon sx={{ color: "#6A6A6A" }} />
                      <Link sx={styles.prolink} variant="h6">
                        {data.socialMediaLink}
                      </Link>
                    </Box>
                  </Box>
                  <Dialog
                    open={opens}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleCloseS}
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
                          handleCloseS();
                          handleDeleteS();
                          notify3S();
                        }}
                      >
                        Yes
                      </Button>
                      <Button onClick={handleCloseS}>No</Button>
                    </DialogActions>
                  </Dialog>

                  <Dialog open={open4} onClose={handleClose4}>
                    <Box sx={{ p: "20px" }}>
                      <Typography variant="h5" sx={{ textAlign: "center" }}>
                        Edit Social Media Links
                      </Typography>
                      <form
                        onSubmit={(e) => {
                          handleUpdateS(datasS, datasS.id, e);
                          handleClose4();
                          notifyS();
                        }}
                      >
                        <SocialCard
                          name={
                            datasS === null && datasS === undefined
                              ? null
                              : datasS
                          }
                          handleChangesChild={handleChangesChildS}
                        />
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            mt: "10px",
                          }}
                        >
                          <Button
                            variant="outlined"
                            sx={{ mt: "10px", mr: "5px", color: "#4fa9ff" }}
                            onClick={() => {
                              handleClose4();
                            }}
                          >
                            Cancel
                          </Button>
                          <Button
                            variant="contained"
                            sx={{ mt: "10px", backgroundColor: "#4fa9ff" }}
                            tybe="submit"
                          >
                            save
                          </Button>
                        </Box>
                      </form>
                    </Box>
                  </Dialog>
                </Box>
              </Box>
            </Card>
          ))
        )} */}
        <Dialog
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          open={open4}
          onClose={handleClose4}
        >
          <Box sx={{ p: "40px" }}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Edit Social Media Links
            </Typography>
            <form>
              <SocialCard
                name={datasS}
                handleChangesChild={handleChangesChildS}
              />
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  sx={{ mt: "10px", backgroundColor: "#4fa9ff" }}
                  onClick={(e) => {
                    handleAddS(datasS, e);
                    handleClose4();
                    notifyS();
                  }}
                >
                  save
                </Button>
                <Button
                  variant="outlined"
                  sx={{ mt: "10px", ml: "5px", color: "#4fa9ff" }}
                  onClick={() => {
                    handleClose4();
                  }}
                >
                  Cancel
                </Button>
              </Box>
            </form>
          </Box>
        </Dialog>
      </Card>
    </Box>
  );
}
