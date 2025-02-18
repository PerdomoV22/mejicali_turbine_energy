import logo from '/src/assets/images/react.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top" />
                        Mejicali Turbine Energy
                    </Link>
                </div>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <Link className="nav-link" aria-current="page" to="/">Sobre Nosotros</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link" aria-current="page" to="/servicios">Sobre Nosotros</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/proyectos" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Projectos
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link className="nav-link" aria-current="page" to="/proyectos">Proyecto1</Link>
                                <Link className="nav-link" aria-current="page" to="/proyectos/proyecto2">Proyecto2</Link>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contactanos</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;