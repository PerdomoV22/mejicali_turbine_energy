import logo from '/src/assets/images/logo-mte.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
                <div className="container-fluid-navbar">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="" width="90" height="30" className="d-inline-block align-text-top" />
                    </Link>
                </div>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <Link className="nav-link color-link" aria-current="page" to="/about">Sobre Nosotros</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link color-link" aria-current="page" to="/servicios">Servicios</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link color-link dropdown-toggle" to="/proyectos" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Projectos
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link className="nav-link color-text" aria-current="page" to="/proyectos">Proyecto GMD 2022</Link>
                                <Link className="nav-link color-text" aria-current="page" to="/proyectos/proyecto2">Proyecto GMD 2021</Link>
                                <Link className="nav-link color-text" aria-current="page" to="/proyectos/proyecto3">Proyecto Palo Seco</Link>
                                <Link className="nav-link color-text" aria-current="page" to="/proyectos/proyecto4">Proyecto S.E. Movil Tula</Link>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link color-link" to="/contact">Contactanos</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;