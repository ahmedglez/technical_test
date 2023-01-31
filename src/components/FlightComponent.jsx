import React from "react";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import { TextField, Button, Box, Container, Grid } from "@mui/material";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useContext, useState } from "react";
import AppContext from "contexts/AppContext";
import FlightsPopMenu from "./FlightsPopMenu";

const FlightComponent = () => {
  const { state } = useContext(AppContext);
  const { origins, destinations } = state;
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [mobileView, setMobileView] = useState(window.innerWidth < 600);
  const [drawerOpen, setDrawerOpen] = useState([false, false]);
  console.log("Origins", origins);

  const handleDrawerToggle = (index) => {
    setDrawerOpen((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
    };
    
    const handleDrawerClick = (index) => {
        setDrawerOpen((prevState) => {
            const newState = [...prevState];
            newState[index] = true;
            newState[1 - index] = false;
            return newState;
        });

    };

  const handleChangeFrom = (event) => {
    setFrom(event.target.value);
  };

  const handleChangeTo = (event) => {
    setTo(event.target.value);
  };

  const PopMenuContainer = (data) => {
    return (
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        position={"absolute"}
        sx={{
          zIndex: 1,
          top: "100%",
        }}
      >
        <FlightsPopMenu data={origins} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={5.5} lg={5.5} xl={5.5} position="relative">
        <FormControl variant="standard" fullWidth position="relative">
          <InputLabel htmlFor="input-with-icon-adornment">From</InputLabel>
          <Input
            onChange={handleChangeFrom}
            onClick={() => handleDrawerClick(0)}
            onBlur={() => handleDrawerToggle(0)}
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <FlightTakeoffIcon color="primary" />
              </InputAdornment>
            }
          />
        </FormControl>
        {drawerOpen[0] && <PopMenuContainer data={origins} />}
      </Grid>
      {mobileView ? (
        <SwapVertIcon
          color="primary"
          sx={{
            position: "absolute",
            top: "52.5%",
            left: "50%",
            fontSize: "2rem",
            cursor: "pointer",
          }}
        />
      ) : (
        <SwapHorizOutlinedIcon
          color="primary"
          sx={{
            fontSize: "2rem",
            marginTop: "1.5rem",
            cursor: "pointer",
            marginLeft: "1rem",
          }}
        />
      )}

      <Grid item xs={12} sm={12} md={5.5} lg={5.5} xl={5.5}>
        <FormControl variant="standard" fullWidth>
          <InputLabel htmlFor="input-with-icon-adornment">To</InputLabel>
          <Input
            onChange={handleChangeTo}
            onClick={() => handleDrawerClick(1)}
            onBlur={() => handleDrawerToggle(1)}
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <FlightLandIcon color="primary" />
              </InputAdornment>
            }
          />
          {drawerOpen[1] && <PopMenuContainer data={destinations} />}
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default FlightComponent;
