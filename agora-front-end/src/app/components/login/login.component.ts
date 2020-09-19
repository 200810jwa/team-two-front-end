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

  public username: string;
  public password: string;
  constructor(private http: HttpClient, private toggler: ToggleService) { }

  ngOnInit(): void {
  }

  async submitForm() {
    try{
      let user = await this.http.post<User>('http://localhost:8080/Agora/user/login', {
        userName: this.username,
        password: this.password
      }
    ).toPromise();

      sessionStorage.setItem("currentUser", JSON.stringify(user));
      console.log(JSON.stringify(user));
      
    } catch(error) {
      console.log(error);
    }
  }

  toggle() {
    this.toggler.changeMessage('Registration');
  }
 
}
