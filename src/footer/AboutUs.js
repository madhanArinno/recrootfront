import { Box, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "../navbar/Navbar";

function AboutUs() {
  return (
    <div>
      <Navbar />
      <Toolbar />
      <Toolbar />
      <Container maxWidth="md">
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 750 }}>
            ABOUT RECROOT
          </Typography>
          <br></br>
          <Typography
            variant="body1"
            sx={{ fontWeight: 500, fontSize: "1.1em", lineHeight: "2" }}
          >
            Recroot is the result of a dynamic and young team. We struggled to
            get the right IT professionals at affordable costs for our start-up.
            After consulting with many entrepreneurs, we realised that IT skill
            shortage is hampering most organisations across the world. Recroot
            was developed as a platform for organisations to hire skilled,
            active, dynamic freshers or experienced IT professionals at
            affordable rates. Unlike traditional recruitment companies, we
            strive to provide a platform that businesses of all types, sizes and
            from every sector can leverage and gain value.
          </Typography>
          <br></br>
          <Typography
            variant="body1"
            sx={{ fontWeight: 500, fontSize: "1.1em", lineHeight: "2" }}
          >
            Welcome to Recroot! We are excited you are here. We created Recroot
            with the sole aim of making it easy for businesses to hire IT
            professionals from anywhere across the world. In fact, we want to
            make it as easy as picking a shirt. In order to make this happen, we
            worked hard to build this special company with a single mantra:
            Deliver delightful recruiting experience every time. We realised
            that IT professionals with the right skillsets are hard to find
            always and this could be the same everywhere. COVID pandemic has
            taught us that businesses can efficiently operate using remote
            workers from any part of the world. Businesses can gain immense
            value by hiring fresh and experienced remote IT professionals with
            the right skillsets. We understand your concerns around information
            security, local in-country regulations, candidate background
            verification, payroll, logistical support and management of remote
            professionals. We have setup infrastructure and processes in place
            to take care of all these key aspects and requirements for you in a
            seamless manner. Our pricing plans are simple and transparent with
            no hidden costs. So, no matter your budget, you have access to the
            best IT professionals that meet your requirements. We go that extra
            mile to meet your needs and proactively work with you to achieve the
            results you need. Your Success Is Our Goal and Mission. We promise
            to give you delighting experience every time. We are Recroot and
            we’re in the business of creating delight.
          </Typography>
        </Box>
      </Container>
    </div>
  );
}

export default AboutUs;
