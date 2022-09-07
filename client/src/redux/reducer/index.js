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
