import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Zoom } from "swiper/modules";

// Importa los estilos de Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/zoom";

// Importa el archivo CSS propio
import "../Styles/Home.css";

// Importa las imágenes
import imagen1 from "../img/carrusel-uno.jpeg";
import imagen2 from "../img/carrusel-dos.jpeg";
import imagen3 from "../img/carrusel-tres.jpeg";
import imagen4 from "../img/rfMetalurgica.png";
import imagen5 from "../img/rf-mesa-ia.jpg";
import imagen6 from "../img/piezasUno.jpg";

const Home = () => {
  return (
    <div className="home">
      <Swiper
        spaceBetween={10}
        modules={[Autoplay, Pagination, Zoom]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 8000, // Cambio automático cada 8 segundos
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="mySwiper"
        zoom={true}
      >
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={imagen3} alt="Imagen 3" />
            <div className="text-box">
              <img className="logo-dos" src={imagen4} alt="Logo completo" />
              <h2>Innovación y Precisión en Mecanizados Industriales</h2>
              <p>
                Nos especializamos en la fabricación de piezas mecanizadas de
                alta calidad.
              </p>
              <a href="#seccion-conocenos">
                <button>Conocenos</button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={imagen2} alt="Imagen 2" />
            <div className="text-box">
              {/* <img className="logo-dos" src={imagen4} alt="Logo completo" /> */}
              <h2> Nuestra Experiencia en Cada Detalle</h2>
              <p>
                "Explora los proyectos que hemos realizado y descubre la calidad
                y precisión de nuestro trabajo. Desde piezas simples hasta
                mecanizados complejos, cada imagen refleja nuestro compromiso
                con la excelencia."
              </p>
              <button>Ver más</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={imagen1} alt="Imagen 1" />
            <div className="text-box">
              {/* <img className="logo-dos" src={imagen4} alt="Logo completo" /> */}
              <h2>Título de la imagen 1</h2>
              <p>
                Descripción de la imagen 1. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
              <button>Ver más</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Seccion 2 */}
      <div className="seccion-dos">
        <div id="seccion-conocenos"></div>
        <img className="rf-ia" src={imagen5} alt="Imagen 5" />
        <h3 className="sobreNos">Sobre Nosotros</h3>
        <h2 className="sobreNos">
          Tecnología y Experiencia al Servicio de la Industria
        </h2>
        <p className="parrafo1">
          "Con años de experiencia en mecanizado CNC, ofrecemos soluciones
          personalizadas para distintos sectores industriales. Nos enfocamos en
          la innovación, la eficiencia y la mejora continua para garantizar
          productos que superen las expectativas de nuestros clientes."
        </p>

        <img className="trabajos" src={imagen6} alt="Imagen 6" />
        <h3 className="sobreNos">Nuestros Trabajos</h3>
        <h2 className="sobreNos">Calidad y Precisión en Acción</h2>
        <p className="parrafo1">
          "Cada proyecto es un desafío que superamos con precisión y calidad.
          Explora nuestra galería y conoce los trabajos que nos han convertido
          en referentes del mecanizado."
        </p>
      </div>
    </div>
  );
};

export default Home;
