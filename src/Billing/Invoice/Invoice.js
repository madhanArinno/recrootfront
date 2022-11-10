import * as React from "react";
import "./Invoice.css";
import Invoiceimage from "./Assets/Invoice art.png";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Invoice() {
  return (
    <div style={{backgroundColor:"rgba(226, 236, 249, 0.5)"}}>
      <div>
        <Grid container>
          <Grid xs={12} sm={12} md={6}>
            <img src={Invoiceimage} alt={"item.title"} className="imagestyle" />
          </Grid>
          <Grid xs={12} sm={12} md={5} style={{ marginTop: "6%",paddingLeft:"25px"}}>
            <Grid className="cardfirsttxtstyle">Invoice</Grid>
            <Grid style={{ marginTop: "2%" }} className="cardfirsttxtstyle-1">
              #FR6262
            </Grid>
            <Grid style={{ marginTop: "2%" }} className="cardfirsttxtstyle-2">
              Date
            </Grid>
            <Grid style={{ marginTop: "2%" }} className="cardfirsttxtstyle-3">
              12 Jan 2022
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Paper style={{ margin: "0% 3%",paddingBottom:"3%"}}>
        <Box sx={{ flexGrow: 1 }} style={{ marginTop: "25px",paddingLeft:"20px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={2}>
              <Grid className="secondcrdtxtstyle-1">Date</Grid>
              <Grid style={{ marginTop: "10 %" }} className="secondcrdtxt-2style-1">22 Jan 2022</Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
              <Grid className="secondcrdtxtstyle-1">Description</Grid>
              <Grid style={{ marginTop: "3%" }} className="secondcrdtxt-2style-2">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
              <Grid className="secondcrdtxtstyle-1">Amount</Grid>
              <Grid style={{ marginTop: "4%" }} className="secondcrdtxt-2style-1">22$</Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Grid style={{display:"flex", flexDirection:"row"}}>
                <Grid xs={6} style={{ marginTop: "8%" }} className="firstcrdtotaltxtstyle-1">Total</Grid>
                <Grid xs={6} style={{ marginTop: "8%" }} className="firstcrdtotaltxtstyle-2">22$</Grid>
                </Grid>
                <Grid style={{display:"flex", flexDirection:"row"}}>
                <Grid xs={6} style={{ marginTop: "8%" }} className="firstcrdtotaltxtstyle-1">Paid</Grid>
                <Grid xs={6} style={{ marginTop: "8%" }} className="firstcrdtotaltxtstyle-2">22$</Grid>
                </Grid>
                <Grid style={{display:"flex", flexDirection:"row"}}>
                <Grid xs={6} style={{ marginTop: "8%" }} className="firstcrdtotaltxtstyle-1">Total Due</Grid>
                <Grid xs={6} style={{ marginTop: "8%" }} className="firstcrdtotaltxtstyle-2">0$</Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      <Paper style={{ margin: "45px 3% 0px 3%",paddingLeft:"20px" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={2}>
              <Grid style={{ marginTop: "2%" }} className="secondcrdtxtstyle-1">Date</Grid>
              <Grid style={{ marginTop: "10%" }} className="secondcrdtxt-2style-1">22 Jan 2022</Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
              <Grid className="secondcrdtxtstyle-1">Description</Grid>
              <Grid style={{ marginTop: "4%" }} className="secondcrdtxt-2style-2">
               
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
              <Grid className="secondcrdtxtstyle-1">Amount</Grid>
              <Grid style={{ marginTop: "4%" }} className="secondcrdtxt-2style-1">22$</Grid>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      <Grid
        style={{ marginTop: "4%",paddingBottom: "3%", justifyContent: "center", display: "flex" }}
      >
        <Button variant="contained" endIcon={<SaveAltIcon />}>
          Download Invoice
        </Button>
      </Grid>
    </div>
  );
}
