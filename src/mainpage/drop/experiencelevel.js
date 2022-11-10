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
    fresher: false,
    underGraduate: false,
    one_to_threeYears: false,
    three_to_fiveYears: false,
    five_to_tenYears: false,
    higherThan_ten: false,
  });
  const {
    fresher,
    underGraduate,
    one_to_threeYears,
    three_to_fiveYears,
    five_to_tenYears,
    higherThan_ten,
  } = state;
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
        style={{ width: "150px" }}
      >
        Experience Level <KeyboardArrowDownOutlinedIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        style={{ borderRadius: "12px", marginLeft: "-20px" }}
      >
        <MenuItem>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={fresher}
                  onChange={handleChange}
                  name="fresher"
                />
              }
              label="fresher"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={underGraduate}
                  onChange={handleChange}
                  name="underGraduate"
                />
              }
              label="underGraduate"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={one_to_threeYears}
                  onChange={handleChange}
                  name="one_to_threeYears"
                />
              }
              label="1-3 Years"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={three_to_fiveYears}
                  onChange={handleChange}
                  name="three_to_fiveYears"
                />
              }
              label="3-5 Years"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={five_to_tenYears}
                  onChange={handleChange}
                  name="five_to_tenYears"
                />
              }
              label="5-10 Years"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={higherThan_ten}
                  onChange={handleChange}
                  name="higherThan_ten"
                />
              }
              label="Higher than 10"
            />
          </FormGroup>
        </MenuItem>
      </Menu>
    </div>
  );
}
