import React from "react";
import "../Styles/BannerInicio.css";
// import VideoBanner from "../img/cieloDegrade.mp4";
import Banner from "../img/banner.jpeg";

const BannerInicio = () => {
  return (
    <div className="banner-inicio">
      <video
        className="banner-video"
        // src={VideoBanner}
        src={Banner}
        autoPlay
        loop
        muted
      ></video>
      <div className="carousel">
        <div className="carousel-track">          
        </div>
      </div>
    </div>
  );
};

export default BannerInicio;
