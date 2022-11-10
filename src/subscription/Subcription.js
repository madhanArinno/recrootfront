import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import SubscriptionNavbar from "../subscription/SubscriptionNavbar";
import "./Subscription.css";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Crediticon from "../../src/subscription/Images/crediticon.svg";
import Vector from "../../src/subscription/Images/Vector.png";
import Tik from "../../src/subscription/Images/Tik.png";
import Pay from "../../src/subscription/Images/Pay.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Subscription() {
  let navigate = useNavigate();

  const { price: subscriptionPrice } = useSelector(
    (state) => state.subscription
  );

  const { package: subscriptionpackage } = useSelector(
    (state) => state.subscription
  );

  const { timePeriod: subscriptionTimePackage } = useSelector(
    (state) => state.subscription
  );

  const { companyId: subscriptioncompanyId } = useSelector(
    (state) => state.subscription
  );

  useEffect(() => {
    if (subscriptioncompanyId === null) {
      navigate("/Pricing", { replace: true });
    }
  });

  const navigateToPaymentGateway = () => {
    navigate("/Subscription2", { replace: true });
  };
  const navigateToPricing = () => {
    navigate("/Pricing", { replace: false });
  };
  return (
    <div className="mainpage">
      <Box>
        <SubscriptionNavbar />
        <Box className="mainbox">
          <Paper elevation={0}>
            <Typography className="subscription" variant="h5">
              <b>Subscription</b>
            </Typography>

            <Box className="centerblock">
              <Stack className="topbutton">
                <div className="goldtext">
                  <Button variant="outlined" className="goldbutton ">
                    <img src={Vector} alt="vector" className="vectoricon" />
                    {subscriptionpackage}
                  </Button>
                  <div className="pricepack">
                    <Typography variant="h5" className="pricepack1">
                      <b>{subscriptionpackage} Plan</b>
                    </Typography>
                    <Typography variant="h4" className="pricepack2">
                      <sup>$</sup>
                      <b>{subscriptionPrice}</b>
                      <sup>/{subscriptionTimePackage}</sup>
                    </Typography>
                  </div>
                </div>
                <Button
                  variant="outlined"
                  className="changebutton"
                  onClick={() => navigateToPricing()}
                >
                  Change plan
                </Button>
              </Stack>
            </Box>
            <FormGroup>
              <div className="check-box">
                <FormControlLabel
                  control={<img src={Tik} alt="tikimage" className="tikicon" />}
                  label="Choose Payment Method"
                  className="checkbox1"
                />
                <FormControlLabel
                  disabled
                  control={<img src={Pay} alt="payimage" className="payicon" />}
                  label="Payment Details"
                  className="checkbox2"
                />
              </div>
            </FormGroup>
            <Grid>
              <Stack direction="row" className="buttons">
                <Button
                  variant="outlined"
                  className="button1 d-flex"
                  mb={1}
                  onClick={() => navigateToPaymentGateway()}
                >
                  <img
                    src={Crediticon}
                    alt="cardimage"
                    className="crediticon"
                  />
                  <b>Credit Card </b>
                  <ArrowForwardIosIcon color="primary" className="rigntarrow" />
                </Button>
              </Stack>
            </Grid>
          </Paper>
        </Box>
      </Box>
    </div>
  );
}

export default Subscription;
