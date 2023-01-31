import React from "react";
import { Typography, Box } from "@mui/material";

const TitleComponent = () => {
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
        Where are you flying?
      </Typography>
    </Box>
  );
};

export default TitleComponent;
