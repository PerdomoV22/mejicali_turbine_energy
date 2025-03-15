import { Fade } from "react-awesome-reveal";
import CardImage from "../../components/UI/CardImage";
import ImageProyecto3 from "../../assets/images/proyecto-puertorico.webp";
import ImageProyecto2 from "../../assets/images/proyecto-gmd-2021.webp";
import { useTranslation } from "react-i18next";

// Mapeo de imágenes (porque las imágenes no están en JSON)
const projectImages = {
    "Proyecto GDM 2021": ImageProyecto2,
    "Proyecto Puerto Rico": ImageProyecto3,
    "GMD 2021 Project": ImageProyecto2,
    "Puerto Rico Project": ImageProyecto3
};

// Componente para cada proyecto
const ProjectItem = ({ to, url, alt, description }) => (
    <CardImage to={to} url={url} alt={alt} description={description} />
);

// Componente principal
const PartProjects = () => {

    // Traduccion de la pagina
    const { t } = useTranslation();
    const projects = t("projects", { returnObjects: true });

    return (
        <section className="color-container-pjt">
            <div className="container-pjt bottom-margin max-width">
                <div className="con-pjt">
                    <div className="two-column">
                        {/* Columna Izquierda */}
                        <div className="left-column">
                            <Fade cascade>
                                <h2 className="title-pjt">
                                    {projects.title}
                                </h2>
                                <p className="description-pjt">
                                    {projects.description}
                                </p>
                            </Fade>
                        </div>

                        {/* Columna Derecha */}
                        <div className="right-column">
                            <div className="row row-cols-1 row-cols-md-3 g-4 container-cards-info">
                                {projects.items.map((project) => (
                                    <ProjectItem
                                        key={project.id}
                                        to={project.to}
                                        url={projectImages[project.alt]}
                                        alt={project.alt}
                                        description={project.description}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartProjects;
