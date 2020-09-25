import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersArticlesListComponent } from './users-articles-list.component';

describe('UsersArticlesListComponent', () => {
  let component: UsersArticlesListComponent;
  let fixture: ComponentFixture<UsersArticlesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersArticlesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersArticlesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
