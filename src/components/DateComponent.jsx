import React from "react";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import AppContext from "contexts/AppContext";
import { useState, useContext } from "react";

export default function DateComponent() {
  const { state, setState } = useContext(AppContext);
  const [departureDate, setDepartureDate] = useState(new Date().toISOString().slice(0, 16));
  const [returnDate, setReturnDate] = useState(new Date( new Date().getTime() + 24 * 60 * 60 * 1000).toISOString().slice(0, 16));

  const handleDepartureDate = (event) => {
    setDepartureDate(event.target.value);
    setState({
      ...state,
      departureDate: event.target.value,
    });

    console.log(state.departureDate);
  };

  const handleReturnDate = (event) => {
    if (event.target.value < departureDate) {
      setReturnDate(departureDate);
      setState({
        ...state,
        returnDate: departureDate,
      });
    }    
    }

  return (
    <Grid container fullWidth spacing={2} mt={2} display={"flex"} justifyContent={"center"}>
      <Grid item xs={10} sm={6}>
        <TextField
          fullWidth
          id="datetime-local"
          label="Departure Date and Time"
          type="datetime-local"
          defaultValue={departureDate}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleDepartureDate}
        />
      </Grid>
      <Grid item xs={10} sm={6}>
        <TextField
          fullWidth
          id="datetime-local"
          label="Return Date and Time"
          type="datetime-local"
          defaultValue={returnDate}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleReturnDate}
        />
      </Grid>
    </Grid>
  );
}
