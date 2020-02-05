import { Injectable } from '@angular/core';
import Pokemon from 'src/app/models/interfaces/Pokemon';
import { TeambuilderComponent } from 'src/app/pages/teambuilder/teambuilder.component';


@Injectable({
  providedIn: 'root'
})

export class PokemonTeamService {
  savedPokemons: Pokemon[] = []
  duplicate: boolean = false;

  caughtPokemon(pokemon: Pokemon): void {
    if(localStorage.getItem('caughtPokemons')) {
      this.savedPokemons = JSON.parse(localStorage.getItem('caughtPokemons'));
    }
    if(this.savedPokemons.length === 0) {
      this.savedPokemons.push(pokemon);
    } else {
      for(let i = 0; i < this.savedPokemons.length; i++) {
        if(this.savedPokemons[i].id == pokemon.id) {
          this.savedPokemons.splice(i, 1);
          this.duplicate = true;
        }
      }
      if(!this.duplicate) {
        this.savedPokemons.push(pokemon);
      }
      this.duplicate = false;
    }
    localStorage.setItem('caughtPokemons', JSON.stringify(this.savedPokemons));
  }

  getCaughtPokemon (): Pokemon[] {
    return JSON.parse(localStorage.getItem('caughtPokemons')) || [];
  }

  constructor() { }
}
