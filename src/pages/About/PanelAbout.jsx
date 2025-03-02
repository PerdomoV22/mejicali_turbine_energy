import { SlEnergy } from "react-icons/sl";
import { IoMdBatteryCharging } from "react-icons/io";
import { FaGears } from "react-icons/fa6";

const panelSections = [
    {
        title: "Nuestra Visión",
        description: "Incursionar en el mercado global con soluciones de energía eléctrica innovadoras, utilizando diésel o gas natural, y ofreciendo capacidades que van desde 10 MW hasta 500 MW, adaptándonos a las necesidades específicas de cada cliente."
    },
    {
        title: "Nuestro Propósito",
        description: "Instalar soluciones de energía eléctrica en diésel o gas natural en menos de 60 días, asegurando eficiencia operativa, sostenibilidad y excelencia técnica en cada proyecto."
    }
];

const panelCards = [
    { icon: <IoMdBatteryCharging className="icon-panel" />, title: "Energía confiable" },
    { icon: <SlEnergy className="icon-panel" />, title: "Generación de energía" },
    { icon: <FaGears className="icon-panel" />, title: "Tecnología avanzada" }
];

const PanelSection = ({ title, description }) => (
    <div className="container-colunm">
        <h3 className="panel-title">{title}</h3>
        <p>{description}</p>
    </div>
);

const PanelCard = ({ icon, title }) => (
    <div className="card-column">
        <div className="card-icon">{icon}</div>
        <h3 className="card-title">{title}</h3>
    </div>
);

const ContentPanel = () => {
    return (
        <div className="container-panel bottom-margin">
            <div className="container-panel-info">
                {panelSections.map((section, index) => (
                    <PanelSection key={index} {...section} />
                ))}
            </div>
            <div className="container-panel-card">
                {panelCards.map((card, index) => (
                    <PanelCard key={index} {...card} />
                ))}
            </div>
        </div>
    );
};

export default ContentPanel;
