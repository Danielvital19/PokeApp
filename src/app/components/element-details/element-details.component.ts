import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-element-details',
  templateUrl: './element-details.component.html',
  styleUrls: ['./element-details.component.css']
})
export class ElementDetailsComponent implements OnInit {

  pokemon: any;

  constructor(private pokemonSvc: PokemonsService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(
      params => {
        this.getPokemonDetails(params['name'])
       }
    )
   }

  ngOnInit(): void {
  }

  getPokemonDetails(name: string){
    this.pokemonSvc.getPokemonDetails(name).subscribe(
      (result: any) => {
        console.log(result)
        this.pokemon = result;
      },
      (error: any) => {}
    )
  }

}
