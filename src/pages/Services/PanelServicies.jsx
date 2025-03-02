import StepCircle from "../../components/UI/StepCircle";

const PanelServicies = () => {

const steps = [
    { number: "1", description: "Suministro de turbinas y transformadores elevadores." },
    { number: "2", description: "Sistemas de filtración de diésel y gas, válvulas de gas." },
    { number: "3", description: "Subestaciones temporales, plantas de tratamiento de agua." },
    { number: "4", description: "Líneas de transmisión y equipos de media y alta tensión." },
];

    return (
        <>
            <section className="container-panel bottom-margin download-section">
                <div className="download-header">
                    <h2>Expertos en Proyectos de Energía Rápida</h2>
                    <p>
                        Somos expertos en la construcción, instalación, puesta en marcha, operación y mantenimiento de proyectos de energía 
                        eléctrica de rápida implementación (fast-track). MTE ha desarrollado, operado y mantenido con éxito más de 260 MW de 
                        potencia en menos de dos meses en México y el Caribe.
                    </p>
                </div>
                <div className="steps-container">
                    {steps.map((step, index) => (
                    <StepCircle key={index} number={step.number} description={step.description} />
                    ))}
                </div>
            </section>
        </>
    );
}

export default PanelServicies;