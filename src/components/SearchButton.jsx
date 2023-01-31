import React from "react";
import { Button, Grid, Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useContext, useState } from "react";
import AppContext from "contexts/AppContext";

const SearchButton = () => {
  const { setSearch, state, setResults } = useContext(AppContext);
  const [payload, setPayload] = useState(state.search);

  const handleClick = () => {
    setSearch(payload);
    const { flights, search } = state;

    const results = flights.filter(
      (flight) => flight.departure === search.origin && flight.arrival === search.destination
    );
    setResults(results);
  };

  return (
    <Grid justifyContent="center" alignItems="center">
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} fullWidth>
        <Button
          fullWidth
          maxWidth={"600px"}
          variant="contained"
          color="primary"
          size="large"
          onClick={()=>handleClick()}
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
