import React, { useState, useEffect } from "react";
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
      setScrolling(scrollTop > 90);
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
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <button
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
      <Navbar menuOpen={menuOpen} closeMenu={closeMenu} />
      <div className="wtsLogo">
        <img src={WhatsappLogo} alt="Whatsapp Logo" />
      </div>
    </header>
  );
};

export default Header;
