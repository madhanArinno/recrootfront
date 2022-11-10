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
import { useSelector, useDispatch } from "react-redux";
import { EducationCard } from "../resume/resumeTwoComponen/EducationCard";
import moment from "moment";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AddEducaAndThenGet,
  deleteEducaAndGet,
  EditEducaAndGet,
  retrieveGetSinEduca,
  retrievePersonal,
} from "../slices/personal";
import { logout } from "../slices/auth";
import { useNavigate } from "react-router-dom";
import Add from "@mui/icons-material/Add";
import { NEUTRAL, WARNING } from "../Theme/Colors";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export function Education() {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrievePersonal());
  }, [dispatch]);
  const users = useSelector((state) => state.personal.data.resume);
  const data = users.education;

  const handleGetSingle = (id) => {
    dispatch(retrieveGetSinEduca(id));
  };
  const education = useSelector((state) => state.personal.education);

  const handleClickOpen = () => {
    setTimeout(() => {
      setOpen(true);
    }, 300);
  };
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const [did, setDid] = useState("");
  const handleClickOpena = (id) => {
    setDid(id);
    setOpena(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  const [fullWidth, setFullWidth] = React.useState(true);
  const handleClosea = () => {
    setOpena(false);
    setFullWidth(true);
  };

  const [opena, setOpena] = React.useState(false);
  const navigate = useNavigate();
  const handleDelete = () => {
    dispatch(deleteEducaAndGet(did))
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
      });
  };

  const [datas, setDatas] = useState({
    collegeName: "",
    country: "",
    degreeName: "",
    duration: "",
    experience: "",
    graduate: "",
    logo: "",
    state: "",
    fromDate: "",
    toDate: "",
    id: "",
  });

  useEffect(() => {
    if (education !== null && education !== undefined) {
      setDatas({
        collegeName:
          education.collegeName === null && education.collegeName === undefined
            ? null
            : education.collegeName,
        country: education === null ? null : education.country,
        degreeName: education === null ? null : education.degreeName,
        duration: education === null ? null : education.duration,
        experience: education === null ? null : education.experience,
        graduate: education === null ? null : education.graduate,
        logo: education === null ? null : education.logo,
        state: education === null ? null : education.state,
        fromDate: education === null ? null : education.fromDate,
        toDate: education === null ? null : education.toDate,
        id: education === null ? null : education._id,
      });
    }
  }, [education]);

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

  const handleUpdate = (datas, id) => {
    dispatch(EditEducaAndGet(datas, id))
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

  const handleAdd = (datas) => {
    dispatch(AddEducaAndThenGet(datas))
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
      });
  };

  const notify = () =>
    toast.success("Your Work Education  Was Updated", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notify2 = () =>
    toast.success("Your Work Education  Was Added", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notify3 = (props) =>
    toast.error("Your Work Education  Was Deleted ", {
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
            Education
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
        {data.length === 0 ? (
          <Typography
            variant="body2"
            sx={{
              m: "15px",
              color: WARNING,
            }}
          >
            No Data For Education
          </Typography>
        ) : (
          data &&
          data.map((data) => (
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
                        <AutoStoriesIcon />
                        <Typography variant="subtitle1">
                          {data.graduate} In {data.degreeName}
                        </Typography>
                      </Stack>
                      <Stack direction={"row"} spacing={3}>
                        <AccountBalanceIcon />
                        <Typography variant="subtitle1">
                          {data.collegeName}
                        </Typography>
                      </Stack>
                      <Stack direction={"row"} spacing={3}>
                        <LocationOnOutlinedIcon sx={{ fontSize: "1.3em" }} />
                        <Typography
                          variant="subtitle1"
                          sx={{ textTransform: "capitalize" }}
                        >
                          {data.state},{data.country}
                        </Typography>
                      </Stack>
                      <Stack direction={"row"} spacing={3}>
                        <CalendarMonthOutlinedIcon sx={{ fontSize: "1.3em" }} />
                        <Typography variant="subtitle1">
                          {moment(data.fromDate).format("L")}-
                          {moment(data.toDate).format("L")} ({data.experience}
                          Years)
                        </Typography>
                      </Stack>
                      {/* <Stack direction={"row"} spacing={3}>
                        <SchoolRoundedIcon sx={{ fontSize: "1.3em" }} />
                        <Typography
                          variant="p"
                          sx={{ textTransform: "capitalize" }}
                        >
                          {data.graduate} In {data.degreeName}
                        </Typography>
                      </Stack> */}
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
              <Divider />
            </>
          ))
        )}
      </Card>

      <Dialog fullWidth={fullWidth} open={open1} onClose={handleClose1}>
        <Box sx={{ p: "20px" }}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Add Education
          </Typography>
          <EducationCard
            name={""}
            handleChangesChild={handleChangesChild}
            handleChangesdate={handleChangesdate}
            handleChangestodate={handleChangestodate}
          />
          <Box sx={{ display: "flex", justifyContent: "center", mt: "10px" }}>
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
                onClick={() => {
                  handleAdd(datas);
                  handleClose1();
                }}
              >
                Add
              </Button>
            ) : (
              <Button
                variant="contained"
                disabled
                sx={{ backgroundColor: "#4fa9ff", mt: 1 }}
                onClick={() => {
                  handleAdd(datas);
                  handleClose1();
                  notify2();
                }}
              >
                Add
              </Button>
            )}
          </Box>
        </Box>
      </Dialog>
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
              handleDelete(data._id);
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
            Edit Education
          </Typography>
          <EducationCard
            name={datas === null && datas === undefined ? null : datas}
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
              onClick={() => {
                handleUpdate(datas, datas.id);
                handleClose();
              }}
              sx={{ mt: "10px", backgroundColor: "#4fa9ff" }}
            >
              save
            </Button>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
}
