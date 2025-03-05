import Fotoproyecto1 from '../../assets/images/proyecto-gmd-2022.webp';
import PanelAbout from './PanelAbout';
import HeroSection from '../../components/UI/HeroSection';
import Principles from './Principales';
import InfoSection from './InfoSection';
import { useTranslation } from "react-i18next";
import Seo from '../../components/seo/seo';

const About = () => {

    // Traduccion de la pagina
    const { t } = useTranslation();
    const title = t("seo.about.title");
    const description = t("seo.about.description");

    return (
        <>
            <Seo title={title} description={description} />
            <HeroSection 
                src={Fotoproyecto1}
                title={t("hero-about.title")}
                description={t("hero-about.description")}
            />
            <PanelAbout />
            <Principles />
            <InfoSection />
        </>
    ); 
} 

export default About;