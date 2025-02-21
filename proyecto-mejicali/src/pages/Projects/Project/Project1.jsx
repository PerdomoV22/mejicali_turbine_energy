import HeroSection from "../../../components/UI/HeroSection";
import Fotoproyecto1 from '../../../assets/images/proyecto-gmd-2022.jpg';

const Project1 = () => {
    return (
        <>
            <HeroSection
                src = {Fotoproyecto1}
                title = "Proyecto GMD 2022"
                description = "Desde 2021, nuestra misión es transformar la forma en que se suministra energía en el mundo. Con tecnología de vanguardia y soluciones rápidas, ayudamos a empresas a garantizar una estabilidad energética."
            />
        </>
    );
};

export default Project1;