import React from "react";
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

export function socialFunction(
  social,
  setSocial,
  inputSocialMediaLink,
  inputSocialMediaLinkChanges,
  removeSocialLink,
  addSocialLink
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
            Social Media Links
          </Typography>
          {social === false ? (
            <IconButton
              onClick={(e) => {
                setSocial(true);
              }}
            >
              <KeyboardArrowDownIcon />{" "}
            </IconButton>
          ) : (
            <IconButton
              onClick={(e) => {
                setSocial(false);
              }}
            >
              {" "}
              <ExpandLessRoundedIcon />{" "}
            </IconButton>
          )}
        </Grid>
        {social === true
          ? inputSocialMediaLink.map((inputSocialMediaLink) => (
              <React.Fragment key={inputSocialMediaLink.id}>
                <Grid item xs={12} spacing={2} sm={12}>
                  <Stack direction="row" spacing={2}>
                    <TextField
                      autoComplete="given-name"
                      name="title"
                      required
                      id="s_m_title"
                      label="Title"
                      autoFocus
                      value={inputSocialMediaLink.title}
                      onChange={(event) =>
                        inputSocialMediaLinkChanges(
                          inputSocialMediaLink.id,
                          event
                        )
                      }
                    />
                    <TextField
                      autoComplete="given-name"
                      name="socialMediaLink"
                      required
                      id="social_media_link"
                      label="Social Media Links"
                      autoFocus
                      value={inputSocialMediaLink.socialMediaLink}
                      onChange={(event) =>
                        inputSocialMediaLinkChanges(
                          inputSocialMediaLink.id,
                          event
                        )
                      }
                    />

                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                      onClick={(event) =>
                        removeSocialLink(inputSocialMediaLink.id)
                      }
                    >
                      <ClearRoundedIcon />
                    </IconButton>
                  </Stack>
                </Grid>
              </React.Fragment>
            ))
          : ""}
        {social === true ? (
          <Button
            startIcon={<AddIcon />}
            variant="outlined"
            size="large"
            spacing={2}
            sx={{ marginTop: 2, height: "3.4375em" }}
            onClick={addSocialLink}
          >
            Add Link
          </Button>
        ) : (
          ""
        )}
      </Card>
    </Grid>
  );
}
