import React from "react";
import "../Styles/Home.css";

const Home = ({
  title = "Bienvenido a RF Metalúrgica",
  content = "Contenido principal",
}) => {
  return (
    <section className="home">
      <h1>{title}</h1>
      <p>{content}</p>
    </section>
  );
};

export default Home;
