const initialSatate = {
  // videogames: [],
  // allVideogames: [],
  // detail: [],
  // genres: [],
  // genresGet: [],
  users: [],
  error: "",
};

export default function rootReducer(state = initialSatate, action) {
  switch (action.type) {
    case "GET_USERS": {
      return {
        ...state,
        users: action.payload
      }
    }
    case "ERROR_USER": {
      return {
        ...state,
        error: action.payload,
      };
    }
    case "REGISTER_USER": {
      return {
        ...state,
      }
    }
    default:
      return state;
  }
}
