import React from "react";
import "../../src/AllApplicants/ApplicantProfile.css";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import FemaleIcon from "@mui/icons-material/Female";
import BarChartIcon from "@mui/icons-material/BarChart";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import WorkExperience from "../AllApplicants/WorkExperience";
import PersonalDetails from "../AllApplicants/PersonalDetails";
import Skills from "../AllApplicants/Skills";
import Education from "../AllApplicants/Education";
import Projects from "../AllApplicants/Projects";
import Certificates from "../AllApplicants/Certificates";
import Training from "../AllApplicants/Training";
import Resumes from "../AllApplicants/Resumes";
import { styles } from "../profile cop/profilestyle";
import { useSelector } from "react-redux";
import { Button, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

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

export default function ApplicantProfile() {
  const single = useSelector((data) => data.apply.sinDet);
  let navigate = useNavigate();

  const handleBAck = () => {
    navigate("/employerhome/allapplicants");
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      className="profile-main"
      style={{ backgroundColor: "rgb(245 250 255)" }}
    >
      <div className="profile">
        <div>
          <h1>Profile</h1>
        </div>
      </div>
      <div style={{ marginTop: "3%" }} className="profileback-icon">
        <Button onClick={handleBAck}>
          <ArrowBackIosIcon style={{ paddingTop: 2 }} />
          Back to previous page
        </Button>
      </div>
      <div
        style={{ backgroundColor: "red", marginLeft: "3%", marginRight: "3%" }}
      >
        <Grid
          container
          spacing={0}
          style={{ backgroundColor: "white" }}
          className="pro-avatar-div"
        >
          <Grid
            xs={12}
            sm={12}
            md={3}
            lg={3}
            item
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 200,
            }}
          >
            <Avatar
              alt="Sara"
              src={`http://localhost:3000/api/openProfpic?photo=${
                single.profpicFileLocation && single.profpicFileLocation.photo
              }`}
              style={{
                width: 150,
                height: 150,
              }}
              className="avatar-image"
            />
          </Grid>
          <Grid
            xs={12}
            lg={9}
            sm={12}
            md={9}
            style={{ paddingLeft: "2%" }}
            className="pro-sara-header"
          >
            <h1 item>
              {single && single.firstName} {single && single.lastName}
            </h1>
            <div>
              <Grid container style={{ display: "flex" }}>
                <Grid
                  xs={12}
                  sm={12}
                  md={6}
                  style={{ marginTop: 10 }}
                  className="pro-cont-style-1"
                >
                  <div style={{ marginBottom: 20 }}>
                    <Grid
                      Container
                      style={{ display: "flex" }}
                      className="pro-row-cont"
                    >
                      <Grid
                        xs={6}
                        sm={6}
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                        }}
                      >
                        <FemaleIcon size={10} className="iconcolor " />
                        &nbsp;
                        <b>Gender</b>
                      </Grid>
                      <Grid xs={6} sm={6}>
                        {single.resume && single.resume.gender}
                      </Grid>
                    </Grid>
                  </div>

                  <div>
                    <Grid
                      Container
                      style={{ display: "flex" }}
                      className="pro-row-cont"
                    >
                      <Grid
                        xs={6}
                        sm={6}
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                        }}
                      >
                        <BarChartIcon size={5} className="iconcolor" />
                        &nbsp;
                        <b>Career Level</b>
                      </Grid>
                      <Grid xs={6} sm={6}>
                        {single.resume && single.resume.carearLevel}
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
                <Grid xs={12} sm={12} md={6} className="pro-cont-style-2">
                  <div style={{ marginBottom: 20 }}>
                    <Grid
                      Container
                      style={{ display: "flex" }}
                      className="pro-row-cont"
                    >
                      <Grid
                        xs={6}
                        sm={6}
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                        }}
                      >
                        <WorkOutlineOutlinedIcon
                          size={10}
                          className="iconcolor"
                        />
                        &nbsp;
                        <b>Job Preference</b>
                      </Grid>
                      <Grid xs={6} sm={6} className="pro-cont-inline"></Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid
                      Container
                      style={{ display: "flex" }}
                      className="pro-row-cont"
                    >
                      <Grid
                        xs={6}
                        sm={6}
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                        }}
                      >
                        <BusinessCenterOutlinedIcon
                          size={5}
                          className="iconcolor"
                        />
                        &nbsp;
                        <b>Work Experience</b>
                      </Grid>
                      <Grid xs={6} sm={6} className="pro-cont-inline">
                        {single.resume && single.resume.totalWorkExperience}
                        Years
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
      <Grid item lg={7} xs={10} sx={{ p: "20px" }}>
        <Card sx={styles.card} variant="outlined">
          <Tabs
            value={value}
            sx={{
              "& .after": {
                color: "black",
              },
              width: { md: "100%", sm: "100%", xs: "300px" },
            }}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable auto tabs example"
            onChange={handleChange}
          >
            <Tab
              label={<span style={styles.label}>Personal details</span>}
              {...a11yProps(0)}
            />
            <Tab
              label={<span style={styles.label}>Work Experience</span>}
              {...a11yProps(1)}
            />
            <Tab
              label={<span style={styles.label}>Skills</span>}
              {...a11yProps(2)}
            />
            <Tab
              label={<span style={styles.label}>Education</span>}
              {...a11yProps(3)}
            />
            <Tab
              label={<span style={styles.label}>Projects</span>}
              {...a11yProps(4)}
            />
            <Tab
              label={<span style={styles.label}>Certifications</span>}
              {...a11yProps(5)}
            />
            <Tab
              label={<span style={styles.label}>Training</span>}
              {...a11yProps(6)}
            />
            <Tab
              label={<span style={styles.label}>Resumes</span>}
              {...a11yProps(7)}
            />
          </Tabs>

          <TabPanel value={value} index={0}>
            <PersonalDetails />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <WorkExperience test={2} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Skills />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Education />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Projects />
          </TabPanel>
          <TabPanel value={value} index={5}>
            <Certificates />
          </TabPanel>
          <TabPanel value={value} index={6}>
            <Training />
          </TabPanel>
          <TabPanel value={value} index={7}>
            <Resumes />
          </TabPanel>
        </Card>
      </Grid>
    </div>
  );
}
