import imagenQueNosDistingue from '../../assets/images/imagenQueNosDistingue.jpg';
import imagenNuestraHistoria from '../../assets/images/imagenNuestraHistoria.jpg';

const infoData = [
    {
        id: 1,
        title: "¿Qué Nos Distingue?",
        text: "Ofrecemos soluciones competitivas y personalizadas, utilizando tecnologías que se adaptan a las necesidades específicas de nuestros clientes. Nuestra capacidad para combinar tecnologías nos permite optimizar resultados y superar expectativas.",
        image: imagenQueNosDistingue,
        alt: "Imagen de nuestro grupo de trabajo",
        reverse: false
    },
    {
        id: 2,
        title: "Nuestra Historia",
        text: "Fundada en 2021, junto con nuestra filial Generación de Mejicali, la empresa nació para ofrecer soluciones de energía eléctrica en situaciones de emergencia. Nuestro primer gran hito fue la instalación de cinco turbinas GE TM2500 generación 6 en menos de 60 días, incluyendo la obra civil del sitio.",
        image: imagenNuestraHistoria,
        alt: "Imagen de nuestra historia",
        reverse: true
    }
];

const InfoSection = () => {
    return (
        <section className="container-info bottom-margin max-width">
            {infoData.map(({ id, title, text, image, alt, reverse }) => (
                <div key={id} className={`container-section-info ${reverse ? 'reverse' : ''}`}>
                    <div className="container-section-image">
                        <img className="imagen-info" src={image} alt={alt} />
                    </div>
                    <div className="container-info-text">
                        <h2>{title}</h2>
                        <hr />
                        <p>{text}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default InfoSection;
