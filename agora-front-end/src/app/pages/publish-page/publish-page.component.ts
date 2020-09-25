import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publish-page',
  templateUrl: './publish-page.component.html',
  styleUrls: ['./publish-page.component.scss']
})
export class PublishPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("currentUser") == null || sessionStorage.getItem("currentUser") == undefined) {
      this.router.navigateByUrl("/landing");
    }
  }

}
