import React from 'react';

const Project1 = React.lazy(() => import('./Project/Project1'));
const Project2 = React.lazy(() => import('./Project/Project2'));
const Project3 = React.lazy(() => import('./Project/Project3'));
const Project4 = React.lazy(() => import('./Project/Project4'));

const routes = [
    { path: '*', name: 'Project1', element: Project1, exact: true },
    { path: '/proyecto2', name: 'Project2', element: Project2, exact: true },
    { path: '/proyecto3', name: 'Project3', element: Project3, exact: true },
    { path: '/proyecto4', name: 'Project4', element: Project4, exact: true },
];
export default routes;