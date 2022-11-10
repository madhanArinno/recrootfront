/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from "react";
import Grid from "@mui/material/Grid";
import { Paper, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Ellipse from "./logo/Ellipse30.png";
import logo from "./logo/logo.png";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { personFunction } from "./personFunction";
import { languageFunction } from "./languageFunction";
import { genderFunction } from "./genderFunction";
import { useNavigate, Navigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validator } from "./resumeValidation";
import { useDispatch, useSelector } from "react-redux";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import {
  uplodeResumeFiles,
  createResumeDetails,
} from "../slices/UploadingResume";

export const ColorButton = styled(Button)(({ theme }) => ({
  "&:focus": {
    backgroundColor: "#4F9AFF",
    color: "#FFFF",
  },
  "&:active": {
    backgroundColor: "#4F9AFF",
    color: "#FFFF",
  },
}));

const toastyErrorFunction = (msg) => {
  toast.error(`${msg}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const toastySucessFunction = (msg) => {
  toast.success(`${msg}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const names = [
  "Afrikaans",
  "Albanian",
  "Amharic",
  "Arabic",
  "Aragonese",
  "Armenian",
  "Asturian",
  "Azerbaijani",
  "Basque",
  "Belarusian",
  "Bengali",
  "Bosnian",
  "Breton",
  "Bulgarian",
  "Catalan",
  "Central Kurdish",
  "Chinese",
  "Chinese (Hong Kong)",
  "Chinese (Simplified)",
  "Chinese (Traditional)",
  "Corsican",
  "Croatian",
  "Czech",
  "Danish",
  "Dutch",
  "English",
  "English (Australia)",
  "English (Canada)",
  "English (India)",
  "English (New Zealand)",
  "English (South Africa)",
  "English (United Kingdom)",
  "English (United States)",
  "Esperanto",
  "Estonian",
  "Faroese",
  "Filipino",
  "Finnish",
  "French",
  "French (Canada)",
  "French (France)",
  "French (Switzerland)",
  "Galician",
  "Georgian",
  "German",
  "German (Austria)",
  "German (Germany)",
  "German (Liechtenstein)",
  "German (Switzerland)",
  "Greek",
  "Guarani",
  "Gujarati",
  "Hausa",
  "Hawaiian",
  "Hebrew",
  "Hindi",
  "Hungarian",
  "Icelandic",
  "Indonesian",
  "Interlingua",
  "Irish",
  "Italian",
  "Italian (Italy)",
  "Italian (Switzerland)",
  "Japanese",
  "Kannada",
  "Kazakh",
  "Khmer",
  "Korean",
  "Kurdish",
  "Kyrgyz",
  "Lao",
  "Latin",
  "Latvian",
  "Lingala",
  "Lithuanian",
  "Macedonian",
  "Malay",
  "Malayalam",
  "Maltese",
  "Marathi",
  "Mongolian",
  "Nepali",
  "Norwegian",
  "Norwegian Bokmål",
  "Norwegian Nynorsk",
  "Occitan",
  "Oriya",
  "Oromo",
  "Pashto",
  "Persian",
  "Polish",
  "Portuguese",
  "Portuguese (Brazil)",
  "Portuguese (Portugal)",
  "Punjabi",
  "Quechua",
  "Romanian",
  "Romanian (Moldova)",
  "Romansh",
  "Russian",
  "Scottish Gaelic",
  "Serbian",
  "Serbo",
  "Shona",
  "Sindhi",
  "Sinhala",
  "Slovak",
  "Slovenian",
  "Somali",
  "Southern Sotho",
  "Spanish",
  "Spanish (Argentina)",
  "Spanish (Latin America)",
  "Spanish (Mexico)",
  "Spanish (Spain)",
  "Spanish (United States)",
  "Sundanese",
  "Swahili",
  "Swedish",
  "Tajik",
  "Tamil",
  "Tatar",
  "Telugu",
  "Thai",
  "Tigrinya",
  "Tongan",
  "Turkish",
  "Turkmen",
  "Twi",
  "Ukrainian",
  "Urdu",
  "Uyghur",
  "Uzbek",
  "Vietnamese",
  "Walloon",
  "Welsh",
  "Western Frisian",
  "Xhosa",
  "Yiddish",
  "Yoruba",
  "Zulu",
];

export function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Resume = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);
  const [uplodeResume, setuplodeResume] = useState({ file: "" });
  const [uplodeResumeFile, setuplodeResumeFile] = useState([]);
  const [createResume, setCreateResume] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    careaarlevel: "",
    totalWorkExperience: "",
    jobPreference: "",
    salary: "",
    salaryCurrancy: "",
    gender: "",
    language: [],
    cvSetting: "Private",
  });
  const [isFormInvalid, setIsFormInvalid] = useState(false);
  const [isResumeUploded, setIsResumeUploded] = useState(false);
  let navigate = useNavigate();
  const [age, setAge] = React.useState("");
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // handle resume input changes
  const handleChangeResumeInput = (prop) => (event) => {
    setuplodeResume({ ...uplodeResume, [prop]: event.target.value });
  };

  // handle create resume input changes
  const handleChangeCreateResumeInput = (prop) => (event) => {
    setCreateResume({ ...createResume, [prop]: event.target.value });
  };

  const handleFirstresumeSubmit = async (e) => {
    if (value === 0) {
      if (isResumeUploded === true) {
        setOpen(!open);

        dispatch(uplodeResumeFiles({ uplodeResumeFile, uplodeResume }))
          .unwrap()
          .then(async (originalPromiseResult) => {
            const userObject = {
              userId: currentUser.User._id,
              file: originalPromiseResult.Data[0].Location,
            };

            await axios
              .post("http://localhost:3000/api/updateResume", userObject)
              .then(
                (res) => {
                  if (res.status === 200) {
                  }
                },
                (error) => {
                  console.warn(error);
                  toastyErrorFunction(error.response.data.errors[0].msg);
                }
              );

            setOpen(!open);
            toastySucessFunction("Document Uploaded Successfully");
            navigate("/", { replace: false });
          })
          .catch((error) => {
            setOpen(!open);
            toastySucessFunction("Document Uploaded Successfully");
            navigate("/", { replace: false });
          });

        return;
      } else {
        toastyErrorFunction("Please Uplode Your Resume");
        return;
      }
    } else {
      if (Object.keys(validator(createResume)).length === 0) {
        setIsFormInvalid({ isFormInvalid: false });
        dispatch(createResumeDetails({ createResume }));

        return;
      } else {
        toastyErrorFunction(Object.values(validator(createResume))[0]);
        setIsFormInvalid({ isFormInvalid: true });
        return;
      }
    }
  };
  const theme = useTheme();
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

  /**
   *
   * Dropzone file uplode coding of the resume page
   *
   */

  const onDrop = useCallback((acceptedFiles) => {
    setuplodeResumeFile(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function nameLengthValidator(file) {
    if (file.size > 5605992) {
      toastyErrorFunction("File is larger than 5 MB");
      return {
        code: "name-too-large",
        message: `Size is larger than 5 MB`,
      };
    }

    if (
      file.name.substring(file.name.lastIndexOf(".") + 1) !== "docx" &&
      file.name.substring(file.name.lastIndexOf(".") + 1) !== "pdf" &&
      file.name.substring(file.name.lastIndexOf(".") + 1) !== "doc"
    ) {
      toastyErrorFunction("You can Only Upload Pdf,doc and docx");

      return {
        code: "name-too-large",
        message: `Size is larger than 2 MB`,
      };
    }
    setIsResumeUploded(true);
    return null;
  }

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    validator: nameLengthValidator,
    onDrop,
  });

  /**
   *
   * End of the  Dropzone file uplode coding of the resume page
   *
   */

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  if (!currentUser) {
    return <Navigate to="/signUp" />;
  }
  return (
    <Box style={backgroundImages.paperContainer}>
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
      <Grid container>
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
                width: "174px",
                alignSelf: "baseline",
                margin: "24px 0px 10px 50px",
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
                marginBottom: "30px",
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
                          fontFamily: "GreycliffCF-regular",
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
              <TabPanel
                value={value}
                index={0}
                sx={{
                  fontFamily: "FONTSPRING DEMO - Greycliff CF",
                  fontWeight: 800,
                }}
              >
                <Typography
                  variant="h6"
                  color="initial"
                  component="span"
                  sx={{
                    color: "#6A6A6A",
                    margin: "10px",
                    display: "grid",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "18.4px",
                  }}
                >
                  Basic Info
                </Typography>
                <Typography
                  variant="h5"
                  component="span"
                  color="initial"
                  sx={{
                    margin: "10px",
                    display: "grid",
                    fontWeight: "700",
                    fontSize: "24px",
                    lineHeight: "28px",
                  }}
                >
                  Add your resume
                </Typography>
                <Typography
                  component="span"
                  variant="body2"
                  color="initial"
                  sx={{
                    margin: "10px",
                    display: "grid",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "18px",
                    color: "#6A6A6A",
                    paddingBottom: "15px",
                  }}
                >
                  Use our uploader to save your resume and search and apply for
                  thousand of jobs without uploading resume each time
                </Typography>
                <section className="container">
                  <div {...getRootProps({ className: "dropzone" })}>
                    <input {...getInputProps()} />
                    <p>
                      Drag 'n' drop some files here, or click hear to select
                      files
                    </p>
                  </div>
                  <aside>{files}</aside>
                </section>
              </TabPanel>
              <TabPanel value={value} index={1}>
                {personFunction(
                  age,
                  handleChange,
                  handleChangeCreateResumeInput,
                  createResume
                )}
                {genderFunction(handleChangeCreateResumeInput, createResume)}
                {languageFunction(
                  personName,
                  handleChangeChip,
                  theme,
                  handleChangeCreateResumeInput,
                  createResume
                )}
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
                    fontSize: "20px",
                    width: 100,
                    height: 60,
                    fontFamily: "GreycliffCF-Regular",
                    backgroundColor: "#4F9AFF",
                    textTransform: "capitalize",
                    letterSpacing: "2px",
                    marginTop: "10px",
                  }}
                  onClick={() => handleFirstresumeSubmit()}
                >
                  Upload
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
};

export default Resume;
