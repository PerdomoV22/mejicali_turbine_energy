import { useState } from "react";

const PanelCarouselVideo = ({ mediaItems }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Funciones para manejar las flechas
    const prevSlide = () => {
        setSelectedIndex((prevIndex) => (prevIndex === 0 ? mediaItems.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setSelectedIndex((prevIndex) => (prevIndex === mediaItems.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="carousel bottom-margin">
            <div className="carousel-main">
                {mediaItems[selectedIndex].type === "video" ? (
                    <video controls className="carousel-media">
                        <source src={mediaItems[selectedIndex].src} type="video/mp4" />
                    </video>
                ) : (
                    <img src={mediaItems[selectedIndex].src} alt="Media" className="carousel-media" />
                )}
            </div>

            {/* Contenedor de miniaturas con flechas */}
            <div className="carousel-controls">
                <button className="carousel-arrow left" onClick={prevSlide}>❮</button>

                <div className="carousel-thumbnails">
                    {mediaItems.map((item, index) => (
                        <div
                            key={index}
                            className={`thumbnail ${index === selectedIndex ? "active" : ""}`}
                            onClick={() => setSelectedIndex(index)}
                        >
                            <img src={item.thumbnail || item.src} alt={item.alt || "Media"} className="thumbnail-media" />
                        </div>
                    ))}
                </div>

                <button className="carousel-arrow right" onClick={nextSlide}>❯</button>
            </div>
        </div>
    );
};

export default PanelCarouselVideo;


