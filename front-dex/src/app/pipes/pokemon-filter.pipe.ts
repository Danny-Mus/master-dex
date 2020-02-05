import { PipeTransform, Pipe } from '@angular/core';
import Pokemon from 'src/app/models/interfaces/Pokemon';


@Pipe({
    name: 'pokemonFilter'
})

export class PokemonFilterPipe implements PipeTransform {
    transform(pokemons: Pokemon[], searchTerm: string): Pokemon[]{
        if(!pokemons || !searchTerm) {
            return pokemons;
        }
        return pokemons.filter(pokemon =>
            pokemon.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}
