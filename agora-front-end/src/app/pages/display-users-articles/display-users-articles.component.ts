import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-users-articles',
  templateUrl: './display-users-articles.component.html',
  styleUrls: ['./display-users-articles.component.scss']
})
export class DisplayUsersArticlesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("currentUser") == null || sessionStorage.getItem("currentUser") == undefined) {
      this.router.navigateByUrl("/landing");
    }
  }

}
