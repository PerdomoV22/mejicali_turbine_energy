import { useTranslation } from "react-i18next";
import { SlEnergy } from "react-icons/sl";
import { IoMdBatteryCharging } from "react-icons/io";
import { FaGears } from "react-icons/fa6";

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

    // Traduccion de la pagina
    const { t } = useTranslation();

    const panelSections = [
        {
            title: t("panel.vision.title"),
            description: t("panel.vision.description")
        },
        {
            title: t("panel.purpose.title"),
            description: t("panel.purpose.description")
        }
    ];

    const panelCards = [
        { icon: <IoMdBatteryCharging className="icon-panel" />, title: t("panel.cards.energy_reliable") },
        { icon: <SlEnergy className="icon-panel" />, title: t("panel.cards.energy_generation") },
        { icon: <FaGears className="icon-panel" />, title: t("panel.cards.advanced_technology") }
    ];

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
