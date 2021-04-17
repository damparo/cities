import React from "react";
import "./CityDisplay.css";


function CityDisplay (props) {

    return (
        <div> 
            <h1>{props.name}</h1>
           
        </div>
    );
}

export default CityDisplay;