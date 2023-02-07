import React, { useState } from "react";
import { TextField, Button, Box, Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import theme from "assets/theme";
import { ThemeProvider } from "@mui/material";

//Components
import TitleComponent from "components/TitleComponent";
import FiltersContainer from "./FiltersContainer";
import FlightComponent from "components/FlightComponent";
import DateComponent from "components/DateComponent";
import SearchButton from "components/SearchButton";

const FlightSearcher = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container dispaly="flex" direction="column" justifyContent="flex-start">
        <TitleComponent />
        <FiltersContainer />
        <Grid spacing={2} mt={2}>
          <FlightComponent />
        </Grid>
        <Grid spacing={2} mt={2}>
          <DateComponent />
        </Grid>
        <Grid spacing={2} mt={2}>
          <SearchButton />
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default FlightSearcher;
