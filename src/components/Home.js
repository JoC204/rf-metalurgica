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
              <h2>Título de la imagen 3</h2>
              <p>Descripción de la imagen 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button>Ver más</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={imagen2} alt="Imagen 2" />
            <div className="text-box">
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
              <h2>Título de la imagen 1</h2>
              <p>Descripción de la imagen 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button>Ver más</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="lorem-ipsum">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default Home;