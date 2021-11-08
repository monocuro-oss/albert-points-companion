import React, { ReactNode } from 'react';

import Commands from './Commands';
import Home from './Home';
import Items from './Items';
import Helpers from './Helpers';

type Page = {
  name: string;
  path: string;
  component: ReactNode;
};

export const home: Page = {
  name: 'Home',
  path: '/',
  component: <Home />,
};

export const pages: Page[] = [
  {
    name: 'Commands',
    path: '/commands',
    component: <Commands />,
  },
  {
    name: 'Items',
    path: '/items',
    component: <Items />,
  },
  {
    name: 'Helpers',
    path: '/helpers',
    component: <Helpers />,
  },
];
