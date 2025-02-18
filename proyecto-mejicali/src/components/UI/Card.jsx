import Button from "./buttton";

const Card = ({ title, description, to }) => {
    return (
        <div className="card" style="width: 18rem;">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <Button text="Ver más" to={to} />
            </div>
        </div>
    )
}

export default Card;