import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PokedexService } from '../services/pokedex.service';
import { Pokemon } from '../models/pokemon.model';

@Component({
    selector: 'app-pokemon-detail',
    templateUrl: 'pokemon-detail.component.html'
})

export class PokemonDetailComponent implements OnInit, OnChanges {
    
    
    loading: boolean;
    pokemon: Pokemon;

    @Input("pokemon-number") pokemonId: number;
    
    constructor(private pokedexService: PokedexService) { 
        this.loading = false;
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(this.loading) return;
        this.loading = true;
        this.pokedexService.getPokemon(this.pokemonId)
            .subscribe((data: Pokemon) => {
                this.loading = false;
                this.pokemon = data;
                console.log(this.pokemon);
            });
    }

    ngOnInit() { 
        
    }
}