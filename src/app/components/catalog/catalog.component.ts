import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  pokemons: any[] = [];

  constructor(private pokemonSvc : PokemonsService, private router: Router) { }

  ngOnInit(): void {
    this.getPokemonsList();
  }

  getPokemonsList(){
    this.pokemonSvc.getPokemonsList().subscribe(
      res => {
        res.results.forEach((element: { name: string; }) => {
          this.pokemonSvc.getPokemonDetails(element.name).subscribe(
            (result: any) => {
              this.pokemons.push(result);
            }
          )
        });
      },
      err => {
        console.log(err)
      }

    )
  }

  openPokemonDetails(name: string){
    this.router.navigate([`/elementDetails/${name}`]);
  }

}
