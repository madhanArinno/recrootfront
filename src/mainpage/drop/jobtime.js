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
    Last_24_hours: false,
    Last_3_days: false,
    Last_7_days: false,
    Last_month: false,
    Anytime: false,
  });
  const { Last_24_hours, Last_3_days, Last_7_days, Last_month, Anytime } =
    state;
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
        View All <KeyboardArrowDownOutlinedIcon />
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
          width: "190px",
          marginLeft: "2px",
          marginTop: "12px",
        }}
      >
        <MenuItem>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Last_24_hours}
                  onChange={handleChange}
                  name="Last_24_hours"
                />
              }
              label="Last 24 Hours"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Last_3_days}
                  onChange={handleChange}
                  name="Last_3_days"
                />
              }
              label="Last 3 Days"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Last_7_days}
                  onChange={handleChange}
                  name="Last_7_days"
                />
              }
              label="Last 7 Days"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Last_month}
                  onChange={handleChange}
                  name="Last_month"
                />
              }
              label="Last Month"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Anytime}
                  onChange={handleChange}
                  name="Anytime"
                />
              }
              label="Anytime"
            />
          </FormGroup>
        </MenuItem>
      </Menu>
    </div>
  );
}
