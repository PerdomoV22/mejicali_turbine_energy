import Carousel from "./Carousel";
import Cards from "./Cards";
import Card from "../../components/UI/Card";

const Home = () => {
    return (
        <>
            <Carousel />
            <Cards />
            <section className="container-servicies bottom-margin max-width">
                <h2 className="title-servicies">Nuestros Servicios y Soluciones</h2>
                <hr />
                <p className="text-servicies m-text">
                    En Mejicali Turbine Energy, ofrecemos una amplia gama de soluciones energéticas 
                    diseñadas para adaptarse a las necesidades específicas de cada cliente. Nuestra 
                    experiencia y capacidad de respuesta rápida nos permiten brindar resultados 
                    excepcionales en tiempos récord. 
                </p>
                <div className="row max-width bottom-margin cards-servicies"> 
                    <Card title="Energía Eólica" description="La energía eólica es una de las fuentes de energía más limpias y sostenibles del mundo. En Mejicali Turbine Energy, ofrecemos soluciones de energía eólica a medida para empresas y particulares." to="/servicios/energia-eolica" />
                    <Card title="Energía Solar" description="La energía solar es una de las fuentes de energía más limpias y sostenibles del mundo. En Mejicali Turbine Energy, ofrecemos soluciones de energía solar a medida para empresas y particulares." to="/servicios/energia-solar" />
                </div>
            </section>

        </>
    );
};
export default Home;
