import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  selectedFile: File;
  fileName: string;
  fileSize: string;
  url: string;

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile){
      let reader = new FileReader();
      reader.onload = (e: any) => {
        this.url = e.target.result;
      }
      this.fileName = this.selectedFile.name;
      this.fileSize = this.convertBytes(this.selectedFile.size, 2);
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onUpload() {
    // upload code goes here
  }

  convertBytes(a,b){
    if(0==a){
      return"0 Bytes";
    }
    var c=1024,d=b||2,e=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],f=Math.floor(Math.log(a)/Math.log(c));
    return parseFloat((a/Math.pow(c,f)).toFixed(d))+" "+e[f];
  }

}