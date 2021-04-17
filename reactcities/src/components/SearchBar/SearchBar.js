import React, { useState } from "react";
import CityDisplay from "../CityDisplay/CityDisplay";

import "./SearchBar.css";

function SearchBar() {
  const [cityName, setCityName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [showCity, setShowCity] = useState(false);
  const returnCity = () => setShowCity(true);
  const hidecity = () => setShowCity(false);

  return (
    <div>
      <h3 id="mainfont">Welcome, let's find your next dream city.</h3>

      <form onSubmit={handleSubmit} id="searchform">
        <div className="form-group">
          <input
            name="search"
            type="text"
            className="form-control"
            placeholder="search for a city"
            id="search"
            onChange={(e) => setCityName(e.target.value)}
            onClick={hidecity}
          />
          <i onClick={returnCity} for="search" className="small material-icons">
            search
          </i>
        </div>
      </form>

      {showCity ? <CityDisplay name={cityName} id="cityblock" /> : null}
    </div>
  );
}

export default SearchBar;
