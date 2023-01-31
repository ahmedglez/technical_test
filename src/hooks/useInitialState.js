import flights from "data/flights";
import { useState } from "react";

const origins = flights.map((flight) => {
  const payload = {
    value: flight.departure,
    label: flight.departure,
    airlaineLogo: flight.airlineLogo,
    airlaine: flight.airline,
  };
  return payload;
});
const destinations = flights.map((flight) => {
  const payload = {
    value: flight.arrival,
    label: flight.arrival,
    airlaineLogo: flight.airlineLogo,
    airlaine: flight.airline,
  };
  return payload;
});

console.log(origins);
console.log(destinations);

const useInitialState = () => {
  const initialState = {
    flights: flights,
    search: {
      origin: "",
      destination: "",
      departure: "",
      return: "",
      passengers: 1,
      bags: 0,
    },
    selectedFlight: {},
    results: [],
    origins: [...new Set(origins)],
    destinations: [...new Set(destinations)],
  };

  const [state, setState] = useState(initialState);

  const setSearch = (payload) => {
    setState({
      ...state,
      search: payload,
    });
  };

  const setSelectedFlight = (payload) => {
    setState({
      ...state,
      selectedFlight: payload,
    });
  };

  const setResults = (payload) => {
    setState({
      ...state,
      results: payload,
    });
  };

  return {
    state,
    setSearch,
    setSelectedFlight,
    setResults,
  };
};

export default useInitialState;
