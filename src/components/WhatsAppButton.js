import React, { useState, useEffect } from "react";
import WhatsappLogo from "../img/wts.svg";
import "../Styles/WhatsAppButton.css";

const WhatsAppButton = () => {
  const [scrolling, setScrolling] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolling(scrollTop < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      className={`WhatsAppButton ${scrolling ? "hidden" : "visible"}`}
      href="https://wa.me/+5493415521437?text=Hola%2C%20te%20contacto%20desde%20la%20web%20de%20RF%20Metalurgica%0A%0A%20--"
      target="_blank"
      rel="noopener noreferrer"
      style={styles.container}
    >
      <img
        className="wtsLogo"
        src={WhatsappLogo}
        alt="WhatsApp Logo"
        style={styles.icon}
      />
    </a>
  );
};

const styles = {
  container: {
    position: "fixed",
    bottom: "20px",
    right: "30px",
    zIndex: 1000,
    backgroundColor: "#25d344",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "transform 0.6s ease, opacity 0.3s ease",
  },
  icon: {
    width: "50px",
    height: "50px",
  },
};

export default WhatsAppButton;
