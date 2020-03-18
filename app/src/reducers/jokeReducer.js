import { FETCH_DATA, UPDATE_JOKES, SET_ERROR } from "../actions/actions";

const initialState = {
  jokes: [],
  isFetchingData: false,
  error: ""
};

export const jokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true,
        jokes: []
      };
    case UPDATE_JOKES:
      return {
        ...state,
        jokes: action.payload,
        isFetchingData: false
      };
    case SET_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload
      };
    default:
      return state;
  }
};
