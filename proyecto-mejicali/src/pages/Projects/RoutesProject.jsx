import React from 'react';

const Project1 = React.lazy(() => import('./Project/Project1'));
const Project2 = React.lazy(() => import('./Project/Project2'));

const routes = [
    { path: '*', name: 'Project1', element: Project1, exact: true },
    { path: '/proyecto2', name: 'Project2', element: Project2, exact: true }
];
export default routes;