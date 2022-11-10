import { Button, Card, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { styles } from "./postjobstyle";
import { Line } from "rc-progress";
import { useSelector } from "react-redux";
import ReactQuill from "react-quill";
import "./style222.css";
import moment from "moment";

export function PreviewJob(props) {
  const details = useSelector((state) => state.jobs.details);
  const essen = useSelector((state) => state.jobs.essential);
  const addres = useSelector((state) => state.jobs.location);
  const quiz = useSelector((state) => state.jobs.question);
  const descript = useSelector((state) => state.jobs.jobDescription);
  const level = useSelector((state) => state.jobs.jobRole);
  const showq = useSelector((state) => state.jobs.queshow);

  const settingIndex = (index) => {
    props.Pages(index);
  };

  return (
    <Box>
      <Box sx={styles.progressbox}>
        <Typography variant="body1" sx={styles.progresstext}>
          5 of 5
        </Typography>

        <Box sx={styles.linebox}>
          <Line
            style={{ width: "300px", height: "8px", borderRadius: "8px" }}
            percent={100}
            strokeWidth={1}
            strokeColor="#4fa9ff"
          />
          <Typography variant="body2" sx={styles.linetext}>
            100%
          </Typography>
        </Box>
      </Box>
      <Typography variant="h5" sx={styles.addtxt}>
        Preview
      </Typography>
      <Card sx={styles.previewcard}>
        <Box sx={styles.prvbasic}>
          <Typography variant="h5" sx={styles.bastext}>
            Basic Information
          </Typography>
          <Button
            sx={styles.prvedit}
            onClick={() => {
              settingIndex(0);
            }}
          >
            Edit
          </Button>
        </Box>

        <Grid container spacing={2}>
          <Grid item lg={6}>
            <Box sx={styles.prevtextbox}>
              <Typography sx={styles.headingprv}>Job Title</Typography>
              <Typography sx={styles.contentprv}>{level}</Typography>
            </Box>
            <Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "18px",
                    color: "#6a6a6a",
                    textAlign: "center",
                    width: { md: "200px", xs: "110px" },
                  }}
                >
                  Job Description
                </Typography>
              </Box>
              <Box>
                <ReactQuill value={descript} readOnly={true} theme={"bubble"} />
              </Box>
            </Box>
            <Box sx={styles.prevtextbox}>
              <Typography sx={styles.headingprv}>Required Skills</Typography>
              <Box sx={styles.prvskillsbox}>
                {details &&
                  details.requiredSkill.map((skill) => {
                    return (
                      <Typography variant="body2" sx={styles.prvskillstext}>
                        {skill.skill}
                      </Typography>
                    );
                  })}
              </Box>
            </Box>
            <Box sx={styles.prevtextbox}>
              <Typography sx={styles.headingprv}>Location</Typography>
              <Typography sx={styles.contentprv}>
                {addres && addres.label}
              </Typography>
            </Box>
            {showq === "true" || showq === undefined ? (
              <>
                <Box sx={styles.prvbasic}>
                  <Typography variant="h5" sx={styles.bastext}>
                    Screening Questions
                  </Typography>
                </Box>
                {quiz.map((qiz, index) => (
                  <Box
                    sx={{
                      backgroundColor: "white",
                      p: "10px",
                      m: "0px 20px 15px 20px",
                      borderRadius: "16px",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ ml: "26px", color: "#4fa9ff" }}
                    >
                      Question {index + 1}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "700",
                        fontSize: "16px",
                        lineHeight: "18px",
                        ml: "26px",
                      }}
                    >
                      {qiz.questions}
                    </Typography>
                    <br></br>
                    <Typography
                      variant="body1"
                      sx={{ ml: "26px", color: "#4fa9ff" }}
                    >
                      Prefered Answer
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "700",
                        fontSize: "16px",
                        lineHeight: "18px",
                        ml: "26px",
                      }}
                    >
                      {qiz.preferedAns}
                    </Typography>
                  </Box>
                ))}
                <Divider />
              </>
            ) : (
              ""
            )}
          </Grid>
        </Grid>
        <Divider />
        <Box sx={styles.prvbasic}>
          <Typography variant="h5" sx={styles.bastext}>
            Essential Information
          </Typography>
          <Button
            sx={styles.prvedit}
            onClick={() => {
              settingIndex(1);
            }}
          >
            Edit
          </Button>
        </Box>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <Box sx={styles.prevtextbox}>
              <Typography sx={styles.headingprv}>Career Level</Typography>
              <Typography sx={styles.contentprv}>
                {essen && essen.careerlevel}
              </Typography>
            </Box>
            <Box sx={styles.prevtextbox}>
              <Typography sx={styles.headingprv}>Experience</Typography>
              <Typography sx={styles.contentprv}>
                {essen && essen.experience}
              </Typography>
            </Box>
            <Box sx={styles.prevtextbox}>
              <Typography sx={styles.headingprv}>Qualifications</Typography>
              <Typography sx={styles.contentprv}>
                {essen && essen.qualification}
              </Typography>
            </Box>

            <Box sx={styles.prevtextbox}>
              <Typography sx={styles.headingprv}>
                Application Deadline
              </Typography>
              <Typography sx={styles.contentprv}>
                {details && moment(details.applicationDeadline).format("L")}
              </Typography>
            </Box>
            <Box sx={styles.prevtextbox}>
              <Typography sx={styles.headingprv}>Job Type</Typography>
              <Typography sx={styles.contentprv}>
                {details && details.jobType}
              </Typography>
            </Box>
            {details.salary && details.salary.salaryType !== undefined ? (
              <>
                <Box sx={styles.prevtextbox}>
                  <Typography sx={styles.headingprv}>Salary</Typography>
                  <Typography sx={styles.contentprv}>
                    {details && details.salary.salaryType} (
                    {details && details.salary.minSalary} to{" "}
                    {details && details.salary.maxSalary})
                  </Typography>
                </Box>
                <Box sx={styles.prevtextbox}>
                  <Typography sx={styles.headingprv}>
                    Salary Currency
                  </Typography>
                  <Typography sx={styles.contentprv}>
                    {details && details.salary.salaryCrrancy}
                  </Typography>
                </Box>
              </>
            ) : (
              <>
                <Box sx={styles.prevtextbox}>
                  <Typography sx={styles.headingprv}>Salary</Typography>
                  <Typography sx={styles.contentprv}>Not Provided</Typography>
                </Box>
                <Box sx={styles.prevtextbox}>
                  <Typography sx={styles.headingprv}>
                    Salary Currency
                  </Typography>
                  <Typography sx={styles.contentprv}>Not Provided</Typography>
                </Box>
              </>
            )}
          </Grid>
        </Grid>
        <Divider />

        <Grid container spacing={2}>
          <Grid item lg={6}></Grid>
        </Grid>
      </Card>
    </Box>
  );
}
