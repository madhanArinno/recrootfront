import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

import Slider from "@mui/material/Slider";
export default function Salary() {
  const [value, setValue] = useState([10, 30]);
  const [check, setCheck] = useState({});

  var commas = [];
  if (value.length === 5) {
    commas = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    commas = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function valuetext(value) {
    return `${value}$`;
  }
  let beforeChange = null;
  const handleChange = (event, newValue) => {
    if (!beforeChange) {
      beforeChange = [...value];
    }
    if (beforeChange[0] !== newValue[0] && beforeChange[1] !== newValue[1]) {
      return;
    }
    setValue(newValue);
  };

  const marks = [
    {
      value: 0,
      label: "0$",
    },

    {
      value: 100,
      label: "100$",
    },
  ];

  const marks2 = [
    {
      value: 0,
      label: "0$",
    },

    {
      value: 100,
      label: "1000$",
    },
  ];

  const handleChangeCommitted = () => {
    beforeChange = null;
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const [selection, setSelection] = useState({});

  const updateSelection = (event, value) => {
    event.persist();
    const name = event.target.value;
    // setSelection({ name });
    setCheck(name);
  };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{fontWeight: "700", fontSize: "16px", lineHeight: "23px", color: "#6A6A6A"}}
      >
        Salary
        <KeyboardArrowDownOutlinedIcon />
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        style={{
          borderRadius: "12px",
          width: "500px",
          marginLeft: "-24px",
          marginTop: "12px",
        }}
      >
        <div style={{ padding: "10px" }}>
          <input
            type="radio"
            value="hour"
            name="hour"
            onChange={updateSelection}
          />{" "}
          Hourly &nbsp;&nbsp;
          <input
            type="radio"
            value="annualy"
            name="hour"
            onChange={updateSelection}
          />{" "}
          Annualy
        </div>
        <Typography
          id="non-linear-slider"
          gutterBottom
          style={{ marginLeft: "14px" }}
        >
          Dollers ($):&nbsp;&nbsp;{commas}
        </Typography>
        {check === "hour" ? (
          <MenuItem style={{ width: 350 }}>
            <Slider
              value={value}
              onChange={handleChange}
              onChangeCommitted={handleChangeCommitted}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={valuetext}
              marks={marks}
              // min="0" max="100"
            />
          </MenuItem>
        ) : (
          <MenuItem style={{ width: 350 }}>
            <Slider
              style={{ width: 300 }}
              value={value}
              onChange={handleChange}
              onChangeCommitted={handleChangeCommitted}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={valuetext}
              marks={marks2}
              // min="0" max="100"
            />
          </MenuItem>
        )}
      </Menu>
    </div>
  );
}
