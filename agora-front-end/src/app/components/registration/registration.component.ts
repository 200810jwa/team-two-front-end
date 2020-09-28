import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/User';
import { ToggleService } from 'src/app/services/toggle.service';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public email: string;
  public firstname: string;
  public lastname: string;
  public username: string;
  public password: string;
  constructor(private http: HttpClient, private toggler: ToggleService) { }

  ngOnInit(): void {
  }

  async submitForm() {
    try{
      let user = await this.http.post<User>('http://ec2-3-134-94-196.us-east-2.compute.amazonaws.com:8085/Agora/user', {
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
  toggle(): void {
    this.toggler.changeMessage('Login');
  }
}
