import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../Styles/Home.css";

// Importar las imágenes
import imagen1 from "../img/carrusel-uno.jpeg";
import imagen2 from "../img/carrusel-dos.jpeg";
import imagen3 from "../img/carrusel-tres.jpeg";

const Home = ({ title = "RF Metalúrgica" }) => {
  // Array de imágenes para el carrusel
  const images = [imagen1, imagen2, imagen3];

  return (
    <section className="home">
      <h1>{title}</h1>
      <Swiper
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}"></span>`;
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Home;