import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const PanelPjtMedida = () => {

    // Traduccion de la pagina
    const { t } = useTranslation();
    const proyectos = t("panelPjtMedida.projects", { returnObjects: true });

    // Función auxiliar para dividir el array en grupos de 4
    const chunkArray = (array, size) => {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
        }
        return result;
    };

    const groupedProyectos = chunkArray(proyectos, 4);
    const [activeIndex, setActiveIndex] = useState(0);
    const goToSlide = (index) => {setActiveIndex(index);};

    // Animación automática
    useEffect(() => {
        const interval = setInterval(() => {
        setActiveIndex((prevIndex) =>
            prevIndex === groupedProyectos.length - 1 ? 0 : prevIndex + 1
        );
        }, 5000); // Cambia cada 5 segundos

        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, [groupedProyectos.length]);

    return (
        <section className="proyectos-a-medida bottom-margin max-width">
            <div className="container text-center">
                <h2 className="section-title">{t('panelPjtMedida.title')}</h2>
                <p className="section-subtitle">
                    {t('panelPjtMedida.subtitle')}
                </p>
                {/* Carousel Vertical */}
                <div className="vertical-carousel">
                    <div className="slides-container">
                        {groupedProyectos.map((group, groupIndex) => (
                            <div key={groupIndex} className={`slide ${activeIndex === groupIndex ? "active" : ""}`} >
                                <div className="row">
                                    {group.map((proyecto, index) => (
                                        <div key={index} className="col-md-3 mb-4">
                                            <div className="card h-100">
                                                <div className="card-body text-center">
                                                    <h5 className="card-title">{proyecto.title}</h5>
                                                    <p className="card-text">{proyecto.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Indicadores Circulares */}
                    <div className="indicators">
                        {groupedProyectos.map((_, index) => (
                            <span key={index} className={`indicator ${activeIndex === index ? "active" : ""}`}onClick={() => goToSlide(index)}></span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PanelPjtMedida;