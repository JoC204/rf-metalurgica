import React from "react";
import { useParams } from "react-router-dom";
import "../Styles/PageTemplate.css"; 

const PageTemplate = ({ pages }) => {
  const { pageId } = useParams(); // Obtiene el ID dinámico de la URL
  const pageData = pages.find((page) => page.id === pageId); // Encuentra la página correspondiente

  if (!pageData) {
    // Si no se encuentra la página, muestra un mensaje de error
    return <h1>Página no encontrada</h1>;
  }

  return (
    <section className="page-template">
      <h1>{pageData.title}</h1>
      <p>{pageData.content}</p>
    </section>
  );
};

export default PageTemplate;
