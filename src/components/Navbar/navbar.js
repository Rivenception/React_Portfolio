import React from "react";
import NavList from './nav-list';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/index.html">
      <strong>RICHARD MINGIONE</strong>
      </a>
      <NavList/>
    </nav>
  );
}

export default Navbar;