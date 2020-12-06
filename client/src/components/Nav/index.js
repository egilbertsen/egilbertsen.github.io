import React from "react";

function Nav() {
  return (
    <nav class="navbar navbar-expand-md navbar-dark">
      {/* <!-- method from https://www.w3schools.com/bootstrap4/bootstrap_navbar.asp -->
      <!-- Brand --> */}
      <a class="navbar-brand logo" href="/#/index">E.A.G.</a>

      {/* <!-- Toggler/collapsibe Button --> */}
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>

      {/* <!-- Navbar links --> */}
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/#/work">WORK</a>
          </li>
          <li class="nav-item">
            <a class="nav-link current" href="/#/about">ABOUT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
