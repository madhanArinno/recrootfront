import { Divider } from '@mui/material';
import {
  Box,
  Button,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import React, { useState } from 'react';
import InputBase from '@mui/material/InputBase';
import { styles } from './profilestyle';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from "react-redux";
import { keywordSearch } from "../slices/search";
import { useNavigate } from "react-router-dom";

export function SearchProfile() {
  let navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("permanent");
  const dispatch = useDispatch();
  function searchJobs() {
  dispatch(keywordSearch({ keyword, location, type }))
  .unwrap()
  .then(() => {
    navigate("/Mainpage", { replace: true });
  })
  .catch((error) => {
    // toastyErrorFunction(error.response.data.errors[0].msg);
    // setSuccessful(false);
  });
}

function typeChange(event) {
// this.setState({ selected: ev.target.value });
setType(event.target.value);
}

function handleChangeKeyword(event) {
setKeyword(event.target.value);
}
function handleChangeLocation(event) {
setLocation(event.target.value);
}

  return (
    <Box>
    <Box sx={styles.input}>
      <SearchIcon sx={styles.srch} />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Keyword or title"
        inputProps={{ 'aria-label': 'Keyword or title' }} 
        onChange={handleChangeKeyword}/> <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Location"
        inputProps={{ 'aria-label': 'Location' }}
        onChange={handleChangeLocation}
         />
      <Button variant="contained" sx={styles.btn} onClick={searchJobs}>
        <SearchIcon sx={{ color: '#ffff' }} />
      </Button>
    </Box>
    <Box sx={{display:'flex',justifyContent:'center'}}>
      <FormControl>
          <RadioGroup
            sx={styles.radio}
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            className="listtype"
            defaultValue="Permanent"
            onChange={typeChange}
            value={type}
          >
            <FormControlLabel
              style={{ color: "#ffff" }}
              value="permanent"
              control={<Radio style={{ color: "#ffff" }} />}
              label="Permanent"
            />
            <FormControlLabel
              style={{ color: "#ffff" }}
              value="contract"
              control={<Radio style={{ color: "#ffff" }} />}
              label="Contract"
            />
            <FormControlLabel
              style={{ color: "#ffff" }}
              value="Freelancing"
              control={<Radio style={{ color: "#ffff" }} />}
              label="Freelancing"
            />
          </RadioGroup>
        </FormControl>
    </Box>
    </Box>
  );
}
