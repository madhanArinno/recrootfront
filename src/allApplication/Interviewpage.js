import {
  Box,
  Button,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  Checkbox,
  Popover,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { styles } from "./interviewpagestyle";
import "react-calendar/dist/Calendar.css";
import { Calendar } from "react-calendar";
import "./interviewpages.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import { getSchedules, setinterview } from "../slices/interviewslice";
import moment from "moment";
import Nointerview from "./Nointerview";
import { useNavigate } from "react-router-dom";
import { getJobsfil } from "../slices/applyJobs";

export function Interviewpage() {
  let dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [result, setResult] = useState(false);
  const dateFormat = `${date.getDate()} ${date.toLocaleString("en-us", {
    month: "long",
  })} ${date.getFullYear()}`;
  const jobs = useSelector((state) => state.apply.names);
  const [names, setNames] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [user, setUser] = React.useState([]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    if (names.length === 0) {
      setUser(arry);
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  useEffect(() => {
    dispatch(getSchedules());
    dispatch(getJobsfil());
  }, [dispatch]);
  const sear = useSelector((state) => state.sinterview.schedules);

  const [arry, setArry] = useState([]);
  useEffect(() => {
    var arrras = [];
    sear.map((set) => {
      if (
        moment(set.day).format("YYYY-MM-DD") ===
        moment(date).format("YYYY-MM-DD")
      ) {
        arrras.push(set);
      }
      return setArry(arrras);
    });
  }, [date, sear]);

  const handleDate = (e) => {
    setDate(e);
  };
  const handlechange = () => {
    setResult(!result);
  };

  const handleName = (event) => {
    const {
      target: { value },
    } = event;

    let duplicateRemoved = [];

    value.forEach((item) => {
      if (duplicateRemoved.findIndex((o) => o === item) >= 0) {
        duplicateRemoved = duplicateRemoved.filter((x) => x === item);
      } else {
        duplicateRemoved.push(item);
      }
    });

    setNames(duplicateRemoved);
  };

  const filterObjectArray = (arr, filterArr) => {
    return arr.filter((el) =>
      filterArr.some((f) => f === el.jobDetail.jobTitle)
    );
  };

  const handleClose = () => {
    setAnchorEl(null);
    if (names.length > 0) {
      setArry(filterObjectArray(arry, names));
    }
    if (names.length === 0) {
      setArry(user);
    }
  };
  let navigate = useNavigate();

  const mark = [];
  sear.map((dat) => mark.push(moment(dat.day).format("DD-MM-YYYY")));

  const handleSetint = (id) => {
    dispatch(setinterview(sear.filter((job) => job._id === id)[0])).then(
      setTimeout(() => {
        navigate("/employerhome/interview");
      }, 500)
    );
  };

  return (
    <>
      <Box style={{ border: "1px solid #cacaca", borderRadius: "10px" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={4}>
              <Typography variant="h5" sx={{ margin: "30px 0 0 40px" }}>
                Scheduled Interviews
              </Typography>

              <Box
                variant="outlined"
                sx={{
                  ml: "34px",
                  mt: "20px",
                  display: "flex",
                  justifyContent: { xs: "center", lg: "none" },
                }}
              >
                <Button
                  aria-describedby={id}
                  onClick={handleClick}
                  variant="outlined"
                  sx={{ height: "50px", width: "343px" }}
                >
                  Filter
                </Button>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <FormControl sx={{ m: 1, width: 330 }}>
                    <InputLabel id="demo-multiple-checkbox-label">
                      Filter By Jobs
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      variant="outlined"
                      value={names}
                      onChange={handleName}
                      input={<OutlinedInput label="Filter By Jobs" />}
                      renderValue={(selected) =>
                        selected.map((x) => x).join(", ")
                      }
                      MenuProps={MenuProps}
                      sx={{ width: "328px" }}
                    >
                      {jobs.map((variant) => (
                        <MenuItem key={variant._id} value={variant.jobTitle}>
                          <Checkbox
                            checked={
                              names.findIndex(
                                (item) => item === variant.jobTitle
                              ) >= 0
                            }
                          />
                          <ListItemText primary={variant.jobTitle} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Popover>
              </Box>
              <Box
                style={{
                  marginLeft: "32px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Calendar
                  onChange={(e) => handleDate(e)}
                  value={date}
                  tileClassName={({ date }) => {
                    if (
                      mark.find((x) => x === moment(date).format("DD-MM-YYYY"))
                    ) {
                      return "highlight";
                    }
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", lg: "none" },
                }}
              >
                <Box sx={styles.dtview}>
                  <Typography sx={styles.datefor}>{dateFormat} </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={8} md={12}>
              {arry.length === 0 ? (
                <Nointerview />
              ) : (
                <Box sx={styles.accbox}>
                  {arry.map((man) => (
                    <Accordion
                      sx={styles.style2}
                      style={{ margin: "15px 15px 0 15px" }}
                      onClick={() => handlechange(true)}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography variant="h5" sx={{ color: "#4F9AFF" }}>
                          {man.subject}
                        </Typography>
                      </AccordionSummary>
                      <Box>
                        <AccordionDetails>
                          <Box>
                            <List
                              component="nav"
                              aria-label="main mailbox folders"
                            >
                              <ListItem style={{ display: "flex" }}>
                                <ListItemText>
                                  <Typography variant="h6">
                                    Meeting Id
                                  </Typography>
                                </ListItemText>
                                <Typography>123456</Typography>
                              </ListItem>
                              <ListItem>
                                <ListItemText>
                                  <Typography variant="h6">Date</Typography>
                                </ListItemText>
                                <Typography>{man.day}</Typography>
                              </ListItem>
                              <ListItem>
                                <ListItemText>
                                  <Typography variant="h6">Time</Typography>
                                </ListItemText>
                                <Typography>
                                  {moment(man.time).format("LT")}
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <ListItemText>
                                  <Typography variant="h6">
                                    Time Zone
                                  </Typography>
                                </ListItemText>
                                <Typography>{man.zone}</Typography>
                              </ListItem>
                              <ListItem>
                                <ListItemText>
                                  <Typography variant="h6">Duration</Typography>
                                </ListItemText>
                                <Typography>{man.duration}</Typography>
                              </ListItem>
                              <ListItem>
                                <ListItemText>
                                  <Typography variant="h6">
                                    Candidate
                                  </Typography>
                                </ListItemText>
                                <Typography>
                                  {man.userDetail.firstName}{" "}
                                  {man.userDetail.lastName}
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <ListItemText>
                                  <Typography variant="h6">
                                    Applied Job
                                  </Typography>
                                </ListItemText>
                                <Typography>
                                  {man.jobDetail.jobTitle}
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <ListItemText>
                                  <Typography variant="h6">
                                    Event Type
                                  </Typography>
                                </ListItemText>
                                <Typography>{man.event}</Typography>
                              </ListItem>
                              <ListItem>
                                <ListItemText>
                                  <Typography variant="h6">MeetLink</Typography>
                                </ListItemText>
                                <Typography>{man && man.meetlink}</Typography>
                              </ListItem>
                            </List>
                          </Box>
                          <Box sx={styles.btns}>
                            <Button
                              variant="outlined"
                              onClick={() => {
                                handleSetint(man._id);
                              }}
                              sx={styles.threebtn}
                            >
                              Edit
                            </Button>
                          </Box>
                        </AccordionDetails>
                      </Box>
                    </Accordion>
                  ))}
                </Box>
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
