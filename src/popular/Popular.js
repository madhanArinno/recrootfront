import { Box, Card, Typography, CardContent, Container } from "@mui/material";
import React from "react";
import { styles } from "./popularstyle";
import "./popular.css/.";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { jobssSet } from "../slices/job";
import { CategoryJobs, searchJobs } from "../slices/search";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { useNavigate } from "react-router-dom";

function Popular(props) {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    dispatch(searchJobs())
      .unwrap()
      .then((originalPromiseResult) => {
        setJobs(originalPromiseResult);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [dispatch]);

  var types = [];
  jobs.map((tit) => {
    if (tit.status === "active") {
      types.push(tit.jobTitle);
    }
    return null;
  });

  var news = [...new Set(types)];

  const counts = {};
  for (const num of types) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  function filterByValue(array, string) {
    return array.filter((o) => o.jobTitle.includes(string));
  }

  const handleClick = (value) => {
    dispatch(CategoryJobs(filterByValue(jobs, value)));
    dispatch(jobssSet(filterByValue(jobs, value)))
      .unwrap()
      .then(() => {
        navigate("/Mainpage", { replace: false });
      });
  };
  var titcoun = [];

  news.map((obs) => titcoun.push({ name: obs, count: counts[obs] }));

  function compare(a, b) {
    if (a.count > b.count) {
      return -1;
    }
    if (a.count < b.count) {
      return 1;
    }
    return 0;
  }

  var newst = titcoun.sort(compare);

  return (
    <div className="popular">
      <Box className="" sx={styles.popular}>
        <Typography variant="h6" sx={styles.maintitle}>
          BROWSE POPULAR
        </Typography>
        <Typography variant="h6" sx={styles.subtitle}>
          CATEGORIES
        </Typography>
        <Container maxWidth="xl">
          <Box sx={styles.cards}>
            {newst
              .slice(0, 8)
              .map((net, ind) => (
                <Card
                  sx={styles.card}
                  key={ind}
                  onClick={() => {
                    handleClick(net.name);
                  }}
                  variant="outlined"
                >
                  <CardContent sx={styles.content}>
                    <ApartmentIcon
                      sx={{ fontSize: "2.5em", color: "#4fa9ff" }}
                    />
                    <Box sx={styles.category}>
                      <Typography variant="p" sx={styles.jobtitle}>
                        {net.name}
                      </Typography>
                      <Typography variant="p" sx={styles.subjbtitle}>
                        {net.count} Jobs Available
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              ))
              .sort()}
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default Popular;
