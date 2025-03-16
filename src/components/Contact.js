import React from "react";
import "../Styles/Contact.css"; // Verifica que la ruta sea correcta

const Home = ({
  title = "Bienvenido a Contact",
  content = "Contenido de Contacto",
}) => {
  return (
    <section className="contact">
      <h1>{title}</h1>
      <p>{content}</p>
    </section>
  );
};

export default Home;