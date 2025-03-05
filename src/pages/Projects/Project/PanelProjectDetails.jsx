import { FaCheckSquare } from 'react-icons/fa';
import { useTranslation } from "react-i18next";
import Zoom from "react-medium-image-zoom";
import 'react-medium-image-zoom/dist/styles.css'

const ProjectDetails = ({srcImage, projectDetails}) => {

    // Traduccion de la pagina
    const { t } = useTranslation();

    return (
        <section className="project-details max-width bottom-margin">
            <div className="content">
                <h3 className="title">{t('panelDetails.title')}</h3>
                <ul className="details-list">
                    {projectDetails.map((detail, index) => (
                        <li key={index} className="detail-item">
                            <FaCheckSquare className="icon" />
                            <span className="text">{detail}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="image-container">
                <Zoom>
                    <img src={srcImage} alt="Wind Turbine" className="image" />
                </Zoom>
                
            </div>
        </section>
    );
};

export default ProjectDetails;