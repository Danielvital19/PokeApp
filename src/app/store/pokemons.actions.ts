import { createAction, props } from '@ngrx/store';
import {Pokemon} from '../store/pokemon.model';

export const addPokemon = createAction(
  '[Customer] Add Customer',
  (pokemon: Pokemon) => ({pokemon})
);