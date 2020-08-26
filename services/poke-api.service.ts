import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokeAPI } from 'src/environments/PokeAPI';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {

  constructor(
    private http: HttpClient
  ) { }

  getPokemons() {
    return this.http.get(`${PokeAPI.url}pokemon`);
  }

  getPokemon(name) {
    return this.http.get(`${PokeAPI.url}pokemon/${ name }`);
  }
}
