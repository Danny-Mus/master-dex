import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CardComponent } from '../card/card.component';
import Pokemon from 'src/app/models/interfaces/Pokemon';
import { PokemonTeamService } from 'src/app/services/pokemon/pokemon-team.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss', '../card/card.component.scss']
})


export class PokemonDetailsComponent implements OnInit {
  cardComponent: CardComponent;
  @Output() toggleModel: EventEmitter<Boolean> = new EventEmitter();
  @Input() pokemon:Pokemon;

  constructor(private teamService: PokemonTeamService) { this.cardComponent = new CardComponent(teamService) }

  ngOnInit() {
  }

  closeModel(): void {
    this.toggleModel.emit();
  }
}
