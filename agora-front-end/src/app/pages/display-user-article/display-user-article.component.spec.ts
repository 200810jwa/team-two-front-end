import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayUserArticleComponent } from './display-user-article.component';

describe('DisplayUserArticleComponent', () => {
  let component: DisplayUserArticleComponent;
  let fixture: ComponentFixture<DisplayUserArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayUserArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayUserArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
