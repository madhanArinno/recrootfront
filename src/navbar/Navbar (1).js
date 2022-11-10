import React, { useCallback, useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from ".//logo/logo.png";
import logo1 from ".//logo/logo1.svg";
import { styles } from "./navbarstyle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, useMediaQuery } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/auth";
import { retrievePersonal } from "../slices/personal";
import { getCompanyDetails } from "../slices/companyslice";

function Navbar(props) {
  const { user: currentUser } = useSelector((state) => state.auth);
  let navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const logos = useSelector((state) => state.company.companylogo);
  const dispatch = useDispatch();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const user = JSON.parse(localStorage.getItem("User"));
  useEffect(() => {
    dispatch(retrievePersonal());
  }, [dispatch]);
  const [srcsjjj, setSrcsjjj] = useState("");

  const photoss = useSelector(
    (state) => state.personal.data && state.personal.data.profpicFileLocation
  );
  useEffect(() => {
    if (user === undefined || user === null) {
      setSrcsjjj("");
    } else if (
      user.User.profpicFileLocation === undefined ||
      user.User.profpicFileLocation === null
    ) {
      setSrcsjjj("");
    } else {
      if (photoss === undefined) {
      } else {
        setSrcsjjj(
          `http://localhost:3000/api/openProfpic?photo=${photoss.photo}`
        );
      }
    }
  }, [photoss, user]);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const matches = useMediaQuery("(max-width:360px)");

  const logOut = useCallback(() => {
    dispatch(logout()).then(() => {
      navigate("/", { replace: true });
    });
  }, [dispatch, navigate]);
  const handlePost = () => {
    navigate("/employerhome/newjob");
  };
  React.useEffect(() => {
    dispatch(getCompanyDetails());
  }, [dispatch]);

  return (
    <AppBar sx={styles.top}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ height: "102px" }}>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            {" "}
            <Link to="/">
              <img style={{ width: "174px" }} src={logo} alt="" />
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
              <Box>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/">
                    <Button sx={styles.btnhome} variant="text">
                      Home
                    </Button>
                  </Link>
                </MenuItem>

                {currentUser && (
                  <>
                    {currentUser.User.recrootUserType === "Candidate" && (
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Link to="/myProfile">
                          <Button sx={styles.btnhome} variant="text">
                            Candidate
                          </Button>
                        </Link>
                      </MenuItem>
                    )}
                    {currentUser.User.recrootUserType === "Employer" && (
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Link to="/employerhome">
                          <Button sx={styles.btnhome} variant="text">
                            Employer
                          </Button>
                        </Link>
                      </MenuItem>
                    )}
                  </>
                )}
              </Box>
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
            <img
              style={
                matches === true
                  ? { width: "95px" }
                  : { p: "0", width: "174px" }
              }
              src={logo}
              alt=""
            />
          </Box>
          <Box sx={styles.home}>
            <Link to="/">
              <Button sx={styles.btnhome} variant="text">
                Home
              </Button>
            </Link>

            {currentUser && (
              <>
                {currentUser.User.recrootUserType === "Candidate" && (
                  <Link to="/myProfile">
                    <Button sx={styles.btnhome} variant="text">
                      Candidate{" "}
                    </Button>
                  </Link>
                )}
                {currentUser.User.recrootUserType === "Employer" && (
                  <Link to="/employerhome">
                    <Button sx={styles.btnhome} variant="text">
                      Employer
                    </Button>
                  </Link>
                )}
              </>
            )}
          </Box>

          <Box sx={styles.right}>
            {!currentUser ? (
              <>
                <Link to="/signin">
                  <Button
                    variant=""
                    style={{
                      color: "#5D658C",
                      marginLeft: "15px",
                      height: "49px",
                      textTransform: "capitalize",
                    }}
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/signUp">
                  <Button
                    variant="contained"
                    style={{
                      color: "#4F9AFF",
                      height: "49px",
                      backgroundColor: "#4F9AFF",
                      marginLeft: "15px",
                    }}
                  >
                    <span
                      style={{ color: "white", textTransform: "capitalize" }}
                    >
                      Sign Up
                    </span>
                  </Button>
                </Link>
              </>
            ) : (
              <Link to="#" onClick={logOut}>
                <Button
                  variant=""
                  style={{
                    color: "#5D658C",
                    marginLeft: "15px",
                    height: "49px",
                    textTransform: "capitalize",
                  }}
                >
                  Logout
                </Button>
              </Link>
            )}
            {currentUser && (
              <>
                {currentUser &&
                  currentUser.User.recrootUserType === "Employer" && (
                    <Button
                      variant="outlined"
                      style={{
                        color: "#4F9AFF",
                        height: "49px",
                        marginLeft: "15px",
                        marginRight: "10px",
                        textTransform: "capitalize",
                      }}
                      onClick={handlePost}
                    >
                      Post New Job
                    </Button>
                  )}
                <Button
                  style={{
                    maxWidth: { md: "49px", xs: "30px" },
                    maxHeight: { md: "49px", xs: "30px" },
                    minWidth: { md: "49px", xs: "30px" },
                    minHeight: { md: "49px", xs: "30px" },
                    marginLeft: { md: "15px", xs: "10px" },
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
                {currentUser &&
                currentUser.User.recrootUserType === "Candidate" ? (
                  <Link to="/myProfile">
                    <Avatar
                      sx={{
                        marginLeft: "10px",
                        borderRadius: "5px",
                        width: { md: "49px", xs: "30px" },
                        height: { md: "49px", xs: "30px" },
                      }}
                      variant="square"
                      src={srcsjjj}
                    />
                  </Link>
                ) : (
                  <Link to="/employerhome">
                    <Avatar
                      sx={{
                        marginLeft: "10px",
                        borderRadius: "5px",
                        width: { md: "49px", xs: "30px" },
                        height: { md: "49px", xs: "30px" },
                      }}
                      variant="square"
                      src={
                        logos && logos.logo !== undefined
                          ? `http://localhost:3000/api/getCompanyPhotos?compPhotos=${logos.logo}`
                          : URL.createObjectURL(logos)
                      }
                    />
                  </Link>
                )}
              </>
            )}
          </Box>
          <Box sx={styles.rightico}>
            {currentUser ? (
              <>
                <Button
                  sx={{
                    maxWidth: { md: "49px", xs: "30px" },
                    maxHeight: { md: "49px", xs: "30px" },
                    minWidth: { md: "49px", xs: "30px" },
                    minHeight: { md: "49px", xs: "30px" },
                    marginLeft: { md: "15px", xs: "10px" },
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

                {currentUser &&
                currentUser.User.recrootUserType === "Candidate" ? (
                  <Link to="/myProfile">
                    <Avatar
                      sx={{
                        marginLeft: "10px",
                        borderRadius: "5px",
                        width: { md: "49px", xs: "30px" },
                        height: { md: "49px", xs: "30px" },
                      }}
                      variant="square"
                      src={srcsjjj}
                    />
                  </Link>
                ) : (
                  <Link to="/employerhome">
                    <Avatar
                      sx={{
                        marginLeft: "10px",
                        borderRadius: "5px",
                        width: { md: "49px", xs: "30px" },
                        height: { md: "49px", xs: "30px" },
                      }}
                      variant="square"
                      src={
                        logos && logos.logo !== undefined
                          ? `http://localhost:3000/api/getCompanyPhotos?compPhotos=${logos.logo}`
                          : URL.createObjectURL(logos)
                      }
                    />
                  </Link>
                )}
              </>
            ) : (
              ""
            )}

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenUserMenu}
              color="inherit"
              sx={{ p: "0px" }}
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
              {!currentUser ? (
                <Box>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link to="/signin">
                      <Button
                        style={{
                          color: "#5D658C",
                          height: "30px",
                          textTransform: "capitalize",
                        }}
                      >
                        Login
                      </Button>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link to="/signUp">
                      <Button
                        style={{
                          color: "#5D658C",
                          height: "30px",
                          textTransform: "capitalize",
                        }}
                      >
                        <span style={{ textTransform: "capitalize" }}>
                          Sign Up
                        </span>
                      </Button>
                    </Link>
                  </MenuItem>
                </Box>
              ) : (
                <Box>
                  {" "}
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
                </Box>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
