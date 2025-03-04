import Fotoproyecto1 from '../../assets/images/proyecto-gmd-2022.jpg';
import PanelAbout from './PanelAbout';
import HeroSection from '../../components/UI/HeroSection';
import Principles from './Principales';
import InfoSection from './InfoSection';
import { useTranslation } from "react-i18next";

const About = () => {

    // Traduccion de la pagina
    const { t } = useTranslation();

    return (
        <>
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