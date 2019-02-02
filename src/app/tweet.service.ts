import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Tweet } from './tweet';
import { truncate, formatDate } from './utils';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TweetService {

  constructor(
    private http: HttpClient
  ) { }

  getTweets(type: string, value: string): Observable<Tweet[]> {
    const tweetsUrl = `${environment.serverUrl}/${type}/${value}?pages_limit=3&wait=0`
    return this.http.get<Tweet[]>(tweetsUrl)
      .pipe(
        tap(tweets => console.log(tweets)),
        catchError(this.handleError('getTweets', []))
      );
  }

  formatTweets(tweets: Tweet[]) {
    return tweets.map(tweet => {
      tweet.text.length > 50
        ? truncate(tweet.text, 50)
        : tweet.text
      tweet.hashtags = (tweet.hashtags && tweet.hashtags.length) > 2
        ? tweet.hashtags.splice(2)
        : tweet.hashtags
      const dateArray = tweet.date.split('-')
      const date = new Date(dateArray[dateArray.length - 1])
      tweet.date = formatDate(date)
      return tweet
    })
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
