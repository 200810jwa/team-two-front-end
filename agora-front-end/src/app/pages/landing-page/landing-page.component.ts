import { Component, OnInit } from '@angular/core';
import {ToggleService} from '../../services/toggle.service';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {TopHeadlinesResponse} from '../../models/top-headlines-response';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public message: string;
  public anti_message: string;
  public topStoriesResponse;
  constructor(private toggler: ToggleService, private router: Router, private http: HttpClient) { 
   
  }
  ngOnInit(): void {
    this.toggler.currentMessage.subscribe((message) => this.message = message);
    this.toggler.antiMessage.subscribe((antiMessage) => this.anti_message = antiMessage);
  }
  }


