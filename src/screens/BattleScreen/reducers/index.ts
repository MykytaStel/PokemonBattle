import {createSlice} from '@reduxjs/toolkit';

export const initialState = {
  pokemons: null,
  loading: false,
  opponentPokemon: null,
  pokemon: null,
  wins: 0,
  loses: 0,
};

const slice = createSlice({
  name: 'battle',
  initialState,
  reducers: {
    getAllPokemons: (state, action) => {
      state.loading = true;
      state.pokemons = action.payload;
    },
    setOpponentPokemon: (state, action) => {
      state.opponentPokemon = action.payload;
    },
    setPlayerPokemon: (state, action) => {
      state.pokemon = action.payload;
    },
    setWins: (state, action) => {
      state.wins = action.payload;
    },
    setLoses: (state, action) => {
      state.loses = action.payload;
    },
  },
});

export const {setOpponentPokemon, setPlayerPokemon, setWins, setLoses} =
  slice.actions;

export default slice.reducer;
