import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">SEARCH FOR A MOVIE</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/watchlist">Watch List</Link>
            </li>
            <li>
              <Link to="/watched">Watched</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
