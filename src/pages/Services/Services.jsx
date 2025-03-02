import HeroSection from "../../components/UI/HeroSection";
import Fotoproyecto1 from '../../assets/images/proyecto-gmd-2022.jpg';
import PanelServicies from "./PanelServicies";
import PanelSolutions from "./PanelSolutions";
import PanelPjtMedida from "./PanelPjtMedida";

const Services = () => {    
    return (
        <>
            <HeroSection
                src = {Fotoproyecto1}
                title = "Nuestros Servicios y Soluciones"
                description = "En Mejicali Turbine Energy, transformamos desafíos en soluciones energéticas a la medida. Con una combinación de innovación, experiencia y rapidez, ofrecemos energía confiable y eficiente, adaptándonos a las necesidades únicas de cada cliente. Resultados excepcionales en tiempo récord, porque la energía no puede esperar."
            />
            <PanelServicies />
            <PanelSolutions />
            <PanelPjtMedida />
        </>
    )
}

export default Services;