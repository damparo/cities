import React from "react";
import "./Navbar.css"

function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="right hide-on-med-and-down black-text">
          <li>
            <a href="">Search</a>
          </li>
          <li>
            <a href="">Your Cities</a>
          </li>
          <li>
            <a href="">Exit</a>
          </li>
        </ul>
      </div>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="">Search</a>
        </li>
        <li>
          <a href="">Your Cities</a>
        </li>
        <li>
          <a href="">Exit</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
