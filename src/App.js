import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./Styles/Global.css";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Home from "./components/Home"; 
import About from "./components/About";
import Gallery from "./components/GalleryBooks"; 
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";



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
        </Routes>
        <Footer />
        <WhatsAppButton />    
    </Router>
  );
};

export default App;
