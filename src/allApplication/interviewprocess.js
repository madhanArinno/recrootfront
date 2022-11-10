import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { styles } from "./allapplicationstyle";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import FormHelperText from "@mui/material/FormHelperText";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { interview, setinterview } from "../slices/interviewslice";
import moment from "moment";
import { MobileTimePicker } from "@mui/x-date-pickers";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { TIME_ZONES } from "../constants";

var evnets = [
  "Individual interview",
  "Group interview",
  "Panel interview",
  "Technical interview",
  "Multiple-round interview",
  "Stress Interview",
  "Informational interview",
  "Case interview",
  "Competency-based interview",
  "Behavioral interview",
  "Hiring manager interview ",
  "Second Interview",
  "Final interview",
  "Unstructured interview",
  "Structured interview",
  "Informal interview",
];

export function InterviewProcess() {
  const sear = useSelector((state) => state.sinterview.scheduleinterview);
  const single = useSelector((state) => state.apply.single);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("User"));

  const [Time, setTime] = useState(
    sear._id === undefined
      ? {
          day: new Date(),
          canditateId: single.candidateId,
          companyId: user.User.companyId,
          jobId: single.jobId,
          time: moment(new Date()).format(),
          duration: "",
          zone: "",
          event: "",
          subject: "",
          meetlink: "",
        }
      : {
          day: sear.day,
          canditateId: sear.canditateId,
          companyId: sear.companyId,
          jobId: sear.jobId,
          time: sear.time,
          duration: sear.duration,
          zone: sear.zone,
          event: sear.event,
          subject: sear.subject,
          meetlink: sear.meetlink,
          _id: sear._id,
        }
  );
  const [values, setValue] = useState();
  const [timeErrorText, setTimeErrorText] = useState("");
  const [durationErrorText, setDurationErrorText] = useState("");
  const [zoneErrorText, setZoneErrorText] = useState("");
  const [eventErrorText, setEventErrorText] = useState("");
  const [subjectErrorText, setSubjectErrorText] = useState("");
  const [meetText, setMeetText] = useState("");

  const handleChange = (newValue) => {
    var date = newValue,
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    setValue([date.getFullYear(), mnth, day].join("-"));
    setTime({ ...Time, day: [date.getFullYear(), mnth, day].join("-") });
    dispatch(
      interview({ ...Time, day: [date.getFullYear(), mnth, day].join("-") })
    );
  };

  const handleChange1 = (event) => {
    const value = event.target.value;
    setTime({
      ...Time,
      [event.target.name]: value,
    });
    dispatch(interview({ ...Time, [event.target.name]: value }));

    Time.date = values;
  };
  const handleChangeTime = (event) => {
    setTime({
      ...Time,
      time: moment(event).format(),
    });
    dispatch(interview({ ...Time, time: moment(event).format() }));
  };

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

  const onSubmit = (e) => {
    e.preventDefault();

    if (!Time.time) {
      setTimeErrorText("Please Enter time");
    } else {
      setTimeErrorText("");
    }
    if (!Time.duration) {
      setDurationErrorText("Please Enter duration");
    } else {
      setDurationErrorText("");
    }
    if (!Time.zone) {
      setZoneErrorText("Please Enter Time Zone");
    } else {
      setZoneErrorText("");
    }
    if (!Time.event) {
      setEventErrorText("Please Enter Event Type");
    } else {
      setEventErrorText("");
    }

    if (!Time.subject) {
      setSubjectErrorText("Please Enter Subject");
    } else {
      setSubjectErrorText("");
    }
    if (!Time.meetlink) {
      setMeetText("Please Enter Meet Link");
    } else {
      setMeetText("");
    }
    if (
      Time.time !== "" &&
      Time.duration !== "" &&
      Time.zone !== "" &&
      Time.event !== "" &&
      Time.subject !== "" &&
      Time.meetlink !== ""
    ) {
      if (!sear._id) {
        axios
          .post("http://localhost:3000/api/addinterview", Time, {
            headers: { "x-access-token": `${user.token}` },
          })
          .then((data) => {
            notify("Interview Was Added Succesfullfy");
            navigate("/employerhome/schedule");
          })
          .catch((err) => {
            console.warn(err);
          });
      } else {
        axios
          .post("http://localhost:3000/api/updateInterview", Time, {
            headers: { "x-access-token": `${user.token}` },
          })
          .then((data) => {
            notify("Interview Was Updated Succesfullfy");
            navigate("/employerhome/schedule");
            dispatch(setinterview({ search: [] }));
          })
          .catch((err) => {
            console.warn(err);
          });
      }
    }
  };

  return (
    <form>
      <Box style={{ border: "1px solid #cacaca", borderRadius: "10px" }}>
        <Box>
          <Typography variant="h5" sx={styles.addtxt}>
            Schedule an Event
          </Typography>
          <Box sx={styles.inputgrp}>
            <Box sx={styles.infofldloc}>
              <Typography sx={styles.sectxtloca}>Date</Typography>
              <Box>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    label="Select Date"
                    inputFormat="MM/dd/yyyy"
                    value={Time.day}
                    name="day"
                    onChange={handleChange}
                    renderInput={(params) => (
                      <TextField {...params} sx={styles.naminput} />
                    )}
                  />
                </LocalizationProvider>
              </Box>
            </Box>
            <Box sx={styles.infofldloc}>
              <Typography sx={styles.sectxtloca}>Time</Typography>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MobileTimePicker
                  label="Select Time"
                  value={Time.time}
                  onChange={(e) => handleChangeTime(e)}
                  renderInput={(params) => (
                    <TextField
                      error={!!timeErrorText}
                      helperText={timeErrorText}
                      sx={styles.naminput}
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider>
            </Box>
            <Box sx={styles.infofldloc}>
              <Typography sx={styles.sectxtloca}>Duration</Typography>
              <TextField
                InputLabelProps={{ style: { color: "black" } }}
                sx={styles.naminput}
                id="outlined-basic"
                label="Enter Duration (Mins)"
                value={Time.duration}
                type="number"
                name="duration"
                placeholder="Enter Duration"
                variant="outlined"
                onChange={handleChange1}
                error={!!durationErrorText}
                helperText={durationErrorText}
              />
            </Box>
            <Box sx={styles.infofldloc}>
              <Typography sx={styles.sectxtloca}>Select Time Zone</Typography>
              <FormControl>
                <InputLabel
                  id="demo-simple-select-label"
                  style={{ marginLeft: "40px" }}
                >
                  Select Time Zone
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Time.zone}
                  name="zone"
                  label="Select Time Zone"
                  sx={styles.naminput1}
                  onChange={handleChange1}
                  error={!!zoneErrorText}
                >
                  {TIME_ZONES.map((zones, ind) => (
                    <MenuItem key={ind} value={zones}>
                      {zones}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText sx={styles.helpertext}>
                  {zoneErrorText}
                </FormHelperText>
              </FormControl>
            </Box>

            <Box sx={styles.infofldloc}>
              <Typography sx={styles.sectxtloca}>Event Type</Typography>
              <FormControl>
                <InputLabel
                  id="demo-simple-select-label"
                  style={{ marginLeft: "40px" }}
                >
                  Select Event Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Time.event}
                  name="event"
                  label="Select Event Type"
                  sx={styles.naminput1}
                  onChange={handleChange1}
                  error={!!eventErrorText}
                >
                  {evnets.map((evnt, ind) => (
                    <MenuItem key={ind} value={evnt}>
                      {evnt}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText sx={styles.helpertext}>
                  {eventErrorText}
                </FormHelperText>
              </FormControl>
            </Box>
            <Box sx={styles.infofldloc}>
              <Typography sx={styles.sectxtloca}>Subject</Typography>
              <TextField
                InputLabelProps={{ style: { color: "black" } }}
                sx={styles.naminput}
                id="outlined-basic"
                value={Time.subject}
                name="subject"
                label="Subject here"
                placeholder="Enter City"
                variant="outlined"
                onChange={handleChange1}
                error={!!subjectErrorText}
                helperText={subjectErrorText}
              />
            </Box>
          </Box>
        </Box>
        <Box sx={styles.infofldloc2}>
          <Typography sx={styles.sectxtloca}>Meeting Link</Typography>
          <TextField
            InputLabelProps={{ style: { color: "black" } }}
            sx={styles.naminput2}
            id="outlined-basic"
            value={Time.meetlink}
            fullWidth
            name="meetlink"
            label="Meeting Link"
            placeholder="Enter City"
            variant="outlined"
            onChange={handleChange1}
            error={!!meetText}
            helperText={meetText}
          />
        </Box>
        <Divider />

        <Box
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            padding: "24px 24px 20px 0",
          }}
        >
          {!sear._id ? (
            <Button variant="contained" onClick={onSubmit}>
              Submit
            </Button>
          ) : (
            <Button variant="contained" onClick={onSubmit}>
              Save
            </Button>
          )}
        </Box>
      </Box>
    </form>
  );
}
