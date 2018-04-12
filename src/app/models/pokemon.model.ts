import { PokemonSprite } from "./pokemon.sprite.model";
import { PokemonTypes } from "./pokemon.types.model";
import { PokemonStats } from "./pokemon.stats.model";

export interface Pokemon {
    id: number;
    name: string;
    type: PokemonTypes[];
    stats: PokemonStats[];
    sprites: PokemonSprite;
}
