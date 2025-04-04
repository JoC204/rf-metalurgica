import React from "react";
import "../Styles/LogoEmpresas.css";

const logos = [
  "/logosEmpresasPng/AFG.png",
  "/logosEmpresasPng/Alloco.png",
  "/logosEmpresasPng/Avanz.png",
  "/logosEmpresasPng/BestCold.png",
  "/logosEmpresasPng/Carnevali.png",
  "/logosEmpresasPng/Codeca.png",
  "/logosEmpresasPng/Comat.png",
  "/logosEmpresasPng/Cormetal.png",
  "/logosEmpresasPng/CoverFilm.png",
  "/logosEmpresasPng/Danes.png",
  "/logosEmpresasPng/Inbelt.png",
  "/logosEmpresasPng/KZN.png",
  "/logosEmpresasPng/Metrofund.png",
  "/logosEmpresasPng/Plecor.png",
  "/logosEmpresasPng/Rodados.png"
];

const LogoEmpresas = () => {
  return (
    <div className="logo-container">
      <div className="logo-track">
        {/* Se duplica la lista para lograr un desplazamiento continuo sin cortes */}
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="logo-item">
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="logo-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoEmpresas;
