import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }     from './app-routing.module';
import { ComParentChildService } from './service/com-parent-child.service';
import { TweetService } from './tweet.service';

import { AppComponent }         from './app.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { HashtagSearchComponent } from './hashtag-search/hashtag-search.component';

import { ITableComponent } from './i-table/i-table.component';
import { IPaginationComponent } from './i-pagination/i-pagination.component';

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
    ITableComponent,
    IPaginationComponent,
  ],
  providers: [
    ComParentChildService,
    TweetService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
