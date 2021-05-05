import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  valueSearch: string = '';
  isSearching: boolean = false;

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  home(){
    this.router.navigate(['/']);
  }

  searchPokemon(){
    console.log(this.valueSearch)
    this.valueSearch !== '' ? this.router.navigate([`/home/${this.valueSearch}`]) : this.home();
  }

  profile(){
    this.router.navigate(['/profile']);

  }

}
