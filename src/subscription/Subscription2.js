import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import SubscriptionNavbar from "../subscription/SubscriptionNavbar";
import "./Subscription.css";
import Paper from "@mui/material/Paper";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Vector from "../../src/subscription/Images/Vector.png";
import Tik from "../../src/subscription/Images/Tik.png";
import Container from "@mui/material/Container";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import CheckoutForm from "./CheckoutForm";
import { useNavigate } from "react-router-dom";
import moment from "moment";
const stripePromise = loadStripe(
  "pk_test_51LE9NmCCnqCKl0oMYfMTugAqtMepaC4DkHyTyklan9jfncWHCbXN2LxLhTZUniqUyfusJqXMaT5055WXHLI54zvJ00F7xxXAg2"
);

function Subscription2() {
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
  require("./App.css");
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    if (subscriptioncompanyId === null) {
      navigate("/Pricing", { replace: true });
      return;
    }

    fetch("http://localhost:3000/api/createPayment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        price: subscriptionPrice,
        packagesDetail: subscriptionpackage,
        timePeriod: subscriptionTimePackage,
        companyId: subscriptioncompanyId,
        date: moment().utc().format(),
      }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .then(localStorage.setItem("paymentInfo", clientSecret));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <Container>
      <div className="mainpage">
        <SubscriptionNavbar />
        <Paper elevation={0}>
          <Typography className="subscription" variant="h5">
            <b>Subscription</b>
          </Typography>
          <Box className="centerblock">
            <Stack className="topbutton">
              <div className="goldtext">
                <Button variant="outlined" className="goldbutton ">
                  <img src={Vector} alt="" className="vectoricon" />
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
              <Button variant="outlined" className="changebutton">
                Change plan
              </Button>
            </Stack>
          </Box>
          <FormGroup>
            <div
              className="check-box"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <FormControlLabel
                disabled
                control={<img src={Tik} alt="" className="tikicon" />}
                label="Choose Payment Method"
                className="checkbox1"
              />
              <FormControlLabel
                control={<img src={Tik} alt="" className="tikicon" />}
                label="Payment Details"
                className="checkbox2"
              />
              {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                  <CheckoutForm options={options} />
                </Elements>
              )}
            </div>
          </FormGroup>
        </Paper>
      </div>
    </Container>
  );
}

export default Subscription2;
