import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import {
  Card,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { setJobID } from "../../slices/personal";

const EmpQuiz = () => {
  let dispatch = useDispatch();

  const quiz = useSelector((state) => state.personal.ids);

  const [answer, setAnswer] = useState(quiz.question);

  const handleRadio = (e, id) => {
    const newMemChange = answer.map((i) => {
      if (id === i.id) {
        i = { ...i, [e.target.name]: e.target.value };
        i.id = id;
      }
      return i;
    });

    setAnswer(newMemChange);
    dispatch(
      setJobID({
        companyId: quiz.companyId,
        jobId: quiz.jobId,
        name: quiz.name,
        question: newMemChange,
        show: quiz.show,
      })
    );
  };

  return (
    <>
      <Grid item xs={12} md={12} sx={{ margin: 2 }}>
        <Stack direction="row ">
          <Typography
            variant="h5"
            color="initial"
            sx={{
              fontWeight: 700,
              fontSize: "24px",
              ml: { sm: "70px", xs: "20px" },
            }}
          >
            Questions from the Employer
          </Typography>
        </Stack>
      </Grid>
      <Box sx={{ mt: "60px" }}>
        {quiz.show === "true" || quiz.show === undefined ? (
          quiz.question.map((qu, ind) => (
            <Card>
              <Box
                key={qu.id}
                sx={{ ml: { sm: "150px", xs: "30px" }, mt: "10px" }}
              >
                {/* <Typography variant='h5' sx={{fontWeight: "800", fontSize: "20px",mb:'10px',mr:'20px', lineHeight: "18px"}}>Question{ind + 1}</Typography> */}
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "700",
                    fontSize: "18px",
                    lineHeight: "18px",
                    textTransform: "capitalize",
                  }}
                >
                  {qu.questions} ?
                </Typography>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue={qu.answer}
                  name="answer"
                  onChange={(e) => {
                    handleRadio(e, qu.id);
                  }}
                  sx={{ flexDirection: "column" }}
                >
                  <FormControlLabel
                    value="yes"
                    sx={{ fontSize: "10px" }}
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="no"
                    sx={{ fontSize: "10px" }}
                    control={<Radio />}
                    label="No"
                  />
                </RadioGroup>
              </Box>
              <Divider />
            </Card>
          ))
        ) : (
          <Box sx={{ ml: { sm: "150px", xs: "30px" }, mt: "10px" }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "700",
                fontSize: "18px",
                lineHeight: "18px",
                textTransform: "capitalize",
              }}
            >
              *Employer Was Not Provided Any Question Go To Next Page ...
            </Typography>
          </Box>
        )}
      </Box>
    </>
  );
};

export default EmpQuiz;
