import { useTranslation } from "react-i18next";
import { GiEnergise } from "react-icons/gi";
import { IoSettings, IoTime } from "react-icons/io5";
import { FaFire } from "react-icons/fa";

const icons = [
    <GiEnergise className="solution-icon" color="green" />,
    <IoSettings className="solution-icon" color="gray" />,
    <FaFire className="solution-icon" color="yellow" />,
    <IoTime className="solution-icon" color="black" />,
];

const PanelSolutions = () => {

    //Traduccion de la pagina
    const { t } = useTranslation();
    const solutions = t("panelSolutions.solutions", { returnObjects: true });

    return (
        <section className="energy-solutions bottom-margin">
            <h2 className="section-title">{t("panelSolutions.title")}</h2>
            <div className="cards-container">
                {solutions.map(({ title, description }, index) => (
                    <div key={index} className="card">
                        {icons[index]}
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PanelSolutions;
