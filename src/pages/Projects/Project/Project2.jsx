import HeroSection from "../../../components/UI/HeroSection";
import Fotoproyecto1 from '../../../assets/images/proyecto-gmd-2022.webp';
import ProjectCardIntro from "./ProjectCardIntro";
import ImageCollage from './ImageCollage';
import imagecollage1 from '../../../assets/images/imageCollage1-proyecto2.webp';
import imagecollage2 from '../../../assets/images/imageCollage2-proyecto2.webp';
import imagecollage3 from '../../../assets/images/imageCollage3-proyecto2.webp';
import imageProyecto2 from '../../../assets/images/imageProyecto2.webp';
import imageScope from '../../../assets/images/imageScope-proyecto2.webp';
import PanelInfoProjects from "./PanelInfoProjects";
import { FaCog, FaPlug, FaTint, FaBatteryFull, FaNetworkWired } from "react-icons/fa"
import ProjectScope from "./PanelProjectScope";
import ProjectDetails from "./PanelProjectDetails";
import { useTranslation } from "react-i18next";
import Seo from "../../../components/seo/seo";
import PanelCarouselVideo from "./PanelCarouselVideo";
import videoSrc from "../../../assets/videos/carousel-pjt2-video.mp4";
import item1Carousel from "../../../assets/images/carousel-pjt2-item1.webp";
import item2Carousel from "../../../assets/images/carousel-pjt2-item2.webp";
import item3Carousel from "../../../assets/images/carousel-pjt2-item3.webp";

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
    const title = t("seo.project2.title");
    const description = t("seo.project2.description");

    // Data para el panel Carousel Video
    const mediaItems = [
        { type: "video", src: videoSrc, thumbnail: item1Carousel },
        { type: "image", src: item1Carousel, alt: t("alt-image.project2.alt-img1")},
        { type: "image", src: item2Carousel, alt: t("alt-image.project2.alt-img2")},
        { type: "image", src: item3Carousel, alt: t("alt-image.project2.alt-img3")},
    ];

    return (
        <>
            <Seo title={title} description={description} />
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
            <PanelCarouselVideo mediaItems={mediaItems}/>
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