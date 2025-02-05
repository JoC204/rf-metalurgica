import React from "react";
import { Link } from "react-router-dom";
import "../Styles/NavBar.css";

const Navbar = ({ menuOpen, closeMenu }) => {
  const handleLinkClick = (event) => {
    const link = event.target;
    const parentLi = link.parentElement;

    parentLi.classList.add("active");

    setTimeout(() => {
      parentLi.classList.remove("active");
      closeMenu();
    }, 300);
  };

  return (
    <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
      <li className="nav-link home">
        <Link to="/" onClick={handleLinkClick}>
          Home
        </Link>
      </li>
      <li className="nav-link about">
        <Link to="/about" onClick={handleLinkClick}>
          About
        </Link>
      </li>
      <li className="nav-link contact">
        <Link to="/contact" onClick={handleLinkClick}>
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
