import React, { useState, useEffect } from "react";
import Header from "./components/Header";
// import BannerInicio from "./components/BannerInicio";

const App = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolling(scrollTop > 90); // Detecta el scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header scrolling={scrolling} />
      <main>
       
      </main>
    </>
  );
};

export default App;
