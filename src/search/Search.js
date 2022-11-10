import {
  Box,
  Button,
  Typography,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import React, { useState } from "react";
import { styles } from "./searcjhstyle";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { keywordSearch, searchKeys } from "../slices/search";
import { useNavigate } from "react-router-dom";
import { jobssSet } from "../slices/job";
function Search(props) {
  let navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();
  const search = useSelector((data) => data.searchJobs.jobslate);
  const [type, setType] = useState(search.type);
  function searchJobs() {
    dispatch(jobssSet([]));
    dispatch(searchKeys({ keyword: keyword, location: location, type: type }));
    dispatch(keywordSearch({ keyword, location, type }))
      .then(() => {
        navigate("/Mainpage", { replace: true });
      })
      .catch((error) => {
        console.warn(error);
      });
  }
  function typeChange(event) {
    setType(event.target.value);
    dispatch(searchKeys({ type: event.target.value }));
  }

  function handleChangeKeyword(event) {
    setKeyword(event.target.value);
    dispatch(searchKeys({ keyword: event.target.value }));
  }
  function handleChangeLocation(event) {
    setLocation(event.target.value);
    dispatch(searchKeys({ location: event.target.value }));
  }

  return (
    <div className="mainsearch" style={{ marginTop: "10px" }}>
      <Box sx={styles.boxmain}>
        {props.check !== true ? (
          <Typography variant="h6" sx={styles.title}>
            FIND REMOTE TECH JOBS
          </Typography>
        ) : (
          ""
        )}
        <Box sx={styles.input}>
          <SearchIcon sx={styles.srch} />
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Keyword or title"
            inputProps={{ "aria-label": "Keyword or title" }}
            value={search.keyword}
            onChange={handleChangeKeyword}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Location"
            inputProps={{ "aria-label": "Location" }}
            value={search.location}
            onChange={handleChangeLocation}
          />
          <Button variant="contained" sx={styles.btn} onClick={searchJobs}>
            Search
          </Button>
        </Box>
        <FormControl>
          <RadioGroup
            sx={styles.radio}
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            className="listtype"
            defaultValue="Permanent"
            onChange={typeChange}
            value={search.type}
          >
            <FormControlLabel
              style={{ color: "#4F9AFF" }}
              value="Remote"
              control={<Radio style={{ color: "#4F9AFF" }} />}
              label="Remote"
            />
            <FormControlLabel
              style={{ color: "#4F9AFF" }}
              value="Onsite"
              control={<Radio style={{ color: "#4F9AFF" }} />}
              label="Onsite"
            />
            <FormControlLabel
              style={{ color: "#4F9AFF" }}
              value="Hybrid"
              control={<Radio style={{ color: "#4F9AFF" }} />}
              label="Hybrid"
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </div>
  );
}

export default Search;
