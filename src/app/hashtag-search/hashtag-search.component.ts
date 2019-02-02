import { Component, OnInit } from '@angular/core';
import { PER_LIST_ITEMS_LENGTH } from '../constants';
import { Tweet } from '../tweet';
import { TweetService } from '../tweet.service';
import { ComParentChildService } from '../service/com-parent-child.service';
import { chunk } from '../utils';
@Component({
  selector: 'app-hashtag-search',
  templateUrl: './hashtag-search.component.html',
  styleUrls: ['./hashtag-search.component.scss']
})
export class HashtagSearchComponent implements OnInit {
  tweets: Tweet[];
  perListItemsLength: number;
  totalItemsLength: number;

  constructor(
    private TweetService: TweetService,
    private comparentchildservice: ComParentChildService 
  ) { }

  ngOnInit() {
    this.getTweets()
    this.subscription = this.comparentchildservice.on('call-parent').subscribe(() => this.parentFunction())
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onPageChange(pagination) {
    console.log('in parent function', pagination)
  }

  getTweets() {
    this.TweetService.getTweets()
      .subscribe(tweets => {
        this.tweets = chunk(tweets, PER_LIST_ITEMS_LENGTH)[0]
        this.totalItemsLength = tweets.length;
        this.perListItemsLength = PER_LIST_ITEMS_LENGTH;
      });
  }
}
