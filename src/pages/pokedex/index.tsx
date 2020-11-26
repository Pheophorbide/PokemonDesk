import React, { useState } from 'react';
import Layout from '../../components/layout';
import PokemonCard, { PokemonCardInterface } from '../../components/pokemon-card';
import Heading, { HeaderType } from '../../components/heading';
import useDebounce from '../../hook/useDebounce';
// @ts-ignore
import useData from '../../hook/getData';

import styles from './Pokedex.module.scss';

export interface IPokedex {
  total: string;
  pokemons: PokemonCardInterface[];
}

interface IQuery {
  name?: string;
}

const Pokedex = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({});
  const debounceValue = useDebounce(searchValue, 500);
  const { data, isLoading } = useData<IPokedex>('getPokemons', query, [debounceValue]);

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: event.target.value,
    }));
  }

  return (
    <Layout className={styles.root}>
      <Heading type={HeaderType.h3} className={styles.title}>
        {(!isLoading && data?.total) || 0} Pokemons for you to choose your favorite
      </Heading>
      <div className={styles.search}>
        <input
          placeholder="Encuentra tu pokémon..."
          className={styles.input}
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
        />
      </div>
      <div className={styles.content}>
        {!isLoading &&
          data?.pokemons?.map((pokemon: PokemonCardInterface) => <PokemonCard key={pokemon.id} {...pokemon} />)}
      </div>
    </Layout>
  );
};

export default Pokedex;
