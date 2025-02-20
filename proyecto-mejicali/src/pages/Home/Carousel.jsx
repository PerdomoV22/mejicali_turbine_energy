import Fotoproyecto1 from '../../assets/images/proyecto-gmd-2022.jpg';
import Serviciosmte from '../../assets/images/servicios-mte.jpg';
import Fotoproyecto2 from '../../assets/images/proyecto-tula.jpg';
import Button from '../../components/UI/buttton';

const Carousel = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active"  data-bs-interval="10000">
                    <img src={Fotoproyecto1} className="d-block w-100 carousel-img" alt="Proyecto GMD 2022" />
                    <div className="carousel-caption d-none d-md-block carousel-caption">
                        <h1>Mejicali Turbine Energy</h1>
                        <p>Desde 2021, nuestra misión es transformar la forma en que se suministra energía en el mundo. Con tecnología de vanguardia y soluciones rápidas, 
                        ayudamos a empresas a garantizar una estabilidad energética.</p>
                        <Button text="Conoce más" to="/servicios" />
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="10000">
                    <img src={Serviciosmte} className="d-block w-100 carousel-img" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Soluciones Energéticas Personalizadas</h1>
                        <p>No importa la complejidad del desafío, en MTE diseñamos soluciones a medida para garantizar un suministro eficiente y adaptable. 
                            Desde generación de energía de emergencia hasta instalaciones a gran escala.</p>
                        <Button text="Conoce más" to="/servicios" />
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={Fotoproyecto1} className="d-block w-100 carousel-imgcarousel-img" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Proyectos en 60 Días</h1>
                        <p>En MTE, nos especializamos en cumplir retos ambiciosos. El proyecto GDM de 130.4 MW fue ejecutado en tiempo récord, asegurando un 
                            suministro confiable de energía y estableciendo un nuevo estándar en eficiencia.</p>
                        <Button text="Conoce más" to="/proyectos" />
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={Fotoproyecto2} className="d-block w-100 carousel-imgcarousel-img" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Energía para la Refinería</h1>
                        <p>Implementamos una solución energética innovadora en la Refinería Tula, instalando 
                            un transformador temporal de 20 MVA en tiempo récord.</p>
                        <Button text="Conoce más" to="/proyectos/proyecto4" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;