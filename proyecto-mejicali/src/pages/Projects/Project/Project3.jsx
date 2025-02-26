import Fotoproyecto1 from '../../../assets/images/proyecto-gmd-2022.jpg';
import HeroSection from '../../../components/UI/HeroSection';
import ProjectCardIntro from './ProjectCardIntro';
import ImageCollage from './ImageCollage';
import imagecollage1 from '../../../assets/images/imageCollage1-proyecto3.png';
import imagecollage2 from '../../../assets/images/imageCollage2-proyecto3.png';
import imagecollage3 from '../../../assets/images/imageCollage3-proyecto3.png';
import ProjectDetails from './PanelProjectDetails';
import ProjectScope from './PanelProjectScope';

const projectDetails = [
    "Nombre del sitio: Palo Seco",
    "Capacidad: 60 MW",
    "Punto de interconexión: S.E. Palo Seco",
    "Combustible: Gas Natural",
    "Tecnología: Modelos GE TM2500 (una TM 2500+ y dos TM 2500)",
];

const projectScope = [
    "Transporte e instalación de las turbinas.",
    "Puesta en marcha, operación y mantenimiento.",
];

const projectMoreScope = [
    {
        title: "Plazo de Ejecución:",
        description: "Menos de 60 días a partir de la firma del contrato.",
    }, 
    
]

const Project3 = () => {
    return (
        <>
            <HeroSection
                src = {Fotoproyecto1}
                title = "Proyecto Palo Seco para USACE"
                description = "Desde 2021, nuestra misión es transformar la forma en que se suministra energía en el mundo. Con tecnología de vanguardia y soluciones rápidas, ayudamos a empresas a garantizar una estabilidad energética."
            />
            <ProjectCardIntro 
                title="Proyecto GDM para CENACE"
                description="MTE fue responsable de la logística, instalación, puesta en marcha, operación y mantenimiento de tres turbinas aeroderivadas TM 2500 con una capacidad total de 60 MW en la Planta de Energía Palo Seco en Puerto Rico, para el USACE en 2023, cumpliendo con el COD en el plazo establecido."
            />
            <ImageCollage 
                img1={imagecollage1}
                img2={imagecollage2}
                img3={imagecollage3}
            />
            <ProjectDetails 
                srcImage={imagecollage1}
                projectDetails={projectDetails}
            />
            <ProjectScope 
                srcImage={imagecollage2}
                dataProjectScope={projectScope}
                dataProjectMoreScope={projectMoreScope}
            />
        </>
    );
};

export default Project3;