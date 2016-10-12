import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";
// import {CITIES} from '../mocks/cities';
import 'rxjs/add/operator/toPromise';
import {City} from "../city";

@Injectable()
export class CitiesService {
    private citiesUrl = 'app/cities';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getCities(): Promise<City[]> {
        return this.http.get(this.citiesUrl)
            .toPromise()
            .then(response => response.json().data as City[]);
    }

    getCity(link: string): Promise<City> {
        return this.getCities().then(cities => cities.find(city => city.link === link));
    }
}
