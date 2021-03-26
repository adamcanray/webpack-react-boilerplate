import { lazy } from 'react';

// use lazy for better code splitting, a.k.a. load faster
const Components = lazy(() => import('../pages/Components'));
const Landing = lazy(() => import('../pages/Landing'));

const routes = [
  {
    path: '/',
    component: Landing,
  },
  {
    path: '/components',
    component: Components,
  },
];

export default routes;