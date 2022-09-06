import axios from "axios";

//Create and export actions called like I want them to be

export const getUsers = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("/user");
      return dispatch({
        type: "GET_USERS",
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function registerUser(payload) {
  console.log(payload)
  return async function () {
    try {
      await axios.post("http://localhost:3001/user", { ...payload });
      alert("Succefully created");
    } catch (err) {
      console.log(err);
    }
  };
}

export const getBarbers = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("/barber");
      return dispatch({
        type: "GET_BARBERS",
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function registerBarber(payload) {
  console.log(payload)
  return async function () {
    try {
      await axios.post("http://localhost:3001/barber", { ...payload });
      console.log("barber succesfully created")
      // alert("Succefully created");
    } catch (err) {
      console.log(err);
    }
  };
}
