import React, { Component } from "react";
import Search from "./search/Search";
import Navbar from "./navbar/Navbar";
import Popular from "./popular/Popular";
import Recent from "./recent/Recent";
import Find from "./find/Find";
import Footer from "./footer/Footer";
import Jobdetails from "./mainpage/Jobdetails";
export default class HomePage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Search />
        <Popular />
        <Recent />
        <Jobdetails />
        <Find />
        <Footer />
      </>
    );
  }
}
