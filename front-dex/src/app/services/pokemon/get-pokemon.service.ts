import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, zip } from 'rxjs';
import Pokemon from 'src/app/models/interfaces/Pokemon';


@Injectable({
    providedIn: 'root'
})

export class PokemonService {

    getPokemon(): Observable<Pokemon[]> {
        const noGen = 0;
        const gen1 = 151;
        const gen2 = 251;
        const gen3 = 386;
        const gen4 = 493;
        const gen5 = 649;
        const gen6 = 721;
        const gen7 = 807;
        const pokemonData: Observable<Pokemon>[] = [];

        for(let i = noGen+1; i <= gen7; i++) {
            pokemonData.push(this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${i}`));
        }
        return zip(...pokemonData);
    }

    constructor(private http: HttpClient){
    }
}
