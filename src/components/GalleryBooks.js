import React, { useState } from "react";
import styles from "../Styles/GalleryBooks.module.css";

// Simula tus imágenes
const books = [
  {
    id: 1,
    title: "Click a Mecanizado",
    cover: require("../imgBooks/book1/bock1-1.jpg"),
    images: [
      require("../imgBooks/book1/bock1-1.jpg"),
      require("../imgBooks/book1/bock1-2.jpg"),
      require("../imgBooks/book1/bock1-3.jpg"),
      require("../imgBooks/book1/bock1-4.jpg"),
    ],
  },
  {
    id: 2,
    title: "Click a Tornería",
    cover: require("../imgBooks/book2/bock2-4.jpg"),
    images: [
      require("../imgBooks/book2/bock2-1.jpg"),
      require("../imgBooks/book2/bock2-2.jpg"),
      require("../imgBooks/book2/bock2-3.jpg"),
      require("../imgBooks/book2/bock2-4.jpg"),
      require("../imgBooks/book2/bock2-5.jpg"),
      require("../imgBooks/book2/bock2-6.jpg"),
      require("../imgBooks/book2/bock2-7.jpg"),
      require("../imgBooks/book2/bock2-8.jpg"),
    ],
  },
  {
    id: 3,
    title: "Click a Reparaciones",
    cover: require("../imgBooks/book3/bock3-1.jpg"),
    images: [
      require("../imgBooks/book3/bock3-1.jpg"),
      require("../imgBooks/book3/bock3-2.jpg"),
    ],
  },
  {
    id: 4,
    title: "Click a otros",
    cover: require("../imgBooks/book4/bock4-1.jpg"),
    images: [require("../imgBooks/book4/bock4-1.jpg")],
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
          <img src={require("../img/rfMetalurgica.png")} alt="RF Metalurgica" loading="lazy" />
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
