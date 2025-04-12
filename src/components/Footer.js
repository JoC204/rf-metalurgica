import React from "react";
import "../Styles/Footer.css"; // Asegúrate de que la ruta sea correcta
import { SiWhatsapp } from "react-icons/si";
import { LuMail } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const HEADER_HEIGHT = 100; // Adjust this value to match your header's height

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/about">Nosotros</Link>
          <Link to="/gallery">Trabajos</Link>
          <Link to="/contact">Contacto</Link>
          <a
            href="https://wa.me/5493416579576"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiWhatsapp /> +54 9 341 657-9576
          </a>
          <a
            href="https://wa.me/5493415521437"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiWhatsapp /> +54 9 341 552-1437
          </a>
          <a href="mailto:rf.mecanizados@gmail.com">
            <LuMail /> rf.mecanizados@gmail.com
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
        onClick={() =>
          window.scrollTo({ top: 0 - HEADER_HEIGHT, behavior: "smooth" })
        }
      >
        <FaChevronUp />
      </button>
    </footer>
  );
};

export default Footer;
