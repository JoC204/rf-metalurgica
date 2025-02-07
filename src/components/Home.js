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
        spaceBetween={0}
        modules={[Autoplay, Pagination, Zoom]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 6000, // Cambio automático cada 6 segundos
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="mySwiper"
        zoom={true}
      >
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={imagen1} alt="Imagen 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={imagen2} alt="Imagen 2" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={imagen3} alt="Imagen 3" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
