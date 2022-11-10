import { Button, Typography, useMediaQuery } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useCallback } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { styles } from "./mainpagestyle";
import Jobscard from "../recent/Jobscard";
import { Maincard } from "./Maincard";
import { NoResult } from "./NoResult";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getsingleJob, selectTheJob } from "../slices/search";
import { useNavigate, useSearchParams } from "react-router-dom";
import { NEUTRAL, PRIMARY } from "../Theme/Colors";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { USER_EXPERIENCES } from "../constants";

export function Maindetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  var counts = ["1", "2", "1", "2", "1", "2", "1", "2"];



  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const open = Boolean(anchorEl);
  const open1 = Boolean(anchorEl1);

  const latestJobs = useSelector((state) => state.searchJobs.searchDetails);

  const singleJob = useSelector((state) => state.searchJobs.selectedJob);

  const latejobset = useSelector((state) => state.jobs.latejob);

  const [names, setNames] = useState([]);
  const [exper, setExper] = useState([]);
  const [latejob, setLatejob] = useState(latejobset);
  const [trig, setTrig] = useState(false);
  const [userf, setUserf] = useState(false);
  useEffect(() => {
    let id = searchParams.get("job");
    let title = searchParams.get("role");
    if (id !== null) {
      dispatch(getsingleJob({id,title}))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /**
   * Pass jobid and jobrole to update URL
   *
   * @param {*} id
   * @param {*} jobRole
   */
  const updateUrl = useCallback(
    (id, jobRole) => {
      let newpPath = `/Mainpage?job=${id}&role=${jobRole}`;
      navigate(newpPath, { replace: true });
    },
    [navigate]
  );

  useEffect(() => {
    setLatejob(latestJobs);
  }, [latestJobs]);

  useEffect(() => {
    if (latejobset.length > 0) {
      setLatejob(latejobset);
      setUserf(latejobset);
    } else {
      setLatejob(latestJobs);
    }

    if (singleJob) updateUrl(singleJob?._id, singleJob?.jobTitle);

    setTrig(trig);
  }, [latejobset, latestJobs, trig, updateUrl, singleJob, searchParams]);

  const handleClick = (event) => {
    if (latejobset.length > 0) {
      setUserf(latejobset);
      setAnchorEl(event.currentTarget);
    } else {
      setUserf(latestJobs);
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClickEx = (event) => {
    if (latejobset.length > 0) {
      setUserf(latejobset);
      setAnchorEl1(event.currentTarget);
    } else {
      setUserf(latestJobs);
      setAnchorEl1(event.currentTarget);
    }
  };

  const matches = useMediaQuery("(max-width:1020px)");

  const jobs = ["Remote", "Onsite", "Hybrid"];
  function getJobInfo(_id, jobRole) {
    dispatch(selectTheJob(_id));
    updateUrl(_id, jobRole);
  }
  const handleResponse = (_id) => {
    dispatch(selectTheJob(_id));
    navigate("/MainpageRespone");
  };

  const handleName = (e) => {
    if (e.target.value === names.find((find) => find === e.target.value)) {
      let updatedField = [...names].filter((fiel) => fiel !== e.target.value);
      setNames(updatedField);
    } else {
      setNames([...names, e.target.value]);
    }
  };
  const handleExper = (e) => {
    if (e.target.value === exper.find((find) => find === e.target.value)) {
      let updatedField = [...exper].filter((fiel) => fiel !== e.target.value);
      setExper(updatedField);
    } else {
      setExper([...exper, e.target.value]);
    }
  };

  const filterObjectArray = (arr, filterArr) => {
    return arr.filter((el) => filterArr.some((f) => f === el.jobType));
  };

  const filterObjectExper = (arr, filterArr) => {
    return arr.filter((el) =>
      filterArr.some((f) => f === el.essentialInformation.experience)
    );
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseEx = () => {
    setAnchorEl1(null);
  };
  const handleTrig = () => {
    if (latejobset.length > 0) {
      setLatejob(latejobset);
    } else {
      setLatejob(latestJobs);
    }
    setNames([]);
    setExper([]);
  };
  const handleClickSave = () => {
    if (exper.length > 0 && names.length > 0) {
      setLatejob(filterObjectExper(filterObjectArray(userf, names), exper));
    }
    if (names.length > 0 && exper.length === 0) {
      setLatejob(filterObjectArray(userf, names));
    }
    if (exper.length > 0 && names.length === 0) {
      setLatejob(filterObjectExper(userf, exper));
    }
    if (exper.length === 0 && names.length === 0) {
      setLatejob(userf);
    }
  };

  return (
    <>
      <Container maxWidth="xl">
        <Box sx={styles.maindetail}>
          <Box sx={styles.sort}>
            <Box sx={{ display: "flex" }}>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                variant="outlined"
                sx={
                  names.length > 0
                    ? {
                        width: "150px",
                        border: "1px solid black",
                        height: "40px",
                        fontWeight: "700",
                        fontSize: "14px",
                        borderRadius: 16,
                        lineHeight: "23px",
                        color: "#ffff",
                        backgroundColor: "#4fa9ff",
                      }
                    : {
                        width: "150px",
                        p: 0,
                        border: "1px solid black",
                        height: "40px",
                        fontWeight: "700",
                        fontSize: "14px",
                        borderRadius: 16,
                        lineHeight: "23px",
                        color: "#6A6A6A",
                      }
                }
              >
                JobType <KeyboardArrowDownOutlinedIcon />
                {names.length > 0 ? (
                  <Typography
                    sx={
                      names.length > 0
                        ? {
                            borderRadius: "50%",
                            border: "1px solid #ffff",
                            p: "3px 8px 3px 8px",
                            background: "#ffff",
                            color: "black",
                          }
                        : {
                            borderRadius: "50%",
                            border: "1px solid #6a6a6a",
                            p: "3px 8px 3px 8px",
                          }
                    }
                  >
                    {names.length}
                  </Typography>
                ) : (
                  ""
                )}
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                style={{
                  borderRadius: "12px",
                  width: "180px",
                  marginLeft: "2px",
                  marginTop: "12px",
                }}
              >
                <MenuItem>
                  <FormGroup>
                    {jobs &&
                      jobs.map((job, ind) => (
                        <FormControlLabel
                          key={ind}
                          control={
                            names.includes(job) ? (
                              <Checkbox defaultChecked />
                            ) : (
                              <Checkbox />
                            )
                          }
                          onChange={(e) => {
                            handleName(e);
                          }}
                          label={
                            <span style={{ textTransform: "capitalize" }}>
                              {job}
                            </span>
                          }
                          value={job}
                        />
                      ))}
                  </FormGroup>
                </MenuItem>
              </Menu>
              <Button
                id="basic-button"
                aria-controls={open1 ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open1 ? "true" : undefined}
                onClick={handleClickEx}
                variant="outlined"
                style={
                  exper.length > 0
                    ? {
                        border: "1px solid black",
                        height: "40px",
                        marginLeft: "10px",
                        fontWeight: "600",
                        borderRadius: 26,
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "#ffff",
                        backgroundColor: "#4fa9ff",
                      }
                    : {
                        p: 0,
                        border: "1px solid black",
                        height: "40px",
                        marginLeft: "10px",
                        fontWeight: "600",
                        borderRadius: 26,
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "#6A6A6A",
                      }
                }
              >
                Experience Level <KeyboardArrowDownOutlinedIcon />
                {exper.length > 0 ? (
                  <Typography
                    sx={
                      exper.length > 0
                        ? {
                            borderRadius: "50%",
                            border: "1px solid #ffff",
                            p: "3px 8px 3px 8px",
                            background: "#ffff",
                            color: "black",
                          }
                        : {
                            borderRadius: "50%",
                            border: "1px solid #6a6a6a",
                            p: "3px 8px 3px 8px",
                          }
                    }
                  >
                    {exper.length}
                  </Typography>
                ) : (
                  ""
                )}
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl1}
                open={open1}
                onClose={handleCloseEx}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                style={{
                  borderRadius: "12px",
                  width: "250px",
                  marginLeft: "2px",
                  marginTop: "12px",
                }}
              >
                <MenuItem>
                  <FormGroup>
                    {USER_EXPERIENCES.map((job, ind) => (
                      <FormControlLabel
                        key={ind}
                        control={
                          exper.includes(job) ? (
                            <Checkbox defaultChecked />
                          ) : (
                            <Checkbox />
                          )
                        }
                        onChange={(e) => {
                          handleExper(e);
                        }}
                        label={
                          <span style={{ textTransform: "capitalize" }}>
                            {job}
                          </span>
                        }
                        value={job}
                      />
                    ))}
                  </FormGroup>
                </MenuItem>
              </Menu>
            </Box>
            <Box>
              <Button
                id="basic-button"
                onClick={handleClickSave}
                variant="contained"
                style={{
                  height: "40px",
                  fontWeight: "600",
                  fontSize: "14px",
                  lineHeight: "23px",
                  color: NEUTRAL,
                  backgroundColor: PRIMARY,
                }}
                endIcon={<FilterAltIcon />}
              >
                Save Filter
              </Button>
              {names.length > 0 || exper.length > 0 ? (
                <Button
                  variant="contained"
                  round
                  onClick={() => {
                    handleTrig();
                  }}
                  sx={{
                    width: "100px",
                    ml: "10px",
                    p: 0,
                    border: "1px solid black",
                    borderRadius: 16,
                    color: "#ffff",
                    backgroundColor: "#4fa9ff",
                    height: "40px",
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "23px",
                  }}
                >
                  Reset
                </Button>
              ) : (
                ""
              )}
            </Box>
          </Box>
          <Box>
            <Grid container spacing={0} sx={styles.containergrid}>
              {matches === true ? (
                ""
              ) : (
                <Grid item lg={4} md={5} sm={12} sx={styles.leftcard}>
                  {latejob.length === 0
                    ? counts.map((coun, ind) => <></>)
                    : latejob.map(
                        ({
                          jobTitle,
                          applicationDeadline,
                          _id,
                          company,
                          salary,
                          createdAt,
                          address,
                          jobType,
                          jobRole,
                          essentialInformation,
                        }) => {
                          return (
                            <Grid item xl={12} key={_id} sx={styles.cardslist}>
                              <div onClick={() => getJobInfo(_id, jobTitle)}>
                                <Jobscard
                                  jobId={_id}
                                  jobTitle={jobTitle}
                                  company={company}
                                  salary={salary}
                                  createdAt={createdAt}
                                  applicationDedline={applicationDeadline}
                                  address={address}
                                  jobType={jobType}
                                  jobRole={jobRole}
                                  selectedId={singleJob && singleJob._id}
                                  essentialInformation={essentialInformation}
                                />
                              </div>
                            </Grid>
                          );
                        }
                      )}
                </Grid>
              )}
              {matches === true ? (
                <div className="jobsbdy">
                  {latejob.length === 0
                    ? counts.map((coun, ind) => <></>)
                    : latejob.map(
                        ({
                          jobTitle,
                          applicationDeadline,
                          _id,
                          company,
                          salary,
                          createdAt,
                          address,
                          jobType,
                          jobRole,
                          essentialInformation,
                        }) => (
                          <div
                            style={{ marginBottom: "50px" }}
                            onClick={() => {
                              matches === false
                                ? getJobInfo(_id, jobRole)
                                : handleResponse(_id);
                            }}
                          >
                            <Jobscard
                              jobId={_id}
                              jobTitle={jobTitle}
                              company={company}
                              salary={salary}
                              createdAt={createdAt}
                              applicationDedline={applicationDeadline}
                              address={address}
                              jobType={jobType}
                              jobRole={jobRole}
                              selectedId={singleJob && singleJob._id}
                              essentialInformation={essentialInformation}
                            />
                          </div>
                        )
                      )}
                </div>
              ) : (
                ""
              )}
              {matches === true ? (
                " "
              ) : (
                <Grid item md={6.5} sm={12} sx={styles.rightcard}>
                  {singleJob && latejob.length > 0 ? (
                    <Maincard jobDetails={singleJob} />
                  ) : (
                    <NoResult></NoResult>
                  )}
                </Grid>
              )}
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
