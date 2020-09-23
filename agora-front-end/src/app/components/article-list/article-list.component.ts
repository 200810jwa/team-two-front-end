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
  largeLeft: Article;
  middleTop: Article;
  middleMiddle: Article;
  middleBottom: Article;
  largeRight: Article;
  topStoriesResponse: TopHeadlinesResponse;
  articlesRecieved: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchTopStories().then(() => {
      this.articlesRecieved = true;
    }
    );
  }

  async fetchTopStories() {
    this.topStoriesResponse = await this.http.get<TopHeadlinesResponse>("http://newsapi.org/v2/top-headlines?country=us&apiKey=23db91fce4114ad381a0c3c8589a1b92").toPromise();
    this.articleList = this.topStoriesResponse.articles.filter((e) => {
      return e.description !== '' && e.urlToImage !== null;
    });

    this.largeLeft = this.articleList[0];
    this.middleTop = this.articleList[1];
    this.middleMiddle = this.articleList[2];
    this.middleBottom = this.articleList[3];
    this.largeRight = this.articleList[4];
  }
}
