import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Tweet } from './tweet';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TweetService {

  constructor(
    private http: HttpClient
  ) { }

  getTweetsByHashtag(hashtag: string): Observable<Tweet[]> {
    const tweetsUrl = `${environment.serverUrl}/hashtags/${hashtag}?pages_limit=3&wait=0`
    return this.http.get<Tweet[]>(tweetsUrl)
      .pipe(
        tap(tweets => console.log(tweets)),
        catchError(this.handleError('getTweets', []))
      );
  }

  getTweetsByUser(user: string): Observable<Tweet[]> {
    const tweetsUrl = `${environment.serverUrl}/users/${user}?pages_limit=3&wait=0`
    return this.http.get<Tweet[]>(tweetsUrl)
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
