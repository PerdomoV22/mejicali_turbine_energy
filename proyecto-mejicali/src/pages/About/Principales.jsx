import { SlEnergy } from "react-icons/sl";
import { FaLightbulb, FaRocket } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";

const principlesData = [
    { id: 1, icon: <SlEnergy color="green" className="tam-icon" />, title: "Futuro", text: "Dar soluciones de energía utilizando todas las tecnologías, incluyendo las de nueva generación." },
    { id: 2, icon: <FaLightbulb color="yellow" className="tam-icon" />, title: "Innovación", text: "Estar abiertos a nuevas ideas y métodos." },
    { id: 3, icon: <BsGraphUpArrow color="yellow" className="tam-icon" />, title: "Transformación", text: "Ajustar nuestras estrategias y planes según las tendencias emergentes y oportunidades del mercado." },
    { id: 4, icon: <FaRocket color="green" className="tam-icon" />, title: "Constancia", text: "Ajustar nuestras estrategias y planes según las tendencias emergentes y oportunidades del mercado." }
];

const Principles = () => {
    return (
        <section className="container-principio bottom-margin max-width">
            <h2>Nuestro Principio <FaLongArrowAltRight size={40} /> Adaptabilidad</h2>
            <div className="container-principio-items">
                {principlesData.map(({ id, icon, title, text }, index) => (
                    <div key={id} className={`item ${index % 2 === 0 ? 'container-item-impar' : 'container-item-par'}`}>
                        {icon}
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Principles;
