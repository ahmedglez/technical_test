import { SET_ERROR, CLEAR_ERROR, SET_LOADING, CLEAR_LOADING, SET_STATE } from "constants/types";

const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

const clearError = () => ({
  type: CLEAR_ERROR,
});

const setLoading = () => ({
  type: SET_LOADING,
});

const clearLoading = () => ({
  type: CLEAR_LOADING,
});

const setState = (state) => ({
  type: SET_STATE,
  payload: state,
});

export { setError, clearError, setLoading, clearLoading, setState };
