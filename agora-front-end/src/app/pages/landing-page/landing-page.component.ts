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

    this.fetchTopStories();

  }


  async fetchTopStories() {
    this.topStoriesResponse = await this.http.get<TopHeadlinesResponse>("http://newsapi.org/v2/top-headlines?country=us&apiKey=23db91fce4114ad381a0c3c8589a1b92").toPromise();

    console.log(this.topStoriesResponse.totalResults);
    console.log(this.topStoriesResponse.articles);
  }

}
