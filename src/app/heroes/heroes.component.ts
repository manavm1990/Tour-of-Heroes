import { Component } from '@angular/core';
import { HEROES } from '../mock-heroes';
import {Hero} from '../hero'

// Annotate our class with necessary metadata 👇🏾 using the Component DECORATOR from angular core
@Component({
  // CSS element selector
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
