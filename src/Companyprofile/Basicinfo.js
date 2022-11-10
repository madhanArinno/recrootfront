import {
  Box,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  IconButton,
  Button,
  Dialog,
  InputAdornment,
  FormHelperText,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { styles } from "./Companyprofilestyle";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import { useDispatch, useSelector } from "react-redux";
import "./Basicinfo.css";
import { v4 as uuidv4 } from "uuid";
import {
  basicInfor,
  cmpInfor,
  cmpLogo,
  linkInfor,
} from "../slices/companyslice";
import { UploadPhoto } from "../profile cop/UploadPhoto";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import ReactPhoneInput from "react-phone-input-2";

uuidv4();

const sector = [
  "Aerospace Industry",
  "Transport Industry",
  "Computer Industry",
  "Telecommunication industry",
  "Agriculture industry",
  "Construction Industry",
  "Education Industry",
  "Pharmaceutical Industry",
  "Food Industry",
  " Health care Industry",
  " Hospitality Industry",
  " Entertainment Industry",
  " News Media Industry",
  " Energy Industry",
  " Manufacturing Industry",
  " Music Industry",
  " Mining Industry",
  " Worldwide web",
  " Electronics Industry",
  "Other",
];

export function Basicinfo(props) {
  const basicin = useSelector((state) => state.company.basicinformation);
  const cmpin = useSelector((state) => state.company.cmpinformation);
  const links = useSelector((state) => state.company.links);
  const logo = useSelector((state) => state.company.companylogo);
  const errors = useSelector((state) => state.company.error);

  const [basic, setBasic] = useState({
    cmpname: basicin && basicin.cmpname,
    cmpphone: basicin && basicin.cmpphone,
    cmpemail: basicin && basicin.cmpemail,
    cmpwebsite: basicin && basicin.cmpwebsite,
  });
  const [cpinfor, setCmpinfor] = useState({
    infosector: cmpin && cmpin.infosector,
    infodes: cmpin && cmpin.infodes,
  });

  const dispatch = useDispatch();

  const [first, setFirst] = useState();
  const [fileNames, setFileNames] = useState("");

  function handleImageChange(file) {
    setFirst(file);
    setFileNames(file.name);
  }

  const basicadd = (e) => {
    const { name, value } = e.target;
    setBasic({ ...basic, [name]: value });
    dispatch(basicInfor({ ...basic, [name]: value }));
  };

  const basicPhone = (value) => {
    setBasic({ ...basic, cmpphone: value });
    dispatch(basicInfor({ ...basic, cmpphone: value }));
  };

  const matches = useMediaQuery("(max-width:900px)");
  const matches2 = useMediaQuery("(max-width:970px)");

  const handleLinks = (e) => {
    const { name, value } = e.target;
    dispatch(linkInfor({ ...links, [name]: value }));
  };
  const companyadd = (e) => {
    const { name, value } = e.target;
    setCmpinfor({ ...cpinfor, [name]: value });
    dispatch(cmpInfor({ ...cpinfor, [name]: value }));
  };
  const handleDesc = (value) => {
    dispatch(cmpInfor({ ...cpinfor, infodes: value }));
  };

  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setFirst("");
    setFileNames("");
  };

  const handleClose = () => {
    dispatch(cmpLogo(first));
    setOpen(false);
  };

  const handleCloseP = () => {
    setOpen(false);
    setFullWidth(true);
    setMaxWidth("sm");
  };

  return (
    <>
      <form>
        <Box>
          <Box sx={styles.logosec}>
            <Box sx={styles.companylogo}>
              {logo === null ? (
                <label></label>
              ) : (
                <label>
                  <img
                    alt=""
                    src={
                      logo && logo.logo !== undefined
                        ? `http://localhost:3000/api/getCompanyPhotos?compPhotos=${logo.logo}`
                        : URL.createObjectURL(logo)
                    }
                    width="123px"
                    height="118px"
                    style={{ borderRadius: "10px", objectFit: "contain" }}
                  />
                </label>
              )}
            </Box>
            <IconButton
              onClick={handleClickOpen}
              sx={{
                position: "relative",
                top: "65px",
                left: "-25px",
                background: "#4fa9ff",
              }}
            >
              <EditSharpIcon sx={{ color: "#fff", fontSize: "0.6em" }} />
            </IconButton>
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
                <UploadPhoto handleChange={handleImageChange} />
                {first !== undefined ? (
                  <>
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
                      handleClose();
                    }}
                  >
                    save
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ mt: "10px", ml: "5px", color: "#4fa9ff" }}
                    onClick={() => {
                      handleCloseP();
                    }}
                  >
                    Cancel
                  </Button>
                </Box>
              </Box>
            </Dialog>
            <Typography variant="h5" sx={styles.logotxt}>
              Upload Company Logo
            </Typography>
          </Box>
          <Divider />
          <Box>
            <Typography variant="h5" sx={styles.basictit}>
              Basic Information
            </Typography>
            <Box sx={styles.inputgrp}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  rowGap: "20px",
                  columnGap: "38px",
                }}
              >
                <TextField
                  InputLabelProps={{ style: { color: "black" } }}
                  sx={styles.naminput}
                  id="outlined-basic"
                  label="Company Name"
                  placeholder="Enter Company Name"
                  variant="outlined"
                  name="cmpname"
                  onChange={(e) => basicadd(e)}
                  value={
                    basicin !== null && basicin !== undefined
                      ? basicin.cmpname
                      : ""
                  }
                  error={errors.cmpname ? true : false}
                  helperText={errors.cmpname}
                />

                <ReactPhoneInput
                  inputExtraProps={{
                    name: "phoneNumber",
                    required: true,
                    autoFocus: true,
                  }}
                  id="phoneNumber"
                  name="cmpphone"
                  placeholder="Type your phone number here"
                  defaultCountry={"au"}
                  value={
                    basicin !== null && basicin !== undefined
                      ? basicin.cmpphone
                      : ""
                  }
                  containerStyle={
                    matches2 === false
                      ? { width: "auto", marginLeft: "30px" }
                      : { width: "auto", marginLeft: "37px" }
                  }
                  buttonStyle={{ height: "57px" }}
                  onChange={basicPhone}
                  inputStyle={
                    matches === false
                      ? { width: "290px", height: "57px", fontSize: "16px" }
                      : { width: "200px", height: "57px", fontSize: "16px" }
                  }
                />
              </Box>
              <TextField
                InputLabelProps={{ style: { color: "black" } }}
                sx={styles.naminput}
                id="outlined-basic"
                label="Email"
                type="email"
                placeholder="Enter Email"
                variant="outlined"
                name="cmpemail"
                onChange={(e) => basicadd(e)}
                value={
                  basicin !== null && basicin !== undefined
                    ? basicin.cmpemail
                    : ""
                }
                required
                error={errors.cmpemail ? true : false}
                helperText={errors.cmpemail}
              />
              <TextField
                InputLabelProps={{ style: { color: "black" } }}
                sx={styles.naminput}
                id="outlined-basic"
                label="Website(Optional)"
                placeholder="Enter Website"
                variant="outlined"
                name="cmpwebsite"
                onChange={(e) => basicadd(e)}
                value={
                  basicin !== null && basicin !== undefined
                    ? basicin.cmpwebsite
                    : ""
                }
              />
            </Box>
          </Box>
          <Divider />
          <Box>
            <Typography variant="h5" sx={styles.basictit1}>
              Company Information
            </Typography>
            <Box sx={styles.infofld}>
              <Typography variant="p" sx={styles.sectxt}>
                Sector
              </Typography>
              <FormControl>
                <InputLabel id="demo-simple-select-label">Sector</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Sector"
                  sx={styles.naminput2}
                  name="infosector"
                  onChange={(e) => companyadd(e)}
                  value={
                    cmpin !== null && cmpin !== undefined
                      ? cmpin.infosector
                      : ""
                  }
                  error={errors.infosector ? true : false}
                  helperText={errors.infosector}
                >
                  {sector.map((sec, index) => (
                    <MenuItem key={index} value={sec}>
                      {sec}
                    </MenuItem>
                  ))}
                </Select>
                {!!errors.infosector && (
                  <FormHelperText error id="accountId-error">
                    {errors.infosector}
                  </FormHelperText>
                )}
              </FormControl>
            </Box>
            <Box sx={styles.infofld}>
              <Typography variant="p" sx={styles.sectxt}>
                Company Description
              </Typography>
              <Box
                sx={{
                  width: { lg: "800px", md: "700px", sm: "600px", xs: "300px" },
                }}
              >
                <EditorToolbar />
                <ReactQuill
                  placeholder="Add Description"
                  theme="snow"
                  value={cmpin.infodes}
                  onChange={handleDesc}
                  modules={modules}
                  formats={formats}
                />
              </Box>
            </Box>
            <Box sx={styles.infofld}>
              <Typography variant="p" sx={styles.sectxt}>
                Social Links
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  rowGap: "17px",
                  marginTop: "14px",
                }}
              >
                <TextField
                  InputLabelProps={{ style: { color: "black" } }}
                  sx={styles.naminput}
                  id="outlined-basic"
                  label="FaceBook"
                  placeholder="Enter FaceBook Link"
                  variant="outlined"
                  name="fb"
                  onChange={(e) => handleLinks(e)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FacebookIcon sx={{ color: "#1877F2" }} />
                      </InputAdornment>
                    ),
                  }}
                  value={links && links.fb}
                  error={errors.fb ? true : false}
                  helperText={errors.fb}
                />

                <TextField
                  InputLabelProps={{ style: { color: "black" } }}
                  sx={styles.naminput}
                  id="outlined-basic"
                  label="Twitter"
                  placeholder="Enter Twitter Link"
                  variant="outlined"
                  name="twitter"
                  onChange={(e) => handleLinks(e)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <TwitterIcon
                          sx={{ color: "#5CB6F2", fontSize: "1.5rem" }}
                        />
                      </InputAdornment>
                    ),
                  }}
                  value={links && links.twitter}
                  error={errors.twitter ? true : false}
                  helperText={errors.twitter}
                />
                <TextField
                  InputLabelProps={{ style: { color: "black" } }}
                  sx={styles.naminput}
                  id="outlined-basic"
                  label="LinkedIn"
                  placeholder="Enter LinkedIn Link"
                  variant="outlined"
                  name="linkin"
                  onChange={(e) => handleLinks(e)}
                  value={links && links.linkin}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LinkedInIcon
                          sx={{ color: "#0065ED", fontSize: "1.5rem" }}
                        />
                      </InputAdornment>
                    ),
                  }}
                  required
                  error={errors.linkin ? true : false}
                  helperText={errors.linkin}
                />
                <TextField
                  InputLabelProps={{ style: { color: "black" } }}
                  sx={styles.naminput}
                  id="outlined-basic"
                  label="Youtube"
                  placeholder="Enter Youtube Link"
                  variant="outlined"
                  name="utube"
                  onChange={(e) => handleLinks(e)}
                  value={links && links.utube}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <YouTubeIcon
                          sx={{ color: "#E7274B", fontSize: "1.5rem" }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </form>
    </>
  );
}
