import axios from "axios";

//Create and export actions called like I want them to be

// export const getUsers = () => {
//   return async function (dispatch) {
//     try {
//       const response = await axios.get("http://localhost:3001/user");
//       return dispatch({
//         type: "GET_USERS",
//         payload: response.data,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };
// }
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
      alert("Succefully created");
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
