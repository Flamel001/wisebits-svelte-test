import type { Coffee } from 'entities/coffee/types';

export const getRandomCoffee = async () => {
  return fetch('https://random-data-api.com/api/coffee/random_coffee').then((res) => res.json()) as Promise<Coffee>;
};
