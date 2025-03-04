import { Link } from "react-router-dom";
import { IoInformationCircleSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const CardImage = ({to, url, alt, description}) => {

    // Traduccion de la pagina
    const { t } = useTranslation();

    return (
        <div className="col d-flex card-image">
            <div className="card h-100 card-prin-pjt">
                <Link to ={to} className="card h-100 card-link">
                    <div>
                        <img src={url} className="card-img-top" alt={alt} />
                        <IoInformationCircleSharp className="button-card-image" size={30} />
                    </div>
                    
                    <div className="card-body card-body-pjt">
                    <h5 className="card-title card-title-pjt">{t('cardImage.title')}</h5>
                        <p className="card-text card-text-pjt">{description}</p>
                    </div>
                </Link>    
            </div>
        </div>
    );
}

export default CardImage;