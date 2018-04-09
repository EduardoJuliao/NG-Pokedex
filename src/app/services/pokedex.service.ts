import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { Pokemon } from '../models/pokemon.model';
import { HttpListResponse } from '../models/HttpListResponse.model';
import { PokemonList } from '../models/pokemon.list.model';


@Injectable()
export class PokedexService {
    constructor(private http: HttpClient) { }

    private readonly limit: number = 20;

    /**
     * 
     * 
     * @param {number} offset 
     * @returns {Observable<PokemonList[]>} 
     * @memberof PokedexService
     */
    public getPokemonList(offset: number): Observable<HttpListResponse<PokemonList>> {
        let url = environment.apiBaseUrl + `pokemon/?limit=${this.limit}&offset=${offset}`;
        return this.http.get<HttpListResponse<PokemonList>>(url);
    }

    /**
     * 
     * 
     * @param {number} pokemonId 
     * @returns {Observable<Pokemon>} 
     * @memberof PokedexService
     */
    public getPokemon(pokemonId: number): Observable<Pokemon> {
        return this.http.get<Pokemon>(environment.apiBaseUrl + `pokemon/${pokemonId}/`);
    }
}
