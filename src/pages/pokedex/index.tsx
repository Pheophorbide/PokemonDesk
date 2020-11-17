import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout';
import PokemonCard from '../../components/pokemon-card';
import Heading, { HeaderType } from '../../components/heading';

import styles from './Pokedex.module.scss';

const usePokemons = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons?limit=20');
        const result = await response.json();
        setData(result);
        setIsError(false);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const Pokedex = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) return <div>isLoading...</div>;
  if (isError) return <div>isError...</div>;

  return (
    <Layout className={styles.root}>
      <Heading type={HeaderType.h3} className={styles.title}>
        {data?.total || 0} Pokemons for you to choose your favorite
      </Heading>
      <div className={styles.content}>
        {data?.pokemons && data?.pokemons.map((pokemon) => <PokemonCard key={pokemon.id} {...pokemon} />)}
      </div>
    </Layout>
  );
};

export default Pokedex;
