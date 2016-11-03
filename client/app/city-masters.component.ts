import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from  '@angular/router';
import { Location } from '@angular/common'

import {City} from './city';
import {CitiesService} from './services/cities.service';

@Component({
    selector: 'city-masters',
    templateUrl: '../views/city-masters.html'
})

export class CityMastersComponent implements OnInit {
    constructor(
        private citiesService: CitiesService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    @Input()
    city: City;

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let city = params['link']
            this.citiesService.getCity(city).then(city => this.city = city);
        });
    }
}
