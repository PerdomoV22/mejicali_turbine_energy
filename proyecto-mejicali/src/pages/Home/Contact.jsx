import { FaLightbulb } from "react-icons/fa";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";

export const Contact = () => {
    return (
        <>
            <section className="container-services bottom-margin max-width">
                <div className="container-division-top">
                    <h2 className="title-servicies">¡Energía confiable cuando más la necesitas!</h2>
                    <hr />
                    <p className="text-servicies m-text">
                        En MTE, sabemos que cada minuto cuenta cuando se trata de suministro energético. Por eso, 
                        ofrecemos soluciones diseñadas para garantizar un suministro seguro, eficiente y a la medida de tus necesidades. 
                        Nuestra experiencia en proyectos fast-track nos permite entregar infraestructura energética en tiempo récord, 
                        sin comprometer la calidad ni la seguridad. 
                    </p>
                    <p className="m-text m-sub">
                        <FaLightbulb className="icon-contac"/> Convierte los desafíos en oportunidades. Hablemos sobre tu próximo proyecto. <MdOutlineEnergySavingsLeaf className="icon-contac" color="red"/>
                    </p>
                </div>
                <div></div>
            </section>
        </>
    );
};