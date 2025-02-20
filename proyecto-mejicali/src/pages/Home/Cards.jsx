import { FaBuilding, FaTools, FaHandshake } from "react-icons/fa";
import { JackInTheBox } from "react-awesome-reveal";
import Button from "../../components/UI/buttton";


const Cards = () => {
    return (
        <div className="row bottom-margin max-width cards-about">
            <div className="col-sm-6 d-flex">
                <div className="card h-100 card-about">
                    <div className="card-body d-flex flex-column">
                        <JackInTheBox>
                            <FaBuilding className="icon"/>
                            <h5 className="card-title">NUESTRA EMPRESA</h5>
                            <hr />
                            <p className="card-text flex-grow-1">Comprometidos con la excelencia en construcción, ofrecemos soluciones innovadoras y de calidad.</p>
                            <Button text="Conoce más" to="/about" />
                        </JackInTheBox>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 d-flex">
                <div className="card h-100 card-about">
                    <div className="card-body d-flex flex-column">
                        <JackInTheBox>
                            <FaTools className="icon"/>
                            <h5 className="card-title">NUESTROS SERVICIOS</h5>
                            <hr />
                            <p className="card-text flex-grow-1">Desde planificación hasta ejecución, brindamos servicios de construcción y mantenimiento con los más altos estándares.</p>
                            <Button text="Conoce más" to="/about" />
                        </JackInTheBox>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 d-flex">
                <div className="card h-100 card-about">
                    <div className="card-body d-flex flex-column">
                        <JackInTheBox>
                            <FaHandshake className="icon"/>
                            <h5 className="card-title">COMPROMISO</h5>
                            <hr />
                            <p className="card-text flex-grow-1">Nos dedicamos a la satisfacción de nuestros clientes con un enfoque basado en confianza, calidad y cumplimiento. </p>
                            <Button text="Conoce más" to="/about" />
                        </JackInTheBox>    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;