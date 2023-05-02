import React, { useContext } from "react";
import { GlobalContext } from "../Context/ContextComp";

const SearchCard = ({ movie }) => {
  const {
    state: { watchlist, watched },
    dispatch,
  } = useContext(GlobalContext);

  let findItemWatchlist = watchlist.find((o) => o.id === movie.id);
  let findItemWatched = watched.find((o) => o.id === movie.id);

  const watchlistDisabled = findItemWatchlist
    ? true
    : findItemWatched
    ? true
    : false;
  let watchedDisabled = findItemWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date
              ? movie.release_date.substring(0, 4)
              : "no release date"}
          </h4>
        </div>
        <div className="controls">
          <button
            className="btn"
            disabled={watchlistDisabled}
            onClick={() =>
              dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie })
            }
          >
            Add to Watchlist
          </button>
          <button
            className="btn"
            disabled={watchedDisabled}
            onClick={() =>
              dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie })
            }
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
