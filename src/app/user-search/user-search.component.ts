import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/mergeMap';
import "rxjs/add/operator/map";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { PER_LIST_ITEMS_LENGTH } from '../constants';
import { Tweet } from '../tweet';
import { TweetService } from '../tweet.service';
import { chunk, truncate, formatDate } from '../utils';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  tweets: Tweet[]
  filterTweets: Tweet[]
  perListItemsLength: number
  totalItemsLength: number
  onUserSearch = new Subject<string>()

  constructor(
    private TweetService: TweetService,
  ) {
    this.onUserSearchListener()
  }

  ngOnInit() {
    // this.getTweetsByUser('Twitter')
  }

  onPageChange(pagination: number) {
    this.filterTweets = [].concat([], this.tweets[pagination - 1])
  }

  onUserSearchListener() {
    this.onUserSearch
      .map(value => (event.target as HTMLInputElement).value)
      .debounceTime(300)
      .distinctUntilChanged()
      .flatMap(search => Observable.of(search).delay(300))
      .subscribe(user => this.getTweetsByUser(user))
  }

  getTweetsByUser(user: string) {
    this.TweetService.getTweetsByUser(user)
      .subscribe(tweets => {
        const formatTweets = this.formatTweets(tweets)
        this.tweets = chunk(formatTweets, PER_LIST_ITEMS_LENGTH)
        this.filterTweets = [].concat([], this.tweets[0])
        this.totalItemsLength = tweets.length
        this.perListItemsLength = PER_LIST_ITEMS_LENGTH
      })
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
}
