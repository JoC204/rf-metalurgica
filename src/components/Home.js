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
              <p>Nos especializamos en la fabricación de piezas mecanizadas de alta calidad.</p>
              <button>Ver más</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
              <img src={imagen2} alt="Imagen 2" />
            <div className="text-box">
            {/* <img className="logo-dos" src={imagen4} alt="Logo completo" /> */}
              <h2>Título de la imagen 2</h2>
              <p>Descripción de la imagen 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
              <p>Descripción de la imagen 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button>Ver más</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <img className="rf-ia" src={imagen5} alt="Imagen 5" />
      <h3 className="sobreNos">Sobre Nosotros</h3>
      <h2 className="sobreNos">Tecnología y Experiencia al Servicio de la Industria</h2>
      <p className="parrafo1">"Con años de experiencia en mecanizado CNC, ofrecemos soluciones personalizadas para distintos sectores industriales. Nos enfocamos en la innovación, la eficiencia y la mejora continua para garantizar productos que superen las expectativas de nuestros clientes."</p>
    </div>
  );
};

export default Home;