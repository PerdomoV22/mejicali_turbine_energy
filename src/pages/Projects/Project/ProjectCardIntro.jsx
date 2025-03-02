
const ProjectCard = ({title, description}) => {
    return (
      <section className="about max-width">
        <h2 className="about__title">{title}</h2>
        <p className="about__subtitle">Mejicali Turbine Energy</p>
        <hr className="about__divider" />
        <p className="about__description">{description}</p>
      </section>
    );
};

export default ProjectCard;