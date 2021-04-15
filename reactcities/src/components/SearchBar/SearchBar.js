import React, { useState } from "react";
import CityDisplay from "../CityDisplay/CityDisplay";

import "./SearchBar.css";


function SearchBar () {

  const [cityName, setCityName] = useState();

  const handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <div>
      <h3 id="mainfont">Welcome, let's find your next dream city.</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          
          <input
            name="search"
            type="text"
            className="form-control"
            placeholder="search for a city"
            id="search"
            onChange={e => setCityName(e.target.value)}
           
          />
            <CityDisplay  name={cityName}
            />
          <br />
          {/* <button onClick={props.handleFormSubmit} className="btn btn-primary"> */}
          {/* <button className="btn btn-primary">
            Search
          </button> */}
        </div>
      </form>
    </div>
  );
}



export default SearchBar;
