import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  pokemons: any[] = [];

  pokemonsTotal: string = '0';

  pageEvent: PageEvent = new PageEvent;

  isSearching: boolean = false;

  constructor(private pokemonSvc : PokemonsService, private router: Router, private activatedRoute: ActivatedRoute, private _snackBar: MatSnackBar) {
    this.activatedRoute.params.subscribe(
      params => {
        params['pokemon'] === '' ? this.getPokemonsList(1) : this.searchPokemon(params['pokemon']);
       }
    )
   }

  ngOnInit(): void {
    //this.getPokemonsList(1);
  }

  getPokemonsList(index: number){
    this.pokemons = [];
    this.pokemonSvc.getPokemonsList(index).subscribe(
      res => {
        this.pokemonsTotal = res.count;
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

  searchPokemon(pokemon: string){
    this.pokemons = [];
    this.pokemonSvc.getPokemonDetails(pokemon).subscribe(
      (result: any) => {
        this.pokemons.push(result);
      },(error: any) => {
        this._snackBar.open(`pokemon not found`, "ok");
      }
    )
  }

  openPokemonDetails(name: string){
    this.router.navigate([`/elementDetails/${name}`]);
  }

  onPageChange(event: PageEvent){
    this.getPokemonsList(event.pageIndex)
  }
}
