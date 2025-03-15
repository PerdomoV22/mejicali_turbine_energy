import Carousel from "./Carousel";
import Cards from "./Cards";
import PartProjects from "./Part-Projects";
import { Contact } from "./Contact";
import PartServices from "./Part-Servicies";
import Seo from "../../components/seo/Seo";
import { useTranslation } from "react-i18next";


const Home = () => {

    // Traduccion 
    const { t } = useTranslation();
    const title = t("seo.home.title");
    const description = t("seo.home.description");

    return (
        <>
            <Seo title={title} description={description} />
            <Carousel />
            <Cards />
            <PartServices />
            <PartProjects />
            <Contact />
        </>
    );
};
export default Home;
