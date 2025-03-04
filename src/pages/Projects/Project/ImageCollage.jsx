import Zoom from "react-medium-image-zoom";
import 'react-medium-image-zoom/dist/styles.css';

const ImageCollage = ({ img1, img2, img3 }) => {
    return (
        <div className="collage">
            {[img1, img2, img3].map((img, index) => (
                <Zoom key={index}>
                    <img src={img} alt={`Collage ${index + 1}`} className="collage__image" />
                </Zoom>
            ))}
        </div>
    );
};

export default ImageCollage;

