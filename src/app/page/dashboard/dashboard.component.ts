import { Component, OnInit } from '@angular/core';

import { Hero } from '../../entity/hero';
import { HeroService } from '../../service/hero';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],

})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(private _heroService: HeroService) { }

    ngOnInit(): void {
        this._heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }
}