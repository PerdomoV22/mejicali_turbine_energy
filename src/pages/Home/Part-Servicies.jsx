import Card from "../../components/UI/Card";
import { useTranslation } from "react-i18next";

const PartServices = () => {

    // Traduccion de la pagina
    const { t } = useTranslation();
    const services = t("services", { returnObjects: true }); // Obtiene el JSON completo

    return (
        <section className="container-services bottom-margin max-width">
            <div className="container-division-top">
                <h2 className="title-services">{services.title}</h2>
                <hr />
                <p className="text-services m-text">
                    {services.description}
                </p>
            </div>
            <div className="row max-width bottom-margin cards-servicies"> 
                {services.cards.map((card, index) => (
                    <Card 
                        key={index}
                        title={card.title}
                        description={card.description}
                        text={card.text}
                        to={card.to}
                    />
                ))}
            </div>
        </section>
    );
};

export default PartServices;
