import React, { useState } from 'react';
import Layout from '../../components/layout';
import PokemonCard, { PokemonCardInterface } from '../../components/pokemon-card';
import Heading, { HeaderType } from '../../components/heading';
import useData from '../../hook/getData';

import styles from './Pokedex.module.scss';

const Pokedex = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState({});
  const { data, isLoading } = useData('getPokemons', query, [searchValue]);

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
    setQuery((s) => ({
      ...s,
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
