import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  public queryParam: string;

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    console.log(this.queryParam);
    sessionStorage.setItem("queryParam", this.queryParam);
    location.href = "http://localhost:4200/query_articles"
  }

}
