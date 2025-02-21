import HeroSection from "../../components/UI/HeroSection";
import Fotoproyecto1 from '../../assets/images/proyecto-gmd-2022.jpg';
import PanelServicies from "./PanelServicies";

const Services = () => {    
    return (
        <>
            <HeroSection
                src = {Fotoproyecto1}
                title = "Nuestros Servicios y Soluciones"
                description = "En Mejicali Turbine Energy, transformamos desafíos en soluciones energéticas a la medida. Con una combinación de innovación, experiencia y rapidez, ofrecemos energía confiable y eficiente, adaptándonos a las necesidades únicas de cada cliente. Resultados excepcionales en tiempo récord, porque la energía no puede esperar."
            />
            <PanelServicies />
        </>
    )
}

export default Services;