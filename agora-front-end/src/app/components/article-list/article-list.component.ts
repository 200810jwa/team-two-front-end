import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/Article';
import { TopHeadlinesResponse } from 'src/app/models/top-headlines-response';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articleList: Article[];
  topStoriesResponse: TopHeadlinesResponse;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchTopStories();
  }

  async fetchTopStories() {
    this.topStoriesResponse = await this.http.get<TopHeadlinesResponse>("http://newsapi.org/v2/top-headlines?country=us&apiKey=23db91fce4114ad381a0c3c8589a1b92").toPromise();
    this.articleList = this.topStoriesResponse.articles;
  }
}
