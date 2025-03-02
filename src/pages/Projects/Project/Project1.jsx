import HeroSection from "../../../components/UI/HeroSection";
import Fotoproyecto1 from '../../../assets/images/proyecto-gmd-2022.jpg';
import ProjectCardIntro from "./ProjectCardIntro";
import ImageCollage from './ImageCollage';
import imagecollage1 from '../../../assets/images/imageCollage1-proyecto1.jpg';
import imagecollage2 from '../../../assets/images/imageCollage2-proyecto1.jpg';
import imagecollage3 from '../../../assets/images/imageCollage3-proyecto1.jpg';
import PanelInfoProjects from "./PanelInfoProjects";
import { FaTools, FaFileContract, FaBolt, FaClock, FaLeaf } from "react-icons/fa";

const infoData = [
    {
        icon: <FaTools />,
        title: "Infraestructura y Equipos Avanzados",
        description:
            "Instalamos toda la infraestructura requerida, incluyendo equipos primarios, sistemas de medición avanzados, canales de comunicación de última generación y sistemas SCADA de alta precisión.",
    },
    {
        icon: <FaFileContract />,
        title: "Cumplimiento Normativo",
        description:
            "Cumplimos con todos los requisitos regulatorios ante CFE, CENACE, CRE y otras entidades, asegurando la operación segura y eficiente de la central.",
    },
    {
        icon: <FaBolt />,
        title: "Pruebas y Energización",
        description:
            "Realizamos pruebas preoperativas y de energización exitosas, garantizando la fiabilidad y el rendimiento óptimo del sistema.",
    },
];

const Info = () => {
    return (
        <section className="highlight bottom-margin max-width">
            <div className="highlight__content">
                <h2 className="highlight__title">Superando Expectativas</h2>
                <p className="highlight__text">
                    Lo más destacado de nuestro logro es que, aunque el proyecto requería
                    una capacidad de <span>100 MW</span>, implementamos una solución innovadora que
                    permite una generación de hasta <span>130.4 MW</span>, superando las expectativas
                    iniciales y aportando mayor valor al sistema eléctrico.
                </p>
                <div className="highlight__stats">
                    <div className="highlight__stat">
                        <FaBolt className="highlight__icon" />
                        <span>130.4 MW</span>
                        <p>Energía Generada</p>
                    </div>
                    <div className="highlight__stat">
                        <FaClock className="highlight__icon" />
                        <span>60 Días</span>
                        <p>Tiempo de Implementación</p>
                    </div>
                    <div className="highlight__stat">
                        <FaLeaf className="highlight__icon" />
                        <span>Sostenibilidad</span>
                        <p>Compromiso con el Futuro</p>
                    </div>
                </div>
                <p className="highlight__closing">
                    En <strong>Mejicali Turbine Energy</strong>, seguimos comprometidos con la excelencia en la generación de energía,
                    impulsando soluciones que van más allá de los estándares y contribuyendo al desarrollo sostenible de México.
                </p>
            </div>
        </section>
    );
};

const Project1 = () => {
    return (
        <>
            <HeroSection
                src = {Fotoproyecto1}
                title = "Proyecto GMD 2022"
                description = "Desde 2021, nuestra misión es transformar la forma en que se suministra energía en el mundo. Con tecnología de vanguardia y soluciones rápidas, ayudamos a empresas a garantizar una estabilidad energética."
            />
            <ProjectCardIntro 
                title="Superando Expectativas en la Generación de Energía"
                description="En Mejicali Turbine Energy, nos enorgullece anunciar el exitoso cumplimiento de todos los requerimientos técnicos, regulatorios y operativos establecidos para la Puesta en Servicio de la Unidad de Protocolo Correctivo 2022 – Generación Mejicali"
            />
            <ImageCollage 
                img1={imagecollage1}
                img2={imagecollage2}
                img3={imagecollage3}
            />
            <PanelInfoProjects 
                word="Representación"
                title="Visual del Proceso"
                infoData={infoData}
            />
            <Info />
        </>
    );
};

export default Project1;