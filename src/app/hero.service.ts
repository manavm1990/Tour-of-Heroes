import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import {Observable, of } from 'rxjs'

@Injectable({
  // Provide this service throughout the app
  // Generally, always do like this one
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    // of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
    // Observable is to manage asynchronous 💩
    const heroes = of(HEROES);
    return heroes;
  }
}
