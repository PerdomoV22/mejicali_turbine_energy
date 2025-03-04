import HeroSection from "../../../components/UI/HeroSection";
import Fotoproyecto1 from '../../../assets/images/proyecto-gmd-2022.jpg';
import ProjectCardIntro from "./ProjectCardIntro";
import ImageCollage from './ImageCollage';
import imagecollage1 from '../../../assets/images/imageCollage1-proyecto1.jpg';
import imagecollage2 from '../../../assets/images/imageCollage2-proyecto1.jpg';
import imagecollage3 from '../../../assets/images/imageCollage3-proyecto1.jpg';
import PanelInfoProjects from "./PanelInfoProjects";
import { FaTools, FaFileContract, FaBolt, FaClock, FaLeaf } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const icons = [
    <FaTools />,
    <FaFileContract />,
    <FaBolt />,
];

const Project1 = () => {

    // Traduccion de la pagina
    const { t } = useTranslation();
    const infoData = t("project1.infoData", { returnObjects: true });

    return (
        <>
            <HeroSection
                src = {Fotoproyecto1}
                title={t("project1.heroTitle")}
                description={t("project1.heroDescription")}
            />
            <ProjectCardIntro 
                title={t("project1.introTitle")}
                description={t("project1.introDescription")}
            />
            <ImageCollage 
                img1={imagecollage1}
                img2={imagecollage2}
                img3={imagecollage3}
            />
            <PanelInfoProjects 
                word={t("project1.panelWord")}
                title={t("project1.panelTitle")}
                infoData={infoData}
                icons={icons}
            />
            <section className="highlight bottom-margin max-width">
                <div className="highlight__content">
                    <h2 className="highlight__title">{t("project1.highlightTitle")}</h2>
                    <p className="highlight__text" dangerouslySetInnerHTML={{ __html: t("project1.highlightText") }} />
                    <div className="highlight__stats">
                        <div className="highlight__stat">
                            <FaBolt className="highlight__icon" />
                            <span>{t("project1.highlightStats.energy.value")}</span>
                            <p>{t("project1.highlightStats.energy.label")}</p>
                        </div>
                        <div className="highlight__stat">
                            <FaClock className="highlight__icon" />
                            <span>{t("project1.highlightStats.time.value")}</span>
                            <p>{t("project1.highlightStats.time.label")}</p>
                        </div>
                        <div className="highlight__stat">
                            <FaLeaf className="highlight__icon" />
                            <span>{t("project1.highlightStats.sustainability.value")}</span>
                            <p>{t("project1.highlightStats.sustainability.label")}</p>
                        </div>
                    </div>
                    <p className="highlight__closing" dangerouslySetInnerHTML={{ __html: t("project1.highlightClosing") }} />
                </div>
            </section>
        </>
    );
};

export default Project1;