import { Component } from '@angular/core';
import { Hero } from '../hero';

// Annotate our class with necessary metadata 👇🏾 using the Component DECORATOR from angular core
@Component({
  // CSS element selector
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  hero: Hero = { id: 1, name: 'Windstorm' };

  constructor() {}
}
