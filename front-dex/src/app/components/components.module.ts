import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'


// Components
import { CardComponent } from './card/card.component';
import { CaughtComponent } from './caught/caught.component';
import { LoaderComponent } from './loader/loader.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonFilterPipe } from '../pipes/pokemon-filter.pipe';
import { FilterTypePipe } from '../pipes/type-filter.pipe';
import { FilterGenerationPipe } from '../pipes/generation.filter.pipe';
import { FilterCaughtPipe } from '../pipes/caught-filter.pipe';
import { TeamOverlayComponent } from './team-overlay/team-overlay.component';


const Components = [
    CardComponent,
    CaughtComponent,
    LoaderComponent,
    PokemonDetailsComponent,
    PokemonFilterPipe,
    FilterTypePipe,
    FilterGenerationPipe,
    FilterCaughtPipe,
    TeamOverlayComponent,
]

@NgModule({
    declarations: [...Components],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [...Components],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ComponentsModule { }
