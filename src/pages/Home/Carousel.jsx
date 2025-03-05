import { useState, useEffect } from "react";
import Fotoproyecto1 from "../../assets/images/proyecto-gmd-2022.webp";
import Serviciosmte from "../../assets/images/servicios-mte.webp";
import Fotoproyecto2 from "../../assets/images/proyecto-tula.webp";
import Button from "../../components/UI/Buttton";
import { useTranslation } from "react-i18next";

const imageMap = {
    Fotoproyecto1,
    Fotoproyecto2,
    Serviciosmte
};

const Carousel = () => {
    const { t } = useTranslation();
    const slides = t("carousel", { returnObjects: true });
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="carousel-home">
            <div className="carousel-inner">
                {slides.map((slide, index) => (
                    <div key={slide.id} className={`carousel-item ${index === currentIndex ? "active" : ""}`}>
                        <img src={imageMap[slide.image]} className="carousel-img" alt={slide.title} />
                        <div className="carousel-caption">
                            <h1>{slide.title}</h1>
                            <p>{slide.description}</p>
                            <Button text={slide.buttonText} to={slide.buttonLink} />
                        </div>
                    </div>
                ))}
            </div>
            <div className="carousel-indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`carousel-indicator ${index === currentIndex ? "active" : ""}`}
                        onClick={() => goToSlide(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
