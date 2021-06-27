import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

@Injectable({
  // Provide this service throughout the app
  // Generally, always do like this one
  providedIn: 'root',
})
export class HeroService {
  getHero(id: number): Observable<Hero> {
    // ! means get the fuck on TS - it's not going to be null/undefined
    // TODO: Handle errors
    const hero = HEROES.find((hero) => hero.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  getHeroes(): Observable<Hero[]> {
    // of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
    // Observable is to manage asynchronous 💩
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes 🦸🏾‍♂️');
    return heroes;
  }

  // service-in-service
  constructor(private messageService: MessageService) {}
}
