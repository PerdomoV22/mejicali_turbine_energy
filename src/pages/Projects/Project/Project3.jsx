import Fotoproyecto1 from '../../../assets/images/proyecto-gmd-2022.webp';
import HeroSection from '../../../components/UI/HeroSection';
import ProjectCardIntro from './ProjectCardIntro';
import ImageCollage from './ImageCollage';
import imagecollage1 from '../../../assets/images/imageCollage1-proyecto3.webp';
import imagecollage2 from '../../../assets/images/imageCollage2-proyecto3.webp';
import imagecollage3 from '../../../assets/images/imageCollage3-proyecto3.webp';
import ProjectDetails from './PanelProjectDetails';
import ProjectScope from './PanelProjectScope';
import { useTranslation } from "react-i18next";
import Seo from '../../../components/seo/Seo';

const Project3 = () => {

    // Traduccion de la pagina
    const { t } = useTranslation();
    const projectDetails = t("project3.projectDetails", { returnObjects: true });
    const projectScope = t("project3.projectScope", { returnObjects: true });
    const projectMoreScope = t("project3.projectMoreScope", { returnObjects: true });
    const title = t("seo.project3.title");
    const description = t("seo.project3.description");

    return (
        <>
            <Seo title={title} description={description} />
            <HeroSection
                src = {Fotoproyecto1}
                title = {t("project3.hero.title")}
                description = {t("project3.hero.description")}
            />
            <ProjectCardIntro 
                title={t("project3.intro.title")}
                description={t("project3.intro.description")}
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