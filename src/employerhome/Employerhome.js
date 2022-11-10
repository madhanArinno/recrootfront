import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import clogo from "./logo/clogo.png";
import logo1 from "./logo/logo1.svg";
import rlogo from "./logo/rlogo.svg";
import { styles } from "./employerhstyle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BusinessIcon from "@mui/icons-material/Business";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SubscriptionsSharpIcon from "@mui/icons-material/SubscriptionsSharp";
import WorkIcon from "@mui/icons-material/Work";
import Billing from "../Billing/Billing/Billing";
import { Avatar, Button, Menu, MenuItem, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import LogoutIcon from "@mui/icons-material/Logout";
import { CanditateDetails } from "./CanditateDetails";
import CompanyProfile from "../Companyprofile/CompanyProfile";
import PostnewJob from "../PostNewJob/PostnewJob";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import ApplicantProfile from "../AllApplicants/ApplicantProfile";
import AllApplication from "../allApplication/allapplication";
import { Interviewpage } from "../allApplication/Interviewpage";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/auth";
import { getCompanyDetails } from "../slices/companyslice";
import { setEditJob } from "../slices/job";
const ItemButton = styled(ListItemButton)(({ theme }) => ({
  "&:focus": {
    backgroundColor: "#A1CBFD",
  },
  "&:active": {
    backgroundColor: "#A1CBFD",
  },
}));
const drawerWidth = 230;

function Employerhome(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const logo = useSelector((state) => state.company.companylogo);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  React.useEffect(() => {
    dispatch(getCompanyDetails())
      .then((res) => {
        if (res.error !== undefined) {
          res.error.message === "Request failed with status code 401" ||
          "Request failed with status code 403"
            ? dispatch(logout()).then(() => {
                navigate("/signin", { state: true });
              })
            : navigate(1);
        } else {
          navigate(1);
        }
      })
      .catch((error) => {
        if (
          error.message === "Request failed with status code 401" ||
          "Request failed with status code 403"
        ) {
          dispatch(logout()).then(() => {
            navigate("/signin", { state: true });
          });
        }
      });
  }, [dispatch, navigate]);

  const handleClear = () => {
    dispatch(
      setEditJob({
        salary: {},
        question: [
          {
            id: new Date().getTime(),
            questions: "",
            answer: "",
            preferedAns: "",
          },
        ],
        requiredSkill: [],
      })
    ).then(
      setTimeout(() => {
        navigate("/employerhome/newjob", { replace: false });
      }, 500)
    );
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const logOut = React.useCallback(() => {
    dispatch(logout()).then(() => {
      navigate("/", { replace: true });
    });
  }, [dispatch, navigate]);

  const user = JSON.parse(localStorage.getItem("User"));

  const matches = useMediaQuery("(max-width:600px)");

  const drawer = (
    <div style={{ backgroundColor: "#4F9AFF", height: "200%" }}>
      <img style={styles.logo} src={clogo} alt="" />
      <Typography variant="h5" sx={styles.helotxt}>
        Hello {user && user.User.firstName}
      </Typography>

      <List>
        <Link to="dashboard">
          <ListItem disablePadding>
            <ItemButton>
              <ListItemIcon>
                <DashboardIcon sx={styles.listico} />
              </ListItemIcon>
              <ListItemText sx={styles.listtxt} primary={"Dashboard"} />
            </ItemButton>
          </ListItem>
        </Link>

        <Link to="profile">
          <ListItem disablePadding>
            <ItemButton>
              <ListItemIcon>
                <BusinessIcon sx={styles.listico} />
              </ListItemIcon>
              <ListItemText sx={styles.listtxt} primary={"Company profile"} />
            </ItemButton>
          </ListItem>
        </Link>

        {/* <Link to="newjob"> */}
        <ListItem disablePadding>
          <ItemButton onClick={handleClear}>
            <ListItemIcon>
              <LocalMallIcon sx={styles.listico} />
            </ListItemIcon>
            <ListItemText sx={styles.listtxt} primary={"Post new job"} />
          </ItemButton>
        </ListItem>
        {/* </Link> */}

        <Link to="allapplicants">
          <ListItem disablePadding>
            <ItemButton>
              <ListItemIcon>
                <PeopleAltIcon sx={styles.listico} />
              </ListItemIcon>
              <ListItemText sx={styles.listtxt} primary={"All applicants"} />
            </ItemButton>
          </ListItem>
        </Link>

        <Link to="schedule">
          <ListItem disablePadding>
            <ItemButton>
              <ListItemIcon>
                <WorkIcon sx={styles.listico} />
              </ListItemIcon>
              <ListItemText sx={styles.listtxt} primary={"Interviews"} />
            </ItemButton>
          </ListItem>
        </Link>

        <Link to="Billing">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SubscriptionsSharpIcon sx={styles.listico} />
              </ListItemIcon>
              <ListItemText sx={styles.listtxt} primary={"Subscriptions"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Box sx={styles.subscribe}>
        <img src={rlogo} style={styles.rlogo} alt="" />
        <Typography variant="body1" sx={styles.subscribetxt}>
          Subscribe to our latest Subscriptions
        </Typography>
        <Box sx={{ borderBottom: "1px solid #ffff", width: "100%" }}></Box>
        <Typography variant="h5" sx={styles.linktext}>
          RECROOT.JOBS
        </Typography>
      </Box>

      <ItemButton sx={{ mt: "25px" }} onClick={logOut}>
        <ListItemIcon>
          <LogoutIcon sx={styles.listico} />
        </ListItemIcon>
        <ListItemText sx={styles.listtxt} primary={"Log out"} />
      </ItemButton>

      <Typography variant="body2" sx={styles.reserve}>
        All Rights Reserved 2022
      </Typography>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          height: "70px",
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#ffff",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" }, color: "#4F9AFF" }}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <Button
              sx={{ color: "#5D658C", textTransform: "capitalize" }}
              variant="text"
            >
              Home
            </Button>
          </Link>
          <Box sx={styles.icons}>
            {matches === true ? (
              ""
            ) : (
              <>
                <Button
                  variant="outlined"
                  style={{
                    color: "#4F9AFF",
                    height: "49px",
                    marginLeft: "15px",
                    marginRight: "10px",
                    textTransform: "capitalize",
                  }}
                  onClick={handleClear}
                >
                  Post New Job
                </Button>
                <Button
                  style={{
                    maxWidth: { md: "49px", xs: "30px" },
                    maxHeight: { md: "49px", xs: "30px" },
                    minWidth: { md: "49px", xs: "30px" },
                    minHeight: { md: "49px", xs: "30px" },
                    marginLeft: { md: "15px", xs: "10px" },
                    marginRight: "10px",
                    color: "#4F9AFF",
                  }}
                  variant="outlined"
                  href="#outlined-buttons"
                >
                  <img
                    style={{ width: "25px", height: "25px" }}
                    src={logo1}
                    alt=""
                  />
                </Button>
              </>
            )}
            <Avatar
              sx={{
                marginLeft: "auto",
                borderRadius: "5px",
                width: "49px",
                height: "49px",
              }}
              variant="square"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              src={
                logo && logo.logo !== undefined
                  ? `http://localhost:3000/api/getCompanyPhotos?compPhotos=${logo.logo}`
                  : URL.createObjectURL(logo)
              }
              onClick={handleOpenUserMenu}
            />
            <Menu
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Link to="#" onClick={logOut}>
                  <Button
                    variant=""
                    style={{
                      color: "#5D658C",
                      height: "30px",
                      textTransform: "capitalize",
                    }}
                  >
                    Logout
                  </Button>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              "&::-webkit-scrollbar": {
                width: "3px",
                color: "#8A8A8A",
                height: "5px",
              },
              "&::-webkit-scrollbar-track": {
                boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
                webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
                backgroundColor: "#4fa9ff",
                borderRadius: "50px",
                height: "5px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#4fa9ff",
                borderRadius: "50px",
                color: "#8A8A8A",
              },
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              "&::-webkit-scrollbar": {
                width: "3px",
                color: "#8A8A8A",
                height: "5px",
              },
              "&::-webkit-scrollbar-track": {
                boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
                webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
                backgroundColor: "#4fa9ff",
                borderRadius: "50px",
                height: "5px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#8A8A8A",
                borderRadius: "50px",
                color: "#8A8A8A",
              },
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        {/* <ManageJobs /> */}
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<CompanyProfile />} />
          <Route path="newjob" element={<PostnewJob />} />
          <Route path="allapplicants" element={<CanditateDetails />} />
          <Route path="applicant" element={<ApplicantProfile />} />
          <Route path="interview" element={<AllApplication />} />
          <Route path="schedule" element={<Interviewpage />} />
          <Route path="Billing" element={<Billing />} />
        </Routes>
      </Box>
    </Box>
  );
}

Employerhome.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Employerhome;
