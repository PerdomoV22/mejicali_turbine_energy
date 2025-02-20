import Carousel from "./Carousel";
import Cards from "./Cards";
import Card from "../../components/UI/Card";
import PartProjects from "./Part-Projects";
import { Contact } from "./Contact";

const Home = () => {
    return (
        <>
            <Carousel />
            <Cards />
            <section className="container-servicies bottom-margin max-width">
                <div className="container-division-top">
                    <h2 className="title-servicies">Nuestros Servicios y Soluciones</h2>
                    <hr />
                    <p className="text-servicies m-text">
                        En Mejicali Turbine Energy, ofrecemos una amplia gama de soluciones energéticas 
                        diseñadas para adaptarse a las necesidades específicas de cada cliente. Nuestra 
                        experiencia y capacidad de respuesta rápida nos permiten brindar resultados 
                        excepcionales en tiempos récord. 
                    </p>
                </div>
                <div className="row max-width bottom-margin cards-servicies"> 
                    <Card 
                        title="Energía Rápida" 
                        description="Somos expertos en la construcción, instalación, puesta en marcha, operación y mantenimiento de proyectos de energía eléctrica de rápida implementación (fast-track)." 
                        to="/servicios" 
                    />
                    <Card 
                        title="Proyectos a Medida" 
                        description="Nos especializamos en el desarrollo de proyectos personalizados, adaptando cada solución desde cero." 
                        to="/servicios" 
                    />
                </div>
            </section>
            <PartProjects />
            <Contact />
        </>
    );
};
export default Home;
