import React, { useState } from "react";
import styles from "../Styles/GalleryBooks.module.css";

// Simula tus imágenes
const books = [
  {
    id: 1,
    title: "Book 1",
    cover: require("../imgBooks/book1/1.jpg"),
    images: [
      require("../imgBooks/book1/1.jpg"),
      require("../imgBooks/book1/2.jpg"),
      require("../imgBooks/book1/3.jpg"),
      require("../imgBooks/book1/4.jpg"),
    ],
  },
  {
    id: 2,
    title: "Book 2",
    cover: require("../imgBooks/book2/5.jpg"),
    images: [
      require("../imgBooks/book2/5.jpg"),
      require("../imgBooks/book2/6.jpg"),
      require("../imgBooks/book2/7.jpg"),
      require("../imgBooks/book2/88.jpg"),
    ],
  },
  {
    id: 3,
    title: "Book 3",
    cover: require("../imgBooks/book3/8.jpg"),
    images: [
      require("../imgBooks/book3/8.jpg"),
      require("../imgBooks/book3/9.jpg"),
      
    ],
  },
  {
    id: 4,
    title: "Book 4",
    cover: require("../imgBooks/book4/10.jpg"),
    images: [
      require("../imgBooks/book4/10.jpg"),
      
    ],
  },
];

const GalleryBooks = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [zoomImage, setZoomImage] = useState(null);

  return (
    <div className={styles.galleryContainer}>
      {/* Carrusel horizontal */}
      <div className={styles.carousel}>
        {books.map((book) => (
          <div
            key={book.id}
            className={styles.cover}
            onClick={() => setSelectedBook(book)}
          >
            <img src={book.cover} alt={book.title} />
            <p>{book.title}</p>
          </div>
        ))}
      </div>

      {/* Book visible */}
      {selectedBook && (
        <div className={styles.book}>
          {selectedBook.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Book ${selectedBook.id} - ${idx}`}
              onClick={() => setZoomImage(img)}
            />
          ))}
        </div>
      )}

      {/* Visor de imagen ampliada */}
      {zoomImage && (
        <div className={styles.modal} onClick={() => setZoomImage(null)}>
          <img src={zoomImage} alt="Zoom" />
        </div>
      )}
    </div>
  );
};

export default GalleryBooks;
