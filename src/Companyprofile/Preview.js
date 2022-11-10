/* eslint-disable no-unused-vars */
import { Box, Button, Card, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { styles } from "./Companyprofilestyle";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShareTwoToneIcon from "@mui/icons-material/ShareTwoTone";
import LinkTwoToneIcon from "@mui/icons-material/LinkTwoTone";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PublicIcon from "@mui/icons-material/Public";
import PinDropRoundedIcon from "@mui/icons-material/PinDropRounded";
import MapRoundedIcon from "@mui/icons-material/MapRounded";
import { Bluememcard } from "./Bluememcard";
import { useDispatch, useSelector } from "react-redux";
import ReactQuill from "react-quill";

export function Preview(props) {
  const basic = useSelector((state) => state.company.basicinformation);
  const cmp = useSelector((state) => state.company.cmpinformation);
  const country = useSelector((state) => state.company.locate);
  const logo = useSelector((state) => state.company.companylogo);
  const links = useSelector((state) => state.company.links);

  const final = useSelector((state) => state.company);

  const user = JSON.parse(localStorage.getItem("User"));
  const companyId = user.User.companyId;

  let dispatch = useDispatch();

  const settingIndex = (index) => {
    props.Pages(index);
  };

  return (
    <Box>
      <Typography variant="h5" sx={styles.addtxt}>
        Preview
      </Typography>

      <Card sx={styles.previewcard}>
        <Box sx={styles.prvbasic}>
          <Typography variant="h5" sx={styles.bastext}>
            Basic Information
          </Typography>
          <Button
            sx={styles.prvedit}
            onClick={() => {
              settingIndex(0);
            }}
          >
            Edit
          </Button>
        </Box>

        <Box sx={styles.logosec}>
          <Box sx={styles.companylogo}>
            {logo === null ? (
              <img
                src=""
                alt=""
                width="125px"
                height="118px"
                style={{ borderRadius: "10px", marginLeft: "20px" }}
              />
            ) : (
              <label>
                <img
                  alt=""
                  src={
                    logo && logo.logo !== undefined
                      ? `http://localhost:3000/api/getCompanyPhotos?compPhotos=${
                          "test" && logo.logo
                        }`
                      : URL.createObjectURL(logo)
                  }
                  width="125px"
                  height="118px"
                  style={{
                    borderRadius: "10px",
                    marginLeft: "20px",
                    objectFit: "cover",
                  }}
                />
              </label>
            )}
          </Box>
          <Typography variant="h5" sx={styles.logotxtprv}>
            Company Profile Picture
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid item lg={5} sx={styles.prvnametab}>
              <Grid item lg={6}>
                <Box sx={styles.prvname}>
                  <ApartmentRoundedIcon
                    sx={{ color: "#5CB6F2", fontSize: "1.5rem" }}
                  />
                  <Typography variant="body1" sx={styles.prvnametext}>
                    {basic && basic.cmpname}
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={6}>
                <Box sx={styles.prvname}>
                  <EmailRoundedIcon
                    sx={{ color: "#5CB6F2", fontSize: "1.5rem" }}
                  />
                  <Typography variant="body1" sx={styles.prvnametext}>
                    {basic && basic.cmpemail}
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={6}>
                <Box sx={styles.prvname}>
                  <PhoneRoundedIcon
                    sx={{ color: "#5CB6F2", fontSize: "1.5rem" }}
                  />
                  <Typography variant="body1" sx={styles.prvnametext}>
                    {basic && basic.cmpphone}
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={6}>
                <Box sx={styles.prvname}>
                  <ShareTwoToneIcon
                    sx={{ color: "#5CB6F2", fontSize: "1.5rem" }}
                  />
                  <Typography variant="body1" sx={styles.prvnametext}>
                    {basic.cmpwebsite === undefined ? (
                      <span style={{ color: "#ea5d5d" }}>Not Provided</span>
                    ) : (
                      basic.cmpwebsite
                    )}
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={6}>
                <Box sx={styles.prvname}></Box>
              </Grid>
            </Grid>
            <Grid item lg={7} sx={styles.prvnametab}></Grid>
          </Grid>
        </Box>
        <Divider />
        <Box sx={styles.prvbasic}>
          <Typography variant="h5" sx={styles.bastext}>
            Company Information
          </Typography>
          <Button
            sx={styles.prvedit}
            onClick={() => {
              settingIndex(0);
            }}
          >
            Edit
          </Button>
        </Box>

        <Box sx={styles.itbox}>
          <Box sx={styles.prvname}>
            <ApartmentRoundedIcon
              sx={{ color: "#5CB6F2", fontSize: "1.5rem" }}
            />
            <Typography variant="body1" sx={styles.prvnametext}>
              {cmp && cmp.infosector}
            </Typography>
          </Box>
          <Box>
            <Box sx={styles.prvname}>
              <DensitySmallIcon sx={{ color: "#5CB6F2", fontSize: "1.5rem" }} />
              <ReactQuill
                value={cmp && cmp.infodes}
                readOnly={true}
                theme={"bubble"}
              />
            </Box>
          </Box>
        </Box>

        <Card sx={styles.socialcard}>
          <Box sx={styles.prvbasic}>
            <Typography variant="h5" sx={styles.bastext}>
              Social Media Links
            </Typography>
          </Box>
          <Divider />
          <Box sx={styles.socbox}>
            <Box sx={styles.prvname}>
              <FacebookIcon sx={{ color: "#1877F2", fontSize: "1.5rem" }} />
              <Typography variant="body1" sx={styles.prvnametext}>
                {links === undefined ? (
                  <span style={{ color: "#ea5d5d" }}>Not Provided</span>
                ) : "" && links.fb === undefined ? (
                  <span style={{ color: "#ea5d5d" }}>Not Provided</span>
                ) : (
                  links && links.fb
                )}
              </Typography>
            </Box>
            <Box sx={styles.prvname}>
              <TwitterIcon sx={{ color: "#5CB6F2", fontSize: "1.5rem" }} />
              <Typography variant="body1" sx={styles.prvnametext}>
                {links === undefined ? (
                  <span style={{ color: "#ea5d5d" }}>Not Provided</span>
                ) : "" || links.twitter === undefined ? (
                  <span style={{ color: "#ea5d5d" }}>Not Provided</span>
                ) : (
                  links && links.twitter
                )}
              </Typography>
            </Box>

            <Box sx={styles.prvname}>
              <LinkedInIcon sx={{ color: "#0065ED", fontSize: "1.5rem" }} />
              <Typography variant="body1" sx={styles.prvnametext}>
                {links === undefined ? (
                  <span style={{ color: "#ea5d5d" }}>Not Provided</span>
                ) : "" || links.linkin === undefined ? (
                  <span style={{ color: "#ea5d5d" }}>Not Provided</span>
                ) : (
                  links && links.linkin
                )}
              </Typography>
            </Box>

            <Box sx={styles.prvname}>
              <YouTubeIcon sx={{ color: "#E7274B", fontSize: "1.5rem" }} />
              <Typography variant="body1" sx={styles.prvnametext}>
                {links === undefined ? (
                  <span style={{ color: "#ea5d5d" }}>Not Provided</span>
                ) : "" || links.utube === undefined ? (
                  <span style={{ color: "#ea5d5d" }}>Not Provided</span>
                ) : (
                  links && links.utube
                )}
              </Typography>
            </Box>
          </Box>
        </Card>
        <Divider />

        <Box sx={styles.prvbasic}>
          <Typography variant="h5" sx={styles.bastext}>
            Company Location
          </Typography>
          <Button
            sx={styles.prvedit}
            onClick={() => {
              settingIndex(1);
            }}
          >
            Edit
          </Button>
        </Box>

        <Grid container spacing={2}>
          <Grid item lg={5} sx={styles.prvnametab}>
            <Grid item lg={6}>
              <Box sx={styles.prvname}>
                <PublicIcon sx={{ color: "#5CB6F2", fontSize: "1.5rem" }} />
                <Typography variant="body1" sx={styles.prvnametext}>
                  {country && country.country}
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={6}>
              <Box sx={styles.prvname}>
                <PublicIcon sx={{ color: "#5CB6F2", fontSize: "1.5rem" }} />
                <Typography variant="body1" sx={styles.prvnametext}>
                  {country && country.city}
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={6} sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={styles.prvname}>
                <MapRoundedIcon sx={{ color: "#5CB6F2", fontSize: "1.5rem" }} />
                <Typography variant="body1" sx={styles.prvnametext}>
                  {country && country.state}
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={6}>
              <Box sx={styles.prvname}>
                <PinDropRoundedIcon
                  sx={{ color: "#5CB6F2", fontSize: "1.5rem" }}
                />
                <Typography variant="body1" sx={styles.prvnametextinfo}>
                  {country && country.address}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid item lg={7} sx={styles.prvnametab}></Grid>
        </Grid>

        <Divider />
        <Box sx={styles.prvbasic}>
          <Typography variant="h5" sx={styles.bastext}>
            Members Information
          </Typography>
          <Button
            sx={styles.prvedit}
            onClick={() => {
              settingIndex(2);
            }}
          >
            Edit
          </Button>
        </Box>
        <Box sx={styles.mainmembox}>
          <Bluememcard />
        </Box>

        <Divider />
      </Card>
    </Box>
  );
}
