import { useTranslation } from "react-i18next";
import { SlEnergy } from "react-icons/sl";
import { FaLightbulb, FaRocket } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";

const Principles = () => {

    // Traduccion de la pagina
    const { t } = useTranslation();

    const principlesData = [
        { id: 1, icon: <SlEnergy color="green" className="tam-icon" />, title: t("principles.items.future.title"), text: t("principles.items.future.text") },
        { id: 2, icon: <FaLightbulb color="yellow" className="tam-icon" />, title: t("principles.items.innovation.title"), text: t("principles.items.innovation.text") },
        { id: 3, icon: <BsGraphUpArrow color="yellow" className="tam-icon" />, title: t("principles.items.transformation.title"), text: t("principles.items.transformation.text") },
        { id: 4, icon: <FaRocket color="green" className="tam-icon" />, title: t("principles.items.consistency.title"), text: t("principles.items.consistency.text") }
    ];

    return (
        <section className="container-principio bottom-margin max-width">
            <h2>{t("principles.title")} <FaLongArrowAltRight size={40} /> {t("principles.adaptability")}</h2>
            <div className="container-principio-items">
                {principlesData.map(({ id, icon, title, text }, index) => (
                    <div key={id} className={`item ${index % 2 === 0 ? 'container-item-impar' : 'container-item-par'}`}>
                        {icon}
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Principles;

