import React, { useEffect } from "react";
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
import { set } from "utils/LocalStorageUtils";

const FlightComponent = () => {
  const { state, setSearch } = useContext(AppContext);
  const { origins, destinations } = state;
  const [from, setFrom] = useState(state.search.origin);
  const [to, setTo] = useState(state.search.destination);
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

  useEffect(() => {
    const updateSearch = () => {
      setFrom(state.search.origin);
      setTo(state.search.destination);
    };
    updateSearch();
  }, [state.search]);

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

  const PopMenuContainer = (flights, label) => {
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
        <FlightsPopMenu data={flights} label={label} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2} position="relative">
      <Grid item xs={12} sm={12} md={5.5} lg={5.5} xl={5.5} position="relative">
        <FormControl variant="standard" fullWidth position="relative">
          <InputLabel htmlFor="input-with-icon-adornment">From</InputLabel>
          <Input
            onChange={handleChangeFrom}
            onClick={() => {
              setDrawerOpen([!drawerOpen[0], false]);
            }}
            id="input-with-icon-adornment"
            value={from}
            startAdornment={
              <InputAdornment position="start">
                <FlightTakeoffIcon color="primary" />
              </InputAdornment>
            }
          />
        </FormControl>
        {drawerOpen[0] && PopMenuContainer(origins, "origins")}
      </Grid>
      {mobileView ? (
        <SwapVertIcon
          color="primary"
          sx={{
            position: "absolute",
            top: "60%",
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
            onClick={() => {
              setDrawerOpen([false, !drawerOpen[1]]);
            }}
            id="input-with-icon-adornment"
            value={to}
            startAdornment={
              <InputAdornment position="start">
                <FlightLandIcon color="primary" />
              </InputAdornment>
            }
          />
          {drawerOpen[1] && PopMenuContainer(destinations, "destinations")}
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default FlightComponent;
