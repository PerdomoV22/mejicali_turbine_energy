import { FaCheckSquare } from 'react-icons/fa';

const ProjectDetails = ({srcImage, projectDetails}) => {
    return (
        <section className="project-details max-width bottom-margin">
            <div className="content">
                <h1 className="title">Detalles del Proyecto</h1>
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
                <img src={srcImage} alt="Wind Turbine" className="image" />
            </div>
        </section>
    );
};

export default ProjectDetails;