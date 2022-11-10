import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { personalSet } from "../../slices/personal";
import { Box, Checkbox, ListItemText } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { styled } from "@mui/styles";
import { GRAY } from "../../Theme/Colors";
import { WORK_AVAILABILITY, COUNTRIES, NATIONALITIES } from "../../constants";

const StyledHeadrs = styled(Typography)({
  color: GRAY,
  fontWeight: 800,
  marginTop: "40px",
  display: "grid",
});

const StyledInputContainer = styled(Box)({
  width: "100%",
});

uuidv4();

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export function PersonalCard(props) {
  const { name } = props;

  let dispatch = useDispatch();

  const handlePersonalDetailsCountryChangeInput = (id, event) => {
    const newinputPersonalDetailsCountry = inputPersonalDetailsCountry.map(
      (i) => {
        if (id === i.id) {
          i = { [event.target.name]: event.target.value };
          i.id = id;
        }
        return i;
      }
    );
    setInputPersonalDetailsCountry(newinputPersonalDetailsCountry);

    setData({ ...data, country: newinputPersonalDetailsCountry });
    // setdt();
  };
  const handleNationalityChangeInput = (id, event) => {
    const newinputPersonalDetailsCountry = nationality.map((i) => {
      if (id === i.id) {
        i = { [event.target.name]: event.target.value };
        i.id = id;
      }
      return i;
    });
    setNationality(newinputPersonalDetailsCountry);
    setData({ ...data, nationality: newinputPersonalDetailsCountry });
  };
  const handleRightsChangeInput = (id, event) => {
    const newinputPersonalDetailsCountry = rights.map((i) => {
      if (id === i.id) {
        i = { [event.target.name]: event.target.value };
        i.id = id;
      }
      return i;
    });
    setRights(newinputPersonalDetailsCountry);
    setData({
      ...data,
      countrieswithworkingRights: newinputPersonalDetailsCountry,
    });
  };

  const [available, setAvailable] = useState({
    days: name.availablity.days,
    fromDate: name.availablity.fromDate,
    toDate: name.availablity.toDate,
  });

  const handleAvailable = (event) => {
    const {
      target: { value },
    } = event;
    setAvailable({
      ...available,
      days: typeof value === "string" ? value.split(",") : value,
    });

    setData({
      ...data,
      available: {
        days: typeof value === "string" ? value.split(",") : value,
        fromDate: available.fromDate,
        toDate: available.toDate,
      },
    });
  };

  const [inputPersonalDetailsCountry, setInputPersonalDetailsCountry] =
    useState([{ id: uuidv4(), country: "" }]);

  const [nationality, setNationality] = useState([
    { id: uuidv4(), country: "" },
  ]);

  const [rights, setRights] = useState([{ id: uuidv4(), country: "" }]);

  const [data, setData] = useState({
    country: inputPersonalDetailsCountry,
    nationality: nationality,
    countrieswithworkingRights: rights,
    available: {
      days: available.days,
      fromDate: available.fromDate,
      toDate: available.toDate,
    },
  });

  useEffect(() => {
    dispatch(personalSet(data));
  }, [data, dispatch]);

  const handleCountryChange = () => {
    setInputPersonalDetailsCountry([
      ...inputPersonalDetailsCountry,
      { id: uuidv4(), country: "" },
    ]);
  };

  const handleCountryRemove = (id) => {
    let updatedField = [...inputPersonalDetailsCountry].filter(
      (fiel) => fiel.id !== id
    );
    setInputPersonalDetailsCountry(updatedField);
    setData({ ...data, country: updatedField });
  };

  const handleNationalityRemove = (id) => {
    let updatedField = [...nationality].filter((fiel) => fiel.id !== id);
    setNationality(updatedField);
    setData({ ...data, nationality: updatedField });
  };

  const handleRightsRemove = (id) => {
    let updatedField = [...rights].filter((fiel) => fiel.id !== id);
    setRights(updatedField);
    setData({ ...data, countrieswithworkingRights: updatedField });
  };

  const handleNationalityChange = () => {
    setNationality([...nationality, { id: uuidv4(), country: "" }]);
  };

  const handleRightsChange = () => {
    setRights([...rights, { id: uuidv4(), country: "" }]);
  };

  return (
    <>
      <StyledHeadrs variant="span" component="span" color="initial">
        Country
      </StyledHeadrs>
      <StyledInputContainer>
        <Box>
          {inputPersonalDetailsCountry.map((inputPersonalDetailsCountry) => (
            <Box key={inputPersonalDetailsCountry.id} display="flex">
              <FormControl fullWidth sx={{ mt: "10px" }}>
                <InputLabel id="country">Country</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="country"
                  name="country"
                  value={inputPersonalDetailsCountry.country}
                  label="Age"
                  fullWidth
                  onChange={(event) =>
                    handlePersonalDetailsCountryChangeInput(
                      inputPersonalDetailsCountry.id,
                      event
                    )
                  }
                >
                  {COUNTRIES.map((countryList, index) => (
                    <MenuItem key={index} value={countryList}>
                      {countryList}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Box display="flex">
                <IconButton
                  color="primary"
                  aria-label="add to shopping cart"
                  onClick={handleCountryChange}
                >
                  <AddCircleOutlineIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  aria-label="add to shopping cart"
                  onClick={() => {
                    handleCountryRemove(inputPersonalDetailsCountry.id);
                  }}
                >
                  <CancelIcon />
                </IconButton>
              </Box>
            </Box>
          ))}
        </Box>
      </StyledInputContainer>
      <StyledHeadrs variant="span" component="span" color="initial">
        Nationality
      </StyledHeadrs>
      <Grid>
        <Stack direction="column" spacing={2}>
          {nationality.map((inputPersonalDetailsCountry) => (
            <div key={inputPersonalDetailsCountry.id}>
              <Stack direction="row" spacing={0} marginTop={2}>
                <FormControl fullWidth>
                  <InputLabel id="country">Country</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="country"
                    name="country"
                    value={inputPersonalDetailsCountry.country}
                    label="Age"
                    fullWidth
                    onChange={(event) =>
                      handleNationalityChangeInput(
                        inputPersonalDetailsCountry.id,
                        event
                      )
                    }
                  >
                    {NATIONALITIES.map((countryList, index) => (
                      <MenuItem key={index} value={countryList}>
                        {countryList}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Box sx={{ display: "flex" }}>
                  <IconButton
                    color="primary"
                    aria-label="add to shopping cart"
                    onClick={handleNationalityChange}
                  >
                    <AddCircleOutlineIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    aria-label="add to shopping cart"
                    onClick={() => {
                      handleNationalityRemove(inputPersonalDetailsCountry.id);
                    }}
                  >
                    <CancelIcon />
                  </IconButton>
                </Box>
              </Stack>
            </div>
          ))}
        </Stack>
      </Grid>
      <StyledHeadrs variant="span" component="span" color="initial">
        Countries with valid working rights
      </StyledHeadrs>
      <Grid>
        <Stack direction="column" spacing={0}>
          {rights.map((inputPersonalDetailsCountry) => (
            <div key={inputPersonalDetailsCountry.id}>
              <Stack direction="row" spacing={2} marginTop={2}>
                <FormControl fullWidth>
                  <InputLabel id="country">Country</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="country"
                    name="country"
                    value={inputPersonalDetailsCountry.country}
                    label="Age"
                    fullWidth
                    onChange={(event) =>
                      handleRightsChangeInput(
                        inputPersonalDetailsCountry.id,
                        event
                      )
                    }
                  >
                    {COUNTRIES.map((countryList, index) => (
                      <MenuItem key={index} value={countryList}>
                        {countryList}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Box sx={{ display: "flex" }}>
                  <IconButton
                    color="primary"
                    aria-label="add to shopping cart"
                    onClick={handleRightsChange}
                  >
                    <AddCircleOutlineIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    aria-label="add to shopping cart"
                    onClick={() => {
                      handleRightsRemove(inputPersonalDetailsCountry.id);
                    }}
                  >
                    <CancelIcon />
                  </IconButton>
                </Box>
              </Stack>
            </div>
          ))}
        </Stack>
      </Grid>
      <StyledHeadrs variant="span" component="span" color="initial">
        When are you available to work
      </StyledHeadrs>
      <Grid>
        {/* <TextField
           fullWidth
            id="userName"
            label="Add Days "
            name="days"
            type='number'
            value={available.days}
            onChange={handleAvailable}
            autoComplete="user-name" /> */}
        {/*             
      <StyledToggleButtonGroup
        size="small"
        arial-label="Days of the week"
        name="days"
        value={available.days}
        onChange={(e, value) => handleAvailable(e,value)}
      >
        {DAYS.map((day, index) => (
          <StyledToggle key={index} value={day} >
            {day}
          </StyledToggle>
        ))}
      </StyledToggleButtonGroup> */}
        <FormControl variant="standard" fullWidth sx={{ mt: "10px" }}>
          <InputLabel id="mutiple-select-label" sx={{ ml: 1.5, mt: "0px" }}>
            Availability
          </InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            fullWidth
            // sx={styles.naminput}
            name="days"
            // sx={{ml:'28px',height:'63px',mt:'10px'}}
            variant="outlined"
            value={available.days}
            // onChange={handleChanges}
            renderValue={(selected) => selected.map((x) => x).join(", ")}
            MenuProps={MenuProps}
            onChange={handleAvailable}
          >
            {WORK_AVAILABILITY.map((variant, ind) => (
              <MenuItem key={ind} value={variant}>
                <Checkbox
                  checked={
                    available.days.findIndex((item) => item === variant) >= 0
                  }
                />
                <ListItemText primary={variant} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      {/* <Grid sx={{ mt: "20px" }}>
        <Stack direction="row" spacing={2}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDatePicker
              label="From Date"
              inputFormat="MM/dd/yyyy"
              value={available.fromDate}
              onChange={handleFrom}
              renderInput={(params) => (
                <TextField {...params} sx={{ width: "100%" }} />
              )}
            />
            <MobileDatePicker
              label="To Date"
              inputFormat="MM/dd/yyyy"
              value={available.toDate}
              onChange={handleTo}
              renderInput={(params) => (
                <TextField {...params} sx={{ width: "100%" }} />
              )}
            />
          </LocalizationProvider>
        </Stack>
      </Grid> */}
    </>
  );
}
