import {
  Avatar,
  Button,
  Card,
  Dialog,
  Divider,
  Grid,
  IconButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styles } from "./profilestyle";
import { Resumes } from "./Resumes";
import { Personaldetails } from "./Personaldetails";
import { Workexperience } from "./Workexperience";
import { Skills } from "./Skills";
import { Education } from "./Education";
import { Valueadd } from "./Valueadd";
import EditRounded from "@mui/icons-material/EditRounded";
import { UploadPhoto } from "./UploadPhoto";
import { useSelector, useDispatch } from "react-redux";
import { AddPhotoAndThenGet, retrievePersonal } from "../slices/personal";
import { toast } from "react-toastify";
import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { logout } from "../slices/auth";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function Profilemain() {
  const [value, setValue] = React.useState(0);
  let navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    dispatch(retrievePersonal())
      .then((res) => {
        if (res.error.message === "Request failed with status code 401") {
          dispatch(logout()).then(() => {
            navigate("/signin", { state: true });
          });
        }
      })
      .catch((error) => {
        if (error.message === "Request failed with status code 401") {
          navigate("/signin", { state: true });
        }
      });
  }, [dispatch, navigate]);

  const users = useSelector((state) => state.personal.data);
  const photoss = useSelector(
    (state) => state.personal.data.profpicFileLocation
  );
  const country = useSelector((state) => state.personal.data.resume);

  const [open, setOpen] = React.useState(false);
  const [photo, setPhoto] = React.useState("");
  const [srcsjjj, setSrcsjjj] = useState("");

  // const srcsjjj = ` http://localhost:3000/api/openProfpic?photo=${photoss.photo}`;

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("User"));
    loggedInUser.User.profpicFileLocation.photo = photoss && photoss.photo;
    localStorage.setItem("User", JSON.stringify(loggedInUser));
    if (photoss === undefined) {
    } else {
      setSrcsjjj(
        `http://localhost:3000/api/openProfpic?photo=${photoss.photo}`
      );
    }
  }, [photoss]);
  const [fileNames, setFileNames] = useState("");

  Navbar(photoss);
  const handleChangePhoto = (file) => {
    setPhoto(file);
    setFileNames(file.name);
  };

  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");

  const Edit = (photo) => {
    dispatch(AddPhotoAndThenGet(photo)).then(
      setTimeout(() => {
        dispatch(retrievePersonal());
      }, 1500)
    );
    setFullWidth(true);
    setMaxWidth("sm");
  };

  const notify = (Add) =>
    toast.success(Add, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <Grid
      container
      spacing={2}
      sx={{
        justifyContent: "space-around",
        position: "relative",
        top: "-140px",
      }}
    >
      <Grid item lg={4} xs={12}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Card sx={{ width: { sm: "465px", xs: "300px" } }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <>
                <Avatar
                  sx={{ width: 140, height: 140, mt: "40px" }}
                  src={srcsjjj}
                />
                <IconButton
                  sx={{
                    position: "relative",
                    top: "-36px",
                    left: "34px",
                    backgroundColor: "#4fa9ff",
                  }}
                  onClick={() => {
                    handleClickOpen();
                  }}
                >
                  <EditRounded sx={{ color: "#ffff" }} />
                </IconButton>
                <Typography
                  variant="h5"
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: 700,
                    fontSize: "32px",
                    lineHeight: "37px",
                    textAlign: "center",
                    width: { sm: "400px", xs: "200px" },
                  }}
                >
                  {users && users.firstName} {users && users.lastName}
                </Typography>
                {country &&
                  country.country.map((country) => (
                    <Typography
                      variant="h6"
                      sx={{
                        textTransform: "capitalize",
                        fontWeight: 700,
                        fontSize: "20px",
                        lineHeight: "23px",
                      }}
                    >
                      {" "}
                      {country.country}
                    </Typography>
                  ))}
              </>
            </Box>

            <Box>
              <Typography
                variant="h5"
                sx={{
                  textAlign: "center",
                  p: "10px",
                  background: "#f5f5f5",
                  mt: "10px",
                  mb: "10px",
                  borderLeft: "4px solid #4fa9ff",
                  fontWeight: 700,
                  fontSize: "20px",
                  lineHeight: "30px",
                }}
              >
                My profile
              </Typography>
            </Box>
            <Dialog
              fullWidth={fullWidth}
              maxWidth={maxWidth}
              open={open}
              onClose={handleClose}
            >
              <Box sx={{ p: "40px" }}>
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Edit Profile Photo
                </Typography>
                <UploadPhoto handleChange={handleChangePhoto} />
                {photo !== undefined ? (
                  <>
                    {" "}
                    <Typography variant="h6">File Name : </Typography>
                    <Typography variant="h7">{fileNames}</Typography>
                  </>
                ) : (
                  ""
                )}
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    variant="contained"
                    sx={{ mt: "10px", backgroundColor: "#4fa9ff" }}
                    onClick={() => {
                      Edit(photo);
                      handleClose();
                      notify("Your Profile Picture Was Updated");
                    }}
                  >
                    save
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ mt: "10px", ml: "5px", color: "#4fa9ff" }}
                    onClick={() => {
                      handleClose();
                    }}
                  >
                    Cancel
                  </Button>
                </Box>
              </Box>
            </Dialog>
          </Card>
        </Box>
      </Grid>

      <Grid item lg={7} xs={12} sm={12}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Card sx={styles.card} variant="outlined">
            <Tabs
              value={value}
              sx={{
                "& .after": {
                  color: "black",
                },
              }}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              aria-label="scrollable auto tabs example"
              onChange={handleChange}
            >
              <Tab
                label={<span style={styles.label}>Resumes</span>}
                {...a11yProps(0)}
              />
              <Tab
                label={<span style={styles.label}>Personal Details</span>}
                {...a11yProps(1)}
              />
              <Tab
                label={<span style={styles.label}>Work Experience</span>}
                {...a11yProps(2)}
              />
              <Tab
                label={<span style={styles.label}>Skills</span>}
                {...a11yProps(3)}
              />
              <Tab
                label={<span style={styles.label}>Education</span>}
                {...a11yProps(4)}
              />
              <Tab
                label={<span style={styles.label}>Value Added Info</span>}
                {...a11yProps(5)}
              />
            </Tabs>
            <Divider />
            <TabPanel value={value} index={0}>
              <Resumes />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Personaldetails />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Workexperience />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Skills />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Education />
            </TabPanel>
            <TabPanel value={value} index={5}>
              <Valueadd />
            </TabPanel>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}
