import React from "react";
import TextField from "@mui/material/TextField";
import { Box, InputAdornment, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { styles } from "../../Companyprofile/Companyprofilestyle";

export function SocialCard(props) {
  const { name } = props;

  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px", mt: "10px" }}>
        <Box sx={styles.infofld}>
          <Typography variant="p" sx={styles.sectxt}>
            Social Media Links
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              rowGap: "17px",
              marginTop: "14px",
            }}
          >
            <TextField
              InputLabelProps={{ style: { color: "black" } }}
              sx={styles.naminput}
              id="outlined-basic"
              label="FaceBook"
              placeholder="Enter FaceBook Link"
              variant="outlined"
              name="fb"
              value={name.fb}
              onChange={props.handleChangesChild}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FacebookIcon sx={{ color: "#1877F2" }} />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              InputLabelProps={{ style: { color: "black" } }}
              sx={styles.naminput}
              id="outlined-basic"
              label="Twitter"
              placeholder="Enter Twitter Link"
              variant="outlined"
              name="twitter"
              value={name.twitter}
              onChange={props.handleChangesChild}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <TwitterIcon
                      sx={{ color: "#5CB6F2", fontSize: "1.5rem" }}
                    />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              InputLabelProps={{ style: { color: "black" } }}
              sx={styles.naminput}
              id="outlined-basic"
              label="LinkedIn"
              placeholder="Enter LinkedIn Link"
              variant="outlined"
              name="linkin"
              value={name.linkin}
              onChange={props.handleChangesChild}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LinkedInIcon
                      sx={{ color: "#0065ED", fontSize: "1.5rem" }}
                    />
                  </InputAdornment>
                ),
              }}
              required
            />
            <TextField
              InputLabelProps={{ style: { color: "black" } }}
              sx={styles.naminput}
              id="outlined-basic"
              label="Youtube"
              placeholder="Enter Youtube Link"
              variant="outlined"
              name="utube"
              value={name.utube}
              onChange={props.handleChangesChild}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <YouTubeIcon
                      sx={{ color: "#E7274B", fontSize: "1.5rem" }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
