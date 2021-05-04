import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http : HttpClient) { }

  getPokemonsList(){
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon' )
  }
}
  