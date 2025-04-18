import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: -80,
      behavior: "smooth", // o "auto" si no querés animación
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
