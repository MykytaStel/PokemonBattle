import axios from 'axios';

const API_URL = {
  BASE_URL: 'https://pokeapi.co/api/v2/',
};

const client = axios.create({
  baseURL: API_URL.BASE_URL,
});

export const clientFactory = (url: string) => ({
  fetchByUrl: async (param: string | unknown, urlPart: string) => {
    const {data} = await client.get(`${`${url}/${param}/${urlPart}`}`);
    return data;
  },
  fetch: async (params?: string) => {
    const {data} = await client.get(`${`${url}/${params}`}`);
    return data;
  },
});

export const fetchPokemonData = clientFactory('pokemon/');
