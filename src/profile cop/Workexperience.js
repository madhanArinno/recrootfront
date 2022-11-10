import {
  Button,
  Card,
  Dialog,
  Divider,
  IconButton,
  Stack,
  Tooltip,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styles } from "./profilestyle";
import DeleteIcon from "@mui/icons-material/Delete";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { ExperienceCard } from "../resume/resumeTwoComponen/ExperienceCard";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AddExperinceAndThenGet,
  deleteExperAndGet,
  EditExperinceAndGet,
  retrieveGetSinExperience,
  retrievePersonal,
} from "../slices/personal";
import { logout } from "../slices/auth";
import { useNavigate } from "react-router-dom";
import { NEUTRAL, WARNING } from "../Theme/Colors";
import Add from "@mui/icons-material/Add";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export function Workexperience() {
  // const classes = useStyles();

  // const [first, setfirst] = useState(datas)
  let dispatch = useDispatch();
  // dispatch(editUsers(datas));

  useEffect(() => {
    dispatch(retrievePersonal());
  }, [dispatch]);

  const users = useSelector((state) => state.personal.data.resume);
  const exp = users.workExperience;

  const resume = useSelector((state) => state.personal.exper);
  // const {edituser} = useSelector(state => state.data)

  const [did, setDid] = useState("");

  const handleDelete = () => {
    dispatch(deleteExperAndGet(did))
      .then((res) => {
        if (res.error !== undefined) {
          res.error.message === "Request failed with status code 401" ||
          "Request failed with status code 403"
            ? dispatch(logout()).then(() => {
                navigate("/signin", { state: true });
              })
            : navigate(1);
        } else {
          notify3();
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
        console.warn(error, "error");
      });
  };

  const handleGetSingle = (id) => {
    dispatch(retrieveGetSinExperience(id));
  };

  useEffect(() => {
    if (resume !== null && resume !== undefined) {
      setDatas({
        companyName:
          resume &&
          resume.companyName === null &&
          resume.companyName === undefined
            ? null
            : resume.companyName,
        location: resume && resume === null ? null : resume.location,
        experience: resume && resume === null ? null : resume.experience,
        id: resume && resume === null ? null : resume._id,
        fromDate: resume && resume === null ? null : resume.fromDate,
        toDate: resume && resume === null ? null : resume.toDate,
        role: resume && resume === null ? null : resume.role,
      });
    }
  }, [resume]);

  const handleAdd = (datas, e) => {
    e.preventDefault();
    dispatch(AddExperinceAndThenGet(datas))
      .then((res) => {
        if (res.error !== undefined) {
          res.error.message === "Request failed with status code 401" ||
          "Request failed with status code 403"
            ? dispatch(logout()).then(() => {
                navigate("/signin", { state: true });
              })
            : navigate(1);
        } else {
          notify2();
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
        console.warn(error, "warn");
      });
  };

  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [opena, setOpena] = React.useState(false);

  const [fullWidth, setFullWidth] = React.useState(true);

  const handleClickOpen = () => {
    setTimeout(() => {
      setOpen(true);
    }, 300);
  };
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClickOpena = (id) => {
    setDid(id);
    setOpena(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFullWidth(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleClosea = () => {
    setOpena(false);
  };

  const [datas, setDatas] = useState({
    companyName: "",
    role: "",
    location: "",
    experience: "",
    fromDate: "",
    toDate: "",
    id: "",
  });

  const handleChangesChild = (e) => {
    let { name, value } = e.target;
    setDatas({
      ...datas,
      [name]: value,
    });
  };

  const handleChangesdate = (newValue) => {
    setDatas({
      ...datas,
      fromDate: moment(newValue).format("L"),
    });
  };
  const handleChangestodate = (newValue2) => {
    setDatas({
      ...datas,
      toDate: moment(newValue2).format("L"),
    });
  };
  let navigate = useNavigate();

  const handleUpdate = (datas, id, e) => {
    e.preventDefault();
    dispatch(EditExperinceAndGet(datas, id))
      .then((res) => {
        if (res.error !== undefined) {
          res.error.message === "Request failed with status code 401" ||
          "Request failed with status code 403"
            ? dispatch(logout()).then(() => {
                navigate("/signin", { state: true });
              })
            : navigate(1);
        } else {
          notify();
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

  const notify = () =>
    toast.success("Your Work Experience  Was Updated", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notify2 = () =>
    toast.success("Your Work Experience  Was Added", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const notify3 = () =>
    toast.error("Your Work Experience  Was Deleted ", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
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
            Work Experience
          </Typography>
          <Box>
            <Tooltip title="Add">
              <IconButton
                onClick={() => {
                  handleClickOpen1();
                  setDatas("");
                }}
              >
                <Add sx={{ color: NEUTRAL }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        {exp.length === 0 ? (
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
          exp.map((data) => {
            return (
              <>
                <Box sx={styles.workmain}>
                  <Box sx={{ ml: "15px", mb: "20px", mt: "20px" }}>
                    <Stack
                      direction={"row"}
                      display={"flex"}
                      justifyContent={"space-between"}
                    >
                      <Stack spacing={1}>
                        <Stack direction={"row"} spacing={3}>
                          <AccountBoxIcon />
                          <Typography variant="subtitle1">
                            Role : {data.role}
                          </Typography>
                        </Stack>
                        <Stack direction={"row"} spacing={3}>
                          <LocationCityIcon />
                          <Typography>
                            Company Name : {data.companyName}
                          </Typography>
                        </Stack>
                        <Stack>
                          <Stack direction={"row"} spacing={3}>
                            <LocationOnOutlinedIcon
                              sx={{ fontSize: "1.3em" }}
                            />
                            <Typography>Location : {data.location}</Typography>
                          </Stack>
                        </Stack>
                        <Stack direction={"row"} spacing={3}>
                          <CalendarMonthOutlinedIcon
                            sx={{ fontSize: "1.3em" }}
                          />
                          <Typography>
                            Duration : {moment(data.fromDate).format("L")}-
                            {moment(data.toDate).format("L")} ({data.experience}
                            Years)
                          </Typography>
                        </Stack>
                      </Stack>
                      <Box>
                        <IconButton onClick={handleClickOpen}>
                          <EditRoundedIcon
                            onClick={() => {
                              handleGetSingle(data._id);
                            }}
                            sx={{ color: "#4F9AFF" }}
                          />
                        </IconButton>
                        <IconButton
                          onClick={() => {
                            handleClickOpena(data._id);
                          }}
                        >
                          <DeleteIcon sx={{ color: "#E7274B" }} />
                        </IconButton>
                      </Box>
                    </Stack>
                  </Box>
                </Box>
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

                <Dialog fullWidth={fullWidth} open={open} onClose={handleClose}>
                  <Box sx={{ p: "20px" }}>
                    <Typography variant="h5" sx={{ textAlign: "center" }}>
                      Edit Experience
                    </Typography>
                    <form
                      onSubmit={(e) => {
                        handleUpdate(datas, datas.id, e);
                        handleClose();
                      }}
                    >
                      <ExperienceCard
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
                          //  onClick={()=>{handleUpdate(datas,datas.id);handleClose();notify()}}
                          sx={{ mt: "10px", backgroundColor: "#4fa9ff" }}
                        >
                          save
                        </Button>
                      </Box>
                    </form>
                  </Box>
                </Dialog>
                <Divider />
              </>
            );
          })
        )}

        {/* <Box sx={styles.workmain}>
          <Box sx={styles.jobtitle}>
            <img src={micro} style={styles.expico} />
            <Box sx={{ mt: '8px' }}>
              <IconButton><EditRoundedIcon sx={{ color: '#4F9AFF' }} /></IconButton>
              <IconButton><DeleteIcon sx={{ color: '#E7274B' }} /></IconButton>
            </Box>
            <Dialog
              fullWidth={fullWidth}
              maxWidth={maxWidth}
              open={open}
              onClose={handleClose}>
                <Box sx={{p:'40px'}}>
                <ExperienceCard />
                <Button variant='contained' onClick={handleClose}>
                  Submit
                </Button>
                </Box>
              </Dialog>
          </Box>
          <Box sx={{ ml: '15px' }}>
            <Typography variant='h5' sx={styles.rolewrk}>
              Ui/Ux Designer
            </Typography>
            <Typography variant='p' sx={{ color: '#4F9AFF' }}>
              Company
            </Typography>
          </Box>
          <Box sx={{ ml: '14px', pb: '44px' }}>
            <Box sx={styles.locwork}>
              <LocationOnOutlinedIcon sx={{ fontSize: '1.3em' }} />
              <Typography variant='p' component='p'>
                Pune,India
              </Typography>
            </Box>
            <Box sx={styles.locwork}>
              <CalendarMonthOutlinedIcon sx={{ fontSize: '1.3em' }} />
              <Typography variant='p'>
                2/2019-3/2022 (3 Years)
              </Typography>
            </Box>
          </Box>
        </Box> */}
      </Card>

      <Dialog fullWidth={fullWidth} open={open1} onClose={handleClose1}>
        <Box sx={{ p: "15px" }}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Add Experience
          </Typography>
          <form
            onSubmit={(e) => {
              handleAdd(datas, e);
              handleClose1();
            }}
          >
            <ExperienceCard
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
  );
}
