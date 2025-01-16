import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/NavBar"; // Ajusta la ruta si es necesario
import "../Styles/Header.css";
import Logo from "../img/rf-logo.png";
import WhatsappLogo from "../img/wts.svg";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolling(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Cierra el menú si se hace clic en un enlace
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${scrolling ? "hidden" : ""}`}>
      <>
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
        <a
          className="wtsLogoLink"
          href="https://wa.me/+5493415555535?text=Hola%2C%20te%20contacto%20desde%20la%20web%20de%20RF%20Metalurgica%0A%0A%20--"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="wtsLogo" src={WhatsappLogo} alt="WhatsApp Logo" />
        </a>
      </>
    </header>
  );
};

export default Header;
