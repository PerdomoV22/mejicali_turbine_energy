import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      // Desplaza la ventana al inicio de la página
      window.scrollTo(0, 0);
    }, [pathname]); // Se ejecuta cada vez que cambia la ruta
  
    return null; // No renderiza nada visualmente
  }