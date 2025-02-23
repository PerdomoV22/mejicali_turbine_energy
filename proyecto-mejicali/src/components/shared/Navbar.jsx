import logo from '/src/assets/images/logo-mte.png';
import { Link } from 'react-router-dom';

const navLinks = [
    { label: 'Sobre Nosotros', path: '/sobre-nosotros' },
    { label: 'Servicios', path: '/servicios' },
    { 
        label: 'Proyectos', 
        path: '/proyectos', 
        submenu: [
            { label: 'Proyecto GMD 2022', path: '/proyectos' },
            { label: 'Proyecto GMD 2021', path: '/proyectos/proyecto2' },
            { label: 'Proyecto Palo Seco', path: '/proyectos/proyecto3' },
            { label: 'Proyecto S.E. Movil Tula', path: '/proyectos/proyecto4' }
        ]
    },
    { label: 'Contáctanos', path: '/contact' }
];

const NavItem = ({ label, path, submenu }) => (
    <li className={`nav-item${submenu ? ' dropdown' : ''}`}>
        {submenu ? (
            <>
                <Link className="nav-link color-link dropdown-toggle" to={path} id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {label}
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    {submenu.map((item, index) => (
                        <Link key={index} className="nav-link color-text" to={item.path}>{item.label}</Link>
                    ))}
                </ul>
            </>
        ) : (
            <Link className="nav-link color-link" to={path}>{label}</Link>
        )}
    </li>
);

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
            <div className="container-fluid-navbar">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Logo" width="90" height="30" className="d-inline-block align-text-top" />
                </Link>
            </div>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    {navLinks.map((navItem, index) => (
                        <NavItem key={index} {...navItem} />
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;