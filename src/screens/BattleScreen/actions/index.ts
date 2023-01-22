import {AppDispatch} from '../../../store';
import {setOpponentPokemon, setPlayerPokemon} from '../reducers';
import {fetchPokemonData} from './../../../services/api_client';

export const requestPokemonData =
  (param: string) => async (dispatch: AppDispatch) => {
    try {
      const pokemon = await fetchPokemonData.fetch(param);
      dispatch(setPlayerPokemon(pokemon));
    } catch (error: any) {
      console.log(error.toString());
    }
  };

export const requestOpponentPokemonData =
  (param: string) => async (dispatch: AppDispatch) => {
    try {
      const opponentPokemon = await fetchPokemonData.fetch(param);
      dispatch(setOpponentPokemon(opponentPokemon));
    } catch (error: any) {
      console.log(error.toString());
    }
  };
