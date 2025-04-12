import React, { useState, useEffect, useRef } from "react";
import "../Styles/Contact.css";
import { RiScrollToBottomLine } from "react-icons/ri";
import Formulario from "../components/Formulario";
import {
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
  FaInstagram,
  FaWhatsapp,
  FaWhatsappSquare,
} from "react-icons/fa";

const Contact = () => {
  const [scrolling, setScrolling] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolling(scrollTop > 50); // Ajusta este valor para cambiar cuando comienza la animación

      // Controla la opacidad y posición basada en el scroll
      if (titleRef.current) {
        const scrollRatio = Math.min(scrollTop / 350, 1); // Ajusta 150 para cambiar la velocidad
        // titleRef.current.style.opacity = 1 - scrollRatio;
        titleRef.current.style.transform = `translate(-50%, calc(10% - ${
          scrollRatio * -250
        }px))`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="contact">
      <div className="contact-image">
        <h1
          className={`contact-title ${scrolling ? "hidden" : ""}`}
          ref={titleRef}
        >
          CONTACTO<br></br><RiScrollToBottomLine />
        </h1>
      </div>
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
              <p>+54 9 341 657-9576</p>
              <p>+54 9 341 552-1437</p>
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
              <p>rf.mecanizados@gmail.com</p>
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
              <a
                href="https://www.instagram.com/rfmecanizados?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/+5493415521437?text=Hola%2C%20te%20contacto%20desde%20la%20web%20de%20RF%20Metalurgica%0A%0A%20--"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Formulario />
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13383.018664233903!2d-60.68740708517613!3d-33.01024297882949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ac00cff6cb7f%3A0x6edb4a65f8989672!2sAv.%20Ovidio%20Lagos%206335%2C%20S2000%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1743126249689!5m2!1ses!2sar"
        width="auto"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Contact;
