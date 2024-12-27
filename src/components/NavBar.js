import React from "react";
import "../Styles/NavBar.css";

const Navbar = ({ menuOpen, closeMenu }) => {
  const handleLinkClick = (event) => {
    const link = event.target;
    const parentLi = link.parentElement; // Obtiene el elemento <li>

    parentLi.classList.add("active"); // Activa la animación en el <li>

    setTimeout(() => {
      parentLi.classList.remove("active"); // Limpia la animación
      closeMenu(); // Cierra el menú
    }, 300); // Coincide con la duración de la animación en el CSS
  };

  return (
    <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
      <li className="nav-link home">
        <a href="#home" className="link-slide" onClick={handleLinkClick}>
          Home
        </a>
      </li>
      <li className="nav-link about">
        <a href="#about" className="link-slide" onClick={handleLinkClick}>
          About
        </a>
      </li>
      <li className="nav-link contact">
        <a href="#contact" className="link-slide" onClick={handleLinkClick}>
          Contact
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
