import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './services/hero.service';
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "my-heroes",
    templateUrl: "../views/heroes.component.html",
    styleUrls: ['../styles/hero.component.css'],

})

export class HeroesComponent implements OnInit{

    constructor(
        private heroService: HeroService,
        private router: Router
    ) {

    }

    ngOnInit(): void {
        this.getHeroes();
    }

    heroes: Hero[];
    selectedHero: Hero;
    // hero: Hero = {
    //     id: 1,
    //     name: 'windstorm'
    // };

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id])
    }

    add(name: string): void {
        name = name.trim();
        if (!name) return ;
        this.heroService.create(name).then(hero => {
            this.heroes.push(hero);
            this.selectedHero = null;
        });
    }

    delete(hero: Hero): void {
        this.heroService.delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) this.selectedHero = null;
            });
    }
}
