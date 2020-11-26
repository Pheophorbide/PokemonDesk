import React, { Fragment, PropsWithChildren } from 'react';
import HomePage from './pages/home';
import Pokedex from './pages/pokedex';
import Pokemon, { IPokemon } from './pages/pokemon';

export type MenuItemType = {
  title: string;
  link: LinkEnum;
  component: (props: PropsWithChildren<any>) => JSX.Element;
};

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIOS = '/legendarios',
  DOCUMENTATION = 'legendarios',
  POKEMON = '/pokedex/:id',
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

const SECOND_ROUTE: MenuItemType[] = [
  {
    title: 'Pokedex',
    link: LinkEnum.POKEMON,
    component: ({ id }: IPokemon) => <Pokemon id={id} />,
  },
];

interface IAccMenu {
  [key: string]: (props: PropsWithChildren<any>) => JSX.Element;
}

const routes = [...GENERAL_MENU, ...SECOND_ROUTE].reduce((accum: IAccMenu, current: MenuItemType) => {
  const update = { ...accum };
  update[current.link] = current.component;
  return update;
}, {});

export default routes;
