import { Link } from "react-router-dom";
import LogoFooter from "../../assets/images/logo-footer-mte.png"; 

const footerLinks = [
    {
        title: "Sobre Nosotros",
        links: [
            { text: "Visión", path: "" },
            { text: "Nuestros Principios", path: "" },
            { text: "¿Qué Nos Distingue?", path: "" },
        ],
    },
    {
        title: "Servicios",
        links: [
            { text: "Energía Rápida", path: "" },
            { text: "Energía Eléctrica", path: "" },
            { text: "Proyectos a Medida", path: "" },
        ],
    },
    {
        title: "Proyectos",
        links: [
            { text: "Proyecto GMD 2022", path: "/proyectos" },
            { text: "Proyecto GMD 2021", path: "/proyectos/proyecto2" },
            { text: "Proyecto Palo Seco", path: "/proyectos/proyecto3" },
            { text: "Proyecto S.E. Movil Tula", path: "/proyectos/proyecto4" },
        ],
    },
];

const Footer = () => {
    return (
        <footer className="container-fluid container-footer">
            <div className="row container-sub-footer p-5 pb-1 text-white">
                {/* Logo */}
                <div className="footer-logo col-12 col-md-6 col-lg-3">
                    <Link to="/">
                        <img className="logo-footer" src={LogoFooter} alt="Logo MTE" />
                    </Link>
                </div>
                {/* Secciones dinámicas de enlaces */}
                {footerLinks.map((section, index) => (
                    <div key={index} className={`col-12 col-md-6 col-lg-3 item item${index + 2}`}>
                        <p className="h3 mb-3">{section.title}</p>
                        {section.links.map((link, i) => (
                            <div key={i} className="mb-2">
                                <Link className="color-link-footer" to={link.path}>
                                    {link.text}
                                </Link>
                            </div>
                        ))}
                    </div>
                ))}
                {/* Derechos de autor */}
                <div className="footer-copy col-12 pt-4">
                    <hr />
                    <p className="text-center text-sm opacity-80">
                        © {new Date().getFullYear()} MTE. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
