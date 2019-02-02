import { Component, OnInit } from '@angular/core';
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
  tweets: Tweet[]
  filterTweets: Tweet[]
  perListItemsLength: number
  totalItemsLength: number

  constructor(
    private TweetService: TweetService,
  ) { }

  ngOnInit() {
    this.getTweets()
  }

  onPageChange(pagination: number) {
    this.filterTweets = [].concat([], this.tweets[pagination - 1])
  }

  getTweets() {
    this.TweetService.getTweets()
      .subscribe(tweets => {
        this.tweets = chunk(tweets, PER_LIST_ITEMS_LENGTH)
        this.filterTweets = [].concat([], this.tweets[0])
        this.totalItemsLength = tweets.length;
        this.perListItemsLength = PER_LIST_ITEMS_LENGTH;
      });
  }
}
