import { useTranslation } from "react-i18next";
import imagenQueNosDistingue from "../../assets/images/imagenQueNosDistingue.jpg";
import imagenNuestraHistoria from "../../assets/images/imagenNuestraHistoria.jpg";

const InfoSection = () => {

    // Traduccion de la pagina
    const { t } = useTranslation();

    const infoData = [
        {
            id: 1,
            title: t("infoSection.sections.whatDistinguishesUs.title"),
            text: t("infoSection.sections.whatDistinguishesUs.text"),
            image: imagenQueNosDistingue,
            alt: t("infoSection.sections.whatDistinguishesUs.alt"),
            reverse: false
        },
        {
            id: 2,
            title: t("infoSection.sections.ourHistory.title"),
            text: t("infoSection.sections.ourHistory.text"),
            image: imagenNuestraHistoria,
            alt: t("infoSection.sections.ourHistory.alt"),
            reverse: true
        }
    ];

    return (
        <section className="container-info bottom-margin max-width">
            {infoData.map(({ id, title, text, image, alt, reverse }) => (
                <div key={id} className={`container-section-info ${reverse ? 'reverse' : ''}`}>
                    <div className="container-section-image">
                        <img className="imagen-info" src={image} alt={alt} />
                    </div>
                    <div className="container-info-text">
                        <h2>{title}</h2>
                        <hr />
                        <p>{text}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default InfoSection;

