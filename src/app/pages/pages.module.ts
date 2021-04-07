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
import {ShipsService} from '../services/ships.service';
import {StoreModule} from "@ngrx/store";
import {shipsReducer} from "./ships/ships.reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../../environments/environment";

const routes: Routes = [{
  path: '', component: PrincipalComponent,
  children: [
    {
      path: '', redirectTo: 'ships', pathMatch: 'full'
    },
    {path: 'ships', component: ShipsComponent},
    {path: 'pageOne', component: PageOneComponent},
    {path: 'pageTwo', component: PageTwoComponent},
  ]
}];

@NgModule({
  declarations: [
    PrincipalComponent, ShipsComponent, ShipsDetailsComponent, PageOneComponent, PageTwoComponent
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
  providers: [ShipsService]
})
export class PagesModule {
}
