import { Routes, Route } from "react-router-dom";
import { About } from "../pages/About";
import { Home } from "../pages/home";
import { Contact } from "../pages/Contact";
import { Projects } from "../pages/Projects";
import { Servicios } from "../pages/Servicios";

export const AppRoutes = () => {
    return (
        
        <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/servicios" element={<Servicios />} />
        </Routes>
    );
}

