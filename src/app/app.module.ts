import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }     from './app-routing.module';
import { TweetService } from './tweet.service';

import { AppComponent }         from './app.component';
import { UserPageComponent } from './user-page/user-page.component';
import { HashtagPageComponent } from './hashtag-page/hashtag-page.component';

import { ITableComponent } from './i-table/i-table.component';
import { IPaginationComponent } from './i-pagination/i-pagination.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    UserPageComponent,
    HashtagPageComponent,
    ITableComponent,
    IPaginationComponent,
  ],
  providers: [
    TweetService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
