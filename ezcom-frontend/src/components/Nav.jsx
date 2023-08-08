import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="red">
      <Link to="/">Home</Link>
      <Link to="/landing">Landing</Link>
      <Link to="/about">About</Link>
      <Link to="/testRedux">Test-Redux</Link>
    </nav>
  );
}

export default Nav;
