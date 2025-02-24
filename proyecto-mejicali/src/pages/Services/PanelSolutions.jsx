import { GiEnergise } from "react-icons/gi";
import { IoSettings } from "react-icons/io5";
import { FaFire } from "react-icons/fa";
import { IoTime } from "react-icons/io5";

const solutions = [
    {
        icon: <GiEnergise className='solution-icon' color='green'/>, 
        title: 'Subestaciones móviles',
        description: 'Para una rápida implementación en situaciones críticas.',
    },
    {
        icon: <IoSettings className='solution-icon' color='gray'/>,
        title: 'Proyectos de generación con motores',
        description: 'Adaptados para operaciones eficientes en diversas condiciones.',
    },
    {
        icon: <FaFire className='solution-icon' color='yellow'/>,
        title: 'Proyectos de generación con turbinas',
        description: 'A diésel y gas natural, con capacidades desde 10 MW hasta 500 MW.',
    },
    {
        icon: <IoTime className='solution-icon'/>,
        title: 'Instalación rápida',
        description: 'Soluciones de energía en menos de 60 días, garantizando rapidez sin comprometer la calidad.',
    },
];

const PanelSolutions = () => {
    return (
        <section className="energy-solutions bottom-margin">
            <h2 className="section-title">Soluciones de Energía Eléctrica por Emergencia</h2>
            <div className="cards-container">
                {solutions.map(({icon, title, description}, index) => (
                    <div key={index} className="card">
                        {icon}
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PanelSolutions;