import React, { useContext } from "react";
import { GlobalContext } from "../../Context/ContextComp";
import MovieCard from "./MovieCard";

const Watchlist = () => {
  const {
    state: { watchlist },
    dispatch,
  } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>
          <h1 className="count-pill">
            {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
          </h1>
        </div>

        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
          <div className="no-movies">No movies in your list</div>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
