import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

// Annotate our class with necessary metadata 👇🏾 using the Component DECORATOR from angular core
@Component({
  // CSS element selector
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  constructor(
    // private property heroService is an injection 💉 site for `HeroService` (singleton 1️⃣)
    private heroService: HeroService
  ) {}

  getHeroes() {
    this.heroService.getHeroes().
    // Wait for Observable to emit the array of heroes...
    subscribe(heroes => this.heroes = heroes)
  }

  ngOnInit() {
    this.getHeroes();
  }
}
