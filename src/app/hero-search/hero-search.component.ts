import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
})
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>;

  // `Subject` is a special type of Observable that also observes
  // `Subject` maintains a registry of listeners
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  // Push search term onto observable stream
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),

      // resets search observables to only latest is returned - preserves order
      // HTTP request might still be made, but results will be discarded
      switchMap((term: string) => this.heroService.searchHeroes(term))
    );
  }
}
