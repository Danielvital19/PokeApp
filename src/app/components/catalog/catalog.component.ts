import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor(private pokemonSvc : PokemonsService) { }

  ngOnInit(): void {
    this.getPokemonsList();
  }

  getPokemonsList(){
    this.pokemonSvc.getPokemonsList().subscribe(
      res => {
        console.log(res.results)
      },
      err => {
        console.log(err)
      }

    )
  }

}
