import React from "react";
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export function trainingFunction(
  training,
  setTraining,
  valueTwo,
  handleChange,
  trannigInput,
  handleTraningEndDate,
  handleTraningStartDate,
  addTraningUi,
  insertTraningChanges,
  removeTraning
) {
  return (
    <Grid container spacing={2} sx={{ marginTop: 2 }}>
      <Card
        sx={{
          width: "650px",
          padding: "15px",
          boxShadow: "4px 4px 60px rgba(193, 200, 209, 0.25);",
          borderRadius: "8px",
          border: "none",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
        variant="outlined"
      >
        <Grid
          item
          xs={12}
          sm={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            component="h6"
            color="initial"
            sx={{
              color: "#6A6A6A",
              marginTop: "10px",
              fontWeight: 800,
            }}
          >
            Training
          </Typography>
          {training === false ? (
            <IconButton
              onClick={(e) => {
                setTraining(true);
              }}
            >
              <KeyboardArrowDownIcon />{" "}
            </IconButton>
          ) : (
            <IconButton
              onClick={(e) => {
                setTraining(false);
              }}
            >
              {" "}
              <ExpandLessRoundedIcon />{" "}
            </IconButton>
          )}
        </Grid>

        {training === true
          ? trannigInput.map((trannigInput) => (
              <React.Fragment key={trannigInput.id}>
                <Grid item xs={12} sm={12}>
                  <Stack direction="row" spacing={2}>
                    <TextField
                      fullWidth
                      id="traning_title"
                      label="Title"
                      name="title"
                      autoComplete="user-name"
                      value={trannigInput.title}
                      onChange={(event) =>
                        insertTraningChanges(trannigInput.id, event)
                      }
                    />

                    <TextField
                      fullWidth
                      id="traning_nstitute"
                      label="Institute"
                      name="instituete"
                      autoComplete="user-name"
                      value={trannigInput.instituete}
                      onChange={(event) =>
                        insertTraningChanges(trannigInput.id, event)
                      }
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Stack direction="row" spacing={2}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label="Start Date"
                        inputFormat="MM/dd/yyyy"
                        value={trannigInput.fromDate}
                        name="fromDate"
                        onChange={(event) =>
                          handleTraningStartDate(trannigInput.id, event)
                        }
                        renderInput={(params) => <TextField {...params} />}
                      />
                      <Typography variant="h3" color="initial">
                        -
                      </Typography>
                      <DatePicker
                        label="End Date"
                        inputFormat="MM/dd/yyyy"
                        value={trannigInput.toDate}
                        name="toDate"
                        onChange={(event) =>
                          handleTraningEndDate(trannigInput.id, event)
                        }
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                      onClick={(event) => removeTraning(trannigInput.id)}
                    >
                      {" "}
                      <ClearRoundedIcon />
                    </IconButton>
                  </Stack>
                </Grid>
              </React.Fragment>
            ))
          : ""}
        {training === true ? (
          <Button
            startIcon={<AddIcon />}
            variant="outlined"
            size="large"
            spacing={2}
            sx={{ marginTop: 2, height: "3.4375em", maxWidth: 250 }}
            onClick={addTraningUi}
          >
            Add Traning
          </Button>
        ) : (
          ""
        )}
      </Card>
    </Grid>
  );
}
