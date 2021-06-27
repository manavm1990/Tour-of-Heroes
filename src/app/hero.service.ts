import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  // Provide this service throughout the app
  // Generally, always do like this one
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Hero[] {
    return HEROES
  }
}
