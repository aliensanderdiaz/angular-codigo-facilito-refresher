import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from 'src/app/services/poke-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  pokemons: any[] = [];

  constructor(
    private PokeService: PokeAPIService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllPokemons();
  }

  getAllPokemons() {
    this.PokeService.getPokemons().subscribe((pokemons: any) => {
      console.log(pokemons);
      this.pokemons = pokemons.results;
    });
  }

  showPoke(name) {
    console.log(name);
    this.router.navigateByUrl(`pokemons/${name}`);
  }

}
