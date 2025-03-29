import React from "react";
import "../Styles/Footer.css"; // Asegúrate de que la ruta sea correcta
import { SiWhatsapp } from "react-icons/si";
import { LuMail } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { FaChevronUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <nav>
          <a href="/">Inicio</a>
          <a href="about">Sobre Nosotros</a>
          <a href="gallery">Trabajos</a>
          <a href="contact">Contacto</a>
          <a
            href="https://wa.me/549341156579576"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiWhatsapp /> 341-156 579576
          </a>
          <a href="mailto:riccifabricio@yahoo.com.ar">
            <LuMail /> riccifabricio@yahoo.com.ar
          </a>
          <a
            href="https://maps.app.goo.gl/myrkMCaKaXuz3JGf9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLocationOutline /> Av. Ovidio Lagos 6335 Rosario Santa Fe
          </a>
          <p>
            &copy; {new Date().getFullYear()} - Todos los derechos reservados
          </p>
        </nav>
      </div>
      <button
        className="boton-footer"
        onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
      >
        <FaChevronUp />
      </button>
    </footer>
  );
};

export default Footer;
