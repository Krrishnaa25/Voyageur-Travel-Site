import React from "react";
import "./Navbar.css";
import logo from "./images/Heading.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="items">
          <li className="navbar-item-open">
            <NavLink className="none" exact to="/locations">
              Locations
            </NavLink>
          </li>
          <li className="navbar-item-open">
            <NavLink className="none" exact to="/gallery">
              Gallery
            </NavLink>
          </li>
          <NavLink exact to="/">
            <img src={logo} className="logo" alt="logo" />
          </NavLink>
          <li className="navbar-item-open">
            <NavLink className="none" exact to="/aboutus">
              About Us
            </NavLink>
          </li>
          <li className="navbar-item-open">
            <NavLink className="none" exact to="/joinus">
              Join us
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
