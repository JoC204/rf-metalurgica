// Navbar.js
import React from "react";
import "../Styles/NavBar.css";

const Navbar = ({ menuOpen, closeMenu }) => {
  return (
    <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
      <li className="nav-link home">
        <a href="#home" onClick={closeMenu}>Home</a>
      </li>
      <li className="nav-link about">
        <a href="#about" onClick={closeMenu}>About</a>
      </li>
      <li className="nav-link contact">
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </li>
    </ul>
  );
};

export default Navbar;
