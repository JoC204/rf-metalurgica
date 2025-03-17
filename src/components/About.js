import React from "react";
import "../Styles/About.css"; // Verifica que la ruta sea correcta

const Home = ({
  title = "Bienvenido a About",
  content = "Contenido About",
}) => {
  return (
    <section className="about">
      <h1>{title}</h1>
      <p>{content}</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </section>
  );
};

export default Home;