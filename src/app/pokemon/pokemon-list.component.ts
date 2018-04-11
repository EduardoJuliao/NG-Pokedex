import { Component, OnInit } from '@angular/core';
import { PokemonList } from '../models/pokemon.list.model';
import { HttpListResponse } from '../models/HttpListResponse.model';
import { PokedexService } from '../services/pokedex.service';
import { Pokemon } from '../models/pokemon.model';

@Component({
    selector: 'app-pokemon-list',
    templateUrl: 'pokemon-list.component.html'
})

export class PokemonListComponent implements OnInit {

    pokemons: Pokemon[] = [];
    lastIndexSearch: number = 0;
    pokemonsSimpleList: any[] = [];
    loading: boolean;

    ngOnInit() {
        this.loadPokemons(this.lastIndexSearch);
    }

    private loadPokemons(index: number) {
        this.loading = true;
        this.pokedexService.getPokemonList(index)
            .subscribe((data: HttpListResponse<PokemonList>) => {
                data.results.map(pokemon => {
                    let result = pokemon.url.match(/\/(\d+)\//);
                    if (result) {
                        return {
                            number: parseInt(result[1]),
                            name: pokemon.name
                        };
                    }
                    this.loading = false;
                }).forEach(item => this.pokemonsSimpleList.push(item));
                this.lastIndexSearch += this.pokedexService.limit;
            });
    }

    private getPokemon(id: number): void {
        this.pokedexService.getPokemon(id)
            .subscribe((data: Pokemon) => {
                this.pokemons[data.id - 1] = data;
            });
    }

    private listLoadedPokemon(): Pokemon[] {
        return this.pokemons.filter(p => p != undefined);
    }

    private loadMore(): void {
        this.loadPokemons(this.lastIndexSearch);
    }

    constructor(private pokedexService: PokedexService) {
    }
}