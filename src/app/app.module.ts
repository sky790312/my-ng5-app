import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { TweetService }          from './tweet.service';
import { UserSearchComponent } from './user-search/user-search.component';
import { HashtagSearchComponent } from './hashtag-search/hashtag-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    UserSearchComponent,
    HashtagSearchComponent,
  ],
  providers: [ TweetService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
