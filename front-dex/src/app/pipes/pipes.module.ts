import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonFilterPipe } from './pokemon-filter.pipe';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ PokemonFilterPipe ],
  exports:      [ PokemonFilterPipe ]
})
export class PipesModule { }
