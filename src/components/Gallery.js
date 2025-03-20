import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Importar estilos de Swiper
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Importar módulos necesarios
import { EffectCoverflow, Pagination } from 'swiper/modules';
import '../Styles/Gallery.css';

// Importa las imágenes locales
import img1 from "../imgGallery/1.jpg";
import img2 from "../imgGallery/2.jpg";
import img3 from "../imgGallery/3.jpg";
import img4 from "../imgGallery/4.jpg";
import img5 from "../imgGallery/5.jpg";
import img6 from "../imgGallery/6.jpg";
import img7 from "../imgGallery/7.jpg";
import img8 from "../imgGallery/8.jpg";
import img9 from "../imgGallery/9.jpg";
import img10 from "../imgGallery/10.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]; 

const Gallery = () => {
  return (
    <div className="gallery-container">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 20,  
          stretch: 0,
          depth: 200,  
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Imagen ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Gallery;
