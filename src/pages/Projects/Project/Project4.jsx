import HeroSection from "../../../components/UI/HeroSection";
import Fotoproyecto1 from '../../../assets/images/proyecto-gmd-2022.jpg';
import ProjectCardIntro from "./ProjectCardIntro";
import ImageCollage from './ImageCollage';
import imagecollage1 from '../../../assets/images/imageCollage1-proyecto4.jpg';
import imagecollage2 from '../../../assets/images/imageCollage2-proyecto4.jpg';
import imagecollage3 from '../../../assets/images/imageCollage3-proyecto4.jpg';
import imageScope from '../../../assets/images/imageScope-proyecto4.jpg';
import ProjectScope from "./PanelProjectScope";
import { useTranslation } from "react-i18next";


const Project4 = () => {

    // Traduccion de la pagina
    const { t } = useTranslation();
    const projectScope = t("project3.projectScope", { returnObjects: true });
    const projectMoreScope = t("project3.projectMoreScope", { returnObjects: true });

    return (
        <>
            <HeroSection
                src = {Fotoproyecto1}
                title = {t("project4.hero.title")}
                description = {t("project4.hero.description")}
            />
            <ProjectCardIntro 
                title={t("project4.intro.title")}
                description={t("project4.intro.description")}
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