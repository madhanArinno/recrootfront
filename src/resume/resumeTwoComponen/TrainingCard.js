import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Box } from "@mui/material";

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
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px", mt: "10px" }}>
        <Grid item xs={12} sm={5}>
          <TextField
            fullWidth
            id="traning_title"
            label="Title"
            name="title"
            required
            value={name.title}
            onChange={props.handleChangesChild}
            error={name.title === "" ? true : false}
            helperText={
              name.title === "" ? "Please Provide Training Title" : ""
            }
            autoComplete="user-name"
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            fullWidth
            id="traning_nstitute"
            label="Institute"
            required
            name="instituete"
            value={name.instituete}
            onChange={props.handleChangesChild}
            error={name.instituete === "" ? true : false}
            helperText={
              name.instituete === "" ? "Please Provide Training Institute" : ""
            }
            autoComplete="user-name"
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Stack direction="row" spacing={2}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MobileDatePicker
                label="From"
                inputFormat="MM/dd/yyyy"
                value={name === "" ? value : name.fromDate}
                onChange={handleChange}
                required
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
                required
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Stack>
        </Grid>
      </Box>
    </>
  );
}
