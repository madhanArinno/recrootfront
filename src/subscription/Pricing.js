import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Navbar from "../navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { changeSubscription } from "../slices/Subscription";
import { useNavigate } from "react-router-dom";
import { Dialog, TextField } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";
import axios from "axios";

let month = false;

function PricingContent() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [alignment, setAlignment] = React.useState("Monthly");
  const basicin = useSelector((state) => state.company.basicinformation);

  const user = JSON.parse(localStorage.getItem("User"));
  const [open, setOpen] = React.useState(false);
  // eslint-disable-next-line no-unused-vars
  const [fullWidth, setFullWidth] = React.useState(true);
  // eslint-disable-next-line no-unused-vars
  const [maxWidth, setMaxWidth] = React.useState("sm");
  const [contactus, setContactus] = useState({
    CompanyName: basicin.cmpname,
    email: "",
    subject: "",
    description: "",
    userId: "",
    companyId: "",
  });

  useEffect(() => {
    setContactus({
      CompanyName: basicin.cmpname,
      email: "",
      subject: "",
      description: "",
      userId: user.User._id,
      companyId: user.User.companyId,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const notify = (Add) =>
    toast.success(Add, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleSubmitContact = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/addContactus", contactus)
      .then(function (response) {
        notify("Your Query Was Submitted");
        setOpen(false);
      })
      .catch(function (error) {
        console.warn(error);
      });
  };

  const handleChangeContact = (e) => {
    let { name, value } = e.target;
    setContactus({
      ...contactus,
      [name]: value,
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [tiers, settiers] = React.useState([
    {
      title: "Growth",
      price: 90,
      description: [
        "1 Jobs Posting",
        "Jobs displayed for 15 days",
        "Shortlisting employees",
        "Recieving candidates CV’s",
        "Maintaining comapny profile",
        "Valid for 1 months",
      ],

      buttonText: "Get Growth Plan",
      buttonVariant: "outlined",
      backgroundColor: "#03d615",
      package: "mo",
    },
    {
      title: "Gold",
      subheader: "Most popular",
      price: 420,
      description: [
        "Everything in Growth and..",
        "1 FEATURED job posting",
        "Guarenteed candidate match",
        "Jobs displayed for 15 days",
        "Dedicated customer success manager",
        "Valid for 3 months",
      ],
      buttonText: "Get Gold Plan",
      buttonVariant: "contained",
      backgroundColor: "#f0483e",
      package: "mo",
    },
  ]);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);

    if (newAlignment === "Monthly" && month === true) {
      tiers.forEach(function (item) {
        if (item.title === "Gold") {
          item.price = 420;
        }
        if (item.title === "Growth") {
          item.price = 90;
        }
        item.package = "mo";
      });
      month = false;
    }

    if (newAlignment === "Yearly" && month === false) {
      tiers.forEach(function (item) {
        item.price *= 12 - 20 / 100;
        item.package = "yr";
      });
      month = true;
    }
  };

  const handleSubmit = (title, packageDetails) => {
    tiers.forEach((item, index) => {
      if (item.title === title) tiers[index].buttonVariant = "contained";
      else {
        tiers[index].buttonVariant = "outlined";
      }
    });
    settiers(tiers);

    dispatch(changeSubscription(packageDetails));
    navigate("/Subscription", { replace: true });
  };

  const isGoldSubscroption = (subs) => {
    const subsc = subs === "Gold";
    return subsc;
  };

  return (
    <React.Fragment>
      <Navbar />
      <Toolbar />
      <GlobalStyles
        styles={{
          ul: { margin: 0, padding: 0, listStyle: "none" },
          fontFamily: "Arial",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "36px",
          lineHeight: "41px",
        }}
      />

      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="xl"
        component="main"
        sx={{ pt: 4, pb: 1 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Subscription
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          Choose a plan to ensure that you have the best features for your
          recruitment journey. Your subscription will automatically renew every
          month if you select the Monthly Plan or every twelve months if you
          select the Annual Plan.
        </Typography>
      </Container>

      <Container maxWidth="xl" component="main">
        <Grid
          sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}
        >
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
          >
            <ToggleButton value="Monthly">Monthly</ToggleButton>
            <ToggleButton value="Yearly">Yearly</ToggleButton>
          </ToggleButtonGroup>
        </Grid>
      </Container>

      {/* End hero unit */}
      <Container maxWidth="xl" component="main">
        <Grid container spacing={5} alignItems="baseline">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={12} md={4}>
              <Card
                sx={{
                  boxShadow: "30px 50px 21px rgba(33,33,33,.2)",
                  borderRadius: "20px",
                  transform: "scale(.9)",
                  transition: " transform .3s ease-out, filter .3s",
                  "&:hover": {
                    transform: "scale(1)",
                    boxShadow: "30px 50px 21px rgba(33,33,33,.5)",
                  },
                }}
              >
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  action={tier.title === "Gold" ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: "center",
                    color: "#FFF",
                    fontWeight: 700,
                  }}
                  sx={{
                    backgroundImage: isGoldSubscroption(tier.title)
                      ? "linear-gradient(-45deg, #f6266b, #7e052d)"
                      : "linear-gradient(-45deg, #42f554, #107C10)",
                    color: "#FFF",
                    fontWeight: 700,
                  }}
                />

                <CardContent
                  sx={{
                    height: "330px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h3"
                      color="text.primary"
                    >
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      ${tier.package}
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" key={line}>
                        <CheckCircleIcon
                          sx={{
                            verticalAlign: "middle",
                            display: "inline-flex",
                            fontSize: "18px",
                            marginRight: 2,
                          }}
                        />
                        {line}
                      </Typography>
                    ))}
                  </ul>
                  <Button
                    fullWidth
                    variant="outlined"
                    size="large"
                    onClick={() => handleSubmit(tier.title, tier)}
                    sx={{ mt: "20px" }}
                  >
                    {tier.buttonText}
                  </Button>
                </CardContent>
                <CardActions
                  sx={{
                    backgroundImage: isGoldSubscroption(tier.title)
                      ? "linear-gradient(-45deg, #f6266b, #7e052d)"
                      : "linear-gradient(-45deg, #42f554, #107C10)",
                    height: "30px",
                  }}
                ></CardActions>
              </Card>
            </Grid>
          ))}
          <Grid item xs={12} sm={12} md={4}>
            <Card
              sx={{
                boxShadow: "30px 50px 21px rgba(33,33,33,.2)",
                borderRadius: "20px",
                transform: "scale(.9)",
                transition: " transform .3s ease-out, filter .3s",
                "&:hover": {
                  transform: "scale(1)",
                  boxShadow: "30px 50px 21px rgba(33,33,33,.5)",
                },
              }}
            >
              <CardHeader
                title="Delight"
                subheader="Contact Us"
                titleTypographyProps={{ align: "center" }}
                subheaderTypographyProps={{
                  align: "center",
                  color: "#FFF",
                  fontWeight: 700,
                }}
                sx={{
                  backgroundImage: "linear-gradient(-45deg,#15bbd4,   #0167FF)",
                  color: "#FFF",
                  fontWeight: 700,
                }}
              />
              <CardContent
                sx={{
                  height: "330px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline",
                    mb: 2,
                  }}
                >
                  <Typography component="h2" variant="h3" color="text.primary">
                    Contact Us
                  </Typography>
                  <Typography variant="h6" color="text.secondary"></Typography>
                </Box>
                <ul>
                  <Typography component="li" variant="subtitle1">
                    <CheckCircleIcon
                      sx={{
                        verticalAlign: "middle",
                        display: "inline-flex",
                        fontSize: "18px",
                        marginRight: 2,
                      }}
                    />
                    End to end recruitment service by Recroot.
                  </Typography>
                  <Typography component="li" variant="subtitle1">
                    <CheckCircleIcon
                      sx={{
                        verticalAlign: "middle",
                        display: "inline-flex",
                        fontSize: "18px",
                        marginRight: 2,
                      }}
                    />
                    With dedicated technical recruiters, we recruit the right
                    professionals as per your requirements on your behalf.
                  </Typography>
                  <Typography component="li" variant="subtitle1">
                    <CheckCircleIcon
                      sx={{
                        verticalAlign: "middle",
                        display: "inline-flex",
                        fontSize: "18px",
                        marginRight: 2,
                      }}
                    />
                    Contact Us to know more. grow@arinnovate.io
                  </Typography>
                </ul>
                <Button
                  fullWidth
                  variant={"outlined"}
                  size="large"
                  sx={{ mt: "20px" }}
                  onClick={() => handleClickOpen()}
                >
                  Contact Us
                </Button>
              </CardContent>
              <CardActions
                sx={{
                  backgroundImage: "linear-gradient(-45deg,#15bbd4,   #0167FF)",
                  height: "30px",
                }}
              ></CardActions>
            </Card>
            <Dialog
              fullWidth={fullWidth}
              maxWidth={maxWidth}
              open={open}
              onClose={handleClose}
            >
              <Box sx={{ p: "40px" }}>
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Contact Us
                </Typography>
                <form
                  onSubmit={(e) => {
                    handleSubmitContact(e);
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      mt: "15px",
                    }}
                  >
                    <TextField
                      required
                      id="duaration"
                      label="Company Name"
                      name="CompanyName"
                      value={contactus.CompanyName}
                      autoComplete="user-name"
                      onChange={(e) => {
                        handleChangeContact(e);
                      }}
                    />
                    <TextField
                      required
                      id="duaration"
                      label="Email"
                      name="email"
                      value={contactus.email}
                      autoComplete="user-name"
                      onChange={(e) => {
                        handleChangeContact(e);
                      }}
                    />
                    <TextField
                      required
                      id="duaration"
                      label="Subject"
                      name="subject"
                      value={contactus.subject}
                      autoComplete="user-name"
                      onChange={(e) => {
                        handleChangeContact(e);
                      }}
                    />

                    <TextField
                      autoComplete="given-name"
                      name="description"
                      required
                      fullWidth
                      id="about"
                      label="Description"
                      autoFocus
                      multiline
                      rows={4}
                      value={contactus.description}
                      onChange={(e) => {
                        handleChangeContact(e);
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mt: "10px",
                      gap: "5px",
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "#4fa9ff" }}
                      type="submit"
                    >
                      Save
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        handleClose();
                      }}
                    >
                      Cancel
                    </Button>
                  </Box>
                </form>
              </Box>
            </Dialog>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
