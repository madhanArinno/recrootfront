import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { styles } from "./employerhstyle";
import { Grid } from "@mui/material";
import { CanditateCard } from "./CanditateCard";
import { CanditateCvcard } from "./CanditateCvcard";
import { useSelector, useDispatch } from "react-redux";
import {
  applyJobsdet,
  getJobsfil,
  getSinDetails,
  getSinResume,
  getSinCover,
} from "../slices/applyJobs";

export function CanditateDetails() {
  let dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(applyJobsdet());
    dispatch(getJobsfil());
  }, [dispatch]);
  const user = useSelector((state) => state.apply.details);

  const single = useSelector(
    (data) => data.apply.single && data.apply.single.resumeId
  );
  const singlecov = useSelector(
    (data) => data.apply.single && data.apply.single.coverId
  );

  React.useEffect(() => {
    dispatch(getSinDetails(user[0]));
  }, [dispatch, user]);

  React.useEffect(() => {
    if (single === undefined) {
    } else {
      dispatch(getSinResume(single));
      dispatch(getSinCover(singlecov));
    }
  }, [dispatch, single, singlecov]);

  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Toolbar />
      </Box>
      <Grid
        container
        spacing={1}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Grid item md={4} sm={12} xs={12} sx={styles.left}>
          <CanditateCard />
        </Grid>

        <Grid item md={8} sm={12}>
          <CanditateCvcard />
        </Grid>
      </Grid>
    </Box>
  );
}
