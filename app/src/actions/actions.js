import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_JOKES = "UPDATE_JOKES";
export const SET_ERROR = "SET_ERROR";
export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA });
  axios
    .get("https://official-joke-api.appspot.com/random_ten")
    .then(res => {
      console.log(res);
      dispatch({ type: UPDATE_JOKES, payload: res.data });
    })
    .catch(err => {
      console.error("error fetching data from api, err: ", err);
      dispatch({ type: SET_ERROR, payload: "Error fetching data from api" });
    });
};
