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
    content: "",
    image: null,
  }
  image_set = false;
  image: File;
  title: string;
  description: string;
  content: string;
  message;

  constructor() { }

  ngOnInit(): void {
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
    this.image_set = true;
  }


  remove_image() {
    this.publish.image = null;
  }
}
