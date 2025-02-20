import Button from "./buttton";
import { MdEnergySavingsLeaf } from "react-icons/md";

const Card = ({ title, description, to }) => {
    return (
        <div className="col-sm-6 d-flex">
            <div className="card h-100 card-serv">
                <div className="card-body card-boby-servicies">
                    <div className="card-cabeza-servicies">
                        <MdEnergySavingsLeaf className="card-icon"/>
                        <h5 className="card-title-servicies">{title}</h5>
                    </div>
                    <p className="card-text">{description}</p>
                    <Button text="Más información" to={to} /> 
                </div>
            </div>            
        </div>
    )
}

export default Card;
