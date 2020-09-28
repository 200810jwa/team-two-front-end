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

  public nonExistentUsername;
  constructor(private http: HttpClient, private toggler: ToggleService) { }

  ngOnInit(): void {
  }

  async submitForm() {
    try{
      let user = await this.http.post<User>('http://ec2-3-134-94-196.us-east-2.compute.amazonaws.com:8085/Agora/user/login', {
        userName: this.username,
        password: this.password
      }
    ).toPromise();

      sessionStorage.setItem("currentUser", JSON.stringify(user));
      console.log(JSON.stringify(user));
      this.username = '';
      this.password = '';
      location.reload();
      
    } catch(error) {
      console.log(error.status);

      if(error.status == 450) {
        this.nonExistentUsername = true;
      }
    }
  }

  toggle() {
    this.toggler.changeMessage('Registration');
  }
 
}
