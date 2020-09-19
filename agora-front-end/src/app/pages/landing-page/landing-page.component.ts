import { Component, OnInit } from '@angular/core';
import {ToggleService} from '../../services/toggle.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public message: string;
  public anti_message: string;
  constructor(private toggler: ToggleService, private router: Router) { 
   
  }
  ngOnInit(): void {
    this.toggler.currentMessage.subscribe((message) => this.message = message);
    this.toggler.antiMessage.subscribe((antiMessage) => this.anti_message = antiMessage);
  }

}
