import React from "react";
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';

export function socialFunction(social, setSocial) {
  return <Grid container spacing={2} sx={{ marginTop: 2 }}>
    <Card sx={{
      width: '650px',
      padding: '15px',
      boxShadow: '4px 4px 60px rgba(193, 200, 209, 0.25);',
      borderRadius: '8px',
      border: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }} variant="outlined">
      <Grid item xs={12} sm={12} sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
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
        {(social === false) ?
          <IconButton onClick={(e) => { setSocial(true); }}><KeyboardArrowDownIcon /> </IconButton> :
          <IconButton onClick={(e) => { setSocial(false); }}> <ExpandLessRoundedIcon /> </IconButton>}
      </Grid>
      {(social === true) ? <>
        <Grid item xs={12} spacing={2} sm={12}>
          <Stack direction="row" spacing={2}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              id="s_m_title"
              label="Title"
              autoFocus />
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              id="social_media_link"
              label="Social Media Links"
              autoFocus />

            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <AddCircleOutlineIcon />
            </IconButton>
          </Stack>
        </Grid></> : ''}
    </Card>
  </Grid>;
}
