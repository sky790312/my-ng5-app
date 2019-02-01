import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Tweet } from './tweet';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TweetService {

  private tweetsUrl = 'https://am-twitter-scrape.herokuapp.com/hashtags/Python?pages_limit=3&wait=0';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  getTweets (): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(this.tweetsUrl)
      .pipe(
        tap(tweets => console.log(tweets)),
        catchError(this.handleError('getTweets', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
