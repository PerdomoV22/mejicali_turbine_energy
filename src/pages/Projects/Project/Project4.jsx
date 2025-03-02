import HeroSection from "../../../components/UI/HeroSection";
import Fotoproyecto1 from '../../../assets/images/proyecto-gmd-2022.jpg';
import ProjectCardIntro from "./ProjectCardIntro";
import ImageCollage from './ImageCollage';
import imagecollage1 from '../../../assets/images/imageCollage1-proyecto4.jpg';
import imagecollage2 from '../../../assets/images/imageCollage2-proyecto4.jpg';
import imagecollage3 from '../../../assets/images/imageCollage3-proyecto4.jpg';
import imageScope from '../../../assets/images/imageScope-proyecto4.jpg';
import ProjectScope from "./PanelProjectScope";

const projectScope = [
    "Instalación de un transformador temporal de 20 MVA.",
    "Infraestructura de soporte, incluyendo obras civiles, sistemas de conexión y seguridad",
];

const projectMoreScope = [
    {
        title: "Adaptabilidad:",
        description: "Este enfoque nos permite ofrecer a nuestros clientes flexibilidad y escalabilidad, asegurando que cada proyecto pueda crecer y evolucionar de acuerdo con las demandas futuras.",
    }, 
    
]

const Project4 = () => {
    return (
        <>
            <HeroSection
                src = {Fotoproyecto1}
                title = "Proyecto S.E. Movil Tula"
                description = "Desde 2021, nuestra misión es transformar la forma en que se suministra energía en el mundo. Con tecnología de vanguardia y soluciones rápidas, ayudamos a empresas a garantizar una estabilidad energética."
            />
            <ProjectCardIntro 
                title="Solución de Transformador Temporal"
                description="En Mejicali Turbine Energy, demostramos nuestra versatilidad al implementar una solución temporal de 20 MVA de potencia para una empresa en la Refinería Tula. Este proyecto consistió en la instalación de un transformador temporal, proporcionando una respuesta rápida y eficiente para garantizar la continuidad operativa."
            />
            <ImageCollage 
                img1={imagecollage1}
                img2={imagecollage2}
                img3={imagecollage3}
            />
            <ProjectScope 
                srcImage={imageScope}
                dataProjectScope={projectScope}
                dataProjectMoreScope={projectMoreScope}
            />
        </>
    );
};

export default Project4;