import { Component, OnInit } from '@angular/core';
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {

  plusSquare = faPlusSquare;
  publish = {
    title: "",
    description: "",
    content: ""
  }
  image: File;
  title: string;
  description: string;
  content: string;

  constructor() { }

  ngOnInit(): void {
  }


  logger(){
    console.log(this.publish);
  }

}
