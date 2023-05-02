import React, { useContext } from "react";
import { GlobalContext } from "../../Context/ContextComp";
import MovieCard from "./MovieCard";

const Watched = () => {
  const {
    state: { watchlist, watched },
    dispatch,
  } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Watched Movies</h1>
          <h1 className="count-pill">
            {watched.length} {watched.length === 1 ? "Movie" : "Movies"}
          </h1>
        </div>

        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <MovieCard movie={movie} type="watched" />
            ))}
          </div>
        ) : (
          <div className="no-movies">No movies in your list</div>
        )}
      </div>
    </div>
  );
};

export default Watched;
