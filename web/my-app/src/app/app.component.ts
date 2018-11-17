// import { Component, OnInit, EventEmitter, Output, ViewContainerRef } from '@angular/core';
// import { AppService } from './app.service';
// import { HttpErrorResponse } from '@angular/common/http';

// class FileSnippet {
//   static readonly IMAGE_SIZE = {width: 950, height: 720};

//   pending: boolean = false;
//   status: string = 'INIT';

//   constructor(public src: string, public file: File) {}
// }

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {

//   @Output() imageUploaded = new EventEmitter();
//   @Output() imageError = new EventEmitter();
//   @Output() imageLoadedToContainer = new EventEmitter();

//   selectedFile: FileSnippet;
//   imageChangedEvent: any;

//   constructor(private imageService: AppService) {
//   }

//   private onSucces(imageUrl: string) {
//     this.selectedFile.pending = false;
//     this.selectedFile.status = 'OK';
//     this.imageChangedEvent = null;
//     this.imageUploaded.emit(imageUrl);
//   }

//   private onFailure() {
//     this.selectedFile.pending = false;
//     this.selectedFile.status = 'FAIL';
//     this.imageChangedEvent = null;
//     this.imageError.emit('');
//   }

//   imageLoaded() {
//     this.imageLoadedToContainer.emit();
//   }

//   passImage(event: any) {
//     this.selectedFile = undefined;

//     const URL = window.URL;
//     let file, img;
//     this.imageChangedEvent = event;
//         console.log("hello")
//     this.selectedFile = true;
//     // if (file = event.target.files[0]) {
//       // img = new Image();

//       // const self = this;
//       // img.onload = function() {
//       //   self.imageChangedEvent = event;
//       // }

//       // img.src = URL.createObjectURL(file);
//     // } else {
//     // }
//   }

//   uploadImage() {
//     if (this.selectedFile) {
//       const reader = new FileReader();

//       reader.addEventListener('load', (event: any) => {
//         this.selectedFile.src = event.target.result;

//         this.selectedFile.pending = true;
//         this.imageService.uploadImage(this.selectedFile.file).subscribe(
//           (imageUrl: string) => {
//             this.onSucces(imageUrl);
//           },
//           (errorResponse: HttpErrorResponse) => {
//             this.onFailure();
//           })
//       });

//     reader.readAsDataURL(this.selectedFile.file);
//     }
//   }
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  selectedFile: File;

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }

  onUpload() {
    // upload code goes here
  }
}