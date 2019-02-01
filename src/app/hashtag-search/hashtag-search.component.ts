import { Component, OnInit } from '@angular/core';
import { Tweet } from '../tweet';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'app-hashtag-search',
  templateUrl: './hashtag-search.component.html',
  styleUrls: ['./hashtag-search.component.scss']
})
export class HashtagSearchComponent implements OnInit {
  tweets: Tweet[];

  constructor(
    private TweetService: TweetService
  ) { }

  ngOnInit() {
    this.getTweets();
  }

  getTweets() {
    this.TweetService.getTweets()
      .subscribe(tweets => this.tweets = tweets);
  }
}
