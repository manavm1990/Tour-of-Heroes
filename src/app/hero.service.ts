import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Hero } from './hero';
import { MessageService } from './message.service';

@Injectable({
  // Provide this service throughout the app
  // Generally, always do like this one
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = 'api/heroes';

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * This is set up to handle any TYPE of `Observable` result.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<Type>(operation = 'operation', result?: Type) {
    return (error: any): Observable<Type> => {
      // TODO: Send error to remote logger
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      // Return an empty result so app can keep 🏃🏾‍♂️
      return of(result as Type);
    };
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  // GET hero by id. '404' if not found!
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap((_) => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap((_) => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }

  // PUT: update hero 🦸🏾‍♂️
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((_) => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  // service-in-service
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}
}
