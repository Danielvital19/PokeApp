import { AppState } from './../app.state';
import { Pokemon } from './pokemon.model';
import * as pokemonActions from './pokemons.actions';

export enum ACTIONS {
    POKEDEX_BATCH = '[POKEMON LIST] add pokemons',
    POKEMON_LOAD = '[POKEMON LIST] load pokemons',
    POKEMON_SEARCH = '[POKEMON LIST] search pokemons'
  }

export const initialState = {
  pokemons: [],
  filteredPokemons: [],
};

export function pokemonsReducer(
  state: AppState = initialState,
  action: pokemonActions.AddPokemonBatch
) {
  switch (action.type) {
    case ACTIONS.POKEDEX_BATCH:
      const appendData = [...state.pokemons, ...action.payload];

      return {
        ...state,
        pokemons: appendData,
        filteredPokemons: appendData,
      };
    case ACTIONS.POKEMON_LOAD:
      const newList = [...action.payload];

      return {
        ...state,
        pokemons: newList,
        filteredPokemons: newList,
      };
    default:
      return state;
  }
}