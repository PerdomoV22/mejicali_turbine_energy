import { FaCheckSquare } from 'react-icons/fa';

const ProjectScope = ({srcImage, dataProjectScope, dataProjectMoreScope}) => {
    return (
        <section className="project-scope max-width bottom-margin">
            <div className="image-container">
                <img src={srcImage} alt="Proyecto en desarrollo" className="image"/>
            </div>
            <div className="content">
                <h1 className="title">Alcance del Proyecto</h1>
                <ul className="scope-list">
                    {dataProjectScope.map((item, index) => (
                        <li key={index} className="scope-item">
                        <span className="text">
                            <FaCheckSquare className="icon" />
                            </span > {item}
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