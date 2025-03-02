import HeroSection from "../../../components/UI/HeroSection";
import Fotoproyecto1 from '../../../assets/images/proyecto-gmd-2022.jpg';
import ProjectCardIntro from "./ProjectCardIntro";
import ImageCollage from './ImageCollage';
import imagecollage1 from '../../../assets/images/imageCollage1-proyecto2.jpg';
import imagecollage2 from '../../../assets/images/imageCollage2-proyecto2.jpg';
import imagecollage3 from '../../../assets/images/imageCollage3-proyecto2.jpg';
import imageProyecto2 from '../../../assets/images/imageProyecto2.jpg';
import imageScope from '../../../assets/images/imageScope-proyecto2.jpg';
import PanelInfoProjects from "./PanelInfoProjects";
import { FaCog, FaPlug, FaTint, FaBatteryFull, FaNetworkWired } from "react-icons/fa"
import ProjectScope from "./PanelProjectScope";
import ProjectDetails from "./PanelProjectDetails";

const infoData = [
    {
        icon: <FaCog />,
        title: "Potencia de Última Generación",
        description:
            "Instalación de cuatro turbinas de gas TM 2500+ aeroderivadas.",
    },
    {
        icon: <FaPlug />,
        title: "Infraestructura Eléctrica Estratégica",
        description:
            "Construcción de una subestación eléctrica temporal y un transformador elevador de tensión.",
    },
    {
        icon: <FaTint />,
        title: "Agua Pura para Máximo Desempeño",
        description:
            "Implementación de una planta de tratamiento de agua desmineralizada.",
    },
    {
        icon: <FaBatteryFull />,
        title: "Energía Ininterrumpida",
        description:
            "Sistema Black-Start para garantizar la continuidad del suministro eléctrico.",
    },
    {
        icon: <FaNetworkWired />,
        title: "Expansión de la Red Eléctrica",
        description:
            "Construcción de una línea de transmisión de 9 km, mitigando el riesgo de apagones en la región.",
    },
];

const projectDetails = [
    "Nombre del sitio: GDM",
    "Capacidad: 100 MW",
    "Punto de interconexión: S.E. Sánchez Taboada",
    "Voltaje: 230 kV",
    "Combustible: Gas Natural",
    "Tecnología: 4 turbinas aeroderivadas TM 2500+",
];

const projectScope = [
    "Interconexión al gasoducto principal.",
    "Construcción de la línea de transmisión, obras civiles, sistemas de puesta a tierra y seguridad del sitio.",
    "Instalación de transformador elevador, subestación eléctrica, sistema Black-Start y planta de tratamiento de agua.",
    "Operación y mantenimiento integral del sistema."
];

const projectMoreScope = [
    {
        title: "Plazo de Ejecución:",
        description: "60 días a partir de la firma del contrato.",
    }, 
    {
        title: "Suministro de Combustible:",
        description: "MTE fue responsable de la solución integral llave en mano, incluyendo el suministro de combustible.",
    }
    
]

const Project2 = () => {
    return (
        <>
            <HeroSection
                src = {Fotoproyecto1}
                title = "Proyecto GMD 2021"
                description = "Desde 2021, nuestra misión es transformar la forma en que se suministra energía en el mundo. Con tecnología de vanguardia y soluciones rápidas, ayudamos a empresas a garantizar una estabilidad energética."
            />
            <ProjectCardIntro 
                title="Proyecto GDM para CENACE"
                description="MTE llevó a cabo con éxito la puesta en marcha, operación y mantenimiento de 100 MW para el Centro Nacional de Control de Energía (CENACE) en Mexicali, México. "
            />
            <ImageCollage 
                img1={imagecollage1}
                img2={imagecollage2}
                img3={imagecollage3}
            />
            <PanelInfoProjects 
                word="Avances"
                title="Tecnológicos para una Energía Segura y Eficiente"
                infoData={infoData}
            />
            <ProjectDetails 
                srcImage={imageProyecto2}
                projectDetails={projectDetails}
            />
            <ProjectScope 
                srcImage={imageScope}
                dataProjectScope={projectScope}
                dataProjectMoreScope={projectMoreScope}
            />
        </>
    );
};

export default Project2;