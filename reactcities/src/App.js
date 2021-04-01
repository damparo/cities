import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./components/SearchBar/SearchBar";
import Navbar from "./components/Navbar/Navbar";


class App extends React.Component{


  componentDidMount(){

    let sidenav = document.querySelector("#mobile-demo");
    M.Sidenav.init(sidenav, {});
  }

  render(){

    return  (
  
      <div>
        
        <Navbar />
  
        {/* <SearchBar /> */}
  
      </div>
    )
      

  }
  
}

export default App;
