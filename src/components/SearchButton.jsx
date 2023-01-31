import React from "react";
import { Button, Grid, Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchButton = () => {
  return (
    <Grid justifyContent="center" alignItems="center">
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} fullWidth>
        <Button
          fullWidth
          maxWidth={"600px"}
          variant="contained"
          color="primary"
          size="large"
          sx={{
            background: "linear-gradient(135deg,#ff690f 0%,#e8381b 100%)",
          }}
          startIcon={<SearchIcon />}
        >
          Search
        </Button>
      </Box>
    </Grid>
  );
};

export default SearchButton;
