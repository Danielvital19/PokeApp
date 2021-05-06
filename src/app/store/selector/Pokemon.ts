import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromPokemons from '../pokemon.reducer'

export const selectPokemonState = createFeatureSelector<fromPokemons.PokemonState>(
    fromPokemons.customerFeatureKey,
);

export const selectPokemons = createSelector(
    selectPokemonState,
  (state: fromPokemons.PokemonState) => state.pokemons
);