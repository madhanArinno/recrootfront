import React, { useEffect, useState } from "react";
import { styles } from "./postjobstyle";
import {
  Box,
  Button,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  TextareaAutosize,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Add, Close } from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { queShow, quesSet } from "../slices/job";
uuidv4();

function QuestionsScreen() {
  let dispatch = useDispatch();
  const quiz = useSelector((state) => state.jobs.question);
  const showq = useSelector((state) => state.jobs.queshow);
  const [question, setQuestion] = useState(quiz);
  const handleQueshow = (e) => {
    dispatch(queShow(e.target.value));
  };

  useEffect(() => {
    setQuestion(quiz);
  }, [quiz]);

  const handleQuestion = (id, event) => {
    const newinputPersonalDetailsCountry = question.map((i) => {
      if (id === i.id) {
        i = { ...i, [event.target.name]: event.target.value, answer: "" };
        i.id = id;
      }
      return i;
    });
    setQuestion(newinputPersonalDetailsCountry);
    dispatch(
      quesSet(
        question.map((i) => {
          if (id === i.id) {
            i = { ...i, [event.target.name]: event.target.value, answer: "" };
            i.id = id;
          }
          return i;
        })
      )
    );
  };
  const matches = useMediaQuery("(max-width:600px)");

  const handleAdd = () => {
    setQuestion([
      ...question,
      { id: uuidv4(), questions: "", answer: "", preferedAns: "" },
    ]);
    dispatch(
      quesSet([
        ...question,
        { id: uuidv4(), questions: "", answer: "", preferedAns: "" },
      ])
    );
  };

  function deleteQuestion(id) {
    let updatedQuestions = [...quiz].filter((ques) => ques.id !== id);
    setQuestion(updatedQuestions);
    dispatch(quesSet([...quiz].filter((ques) => ques.id !== id)));
  }

  return (
    <div>
      <Typography variant="h5" sx={styles.addtxt}>
        Screening Questions
      </Typography>

      <Box sx={{ ml: "50px" }}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={"true"}
          name="preferedAns"
          onChange={(e) => {
            handleQueshow(e);
          }}
          sx={{ flexDirection: "column" }}
        >
          <FormControlLabel
            value="true"
            control={<Radio />}
            label="Post Job With Screening Questions"
          />
          <FormControlLabel
            value="false"
            control={<Radio />}
            label="Post Job Without Screening Questions"
          />
        </RadioGroup>
      </Box>
      {showq === undefined || showq === "true"
        ? question &&
          question.map((quest, ind) => (
            <Box key={quest.id}>
              <Box sx={{ ml: "50px" }}>
                <Typography variant="h5" sx={styles.quesheadtxt}>
                  Question {ind + 1}
                </Typography>
              </Box>
              <Box sx={styles.radiobox}>
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={4}
                  placeholder="Enter Question"
                  onChange={(e) => {
                    handleQuestion(quest.id, e);
                  }}
                  value={quest.questions}
                  name="questions"
                  style={
                    matches === true
                      ? {
                          width: 300,
                          marginRight: "20px",
                          borderLeft: "1px solid black",
                          borderRadius: "12px",
                          fontSize: "18px",
                        }
                      : {
                          width: "80%",
                          marginRight: "20px",
                          borderLeft: "1px solid black",
                          borderRadius: "12px",
                          fontSize: "18px",
                        }
                  }
                />
                {question.length > 1 ? (
                  <IconButton edge="end" sx={{ mr: "2px", color: "#4fa9ff" }}>
                    <Close
                      onClick={() => {
                        deleteQuestion(quest.id);
                      }}
                    />
                  </IconButton>
                ) : (
                  ""
                )}
                <Button onClick={handleAdd}>
                  <Add />
                </Button>
              </Box>
              <Box sx={{ ml: "50px" }}>
                <Typography variant="h5" sx={styles.quesheadtxt}>
                  Preferred Answer
                </Typography>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue={quest.preferedAns}
                  name="preferedAns"
                  onChange={(e) => {
                    handleQuestion(quest.id, e);
                  }}
                  sx={{ flexDirection: "row" }}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </Box>
            </Box>
          ))
        : ""}
    </div>
  );
}

export default QuestionsScreen;
