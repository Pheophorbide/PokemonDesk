import React, { Fragment } from 'react';
import HomePage from './pages/home';
import Pokedex from './pages/pokedex';

export type MenuItemType = {
  title: string;
  link: string;
  component: () => JSX.Element;
};

export const GENERAL_MENU: MenuItemType[] = [
  {
    title: 'Home',
    link: '/',
    component: () => <HomePage />,
  },
  {
    title: 'Pokedex',
    link: '/pokedex',
    component: () => <Pokedex />,
  },
  {
    title: 'Legendarios',
    link: '/legendarios ',
    component: () => <Fragment />,
  },
  {
    title: 'Documentacion',
    link: '/documentacion ',
    component: () => <Fragment />,
  },
];

interface IAccMenu {
  [key: string]: () => JSX.Element;
}

const routes = GENERAL_MENU.reduce((accum: IAccMenu, current: MenuItemType) => {
  const update = { ...accum };
  update[current.link] = current.component;
  return update;
}, {});

export default routes;
