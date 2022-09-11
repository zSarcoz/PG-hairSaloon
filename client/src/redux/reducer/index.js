const initialSatate = {
  // videogames: [],
  // allVideogames: [],
  // detail: [],
  // genres: [],
  // genresGet: [],
  users: [],
  currentUser: [],
  barbers: [],
  error: "",
};

import Swal from 'sweetalert2'

export default function rootReducer(state = initialSatate, action) {
  switch (action.type) {
    case "GET_USERS": {
      return {
        ...state,
        users: action.payload,
      };
    }
    case "CURRENT_USER":
      console.log(state.users);
      let arr = state.users.filter((user) => user.cedula === Number(action.payload));
      if(!arr.length){
        Swal.fire({
          icon: "error",
          title: "Oops... Algo salio mal!",
          text: "No se consiguio el usuario, por favor registrate",
          showConfirmButton: false,
          confirmButtonColor: '#10408F',
        })
        // alert("No se consiguio el usuario, por favor registrate")
        // window.location.reload()
        setTimeout(() => {window.location.reload()}, 2000);
      }
      console.log("current user action payload", action.payload);
      console.log("current user arr", arr);
      return {
        ...state,
        currentUser: arr,
      };
    case "REGISTER_USER": {
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    }
    case "ERROR_USER": {
      return {
        ...state,
        error: action.payload,
      };
    }

    case "GET_BARBERS": {
      return {
        ...state,
        barbers: action.payload,
      };
    }
    case "REGISTER_BARBER": {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
