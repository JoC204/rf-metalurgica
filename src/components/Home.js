import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Zoom } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/zoom";

// Importa el archivo CSS propio
import "../Styles/Home.css";

// Importa las imágenes
import imagen1 from "../img/carrusel-uno.webp";
import imagen2 from "../img/carrusel-dos.webp";
import imagen3 from "../img/carrusel-tres.webp";
import imagen4 from "../img/rfMetalurgica.png";
import imagen5 from "../img/rf-nosotros.webp";
import imagen6 from "../img/piezasUno.webp";

const Home = () => {
  return (
    <div className="home">
      <Swiper
        spaceBetween={10}
        modules={[Autoplay, Pagination, Zoom]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 12000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true, // Hace que los puntos cambien de tamaño según la imagen actual
        }}
        className="mySwiper"
        zoom={false}
      >
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img className="imagen-mobile-right" src={imagen3} alt="Imagen 3" loading="lazy" />
            <div className="text-box">
              <div className="logo-dos">
                <img src={imagen4} alt="Logo completo" loading="lazy" />
              </div>
              <h2>Innovación y Precisión en Mecanizados Industriales</h2>
              <p>
                "Nos especializamos en la fabricación de piezas mecanizadas de alta calidad."
              </p>
              <a href="#seccion-conocenos">
                <button>Conócenos</button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={imagen2} alt="Imagen 2" loading="lazy" />
            <div className="text-box">
              <h2>Nuestra Experiencia en Cada Detalle</h2>
              <p>
                "Explora los proyectos que hemos realizado y descubre la calidad y precisión de nuestro trabajo. Desde piezas simples hasta mecanizados complejos."
              </p>
              <a href="#seccion-trabajos">
                <button className="button-link">Nuestros Trabajos</button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img className="imagen-mobile-left" src={imagen1} alt="Imagen 1" loading="lazy" />
            <div className="text-box">
              <h2>Estamos Aquí <br></br>para Ayudarte</h2>
              <p>
                "Si tienes una idea o un requerimiento específico, nuestro equipo está listo para asesorarte."
              </p>
              <Link to="/contact" className="button-link">
                Contactanos
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Sección 2 */}
      <div className="seccion-dos">
        <div id="seccion-conocenos">
          <img className="rf-ia" src={imagen5} alt="Imagen 5" loading="lazy" />
          <div className="rf-ia-text">
            <h3 className="sobreNos-h3">Sobre Nosotros</h3>
            <h2 className="sobreNos">En RF Metalurgica</h2>
            <p className="parrafo-home">
              "Contamos con máquinas de arranque de viruta, tanto convencionales como CNC, así como herramientas de medición y software CAD-CAM para el relevamiento, la ingeniería y el mecanizado de productos complejos."
            </p>
            <Link to="/about" className="button-link">
              Conoce más
            </Link>
          </div>
        </div>
        <div id="seccion-trabajos">
          <img className="trabajos" src={imagen6} alt="Imagen 6" loading="lazy" />
          <div className="trabajos-text">
            <h3 className="sobreNos">Nuestros Trabajos</h3>
            <h1 className="sobreNos">Calidad y Precisión en Acción</h1>
            <p className="parrafo-home">
              "Cada proyecto es un desafío que superamos con precisión y calidad. Explora nuestra galería y conoce los trabajos que nos han convertido en referentes del mecanizado."
            </p>
            <Link to="/gallery" className="button-link">
              Galeria
            </Link>
          </div>
        </div>
      </div>
      <div id="seccion-footer"></div>
    </div>
  );
};

export default Home;
