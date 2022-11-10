import { Button, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./recent.css/.";
import Container from "@mui/material/Container";
import { styles } from "./Recentstyle";
import SortIcon from "@mui/icons-material/Sort";
import Jobscard from "./Jobscard";
import { useDispatch } from "react-redux";
import { searchJobs, searchJobsFromHome, setJob } from "../slices/search";
import { useNavigate } from "react-router-dom";
import { applCand, jobssSet } from "../slices/job";
import { Box } from "@mui/system";
import axios from "axios";
function Recent() {
  let navigate = useNavigate();

  const [latestJobs, setLatestJobs] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchJobs())
      .unwrap()
      .then((originalPromiseResult) => {
        setLatestJobs(originalPromiseResult);

        dispatch(setJob(originalPromiseResult[0]))
        dispatch(jobssSet([]))
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [dispatch]);
  var mapjobs = [];
  latestJobs.map((job) => {
    if (job.status === "active") {
      mapjobs.push(job);
    }
    return null;
  });

  function selectJobFromHome(_id) {

    dispatch(searchJobsFromHome(_id))
      .unwrap()
      .then(() => {
        navigate(`/Mainpage`);
      });
  }

  const viewMore = () => {
    dispatch(jobssSet([]));
    dispatch(searchJobs())
      .unwrap()
      .then(() => {
        navigate("/Mainpage", { replace: true });
      })
      .catch((error) => {});
  };
  const [apply, setApply] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("User"));
    if (user === null || user === undefined) {
      setApply([]);
    } else {
      axios
        .get(`http://localhost:3000/api/getApplyjobs/${user.User._id}`, {
          headers: { "x-access-token": `${user.token}` },
        })
        .then((res) => setApply(res.data))
        .catch((error) => console.warn(error));
    }
  }, []);
  var applied = [];
  apply.map((job) => applied.push(job.jobId));

  dispatch(applCand(applied));
  var counts = ["1", "2", "1", "2", "1", "2", "1", "2"];
  return (
    <div className="recentmain">
      <h2 className="titlerecent">RECENT JOBS</h2>
      <Container maxWidth="xl">
        <div className="titlejobs">
          <p className="jobs">
            {latestJobs.length < 8 ? latestJobs.length : 8} new Jobs{" "}
          </p>
          <Button variant="outlined" sx={styles.btn1}>
            <SortIcon />
            <p className="btnrct" onClick={() => viewMore()}>
              View More
            </p>
          </Button>
        </div>
        <div className="jobsbdy">
          {mapjobs.length === 0
            ? counts.map((coun, ind) => (
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                    flexDirection: "column",
                    flexWrap: "wrap",
                  }}
                  key={ind}
                >
                  <Box
                    sx={{ display: "flex", gap: "10px", flexDirection: "row" }}
                  >
                    <Skeleton variant="circular" width={45} height={45} />
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem", width: "150px" }}
                    />
                  </Box>
                  <Skeleton variant="rectangular" width={210} height={60} />
                  <Skeleton variant="rounded" width={210} height={60} />
                </Box>
              ))
            : latestJobs
                .slice(0, 8)
                .map(
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
                      key={_id}
                      onClick={() => selectJobFromHome(_id)}
                    >
                      <Jobscard
                        jobTitle={jobTitle}
                        company={company}
                        salary={salary}
                        createdAt={createdAt}
                        jobRole={jobRole}
                        applicationDedline={applicationDeadline}
                        address={address}
                        jobType={jobType}
                        essentialInformation={essentialInformation}
                      />
                    </div>
                  )
                )}
        </div>
      </Container>
    </div>
  );
}
export default Recent;
