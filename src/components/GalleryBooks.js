import React, { useState } from "react";
import styles from "../Styles/GalleryBooks.module.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Simula tus imágenes
const books = [
  {
    id: 1,
    title: "Matriceria",
    cover: require("../imgBooks/matriceria/SPINELLI 03.webp"),
    images: [
      require("../imgBooks/matriceria/COMAT 04.webp"),
      require("../imgBooks/matriceria/METROFUND 02.webp"),
      require("../imgBooks/matriceria/METROFUND 04.webp"),
      require("../imgBooks/matriceria/METROFUND 07.webp"),
      require("../imgBooks/matriceria/SPINELLI 01.webp"),
      require("../imgBooks/matriceria/SPINELLI 02.webp"),
      require("../imgBooks/matriceria/SPINELLI 03.webp"),
    ],
  },
  {
    id: 2,
    title: "Producción",
    cover: require("../imgBooks/produccion/DANES 03.webp"),
    images: [
      require("../imgBooks/produccion/AFG TOOL GM 01.webp"),
      require("../imgBooks/produccion/ALCON.webp"),
      require("../imgBooks/produccion/AVANZ 01.webp"),
      require("../imgBooks/produccion/AVANZ 02.webp"),
      require("../imgBooks/produccion/AVANZ 03.webp"),
      require("../imgBooks/produccion/AVIGLIANO 01.webp"),
      require("../imgBooks/produccion/BANCHERO 01.webp"),
      require("../imgBooks/produccion/BANCHERO 02.webp"),
      require("../imgBooks/produccion/COMAT 01.webp"),
      require("../imgBooks/produccion/COMAT 02.webp"),
      require("../imgBooks/produccion/DANES 01.webp"),
      require("../imgBooks/produccion/DANES 02.webp"),
      require("../imgBooks/produccion/DANES 03.webp"),
      require("../imgBooks/produccion/DANES 04.webp"),
      require("../imgBooks/produccion/DANES 06.webp"),
      require("../imgBooks/produccion/DANES 07.webp"),
      require("../imgBooks/produccion/DANES 08.webp"),
      require("../imgBooks/produccion/DANES 09.webp"),
      require("../imgBooks/produccion/DANES 10.webp"),
      require("../imgBooks/produccion/DANES 11.webp"),
      require("../imgBooks/produccion/DANES 12.webp"),
      require("../imgBooks/produccion/DANES 13.webp"),
      require("../imgBooks/produccion/FAESPO 01.webp"),
      require("../imgBooks/produccion/FAESPO 02.webp"),
      require("../imgBooks/produccion/INBELT 00.webp"),
      require("../imgBooks/produccion/INBELT 01.webp"),
      require("../imgBooks/produccion/INBELT 02.webp"),
      require("../imgBooks/produccion/INBELT 03.webp"),
      require("../imgBooks/produccion/METROFUND 01.webp"),
      require("../imgBooks/produccion/METROFUND 03.webp"),
      require("../imgBooks/produccion/METROFUND 05.webp"),
      require("../imgBooks/produccion/METROFUND 06.webp"),
    ],
  },
  {
    id: 3,
    title: "Reparaciones / Mantenimiento",
    cover: require("../imgBooks/repara-mante/EBINOX 0.webp"),
    images: [
      require("../imgBooks/repara-mante/EBINOX 00.webp"),
      require("../imgBooks/repara-mante/EBINOX 01.webp"),
      require("../imgBooks/repara-mante/EBINOX 02.webp"),
      require("../imgBooks/repara-mante/EBINOX 0.webp"),
      require("../imgBooks/repara-mante/EBINOX 03.webp"),
      require("../imgBooks/repara-mante/EBINOX 04.webp"),
      require("../imgBooks/repara-mante/TALLER 09.webp"),
      require("../imgBooks/repara-mante/TALLER 10.webp"),
    ],
  },
  {
    id: 4,
    title: "Dispositivos / Estructuras",
    cover: require("../imgBooks/dispo-estructuras/TALLER 11.webp"),
    images: [
      require("../imgBooks/dispo-estructuras/TALLER 01.webp"),
      require("../imgBooks/dispo-estructuras/TALLER 02.webp"),
      require("../imgBooks/dispo-estructuras/TALLER 03.webp"),
      require("../imgBooks/dispo-estructuras/TALLER 04.webp"),
      require("../imgBooks/dispo-estructuras/TALLER 11.webp"),
      require("../imgBooks/dispo-estructuras/TALLER 12.webp"),
    ],
  },
];

const GalleryBooks = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [zoomImageIndex, setZoomImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setZoomImageIndex(index);
  };

  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  };

  const handleTouchMove = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
  };

  const handleTouchEnd = () => {
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      // Swipe horizontal
      if (diffX > 50) {
        // Swipe derecha
        if (zoomImageIndex > 0) {
          setZoomImageIndex((prev) => prev - 1);
        }
      } else if (diffX < -50) {
        // Swipe izquierda
        if (zoomImageIndex < selectedBook.images.length - 1) {
          setZoomImageIndex((prev) => prev + 1);
        }
      }
    } else {
      // Swipe vertical
      if (Math.abs(diffY) > 50) {
        setZoomImageIndex(null);
      }
    }
  };

  return (
    <div className={styles.galleryContainer}>
      
      <video autoPlay loop muted playsInline className={styles.videoBackground}>
        <source src={require("../img/fondoRF.mp4")} type="video/mp4" />
      </video>
      {/* Carrusel horizontal */}
      <div className={styles.carousel}>
        {books.map((book) => (
          <div
            key={book.id}
            className={styles.cover}
            onClick={() => setSelectedBook(book)}
          >
            <img src={book.cover} alt={book.title} loading="lazy" />
            <p>{book.title}</p>
          </div>
        ))}
      </div>
      {selectedBook && (
        <h1 className={styles.bookTitle}>{selectedBook.title}</h1>
      )}

      {/* Mostrar logo solo cuando no hay libro seleccionado */}
      {!selectedBook && (
        <div className={styles.logoNearCarousel}>
          <img
            src={require("../img/rfMetalurgica.png")}
            alt="RF Metalurgica"
            loading="lazy"
          />
        </div>
      )}

      {/* Book visible */}
      {selectedBook && (
        <div className={styles.book}>
          {selectedBook.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Book ${selectedBook.id} - ${idx}`}
              loading="lazy"
              onClick={() => handleImageClick(idx)}
            />
          ))}
        </div>
      )}

      {/* Visor de imagen ampliada */}

      {zoomImageIndex !== null && (
        <div
          className={styles.modal}
          onTouchStart={(e) => handleTouchStart(e)}
          onTouchMove={(e) => handleTouchMove(e)}
          onTouchEnd={() => handleTouchEnd()}
          onClick={() => setZoomImageIndex(null)}
        >
          <img
            src={selectedBook.images[zoomImageIndex]}
            alt="Zoom"
            loading="lazy"
            onClick={(e) => e.stopPropagation()} // evita cerrar al hacer click sobre la imagen
          />
          {/* Controles de navegación solo visibles en escritorio */}
          <div className={styles.controls}>
            {zoomImageIndex > 0 && (
              <button
                className={styles.controlButton}
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomImageIndex((prev) => prev - 1);
                }}
              >
                <FiChevronLeft />
              </button>
            )}
            {zoomImageIndex < selectedBook.images.length - 1 && (
              <button
                className={styles.controlButton}
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomImageIndex((prev) => prev + 1);
                }}
              >
                <FiChevronRight />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryBooks;
