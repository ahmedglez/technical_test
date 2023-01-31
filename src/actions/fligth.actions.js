import {
  SET_ROUND_TRIP,
  SET_ONE_WAY,
  SET_MULTI_CITY,
  SET_TRIP_BUILDER,
  SET_ORIGIN,
  SET_DESTINATION,
  INVERT_ORIGIN_DESTINATION,
  SET_DEPARTURE_DATE,
  SET_RETURN_DATE,
  SET_TRAVELERS,
  SET_CABIN,
  SET_ECONOMY,
  SET_PREMIUM_ECONOMY,
  SET_BUSINESS,
  SET_FIRST_CLASS,
  SET_MULTIPLE,
  SET_BAGS,
  ADD_CARRY_ON_BAG,
  ADD_CHECKED_BAG,
  REMOVE_CARRY_ON_BAG,
  REMOVE_CHECKED_BAG,
} from "constants/types";

const setRoundTrip = () => ({
  type: SET_ROUND_TRIP,
});

const setOneWay = () => ({
  type: SET_ONE_WAY,
});

const setMultiCity = () => ({
  type: SET_MULTI_CITY,
});

const setTripBuilder = () => ({
  type: SET_TRIP_BUILDER,
});

const setOrigin = (origin) => ({
  type: SET_ORIGIN,
  payload: origin,
});

const setDestination = (destination) => ({
  type: SET_DESTINATION,
  payload: destination,
});

const invertOriginDestination = () => ({
  type: INVERT_ORIGIN_DESTINATION,
});

const setDepartureDate = (departureDate) => ({
  type: SET_DEPARTURE_DATE,
  payload: departureDate,
});

const setReturnDate = (returnDate) => ({
  type: SET_RETURN_DATE,
  payload: returnDate,
});

const setTravelers = (travelers) => ({
  type: SET_TRAVELERS,
  payload: travelers,
});

const setCabin = (cabin) => ({
  type: SET_CABIN,
  payload: cabin,
});

const setEconomy = () => ({
  type: SET_ECONOMY,
});

const setPremiumEconomy = () => ({
  type: SET_PREMIUM_ECONOMY,
});

const setBusiness = () => ({
  type: SET_BUSINESS,
});

const setFirstClass = () => ({
  type: SET_FIRST_CLASS,
});

const setMultiple = () => ({
  type: SET_MULTIPLE,
});

const setBags = () => ({
  type: SET_BAGS,
});

const addCarryOnBag = () => ({
  type: ADD_CARRY_ON_BAG,
});

const addCheckedBag = () => ({
  type: ADD_CHECKED_BAG,
});

const removeCarryOnBag = () => ({
  type: REMOVE_CARRY_ON_BAG,
});

const removeCheckedBag = () => ({
  type: REMOVE_CHECKED_BAG,
});

export {
  setRoundTrip,
  setOneWay,
  setMultiCity,
  setTripBuilder,
  setOrigin,
  setDestination,
  invertOriginDestination,
  setDepartureDate,
  setReturnDate,
  setTravelers,
  setCabin,
  setEconomy,
  setPremiumEconomy,
  setBusiness,
  setFirstClass,
  setMultiple,
  setBags,
  addCarryOnBag,
  addCheckedBag,
  removeCarryOnBag,
  removeCheckedBag,
};
