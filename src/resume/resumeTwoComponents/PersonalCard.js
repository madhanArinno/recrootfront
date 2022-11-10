import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { personal } from "../../redux/action";
import moment from "moment";
import { COUNTRIES } from "../../constants";
uuidv4();

export function PersonalCard(props) {
  const { name } = props;

  let dispatch = useDispatch();

  const handlePersonalDetailsCountryChangeInput = (id, event) => {
    const newinputPersonalDetailsCountry = inputPersonalDetailsCountry.map(
      (i) => {
        if (id === i.id) {
          i[event.target.name] = event.target.value;
        }
        return i;
      }
    );
    setInputPersonalDetailsCountry(newinputPersonalDetailsCountry);
    setdt();
  };
  const handleNationalityChangeInput = (id, event) => {
    const newinputPersonalDetailsCountry = nationality.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });
    setNationality(newinputPersonalDetailsCountry);

    setdt();
  };
  const handleRightsChangeInput = (id, event) => {
    const newinputPersonalDetailsCountry = rights.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });
    setRights(newinputPersonalDetailsCountry);
    setdt();
  };

  const [available, setAvailable] = useState({
    days: name.availablity.days,
    fromDate: name.availablity.fromDate,
    toDate: name.availablity.toDate,
  });

  var avaliab = {};

  const handleFrom = (value) => {
    setAvailable({
      ...available,
      fromDate: moment(value).format("L"),
    });
    avaliab = { ...available, fromDate: moment(value).format("L") };
    setdt();
  };
  const handleTo = (value) => {
    setAvailable({
      ...available,
      toDate: moment(value).format("L"),
    });
    avaliab = { ...available, toDate: moment(value).format("L") };
    setdt();
  };

  const handleAvailable = (e) => {
    let { name, value } = e.target;
    setAvailable({
      ...available,
      [name]: value,
    });

    avaliab = { ...available, [name]: value };
    setdt();
  };

  const [inputPersonalDetailsCountry, setInputPersonalDetailsCountry] =
    useState(name.country);

  const [nationality, setNationality] = useState(name.nationality);

  const [rights, setRights] = useState(name.countrieswithworkingRights);

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

  const setdt = () => {
    setData({
      country: inputPersonalDetailsCountry,
      nationality: nationality,
      countrieswithworkingRights: rights,
      available: avaliab,
    });
    dispatch(personal(data));
  };

  useEffect(() => {
    dispatch(personal(data));
  }, [data, dispatch]);

  const handleCountryChange = () => {
    setInputPersonalDetailsCountry([
      ...inputPersonalDetailsCountry,
      { id: uuidv4(), country: "" },
    ]);
  };
  const handleNationalityChange = () => {
    setNationality([...nationality, { id: uuidv4(), country: "" }]);
  };
  const handleRightsChange = () => {
    setRights([...rights, { id: uuidv4(), country: "" }]);
  };

  return (
    <>
      <Grid item xs={12} sm={12}>
        <Typography
          variant="span"
          component="span"
          color="initial"
          sx={{
            color: "#6A6A6A",
            marginBottom: "10px",
            fontWeight: 800,
            marginTop: "15px",
            display: "grid",
          }}
        >
          Country
        </Typography>
        <Stack direction="column" spacing={2}>
          {inputPersonalDetailsCountry.map((inputPersonalDetailsCountry) => (
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
                <label htmlFor="icon-button-file">
                  <IconButton
                    color="primary"
                    aria-label="add to shopping cart"
                    onClick={handleCountryChange}
                  >
                    <AddCircleOutlineIcon />
                  </IconButton>
                </label>
              </Stack>
            </div>
          ))}
        </Stack>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography
          variant="span"
          component="span"
          color="initial"
          sx={{
            color: "#6A6A6A",
            marginBottom: "10px",
            fontWeight: 800,
            marginTop: "15px",
            display: "grid",
          }}
        >
          Nationality
        </Typography>
        <Stack direction="column" spacing={2}>
          {nationality.map((inputPersonalDetailsCountry) => (
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
                      handleNationalityChangeInput(
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
                <label htmlFor="icon-button-file">
                  <IconButton
                    color="primary"
                    aria-label="add to shopping cart"
                    onClick={handleNationalityChange}
                  >
                    <AddCircleOutlineIcon />
                  </IconButton>
                </label>
              </Stack>
            </div>
          ))}
        </Stack>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography
          variant="span"
          component="span"
          color="initial"
          sx={{
            color: "#6A6A6A",
            marginBottom: "10px",
            fontWeight: 800,
            marginTop: "15px",
            display: "grid",
          }}
        >
          Countries with valid working rights
        </Typography>
        <Stack direction="column" spacing={2}>
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
                <label htmlFor="icon-button-file">
                  <IconButton
                    color="primary"
                    aria-label="add to shopping cart"
                    onClick={handleRightsChange}
                  >
                    <AddCircleOutlineIcon />
                  </IconButton>
                </label>
              </Stack>
            </div>
          ))}
        </Stack>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography
          variant="span"
          component="span"
          color="initial"
          sx={{
            color: "#6A6A6A",
            marginBottom: "10px",
            fontWeight: 800,
            marginTop: "15px",
            display: "grid",
          }}
        >
          When are you available to work
        </Typography>
        <Stack direction="row" spacing={2}>
          <TextField
            sx={{ width: "300px" }}
            id="userName"
            label="Add Days "
            name="days"
            value={available.days}
            onChange={handleAvailable}
            autoComplete="user-name"
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDatePicker
              label="Date mobile"
              inputFormat="MM/dd/yyyy"
              value={available.fromDate}
              onChange={handleFrom}
              renderInput={(params) => <TextField {...params} />}
            />
            <MobileDatePicker
              label="Date mobile"
              inputFormat="MM/dd/yyyy"
              value={available.toDate}
              onChange={handleTo}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Stack>
      </Grid>
    </>
  );
}
