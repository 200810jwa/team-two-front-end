import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-display-user-article',
  templateUrl: './display-user-article.component.html',
  styleUrls: ['./display-user-article.component.scss']
})
export class DisplayUserArticleComponent implements OnInit {
  public articleId;
  constructor(private router: Router, private location: Location) { 
    console.log("Inside Display User Article Page" + this.router.getCurrentNavigation().extras.state.article_id);
    this.articleId = this.router.getCurrentNavigation().extras.state.article_id
  }

  ngOnInit(): void {
    if(sessionStorage.getItem("currentUser") == null || sessionStorage.getItem("currentUser") == undefined) {
      this.router.navigateByUrl("/landing");
    }


  }

}
