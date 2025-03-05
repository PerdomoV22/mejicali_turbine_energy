import HeroSection from "../../components/UI/HeroSection";
import Fotoproyecto1 from '../../assets/images/proyecto-gmd-2022.webp';
import PanelServicies from "./PanelServicies";
import PanelSolutions from "./PanelSolutions";
import PanelPjtMedida from "./PanelPjtMedida";
import { useTranslation } from "react-i18next";
import Seo from "../../components/seo/seo";

const Services = () => {    

    // Traduccion de la pagina web 
    const { t } = useTranslation();
    const title = t("seo.services.title");
    const description = t("seo.services.description");

    return (
        <>
            <Seo title={title} description={description} />
            <HeroSection
                src = {Fotoproyecto1}
                title={t("hero-services.title")}
                description={t("hero-services.description")}
            />
            <PanelServicies />
            <PanelSolutions />
            <PanelPjtMedida />
        </>
    )
}

export default Services;