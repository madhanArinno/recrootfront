import React from "react";
import "./Invoice.css";
import { styled } from '@mui/material/styles';
import Invoiceimage from "./Assets/Invoice art.png";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));
export default function Invoice() {
  const classes = useStyles();
  return (
    <div className="fullbackcolor">
      <Grid container>
        <Grid xs={12} sm={12} md={6}>
          <img src={Invoiceimage} alt={"item.title"} />
        </Grid>
        {/* <Grid xs={12} sm={6} md={6}>
          <div>Invoice</div>
          <div>#FR2345</div>
          <div>Date</div>
          <div>12 Jan 2022</div>
        </Grid> */}
      </Grid>
      <Paper>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={3}>
              <h3>Date</h3>
              <div>22 Jan 2022</div>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <h3>Description</h3>
              <div>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown
              </div>
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
              <h3>Amount</h3>
              <div>22$</div>
              <Grid item xs>
                <div>Total</div>
                <div>Paid</div>
                <div>Total Due</div>
              </Grid>
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
              <div>22$</div>
              <div>22$</div>
              <div>0$</div>
            </Grid>
          </Grid>
        </div>
      </Paper>
      <Paper style={{ marginTop: "3%" }}>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={3}>
              <h3>Date</h3>
              <div>22 Jan 2022</div>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <h3>Description</h3>
              <div>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown
              </div>
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
              <h3>Amount</h3>
              <div>22$</div>
            </Grid>
          </Grid>
        </div>
      </Paper>
      <Grid style={{marginTop:'4%', justifyContent:'center', display:'flex'}}>
        <Button variant="contained" endIcon={<SaveAltIcon />}>
        Download Invoice
      </Button>
        </Grid>
    </div>
    // <div>
    //   <Paper>
    //   <Grid container spacing={3}>
    //     <Grid item xs>
    //       <Item>xs</Item>
    //     </Grid>
    //     <Grid item xs>
    //       <Item>xs=6</Item>
    //     </Grid>
    //     <Grid item xs={6}>
    //       <Item>xs</Item>
    //     </Grid>
    //   </Grid>
    //   </Paper>
    // </div>
  );
}
