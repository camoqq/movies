import React, { useEffect, useReducer } from "react";
import { createContext } from "react";
import { ReducerFunc } from "./Reducer";

export const GlobalContext = createContext();

const ContextComp = ({ children }) => {
  const initial = {
    watchlist: localStorage.getItem("watchlist")
      ? JSON.parse(localStorage.getItem("watchlist"))
      : [],
    watched: localStorage.getItem("watched")
      ? JSON.parse(localStorage.getItem("watched"))
      : [],
  };
  const [state, dispatch] = useReducer(ReducerFunc, initial);
  // const removeMovieWatchlist = (id) => {
  //   dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  // };

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  const returnToWatchlist = (id) => {
    dispatch({ type: "MOVE_FROM_WATCHED_TO_WATCHLIST", payload: id });
  };
  const addToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };
  return (
    <GlobalContext.Provider
      value={{ state, dispatch, addToWatched, returnToWatchlist }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextComp;
