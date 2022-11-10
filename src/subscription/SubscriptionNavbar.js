import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "../navbar/logo/logo.png";
import logo1 from "../navbar/logo/logo1.svg";
import prof from "../navbar/logo/prof.jpg";
import { styles } from "../../src/navbar/navbarstyle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const pages = ["Candidate", "Employeer"];
const settings = ["Login", "Signup", "Post New Job"];

function SubscriptionNavbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={styles.top}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ height: "102px" }}>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            {" "}
            <Link to="/">
              <img src={logo} style={{width:'174px'}} alt="" />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon style={{ color: "black" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              {/* <li>
                  <ul><Button>osoos</Button></ul>
                  <ul><Button>osoos</Button></ul>
                  <ul><Button>osoos</Button></ul>
              </li> */}
            </Menu>
          </Box>
          <Box
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              textDecoration: "none",
            }}
          >
            {" "}
            <img src={logo} alt="" />
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> */}
          <Box sx={styles.home}>
            <Button sx={styles.btnhome} variant="text">
              Home
            </Button>
            <Button sx={styles.btnhome} variant="text">
              My Profile
            </Button>
          </Box>
          {/* 
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          <Box sx={styles.right}>
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
          <Box sx={styles.rightico}>
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

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenUserMenu}
              color="inherit"
            >
              <MoreVertIcon style={{ color: "black" }} />
            </IconButton>

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
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {settings.map((page) => (
                <MenuItem key={page} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              {/* <li>
                  <ul><Button>osoos</Button></ul>
                  <ul><Button>osoos</Button></ul>
                  <ul><Button>osoos</Button></ul>
              </li> */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default SubscriptionNavbar;
