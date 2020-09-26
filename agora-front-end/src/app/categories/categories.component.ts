import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categoryLink(queryParam) {
    sessionStorage.setItem("queryParam", queryParam);
    location.href = "http://localhost:4200/query_articles"
  }

}
