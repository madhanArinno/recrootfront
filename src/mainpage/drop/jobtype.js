import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [state, setState] = useState({
    fullTime: false,
    partTime: false,
    contract: false,
    freeLancing: false,
  });
  const { fullTime, partTime, contract, freeLancing } = state;
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{ width: "150px", height: "50px" }}
      >
        JobType <KeyboardArrowDownOutlinedIcon />
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
          width: "180px",
          marginLeft: "2px",
          marginTop: "12px",
        }}
      >
        <MenuItem>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={fullTime}
                  onChange={handleChange}
                  name="fullTime"
                />
              }
              label="fullTime"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={partTime}
                  onChange={handleChange}
                  name="partTime"
                />
              }
              label="partTime"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={contract}
                  onChange={handleChange}
                  name="contract"
                />
              }
              label="contract"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={freeLancing}
                  onChange={handleChange}
                  name="freeLancing"
                />
              }
              label="freeLancing"
            />
          </FormGroup>
        </MenuItem>
      </Menu>
    </div>
  );
}
