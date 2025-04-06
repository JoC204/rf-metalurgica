// src/components/Loader.jsx
import React from "react";
import "../App.css";
const Loader = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <span className="loader"></span>
      </div>
    );
  };
  
  export default Loader;
  