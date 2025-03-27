import React from "react";
import "../Styles/Contact.css";
import {
  FaPhone,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-image"></div>

      <div className="contact-content">
        <h2>Teléfonos</h2>
        <div className="contact-info">
          <p><FaPhone className="icon" /> +341-156 579576</p>
          <p><FaPhone className="icon" /> +341-156 579576</p>

          <h3>Correo electrónico</h3>
          <p><FaEnvelope className="icon" />riccifabricio@yahoo.com.ar</p>

          <h3>Horarios de atención</h3>
          <p><FaClock className="icon" /> Lunes a Viernes, 8:00 - 17:00</p>

          <h3>Ubicación</h3>
          <p><FaMapMarkerAlt className="icon" /> Av. Ovidio Lagos 6335, S2000 Rosario, Santa Fe</p>

          <h3>Nuestras redes</h3>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaWhatsapp />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
