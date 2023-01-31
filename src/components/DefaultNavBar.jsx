import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";
import DrawerComp from "./Drawer";
import logo from "assets/images/logo.png";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";
import Home from "pages/Home";
import { Box } from "@mui/system";
const NavBar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  const buttonStyle = {
    textDecoration: "none",
    color: "inherit",
    background: "none",
    boxShadow: "none",
  };

  return (
    <React.Fragment>
      <AppBar sx={{ background: "linear-gradient(135deg,#ff690f 0%,#e8381b 100%)" }}>
        <Toolbar>
          <Link to="/">
            {/* logo picture */}
            <CardMedia
              component="img"
              image={logo}
              alt="logo"
              sx={{
                width: "50px", height: "50px",
                filter: "drop-shadow(2px 2px 2px #000000)",
              }}
            />
          </Link>
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                }}
                
            >
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Link to="/" style={linkStyle}>
                  <Tab label="Flights" />
                </Link>
                <Link to="/Stays" style={linkStyle}>
                  <Tab label="Stays" />
                </Link>
                <Link to="/Experiences" style={linkStyle}>
                  <Tab label="Experiences" />
                </Link>
                <Link to="/About" style={linkStyle}>
                  <Tab label="About Us" />
                </Link>
              </Tabs>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Link to="/Login" style={linkStyle}>
                  <Button
                    sx={{
                      marginLeft: "auto",
                    }}
                    style={buttonStyle}
                    variant="contained"
                  >
                    <LoginIcon sx={{ marginRight: "5px" }} />
                    Login
                  </Button>
                </Link>
                <Link to="/SignUp" style={linkStyle}>
                  <Button sx={{ marginLeft: "10px" }} variant="contained" style={buttonStyle}>
                    <PersonIcon sx={{ marginRight: "5px" }} />
                    SignUp
                  </Button>
                </Link>
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default NavBar;
