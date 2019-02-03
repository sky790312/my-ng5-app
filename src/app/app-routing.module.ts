import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HashtagPageComponent } from './hashtag-page/hashtag-page.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/hashtag-page', pathMatch: 'full' },
  { path: 'hashtag-page', component: HashtagPageComponent },
  { path: 'user-page', component: UserPageComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
