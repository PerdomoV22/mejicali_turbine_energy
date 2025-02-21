import { FaBuilding, FaTools, FaHandshake } from "react-icons/fa";
import { JackInTheBox } from "react-awesome-reveal";
import Button from "../../components/UI/buttton";

// Datos de las tarjetas
const cardsData = [
    {
        id: 1,
        icon: <FaBuilding className="icon" />,
        title: "NUESTRA EMPRESA",
        description:
            "Comprometidos con la excelencia en construcción, ofrecemos soluciones innovadoras y de calidad.",
        link: "/sobre-nosotros",
    },
    {
        id: 2,
        icon: <FaTools className="icon" />,
        title: "NUESTROS SERVICIOS",
        description:
            "Desde planificación hasta ejecución, brindamos servicios de construcción y mantenimiento con los más altos estándares.",
        link: "/sobre-nosotros",
    },
    {
        id: 3,
        icon: <FaHandshake className="icon" />,
        title: "COMPROMISO",
        description:
            "Nos dedicamos a la satisfacción de nuestros clientes con un enfoque basado en confianza, calidad y cumplimiento.",
        link: "/sobre-nosotros",
    },
];

// Componente de tarjeta individual
const CardItem = ({ icon, title, description, link }) => (
    <div className="col-sm-6 d-flex">
        <div className="card h-100 card-about">
            <div className="card-body d-flex flex-column">
                <JackInTheBox>
                    {icon}
                    <h5 className="card-title">{title}</h5>
                    <hr />
                    <p className="card-text flex-grow-1">{description}</p>
                    <Button text="Conoce más" to={link} />
                </JackInTheBox>
            </div>
        </div>
    </div>
);

// Componente principal que renderiza todas las tarjetas
const Cards = () => {
    return (
        <div className="row bottom-margin max-width cards-about">
            {cardsData.map((card) => (
                <CardItem
                    key={card.id}
                    icon={card.icon}
                    title={card.title}
                    description={card.description}
                    link={card.link}
                />
            ))}
        </div>
    );
};

export default Cards;
