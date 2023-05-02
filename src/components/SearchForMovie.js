import React from "react";
import { useState } from "react";
import SearchCard from "./SearchCard";

const SearchForMovie = () => {
  const [search, setSearch] = useState("");
  const [dataOutput, setDataOutput] = useState([]);

  const onChangeFunction = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    const API_KEY = "202955fccf564fa8b88e7a82dc79ea2b"; //use query to set the e.target.value and result will
    //show right away.wont need to press the 'enter' button

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setDataOutput(data.results);
        } else {
          setDataOutput([]);
        }
      });
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              value={search}
              placeholder="type here..."
              onChange={onChangeFunction}
            />
          </div>
          {dataOutput.length > 0 && (
            <ul className="results">
              {dataOutput.map((movie) => (
                <li key={movie.id}>
                  <SearchCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchForMovie;
