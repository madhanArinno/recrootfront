import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { styles } from "./mainpagestyle";
import SummarizeIcon from "@mui/icons-material/Summarize";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CasesOutlinedIcon from "@mui/icons-material/CasesOutlined";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { setJobID } from "../slices/personal";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReactQuill from "react-quill";
export function MainResponse(props) {
  const singleJob = useSelector((state) => state.searchJobs.selectedJob);
  const numbers = singleJob.requiredSkill;
  let dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);
  let navigate = useNavigate();
  const SkillsItems = numbers.map((skills, index) => (
    <Box sx={styles.bluebtn} key={index}>
      <Typography variant="body1" sx={styles.blubtntext}>
        {skills.skill}
      </Typography>
    </Box>
  ));
  const applyids = useSelector((state) => state.jobs.applyIds);

  const [applyId, setApplyId] = useState(false);

  useEffect(() => {
    setApplyId(applyids.includes(singleJob._id));
  }, [applyids, singleJob]);

  const handleJobID = (id, Cid, ques, name) => {
    dispatch(
      setJobID({
        companyId: Cid,
        jobId: id,
        question: ques,
        name: name,
      })
    );
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Box>
      <Button
        sx={{ color: "#4fa9ff", textTransform: "capitalize", mt: "15px" }}
        onClick={handleBack}
      >
        <ArrowBackIcon sx={{ mr: "5px" }} /> Go Back
      </Button>
      <Box
        sx={{
          background: "#ffff",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
          overflow: "hidden",
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{
            justifyContent: { md: "center", lg: "space-between" },
            p: "32px 32px 24px",
          }}
        >
          <Grid item md={8} xs={12}>
            <Box sx={styles.icorole}>
              {/* <AppleIcon sx={styles.jobico} /> */}
              <Avatar
                style={{ width: "80px", height: "80px", fontSize: "1.5rem" }}
                variant="rounded"
                src={`http://localhost:3000/api/getCompanyPhotos?compPhotos=${singleJob.company.companyLogo.logo}`}
              />
              <Box>
                <Box sx={styles.roletxt}>
                  <Typography variant="h1" sx={styles.rolehead}>
                    {singleJob.jobTitle} ({singleJob.jobRole})
                  </Typography>
                </Box>
                <Typography variant="h2" sx={styles.rolecomp}>
                  {singleJob.company.basicInformation.cmpname}
                </Typography>
                <Typography variant="h3" sx={styles.rolecomp1}>
                  {singleJob.address.label}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={4} xs={12} sx={styles.btngrid}>
            {currentUser && currentUser.User.recrootUserType === "Employer" ? (
              ""
            ) : (
              <Box>
                {!currentUser ? (
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Button variant="contained" disabled sx={styles.applybtn}>
                      Apply Now
                    </Button>
                    <Typography variant="body2">
                      *Please Login To Apply
                    </Typography>
                  </Box>
                ) : (
                  <>
                    {applyId === true ? (
                      <Typography variant="body1" sx={{ color: "#4fa9ff" }}>
                        You Already Applied For This Job
                      </Typography>
                    ) : (
                      <>
                        <Link
                          to="/CandidateProfile"
                          onClick={() => {
                            handleJobID(
                              singleJob._id,
                              singleJob.company._id,
                              singleJob.question,
                              singleJob.jobTitle
                            );
                          }}
                        >
                          <Button variant="contained" sx={styles.applybtn}>
                            Apply Now
                          </Button>
                        </Link>
                      </>
                    )}
                  </>
                )}
              </Box>
            )}
          </Grid>
        </Grid>
        <Divider />
      </Box>
      <Card variant="outlined" sx={styles.maincard}>
        <Box sx={{ p: "10px 32px 32px 32px" }}>
          {singleJob.salary !== undefined ? (
            <>
              <Box sx={styles.website}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "18px",
                    color: "#4fa9ff",
                  }}
                >
                  <MonetizationOnIcon sx={styles.detailico} />
                  Salary
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgb(115, 115, 115)",
                    textAlign: "right",
                    textTransform: "capitalize",
                  }}
                >
                  {singleJob.salary.salaryCrrancy} {singleJob.salary.minSalary}-
                  {singleJob.salary.maxSalary} /{" "}
                  {singleJob.salary.salaryType === "monthly" ? "Per Month" : ""}{" "}
                  {singleJob.salary.salaryType === "hourly" ? "Per Hour" : ""}
                </Typography>
              </Box>
              <Divider />
            </>
          ) : (
            ""
          )}
          <Box sx={styles.website}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "18px",
                color: "#4fa9ff",
              }}
            >
              <SearchIcon sx={styles.detailico} />
              Job Type
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "rgb(115, 115, 115)",
                textAlign: "right",
                textTransform: "capitalize",
              }}
            >
              {singleJob.jobType}
            </Typography>
          </Box>
          <Divider />
          <Box sx={styles.website}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "18px",
                color: "#4fa9ff",
              }}
            >
              <LocationOnIcon sx={styles.detailico} />
              Location
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "rgb(115, 115, 115)",
                textAlign: "right",
                textTransform: "capitalize",
              }}
            >
              {singleJob.address.label}
            </Typography>
          </Box>
          <Divider />
          <Box sx={styles.website}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "18px",
                color: "#4fa9ff",
              }}
            >
              <SummarizeIcon sx={styles.detailico} />
              Posted
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "rgb(115, 115, 115)",
                textAlign: "right",
                textTransform: "capitalize",
              }}
            >
              {moment(singleJob.createdAt).fromNow()}
            </Typography>
          </Box>
          <Divider />
          <Box sx={styles.website}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "18px",
                color: "#4fa9ff",
              }}
            >
              <PeopleAltIcon sx={styles.detailico} />
              Career Level
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "rgb(115, 115, 115)",
                textAlign: "right",
                textTransform: "capitalize",
              }}
            >
              {singleJob.essentialInformation.careerlevel}
            </Typography>
          </Box>
          <Divider />
          <Box sx={styles.website}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "18px",
                color: "#4fa9ff",
              }}
            >
              <CasesOutlinedIcon sx={styles.detailico} />
              Experience
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "rgb(115, 115, 115)",
                textAlign: "right",
                textTransform: "capitalize",
              }}
            >
              {singleJob.essentialInformation.experience}
            </Typography>
          </Box>
          <Divider />
          <Box sx={styles.website}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "18px",
                color: "#4fa9ff",
              }}
            >
              <SchoolRoundedIcon sx={styles.detailico} />
              Qualification
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "rgb(115, 115, 115)",
                textAlign: "right",
                textTransform: "capitalize",
              }}
            >
              {singleJob.essentialInformation.qualification}
            </Typography>
          </Box>
          <Divider />
          <Box sx={styles.website}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "18px",
                color: "#4fa9ff",
              }}
            >
              <SchoolRoundedIcon sx={styles.detailico} />
              Expires
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "rgb(115, 115, 115)",
                textAlign: "right",
                textTransform: "capitalize",
              }}
            >
              {moment(singleJob.applicationDeadline).endOf("day").fromNow()}
            </Typography>
          </Box>
          <Divider />

          <Box sx={""}>
            <Typography variant="h5" sx={styles.jobsdetail}>
              Job Description
            </Typography>
            <Typography variant="body1" sx={styles.destination}>
              {singleJob.jobTitle} - {singleJob.jobRole} -{" "}
              {singleJob.company.basicInformation.cmpname}
            </Typography>
            <Typography variant="h4" sx={styles.jobsabout}>
              About Job
            </Typography>

            <Box>
              <ReactQuill
                value={singleJob.jobDescription}
                readOnly={true}
                theme={"bubble"}
                width="auto"
              />
            </Box>
          </Box>
          <Divider />
          <Box>
            <Typography variant="h5" sx={styles.jobsdetail}>
              Required Skills
            </Typography>
            <Box sx={styles.skillbtns}>{SkillsItems}</Box>
          </Box>

          <Box>
            <Typography variant="h5" sx={styles.jobsdetail}>
              About The Company
            </Typography>

            <Box sx={{ ml: "35px" }}>
              <ReactQuill
                value={singleJob.company.companyInformation.infodes}
                readOnly={true}
                width="400px"
                theme={"bubble"}
              />
            </Box>
          </Box>
          <Divider />
          <Box sx={styles.website}>
            <Typography variant="h5" sx={styles.lasttext}>
              Company Website
            </Typography>
            <Typography variant="h5" sx={styles.linksite}>
              {singleJob.company.basicInformation.cmpwebsite}
            </Typography>
          </Box>
          <Divider />
          <Box sx={styles.website}>
            <Typography variant="h5" sx={styles.lasttext}>
              Contact Employer
            </Typography>
            <Typography variant="h5" href="#" sx={styles.linksite}>
              {singleJob.company.basicInformation.cmpemail}
            </Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
