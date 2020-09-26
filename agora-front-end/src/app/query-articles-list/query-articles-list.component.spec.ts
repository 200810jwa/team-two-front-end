import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryArticlesListComponent } from './query-articles-list.component';

describe('QueryArticlesListComponent', () => {
  let component: QueryArticlesListComponent;
  let fixture: ComponentFixture<QueryArticlesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryArticlesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryArticlesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
