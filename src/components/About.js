import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/About.module.css";
import { RiScrollToBottomLine } from "react-icons/ri";
import imagen1 from "../img/rfMetalurgica.png";
import { FaRegLightbulb } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { FaAward } from "react-icons/fa";
import LogoEmpresas from "./LogoEmpresas";

const About = () => {
  const [scrolling, setScrolling] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolling(scrollTop > 50);

      if (titleRef.current) {
        const scrollRatio = Math.min(scrollTop / 350, 1);
        titleRef.current.style.transform = `translate(-50%, calc(10% - ${
          scrollRatio * -250
        }px))`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.banner}>
        <h1
          className={`contact-title ${scrolling ? "hidden" : ""}`}
          ref={titleRef}
        >
          CONOCENOS<br></br>
          <RiScrollToBottomLine />
        </h1>
      </div>
      <div className={styles.aboutLayout}>
        <section className={styles.content}>
          <p>
            Somos una empresa metalúrgica de la zona sur de la ciudad de
            Rosario, con más de 20 años de experiencia en el rubro.
          </p>
          <br></br>
          <p>
            Tenemos experiencia tanto en tareas de mantenimiento, como
            fabricación de piezas unitarias, especiales y seriadas, conjuntos
            armados, pequeños dispositivos, estructuras, matricería e ingeniería
            inversa de productos.
          </p>
          <img
            className={styles.aboutImg}
            src={imagen1}
            alt="Imagen 1"
            loading="lazy"
          />
        </section>

        <section className={styles.cards}>
          <div className={styles.card}>
            <h2>Misión</h2>
            <p>
              Brindar productos y servicios que satisfagan las necesidades de
              nuestros clientes, comprometidos con la excelencia, la ética
              profesional y el desarrollo sostenible.
            </p>
          </div>

          <div className={styles.card}>
            <h2>Visión</h2>
            <p>
              Ser reconocidos como líderes en el mercado por nuestra innovación
              constante, calidad y rapidez de respuesta en nuestras soluciones.
            </p>
          </div>

          <div className={styles.card}>
            <h2>Valores</h2>
            <ul>
              <li>
                <FaRegLightbulb className="icon-valores" />{" "}
                <strong>Innovación:</strong> Apostamos al desarrollo continuo de
                nuevas ideas y tecnologías.
              </li>
              <li>
                <FaHandshake className="icon-valores" />{" "}
                <strong>Compromiso:</strong> Nos involucramos al 100% en cada
                proyecto, garantizando confianza y resultados.
              </li>
              <li>
                <FaAward className="icon-valores" /> <strong>Calidad:</strong>{" "}
                Mantenemos altos estándares en todos nuestros productos y
                servicios.
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div className={styles.buttonContainer}>
        <h2>Conocé nuestros trabajos</h2>
        <button className={styles.buttonGaleria}>
          <Link to="/gallery">
            <span>Galería</span>
          </Link>
        </button>
      </div>
        <div>
        {/* <h3 className="sobreNos-logos">Empresas que confían en nosotros</h3> */}
          <LogoEmpresas />
        </div>
    </div>
  );
};

export default About;
