import React, { useState } from "react";
import styles from "../Styles/GalleryBooks.module.css";

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
  const [zoomImage, setZoomImage] = useState(null);

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
              onClick={() => setZoomImage(img)}
            />
          ))}
        </div>
      )}

      {/* Visor de imagen ampliada */}
      {zoomImage && (
        <div className={styles.modal} onClick={() => setZoomImage(null)}>
          <img src={zoomImage} alt="Zoom" loading="lazy" />
        </div>
      )}
    </div>
  );
};

export default GalleryBooks;
