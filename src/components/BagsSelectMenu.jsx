import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import * as React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//REDUX
import {
  addCarryOnBag,
  addCheckedBag,
  removeCarryOnBag,
  removeCheckedBag,
  setBags,
} from "actions/fligth.actions";

export default function BagsSelectMenu(props) {
  const { options, label } = props;
  const [option, setOption] = React.useState("");
  const dispatch = useDispatch();
  const { bags, carryOnBags, checkedBags } = useSelector((state) => state.flights);
  const [total, setTotal] = useState(0);
  const [numbersArray, setNumbersArray] = useState([bags, carryOnBags, checkedBags]);

  const handleAdd = (index) => {
    const newNumbersArray = [...numbersArray];
    newNumbersArray[index] = newNumbersArray[index] + 1;
    setNumbersArray(newNumbersArray);
    setTotal(total + 1);
    dispatch(setBags(total + 1));
    index === 0 ? dispatch(addCarryOnBag()) : dispatch(addCheckedBag());
  };

  const handleRemove = (index) => {
    const newNumbersArray = [...numbersArray];
    if (newNumbersArray[index] > 0) {
      newNumbersArray[index] = newNumbersArray[index] - 1;
      setNumbersArray(newNumbersArray);
      setTotal(total - 1);
      dispatch(setBags(total - 1));
      index === 0 ? dispatch(removeCarryOnBag()) : dispatch(removeCheckedBag());
    }
  };

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{`${total} ${label}`}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={option}
          label="Option"
        >
          {options.map((option, index) => (
            <Grid container spacing={2} p={0.5}>
              <Grid item xs={6}>
                <MenuItem value={option}>{option} &nbsp;</MenuItem>
              </Grid>
              <Grid item xs={6} display="flex" direction="row" spacing={3} gap={1}>
                <Fab size="small" color="success" aria-label="add" onClick={() => handleAdd(index)}>
                  <AddIcon />
                </Fab>
                <Typography
                  variant={"h6"}
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "gray",
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
