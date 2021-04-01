import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a
          href="#"
          data-target="mobile-demo"
          className="sidenav-trigger"
        >
          <i className="material-icons">menu</i>
        </a>

        <ul className="right hide-on-med-and-down">
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
