import  { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './services/hero.service';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: '../views/dashboard.component.html',
    styleUrls: ['../styles/dashboard.component.css']
})

export class DashboardComponent implements OnInit {

    constructor(
        private heroService: HeroService,
        private router: Router
    ) {}

    heroes: Hero[] = [];

    ngOnInit(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero: Hero): void {
        this.router.navigate(['/detail', hero.id]);
        console.log(hero.id)
    }
}
