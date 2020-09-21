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

}
