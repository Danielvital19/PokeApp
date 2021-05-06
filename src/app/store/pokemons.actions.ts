import { Action } from '@ngrx/store'
import { Pokemon } from './pokemon.model';

export enum ACTIONS {
    POKEDEX_BATCH = '[POKEMON LIST] add pokemons',
    POKEMON_LOAD = '[POKEMON LIST] load pokemons',
    POKEMON_SEARCH = '[POKEMON LIST] search pokemons'
  }

export class AddPokemons implements Action {
  readonly type = ACTIONS.POKEDEX_BATCH;

  constructor(public payload: Pokemon[]) {}
}

export class LoadPokemons implements Action {
  readonly type = ACTIONS.POKEMON_LOAD;

  constructor(public payload: Pokemon[]) {}
}

export class FilterPokemons implements Action {
  readonly type = ACTIONS.POKEMON_SEARCH;

  constructor(public payload: string) {}
}

export type AddPokemonBatch = AddPokemons | LoadPokemons | FilterPokemons;