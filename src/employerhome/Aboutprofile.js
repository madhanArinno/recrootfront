import * as React from "react";
import Box from "@mui/material/Box";
import { styles } from "./employerhstyle";
import {
  Button,
  Avatar,
  Typography,
  Divider,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  applyJobsdet,
  getCandi,
  getCandiJobId,
  getSinResume,
} from "../slices/applyJobs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { logout } from "../slices/auth";

export function Aboutprofile() {
  let dispatch = useDispatch();
  const jobDet = useSelector((data) => data.apply.single);
  const single = useSelector(
    (data) => data.apply.single && data.apply.single.userDetail
  );
  React.useEffect(() => {
    if (jobDet && jobDet.resumeId === undefined) {
    } else {
      dispatch(getSinResume("" && jobDet.resumeId));
    }
  }, [dispatch, jobDet, single]);

  let navigate = useNavigate();
  const handleProfile = (id) => {
    dispatch(getCandi(id));
    navigate("/employerhome/applicant");
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  React.useEffect(() => {
    dispatch(
      getCandiJobId({
        jobId: "" && jobDet.jobId,
        canditateId: "" && jobDet.candidateId,
      })
    );
  }, [dispatch, jobDet.candidateId, jobDet.jobId, single]);

  const handleClose = () => {
    setAnchorEl(null);
  };
  // eslint-disable-next-line no-unused-vars
  const [status, setStatus] = React.useState({
    status: "",
  });
  const notify = (msg) =>
    toast.success(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const user = JSON.parse(localStorage.getItem("User"));
  const handleShort = (id) => {
    axios
      .put(
        `http://localhost:3000/api/updateStatus/${id}`,
        { status: "shortlist" },
        { headers: { "x-access-token": `${user.token}` } }
      )
      .then(function (res) {
        notify(res.data);
        dispatch(applyJobsdet());
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
    setAnchorEl(null);
  };
  const handleReject = (id) => {
    axios
      .put(
        `http://localhost:3000/api/updateStatus/${id}`,
        { status: "rejected" },
        { headers: { "x-access-token": `${user.token}` } }
      )
      .then(function (res) {
        notify(res.data);
        dispatch(applyJobsdet());
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
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={styles.bgcard}>
        <Box sx={styles.profpic}>
          <Avatar
            src={`http://localhost:3000/api/openProfpic?photo=${
              single && single.profpicFileLocation.photo
            }`}
            sx={{ width: "100px", height: "100px" }}
            variant="rounded"
          ></Avatar>
          <Typography variant="h5" sx={styles.cardname}>
            {single && single.firstName} {single && single.lastName}
          </Typography>
        </Box>
      </Box>
      <Box sx={styles.abouttxt}>
        <Box>
          <Typography variant="h5" sx={styles.txtabt}>
            About
          </Typography>
          <Box sx={{ width: { lg: "350px", md: "200px", xs: "auto" } }}>
            <Typography variant="p" sx={styles.txtabtful}>
              {single && single.about}
            </Typography>
          </Box>
        </Box>
        <Box sx={styles.msggrp}>
          <Button variant="outlined" sx={styles.msgbtn}>
            Message
          </Button>
          <Button
            variant="contained"
            sx={styles.morebtn}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreHorizIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={() => {
                navigate("/employerhome/interview");
              }}
            >
              Schedule Intreview
            </MenuItem>
            <MenuItem
              onClick={() => {
                setStatus({ status: "shortlist" });
                handleShort(jobDet._id);
              }}
            >
              Short List
            </MenuItem>
            <MenuItem
              onClick={() => {
                setStatus({ status: "rejected" });
                handleReject(jobDet._id);
              }}
            >
              Reject
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      <Box sx={styles.locappl}>
        <Box sx={styles.locmain}>
          <LocationOnOutlinedIcon sx={{ color: "#9197B3" }} />
          {single &&
            single.resume.country.map((coun) => (
              <Typography key={coun.id} variant="body1" sx={styles.roleloc}>
                {coun.country}
              </Typography>
            ))}
        </Box>
        <Box>
          <Typography variant="body2" sx={styles.applytxt2}>
            Applied {moment(jobDet && jobDet.createdAt).fromNow()}
          </Typography>
        </Box>
      </Box>
      <Button
        sx={styles.profbtn}
        onClick={() => {
          handleProfile(single._id);
        }}
      >
        See full profile
      </Button>
      <Divider />
    </>
  );
}
