import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Styles/Global.css";
import Header from "./components/Header";
import Home from "./components/Home"; // Importamos el nuevo componente
import About from "./components/About"; // Importamos el nuevo componente
import Contact from "./components/Contact"; // Importamos el nuevo componente
import PageTemplate from "./components/PageTemplate"; // Importamos el nuevo componente
import WhatsAppButton from "./components/WhatsAppButton";

const pages = [
  { id: "home", title: "Inicio", content: "Bienvenido a nuestra página principal." },
  { id: "contact", title: "Contacto", content: "Aquí están nuestro contacto." },
  { id: "about", title: "Acerca de", content: "Conoce más sobre nosotros." },
];

const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/:pageId" element={<PageTemplate pages={pages} />} />
        </Routes>
      <WhatsAppButton />
    </Router>
  );
};

export default App;

