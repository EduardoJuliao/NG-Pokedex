import { Component, OnInit } from '@angular/core';
import { PokemonList } from '../models/pokemon.list.model';
import { HttpListResponse } from '../models/HttpListResponse.model';
import { PokedexService } from '../services/pokedex.service';
import { Pokemon } from '../models/pokemon.model';

@Component({
    selector: 'app-pokemon-list',
    templateUrl: 'pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.css']
})

export class PokemonListComponent implements OnInit {
 
    lastIndexSearch: number = 0;
    pokemonsSimpleList: any[] = [];
    loading: boolean;
    selectedPokemon: number = 0;

    ngOnInit() {
        this.loadPokemons(this.lastIndexSearch);
    }

    private loadPokemons(index: number) {
        this.loading = true;
        this.pokedexService.getPokemonList(index)
            .subscribe((data: HttpListResponse<PokemonList>) => {
                this.loading = false;
                data.results.map(pokemon => {
                    let result = pokemon.url.match(/\/(\d+)\//);
                    if (result) {
                        return {
                            number: parseInt(result[1]),
                            name: pokemon.name
                        };
                    }
                }).forEach(item => this.pokemonsSimpleList.push(item));
                this.lastIndexSearch += this.pokedexService.limit;
            });
    }

    private getPokemon(id: number): void {
       this.selectedPokemon = id;
    }

    private loadMore(): void {
        if (this.loading) return;
        this.loadPokemons(this.lastIndexSearch);
    }

    constructor(private pokedexService: PokedexService) {
    }
}