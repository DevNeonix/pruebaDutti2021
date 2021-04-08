import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {PrincipalComponent} from './principal/principal.component';
import {PageOneComponent} from './page-one/page-one.component';
import {PageTwoComponent} from './page-two/page-two.component';
import {ShipsComponent} from './ships/ships.component';
import {ShipsDetailsComponent} from './ships/ships-details/ships-details.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {ShipsService} from '../core/services/ships.service';
import {StoreModule} from '@ngrx/store';
import {shipsReducer} from '../shared/redux/ships.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../../environments/environment';
import {FilmsService} from '../core/services/films.service';
import {CharacterDetailComponent} from '../components/character-detail/character-detail.component';
import {CharacterService} from '../core/services/character.service';
import {SpeciesService} from "../core/services/species.service";

const routes: Routes = [
  {
    path: '', redirectTo: 'ships', pathMatch: 'full'
  }, {
    path: '', component: PrincipalComponent,
    children: [
      {path: 'ships', component: ShipsComponent},
      {path: 'films', component: PageOneComponent},
      {path: 'species', component: PageTwoComponent},
    ]
  }];

@NgModule({
  declarations: [
    PrincipalComponent, ShipsComponent, ShipsDetailsComponent, PageOneComponent, PageTwoComponent, CharacterDetailComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forChild(routes),

    StoreModule.forRoot({ships: shipsReducer}),

    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [ShipsService, FilmsService, CharacterService,SpeciesService]
})
export class PagesModule {
}
