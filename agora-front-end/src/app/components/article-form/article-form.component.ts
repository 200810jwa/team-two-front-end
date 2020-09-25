import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import { Article } from 'src/app/models/Article';
import {UserArticle} from 'src/app/models/user-article';
@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {

  plusSquare = faPlusSquare;
  publish = {
    user_id: null,
    title: "",
    description: "",
    image: null,
    publishedAt: null,
    content: "",
    status: null,

  }
  image_set = false;
  image: File;
  title: string;
  description: string;
  content: string;
  message;
  imageData;
  byteArray = [];
  imageReceived = false;
  showImage = null;

  displayImage;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }
    async sendImage() {
      try {
        this.publish.user_id = JSON.parse(sessionStorage.getItem("currentUser")).user_id;
        this.publish.image = this.displayImage.split(",")[1];
        this.publish.publishedAt = Date();
        this.publish.status = 2;
        let response = await this.http.post<UserArticle>("http://localhost:8080/Agora/article", this.publish).toPromise();
        console.log(response);
      } catch(error) {
        console.log(error);
      }
    }


    logger(){
      this.sendImage();
    }

    handleFileInput(files: FileList): void{
      if (files.length === 0) {
        return;
      }

      var mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (event) => {
        this.displayImage = reader.result;
      };

      // this.constructSixtyFourBit(files[0]);
      this.image_set = true;
    }

    remove_image(): void {
      this.displayImage = null;
      this.byteArray = [];
      this.imageData = null;
    }
}
