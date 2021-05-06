

import {Action, createReducer, on} from '@ngrx/store';
import * as PokemonActions from '../store/pokemons.actions';
import {Pokemon} from '../store/pokemon.model';

export const customerFeatureKey = 'customer';


export interface PokemonState {
  pokemons: Pokemon[];
}


export const initialState: PokemonState = {
  pokemons: []
};

export const pokemonReducer = createReducer(
  initialState,
  on(PokemonActions.addPokemon,
    (state: PokemonState, {pokemon}) =>
      ({...state,
        pokemons: [...state.pokemons, pokemon]
      }))
);


export function reducer(state: PokemonState | undefined, action: Action): any {
  return pokemonReducer(state, action);
}