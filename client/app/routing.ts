import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import {HeroDetailComponent} from "./hero-detail.component";
import {CitiesComponent} from "./cities.component";
import {CityMastersComponent} from "./city-masters.component";

const appRoutes: Routes = [
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
    {
        path: 'cities',
        component: CitiesComponent
    },
    {
        path: 'cities/:link',
        component: CityMastersComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
