import { SlEnergy } from "react-icons/sl";
import { IoMdBatteryCharging } from "react-icons/io";
import { FaGears } from "react-icons/fa6";

const ContentPanel = () => {
    return (
        <>
            <div className="container-panel bottom-margin">
                <div className="container-panel-info">
                    <div className="container-colunm">
                        <h3 className="panel-title">Nuestra Vision</h3>
                        <p>Incursionar en el mercado global con soluciones de energía eléctrica innovadoras, utilizando diésel o gas natural, 
                            y ofreciendo capacidades que van desde 10 MW hasta 500 MW, adaptándonos a las necesidades específicas de cada cliente.
                        </p>
                    </div>
                    <div className="container-colunm">
                        <h3 className="panel-title">Nuestro Proposito</h3>
                        <p>
                            Instalar soluciones de energía eléctrica en diésel o gas natural en menos de 60 días, asegurando eficiencia operativa, 
                            sostenibilidad y excelencia técnica en cada proyecto.
                        </p>
                    </div>
                </div>
                <div className="container-panel-card">
                    <div className="card-column-left">
                        <div className="card-icon">
                            <IoMdBatteryCharging className="icon-panel"/>
                        </div>
                        <h3 className="card-title">Energía confiable</h3>
                    </div>
                    <div className="card-column-center">
                        <div className="card-icon">
                            <SlEnergy className="icon-panel"/>
                        </div>
                        <h3 className="card-title">Generación de energía</h3>
                    </div>
                    <div className="card-column-right">
                        <div className="card-icon">
                            <FaGears className="icon-panel"/>
                        </div>
                        <h3 className="card-title">Tecnología avanzada</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContentPanel;