import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  return (
    <nav>
      <NavLink className="navlink" end to="/">User</NavLink>
      <NavLink className="navlink" to="/swiper">Swipper</NavLink>
      <NavLink className="navlink" to="/matches">Matches</NavLink>
      <NavLink className="navlink" to="/newUser">New User</NavLink>
    </nav>
  );
}

export default NavBar;