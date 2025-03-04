const PanelInfoProjects = ({ word, title, infoData, icons }) => {
    return (
        <section className="panel-info-projects max-width">
            <h2 className="panel-info-projects__title">
                <span>{word}</span> {title}
            </h2>
            <div className="panel-info-projects__grid">
                {infoData.map((item, index) => (
                    <div key={index} className="panel-info-projects__item">
                        <div className="panel-info-projects__icon">{icons[index]}</div>
                        <h3 className="panel-info-projects__item-title">{item.title}</h3>
                        <p className="panel-info-projects__item-description">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PanelInfoProjects;
