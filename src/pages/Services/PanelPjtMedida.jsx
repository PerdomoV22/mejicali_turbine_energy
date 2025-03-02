import { useState, useEffect } from "react";
const proyectos = [
    {
        title: "Adecuación del terreno",
        description:"Preparación del terreno destinado para la solución energética.",
    },
    {
        title: "Diseño e ingeniería integral",
        description: "Diseño, ingeniería e implementación de la infraestructura necesaria.",
    },
    {
        title: "Instalación de sistemas de filtración",
        description:"Instalación y puesta en marcha de sistemas de filtración de gas y diésel (skids).",
    },
    {
        title: "Operación y mantenimiento",
        description: "Operación y mantenimiento de subestaciones eléctricas.",
    },
    {
        title: "Suministro de turbinas",
        description: "Suministro de turbinas de combustible dual y motores de combustión interna.",
    },
    {
        title: "Modelos de negocio personalizados",
        description: "Desarrollo de modelos de negocio y estructuras comerciales competitivas.",
    },
    {
        title: "Ingeniería de detalle",
        description: "Optimización de la eficiencia mediante ingeniería de detalle.",
    },
    {
        title: "Construcción de líneas de transmisión",
        description: "Construcción de líneas de transmisión y expansión de subestaciones eléctricas.",
    },
    {
        title: "Plantas de tratamiento de agua",
        description: "Suministro e instalación de plantas de tratamiento de agua.",
    },
        {
        title: "Supervisión de contratos",
        description: "Supervisión de contratos asegurando estándares de calidad y plazos.",
    },
];

const PanelPjtMedida = () => {

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
                <h2 className="section-title">Proyectos a Medida</h2>
                <p className="section-subtitle">
                    Desarrollamos soluciones personalizadas adaptadas a tus necesidades.
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