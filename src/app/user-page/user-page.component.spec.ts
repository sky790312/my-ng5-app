import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs/observable/of';
import { TWEETS } from '../mock-tweets';
import { TweetService } from '../tweet.service';

import { UserPageComponent } from './user-page.component';
import { ITableComponent } from '../i-table/i-table.component';
import { IPaginationComponent } from '../i-pagination/i-pagination.component';


describe('UserPageComponent', () => {
  let component: UserPageComponent;
  let fixture: ComponentFixture<UserPageComponent>;
  let tweetService;
  let getTweetsSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      declarations: [
        UserPageComponent,
        ITableComponent,
        IPaginationComponent
      ]
    })
      .compileComponents();

    tweetService = jasmine.createSpyObj('TweetService', ['getTweets']);
    getTweetsSpy = tweetService.getTweets.and.returnValue(of(TWEETS));
    TestBed.configureTestingModule({
      declarations: [
        UserPageComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        { provide: TweetService, useValue: tweetService }
      ]
    })
      .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should call tweetService', async(() => {
  //   expect(getTweetsSpy.calls.any()).toBe(true);
  // }));
});
