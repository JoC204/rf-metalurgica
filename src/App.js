import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Loader from "./components/Loader";
import "./Styles/Global.css";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Home from "./components/Home"; 
import About from "./components/About";
import Gallery from "./components/GalleryBooks"; 
import Contact from "./components/Contact";
// import PageTemplate from "./components/PageTemplate";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";

// const pages = [
//   { id: "home", title: "Inicio", content: "Bienvenido a nuestra página principal." },
//   { id: "contact", title: "Contacto", content: "Aquí están nuestro contacto." },
//   { id: "about", title: "Acerca de", content: "Conoce más sobre nosotros." },
// ];

// 🔁 Componente que maneja el loader en cambios de ruta
const RouteLoader = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 700); // Duración del spinner en cada navegación

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      {loading && (
        <div className="loader-overlay">
          <Loader />
        </div>
      )}
      {!loading && children}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <RouteLoader>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
          {/* <Route path="/:pageId" element={<PageTemplate pages={pages} />} /> */}
        </Routes>
        <Footer />
        <WhatsAppButton />
      </RouteLoader>
    </Router>
  );
};

export default App;
