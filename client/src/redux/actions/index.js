import axios from "axios";

export function getUsers() {
  return function (dispatch) {
    axios(`http://localhost:3001/user`)
      .then((res) => {
        dispatch({
          type: "GET_USERS",
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log("Users not found");
      });
  };
}

export function currentUser(payload) {
  // console.log("action current user", payload)
  return {
    type: "CURRENT_USER",
    payload
  };
}
export function currentUserLocalStorage(payload) {
  console.log("action current user local storage", payload)
  return {
    type: "CURRENT_USER_LOCAL_STORAGE",
    payload
  };
}
export function currentBarber(payload) {
  // console.log("action current user", payload)
  return {
    type: "CURRENT_BARBER",
    payload
  };
}
export function currentBarberLocalStorage(payload) {
  console.log("action current barber local storage", payload)
  return {
    type: "CURRENT_BARBER_LOCAL_STORAGE",
    payload
  };
}

export function registerUser(payload) {
  console.log("register payload", payload)
  return async function (dispatch) {
    try {
      await axios.post("http://localhost:3001/user", payload ).then((response) => {
        console.log("response", response)
        dispatch({
          type: "REGISTER_USER",
          payload: response.data
        })
      })
    } catch (err) {
      console.log(err);
    }
  };
}

export const getBarbers = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/barber");
      console.log(response)
      return dispatch({
        type: "GET_BARBERS",
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export const getServices = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/services/allServices");
      console.log(response)
      return dispatch({
        type: "GET_SERVICES",
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function setServices(payload) {
  console.log(payload)
  return async function () {
    try {
      await axios.post("http://localhost:3001/services/allServices", { ...payload });
      console.log("services succesfully obtained")
      // alert("Succefully created");
    } catch (err) {
      console.log(err);
    }
  };
}

export function filterBySex(payload) {
  console.log("action redux", payload)
  return {
    type: "FILTER_BY_SEX",
    payload,
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

export function addToCart(payload) {
  return {
    type: "ADD_TO_CART",
    payload,
  };
}

export function deleteFromCart(payload) {
  return {
    type: "DELETE_FROM_CART",
    payload,
  };
}
