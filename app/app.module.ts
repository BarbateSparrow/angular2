import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http'

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import {CitiesComponent} from './cities.component';

import { HeroService }         from './services/hero.service';
import {CitiesService} from "./services/cities.service";

import { routing } from './routing';
import {CityMastersComponent} from "./city-masters.component";



@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService),
      routing
  ],
  declarations: [
      AppComponent,
      HeroesComponent,
      HeroDetailComponent,
      DashboardComponent,
      CitiesComponent,
      CityMastersComponent
  ],
  providers: [
      HeroService,
      CitiesService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
}
