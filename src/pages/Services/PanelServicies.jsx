import StepCircle from "../../components/UI/StepCircle";
import { useTranslation } from "react-i18next";

const PanelServicies = () => {

    // Traduccion de la pagina
    const { t } = useTranslation();
    const steps = t("panelServicies.steps", { returnObjects: true });

    return (
        <>
            <section className="container-panel bottom-margin download-section">
                <div className="download-header">
                    <h2>{t("panelServicies.title")}</h2>
                    <p>{t("panelServicies.description")}</p>
                </div>
                <div className="steps-container">
                    {steps.map((description, index) => (
                    <StepCircle key={index} number={index + 1} description={description} />
                    ))}
                </div>
            </section>
        </>
    );
}

export default PanelServicies;