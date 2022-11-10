import React from "react";
import Grid from "@mui/material/Grid";
import { Card, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import LinkIcon from "@mui/icons-material/Link";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

export function projectsFunction(
  projects,
  setProjects,
  valueTwo,
  handleChange,
  inputprojects,
  insertInputProjectsChanges,
  removeProjects,
  addProjectUI
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
            Projects
          </Typography>
          {projects === false ? (
            <IconButton
              onClick={(e) => {
                setProjects(true);
              }}
            >
              <KeyboardArrowDownIcon />{" "}
            </IconButton>
          ) : (
            <IconButton
              onClick={(e) => {
                setProjects(false);
              }}
            >
              {" "}
              <ExpandLessRoundedIcon />{" "}
            </IconButton>
          )}
        </Grid>

        {projects === true
          ? inputprojects.map((inputprojects) => (
              <React.Fragment key={inputprojects.id}>
                <Grid item xs={12} sm={12}>
                  <Stack direction="row" spacing={2}>
                    <TextField
                      fullWidth
                      id="linkPortafolio"
                      label="Projects/Portfolio link"
                      name="portafolioLink"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="end">
                            <LinkIcon />
                          </InputAdornment>
                        ),
                      }}
                      value={inputprojects.portafolioLink}
                      onChange={(event) =>
                        insertInputProjectsChanges(inputprojects.id, event)
                      }
                      autoComplete="user-name"
                    />
                    <TextField
                      fullWidth
                      id="projectName"
                      label="Project Name"
                      name="ProjectName"
                      autoComplete="user-name"
                      value={inputprojects.ProjectName}
                      onChange={(event) =>
                        insertInputProjectsChanges(inputprojects.id, event)
                      }
                    />{" "}
                  </Stack>
                </Grid>

                <Grid item xs={12} sm={12}>
                  <Stack direction="row" spacing={2}>
                    <TextField
                      fullWidth
                      id="organizatoin"
                      label="Organization"
                      name="Organization"
                      autoComplete="user-name"
                      value={inputprojects.Organization}
                      onChange={(event) =>
                        insertInputProjectsChanges(inputprojects.id, event)
                      }
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={12} sx={{ display: "flex" }}>
                  <TextField
                    fullWidth
                    id="description"
                    label="Description"
                    name="Description"
                    autoComplete="user-name"
                    multiline
                    rows={2}
                    maxRows={5}
                    value={inputprojects.Description}
                    onChange={(event) =>
                      insertInputProjectsChanges(inputprojects.id, event)
                    }
                  />
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    onClick={(event) => removeProjects(inputprojects.id)}
                  >
                    <ClearRoundedIcon />
                  </IconButton>
                </Grid>
                <Divider />
              </React.Fragment>
            ))
          : ""}
        {projects === true ? (
          <Button
            startIcon={<AddIcon />}
            variant="outlined"
            size="large"
            spacing={2}
            sx={{ marginTop: 2, height: "3.4375em", maxWidth: 250 }}
            onClick={addProjectUI}
          >
            Add Project
          </Button>
        ) : (
          ""
        )}
      </Card>
    </Grid>
  );
}
