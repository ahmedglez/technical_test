import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import SimpleSelectMenu from "components/SimpleSelectMenu";
import TravelersSelectMenu from "components/TravelersSelectMenu";
import BagsSelectMenu from "components/BagsSelectMenu";

const FiltersContainer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "20px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={3} sm={3} md={3} lg={3}>
          <SimpleSelectMenu
            options={["One-way", "Round-trip", "Multi-city", "Trip Builder"]}
            label={"Flights"}
          />
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3}>
          <TravelersSelectMenu
            options={[
              ["Adults", "18-64"],
              ["Students", "over 18"],
              ["Seniors", "65+"],
              ["Youths", "12-17"],
              ["Children", "2-11"],
              ["Toddler in own seat", "under 2"],
              ["Infant in lap", "under 2"],
            ]}
            label={"Travelers"}
          />
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3}>
          <SimpleSelectMenu
            options={["Economy", "Premium Economy", "Business", "First", "Multiple"]}
            label={"Class"}
          />
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3}>
          <BagsSelectMenu options={["Carry-on", "Checked"]} label={"Bags"} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FiltersContainer;
