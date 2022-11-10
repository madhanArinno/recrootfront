import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Fade,
  Grid,
  Typography,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
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
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ReactQuill from "react-quill";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

export function Maincard(props) {
  const numbers = props.jobDetails.requiredSkill;
  let dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);

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
    setApplyId(applyids.includes(props.jobDetails._id));
  }, [applyids, props]);

  const handleJobID = (id, Cid, ques, name, show) => {
    dispatch(
      setJobID({
        companyId: Cid,
        jobId: id,
        question: ques,
        name: name,
        show: show,
      })
    );
  };

  const backToTop = () => {
    document
      .querySelector("#scrollTop")
      ?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box>
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
              <Avatar
                style={{ width: "80px", height: "80px", fontSize: "1.5rem" }}
                variant="rounded"
                src={`http://localhost:3000/api/getCompanyPhotos?compPhotos=${props.jobDetails.company.companyLogo.logo}`}
              />
              <Box>
                <Box sx={styles.roletxt}>
                  <Typography variant="h1" sx={styles.rolehead}>
                    {props.jobDetails.jobRole}
                  </Typography>
                </Box>
                <Typography variant="h2" sx={styles.rolecomp}>
                  {props.jobDetails.company.basicInformation.cmpname}
                </Typography>
                <Typography variant="h3" sx={styles.rolecomp1}>
                  {props.jobDetails.address && props.jobDetails.address.label}.
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
                    <Tooltip
                      TransitionComponent={Fade}
                      TransitionProps={{ timeout: 600 }}
                      title="*Please Login To Apply"
                    >
                      <span>
                        <Button
                          variant="contained"
                          disabled
                          sx={styles.applybtn}
                          endIcon={<MarkEmailReadIcon />}
                        >
                          Apply Now
                        </Button>
                      </span>
                    </Tooltip>
                  </Box>
                ) : (
                  <>
                    {applyId === true ? (
                      <Tooltip
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 600 }}
                        title="*You Already Apply For This Job"
                      >
                        <span>
                          <Button
                            variant="contained"
                            disabled
                            sx={styles.applybtn}
                            endIcon={<MarkEmailReadIcon />}
                          >
                            Apply Now
                          </Button>
                        </span>
                      </Tooltip>
                    ) : (
                      <>
                        <Link
                          to="/CandidateProfile"
                          onClick={() => {
                            handleJobID(
                              props.jobDetails._id,
                              props.jobDetails.company._id,
                              props.jobDetails.question,
                              props.jobDetails.jobRole,
                              props.jobDetails.queshow
                            );
                          }}
                        >
                          <Button
                            variant="contained"
                            sx={styles.applybtn}
                            endIcon={<MarkEmailReadIcon />}
                          >
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
      <Card variant="outlined" sx={styles.maincard} id="scrollTop">
        {backToTop()}
        <Box sx={{ p: "10px 32px 32px 32px" }}>
          {props.jobDetails.salary !== undefined ? (
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
                {props.jobDetails.salary.salaryCrrancy}{" "}
                {props.jobDetails.salary.minSalary}-
                {props.jobDetails.salary.maxSalary} /{" "}
                {props.jobDetails.salary.salaryType === "monthly"
                  ? "Per Month"
                  : ""}{" "}
                {props.jobDetails.salary.salaryType === "hourly"
                  ? "Per Hour"
                  : ""}
              </Typography>
            </Box>
          ) : (
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
                Negotiable
              </Typography>
            </Box>
          )}
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
              {props.jobDetails.jobType}
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
              {props.jobDetails.address.label}
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
              {moment(props.jobDetails.createdAt).fromNow()}
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
              {props.jobDetails.essentialInformation.careerlevel}
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
              {props.jobDetails.essentialInformation.experience}
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
              {props.jobDetails.essentialInformation.qualification}
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
              {moment(props.jobDetails.applicationDeadline)
                .endOf("day")
                .fromNow()}
            </Typography>
          </Box>
          <Divider />
          <Box>
            <Typography variant="h5" sx={styles.jobsdetail}>
              Job Description
            </Typography>
            <Typography variant="body1" sx={styles.destination}>
              {props.jobDetails.jobRole} -{" "}
              {props.jobDetails.company.basicInformation.cmpname}
            </Typography>
            <Typography variant="h4" sx={styles.jobsabout}>
              About Job
            </Typography>
            <Box style={{ fontFamily: "GreycliffCF-Regular !important" }}>
              <ReactQuill
                value={props.jobDetails.jobDescription}
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
        </Box>
      </Card>
    </Box>
  );
}
