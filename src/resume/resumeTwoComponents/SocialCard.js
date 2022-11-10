import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export function SocialCard(props) {
  const { name } = props;

  return (
    <>
      <Grid item xs={12} spacing={2} sm={12}>
        <Stack direction="row" spacing={2}>
          <TextField
            autoComplete="given-name"
            name="title"
            required
            id="s_m_title"
            label="Title"
            value={name.title}
            onChange={props.handleChangesChild}
            autoFocus
          />
          <TextField
            autoComplete="given-name"
            name="socialMediaLink"
            required
            id="social_media_link"
            label="Social Media Links"
            autoFocus
            value={name.socialMediaLink}
            onChange={props.handleChangesChild}
          />

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
