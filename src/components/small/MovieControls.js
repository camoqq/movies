import React, { useContext } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { GlobalContext } from "../../Context/ContextComp";
const MovieControls = ({ movie, type }) => {
  const {
    state: { watchlist },
    dispatch,
    addToWatched,
    returnToWatchlist,
  } = useContext(GlobalContext);

  return (
    //REMOVES NEED THE ID AFTER MOVIE
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() =>
              dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie })
            }
          >
            <AiFillEye /> watched
          </button>
          <button
            className="ctrl-btn"
            onClick={() =>
              dispatch({
                type: "REMOVE_MOVIE_FROM_WATCHLIST",
                payload: movie.id,
              })
            }
          >
            <FaTimes />
            remove
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() =>
              dispatch({
                type: "MOVE_FROM_WATCHED_TO_WATCHLIST",
                payload: movie,
              })
            }
          >
            <AiFillEyeInvisible />
            watchlist
          </button>
          <button
            className="ctrl-btn"
            onClick={() =>
              dispatch({
                type: "REMOVE_MOVIE_FROM_WATCHED",
                payload: movie.id,
              })
            }
          >
            <FaTimes />
            remove
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
