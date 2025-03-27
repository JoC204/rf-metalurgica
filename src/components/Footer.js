import React from "react";
import "../Styles/Footer.css"; // Asegúrate de que la ruta sea correcta
import { SiWhatsapp } from "react-icons/si";
import { FiPhone } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { FaChevronUp } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <nav>
        
          <a href="/">Inicio</a>
          <a href="/">Sobre Nosotros</a>
          <a href="/">Trabajos</a>
          <a href="/">Contacto</a>
          <a href="tel:+549341-156 579576">
            <FiPhone /> 341-156 579576
          </a>
          <a
            href="https://wa.me/341-156 579576"
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
          <div className="map-container">
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d430.4744706511433!2d-60.677084381823924!3d-33.01015814915657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ac00cff6cb7f%3A0x6edb4a65f8989672!2sAv.%20Ovidio%20Lagos%206335%2C%20S2000%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1742157017517!5m2!1ses!2sar"
              width="400"
              height="300"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            /> */}
          </div>
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
