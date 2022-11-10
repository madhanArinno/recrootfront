import { Grid } from "@mui/material";
import { useEffect } from "react";
import { styles } from "./mainpagestyle";
import Jobscard from "../recent/Jobscard";
import { Maincard } from "./Maincard";
import { NoResult } from "./NoResult";
import { useDispatch, useSelector } from "react-redux";
import { selectTheJob } from "../slices/search";

export function Carddetails() {
  const dispatch = useDispatch();
  const latestJobs = useSelector((state) => state.searchJobs);

  function getJobInfo(_id) {
    dispatch(selectTheJob(_id));
  }

  return (
    <>
      <Grid container spacing={2} sx={styles.containergrid}>
        <Grid item md={4} sm={12} sx={styles.leftcard}>
          {latestJobs.searchDetails.map(
            ({
              jobTitle,
              applicationDedline,
              _id,
              company,
              salary,
              createdAt,
              address,
              jobType,
            }) => (
              <Grid item xl={12} key={_id} sx={styles.cardslist}>
                <div onClick={() => getJobInfo(_id)}>
                  <Jobscard
                    jobId={_id}
                    jobTitle={jobTitle}
                    company={company}
                    salary={salary}
                    createdAt={createdAt}
                    applicationDedline={applicationDedline}
                    address={address}
                    jobType={jobType}
                    selectedId={latestJobs.selectedJob._id}
                  />
                </div>
              </Grid>
            )
          )}
        </Grid>
        <Grid item md={8} sm={12} sx={styles.rightcard}>
          {latestJobs.selectedJob ? (
            <Maincard jobDetails={latestJobs.selectedJob} />
          ) : (
            <NoResult></NoResult>
          )}
        </Grid>
      </Grid>
    </>
  );
}
