import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { UserArticle } from 'src/app/models/user-article';

@Component({
  selector: 'app-display-article',
  templateUrl: './display-article.component.html',
  styleUrls: ['./display-article.component.scss']
})
export class DisplayArticleComponent implements OnInit {

  @Input() articleId: number;

  public title;
  public img;
  public content;
  public articleReceived;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.setUpArticle();
  }


  async setUpArticle(){
    let response = await this.http.get<UserArticle>("http://localhost:8080/Agora/article/" + this.articleId).toPromise();

    this.title = response.title;
    this.img = "data:image/png;base64," + response.image;
    this.content = response.content;
    this.articleReceived = true;
  }
}
