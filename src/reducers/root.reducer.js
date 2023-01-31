import { SET_ERROR, CLEAR_ERROR, SET_LOADING, CLEAR_LOADING, SET_STATE } from "constants/types";
import { combineReducers } from "redux";
import flightReducer from "reducers/flight.reducer";

const initialState = {
  error: null,
  loading: false,
  state: null,
};

const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_LOADING:
      return {
        ...state,
        loading: false,
      };
    case SET_STATE:
      return {
        ...state,
        state: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  state: stateReducer,
  flights: flightReducer,
});

export default rootReducer;
