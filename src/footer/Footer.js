import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./footer.css/.";
import logo from ".//logo/logo.svg";
import fb from ".//logo/fb.svg";
import twitter from ".//logo/twitter.svg";
import gplus from ".//logo/gplus.svg";
import in1 from ".//logo/in.svg";
import Subscribe from "./Subscribe";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledBoxed = styled(Box)({
  marginTop: { lg: "50px", md: "50px", sm: "20px" },
});

function Footer() {
  return (
    <>
      <div className="footermain">
        <Subscribe />
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: { lg: "space-around" } }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={5}
            lg={4}
            sx={{
              display: { sm: "flex" },
              justifyContent: { sm: "space-around" },
            }}
          >
            <Box style={{ width: "100%" }}>
              <div className="description">
                <div className="logo">
                  <img src={logo} alt="" />
                  <Typography
                    variant="h3"
                    sx={{
                      color: "white",
                      fontWeight: "700",
                      fontSize: { md: "32px", xs: "20px" },
                      fontFamily: "GreycliffCF-DBold",
                    }}
                  >
                    RECROOT
                  </Typography>
                </div>
                <div className="para">
                  <p style={{ color: "white" }}>
                    Recroot is a Next Gen Jobs Platform Connecting Organisations
                    with Remote Tech Professionals through Permanent, Contract
                    and Freelancing Recruitment Solutions.
                  </p>
                </div>
              </div>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            lg={2}
            sx={{
              display: { sm: "flex" },
              justifyContent: { sm: "space-around" },
            }}
          >
            <StyledBoxed>
              <div className="about">
                <h2 style={{ color: "white" }}>About Us</h2>
              </div>
              <div className="abt">
                <Link to="AboutUs" style={{ color: "white" }} underline="hover">
                  <p>About Us</p>
                </Link>
              </div>
            </StyledBoxed>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            lg={2}
            sx={{
              display: { sm: "flex" },
              justifyContent: { sm: "space-around" },
            }}
          >
            <StyledBoxed>
              <div className="about">
                <h2 style={{ color: "white" }}>Legal</h2>
              </div>
              <div className="abt">
                <Link
                  to="corporateInfo"
                  style={{ color: "white" }}
                  underline="hover"
                >
                  <p>Corporate Info</p>
                </Link>
                <Link
                  to="PrivacyInfo"
                  style={{ color: "white" }}
                  underline="hover"
                >
                  <p>Privacy Info</p>
                </Link>
                <Link
                  to="InfoSecurity"
                  style={{ color: "white" }}
                  underline="hover"
                >
                  <p>Information Security Policy</p>
                </Link>
                <Link
                  to="WebsiteUse"
                  style={{ color: "white" }}
                  underline="hover"
                >
                  <p>Website Term of Use</p>
                </Link>
              </div>
              <div></div>
            </StyledBoxed>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            lg={2}
            sx={{
              display: { sm: "flex" },
              justifyContent: { sm: "space-around" },
            }}
          >
            <StyledBoxed>
              <div className="about">
                <h2 style={{ color: "white" }}>Useful Links</h2>
              </div>
              <div className="abt">
                <p>FAQ</p>
                <p>Job Listing</p>
                <p>Post New Job</p>
                <p>Job Packages</p>
              </div>
              <div></div>
            </StyledBoxed>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{ mt: "93px", pb: "110px", alignItems: "center" }}
        >
          <Grid
            item
            xs={12}
            lg={4}
            sx={{ ml: { lg: "85px", md: "", sm: "", xs: "" } }}
          >
            <Box
              className="icons"
              sx={{
                justifyContent: {
                  lg: "flex-start",
                  sm: "center",
                  xs: "center",
                },
              }}
            >
              <a href="#top">
                <img src={fb} alt="" />
              </a>
              <a href="#top">
                <img style={{ marginTop: "5px" }} src={twitter} alt="" />
              </a>
              <a href="#top">
                <img src={gplus} alt="" />
              </a>
              <a href="#top">
                <img src={in1} alt="" />
              </a>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            lg={7}
            sx={{ textAlign: { xs: "center", lg: "left" } }}
          >
            <p style={{ color: "white" }}>
              Recroot © 2022, All Right Reserved by Recroot.io
            </p>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Footer;
