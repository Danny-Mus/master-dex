import { PipeTransform, Pipe } from '@angular/core';
import Pokemon from 'src/app/models/interfaces/Pokemon';


@Pipe({
    name: 'caughtFilter'
})

export class FilterCaughtPipe implements PipeTransform {
    transform(pokemons: Pokemon[], searchterm: string): Pokemon[]{
        if (searchterm == "All" || !searchterm){
            return pokemons;
        }
        return pokemons.filter(pokemon =>
            pokemon.is_caught == true)
    }
}
