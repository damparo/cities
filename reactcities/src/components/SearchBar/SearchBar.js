import React, { useState,useEffect } from "react";
import CityDisplay from "../CityDisplay/CityDisplay";
import Welcome from "../Welcome/Welcome";
import axios from "axios";

import "./SearchBar.css";

function SearchBar() {
  const [cityName, setCityName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [showCity, setShowCity] = useState(false);
  const returnCity = () => setShowCity(true);
  const hidecity = () => setShowCity(false);

  // Set up grabbing name from  search bar to make call

  const [cityPic, setCityPic] = useState(cityName);

  const handleClick = () =>
  {

    // console.log("hello");
    setCityPic(cityName)

  };

  useEffect ( () => {

      axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${cityPic}&key=${process.env.REACT_APP_PLACES_API_KEY}&inputtype=textquery&fields=name,photos`).then( res => {
        console.log(res)
      })
      .catch( err => {
        console.log(err)
      })


  }, [cityPic])

  return (
    <div>
      <Welcome />
  
    
      <form onSubmit={handleSubmit} id="searchform"
      >
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
          <i onClick={handleClick} for="search" className="small material-icons">
            search
          </i>
        </div>
      </form>
    

      {showCity ? <CityDisplay name={cityName} id="cityblock" 
      
    
      
      /> : null}
    </div>
  );
}

export default SearchBar;
