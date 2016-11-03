import {Component, OnInit} from '@angular/core'
import {CitiesService} from "./services/cities.service";
import {RouterModule, Router} from "@angular/router";
import {City} from "./city";

@Component({
    selector: 'cities',
    templateUrl: '../views/cities.component.html'
})

export class CitiesComponent implements OnInit{

    constructor(
        private citiesService: CitiesService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.getCities();
    }

    cities: City[];
    selectedCity: City;

    getCities(): void {
        this.citiesService.getCities().then(cities => this.cities = cities);
    }

    gotoCity(city: City): void {
        this.router.navigate(['/cities', city.link]);
        console.log(city)
    }

}
