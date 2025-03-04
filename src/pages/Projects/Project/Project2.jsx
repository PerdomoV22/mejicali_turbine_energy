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
import { useTranslation } from "react-i18next";

const icons = [
    <FaCog />,
    <FaPlug />,
    <FaTint />,
    <FaBatteryFull />,
    <FaNetworkWired />,
];

const Project2 = () => {

    // Traduccion de la pagina
    const { t } = useTranslation();
    const infoData = t("project2.infoData", { returnObjects: true });
    const projectDetails = t("project2.projectDetails", { returnObjects: true });
    const projectScope = t("project2.projectScope", { returnObjects: true });
    const projectMoreScope = t("project2.projectMoreScope", { returnObjects: true });

    return (
        <>
            <HeroSection
                src = {Fotoproyecto1}
                title = {t("project2.title")}
                description = {t("project2.description")}
            />
            <ProjectCardIntro 
                title={t("project2.intro.title")}
                description={t("project2.intro.description")}
            />
            <ImageCollage 
                img1={imagecollage1}
                img2={imagecollage2}
                img3={imagecollage3}
            />
            <PanelInfoProjects 
                word={t("project2.highlights.word")}
                title={t("project2.highlights.title")}
                infoData={infoData}
                icons={icons}
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