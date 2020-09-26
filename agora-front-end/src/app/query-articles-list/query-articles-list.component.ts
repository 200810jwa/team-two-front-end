import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/Article';

@Component({
  selector: 'app-query-articles-list',
  templateUrl: './query-articles-list.component.html',
  styleUrls: ['./query-articles-list.component.scss']
})
export class QueryArticlesListComponent implements OnInit {

  public articles;
  public queryParam;
  public articlesReceived;
  public category: string;

  constructor(private http: HttpClient, private router: Router) { 
    this.queryParam = sessionStorage.getItem("queryParam");
    this.queryParam = this.queryParam.split('');
    this.queryParam[0] = this.queryParam[0].toUpperCase();
    this.category = this.queryParam.join('');
  }

  ngOnInit(): void {
    this.getArticles(this.queryParam);
  }

  async getArticles(queryParam) {
    let response = await this.http.get<Article[]>("http://newsapi.org/v2/everything?q=" + queryParam + "&apiKey=23db91fce4114ad381a0c3c8589a1b92").toPromise();
    

    this.articles = response;

    this.articlesReceived = true;

    console.log(this.articles);
    console.log(this.articles.articles);

  }

}
