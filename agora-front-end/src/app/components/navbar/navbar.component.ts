import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  bool: boolean;

  constructor() { }

  ngOnInit(): void {

    if (sessionStorage.currentUser) {
      this.bool = true;
      console.log(this.bool);
    } else {
      this.bool = false;
      console.log(this.bool);
    }

  }

}
