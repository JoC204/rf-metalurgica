import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/About.module.css";
import bannerImg from "../img/BannerNosotros.jpg";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.banner}>
        <img src={bannerImg} alt="Banner Sobre Nosotros" />
      </div>

      <section className={styles.content}>
        <h1>Conocé nuestros Empresa</h1>
        <p>
          Somos una empresa dedicada a ofrecer soluciones personalizadas de alta calidad. Nuestro enfoque está centrado en la innovación, el compromiso con nuestros clientes y la sostenibilidad. Trabajamos día a día para superar las expectativas, ofreciendo un servicio confiable y con altos estándares de calidad.
        </p>
      </section>

      <section className={styles.cards}>
        <div className={styles.card}>
          <h2>Misión</h2>
          <p>
            Brindar productos y servicios que satisfagan las necesidades de nuestros clientes, comprometidos con la excelencia, la ética profesional y el desarrollo sostenible.
          </p>
        </div>

        <div className={styles.card}>
          <h2>Visión</h2>
          <p>
            Ser reconocidos como líderes en el mercado por nuestra innovación constante, responsabilidad social y la calidad de nuestras soluciones.
          </p>
        </div>

        <div className={styles.card}>
          <h2>Valores</h2>
          <ul>
            <li>
              <strong>Sostenibilidad:</strong> Trabajamos respetando el medio ambiente y fomentando prácticas responsables.
            </li>
            <li>
              <strong>Innovación:</strong> Apostamos al desarrollo continuo de nuevas ideas y tecnologías.
            </li>
            <li>
              <strong>Compromiso:</strong> Nos involucramos al 100% en cada proyecto, garantizando confianza y resultados.
            </li>
            <li>
              <strong>Calidad:</strong> Mantenemos altos estándares en todos nuestros productos y servicios.
            </li>
          </ul>
        </div>
      </section>
      <div className={styles.buttonContainer}>
        <h2>Conocé nuestros trabajos</h2>
        <button className={styles.buttonGaleria}>
              <Link to="/gallery">
                <span>Galeria</span>
              </Link>
            </button>
      </div>
    </div>
  );
};

export default About;
