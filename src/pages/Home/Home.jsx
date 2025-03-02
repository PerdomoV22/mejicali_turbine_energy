import Carousel from "./Carousel";
import Cards from "./Cards";
import PartProjects from "./Part-Projects";
import { Contact } from "./Contact";
import PartServices from "./Part-Servicies";

const Home = () => {
    return (
        <>
            <Carousel />
            <Cards />
            <PartServices />
            <PartProjects />
            <Contact />
        </>
    );
};
export default Home;
