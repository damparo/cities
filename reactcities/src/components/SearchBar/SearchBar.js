import React from "react";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div>
      <h3 id="mainfont">Welcome, let's find your next dream city.</h3>

      <form>
        <div className="form-group">
          
          <input
            // // onChange={props.handleInputChange}
            // value={props.value}
            name="search"
            type="text"
            className="form-control"
            placeholder="search for a city"
            id="search"
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
