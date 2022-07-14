import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  return (
    <nav className="nav-bar">
      

        <h1 className="logo">Logo</h1>
        <div className="nav-link">
        <NavLink className="link" end to="/">User</NavLink>
        <NavLink className="link" to="/swiper">Swiper</NavLink>
        <NavLink className="link" to="/matches">Matches</NavLink>
        <NavLink className="link" to="/newUser">New User</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;