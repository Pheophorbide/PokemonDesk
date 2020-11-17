import React, { Fragment } from 'react';
import HomePage from './pages/home';
import Pokedex from './pages/pokedex';

export type MenuItemType = {
  title: string;
  link: LinkEnum;
  component: () => JSX.Element;
};

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIOS = '/legendarios',
  DOCUMENTATION = 'legendarios',
}

export const GENERAL_MENU: MenuItemType[] = [
  {
    title: 'Home',
    link: LinkEnum.HOME,
    component: () => <HomePage />,
  },
  {
    title: 'Pokedex',
    link: LinkEnum.POKEDEX,
    component: () => <Pokedex />,
  },
  {
    title: 'Legendarios',
    link: LinkEnum.LEGENDARIOS,
    component: () => <Fragment />,
  },
  {
    title: 'Documentacion',
    link: LinkEnum.DOCUMENTATION,
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
