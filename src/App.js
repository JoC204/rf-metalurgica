import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Styles/Global.css";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Home from "./components/Home"; 
import About from "./components/About";
import Gallery from "./components/GalleryBooks"; 
import Contact from "./components/Contact";
import PageTemplate from "./components/PageTemplate";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";

const pages = [
  { id: "home", title: "Inicio", content: "Bienvenido a nuestra página principal." },
  { id: "contact", title: "Contacto", content: "Aquí están nuestro contacto." },
  { id: "about", title: "Acerca de", content: "Conoce más sobre nosotros." },
];

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="/:pageId" element={<PageTemplate pages={pages} />} />
        </Routes>
      <Footer />
      <WhatsAppButton />
    </Router>
  );
};

export default App;

