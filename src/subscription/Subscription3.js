import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import SubscriptionNavbar from "../navbar/Navbar";
import "./Subscription.css";
import Paper from "@mui/material/Paper";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Tik from "../../src/subscription/Images/Tik.png";
import Pay from "../../src/subscription/Images/Pay.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import { useNavigate } from "react-router-dom";

<Box
  component="span"
  sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
>
  •
</Box>;

const queryParams = new URLSearchParams(window.location.search);

function Subscription3(props) {
  let navigate = useNavigate();
  const secret = queryParams.get("name");
  var subscriptioncompanyId = JSON.parse(localStorage.getItem("User")).User
    .companyId;

  useEffect(() => {
    fetch("http://localhost:3000/api/updatePaymentRecord", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        companyId: subscriptioncompanyId,
        clientSecret: secret,
      }),
    }).then((res) => res.json());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDashboard = () => {
    navigate("/employerhome");
  };
  return (
    <Container>
      <div className="mainpage">
        <SubscriptionNavbar />
        <Paper elevation={0}>
          <Typography className="subscription" variant="h5">
            <b>Subscription</b>
          </Typography>

          <FormGroup>
            <div className="check-box">
              <FormControlLabel
                disabled
                control={<img src={Tik} alt="tikimage" className="tikicon" />}
                label="Choose Payment Method"
                className="checkbox1"
              />
              <FormControlLabel
                control={<img src={Pay} alt="payimage" className="payicon" />}
                label="Payment Details"
                className="checkbox2"
              />
            </div>
          </FormGroup>
          <Card className="centerblock1">
            <Container className="paymentoption-style">
              <CardContent>
                <DoneOutlinedIcon
                  style={{ fill: "#05FF00", fontSize: "50px" }}
                  className="tik"
                />
                <Typography sx={{ fontSize: 25 }} className="paymentdone">
                  Payment Done
                </Typography>
                <Typography variant="h" component="div" className="tts">
                  This Transaction was successfull
                </Typography>
                <Button
                  variant="contained"
                  className="goto-button"
                  disableElevation
                  onClick={() => {
                    handleDashboard();
                  }}
                >
                  Go To Dashboard
                </Button>
              </CardContent>
            </Container>
          </Card>
        </Paper>
      </div>
    </Container>
  );
}

export default Subscription3;
