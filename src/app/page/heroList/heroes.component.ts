import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from "@angular/router";

import { Hero } from '../../entity/hero';
import { HeroService } from '../../service/hero';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})


export class HeroesComponent implements OnInit {
  constructor(private _heroService: HeroService,
    private router: Router) {
  }

  title = 'The heroes';
  heroes: Hero[];
  selectedHero: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) {
    console.log(hero);
    this.selectedHero = hero;
  }

  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  //---------------CRUD-----------------------
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this._heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this._heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }
}
