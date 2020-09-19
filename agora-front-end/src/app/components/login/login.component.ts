import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

 
}
