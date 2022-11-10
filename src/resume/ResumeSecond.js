import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { Card, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Ellipse from "./logo/Ellipse30.png";
import logo from "./logo/logo.png";
import { ColorButton } from "./Resume";
import Group38 from "./logo/Group38.png";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import { personalDetails } from "./resumeTwoComponentsForLogIn/personalDetails";
import { workExperience } from "./resumeTwoComponentsForLogIn/workExperience";
import { skills } from "./resumeTwoComponentsForLogIn/skills";
import { educationFunction } from "./resumeTwoComponentsForLogIn/educationFunction";
import { projectsFunction } from "./resumeTwoComponentsForLogIn/projectsFunction";
import { trainingFunction } from "./resumeTwoComponentsForLogIn/trainingFunction";
import { socialFunction } from "./resumeTwoComponentsForLogIn/socialFunction";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./uploadStyle.css";
import TextField from "@mui/material/TextField";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CoverLetter from "./CoverLetter";
import { useDispatch, useSelector } from "react-redux";
import { updateFinalResumeForm } from "../slices/UploadingResume";
import { CertificateFunc } from "./resumeTwoComponentsForLogIn/certificateFunction";
import { languageFunction } from "./languageFunction";
import { useTheme } from "styled-components";
import { COUNTRIES } from "../constants";

export const Input = styled("input")({
  display: "none",
});

const backgroundImages = {
  paperContainer: {
    backgroundImage: `url(${Ellipse})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    height: "auto",
  },
};

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

const ResumeSecond = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [age, setAge] = React.useState("");
  const [value, setValue] = React.useState(0);

  const [valueTwo, setValueTwo] = React.useState(new Date());
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const createResumeState = useSelector((state) => state.resume.createResume);

  const [coverFileLocation, setcoverFileLocation] = useState([]);

  const [collapse, setCollapse] = useState(false);
  const [work, setWork] = useState(false);
  const [skill, setSkill] = useState(false);
  const [persana, setPersana] = useState(false);
  const [education, setEducation] = useState(false);
  const [projects, setProjects] = useState(false);
  const [training, setTraining] = useState(false);
  const [certificate, setCertificate] = useState(false);
  const [social, setSocial] = useState(false);
  const [cover, setCover] = useState(false);

  const nationalityLIst = [
    "Afghan",
    "Albanian",
    "Algerian",
    "American",
    "Andorran",
    "Angolan",
    "Antiguans",
    "Argentinean",
    "Armenian",
    "Australian",
    "Austrian",
    "Azerbaijani",
    "Bahamian",
    "Bahraini",
    "Bangladeshi",
    "Barbadian",
    "Barbudans",
    "Batswana",
    "Belarusian",
    "Belgian",
    "Belizean",
    "Beninese",
    "Bhutanese",
    "Bolivian",
    "Bosnian",
    "Brazilian",
    "British",
    "Bruneian",
    "Bulgarian",
    "Burkinabe",
    "Burmese",
    "Burundian",
    "Cambodian",
    "Cameroonian",
    "Canadian",
    "Cape Verdean",
    "Central African",
    "Chadian",
    "Chilean",
    "Chinese",
    "Colombian",
    "Comoran",
    "Congolese",
    "Costa Rican",
    "Croatian",
    "Cuban",
    "Cypriot",
    "Czech",
    "Danish",
    "Djibouti",
    "Dominican",
    "Dutch",
    "East Timorese",
    "Ecuadorean",
    "Egyptian",
    "Emirian",
    "Equatorial Guinean",
    "Eritrean",
    "Estonian",
    "Ethiopian",
    "Fijian",
    "Filipino",
    "Finnish",
    "French",
    "Gabonese",
    "Gambian",
    "Georgian",
    "German",
    "Ghanaian",
    "Greek",
    "Grenadian",
    "Guatemalan",
    "Guinea-Bissauan",
    "Guinean",
    "Guyanese",
    "Haitian",
    "Herzegovinian",
    "Honduran",
    "Hungarian",
    "I-Kiribati",
    "Icelander",
    "Indian",
    "Indonesian",
    "Iranian",
    "Iraqi",
    "Irish",
    "Israeli",
    "Italian",
    "Ivorian",
    "Jamaican",
    "Japanese",
    "Jordanian",
    "Kazakhstani",
    "Kenyan",
    "Kittian and Nevisian",
    "Kuwaiti",
    "Kyrgyz",
    "Laotian",
    "Latvian",
    "Lebanese",
    "Liberian",
    "Libyan",
    "Liechtensteiner",
    "Lithuanian",
    "Luxembourger",
    "Macedonian",
    "Malagasy",
    "Malawian",
    "Malaysian",
    "Maldivian",
    "Malian",
    "Maltese",
    "Marshallese",
    "Mauritanian",
    "Mauritian",
    "Mexican",
    "Micronesian",
    "Moldovan",
    "Monacan",
    "Mongolian",
    "Moroccan",
    "Mosotho",
    "Motswana",
    "Mozambican",
    "Namibian",
    "Nauruan",
    "Nepalese",
    "New Zealander",
    "Ni-Vanuatu",
    "Nicaraguan",
    "Nigerian",
    "Nigerien",
    "North Korean",
    "Northern Irish",
    "Norwegian",
    "Omani",
    "Pakistani",
    "Palauan",
    "Panamanian",
    "Papua New Guinean",
    "Paraguayan",
    "Peruvian",
    "Polish",
    "Portuguese",
    "Qatari",
    "Romanian",
    "Russian",
    "Rwandan",
    "Saint Lucian",
    "Salvadoran",
    "Samoan",
    "San Marinese",
    "Sao Tomean",
    "Saudi",
    "Scottish",
    "Senegalese",
    "Serbian",
    "Seychellois",
    "Sierra Leonean",
    "Singaporean",
    "Slovakian",
    "Slovenian",
    "Solomon Islander",
    "Somali",
    "South African",
    "South Korean",
    "Spanish",
    "Sri Lankan",
    "Sudanese",
    "Surinamer",
    "Swazi",
    "Swedish",
    "Swiss",
    "Syrian",
    "Taiwanese",
    "Tajik",
    "Tanzanian",
    "Thai",
    "Togolese",
    "Tongan",
    "Trinidadian or Tobagonian",
    "Tunisian",
    "Turkish",
    "Tuvaluan",
    "Ugandan",
    "Ukrainian",
    "Uruguayan",
    "Uzbekistani",
    "Venezuelan",
    "Vietnamese",
    "Welsh",
    "Yemenite",
    "Zambian",
    "Zimbabwean",
  ];

  const { user: currentUser } = useSelector((state) => state.auth);

  const [createResume, setCreateResume] = useState({
    firstName: currentUser.User.firstName,
    lastName: currentUser.User.lastName,
    gender: "",
    language: [],
  });
  const [about, setAbout] = useState("");
  const [availabilityForWork, setaAvailabilityForWork] = useState({
    days: [],
    from: "",
    to: "",
  });

  const [active, setActive] = useState("");
  const handleAbout = (e) => {
    setAbout(e.target.value);
  };
  const handleAvaiulabilityfromDate = (value) => {
    setaAvailabilityForWork({ ...availabilityForWork, from: value });
    setAge("");
  };
  const handleAvailabilityetoDate = (value) => {
    setValueTwo([]);
    setaAvailabilityForWork({ ...availabilityForWork, to: value });
  };

  const handleAvaoilability = (prop) => (event) => {
    setaAvailabilityForWork({ ...createResume, [prop]: event.target.value });
  };
  const [days, setDays] = useState([]);
  const handleAvaoilDays = (event) => {
    const {
      target: { value },
    } = event;
    setDays(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handlePersonalDetailsCountryChangeInput = (id, event) => {
    const newinputPersonalDetailsCountry = inputPersonalDetailsCountry.map(
      (i) => {
        if (id === i.id) {
          i[event.target.name] = event.target.value;
        }
        return i;
      }
    );
    setInputPersonalDetailsCountry(newinputPersonalDetailsCountry);
  };
  const handlePersonalDetailsNationalityChangeInput = (id, event) => {
    const newinputPersonalDetailsNationality = inputPersonalNationality.map(
      (i) => {
        if (id === i.id) {
          i[event.target.name] = event.target.value;
        }
        return i;
      }
    );
    setInputPersonalNationality(newinputPersonalDetailsNationality);
  };

  const handlePersonWorkingRightChangeInput = (id, event) => {
    const newinputCountriesWithWorkingRights =
      inputCountriesWithWorkingRights.map((i) => {
        if (id === i.id) {
          i[event.target.name] = event.target.value;
        }
        return i;
      });
    setInputCountriesWithWorkingRights(newinputCountriesWithWorkingRights);
  };

  const [inputPersonalDetailsCountry, setInputPersonalDetailsCountry] =
    useState([{ id: uuidv4(), country: "" }]);

  const [inputPersonalNationality, setInputPersonalNationality] = useState([
    { id: uuidv4(), country: "" },
  ]);
  const [inputCountriesWithWorkingRights, setInputCountriesWithWorkingRights] =
    useState([{ id: uuidv4(), country: "" }]);

  const handleCountryChange = () => {
    setInputPersonalDetailsCountry([
      ...inputPersonalDetailsCountry,
      { id: uuidv4(), country: "" },
    ]);
  };
  const handleCountryRemove = (id) => {
    let updatedField = [...inputPersonalDetailsCountry].filter(
      (fiel) => fiel.id !== id
    );
    setInputPersonalDetailsCountry(updatedField);
  };
  const handleNationalityChange = () => {
    setInputPersonalNationality([
      ...inputPersonalNationality,
      { id: uuidv4(), country: "" },
    ]);
  };
  const handleNationalityRemove = (id) => {
    let updatedField = [...inputPersonalNationality].filter(
      (fiel) => fiel.id !== id
    );
    setInputPersonalNationality(updatedField);
  };

  const handleCountriesWithWorkingRightChange = () => {
    setInputCountriesWithWorkingRights([
      ...inputCountriesWithWorkingRights,
      { id: uuidv4(), country: "" },
    ]);
  };

  const handleRightsRemove = (id) => {
    let updatedField = [...inputCountriesWithWorkingRights].filter(
      (fiel) => fiel.id !== id
    );
    setInputCountriesWithWorkingRights(updatedField);
  };

  // working details
  const [inputWorkingExperience, setInputWorkingExperience] = useState([
    {
      id: uuidv4(),
      role: "",
      companyName: "",
      experience: "",
      location: "",
      fromDate: "",
      toDate: "",
    },
  ]);

  const handleWorkingExperience = (id, event) => {
    const newinputWorkingExperience = inputWorkingExperience.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });
    setInputWorkingExperience(newinputWorkingExperience);
  };

  const removeWorkingExperience = (id, event) => {
    const newList = inputWorkingExperience.filter((item) => item.id !== id);

    setInputWorkingExperience(newList);
  };

  const handleWorkingExperiencefromDate = (id, value) => {
    const newinputWorkingExperience = inputWorkingExperience.map((i) => {
      if (id === i.id) {
        i["fromDate"] = value;
      }
      return i;
    });
    setInputWorkingExperience(newinputWorkingExperience);
  };
  const handleWorkingExperiencetoDate = (id, value) => {
    const newinputWorkingExperience = inputWorkingExperience.map((i) => {
      if (id === i.id) {
        i["toDate"] = value;
      }
      return i;
    });
    setInputWorkingExperience(newinputWorkingExperience);
  };

  const handleInputWorkingExperience = () => {
    setInputWorkingExperience([
      ...inputWorkingExperience,
      {
        id: uuidv4(),
        role: "",
        companyName: "",
        experience: "",
        location: "",
        fromDate: "",
        toDate: "",
      },
    ]);
  };
  //working experience end

  // Skils card details
  const [inputSkills, setinputSkills] = useState([
    {
      id: uuidv4(),
      skillName: "",
      Experience: "",
      Compitance: "",
    },
  ]);

  const addSkillsUI = () => {
    setinputSkills([
      ...inputSkills,
      {
        id: uuidv4(),
        skillName: "",
        Experience: "",
        Compitance: "",
      },
    ]);
  };

  const handleSkillsInputChange = (id, event) => {
    const newinputSkills = inputSkills.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });
    setinputSkills(newinputSkills);
  };
  const removeSkilld = (id, event) => {
    const newList = inputSkills.filter((item) => item.id !== id);
    setinputSkills(newList);
  };

  //Skills section ends

  //Education section
  const [inputEducatoin, setinputEducatoin] = useState([
    {
      id: uuidv4(),
      degreeName: "",
      toDate: "",
      fromDate: "",
      collegeName: "",
      experience: "",
      state: "",
      country: "",
      graduate: "",
    },
  ]);
  const theme = useTheme();

  const addEducationsUI = () => {
    setinputEducatoin([
      ...inputEducatoin,
      {
        id: uuidv4(),
        degreeName: "",
        toDate: "",
        fromDate: "",
        collegeName: "",
        experience: "",
        state: "",
        country: "",
        graduate: "",
      },
    ]);
  };

  const handleChangeCreateResumeInput = (prop) => (event) => {
    if (event.target.value === "Other") {
      setActive("other");
    }
    if (event.target.value === "Male") {
      setActive("male");
    }
    if (event.target.value === "Female") {
      setActive("female");
    }
    setCreateResume({ ...createResume, [prop]: event.target.value });
  };
  const handleEducationInputChange = (id, event) => {
    const newinputEducatoin = inputEducatoin.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });
    setinputEducatoin(newinputEducatoin);
  };
  const removeEducation = (id, event) => {
    const newList = inputEducatoin.filter((item) => item.id !== id);

    setinputEducatoin(newList);
  };

  const handleEducationfromDate = (id, value) => {
    const newinputEducatoin = inputEducatoin.map((i) => {
      if (id === i.id) {
        i["fromDate"] = value;
      }
      return i;
    });
    setinputEducatoin(newinputEducatoin);
  };

  const handleEducationtoDate = (id, value) => {
    const newinputEducatoin = inputEducatoin.map((i) => {
      if (id === i.id) {
        i["toDate"] = value;
      }
      return i;
    });
    setinputEducatoin(newinputEducatoin);
  };
  //education section end

  //projectSectionStart
  const [inputprojects, setinputprojects] = useState([
    {
      id: uuidv4(),
      portafolioLink: "",
      ProjectName: "",
      Organization: "",
      Description: "",
    },
  ]);

  const insertInputProjectsChanges = (id, event) => {
    const newinputprojects = inputprojects.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });
    setinputprojects(newinputprojects);
  };

  const removeProjects = (id, event) => {
    const newList = inputprojects.filter((item) => item.id !== id);
    setinputprojects(newList);
  };

  const addProjectUI = () => {
    setinputprojects([
      ...inputprojects,
      {
        id: uuidv4(),
        portafolioLink: "",
        ProjectName: "",
        Organization: "",
        Description: "",
      },
    ]);
  };

  //Project Ends hear
  const [trannigInput, setTrannigInput] = useState([
    {
      id: uuidv4(),
      title: "",
      instituete: "",
      fromDate: "",
      toDate: "",
    },
  ]);

  const [personName, setPersonName] = React.useState([]);
  const handleChangeChip = (prop) => (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    setCreateResume({ ...createResume, language: event.target.value });
  };
  const addTraningUi = () => {
    setTrannigInput([
      ...trannigInput,
      {
        id: uuidv4(),
        title: "",
        instituete: "",
        fromDate: "",
        toDate: "",
      },
    ]);
  };

  const handleTraningfromDate = (id, value) => {
    const newtrannigInput = trannigInput.map((i) => {
      if (id === i.id) {
        i["fromDate"] = value;
      }
      return i;
    });
    setTrannigInput(newtrannigInput);
  };
  const handleTraningtoDate = (id, value) => {
    const newtrannigInput = trannigInput.map((i) => {
      if (id === i.id) {
        i["toDate"] = value;
      }
      return i;
    });
    setTrannigInput(newtrannigInput);
  };

  const insertTraningChanges = (id, event) => {
    const newtrannigInput = trannigInput.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });
    setTrannigInput(newtrannigInput);
  };
  const [inputCertificate, setInputCertificate] = useState([
    {
      id: uuidv4(),
      title: "",
      organization: "",
      certificate: [],
    },
  ]);
  const handleCertificate = (e, id) => {
    if (e.target.files !== null) {
      const files = e.target.files[0];
      const newtrannigInput2 = inputCertificate.map((i) => {
        if (id === i.id) {
          i["certificate"] = files;
        }
        return i;
      });

      setInputCertificate(newtrannigInput2);
    } else {
      const newtrannigInput = inputCertificate.map((i) => {
        if (id === i.id) {
          i[e.target.name] = e.target.value;
        }
        return i;
      });
      setInputCertificate(newtrannigInput);
    }
  };

  const removeTraning = (id, event) => {
    const newList = trannigInput.filter((item) => item.id !== id);
    setTrannigInput(newList);
  };

  //projectSectionStart
  const [inputSocialMediaLink, setinputSocialMediaLink] = useState([
    {
      id: uuidv4(),
      title: "",
      socialMediaLink: "",
    },
  ]);

  const addCertUi = () => {
    setInputCertificate([
      ...inputCertificate,
      {
        id: uuidv4(),
        title: "",
        oragnization: "",
        certificate: null,
      },
    ]);
  };
  const removeCert = (id) => {
    const newList = inputCertificate.filter((item) => item.id !== id);
    setInputCertificate(newList);
  };
  const inputSocialMediaLinkChanges = (id, event) => {
    const newinputSocialMediaLink = inputSocialMediaLink.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });
    setinputSocialMediaLink(newinputSocialMediaLink);
  };

  const removeSocialLink = (id, event) => {
    const newList = inputSocialMediaLink.filter((item) => item.id !== id);
    setinputSocialMediaLink(newList);
  };

  const addSocialLink = () => {
    setinputSocialMediaLink([
      ...inputSocialMediaLink,
      {
        id: uuidv4(),
        title: "",
        socialMediaLink: "",
      },
    ]);
  };

  const handleFirstresumeSubmit = async (e) => {
    dispatch(
      updateFinalResumeForm({
        about,
        inputPersonalDetailsCountry,
        inputSocialMediaLink,
        inputPersonalNationality,
        availabilityForWork,
        inputWorkingExperience,
        inputSkills,
        inputCountriesWithWorkingRights,
        inputEducatoin,
        inputprojects,
        trannigInput,
        coverFileLocation,
        days,
        inputCertificate,
        createResume,
      })
    );
    navigate("/", { replace: false });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Grid container style={backgroundImages.paperContainer}>
        <Grid container>
          <Box
            sx={{
              marginLeft: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{
                alignSelf: "baseline",
                margin: "24px 0px 10px 50px",
                width: "174px",
              }}
            />
          </Box>
        </Grid>
        <Container>
          <Grid container height="800px">
            <Grid
              item
              xs={12}
              sm={12}
              md={7}
              sx={{
                backgroundRepeat: "no-repeat",
                backgroundColor: "#FFF",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderLeft: "1px solid #4F9AFF",
                borderBottom: "1px solid #4F9AFF",
                borderTop: "1px solid #4F9AFF",
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
              }}
            >
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  paddingTop: "35px",
                  fontWeight: 800,
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab
                    label={
                      <span
                        style={{
                          fontWeight: 700,
                          fontSize: "20px",
                          fontFamily: "GreycliffCF-bold",
                          textTransform: "capitalize",
                          color: "#4F9AFF",
                        }}
                      >
                        Upload Resume
                      </span>
                    }
                    {...a11yProps(0)}
                  />
                </Tabs>
              </Box>

              <TabPanel value={value} index={0}>
                {createResumeState === false ? (
                  <React.Fragment>
                    <Grid
                      container
                      spacing={2}
                      sx={{ marginTop: 2, marginBottom: 2 }}
                    >
                      <Card
                        sx={{
                          width: "650px",
                          padding: "15px",
                          boxShadow: "4px 4px 60px rgba(193, 200, 209, 0.25);",
                          borderRadius: "8px",
                          border: "none",
                        }}
                        variant="outlined"
                      >
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            variant="h6"
                            component="h6"
                            color="initial"
                            sx={{
                              color: "#6A6A6A",
                              marginTop: "10px",
                              fontWeight: 800,
                            }}
                          >
                            Mandatory Details
                          </Typography>
                          {persana === false ? (
                            <IconButton
                              onClick={(e) => {
                                setPersana(true);
                              }}
                            >
                              <KeyboardArrowDownIcon />{" "}
                            </IconButton>
                          ) : (
                            <IconButton
                              onClick={(e) => {
                                setPersana(false);
                              }}
                            >
                              {" "}
                              <ExpandLessRoundedIcon />{" "}
                            </IconButton>
                          )}
                        </Grid>
                        {persana === true ? (
                          <React.Fragment>
                            <Grid item xs={12} sm={12}>
                              <Stack direction="row" spacing={2} marginTop={2}>
                                <TextField
                                  autoComplete="given-name"
                                  name="firstName"
                                  required
                                  fullWidth
                                  id="firstName"
                                  label="First Name"
                                  autoFocus
                                  value={createResume.firstName}
                                  onChange={handleChangeCreateResumeInput(
                                    "firstName"
                                  )}
                                />

                                <TextField
                                  required
                                  fullWidth
                                  id="lastName"
                                  label="Last Name"
                                  name="lastName"
                                  autoComplete="family-name"
                                  value={createResume.lastName}
                                  onChange={handleChangeCreateResumeInput(
                                    "lastName"
                                  )}
                                />
                              </Stack>
                            </Grid>
                            <Grid sx={{ marginTop: "15px" }}>
                              <Typography
                                variant="span"
                                component="span"
                                color="initial"
                                sx={{
                                  color: "#6A6A6A",
                                  marginBottom: "10px",
                                  fontWeight: 800,
                                  marginTop: "15px",
                                }}
                              >
                                Gender
                              </Typography>
                              <Stack
                                direction="row"
                                spacing={2}
                                sx={{ marginTop: "20px" }}
                              >
                                <ColorButton
                                  variant="outlined"
                                  size="large"
                                  sx={
                                    active === "male"
                                      ? {
                                          fontWeight: 700,
                                          fontSize: "16px",
                                          textTransform: "capitalize",
                                          fontFamily: "GreycliffCF-Regular",
                                          letterSpacing: "2px",
                                          width: 200,
                                          height: 60,
                                          color: "#FFFF",
                                          backgroundColor: "#4fa9ff",
                                        }
                                      : {
                                          fontWeight: 700,
                                          fontSize: "16px",
                                          textTransform: "capitalize",
                                          fontFamily: "GreycliffCF-Regular",
                                          letterSpacing: "2px",
                                          width: 200,
                                          height: 60,
                                          color: "#4fa9ff",
                                        }
                                  }
                                  value="Male"
                                  onClick={handleChangeCreateResumeInput(
                                    "gender"
                                  )}
                                >
                                  Male
                                </ColorButton>
                                <ColorButton
                                  variant="outlined"
                                  size="large"
                                  sx={
                                    active === "female"
                                      ? {
                                          fontWeight: 700,
                                          fontSize: "16px",
                                          textTransform: "capitalize",
                                          fontFamily: "GreycliffCF-Regular",
                                          letterSpacing: "2px",
                                          width: 200,
                                          height: 60,
                                          color: "#FFFF",
                                          backgroundColor: "#4fa9ff",
                                        }
                                      : {
                                          fontWeight: 700,
                                          fontSize: "16px",
                                          textTransform: "capitalize",
                                          fontFamily: "GreycliffCF-Regular",
                                          letterSpacing: "2px",
                                          width: 200,
                                          height: 60,
                                          color: "#4fa9ff",
                                        }
                                  }
                                  value="Female"
                                  onClick={handleChangeCreateResumeInput(
                                    "gender"
                                  )}
                                >
                                  Female
                                </ColorButton>

                                <ColorButton
                                  variant="outlined"
                                  size="large"
                                  sx={
                                    active === "other"
                                      ? {
                                          fontWeight: 700,
                                          fontSize: "16px",
                                          textTransform: "capitalize",
                                          fontFamily: "GreycliffCF-Regular",
                                          letterSpacing: "2px",
                                          width: 200,
                                          height: 60,
                                          color: "#FFFF",
                                          backgroundColor: "#4fa9ff",
                                        }
                                      : {
                                          fontWeight: 700,
                                          fontSize: "16px",
                                          textTransform: "capitalize",
                                          fontFamily: "GreycliffCF-Regular",
                                          letterSpacing: "2px",
                                          width: 200,
                                          height: 60,
                                          color: "#4fa9ff",
                                        }
                                  }
                                  value="Other"
                                  onClick={handleChangeCreateResumeInput(
                                    "gender"
                                  )}
                                >
                                  Other
                                </ColorButton>
                              </Stack>
                              {languageFunction(
                                personName,
                                handleChangeChip,
                                theme,
                                handleChangeCreateResumeInput,
                                createResume
                              )}
                            </Grid>
                          </React.Fragment>
                        ) : (
                          ""
                        )}
                      </Card>
                    </Grid>
                  </React.Fragment>
                ) : (
                  ""
                )}
                {personalDetails(
                  collapse,
                  setCollapse,
                  age,
                  handleCountryChange,
                  handleCountryRemove,
                  handleNationalityChange,
                  handleNationalityRemove,
                  handleCountriesWithWorkingRightChange,
                  handleRightsRemove,
                  valueTwo,
                  COUNTRIES,
                  nationalityLIst,
                  inputPersonalDetailsCountry,
                  inputPersonalNationality,
                  inputCountriesWithWorkingRights,
                  handlePersonalDetailsCountryChangeInput,
                  handlePersonalDetailsNationalityChangeInput,
                  handlePersonWorkingRightChangeInput,
                  handleAvaoilability,
                  availabilityForWork,
                  handleAvaiulabilityfromDate,
                  handleAvailabilityetoDate,
                  about,
                  handleAbout,
                  handleAvaoilDays,
                  days
                )}
                {workExperience(
                  work,
                  setWork,
                  valueTwo,
                  handleChange,
                  inputWorkingExperience,
                  handleWorkingExperience,
                  handleInputWorkingExperience,
                  handleWorkingExperiencefromDate,
                  handleWorkingExperiencetoDate,
                  removeWorkingExperience
                )}
                {skills(
                  skill,
                  setSkill,
                  inputSkills,
                  addSkillsUI,
                  handleSkillsInputChange,
                  removeSkilld
                )}
                {/* education section */}
                {educationFunction(
                  education,
                  setEducation,
                  age,
                  handleChange,
                  valueTwo,
                  addEducationsUI,
                  inputEducatoin,
                  removeEducation,
                  handleEducationInputChange,
                  handleEducationfromDate,
                  handleEducationtoDate
                )}
                {/* projects section */}
                {projectsFunction(
                  projects,
                  setProjects,
                  valueTwo,
                  handleChange,
                  inputprojects,
                  insertInputProjectsChanges,
                  removeProjects,
                  addProjectUI
                )}
                {/* tranning section */}
                {trainingFunction(
                  training,
                  setTraining,
                  valueTwo,
                  handleChange,
                  trannigInput,
                  handleTraningtoDate,
                  handleTraningfromDate,
                  addTraningUi,
                  insertTraningChanges,
                  removeTraning
                )}
                {/* Certificate section */}

                <>
                  <Grid container spacing={2} sx={{ marginTop: 2 }}>
                    <Card
                      sx={{
                        width: "650px",
                        padding: "15px",
                        boxShadow: "4px 4px 60px rgba(193, 200, 209, 0.25);",
                        borderRadius: "8px",
                        border: "none",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                      }}
                      variant="outlined"
                    >
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          variant="h6"
                          component="h6"
                          color="initial"
                          sx={{
                            color: "#6A6A6A",
                            marginTop: "10px",
                            fontWeight: 800,
                          }}
                        >
                          Certifications
                        </Typography>
                        {certificate === false ? (
                          <IconButton
                            onClick={(e) => {
                              setCertificate(true);
                            }}
                          >
                            <KeyboardArrowDownIcon />{" "}
                          </IconButton>
                        ) : (
                          <IconButton
                            onClick={(e) => {
                              setCertificate(false);
                            }}
                          >
                            {" "}
                            <ExpandLessRoundedIcon />{" "}
                          </IconButton>
                        )}
                      </Grid>

                      {certificate === true ? (
                        <>
                          <Grid item xs={12} sm={12} sx={{ display: "flex" }}>
                            {/* <div class="browse-wrap">
                              <section className="container">
                                <div
                                  {...getRootProps({ className: "dropzone" })}
                                >
                                  <input {...getInputProps()} />
                                  <p>
                                    Drag 'n' drop some files here, or click to
                                    select files
                                  </p>
                                  <em>
                                    (10 files are the maximum number of files
                                    you can drop here)
                                  </em>
                                </div>
                                <aside>
                                  <h4>Accepted files</h4>
                                  <ul>{acceptedFileItems}</ul>
                                </aside>
                              </section>
                            </div>
                            <span class="upload-path"></span> */}

                            {CertificateFunc(
                              inputCertificate,
                              addCertUi,
                              removeCert,
                              handleCertificate
                            )}
                          </Grid>
                        </>
                      ) : (
                        ""
                      )}
                    </Card>
                  </Grid>
                </>
                {/* social media link */}
                {socialFunction(
                  social,
                  setSocial,
                  inputSocialMediaLink,
                  inputSocialMediaLinkChanges,
                  removeSocialLink,
                  addSocialLink
                )}
                {/* Cover Letter */}
                {/* {coverFunction(cover, setCover)} */}
                <>
                  <CoverLetter
                    cover={cover}
                    setCover={setCover}
                    setcoverFileLocation={setcoverFileLocation}
                  ></CoverLetter>
                  {/* <Grid container spacing={2} sx={{ marginTop: 2 }}>
                    <Card
                      sx={{
                        width: "650px",
                        padding: "15px",
                        boxShadow: "4px 4px 60px rgba(193, 200, 209, 0.25);",
                        borderRadius: "8px",
                        border: "none",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                      }}
                      variant="outlined"
                    >
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          variant="h6"
                          component="h6"
                          color="initial"
                          sx={{
                            color: "#6A6A6A",
                            marginTop: "10px",
                            fontWeight: 800,
                          }}
                        >
                          Cover Letter
                        </Typography>
                        {cover === false ? (
                          <IconButton
                            onClick={(e) => {
                              setCover(true);
                            }}
                          >
                            <KeyboardArrowDownIcon />{" "}
                          </IconButton>
                        ) : (
                          <IconButton
                            onClick={(e) => {
                              setCover(false);
                            }}
                          >
                            {" "}
                            <ExpandLessRoundedIcon />{" "}
                          </IconButton>
                        )}
                      </Grid>
                      {cover === true ? (
                        <>
                          <Grid item xs={12} sm={12} sx={{ display: "flex" }}>
                            <div class="browse-wrap">
                              <section className="container">
                                <div
                                  {...getRootPropsCover({
                                    className: "dropzone",
                                  })}
                                >
                                  <input {...getInputPropsCover()} />
                                  <p>
                                    Drag 'n' drop some files here, or click to
                                    select files
                                  </p>
                                  <em>
                                    (10 files are the maximum number of files
                                    you can drop here)
                                  </em>
                                </div>
                                <aside>
                                  <h4>Accepted files</h4>
                                  <ul>{acceptedFileItemsCover}</ul>
                                </aside>
                              </section>
                            </div>
                            <span class="upload-path"></span>
                          </Grid>
                        </>
                      ) : (
                        ""
                      )}
                    </Card>
                  </Grid> */}
                </>
              </TabPanel>
              <Grid
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  marginBottom: 5,
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    fontWeight: 700,
                    width: 220,
                    height: 60,
                    backgroundColor: "#4F9AFF",
                    marginTop: "90px",
                  }}
                  onClick={() => handleFirstresumeSubmit()}
                >
                  Search for jobs
                </Button>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={5}
              sx={{
                backgroundRepeat: "no-repeat",
                backgroundColor: "#4F9AFF",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <img
                src={Group38}
                alt="logo"
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "50%",
                  marginTop: "30%",
                }}
              />
              <Typography
                variant="h5"
                gutterBottom
                component="span"
                //   component="div"
                sx={{
                  paddingLeft: "10%",
                  paddingRight: "10%",
                  color: "#FFF",
                  fontWeight: 700,
                  fontSize: "24px",
                  fontFamily: "GreycliffCF-bold",
                  display: "flex",
                }}
              >
                Uploading your CV makes it easy for you to apply for jobs
              </Typography>

              <List
                sx={{
                  // paddingLeft: "10%",
                  // paddingRight: "10%",
                  color: "#FFF",
                  fontWeight: 800,
                }}
              >
                <ListItem>
                  {/* <PublishedWithChangesIcon></PublishedWithChangesIcon>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" /> */}
                  <ListItemIcon>
                    <PublishedWithChangesIcon sx={{ color: "#FFF" }} />
                  </ListItemIcon>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "16px",
                      fontFamily: "GreycliffCF-regular",
                      lineHeight: "23px",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fermentum mi lacus, mauris urna,
                  </Typography>
                </ListItem>
              </List>
              <List
                sx={{
                  // paddingLeft: "10%",
                  // paddingRight: "10%",
                  color: "#FFF",
                  fontWeight: 800,
                }}
              >
                <ListItem>
                  <ListItemIcon>
                    <PublishedWithChangesIcon sx={{ color: "#FFF" }} />
                  </ListItemIcon>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "16px",
                      fontFamily: "GreycliffCF-regular",
                      lineHeight: "23px",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fermentum mi lacus, mauris urna,
                  </Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PublishedWithChangesIcon sx={{ color: "#FFF" }} />
                  </ListItemIcon>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "16px",
                      fontFamily: "GreycliffCF-regular",
                      lineHeight: "23px",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fermentum mi lacus, mauris urna,
                  </Typography>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default ResumeSecond;
