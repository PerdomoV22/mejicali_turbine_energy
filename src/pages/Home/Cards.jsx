import { FaBuilding, FaTools, FaHandshake } from "react-icons/fa";
import { JackInTheBox } from "react-awesome-reveal";
import Button from "../../components/UI/Buttton";
import { useTranslation } from "react-i18next";

const iconMap = {
    FaBuilding: <FaBuilding className="icon" />,
    FaTools: <FaTools className="icon" />,
    FaHandshake: <FaHandshake className="icon" />
};


// Componente de tarjeta individual
const CardItem = ({ icon, title, description, text, link }) => (
    <div className="col-sm-6 d-flex">
        <div className="card h-100 card-about">
            <div className="card-body d-flex flex-column">
                <JackInTheBox>
                    {icon}
                    <h5 className="card-title">{title}</h5>
                    <hr />
                    <p className="card-text flex-grow-1">{description}</p>
                    <Button text={text} to={link} />
                </JackInTheBox>
            </div>
        </div>
    </div>
);

// Componente principal que renderiza todas las tarjetas
const Cards = () => {

    // Traduccion de la pagina
    const { t } = useTranslation();
    const cardsData = t("cards", { returnObjects: true }); // Obtiene el array desde JSON

    return (
        <div className="row bottom-margin max-width cards-about">
            {cardsData.map((card) => (
                <CardItem
                    key={card.id}
                    icon={iconMap[card.icon]}
                    title={card.title}
                    description={card.description}
                    text={card.text}
                    link={card.link}
                />
            ))}
        </div>
    );
};

export default Cards;