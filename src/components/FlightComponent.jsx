import FlightLandIcon from "@mui/icons-material/FlightLand";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { Grid } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import AppContext from "contexts/AppContext";
import { useContext, useEffect, useState } from "react";
import FlightsPopMenu from "./FlightsPopMenu";

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


  const handleChangeFrom = (event) => {
    setFrom(event.target.value);
  };

  const handleChangeTo = (event) => {
    setTo(event.target.value);
  };

  const handleSwitch = () => {
    setFrom(to);
    setTo(from);
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
          zIndex: 1000,
          top: "100%",
        }}
      >
        <FlightsPopMenu
          setDrawerOpen={setDrawerOpen}
          drawerOpen={drawerOpen}
          data={flights}
          label={label}
        />
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
          onClick={() => {
            handleSwitch();
          }}
          sx={{
            position: "absolute",
            top: "70%",
            left: "50%",
            fontSize: "2rem",
            cursor: "pointer",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            transitionDuration: "0.8s",
            transitionTimingFunction: "ease-in-out",
            /* hover */
            "&:hover": {
              transform: "translate(-50%, -50%) rotate(180deg)",
              transitionDuration: "0.8s",
              transitionTimingFunction: "ease-in-out",
              color: "#ff690f",
              
            },
          }}
        />
      ) : (
        <SwapHorizOutlinedIcon
          color="primary"
          onClick={() => {
            handleSwitch();
          }}
          sx={{
            fontSize: "2rem",
            marginTop: "1.5rem",
            cursor: "pointer",
            marginLeft: "1rem",
            "&:hover": {
              color: "#ff690f",
            },
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
