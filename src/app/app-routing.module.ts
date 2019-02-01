import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HashtagSearchComponent } from './hashtag-search/hashtag-search.component';
import { UserSearchComponent } from './user-search/user-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/hashtag-search', pathMatch: 'full' },
  { path: 'hashtag-search', component: HashtagSearchComponent },
  { path: 'user-search', component: UserSearchComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
