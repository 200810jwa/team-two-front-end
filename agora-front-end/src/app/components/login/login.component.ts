import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToggleService } from 'src/app/services/toggle.service';
import {User} from '../../models/User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private toggler: ToggleService) { }

  ngOnInit(): void {
  }

  toggle() {
    this.toggler.changeMessage('Registration');
  }
 
}
