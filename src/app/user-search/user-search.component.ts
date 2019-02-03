import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap
} from "rxjs/operators";

import { PER_LIST_ITEMS_LENGTH } from '../constants';
import { Tweet } from '../tweet';
import { TweetService } from '../tweet.service';
import { chunk } from '../utils';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  tweets: Tweet[] = []
  filterTweets: Tweet[] = []
  perListItemsLength: number
  totalItemsLength: number
  hasSearch: boolean = false
  isLoading: boolean = false
  searchInput: FormControl

  constructor(
    private TweetService: TweetService,
  ) {
  }

  ngOnInit() {
    this.initSearchListener()
  }

  initSearchListener() {
    this.searchInput = new FormControl()
    this.searchInput.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      tap(_ => {
        this.isLoading = true
        this.filterTweets = []
        this.totalItemsLength = 0
      }),
      switchMap(user => this.TweetService.getTweets('users', user)),
      tap(_ => this.isLoading = false)
    )
      .subscribe(tweets => this.handleAfterFetchTweets(tweets))
  }

  onPageChange(pagination: number) {
    this.filterTweets = [].concat([], this.tweets[pagination - 1])
  }

  handleAfterFetchTweets(tweets: Tweet[]) {
    if (!this.hasSearch) {
      this.hasSearch = true
    }
    if (!tweets.length) {
      return
    }

    const formatTweets = this.TweetService.formatTweets(tweets)
    this.tweets = chunk(formatTweets, PER_LIST_ITEMS_LENGTH)
    this.filterTweets = [].concat([], this.tweets[0])
    this.totalItemsLength = tweets.length
    this.perListItemsLength = PER_LIST_ITEMS_LENGTH
  }
}
