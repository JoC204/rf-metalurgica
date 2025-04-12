import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./NavBar"; // Ajusta la ruta si es necesario
import "../Styles/Header.css";
import Logo from "../img/rf-logo.png";
import {
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuTransition, setMenuTransition] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolling(scrollTop > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cierra el menú si se hace clic en un enlace
  const closeMenu = () => {
    setMenuOpen(false);

    // Esperar a que la animación del menú termine antes de restaurar el blur
    setTimeout(() => {
      setMenuTransition(true);
    }, 900); // Ajusta el tiempo según la duración de la animación CSS
  };

  return (
    <header
      className={`header ${scrolling ? "hidden" : ""} ${
        menuOpen ? "menu-active" : ""
      } ${menuTransition ? "transitioning" : ""}`}
    >
      <div className="header-content">
        <Link to="/" onClick={closeMenu} className="logo-link">
          <img className="logo" src={Logo} alt="Logo" />
        </Link>
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <Navbar menuOpen={menuOpen} closeMenu={closeMenu} />
        
        <div className="social-links">
  <a
    href="https://www.instagram.com/rfmetalurgica"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram />
  </a>

  <a
    className="wtsLogoLink"
    href="https://wa.me/+5493415555535?text=Hola%2C%20te%20contacto%20desde%20la%20web%20de%20RF%20Metalurgica%0A%0A%20--"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaWhatsapp />
  </a>

  <a
    href="https://www.linkedin.com/company/rfmetalurgica"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedinIn />
  </a>

  {/* <a
    href="https://www.youtube.com/@rfmetalurgica"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaYoutube />
  </a> */}
</div>

          
        
      </div>
    </header>
  );
};

export default Header;
