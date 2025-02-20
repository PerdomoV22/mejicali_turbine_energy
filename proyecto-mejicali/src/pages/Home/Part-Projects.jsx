import CardImage from "../../components/UI/CardImage";
import { Fade } from "react-awesome-reveal";     
import ImageProyecto3 from "../../assets/images/proyecto-puertorico.png";
import ImageProyecto2 from "../../assets/images/proyecto-gmd-2021.jpg";

const PartProjects = () => {
    return (
        <section className="color-container-pjt">
            <div className="container-pjt bottom-margin max-width">
                <div className="con-pjt">
                    <div className="two-column">
                        <div className="left-column">
                        <Fade cascade>
                            <h2 className="title-pjt">
                                ¿Buscas soluciones <span className="animacion">energéticas eficientes y probadas?</span>
                            </h2>
                            <p className="description-pjt">
                                Enfrentamos grandes desafíos con soluciones innovadoras. Descubre cómo hemos ayudado a nuestros clientes a optimizar su 
                                infraestructura energética con proyectos exitosos que garantizan eficiencia, rapidez y confiabilidad.
                            </p>
                        </Fade>
                            
                        </div>
                        <div className="right-column">
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                <CardImage
                                    to = "/proyectos/proyecto2"
                                    url = {ImageProyecto2}
                                    alt = "Proyecto GMD 2021"
                                    description = "Energía confiable en tiempo récord con tecnología avanzada."
                                />
                                <CardImage 
                                    to = "/proyectos/proyecto3"
                                    url = {ImageProyecto3}
                                    alt = "Proyecto puerto rico"
                                    description = "Instalación eficiente de turbinas TM2500 para garantizar suministro eléctrico."
                                />
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </section>
    );
};

export default PartProjects;