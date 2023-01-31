import { REMOVE_YOUTH } from "constants/types";
import { SET_CABIN } from "constants/types";
import { ADD_YOUTH } from "constants/types";
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

const initialState = {
  roundTrip: true,
  oneWay: false,
  multiCity: false,
  tripBuilder: false,
  selectedTrip: "One-Way",
  origin: "",
  destination: "",
  departureDate: "",
  returnDate: "",
  adults: 1,
  travelers: 1,
  students: 0,
  seniors: 0,
  youths: 0,
  children: 0,
  toddlers: 0,
  infants: 0,
  economy: true,
  premiumEconomy: false,
  business: false,
  firstClass: false,
  multiple: false,
  selectedClass: "Economy",
  bags: 0,
  carryOnBags: 0,
  checkedBags: 0,
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROUND_TRIP:
      return {
        ...state,
        roundTrip: true,
        oneWay: false,
        multiCity: false,
        tripBuilder: false,
        selectedTrip: "Round-Trip",
      };
    case SET_ONE_WAY:
      return {
        ...state,
        roundTrip: false,
        oneWay: true,
        multiCity: false,
        tripBuilder: false,
        selectedTrip: "One-Way",
      };
    case SET_MULTI_CITY:
      return {
        ...state,
        roundTrip: false,
        oneWay: false,
        multiCity: true,
        tripBuilder: false,
        selectedTrip: "Multi-City",
      };
    case SET_TRIP_BUILDER:
      return {
        ...state,
        roundTrip: false,
        oneWay: false,
        multiCity: false,
        tripBuilder: true,
        selectedTrip: "Trip Builder",
      };
    case SET_ORIGIN:
      return {
        ...state,
        origin: action.payload,
      };
    case SET_DESTINATION:
      return {
        ...state,
        destination: action.payload,
      };
    case INVERT_ORIGIN_DESTINATION:
      return {
        ...state,
        origin: state.destination,
        destination: state.origin,
      };
    case SET_DEPARTURE_DATE:
      return {
        ...state,
        departureDate: action.payload,
      };
    case SET_RETURN_DATE:
      return {
        ...state,
        returnDate: action.payload,
      };
    case SET_TRAVELERS:
      return {
        ...state,
        travelers: action.payload.travelers,
      };
    case SET_CABIN:
      return {
        ...state,
        adults: action.payload.cabin[0],
        students: action.payload.cabin[1],
        seniors: action.payload.cabin[2],
        youths: action.payload.cabin[3],
        children: action.payload.cabin[4],
        toddlers: action.payload.cabin[5],
        infants: action.payload.cabin[6],
      };

    case SET_ECONOMY:
      return {
        ...state,
        economy: true,
        premiumEconomy: false,
        business: false,
        firstClass: false,
        selectedClass: "Economy",
      };
    case SET_PREMIUM_ECONOMY:
      return {
        ...state,
        economy: false,
        premiumEconomy: true,
        business: false,
        firstClass: false,
        selectedClass: "Premium Economy",
      };
    case SET_BUSINESS:
      return {
        ...state,
        economy: false,
        premiumEconomy: false,
        business: true,
        firstClass: false,
        selectedClass: "Business",
      };
    case SET_FIRST_CLASS:
      return {
        ...state,
        economy: false,
        premiumEconomy: false,
        business: false,
        firstClass: true,
        selectedClass: "First Class",
      };
    case SET_MULTIPLE:
      return {
        ...state,
        multiple: !state.multiple,
      };
    case SET_BAGS:
      return {
        ...state,
        bags: action.payload,
      };
    case ADD_CARRY_ON_BAG:
      return {
        ...state,
        carryOnBags: state.carryOnBags + 1,
      };
    case ADD_CHECKED_BAG:
      return {
        ...state,
        checkedBags: state.checkedBags + 1,
      };
    case REMOVE_CARRY_ON_BAG:
      return {
        ...state,
        carryOnBags: state.carryOnBags - 1,
      };
    case REMOVE_CHECKED_BAG:
      return {
        ...state,
        checkedBags: state.checkedBags - 1,
      };
    default:
      return state;
  }
};

export default flightReducer;
