import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import * as React from "react";
import { useState } from "react";
import { useContext } from "react";
import AppContext from "contexts/AppContext";

export default function DateComponent() {

  const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));
  const { setSearch, state } = useContext(AppContext);
    const [payload, setPayload] = useState(state.search);
    

  const handleChange = (newValue) => {
    setValue(newValue);
    setPayload({
      ...payload,
      departure: newValue,
    });
    setSearch(payload);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DateTimePicker
          label="Departure"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}
