import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayQueryArticlesComponent } from './display-query-articles.component';

describe('DisplayQueryArticlesComponent', () => {
  let component: DisplayQueryArticlesComponent;
  let fixture: ComponentFixture<DisplayQueryArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayQueryArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayQueryArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
