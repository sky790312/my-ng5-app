import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import "rxjs/add/operator/map";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { PER_LIST_ITEMS_LENGTH } from '../constants';
import { Tweet } from '../tweet';
import { TweetService } from '../tweet.service';
import { chunk } from '../utils';
@Component({
  selector: 'app-hashtag-search',
  templateUrl: './hashtag-search.component.html',
  styleUrls: ['./hashtag-search.component.scss']
})
export class HashtagSearchComponent implements OnInit {
  tweets: Tweet[] = []
  filterTweets: Tweet[] = []
  perListItemsLength: number
  totalItemsLength: number
  onHashtagSearch = new Subject<string>()

  constructor(
    private TweetService: TweetService,
  ) {
    this.onHashtagSearchListener()
  }

  ngOnInit() {
    // this.getTweets('hashtags', 'Python')
  }

  onPageChange(pagination: number) {
    this.filterTweets = [].concat([], this.tweets[pagination - 1])
  }

  onHashtagSearchListener() {
    this.onHashtagSearch
      .map(value => (event.target as HTMLInputElement).value)
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(search => Observable.of(search).delay(300))
      .subscribe(hashtag => this.getTweets('hashtags', hashtag))
  }

  getTweets(type: string, value: string) {
    this.TweetService.getTweets(type, value)
      .subscribe(tweets => {
        if (!tweets.length) {
          this.filterTweets = []
          this.totalItemsLength = 0
          return
        }

        const formatTweets = this.TweetService.formatTweets(tweets)
        this.tweets = chunk(formatTweets, PER_LIST_ITEMS_LENGTH)
        this.filterTweets = [].concat([], this.tweets[0])
        this.totalItemsLength = tweets.length
        this.perListItemsLength = PER_LIST_ITEMS_LENGTH
      })
  }
}
