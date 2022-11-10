import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useState } from "react";

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
    Remote: false,
    onSite: false,
    Hybird: false,
  });
  const { Remote, onSite, Hybird } = state;
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
        Location
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Remote}
                  onChange={handleChange}
                  name="Remote"
                />
              }
              label="Remote"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={onSite}
                  onChange={handleChange}
                  name="onSite"
                />
              }
              label="Onsite"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Hybird}
                  onChange={handleChange}
                  name="Hybird"
                />
              }
              label="Hybird"
            />
          </FormGroup>
        </MenuItem>
      </Menu>
    </div>
  );
}
