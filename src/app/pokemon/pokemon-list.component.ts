import { SoundService } from './../services/sound.service';
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
    selectedPokemon: number = 0;
    limit: number = 2000;

    ngOnInit() {
        this.loadPokemons(this.lastIndexSearch, this.limit);
    }

    private loadPokemons(index: number, limit?: number) {
        this.pokedexService.isLoading = true;
        this.pokedexService.getPokemonList(index, limit)
            .subscribe((data: HttpListResponse<PokemonList>) => {
                this.pokedexService.isLoading = false;
                data.results.map(pokemon => {
                    let result = pokemon.url.match(/\/(\d+)\//);
                    if (result) {
                        return {
                            number: parseInt(result[1]),
                            name: pokemon.name,
                            visible: true
                        };
                    }
                }).forEach(item => this.pokemonsSimpleList.push(item));
                this.lastIndexSearch = this.pokemonsSimpleList.length;
            });
    }

    private getPokemon(id: number): void {
        if (this.pokedexService.isLoading) return;
        this.soundService.playSelect();
        this.selectedPokemon = id;
    }

    private loadMore(): void {
        if (this.pokedexService.isLoading) return;
        this.loadPokemons(this.lastIndexSearch, this.limit);
    }

    private getAvaliablePokemons(): any[] {
        return this.pokemonsSimpleList.filter(x => x.visible);
    }

    private filterPokemon(filter: string): void {
        for(var i = 0; i < this.pokemonsSimpleList.length; i++)
        this.pokemonsSimpleList[i].visible = this.pokemonsSimpleList[i].name.indexOf(filter) > -1;
    }

    constructor(private pokedexService: PokedexService,
        private soundService: SoundService) {
    }
}