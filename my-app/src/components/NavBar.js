import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/search">SearchBar</NavLink>
          <NavLink to="/liked">LikedList</NavLink>
        </>
    );
}

export default NavBar;