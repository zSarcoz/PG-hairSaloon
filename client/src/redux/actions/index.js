import axios from "axios";

//Create and export actions called like I want them to be

export function getVideogames() {
  return async function (dispatch) {
    try{
      const response = await axios.get("/videogames");
    return dispatch({
      type: "GET_VIDEOGAMES",
      payload: response.data,
    });
    }catch(err){
      console.log(err);
    }
    
  };
}
export function postVideogames(payload) {
  return async function () {
    try {
      await axios.post("/videogames",{...payload});
      alert('Succefully created');
    } catch (err) {
      console.log(err);
    }
  };
}
export function setGenres() {
  return async function (dispatch) {
    const response = await axios.post("/genres");
    return dispatch({
      type: "SET_GENRES",
      payload: response.data,
    });
  };
}
export function getGenres() {
  return async function (dispatch) {
    const response = await axios.get("/genres");
    console.log(response)
    return dispatch({
      type: "GET_GENRES",
      payload: response.data,
    });
  };
}

export function getNameGames(name) {
  return (dispatch) => {
    axios
      .get(`/videogames?name=` + name)
      .then((videogames) =>
        dispatch({
          type: "GET_NAME_GAMES",
          payload: videogames.data,
        })
      )
      .catch((err) => alert(`Videogames doesn't exist "${name}"`));
  };
}

export function getGameById(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/videogame/${id}`);
      return dispatch({
        type: "GET_VIDEOGAME_ID",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterGamesByGenre(payload) {
  return {
    type: "FILTER_GAMES_BY_GENRE",
    payload,
  };
}

export function filterGamesCreated(payload) {
  return {
    type: "FILTER_GAMES_CREATED",
    payload,
  };
}

export function orderByName(payload) {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}

export function orderByRating(payload) {
  return {
    type: "ORDER_BY_RATING",
    payload,
  };
}

export function getClean() {
  return {
    type: "GET_CLEAN",
    payload: [],
  };
}
