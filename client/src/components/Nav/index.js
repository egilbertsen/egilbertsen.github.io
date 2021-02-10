import React from "react";
import './style.css';


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="/">
       About
      </a>
      <a className="navbar-brand" href="/work">
        Work
      </a>
      <a className="navbar-brand" href="/contact">
        Contact
      </a>
    </nav>
  );
}

export default Nav;
