import { PipeTransform, Pipe } from '@angular/core';
import Pokemon from 'src/app/models/interfaces/Pokemon';


@Pipe({
    name: 'typeFilter'
})

export class FilterTypePipe implements PipeTransform {
    transform(pokemons: Pokemon[], searchterm: string): Pokemon[]{
        if (searchterm == "All" || !searchterm){
            return pokemons;
        }
        return pokemons.filter(pokemon =>
            pokemon.types.find(({type}) => type.name.toLowerCase() === searchterm.toLowerCase()));
    }
}
