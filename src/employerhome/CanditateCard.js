import * as React from "react";
import Box from "@mui/material/Box";
import { styles } from "./employerhstyle";
import {
  Avatar,
  Button,
  Card,
  Divider,
  FormControl,
  Grid,
  IconButton,
  ListItemText,
  Popover,
  Skeleton,
  Typography,
} from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import {
  applyJobsdet,
  getSinCover,
  getSinDetails,
  getSinResume,
  setJobsFil,
} from "../slices/applyJobs";
import { useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AddIcon from "@mui/icons-material/Add";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Line } from "rc-progress";
import axios from "axios";

export function CanditateCard() {
  let dispatch = useDispatch();

  const [user, setUser] = React.useState([]);
  const [userf, setUserf] = React.useState([]);

  const users = useSelector((state) => state.apply.details);
  React.useEffect(() => {
    setUser(users);
  }, [users]);

  const single = useSelector((state) => state.apply.single);

  const handleGet = (ind, resume, id, status, cover) => {
    dispatch(getSinDetails(user[ind]));
    dispatch(getSinResume(resume));
    dispatch(getSinCover(cover));
    if (status === "unview") {
      axios
        .put(
          `http://localhost:3000/api/updateStatus/${id}`,
          { status: "viewed" },
          { headers: { "x-access-token": `${user.token}` } }
        )
        .then(function (res) {
          const newMemChange = user.map((i) => {
            if (id === i._id) {
              i = { ...i, status: "viewed" };
              // i={...i,[i.fname]:name[0].firstName}
              i.id = id;
            }
            return i;
          });

          setUser(newMemChange);
          // dispatch(statusUpdate(newMemChange))
        })
        .catch(function (error) {
          console.warn(error);
        });
    } else {
      return null;
    }
  };
  if (user.length === 0) {
    dispatch(getSinDetails(undefined));
  }

  useEffect(() => {
    dispatch(getSinDetails(user[0]));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const jobs = useSelector((state) => state.apply.names);
  const [names, setNames] = useState([]);
  const [count, setCount] = useState([]);
  const [states, setStates] = useState([]);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    dispatch(applyJobsdet());
  };
  useEffect(() => {
    setUserf(users);
  }, [users]);

  const handleName = (event) => {
    const {
      target: { value },
    } = event;

    let duplicateRemoved = [];

    value.forEach((item) => {
      if (duplicateRemoved.findIndex((o) => o._id === item._id) >= 0) {
        duplicateRemoved = duplicateRemoved.filter((x) => x._id === item._id);
      } else {
        duplicateRemoved.push(item);
      }
    });

    setNames(duplicateRemoved);
    setUser(filterObjectArray(user, duplicateRemoved));
  };

  const handleStatus = (event) => {
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

    setStates(duplicateRemoved);
    setUser(filterObjectStatus(user, duplicateRemoved));
  };

  const filterObjectArray = (arr, filterArr) => {
    return arr.filter((el) => filterArr.some((f) => f._id === el.jobId));
  };
  const filterObjectStatus = (arr, filterArr) => {
    return arr.filter((el) => filterArr.some((f) => f === el.status));
  };
  const filterObjectArrayCoun = (arr, filterArr) => {
    return arr.filter((el) =>
      filterArr.some((f) =>
        el.userDetail.resume.country.some((d) => d.country.includes(f))
      )
    );
  };

  const handleClose = () => {
    setAnchorEl(null);
    if (names.length === 0 && count.length === 0) {
      setUser(filterObjectStatus(userf, states));
    }
    if (count.length === 0 && states.length === 0) {
      setUser(filterObjectArray(userf, names));
    }
    if (names.length === 0 && states.length === 0) {
      setUser(filterObjectArrayCoun(userf, count));
    }
    if (names.length === 0 && count.length === 0 && states.length === 0) {
      dispatch(applyJobsdet());
    }
    if (names.length > 0 && count.length > 0 && states.length > 0) {
    }
  };
  const handleCloseFilter = () => {
    setAnchorEl(null);
    setNames([]);
    setCount([]);
    setStates([]);
  };

  const handleFilterJob = () => {
    dispatch(
      setJobsFil({
        jobs: names,
        country: count,
      })
    );
    handleClose();
  };

  var final = [];
  jobs.map((jnb) => final.push(jnb.address.country));

  var status = ["shortlist", "rejected", "unview", "viewed"];

  const handleCloseRes = () => {
    setNames([]);
    setCount([]);
    setStates([]);
    dispatch(applyJobsdet());
    setAnchorEl(null);
  };
  const [dropj, setDropj] = useState(false);
  const [drops, setDrops] = useState(false);

  var counts = ["1", "2", "1", "2", "1", "2", "1", "2"];

  var percent;
  return (
    <>
      {users.length !== 0 ? (
        <Button
          variant="contained"
          aria-describedby={id}
          onClick={handleClick}
          sx={styles.sortbtn}
        >
          <AddIcon /> Add Filter
          <Box
            sx={{ border: "1px solid #fff", borderRadius: "50%", ml: "3px" }}
          >
            <Typography
              variant="body2"
              sx={{ color: "#fff", p: "2px 8px 2px 8px" }}
            >
              {names.length + count.length + states.length}
            </Typography>
          </Box>
        </Button>
      ) : (
        ""
      )}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleCloseFilter}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box sx={{ width: "500px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              m: "0 20px 0 20px",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 700, fontSize: "20px" }}>
              Filter
            </Typography>
            <Box>
              {" "}
              <Button
                sx={{ textTransform: "capitalize" }}
                onClick={() => {
                  handleCloseRes();
                }}
              >
                Reset Filter
              </Button>{" "}
              <Button
                onClick={handleFilterJob}
                sx={{ textTransform: "capitalize" }}
              >
                Save Filter
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 700, fontSize: "16px", ml: "20px" }}
            >
              Filter By Jobs
            </Typography>
            <IconButton
              onClick={() => {
                setDropj(!dropj);
              }}
            >
              {dropj === true ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownOutlinedIcon />
              )}
            </IconButton>
            <Box sx={{ border: "1px solid #4fa9ff", borderRadius: "50%" }}>
              <Typography
                variant="body2"
                sx={{ color: "#4fa9ff", p: "2px 8px 2px 8px" }}
              >
                {names.length}
              </Typography>
            </Box>
          </Box>

          <Divider />
          {dropj === true ? (
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-checkbox-label">By Jobs</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                variant="outlined"
                value={names}
                onChange={handleName}
                input={<OutlinedInput label="By Jobs" />}
                renderValue={(selected) =>
                  selected.map((x) => x.jobRole).join(", ")
                }
                MenuProps={MenuProps}
              >
                {jobs.map((variant) => (
                  <MenuItem key={variant._id} value={variant}>
                    <Checkbox
                      checked={
                        names.findIndex((item) => item._id === variant._id) >= 0
                      }
                    />
                    <ListItemText primary={variant.jobRole} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ) : (
            ""
          )}

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 700, fontSize: "16px", ml: "20px" }}
            >
              Filter By status
            </Typography>
            <IconButton
              onClick={() => {
                setDrops(!drops);
              }}
            >
              {drops === true ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownOutlinedIcon />
              )}
            </IconButton>
            <Box sx={{ border: "1px solid #4fa9ff", borderRadius: "50%" }}>
              <Typography
                variant="body2"
                sx={{ color: "#4fa9ff", p: "2px 8px 2px 8px" }}
              >
                {states.length}
              </Typography>
            </Box>
          </Box>
          <Divider />
          {drops === true ? (
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="mutiple-select-label">By Status</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                label="By Status"
                // sx={{ml:'20px'}}
                variant="outlined"
                value={states}
                onChange={handleStatus}
                renderValue={(selected) => selected.map((x) => x).join(", ")}
                MenuProps={MenuProps}
              >
                {status.map((variant) => (
                  <MenuItem key={variant} value={variant}>
                    <Checkbox
                      checked={
                        states.findIndex((item) => item === variant) >= 0
                      }
                    />
                    <ListItemText primary={variant} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ) : (
            ""
          )}
        </Box>
      </Popover>
      <Box sx={styles.cardslist}>
        {user.length === 0
          ? counts.map((coun, ind) => (
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  alignItems: "center",
                  mb: "20px",
                }}
                key={ind}
              >
                <Box
                  sx={{ display: "flex", gap: "10px", flexDirection: "row" }}
                >
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem", width: "150px" }}
                  />
                  <Skeleton variant="circular" width={40} height={40} />
                </Box>
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1rem", width: "200px" }}
                />
                <Box sx={{ display: "flex", gap: "15px" }}>
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem", width: "90px" }}
                  />
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem", width: "90px" }}
                  />
                </Box>
                <Box sx={{ display: "flex", gap: "15px" }}>
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem", width: "90px" }}
                  />
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem", width: "90px" }}
                  />
                </Box>
                <Skeleton variant="rounded" width={200} height={20} />
              </Box>
            ))
          : user &&
            user.map((user, index) => (
              <Grid key={index} item xl={12}>
                <Card
                  sx={
                    user._id === (single && single._id)
                      ? styles.canditatecardsel
                      : styles.canditatecard
                  }
                >
                  <Box
                    onClick={() => {
                      handleGet(
                        index,
                        user.resumeId,
                        user._id,
                        user.status,
                        user.coverId
                      );
                    }}
                  >
                    <Box sx={styles.titlename}>
                      <Typography variant="h6" sx={styles.candname}>
                        {user.userDetail.firstName} {user.userDetail.lastName}
                      </Typography>
                      <Avatar
                        src={`http://localhost:3000/api/openProfpic?photo=${user.userDetail.profpicFileLocation.photo}`}
                        variant="rounded"
                      ></Avatar>
                    </Box>
                    <Box sx={styles.rolecnt}>
                      <ShoppingBagOutlinedIcon sx={{ color: "#9197B3" }} />
                      <Typography variant="body1" sx={styles.roletxt}>
                        {user.jobDetail.jobRole}
                      </Typography>
                    </Box>
                    <Box sx={styles.rolecnt}>
                      <LocationOnOutlinedIcon sx={{ color: "#9197B3" }} />
                      {user.userDetail.resume.country.map((coun) => (
                        <Typography
                          variant="body1"
                          key={coun.id}
                          sx={styles.roletxt}
                        >
                          {coun.country}
                        </Typography>
                      ))}
                    </Box>
                  </Box>

                  <Box sx={{ display: "none" }}>
                    {
                      (percent =
                        user.jobDetail &&
                        user.jobDetail.question &&
                        user.jobDetail.question.length)
                    }
                  </Box>
                  <Box sx={styles.rating}>
                    <Typography variant="body2" sx={styles.applytxt}>
                      Applied {moment(user.createdAt).fromNow()}
                    </Typography>
                  </Box>
                  {user.jobDetail.queshow !== "false" ? (
                    <>
                      <Typography variant="body2" sx={styles.applytxt3}>
                        {user &&
                          user.question.reduce(
                            (n, e) =>
                              e.answer !== "" && e.answer === e.preferedAns
                                ? n + 1
                                : n,
                            0
                          )}{" "}
                        Of{" "}
                        {user.jobDetail &&
                          user.jobDetail.question &&
                          user.jobDetail.question.length}{" "}
                        Answered
                      </Typography>
                      <Box
                        sx={{
                          m: "auto",
                          display: "flex",
                          justifyContent: "center",
                          p: "10px",
                        }}
                      >
                        <Line
                          style={{
                            width: "90%",
                            height: "8px",
                            borderRadius: "8px",
                          }}
                          percent={Math.floor(
                            (user.question.reduce(
                              (n, e) =>
                                e.answer !== "" && e.answer === e.preferedAns
                                  ? n + 1
                                  : n,
                              0
                            ) /
                              percent) *
                              100
                          )}
                          strokeWidth={1}
                          strokeColor="#A3FF9B"
                        />
                      </Box>
                    </>
                  ) : (
                    <>
                      <div>
                        <br></br>
                      </div>
                    </>
                  )}
                </Card>
              </Grid>
            ))}
      </Box>
    </>
  );
}
