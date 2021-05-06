import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/store/pokemon.model';
import {select, Store} from '@ngrx/store'
import {selectPokemons} from '../../store/selector/Pokemon';
import { PokemonState} from '../../store/pokemon.reducer';
import { addPokemon } from 'src/app/store/pokemons.actions';



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
  pokemons$: Observable<Array<Pokemon>>;


  constructor(
    private pokemonSvc : PokemonsService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private _snackBar: MatSnackBar,     
    private store: Store<PokemonState>
    ) {
      this.activatedRoute.params.subscribe(
        params => {
          params['pokemon'] === '' ? this.getPokemonsList(1) : this.searchPokemon(params['pokemon']);
        }
      )
      this.pokemons$ = this.store.pipe(select(selectPokemons));
   }


  ngOnInit(): void {
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
              this.store.dispatch(addPokemon(result));
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
