import LogoFooter from "../../assets/images/logo-footer-mte.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="container-fluid container-footer">
            <div className="row container-sub-footer p-5 pb-1 text-white">
                <div className="col-xs-12 col-md-6 col-lg-3">
                    <Link to="/">
                        <img className="logo-footer" src={LogoFooter} alt="Logo MTE" />
                    </Link>
                </div>
                <div className="col-xs-12 col-md-6 col-lg-3">
                    <p className="h3 mb-3">Sobre Nosotros</p>
                    <div className="mb-2">
                        <Link className="color-link-footer" to="">Visión</Link>
                    </div>
                    <div className="mb-2">
                        <Link className="color-link-footer" to="">Nuestros Principios</Link>
                    </div>
                    <div className="mb-2">
                        <Link className="color-link-footer" to="">¿Qué Nos Distingue?</Link>
                    </div>
                </div>
                <div className="col-xs-12 col-md-6 col-lg-3">
                    <p className="h3 mb-3">Servicios</p>
                    <div className="mb-2">
                        <Link className="color-link-footer" to="">Energía Rápida</Link>
                    </div>
                    <div className="mb-2">
                        <Link className="color-link-footer" to="">Energía Eléctrica </Link>
                    </div>
                    <div className="mb-2">
                        <Link className="color-link-footer" to="">Proyectos a Medida</Link>
                    </div>
                </div>
                <div className="col-xs-12 col-md-6 col-lg-3">
                    <p className="h3 mb-3">Proyectos</p>
                    <div className="mb-2">
                        <Link className="color-link-footer" to="">Proyectos a Medida</Link>
                    </div>
                    <div className="mb-2">
                        <Link className="color-link-footer" to="">Proyectos a Medida</Link>
                    </div>
                    <div className="mb-2">
                        <Link className="color-link-footer" to="">Proyectos a Medida</Link>
                    </div>
                </div>
                <div className="col-xs-12 pt-4">
                    <hr />
                    <p className="text-center text-sm opacity-80">© {new Date().getFullYear()} MTE. Todos los derechos reservados.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;