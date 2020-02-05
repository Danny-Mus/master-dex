import { Component } from '@angular/core';
import Pokemon from 'src/app/models/interfaces/Pokemon';
import { PokemonTeamService } from 'src/app/services/pokemon/pokemon-team.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-teambuilder',
  templateUrl: './teambuilder.component.html',
  styleUrls: ['./teambuilder.component.scss'],
  animations: [
    trigger('slider', [
      state('open', style({
        opacity: '1',
      })),
      state('close', style({
        opacity: '0.5',
      })),
      transition('open => closed', [
        animate('2s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
  ]
})
export class TeambuilderComponent {
  pokemons: Pokemon[] = [];
  isOpen: Boolean = false;

  constructor(private pokemonService: PokemonTeamService){}

  ngOnInit(): void {
    this.getData();
  }

  getData():void {
    this.pokemons = this.pokemonService.getCaughtPokemon();
  }

  toggleModal() {
  }

  ngDoCheck(): void {
    this.getData();
  }
}
