import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { styles } from "./employerhstyle";

function ScreeningQuestions() {
  const jobDet = useSelector((data) => data.apply.single);

  return (
    <div>
      {jobDet.jobDetail && jobDet.jobDetail.queshow !== "false" ? (
        <>
          <Divider />
          <Typography variant="h5" sx={styles.titleexp}>
            Answered Questions
          </Typography>
          <Box sx={{ mb: "20px" }}>
            {jobDet &&
              jobDet.question &&
              jobDet.question.map((quiz, ind) => (
                <div key={quiz.id}>
                  <Box sx={{ ml: "40px" }}>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "600", fontSize: "18px" }}
                    >
                      Question {ind + 1}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ ml: "15px", fontWeight: "400" }}
                    >
                      {quiz.questions} ?
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ ml: "55px" }}>
                    <span style={{ fontWeight: 600 }}>Answer:</span>{" "}
                    {quiz.answer}.
                  </Typography>
                </div>
              ))}
          </Box>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default ScreeningQuestions;
