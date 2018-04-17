import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PokedexService } from '../services/pokedex.service';
import { Pokemon } from '../models/pokemon.model';

@Component({
    selector: 'app-pokemon-detail',
    templateUrl: 'pokemon-detail.component.html',
    styleUrls: [
        './pokemon-detail.component.css'
    ]
})

export class PokemonDetailComponent implements OnInit, OnChanges {
    
    pokemon: Pokemon;
    maxStatus: number = 0;

    @Input("pokemon-number") pokemonId: number;
    
    constructor(private pokedexService: PokedexService) { 
        
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.maxStatus = 0;
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

    addToCombatPower(statValue: number): number{
        this.maxStatus += statValue;
        return statValue;
    }
}