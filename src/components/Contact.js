import React from "react";
import "../Styles/Contact.css";
import Formulario from "../components/Formulario";
import {
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsappSquare,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-image"></div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-info-item">
            <div className="contact-info-item-icon">
              <p>
                <FaWhatsappSquare className="icon" />
              </p>
            </div>
            <div className="contact-info-text">
              <h3>Teléfonos</h3>
              <p>+341-156 579576</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-item-icon">
              <p>
                <FaEnvelope className="icon" />
              </p>
            </div>
            <div className="contact-info-text">
              <h3>Correo electrónico</h3>
              <p>riccifabricio@yahoo.com.ar</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-item-icon">
              <p>
                <FaClock className="icon" />
              </p>
            </div>
            <div className="contact-info-text">
              <h3>Horarios de atención</h3>
              <p>Lunes a Viernes, 8:00 - 17:00</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-item-icon">
              <p>
                <FaMapMarkerAlt className="icon" />
              </p>
            </div>
            <div className="contact-info-text">
              <h3>Ubicación</h3>
              <p>Av. Ovidio Lagos 6335, S2000 Rosario, Santa Fe</p>
            </div>
          </div>

          <div className="redes">
          <h3>Nuestras redes</h3>
          <div className="social-icons">
            <FaInstagram />
            <FaWhatsapp />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
          </div>
        </div>
      </div>
      <Formulario />
    </div>
  );
};

export default Contact;
