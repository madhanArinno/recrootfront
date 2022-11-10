import React, { useState, useEffect } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { DataGrid } from "@mui/x-data-grid";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Activejobs from "./Assets/Group 7724.png";
import Expiredjobs from "./Assets/Group 7723.png";
import Plans from "./Assets/Group 7722.png";
import Total from "./Assets/Vector.png";
import Reject from "./Assets/icon-park_reject.png";
import Shortlist from "./Assets/Group 7725.png";
import Successfull from "./Assets/Group 7726.png";
import "./Dashboard.css";
import { Menu, MenuItem, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { applyJobsdet, getJobsfil } from "../slices/applyJobs";
import { setEditJob } from "../slices/job";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { getSchedules } from "../slices/interviewslice";
import { logout } from "../slices/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: "center",
  },
  papercard: {
    minHeight: 140,
    minWidth: 190,
  },
}));

export default function Dashboard() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(applyJobsdet());
    dispatch(getJobsfil());
  }, [dispatch]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    dispatch(getSchedules());
  }, [dispatch]);
  const sear = useSelector((state) => state.sinterview.schedules);

  const users = useSelector((state) => state.apply.details);
  const names = useSelector((state) => state.apply.names);
  const status = "active";
  const count = names.filter((obj) => obj.status === status).length;
  const expired = [];
  const active = [];

  names.map((nam) => {
    if (
      moment(nam.applicationDeadline).format() < moment(new Date()).format() ||
      nam.status === "deactive"
    ) {
      expired.push(nam.applicationDeadline);
    }
    if (
      moment(nam.applicationDeadline).format() >
        moment(new Date()).subtract(1, "days").format() &&
      nam.status === "active"
    ) {
      active.push(nam.applicationDeadline);
    }
    return null;
  });
  var formattedNumber = ("0" + expired.length).slice(-2);
  var formattedActive = ("0" + active.length).slice(-2);
  var formattedint = ("0" + sear.length).slice(-2);
  const rows =
    names &&
    names.map((nam, index) => ({
      id: nam._id,
      _id: index + 1,
      title: nam.jobRole,
      jobtype: nam.jobType,
      Location: nam.address.label,
      posteddate: moment(nam.createdAt).format("L"),
      status: nam.status,
      deadline: moment(nam.applicationDeadline).format("MMM Do YY"),
      action: "Edit",
    }));

  let navigate = useNavigate();

  const classes = useStyles();
  const reject = [];
  const short = [];
  users.map((user) => {
    if (user.status === "rejected") {
      reject.push(user);
    }
    if (user.status === "shortlist") {
      short.push(user);
    }
    return null;
  });

  const [jobid, setJobid] = useState("");

  const handleIdJob = (parms) => {
    setJobid(parms.id);
  };

  useEffect(() => {
    dispatch(
      setEditJob({
        salary: {},
        question: [
          {
            id: new Date().getTime(),
            questions: "",
            answer: "",
            preferedAns: "",
          },
        ],
        requiredSkill: [],
      })
    );
  }, [dispatch]);

  const handleEdit = () => {
    dispatch(setEditJob(names.filter((i) => i._id === jobid)[0])).then(
      setTimeout(() => {
        navigate("/employerhome/newjob");
      }, 500)
    );
  };

  const user = JSON.parse(localStorage.getItem("User"));

  const handleActivate = () => {
    if (count === 1) {
      notifyEroor("You Have Already One Active Job");
    } else {
      axios
        .put(
          `http://localhost:3000/api/updateJobStatus/${jobid}`,
          { status: "active" },
          { headers: { "x-access-token": `${user.token}` } }
        )
        .then(function (res) {
          if (res.data.code) {
            if (res.data.code === 899) {
              navigate("/Pricing");
            }
            notifyEroor(res.data.message);
          } else {
            notify(res.data);
            dispatch(applyJobsdet());
            dispatch(getJobsfil());
          }
        })
        .catch(function (error) {
          console.warn(error);
        });
    }
  };

  const handleDeActivate = () => {
    axios
      .put(
        `http://localhost:3000/api/updateJobStatus/${jobid}`,
        { status: "inactive" },
        { headers: { "x-access-token": `${user.token}` } }
      )
      .then(function (res) {
        notify(res.data);
        dispatch(applyJobsdet());
        dispatch(getJobsfil());
      })
      .catch(function (error) {
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

  const notify = (msg) =>
    toast.success(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifyEroor = (msg) =>
    toast.error(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const cardData = [
    {
      id: 1,
      content: "Total Applicants",
      number: users.length,
      Image: Total,
    },
    {
      id: 3,
      content: "Rejected Applicants",
      number: reject.length,
      Image: Reject,
    },
    {
      id: 4,
      content: "Shortlisted Applicants",
      number: short.length,
      Image: Shortlist,
    },
    {
      id: 5,
      content: "Successful Applicants",
      number: 0,
      Image: Successfull,
    },
  ];

  const columns = [
    { field: "id", headerName: "Id", width: 100, hide: true },
    { field: "_id", headerName: "Job", width: 120 },
    { field: "title", headerName: "Title", width: 260 },
    {
      field: "jobtype",
      headerName: "Job type",
      width: 130,
    },
    {
      field: "Location",
      headerName: "Location",
      width: 130,
    },
    {
      field: "posteddate",
      headerName: "Posted date",
      width: 130,
    },
    {
      field: "deadline",
      headerName: "Deadline",
      width: 130,
    },
    { field: "status", headerName: "Status", width: 140 },
    {
      field: "action",
      headerName: "Action",
      width: 130,
      renderCell: (parms) => (
        <>
          <Button
            className="editButton"
            id="basic-button"
            // id="basic-demo-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            // variant="outlined"
            // color="neutral"
            onClick={(e) => {
              handleClick(e);
              handleIdJob(parms);
            }}
          >
            Action <ArrowDropDownIcon style={{ marginLeft: 10 }} />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            aria-labelledby="basic-demo-button"
          >
            <MenuItem
              onClick={() => {
                handleClose();
                handleEdit(parms);
              }}
              value="edit"
            >
              Manage Job
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                handleActivate();
              }}
              value="delete"
            >
              Activate
            </MenuItem>

            <MenuItem
              onClick={() => {
                handleClose();
                handleDeActivate();
              }}
              value="delete"
            >
              Deactivate
            </MenuItem>
          </Menu>
        </>
      ),
    },
    // [rowId]
  ];

  const handleGetRowId = (e) => {
    return e.id;
  };

  return (
    <div>
      <div
        columns={{ xs: 4, sm: 8, md: 12 }}
        style={{ backgroundColor: "rgba(252, 253, 255, 1)" }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={4}>
            <Paper
              className="firstgrid"
              style={{ backgroundImage: `url(${Activejobs})`, height: "80px" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0px 20px",
                  alignItems: "center",
                }}
              >
                <p>Active Jobs</p>
                <p className="span-number">{formattedActive}</p>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Paper
              className="firstgrid"
              style={{ backgroundImage: `url(${Expiredjobs})`, height: "80px" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0px 20px",
                  alignItems: "center",
                }}
              >
                <p style={{ width: "145px" }}>Inactive Jobs</p>
                <p className="span-number">{formattedNumber}</p>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Paper
              className="firstgrid"
              style={{ backgroundImage: `url(${Plans})`, height: "80px" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0px 20px",
                  alignItems: "center",
                }}
              >
                <p>Interviews</p>
                <p className="span-number">{formattedint}</p>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="space-evenly" spacing={2}>
              {cardData.map((list, index) => (
                <Grid key={list.id} item>
                  <div className="dashboardcard">
                    <Paper className={classes.papercard}>
                      <div className="dashboardcontent">{list.content}</div>
                      <div className="dashboardnumber">{list.number}</div>
                      <div className="dashboardimage">
                        <img
                          src={list.Image}
                          alt=""
                          className="dashboardimage-1"
                        />
                      </div>
                    </Paper>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <div style={{ height: 400, width: "100%" }} className="table-main">
              <DataGrid
                sx={{ display: "flex", justifyContent: "center" }}
                getRowId={handleGetRowId}
                rows={rows}
                columns={columns}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
