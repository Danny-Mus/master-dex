import { PipeTransform, Pipe } from '@angular/core';
import Pokemon from 'src/app/models/interfaces/Pokemon';


@Pipe({
    name: 'generationFilter'
})

export class FilterGenerationPipe implements PipeTransform {
    transform(pokemons: Pokemon[], searchterm: string): Pokemon[]{
        switch(searchterm) {
            case 'All':
                return pokemons.slice(0, 807);
            case 'Generation-i':
                return pokemons.slice(0, 151);
            case 'Generation-ii':
                return pokemons.slice(151, 251);
            case 'Generation-iii':
                return pokemons.slice(251, 386);
            case 'Generation-iv':
                return pokemons.slice(386, 493);
            case 'Generation-v':
                return pokemons.slice(493, 649);
            case 'Generation-vi':
                return pokemons.slice(649, 721);
            case 'Generation-vii':
                return pokemons.slice(721, 807);
        }
        return pokemons.slice(0, 151);
    }
}
