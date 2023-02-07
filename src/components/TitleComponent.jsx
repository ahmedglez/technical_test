import React from "react";
import { Typography, Box } from "@mui/material";
import AppContext from "contexts/AppContext";
import { useContext } from "react";

const TitleComponent = () => {
  const { state } = useContext(AppContext);
  return (
    <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        fontFamily={{
          fontFamily: "Roboto",
          fontWeight: 700,
          fontFeatureSettings: "ss04",
          lineHeight: "40px",
          color: "#212a30",
          letterSpacing: "0.05em",
        }}
      >
        {state.results.length === 0 ? "Where would you like to go?" : "Flights available"} 
      </Typography>
    </Box>
  );
};

export default TitleComponent;
