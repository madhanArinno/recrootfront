import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export function TrainingCard(props) {
  const { name } = props;

  const [value, setValue] = React.useState(new Date());
  const [value2, setValue2] = React.useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
    props.handleChangesdate(newValue);
  };

  const handleChangeto = (newValue2) => {
    setValue2(newValue2);
    props.handleChangestodate(newValue2);
  };

  return (
    <>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          id="traning_title"
          label="Title"
          name="title"
          value={name.title}
          onChange={props.handleChangesChild}
          autoComplete="user-name"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          id="traning_nstitute"
          label="Institute"
          name="instituete"
          value={name.instituete}
          onChange={props.handleChangesChild}
          autoComplete="user-name"
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <Stack direction="row" spacing={2}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDatePicker
              label="From"
              inputFormat="MM/dd/yyyy"
              value={name === "" ? value : name.fromDate}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
            <Typography variant="h3" color="initial">
              -
            </Typography>
            <MobileDatePicker
              label="To"
              inputFormat="MM/dd/yyyy"
              value={name === "" ? value2 : name.toDate}
              onChange={handleChangeto}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </Stack>
      </Grid>
    </>
  );
}
