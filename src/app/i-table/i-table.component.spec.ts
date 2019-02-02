import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ITableComponent } from './i-table.component';

describe('ITableComponent', () => {
  let component: ITableComponent;
  let fixture: ComponentFixture<ITableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
