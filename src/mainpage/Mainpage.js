import { Box, Container } from "@mui/system";
import React from "react";
import Navbar from "../navbar/Navbar";
import Search from "../search/Search";
import "./mainpage.css";
import { Maindetails } from "./Maindetails";
import Footer from "../footer/Footer";

function Mainpage() {
  return (
    <div className="mainpage">
      <Box sx={{ backgroundColor: "#f2f2f2" }}>
        <Navbar />
        <Container className="contain" maxWidth="xl" sx={{ mt: "80px" }}>
          <Search sx={{ background: "#FFFF" }} check />
        </Container>
        <Maindetails />
        <Footer />
      </Box>
    </div>
  );
}

export default Mainpage;
