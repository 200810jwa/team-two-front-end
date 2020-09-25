import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayUsersArticlesComponent } from './display-users-articles.component';

describe('DisplayUsersArticlesComponent', () => {
  let component: DisplayUsersArticlesComponent;
  let fixture: ComponentFixture<DisplayUsersArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayUsersArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayUsersArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
