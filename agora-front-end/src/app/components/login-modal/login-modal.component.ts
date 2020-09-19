import { Component, OnInit } from '@angular/core';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  public message: string;
  constructor(private toggler: ToggleService ) { }

  ngOnInit(): void {
    this.toggler.currentMessage.subscribe((message) => this.message = message);
  }
}
