import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import * as pokemonActions from '../store/pokemons.actions';
import { provideMockStore } from '@ngrx/store/testing';


@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  offset: number;

  constructor(private store: Store<any>, private http : HttpClient) { 
    this.offset = 0
  }

  getPokemonsList(pageIndex: any){
    var offset = pageIndex * 20;    
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
  }

  getPokemonDetails(name: string){
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${name}` )
  }
}
  