import * as React from "react";
import { Card, Divider } from "@mui/material";
import { Aboutprofile } from "./Aboutprofile";
import { CvRender } from "./CvRender";
import { styles } from "./employerhstyle";
import { ExperienceCv } from "./ExperienceCv";
import EducationCv from "./EducationCv";
import ScreeningQuestions from "./ScreeningQuestions";
import { useSelector } from "react-redux";
import NoCandidate from "./NoCandidate";
import { CoverRender } from "./CoverRender";

export function CanditateCvcard() {
  const single = useSelector((data) => data.apply.single);
  const cover = useSelector((state) => state.apply.cover);

  return (
    <Card sx={styles.rightcard}>
      {single ? (
        <>
          <Aboutprofile />
          <ExperienceCv />
          <EducationCv />
          <Divider />
          <CvRender />
          {cover.cover === null || cover.cover === undefined ? (
            ""
          ) : (
            <CoverRender />
          )}
          <ScreeningQuestions />
        </>
      ) : (
        <NoCandidate />
      )}
    </Card>
  );
}
