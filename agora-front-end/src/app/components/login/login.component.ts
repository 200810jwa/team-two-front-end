import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  public email: string;
  public firstname: string;
  public lastname: string;
  public username: string;
  public password: string;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  async submitForm() {
    try{
      let user = await this.http.post<User>('http://localhost:8080/Agora/user', {
        userName: this.username,
        firstName: this.firstname,
        lastName: this.lastname,
        email: this.email,
        password: this.password
      }
    ).toPromise();

      sessionStorage.setItem("currentUser", JSON.stringify(user));
      console.log(JSON.stringify(user));
    } catch(error) {
      console.log(error);
    }
  }
}
