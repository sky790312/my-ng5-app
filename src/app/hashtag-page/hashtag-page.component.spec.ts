import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs/observable/of';
import { TWEETS } from '../mock-tweets';
import { TweetService } from '../tweet.service';

import { HashtagPageComponent } from './hashtag-page.component';
import { ITableComponent } from '../i-table/i-table.component';
import { IPaginationComponent } from '../i-pagination/i-pagination.component';

describe('HashtagPageComponent', () => {
  let component: HashtagPageComponent;
  let fixture: ComponentFixture<HashtagPageComponent>;
  let tweetService;
  let getTweetsSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HashtagPageComponent,
        ITableComponent,
        IPaginationComponent
      ]
    })
      .compileComponents();

    tweetService = jasmine.createSpyObj('TweetService', ['getTweets']);
    getTweetsSpy = tweetService.getTweets.and.returnValue(of(TWEETS));
    TestBed.configureTestingModule({
      declarations: [
        HashtagPageComponent
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
    fixture = TestBed.createComponent(HashtagPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call tweetService', async(() => {
    expect(getTweetsSpy.calls.any()).toBe(true);
  }));

  it('should display 4 links', async(() => {
    expect(fixture.nativeElement.querySelectorAll('a').length).toEqual(4);
  }));
});
