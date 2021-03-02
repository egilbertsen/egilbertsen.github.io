import React from "react";
import { NavLink } from "react-router-dom";
import './style.css';


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <NavLink className="navbar-brand" to="/">
       About
      </NavLink>
      <NavLink className="navbar-brand" to="/work">
        Work
      </NavLink>

    </nav>
  );
}

export default Nav;
