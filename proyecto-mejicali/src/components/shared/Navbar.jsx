import logo from '/src/assets/images/logo-mte.png';
import { Link } from 'react-router-dom';
import { TbWorld } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

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

const NavItem = ({ label, path, submenu, closeMenu }) => (
    <li className={`nav-item${submenu ? ' dropdown' : ''}`}>
        {submenu ? (
            <>
                <Link 
                    className="nav-link color-link dropdown-toggle" 
                    to={path} 
                    id="navbarDropdownMenuLink" 
                    role="button" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"
                >
                    {label}
                </Link>
                <ul className="dropdown-menu dropdown-menu-items" aria-labelledby="navbarDropdownMenuLink">
                    {submenu.map((item, index) => (
                        <li key={index} onClick={closeMenu}>
                            <Link className="dropdown-item" to={item.path}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </>
        ) : (
            <Link className="nav-link color-link" to={path}>
                {label}
            </Link>
        )}
    </li>
);

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [language, setLanguage] = useState('Español'); // Estado para el idioma seleccionado

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
        
            {/* Logo */}
            <div className="container-fluid-navbar">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Logo" width="90" height="30" className="d-inline-block align-text-top" />
                </Link>
            </div>

            {/* Botón de cambio de idioma */}
            <div className="dropdown language-dropdown">
                <button 
                    className="btn btn-light dropdown-toggle" 
                    type="button" 
                    id="languageDropdown" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"
                >
                    <TbWorld className='icon-navbar-lenguaje'/> 
                    <span>{language}</span>
                </button>
                <ul className="dropdown-menu menu-language" aria-labelledby="languageDropdown">
                    <li>
                        <button 
                            className="dropdown-item" 
                            onClick={() => setLanguage('Español')}
                        >
                            Español
                        </button>
                    </li>
                    <li>
                        <button 
                            className="dropdown-item" 
                            onClick={() => setLanguage('Inglés')}
                        >
                            Ingles
                        </button>
                    </li>
                </ul>
            </div>

            {/* Botón hamburguesa */}
            <button className="hamburger" onClick={toggleMenu}>
                <GiHamburgerMenu size={24} />
            </button>

            {/* Botónes de menú */}
            <div className= {`collapse navbar-collapse navbar-menu ${menuOpen ? "open" : ""}`} id="navbarNavDropdown">
                <ul className="navbar-nav">
                    {navLinks.map((navItem, index) => (
                        <NavItem key={index} {...navItem} closeMenu={closeMenu}/>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;