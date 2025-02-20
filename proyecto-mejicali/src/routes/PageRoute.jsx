import React from 'react';

const Home = React.lazy(() => import('../pages/Home/Home'));
const Services = React.lazy(() => import('../pages/Services/Services'));
const Projects = React.lazy(() => import('../pages/Projects/Projects'));
const About = React.lazy(() => import('../pages/About/About'));

const routes = [
    { path: '*', name: 'Home', element: Home, exact: true },
    { path: '/about', name: 'Sobre Nosotros', element: About, exact: true },
    { path: '/servicios', name: 'Servicios', element: Services, exact: true },
    { path: '/proyectos/*', name: 'Proyectos', element: Projects, exact: true },
];
export default routes;