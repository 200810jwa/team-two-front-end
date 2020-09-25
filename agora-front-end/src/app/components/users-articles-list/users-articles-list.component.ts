import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/Article';

@Component({
  selector: 'app-users-articles-list',
  templateUrl: './users-articles-list.component.html',
  styleUrls: ['./users-articles-list.component.scss']
})
export class UsersArticlesListComponent implements OnInit {

  public articles;
  public user_id;
  constructor(private http: HttpClient) { 
    this.user_id = 22;
  }

  ngOnInit(): void {
    this.getArticles();

  }

  async getArticles() {
    let response = await this.http.get<Article[]>("http://localhost:8080/Agora/user/" + this.user_id + "/articles").toPromise();

    this.articles = response;

  }

}
