import React, { useState } from "react";
import { TextField, Button, Box, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import theme from "assets/theme";
import { ThemeProvider } from "@mui/material";

//Components
import TitleComponent from "components/TitleComponent";
import FiltersContainer from "./FiltersContainer";

const useStyles = makeStyles(() => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200,
      fontFamily: "Roboto",
    },
  },
}));

const FlightSearcher = () => {
  const classes = useStyles();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Searching flights from ${from} to ${to}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container dispaly="flex" direction="column" justifyContent="flex-start">
        <TitleComponent />
        <FiltersContainer />
        <form className={classes.root} onSubmit={handleSubmit}>
          <TextField
            id="from"
            label="From"
            variant="outlined"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
          <TextField
            id="to"
            label="To"
            variant="outlined"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
          <Button variant="contained" type="submit">
            Search
          </Button>
        </form>
      </Container>
    </ThemeProvider>
  );
};

export default FlightSearcher;
