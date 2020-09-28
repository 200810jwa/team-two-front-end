import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/Article';

@Component({
  selector: 'app-users-articles-list',
  templateUrl: './users-articles-list.component.html',
  styleUrls: ['./users-articles-list.component.scss']
})
export class UsersArticlesListComponent implements OnInit {

  public articles;
  public user_id;
  constructor(private http: HttpClient, private router: Router) { 
    this.user_id = JSON.parse(sessionStorage.getItem("currentUser")).user_id;
  }

  ngOnInit(): void {
    this.getArticles();
  }

  async getArticles() {
    let response = await this.http.get<Article[]>("http://ec2-3-134-94-196.us-east-2.compute.amazonaws.com:8085/Agora/user/" + this.user_id + "/articles").toPromise();

    this.articles = response;

  }

  routeToArticle(article_id){
    console.log(article_id);
    this.router.navigateByUrl('/user_article', {
      state: {
        article_id: article_id,
      }
    });
  }
}
