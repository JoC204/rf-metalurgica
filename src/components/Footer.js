import React from "react";
import "../Styles/Footer.css"; // Asegúrate de que la ruta sea correcta

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} - Todos los derechos reservados</p>
        <nav>
          <a href="/">Términos</a>
          <a href="/">Privacidad</a>
          <a href="/">Contacto</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
