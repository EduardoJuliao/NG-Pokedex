import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PokedexService } from '../services/pokedex.service';
import { Pokemon } from '../models/pokemon.model';

@Component({
    selector: 'app-pokemon-detail',
    templateUrl: 'pokemon-detail.component.html'
})

export class PokemonDetailComponent implements OnInit, OnChanges {
    
    pokemon: Pokemon;

    @Input("pokemon-number") pokemonId: number;
    
    constructor(private pokedexService: PokedexService) { 
        
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(this.pokedexService.isLoading) return;
        this.pokedexService.isLoading = true;
        this.pokedexService.getPokemon(this.pokemonId)
            .subscribe((data: Pokemon) => {
                this.pokedexService.isLoading = false;
                this.pokemon = data;
            });
    }

    ngOnInit() { 
        
    }
}