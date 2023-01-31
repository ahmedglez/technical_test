import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Grid, Input, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//REDUX
import { setCabin, setTravelers } from "actions/fligth.actions";

export default function TravelersSelectMenu(props) {
  const { options } = props;
  const [option, setOption] = React.useState("");
  const [label, setLabel] = useState("");
  const dispatch = useDispatch();
  const { adults, students, seniors, youths, children, toddlers, infants } = useSelector(
    (state) => state.flights
  );
  const [travelers, setTravelers] = useState(1);
  const [numbersArray, setNumbersArray] = useState([
    adults,
    students,
    seniors,
    youths,
    children,
    toddlers,
    infants,
  ]);

  const handleAdd = (index) => {
    const newNumbersArray = [...numbersArray];
    newNumbersArray[index] = newNumbersArray[index] + 1;
    setNumbersArray(newNumbersArray);
    setTravelers(travelers + 1);
    dispatch(setTravelers(travelers + 1));
    dispatch(setCabin(newNumbersArray));
  };

  const handleRemove = (index) => {
    const newNumbersArray = [...numbersArray];
    /* if index === 0 verify is adults > 1 */
    if (index === 0) {
      if (newNumbersArray[index] > 1) {
        newNumbersArray[index] = newNumbersArray[index] - 1;
        setNumbersArray(newNumbersArray);
        setTravelers(travelers - 1);
      }
    } else {
      if (newNumbersArray[index] > 0) {
        newNumbersArray[index] = newNumbersArray[index] - 1;
        setNumbersArray(newNumbersArray);
        setTravelers(travelers - 1);
      }
    }
    setNumbersArray(newNumbersArray);
    adults > 1 && dispatch(setTravelers(travelers - 1));
    dispatch(setCabin(newNumbersArray));
  };

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          {travelers === 1 ? `${travelers} adult` : `${travelers} travelers`}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={option}
          label="Option"
        >
          {options.map((option, index) => (
            <Grid container spacing={10}>
              <Grid item xs={7}>
                <MenuItem value={option[0]}>
                  {option[0]} &nbsp;
                  <span style={{ color: "gray" }}> {`(${option[1]})`}</span>
                </MenuItem>
              </Grid>
              <Grid item xs={5} display="flex" direction="row" spacing={3} gap={1}>
                <Fab size="small" color="success" aria-label="add" onClick={() => handleAdd(index)}>
                  <AddIcon />
                </Fab>
                <Typography
                  variant={"h6"}
                  sx={{
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    color: "gray",
                    marginTop: "0.5rem",
                  }}
                >
                  {numbersArray[index]}
                </Typography>
                <Fab
                  size="small"
                  color="primary"
                  aria-label="remove"
                  onClick={() => handleRemove(index)}
                  disabled={numbersArray[index] === 0}
                >
                  <RemoveIcon />
                </Fab>
              </Grid>
            </Grid>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
