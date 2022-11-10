import {
  Autocomplete,
  Button,
  Card,
  Chip,
  Dialog,
  Grid,
  Stack,
  Tooltip,
} from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styles } from "./profilestyle";
import IconButton from "@mui/material/IconButton";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import CardContent from "@mui/material/CardContent";
import { PersonalCard } from "../resume/resumeTwoComponen/PersonalCard";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  EditPersonalandGet,
  retrievePersonal,
  editPersonalsName,
} from "../slices/personal";
import TextField from "@mui/material/TextField";
import { logout } from "../slices/auth";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { NEUTRAL } from "../Theme/Colors";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import TranslateIcon from "@mui/icons-material/Translate";
import PersonIcon from "@mui/icons-material/Person";
import PublicIcon from "@mui/icons-material/Public";
import FlagIcon from "@mui/icons-material/Flag";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { LANGUAGES } from "../constants";

export function Personaldetails() {
  const users = useSelector((state) => state.personal.data.resume);
  const country = users && users.country;
  const nationality = users && users.nationality;
  const rights = users && users.countrieswithworkingRights;
  const availablity = users && users.availableToWork;

  let dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    dispatch(retrievePersonal());
  }, [dispatch]);

  const [datas, setDatas] = useState({
    country: "",
    nationality: "",
    countrieswithworkingRights: "",
    availablity: "",
  });

  const personalDetails = useSelector(
    (state) => state.personal.personalDetails
  );
  const names = useSelector((state) => state.personal.data);

  useEffect(() => {
    if (country !== null && country !== undefined) {
      setDatas({
        country: country,
        nationality: nationality,
        countrieswithworkingRights: rights,
        availablity: availablity,
      });
    }
  }, [availablity, country, nationality, rights]);

  const handleEdit = (personalDetails) => {
    dispatch(EditPersonalandGet(personalDetails))
      .then((res) => {
        if (res.error !== undefined) {
          res.error.message === "Request failed with status code 401" ||
          "Request failed with status code 403"
            ? dispatch(logout()).then(() => {
                navigate("/signin", { state: true });
              })
            : navigate(1);
        } else {
          notify("Your Information Was Edited");
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

  const [open, setOpen] = React.useState(false);
  const [openP, setOpenP] = React.useState(false);

  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpenp = () => {
    setOpenP(true);
  };

  const handleClose = () => {
    setOpen(false);
    setMaxWidth("sm");
    setFullWidth(true);
  };
  const handleClosep = () => {
    dispatch(retrievePersonal());
    setOpenP(false);
  };
  const notify = (Add) =>
    toast.success(Add, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  useEffect(() => {
    setNamen({
      firstName: names.firstName,
      lastName: names.lastName,
      about: names.about,
      languages: users.languages,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [names]);

  const [namen, setNamen] = useState({
    firstName: names.firstName,
    lastName: names.lastName,
    about: names.about,
    languages: [],
  });
  const handleChangeName = (e) => {
    let { name, value } = e.target;
    setNamen({
      ...namen,
      [name]: value,
    });
  };
  const handleSubmit = (namen, e) => {
    e.preventDefault();
    dispatch(editPersonalsName(namen))
      .then((res) => {
        if (res.error !== undefined) {
          res.error.message === "Request failed with status code 401" ||
          "Request failed with status code 403"
            ? dispatch(logout()).then(() => {
                navigate("/signin", { state: true });
              })
            : navigate(1);
        } else {
          notify("Your Information Was Edited");
        }
      })
      .catch((error) => {
        if (
          error.message === "Request failed with status code 401" ||
          "Request failed with status code 403"
        ) {
          navigate("/signin", { state: true });
        }
        console.warn(error, "error");
      });
  };

  const handleChangeChip = (event) => {
    setNamen({ ...namen, languages: event });
  };

  return (
    <>
      <Box sx={{ pb: "10px" }}>
        <Grid container spacing={2}>
          <Grid item md={12} xs={12}>
            <Card variant="outlined">
              <Box sx={styles.personal}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 400,
                    fontSize: "19px",
                  }}
                >
                  Personal Information
                </Typography>
                <Tooltip title="Edit">
                  <IconButton
                    onClick={handleClickOpenp}
                    sx={{ color: NEUTRAL }}
                  >
                    <EditRoundedIcon />
                  </IconButton>
                </Tooltip>
              </Box>
              <CardContent sx={styles.content}>
                <Stack direction={"row"} spacing={3}>
                  <PersonIcon />
                  <Typography variant="subtitle1">
                    Name : {namen.firstName} {namen.lastName}
                  </Typography>
                </Stack>
                <Stack direction={"row"} spacing={3}>
                  <AccountBoxIcon />
                  <Typography variant="subtitle1">
                    About : {namen.about}
                  </Typography>
                </Stack>
                <Stack direction={"row"} spacing={3}>
                  <TranslateIcon />
                  <Typography variant="subtitle1">
                    Languages :
                    {namen &&
                      namen.languages.map(
                        (lang, index) => (index ? "," : " ") + lang
                      )}
                  </Typography>
                </Stack>

                {/* <Typography variant='h6'sx={{fontWeight:'400'}}>
                   Number : {names.resume.mobileNumber}
                  </Typography> */}
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={12} xs={12}>
            <Card variant="outlined">
              <Box sx={styles.personal}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 400,
                    fontSize: "19px",
                  }}
                >
                  Essential Information
                </Typography>
                <Tooltip title="Edit">
                  <IconButton onClick={handleClickOpen} sx={{ color: NEUTRAL }}>
                    <EditRoundedIcon />
                  </IconButton>
                </Tooltip>
              </Box>
              <CardContent sx={{ mb: "58px" }}>
                <Stack direction={"row"} spacing={3}>
                  <PublicIcon />
                  <Typography variant="subtitle1">
                    Country :
                    {country.length === 0 ? (
                      <span
                        style={{
                          fontWeight: 600,
                          fontSize: "18px",
                          color: "#fe7171",
                        }}
                      >
                        No Data Provided
                      </span>
                    ) : (
                      country.map((data, index) => {
                        return <>{(index ? "," : " ") + data.country}</>;
                      })
                    )}
                  </Typography>
                </Stack>
                <Stack direction={"row"} spacing={3}>
                  <FlagIcon />
                  <Typography variant="subtitle1">
                    Nationality :
                    {nationality.length === 0 ? (
                      <span
                        style={{
                          fontWeight: 600,
                          fontSize: "18px",
                          color: "#fe7171",
                        }}
                      >
                        No Data Provided
                      </span>
                    ) : (
                      nationality.map((data, index) => {
                        return <>{(index ? "," : " ") + data.country}</>;
                      })
                    )}
                  </Typography>
                </Stack>
                <Stack direction={"row"} spacing={3}>
                  <BusinessCenterIcon />
                  <Typography variant="subtitle1">
                    Country With Working rights :
                    {rights.length === 0 ? (
                      <span
                        style={{
                          fontWeight: 600,
                          fontSize: "18px",
                          color: "#fe7171",
                        }}
                      >
                        No Data Provided
                      </span>
                    ) : (
                      rights.map((data, index) => {
                        return <>{(index ? "," : " ") + data.country}</>;
                      })
                    )}
                  </Typography>
                </Stack>

                <Stack direction={"row"} spacing={3}>
                  <EventAvailableIcon />
                  <Typography variant="subtitle1">
                    Available days to work :
                    {availablity.days.length === 0 ? (
                      <span
                        style={{
                          fontWeight: 600,
                          fontSize: "18px",
                          color: "#fe7171",
                        }}
                      >
                        No Data Provided
                      </span>
                    ) : (
                      availablity &&
                      availablity.days.map((data, index) => (
                        <>{(index ? "," : " ") + data}</>
                      ))
                    )}
                  </Typography>
                </Stack>
                <Stack direction={"row"} spacing={3}>
                  <CalendarMonthIcon />
                  {availablity.fromDate === undefined ? (
                    <>
                      <Typography variant="subtitle1">
                        Available duration:
                        <span
                          style={{
                            fontWeight: 600,
                            fontSize: "18px",

                            color: "#fe7171",
                          }}
                        >
                          No Data Provided
                        </span>
                      </Typography>
                    </>
                  ) : (
                    <>
                      <Typography variant="body1" gutterBottom>
                        Available duration:
                        {moment(availablity && availablity.fromDate).format(
                          "L"
                        )}{" "}
                        to{" "}
                        {moment(availablity && availablity.toDate).format("L")}
                      </Typography>
                    </>
                  )}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        {/* Dialogs */}
        <Dialog
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          open={openP}
          onClose={handleClosep}
        >
          <Box sx={{ p: "20px" }}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Edit Personal Details
            </Typography>
            <form
              onSubmit={(e) => {
                handleSubmit(namen, e);
                handleClosep();
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  mt: "15px",
                }}
              >
                <TextField
                  required
                  id="duaration"
                  label="First Name"
                  name="firstName"
                  value={namen.firstName}
                  autoComplete="user-name"
                  onChange={(e) => {
                    handleChangeName(e);
                  }}
                  error={namen.firstName === "" ? true : false}
                  helperText={
                    namen.firstName === "" ? "Please Provide Your Name" : ""
                  }
                />
                <TextField
                  required
                  id="duaration"
                  label="Last Name"
                  name="lastName"
                  value={namen.lastName}
                  autoComplete="user-name"
                  onChange={(e) => {
                    handleChangeName(e);
                  }}
                  error={namen.lastName === "" ? true : false}
                  helperText={
                    namen.lastName === "" ? "Please Provide Your Name" : ""
                  }
                />
                <TextField
                  autoComplete="given-name"
                  name="about"
                  fullWidth
                  id="about"
                  label="About"
                  autoFocus
                  multiline
                  rows={4}
                  value={namen.about}
                  onChange={(e) => {
                    handleChangeName(e);
                  }}
                />
                <Autocomplete
                  fullWidth
                  multiple
                  id="fixed-tags-demo"
                  value={namen.languages}
                  onChange={(event, newValue) => {
                    handleChangeChip(newValue);
                  }}
                  options={LANGUAGES}
                  getOptionLabel={(option) => option}
                  renderTags={(tagValue, getTagProps) =>
                    tagValue.map((option, index) => (
                      <Chip label={option} {...getTagProps({ index })} />
                    ))
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Languages"
                      placeholder="Languages"
                    />
                  )}
                />
                {/* <TextField

            id="duaration"
            label="Mobile Number"
            name="number"
            type="number"
            value={namen.number}
            autoComplete="user-name"
            onChange={(e)=>{handleChangeName(e)}}
            error={namen.number === "" ? true : false}
            helperText={namen.number === "" ? "Please Provide Your Mobile Number" : ''}         
        /> */}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: "10px",
                  gap: "5px",
                }}
              >
                <Button
                  variant="outlined"
                  onClick={() => {
                    handleClosep();
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#4fa9ff" }}
                  type="submit"
                >
                  Save
                </Button>
              </Box>
            </form>
          </Box>
        </Dialog>

        <Dialog
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          open={open}
          onClose={handleClose}
        >
          <Box sx={{ p: "20px" }}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Edit Essential Information
            </Typography>
            <PersonalCard
              name={datas === null && datas === undefined ? null : datas}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: "20px",
                gap: "5px",
              }}
            >
              <Button
                variant="outlined"
                onClick={() => {
                  handleClose();
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#4fa9ff" }}
                onClick={() => {
                  handleEdit(personalDetails);
                  handleClose();
                }}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Dialog>
        {/* Dialogs ends here */}
      </Box>
    </>
  );
}
