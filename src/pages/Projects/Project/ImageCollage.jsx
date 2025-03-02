const ImageCollage = ({img1, img2, img3}) => {
    return (
        <div className="collage">
            <img src={img1} alt="Collage 1" className="collage__image" />
            <img src={img2} alt="Collage 2" className="collage__image" />
            <img src={img3} alt="Collage 3" className="collage__image" />
        </div>
    );
};

export default ImageCollage;
