import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IPaginationComponent } from './i-pagination.component';

describe('IPaginationComponent', () => {
  let component: IPaginationComponent;
  let fixture: ComponentFixture<IPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
