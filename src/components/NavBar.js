import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  return (
    <nav>
      <NavLink className="navlink" end to="/">
        User
      </NavLink>
      <NavLink className="navlink" to="/swiper">Swiper</NavLink>
      <NavLink className="navlink" to="/matches">Matches</NavLink>
    </nav>
  );
}

export default NavBar;