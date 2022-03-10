import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <div className="nav">
          <NavLink className="nav_element" exact to="/">Home</NavLink>
          <NavLink className="nav_element" to="/search">SearchBar</NavLink>
          <NavLink className="nav_element" to="/liked">LikedList</NavLink>
        </div>
    );
}

export default NavBar;