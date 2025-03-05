const HeroSection = ({src, title, description}) => {
    return (
            <div className='container-hero-section'>
                <div className="hero-image">
                        <img src={src} className="img-hero-section" alt={title} />
                        <div className="hero-text">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
            </div>
        ); 
}

export default HeroSection;