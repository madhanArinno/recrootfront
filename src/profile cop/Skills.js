import {
  Button,
  Card,
  Dialog,
  Grid,
  IconButton,
  Stack,
  Tooltip,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styles } from "./profilestyle";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { SkillCard } from "../resume/resumeTwoComponen/SkillCard";

import { Line } from "rc-progress";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AddSkillAndThenGet,
  deleteSkillAndGet,
  EditSkillAndGet,
  retrieveGetSinSkill,
  retrievePersonal,
} from "../slices/personal";
import { logout } from "../slices/auth";
import { useNavigate } from "react-router-dom";
import { NEUTRAL, WARNING } from "../Theme/Colors";
import Add from "@mui/icons-material/Add";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export function Skills() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrievePersonal());
  }, [dispatch]);

  const users = useSelector((state) => state.personal.data.resume);
  const skill = useSelector((state) => state.personal.skill);
  const data = users.skills;

  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [opena, setOpena] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);

  const navigate = useNavigate();
  const [datas, setDatas] = useState({
    skillName: "",
    Compitance: "",
    Experience: "",
    id: "",
  });

  useEffect(() => {
    if (skill !== null && skill !== undefined) {
      setDatas({
        skillName: skill === null ? null : skill.skillName,
        Compitance: skill === null ? null : skill.Compitance,
        Experience:
          skill.Experience === null && skill.Experience === undefined
            ? null
            : skill.Experience,
        id: skill === null ? null : skill._id,
      });
    }
  }, [skill]);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClickOpena = (id) => {
    setDid(id);
    setOpena(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
    setFullWidth(true);
  };

  const handleClosea = () => {
    setOpena(false);
  };

  const notify = () =>
    toast.success("Your Skill  Was Updated", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notify2 = () =>
    toast.success("Your Skill  Was Added", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notify3 = () =>
    toast.error("Your Skill  Was Deleted ", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleChangesChild = (e) => {
    let { name, value } = e.target;
    setDatas({
      ...datas,
      [name]: value,
    });
  };

  const handleUpdate = (datas, id, e) => {
    e.preventDefault();
    dispatch(EditSkillAndGet(datas, id))
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

  const handleAdd = (datas, e) => {
    e.preventDefault();
    dispatch(AddSkillAndThenGet(datas))
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
  const [did, setDid] = useState("");
  const handleDelete = () => {
    dispatch(deleteSkillAndGet(did))
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

  const handleGetSingle = (id) => {
    dispatch(retrieveGetSinSkill(id));
  };

  const handleClickOpen = () => {
    setTimeout(() => {
      setOpen(true);
    }, 300);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            Skills
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
        <Grid
          sx={{
            display: "flex",
            displayDirection: { xs: "column", sm: "row" },
            flexWrap: "wrap",
          }}
        >
          {data.length === 0 ? (
            <Typography
              variant="body2"
              sx={{
                m: "15px",
                color: WARNING,
              }}
            >
              No Data For Skills
            </Typography>
          ) : (
            data.map((data) => (
              <>
                <Grid item sm={6} xs={12} sx={{ p: "10px" }}>
                  <Box sx={{ mr: "10px", textTransform: "capitazile" }}>
                    <Box sx={styles.skills}>
                      <Stack
                        sx={{
                          display: "flex",
                          gap: "3px",
                        }}
                      >
                        <Stack direction={"row"}>
                          <Box>
                            <Stack
                              direction={"row"}
                              justifyContent="space-between"
                            >
                              <Typography variant="subtitle1">
                                Skill : {data.skillName}
                              </Typography>
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "start",
                                }}
                              >
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
                            </Stack>

                            <Typography variant="subtitle1">
                              Years :({data.Experience}Years)
                            </Typography>
                            <Typography
                              variant="subtitle1"
                              sx={{ textTransform: "capitalize" }}
                            >
                              Level : {data.Compitance}
                            </Typography>
                            <Box sx={styles.linebox}>
                              <Line
                                style={{
                                  width: "260px",
                                  height: "11px",
                                  borderRadius: "8px",
                                }}
                                percent={
                                  data.Compitance === "intermediate"
                                    ? 50
                                    : 100 && data.Compitance === "beginner"
                                    ? 20
                                    : 100
                                }
                                strokeWidth={1}
                                strokeColor="rgba(167, 0, 245, 0.5)"
                              />
                              <Typography variant="body2" sx={styles.linetext}>
                                {data.Compitance === "intermediate"
                                  ? 50
                                  : 100 && data.Compitance === "beginner"
                                  ? 20
                                  : 100}{" "}
                                %
                              </Typography>
                            </Box>
                          </Box>
                        </Stack>
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
                          handleDelete(data._id);
                        }}
                      >
                        Yes
                      </Button>
                      <Button onClick={handleClosea}>No</Button>
                    </DialogActions>
                  </Dialog>
                </Grid>
              </>
            ))
          )}
        </Grid>
      </Card>
      <Dialog fullWidth={fullWidth} open={open1} onClose={handleClose1}>
        <Box sx={{ p: "20px" }}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Add Skills
          </Typography>
          <form
            onSubmit={(e) => {
              handleAdd(datas, e);
              handleClose1();
            }}
          >
            <SkillCard name={""} handleChangesChild={handleChangesChild} />
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
      <Dialog fullWidth={fullWidth} open={open} onClose={handleClose}>
        <Box sx={{ p: "20px" }}>
          <Typography variant="h5" sx={{ textAlign: "center", mb: "10px" }}>
            Edit Skills
          </Typography>
          <form
            onSubmit={(e) => {
              handleUpdate(datas, datas.id, e);
              handleClose();
              setDatas("");
            }}
          >
            <SkillCard
              name={datas === null && datas === undefined ? null : datas}
              handleChangesChild={handleChangesChild}
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
                Save
              </Button>
            </Box>
          </form>
        </Box>
      </Dialog>
    </Box>
  );
}
