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
import clogo from "./logo/clogo.svg";
import logo1 from "./logo/logo1.svg";
import prof from "./logo/prof.jpg";
import rlogo from "./logo/rlogo.svg";
import { styles } from "../employerhome/employerhstyle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BusinessIcon from "@mui/icons-material/Business";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BookmarkAddedSharpIcon from "@mui/icons-material/BookmarkAddedSharp";
import SubscriptionsSharpIcon from "@mui/icons-material/SubscriptionsSharp";
import {
  Avatar,
  Button,
  InputAdornment,
  TextField,
} from "@mui/material";
import { styled } from "@mui/system";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
// import { CanditateDetails } from './CanditateDetails';
import CompanyProfile from "./CompanyProfile";

const ItemButton = styled(ListItemButton)(({ theme }) => ({
  "&:focus": {
    backgroundColor: "#A1CBFD",
  },
  "&:active": {
    backgroundColor: "#A1CBFD",
  },
}));
const drawerWidth = 230;

function Maincompanyview(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [tab, setTab] = React.useState(0);
  const user = JSON.parse(localStorage.getItem("User"));

  const drawer = (
    <div style={{ backgroundColor: "#4F9AFF" }}>
      <img style={styles.logo} alt="" src={clogo} />
      <Typography variant="h5" sx={styles.helotxt}>
        Hello {user.User.firstName}
      </Typography>
      <List>
        <ListItem disablePadding>
          <ItemButton
            onClick={(e) => {
              setTab(0);
            }}
          >
            <ListItemIcon>
              <DashboardIcon sx={styles.listico} />
            </ListItemIcon>
            <ListItemText sx={styles.listtxt} primary={"Dashboard"} />
          </ItemButton>
        </ListItem>
        <ListItem
          onClick={(e) => {
            setTab(tab + 1);
          }}
          disablePadding
        >
          <ItemButton>
            <ListItemIcon>
              <BusinessIcon sx={styles.listico} />
            </ListItemIcon>
            <ListItemText sx={styles.listtxt} primary={"Company profile"} />
          </ItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ItemButton>
            <ListItemIcon>
              <LocalMallIcon sx={styles.listico} />
            </ListItemIcon>
            <ListItemText sx={styles.listtxt} primary={"Post new job"} />
          </ItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ItemButton>
            <ListItemIcon>
              <WorkOutlineIcon sx={styles.listico} />
            </ListItemIcon>
            <ListItemText sx={styles.listtxt} primary={"Manage jobs"} />
          </ItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ItemButton>
            <ListItemIcon>
              <PeopleAltIcon sx={styles.listico} />
            </ListItemIcon>
            <ListItemText sx={styles.listtxt} primary={"All application"} />
          </ItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ItemButton>
            <ListItemIcon>
              <BookmarkAddedSharpIcon sx={styles.listico} />
            </ListItemIcon>
            <ListItemText sx={styles.listtxt} primary={"Saved candidates"} />
          </ItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SubscriptionsSharpIcon sx={styles.listico} />
            </ListItemIcon>
            <ListItemText sx={styles.listtxt} primary={"Subscriptions"} />
          </ListItemButton>
        </ListItem>
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

      <ItemButton sx={{ mt: "25px" }}>
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
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              color: "black",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "20px",
            }}
          >
            company profile
          </Typography>
          <Box sx={styles.icons}>
            <TextField
              id="input-with-icon-textfield"
              label="Search"
              sx={{ display: { md: "block", xs: "none" } }}
              InputProps={{
                style: {
                  height: "49px",
                  padding: "0 14px",
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Search"
              variant="outlined"
            />
            <Button
              style={{
                maxWidth: "49px",
                maxHeight: "49px",
                minWidth: "49px",
                minHeight: "49px",
                marginLeft: "15px",
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
            <Avatar
              sx={{
                marginLeft: "10px",
                borderRadius: "5px",
                width: "49px",
                height: "49px",
              }}
              variant="square"
              src={prof}
            />
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
        <CompanyProfile />
        {/* <Allfile/> */}
      </Box>
    </Box>
  );
}

Maincompanyview.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Maincompanyview;
