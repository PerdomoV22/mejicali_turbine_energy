import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Importar useLocation
import { GiHamburgerMenu } from "react-icons/gi";
import { TbWorld } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import logo from '/src/assets/images/logo-mte.png';

const Navbar = () => {

    // Menu cambio de idioma 
    const [menuOpen, setMenuOpen] = useState(false);
    const [language, setLanguage] = useState('Español');
    const { t, i18n } = useTranslation();
    const location = useLocation(); // Hook para detectar cambios de ruta

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    // Funcionalidad para cambiar el idioma de la pagina
    const changeLanguage = (langCode, langLabel) => {
        i18n.changeLanguage(langCode);
        setLanguage(langLabel);
    };

    // Cierra el menú automáticamente cuando cambia la ruta
    useEffect(() => {
        closeMenu();
    }, [location.pathname]);

    // Data de la navegacion
    const navLinks = [
        { label: t('nav.about'), path: '/sobre-nosotros' },
        { label: t('nav.services'), path: '/servicios' },
        { 
            label: t('nav.projects'), 
            path: '/proyectos', 
            submenu: [
                { label: t('nav.project1'), path: '/proyectos' },
                { label: t('nav.project2'), path: '/proyectos/proyecto2' },
                { label: t('nav.project3'), path: '/proyectos/proyecto3' },
                { label: t('nav.project4'), path: '/proyectos/proyecto4' }
            ]
        },
        { label: t('nav.contact'), path: '/contact' }
    ];

    return (
        <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
            <div className="container-fluid-navbar">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Logo MTE" width="90" height="30" className="d-inline-block align-text-top" />
                </Link>
            </div>

            <div className="dropdown language-dropdown">
                <button className="btn btn-light dropdown-toggle" type="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <TbWorld className='icon-navbar-lenguaje'/> 
                    <span>{language}</span>
                </button>
                <ul className="dropdown-menu menu-language" aria-labelledby="languageDropdown">
                    <li><button className="dropdown-item" onClick={() => changeLanguage("es", "Español")}>Español</button></li>
                    <li><button className="dropdown-item" onClick={() => changeLanguage("en", "Inglés")}>Inglés</button></li>
                </ul>
            </div>

            <button className="hamburger" onClick={toggleMenu}>
                <GiHamburgerMenu size={24} />
            </button>

            <div className={`collapse navbar-collapse navbar-menu ${menuOpen ? "open" : ""}`} id="navbarNavDropdown">
                <ul className="navbar-nav">
                    {navLinks.map((navItem, index) => (
                        <li key={index} className={`nav-item ${navItem.submenu ? 'dropdown' : ''}`}>
                            {navItem.submenu ? (
                                <>
                                    <Link className="nav-link color-link dropdown-toggle" to={navItem.path} id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {navItem.label}
                                    </Link>
                                    <ul className="dropdown-menu dropdown-menu-items" aria-labelledby="navbarDropdownMenuLink">
                                        {navItem.submenu.map((item, subIndex) => (
                                            <li key={subIndex} onClick={closeMenu}>
                                                <Link className="dropdown-item" to={item.path}>{item.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <Link className="nav-link color-link" to={navItem.path} onClick={closeMenu}>
                                    {navItem.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
