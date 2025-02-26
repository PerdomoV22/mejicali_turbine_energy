import { useEffect, useRef } from "react";
import Fotoproyecto1 from "../../assets/images/proyecto-gmd-2022.jpg";
import Serviciosmte from "../../assets/images/servicios-mte.jpg";
import Fotoproyecto2 from "../../assets/images/proyecto-tula.jpg";
import Button from "../../components/UI/buttton";

const slides = [
    {
        id: 0,
        image: Fotoproyecto1,
        title: "Mejicali Turbine Energy",
        description:
            "Desde 2021, nuestra misión es transformar la forma en que se suministra energía en el mundo. Con tecnología de vanguardia y soluciones rápidas, ayudamos a empresas a garantizar una estabilidad energética.",
        buttonText: "Conoce más",
        buttonLink: "/servicios",
    },
    {
        id: 1,
        image: Serviciosmte,
        title: "Soluciones Energéticas Personalizadas",
        description:
            "No importa la complejidad del desafío, en MTE diseñamos soluciones a medida para garantizar un suministro eficiente y adaptable. Desde generación de energía de emergencia hasta instalaciones a gran escala.",
        buttonText: "Conoce más",
        buttonLink: "/servicios",
    },
    {
        id: 2,
        image: Fotoproyecto1,
        title: "Proyectos en 60 Días",
        description:
            "En MTE, nos especializamos en cumplir retos ambiciosos. El proyecto GDM de 130.4 MW fue ejecutado en tiempo récord, asegurando un suministro confiable de energía y estableciendo un nuevo estándar en eficiencia.",
        buttonText: "Conoce más",
        buttonLink: "/proyectos",
    },
    {
        id: 3,
        image: Fotoproyecto2,
        title: "Energía para la Refinería",
        description:
            "Implementamos una solución energética innovadora en la Refinería Tula, instalando un transformador temporal de 20 MVA en tiempo récord.",
        buttonText: "Conoce más",
        buttonLink: "/proyectos/proyecto4",
    },
];

const Carousel = () => {
    
    //const carouselRef  = useRef(null);

    useEffect(() => {
        const initializeCarousel = () => {
            const carouselElement = document.getElementById("carouselExampleCaptions");
            if (carouselElement && window.bootstrap) {
                    const carousel = new window.bootstrap.Carousel(carouselElement, {
                    interval: 25000, // Cambia cada 5 segundos
                    ride: "carousel", // Activa el modo automático
                });
                // Forzar la inicialización del primer ítem
                carousel.to(0); // Asegura que el primer ítem sea visible
            } else {
                console.error("Bootstrap Carousel no está disponible.");
            }
        };
    
        // Espera un breve momento para asegurar que Bootstrap esté cargado
        setTimeout(initializeCarousel, 5000);
    }, []);

    return (
        <div id="carouselExampleCaptions" className="carousel slide carousel-home" data-bs-ride="carousel">
            {/* Indicadores */}
            <div className="carousel-indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={index}
                        className={index === 0 ? "active" : ""}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div> 

            {/* Contenido del Carrusel */}
            <div className="carousel-inner">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`carousel-item ${index === 0 ? "active" : ""}`}
                        data-bs-interval="2000"
                    >
                        <img src={slide.image} className="d-block w-100 carousel-img" alt={slide.title} />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>{slide.title}</h1>
                            <p>{slide.description}</p>
                            <Button text={slide.buttonText} to={slide.buttonLink} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
