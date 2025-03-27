import React from "react";
import { Link } from "react-router-dom";
import "../Styles/NavBar.css";

const Navbar = ({ menuOpen, closeMenu }) => {
  const handleLinkClick = (event) => {
    const link = event.target;
    const parentLi = link.parentElement;

    if (parentLi) {
      parentLi.classList.add("active");

      setTimeout(() => {
        parentLi.classList.remove("active");
        closeMenu();
      }, 300);
    }
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
          Nosotros
        </Link>
      </li>
      <li className="nav-link contacto">
        <Link to="/contact" onClick={handleLinkClick}>
          Contacto
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
