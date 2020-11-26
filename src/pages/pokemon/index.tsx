import React from 'react';
import useData from '../../hook/getData';

export interface IPokemon {
  id: string;
}

const Pokemon = ({ id }: IPokemon) => {
  const { data, isLoading } = useData<IPokemon>('getPokemon', { id }, [id]);
  if (isLoading) {
    return <div>isLoading...</div>;
  }
  return <div>this is pokemon {data?.name}</div>;
};

export default Pokemon;
