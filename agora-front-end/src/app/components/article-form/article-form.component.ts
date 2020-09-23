import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import { Article } from 'src/app/models/Article';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {

  plusSquare = faPlusSquare;
  publish = {
    user: null,
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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  constructSixtyFourBit(file: File) {
    const fileReader = new FileReader();
    let imgData = this.imageData; 
    if(file) {
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = () => {
            imgData = fileReader.result;
            // console.log(imgData);
            const arr = new Uint8Array(imgData);
            console.log(arr);
            for (let i = 0; i < arr.length; i++) {
              if (arr[i]){
              this.byteArray.push(arr[i]);
            }
          }
            console.log(this.byteArray);
        };
      }
    }


    async sendImage() {
      this.publish.user = sessionStorage.getItem("CurrentUser");
      this.publish.image = this.byteArray;
      this.publish.publishedAt = Date();
      this.publish.status = 2;
      // let response = await this.http.post<Article>("localhost:8080/article", this.publish).toPromise();

    }
  logger(){
    console.log(this.publish);
  }

    // file: null;
		// imageData: null;
		// byteArray: [];
	
		// fileUpload = document.getElementById("file-upload");
		// fileUploadBtn = document.getElementById("file-upload-btn");
		// fileName = document.getElementById("file-name");
		
		// fileUploadBtn.addEventListener("click", function() {
		// 	fileUpload.click();
		// });
		
		// fileUpload.addEventListener("change", function() {
		// 	console.log(fileUpload.files);
		// 	processFile();
		// 	if (fileUpload.value) {
		// 		fileName.innerHTML = fileUpload.value;
		// 	} else {
		// 		fileName.innerHTML = "No file chosen"
		// 	}
    // });
    
  //   processFile() {
  //     var fileList = fileUpload.files;
  //     var fileReader = new FileReader();
  //     if (fileReader && fileList && fileList.length) {
  //        fileReader.readAsArrayBuffer(fileList[0]);
  //        fileReader.onload = function () {
  //           imageData = fileReader.result;
  //           console.log(imageData);
  //           let arr = new Uint8Array(imageData);
  //           console.log(arr);
  //           for (let i = 0; i < arr.length; i++) {
  //             byteArray.push(arr[i]);
  //           }
  //           console.log(byteArray);
  //        };
  //     }
  //  }

  handleFileInput(files: FileList){
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
      this.publish.image = reader.result;
    };

    this.constructSixtyFourBit(files[0]);
    this.image_set = true;
  }


  remove_image() {
    this.publish.image = null;
    this.byteArray = [];
    this.imageData = null;
  }
}
