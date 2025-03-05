import { FaCheckSquare } from 'react-icons/fa';
import Zoom from "react-medium-image-zoom";
import 'react-medium-image-zoom/dist/styles.css'
import { useTranslation } from "react-i18next";

const ProjectScope = ({srcImage, dataProjectScope, dataProjectMoreScope}) => {

    // Traduccion de la pagina
    const { t } = useTranslation();

    return (
        <section className="project-scope max-width bottom-margin">
            <div className="image-container">
                <Zoom>
                    <img src={srcImage} alt="Proyecto en desarrollo" className="image"/>
                </Zoom>
            </div>
            <div className="content">
                <h3 className="title">{t('panelScope.title')}</h3>
                <ul className="scope-list">
                    {dataProjectScope.map((item, index) => (
                        <li key={index} className="scope-item">
                            <FaCheckSquare className="icon" />
                            <span className="text">{item}</span > 
                        </li>
                    ))}
                </ul>
                {dataProjectMoreScope.map((item, index) => (
                    <p key={index}>
                        <strong>{item.title}</strong> {item.description}
                    </p>
                ))}
            </div>
        </section>
    );
};

export default ProjectScope; 