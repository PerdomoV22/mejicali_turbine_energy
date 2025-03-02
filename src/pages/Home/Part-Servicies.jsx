import Card from "../../components/UI/Card";

const PartServices = () => {
    return (
        <section className="container-services bottom-margin max-width">
            <div className="container-division-top">
                <h2 className="title-services">Nuestros Servicios y Soluciones</h2>
                <hr />
                <p className="text-services m-text">
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
    );
};

export default PartServices;
