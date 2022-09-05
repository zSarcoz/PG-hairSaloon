const initialSatate = {
  videogames: [],
  allVideogames: [],
  detail: [],
  genres: [],
  genresGet: [],
};

export default function rootReducer(state = initialSatate, action) {
  switch (action.type) {
    case "GET_VIDEOGAMES": //done
      return {
        ...state,
        allVideogames: action.payload,
        videogames: action.payload,
      };

    case "POST_GAMES": //done
      return {
        ...state,
      };

    case "GET_NAME_GAMES": //done
      return {
        ...state,
        videogames: action.payload,
      };

    case "GET_VIDEOGAME_ID": //done
      return {
        ...state,
        detail: action.payload,
      };

    case "SET_GENRES": //done
      return {
        ...state,
        genres: action.payload,
        genresGet: action.payload,
      };

    case "GET_GENRES": //done
      return {
        ...state,
        genresGet: action.payload,
      };

    case "GET_CLEAN": //done
        return {
        ...state,
        detail: action.payload
    };

    case "FILTER_GAMES_BY_GENRE": //done
      const allGames = state.allVideogames;

      const genreFilter =
        action.payload === 'todos'
          ? allGames
          : allGames.filter((game) => {
              return game.genres.includes(action.payload);
            });
      return {
        ...state,
        videogames: genreFilter,
      };

    case "FILTER_GAMES_CREATED": {//done
        const allVideogames = state.allVideogames;

        const createdFilter =
          action.payload === 'nosotros'
            ? allVideogames.filter((el) => el.createdInDb)
            : allVideogames.filter((el) => !el.createdInDb);
        return {
          ...state,
          videogames: action.payload === 'todos' ? allVideogames : createdFilter,
        };
      }
    case "ORDER_BY_NAME": //done
      const allGamesName =
        action.payload === "asc"
          ? state.videogames.sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
              return 0;
            })
          : state.videogames.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        allGamesName,
      };

    case "ORDER_BY_RATING":
      const allGamesRating = state.allVideogames
      const sortByRatings =
        action.payload === "fuer-asc"
          ? allGamesRating.sort((a, b) => {
              if (a.rating > b.rating) {
                return 1;
              }
              if (b.rating > a.rating) {
                return -1;
              }
              return 0;
            })
          : allGamesRating.sort((a, b) => {
              if (b.rating > a.rating) {
                return 1;
              }
              if (a.rating > b.rating) {
                return -1;
              }
              return 0;
            });
            return { ...state, videogames: sortByRatings };
    
    default:
      return state;
  }
}
