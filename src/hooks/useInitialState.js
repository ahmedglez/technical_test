import flights from "data/flights";
import { useState } from "react";

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
