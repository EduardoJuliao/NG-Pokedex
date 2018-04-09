import { PokemonList } from './models/pokemon.list.model';
import { HttpListResponse } from './models/HttpListResponse.model';
import { Component, OnInit } from '@angular/core';
import { PokedexService } from './services/pokedex.service';
import { Pokemon } from './models/pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.pokedexService.getPokemonList(0)
      .subscribe((data: HttpListResponse<PokemonList>) => {
        data.results.forEach(pokemon => { 
          let result = pokemon.url.match(/\/(\d+)\//);
          if(result){
            this.getPokemon(parseInt(result[1]));
          }
        });
      });
  }

  private getPokemon(id: number): void{
    this.pokedexService.getPokemon(id)
    .subscribe((data:Pokemon) => {
      console.log(data);
    })
  }

  constructor(private pokedexService: PokedexService){

  }
}
