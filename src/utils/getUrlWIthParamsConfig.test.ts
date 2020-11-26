import getUrlWIthParamsConfig from './getUrlWithParamsConfig';

describe('getUrlWIthParamsConfig', () => {
  test('Должна принимать 2 аргумента: endpointConfig и пустой объект query и возвращать объект с полями protocol, pathname, host и пустой объект query', () => {
    const url = getUrlWIthParamsConfig('getPokemons', {});

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: {},
    });
  });
  test('Должна принимать 2 аргумента: endpointConfig и {name: "Pikachu"} и возвращать объект с полями protocol, pathname, host и объект query {name: Pikachu}', () => {
    const url = getUrlWIthParamsConfig('getPokemons', { name: 'Pikachu' });

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: { name: 'Pikachu' },
    });
  });
  test('Должна принимать 2 аргумента: endpointConfig и {name: 25} и возвращать объект с полями protocol, pathname, host и пустой объект query', () => {
    const url = getUrlWIthParamsConfig('getPokemon', { id: 25 });

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemon/25',
      query: {},
    });
  });
});
