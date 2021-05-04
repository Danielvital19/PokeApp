import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http : HttpClient) { }

  getPokemonsList(pageIndex: any){
    var offset = pageIndex * 20;    
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
  }

  getPokemonDetails(name: string){
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${name}` )
  }
}
  