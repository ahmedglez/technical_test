import React from "react";
import Navbar from "components/DefaultNavBar";
import Footer from "components/Footer";
import { Box, Grid, Container, Typography, Button } from "@mui/material";

const DefaultLayout = (props) => {
  return (
    <Box
      sx={{ flexGrow: 1 }}
      container
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      minHeight="100vh"
    >
      <Box sx={{ flexGrow: 1 }} item xs={12} md={12} lg={10} xl={8}>
        <Navbar />
      </Box>
      <Box sx={{ flexGrow: 1 }} item xs={12} md={12} lg={12} xl={12}>
        {props.children}
      </Box>
      <Box sx={{ flexGrow: 1 }} item xs={12} md={12} lg={12} xl={12}>
        <Footer />
      </Box>
    </Box>
  );
};

export default DefaultLayout;
